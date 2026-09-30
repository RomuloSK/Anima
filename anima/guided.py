"""Small-context director interface. Numerical generation stays in the engine."""
import json
from pathlib import Path
from .recipes import catalog,construct
from .quality import assert_releasable,release_report,compact_report,rebuild_derived
from .exports import export

INSTRUCTIONS='''Choose a recipe with list_motion_recipes; copy its exact id.
Call create_animation with that recipe. Omit controls to preserve the reference.
The engine creates the rig, reconstructs geometry and runs release checks.
Read status and issues. To change a take use revise_animation; never author raw
joint rotations, invent IDs, replace a performer reference with unrelated mocap,
or claim a null check passed. finish_animation creates local export files.
Use returned paths when delivering files. A saved clip is not an MP4.
For a serve-and-return video, create zverev_serve and forehand_return, then
finish the return with serve_clip_id set to the serve's returned clip_id.
The forehand preset enforces arm/torso clearance and bounded arm articulation.
Legacy captures without this body profile report these checks as unknown.
Report dependency failures honestly. New video movements need reference
observations; the engine does not see or understand raw footage. No Qwen benchmark is
claimed. These tools work independently of the model's parameter count.
In the all-tools profile, custom whole-body motion uses describe_body_controls,
preview_body_pose and animate_body. Discover coordinate names, send sparse keys,
and read adjusted ranges and requested/actual timing. Do not disable constraints.'''


def response(clip):
    phases=[]
    for f in clip['frames']:
        label=f.get('phase')
        if label and (not phases or phases[-1]['name']!=label):phases.append({'name':label,'time':round(f['time'],4)})
    return {'clip_id':clip['id'],'recipe':clip['recipe_id'],'name':clip['rig']['name'],'timing':clip.get('timing'),
            'duration':clip['duration'],'frame_count':len(clip['frames']),'fps':clip['fps'],
            'controls':clip['director_spec'],'phases':phases,'quality':compact_report(clip,clip['evaluation']),
            'next_call':{'name':'finish_animation','arguments':{'clip_id':clip['id'],'formats':['mp4']}},
            'notes':clip['notes'][-2:]}


def save(engine,clip):
    # Only harmless cached-data repair is automatic. Persistent geometric
    # failures stop before any character/clip is saved.
    clip=rebuild_derived(clip);report=assert_releasable(clip)
    clip['rig']=engine.store.put('character',clip['rig']);clip['evaluation']=report
    return response(engine.store.put('clip',clip))


def finish(engine,clip,formats,quality='final'):
    if clip.get('scene') and any(fmt not in ('mp4','json') for fmt in formats):
        raise ValueError('Court scenes export as MP4 or JSON; export individual actor clips for BVH/glTF')
    report=assert_releasable(clip)
    folder=engine.store.directory/'exports';folder.mkdir(exist_ok=True)
    results=[]
    for fmt in dict.fromkeys(formats):
        path=folder/(clip['id']+'.'+fmt)
        if fmt=='mp4':
            from .video import render_video
            results.append(render_video(clip,path,quality));continue
        text=export(clip,fmt);tmp=path.with_suffix('.'+fmt+'.tmp')
        tmp.write_text(text,encoding='utf-8');tmp.replace(path)
        results.append({'format':fmt,'status':'ready','path':str(path),'bytes':path.stat().st_size,
                        'skeleton_only':fmt in ('bvh','gltf')})
    ready=all(x['status']=='ready' for x in results)
    return {'clip_id':clip['id'],'status':'ready' if ready else 'export_incomplete','files':results,
            'quality':compact_report(clip,report),
            'next_step':'Deliver the returned files.' if ready else 'Read each failed export and resolve its reported dependency or error.'}


def call(engine,name,a):
    if name=='list_motion_recipes':
        return {'recipes':catalog(engine.store,a['query']),
                'workflow':['create_animation','inspect_animation','revise_animation (optional)','finish_animation'],
                'instructions':INSTRUCTIONS,
                'reference_inbox':str(engine.store.directory/'references')}
    if name=='create_animation':
        spec={k:v for k,v in a.items() if v is not None}
        return save(engine,construct(engine.store,spec))
    if name=='import_reference_motion':
        from .reference_motion import validate_manifest,reconstruct
        filename=a['manifest_file']
        if Path(filename).name!=filename or not filename.endswith('.json'):
            raise ValueError('manifest_file must be a plain JSON filename inside the reference inbox')
        inbox=(engine.store.directory/'references').resolve();path=(inbox/filename).resolve()
        if not path.is_relative_to(inbox) or not path.is_file():
            raise ValueError('Place the fitted reference JSON in '+str(inbox)+' and pass its filename')
        if path.stat().st_size>2_000_000:raise ValueError('Reference manifest exceeds 2 MB')
        manifest=json.loads(path.read_text())
        if isinstance(manifest,dict) and manifest.get('kind')=='human_racket_reference_2d':
            from .reference_lifting import lift_2d
            manifest=lift_2d(manifest)
        validate_manifest(manifest)
        clip=reconstruct(manifest);clip['quality_policy']={'forward_knees':True,'rotation_step_limit_deg':45}
        lifting=manifest.get('lifting_report')
        warnings=[]
        if lifting and lifting['solver_converged_frames']<lifting['observed_frames']:
            warnings.append('Some monocular fit frames stopped before convergence. Review the fitted depth and source observations; geometry checks do not establish reference accuracy.')
        clip['notes'].extend(warnings)
        assert_releasable(clip)
        recipe=engine.store.put('recipe',{'name':manifest['name'],'species':'human',
            'backend':'video_guided_reconstruction','height':clip['rig']['height'],'mass':clip['rig']['mass'],
            'duration':clip['duration'],'limitations':'Fitted reference tracks; occlusion, depth, anatomy and ball flight remain estimated.',
            'source':manifest['source'],'clip':clip,'manifest':manifest,'best_for':[manifest['name']]})
        return {'recipe_id':recipe['id'],'status':'ready','next_call':{'name':'create_animation','arguments':{'recipe':recipe['id']}},
                'quality':compact_report(clip),'lifting_report':manifest.get('lifting_report'),'warnings':warnings}
    clip=engine.store.get(a['clip_id'],'clip')
    if name=='inspect_animation':
        return {'clip_id':clip['id'],'recipe':clip.get('recipe_id'),'quality':compact_report(clip),
                'controls':clip.get('director_spec') or clip.get('body_request'),'source':clip.get('source'),'timing':clip.get('timing')}
    if name=='revise_animation':
        if 'director_spec' not in clip:raise ValueError('This is an advanced clip. Create a guided animation from a recipe first.')
        spec=dict(clip['director_spec']);spec.update({k:v for k,v in a.items() if k!='clip_id'})
        # Regenerate from the immutable source; repeated revisions cannot drift.
        return save(engine,construct(engine.store,spec))
    if name=='finish_animation':
        if a.get('serve_clip_id'):
            from .tennis_scene import compose_rally
            clip=compose_rally(engine.store.get(a['serve_clip_id'],'clip'),clip)
        return finish(engine,clip,a['formats'],a['quality'])
    raise ValueError('Unknown guided tool')
