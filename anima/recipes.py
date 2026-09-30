"""Reusable recipes keep numerical animation work outside the language model."""
import copy
import gzip
import json
import math
from bisect import bisect_right
from pathlib import Path
from .math3d import add, mul, rotate, euler_quat, qmul, slerp
from .rigs import make_rig, fk
from .motion import generate
from .recorded import load_recorded_serve
from .constraints import attachment_transform

DATA=Path(__file__).parent/'data'
BUILTINS=[
    {'id':'forehand_return','name':'Compact forehand serve return','species':'human',
     'backend':'constrained_kinematic','height':1.88,'mass':83,'duration':4.65,
     'source':'Coordinated procedural return preset with body-aware IK, not player capture.',
     'best_for':['tennis','return','forehand'],
     'limitations':'Arm/torso envelope and arm articulation are checked; dynamics and player-specific technique are not established.'},
    {'id':'zverev_serve','name':'Alexander Zverev reference serve','species':'human',
     'backend':'video_guided_reconstruction','height':1.98,'mass':90,'duration':2.7,
     'source':'User-supplied video, 00:06–00:33; traced/fitted reference poses.',
     'best_for':['zverev','tennis','reference serve'],
     'limitations':'Monocular depth, occluded joints and playback speed are estimates.'},
    {'id':'recorded_serve','name':'Recorded body-and-racket serve','species':'human',
     'backend':'motion_capture','height':1.75,'mass':75,'duration':300/180,
     'source':'University of Bath, BATH-01454, CC BY 4.0.',
     'best_for':['tennis','serve','recorded'],'limitations':'Different performer; not Zverev.'},
]+[{'id':species+'_'+action,'name':species.title()+' '+action,'species':species,
    'backend':'procedural','height':1.75 if species=='human' else .65,
    'mass':75 if species=='human' else 22,'duration':4.2 if action=='serve' else 4,
    'best_for':[species,action],'limitations':'Procedural reference; quality differs from captured/video-fitted motion.'}
   for species,actions in [('human',['idle','walk','run','squat','jump','wave','serve']),('dog',['idle','walk','trot'])]
   for action in actions]


def catalog(store,query=''):
    entries=copy.deepcopy(BUILTINS)
    entries.extend({k:v for k,v in recipe.items() if k not in ('clip','manifest')}
                   for recipe in store.list('recipe'))
    words=query.lower().split()
    if words:
        scored=[(sum(word in (' '.join(entry.get('best_for',[]))+' '+entry['name']).lower()
                     for word in words),i,entry) for i,entry in enumerate(entries)]
        entries=[entry for score,i,entry in sorted(scored,key=lambda x:(-x[0],x[1])) if score]
    return entries


def get_recipe(store,ident):
    builtin=next((r for r in BUILTINS if r['id']==ident),None)
    if builtin: return copy.deepcopy(builtin)
    try:return store.get(ident,'recipe')
    except ValueError:raise ValueError('Unknown recipe. Call list_motion_recipes and copy an exact id.') from None


def source_clip(store,ident):
    recipe=get_recipe(store,ident)
    if ident=='forehand_return':
        with gzip.open(DATA/'forehand_return.json.gz','rt') as f:clip=json.load(f)
    elif ident=='zverev_serve':
        with gzip.open(DATA/'zverev_serve.json.gz','rt') as f:clip=json.load(f)
    elif ident=='recorded_serve':
        clip=load_recorded_serve(make_rig('human',recipe['height'],recipe['mass']),240)
    elif 'clip' in recipe:clip=copy.deepcopy(recipe['clip'])
    else:
        species,action=ident.split('_',1)
        clip=generate(make_rig(species,recipe['height'],recipe['mass']),action,
                      duration=recipe['duration'],fps=240)
    clip.pop('id',None);clip.pop('evaluation',None)
    return recipe,clip


def construct(store,spec):
    recipe,base=source_clip(store,spec['recipe'])
    height=spec.get('height',recipe['height']);mass=spec.get('mass',recipe['mass'])
    if recipe['species']=='human' and not 1.3<=height<=2.3:raise ValueError('Human recipes support heights from 1.3 to 2.3 metres')
    if recipe['species']=='dog' and not .3<=height<=1.2:raise ValueError('Canine recipes support withers scales from 0.3 to 1.2 metres')
    if recipe['species']=='human' and not 40<=mass<=150:raise ValueError('Human recipes support masses from 40 to 150 kg')
    if recipe['species']=='dog' and not 1<=mass<=60:raise ValueError('Canine recipes support masses from 1 to 60 kg')
    scale=height/base['rig']['height'];tempo=spec.get('tempo',1)
    yaw=euler_quat([0,spec.get('heading',0),0]);origin=spec.get('origin',[0,0,0])
    if abs(origin[1])>1e-8:raise ValueError('Keep origin Y=0; translate along the floor using X and Z')
    clip=copy.deepcopy(base);rig=clip['rig'];rig.pop('id',None)
    rig.update(height=height,mass=mass,scale=rig['scale']*scale)
    rig['name']=spec.get('name') or recipe['name']
    for j in rig['joints']:
        j['offset']=mul(j['offset'],scale);j['radius']*=scale
        j['mass_kg']*=mass/base['rig']['mass']
    for key in ('root_position',):
        if key in rig:rig[key]=add(rotate(yaw,mul(rig[key],scale)),origin)
    for a in clip.get('attachments',[]):
        a['local_position']=mul(a['local_position'],scale)
        a['points']={n:mul(p,scale) for n,p in a.get('points',{}).items()}
        a['scale']=a.get('scale',1)*scale
    fps=240;count=round(base['duration']/tempo*fps)+1
    clip['duration']=(count-1)/fps;clip['fps']=fps
    # Fit the whole take to a uniform sample grid; the exact end pose survives.
    time_ratio=base['duration']/clip['duration']
    def event(t): return round(t/time_ratio*fps)/fps
    # Preserve contact/pinned poses on exact samples after changing tempo.
    source_events=[base[k] for k in ('release_time','impact_time') if k in base]
    source_events += [p['time'] for p in base.get('pose_pins',[])]
    source_events += [base['ball_contact']['time']] if base.get('ball_contact') else []
    anchors={0.:0.,clip['duration']:base['duration']}
    for source_t in source_events:
        output_t=event(source_t)
        if output_t in anchors and abs(anchors[output_t]-source_t)>1e-7:
            raise ValueError('Tempo places distinct events on the same sample; use tempo=1')
        anchors[output_t]=source_t
    anchors=sorted(anchors.items());anchor_times=[k[0] for k in anchors]
    def source_time(t):
        k=min(len(anchors)-2,max(0,bisect_right(anchor_times,t)-1))
        a,b=anchors[k:k+2];u=(t-a[0])/(b[0]-a[0])
        return a[1]+u*(b[1]-a[1])
    for key in ('release_time','impact_time'):
        if key in clip:clip[key]=event(base[key])
    for pin in clip.get('pose_pins',[]):pin['time']=event(pin['time'])
    if clip.get('ball_contact'):
        clip['ball_contact']['time']=event(base['ball_contact']['time'])
        clip['ball_contact']['radius']*=scale
    frames=[]
    for n in range(count):
        t=n/fps;sample=min(len(base['frames'])-1,source_time(t)*base['fps'])
        index=min(len(base['frames'])-1,int(math.floor(sample+1e-10)))
        alpha=max(0,sample-index);a=base['frames'][index];b=base['frames'][min(index+1,len(base['frames'])-1)]
        f=copy.deepcopy(a)
        f['time']=t;f['root']=add(rotate(yaw,mul(add(mul(a['root'],1-alpha),mul(b['root'],alpha)),scale)),origin)
        f['rotations']=[slerp(x,y,alpha) for x,y in zip(a['rotations'],b['rotations'])]
        root_index=next(i for i,j in enumerate(rig['joints']) if j['parent']<0)
        f['rotations'][root_index]=qmul(yaw,f['rotations'][root_index])
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])
        f['attachments']={p['name']:attachment_transform(p,rig,f['positions'],f['world_rotations']) for p in clip.get('attachments',[])}
        if 'source_time' in a:f['source_time']=a['source_time']+(b['source_time']-a['source_time'])*alpha
        if 'ball' in a:
            f['ball']=add(rotate(yaw,mul(add(mul(a['ball'],1-alpha),mul(b['ball'],alpha)),scale)),origin)
        for key in ('position_targets',):
            if key in f:f[key]={joint:add(rotate(yaw,mul(add(mul(target,1-alpha),mul(b.get(key,{}).get(joint,target),alpha)),scale)),origin) for joint,target in f[key].items()}
        for key in ('sweet_spot','grip','racket_rotation'):
            f.pop(key,None)
        racket=f['attachments'].get('racket')
        if racket:f.update(sweet_spot=racket['points']['sweet_spot'],grip=racket['position'],racket_rotation=racket['rotation'])
        frames.append(f)
    clip['frames']=frames
    # Event constraints are derived from the transformed racket, never from an
    # independently transformed prop track. Reconstruct toss after retiming.
    if 'release_time' in clip and 'impact_time' in clip:
        names={j['name']:i for i,j in enumerate(rig['joints'])}
        ri,ii=[round(clip[key]*fps) for key in ('release_time','impact_time')]
        radius=clip['ball_contact']['radius'];wrist=names['left_wrist']
        palms=[add(f['positions'][wrist],rotate(f['world_rotations'][wrist],[0,-.075*scale,0])) for f in frames]
        start=add(palms[ri],[0,radius,0]);hit=frames[ii]['attachments']['racket']
        contact=add(hit['points']['sweet_spot'],rotate(hit['rotation'],[0,0,radius]))
        dt=clip['impact_time']-clip['release_time']
        velocity=mul([x-y for x,y in zip(contact,start)],1/dt);velocity[1]+=4.905*dt
        outgoing=rotate(yaw,mul([-4,-3,50],math.sqrt(scale)))
        for i,f in enumerate(frames):
            f['left_palm']=palms[i];t=f['time']
            if t<clip['release_time']:f['ball']=add(palms[i],[0,radius,0])
            elif t<=clip['impact_time']:
                d=t-clip['release_time'];f['ball']=add(add(start,mul(velocity,d)),[0,-4.905*d*d,0])
            else:
                d=t-clip['impact_time'];f['ball']=add(add(contact,mul(outgoing,d)),[0,-4.905*d*d,0])
        # For identity controls preserve every accepted reference track exactly,
        # including its original toss and estimated outgoing velocity.
        if scale==1 and tempo==1 and spec.get('heading',0)==0 and origin==[0,0,0]:
            for f,a in zip(frames,base['frames']):
                f['ball']=copy.deepcopy(a['ball']);f['left_palm']=copy.deepcopy(a.get('left_palm',f['left_palm']))
    # Rotating the world root also rotates pinned root poses.
    for pin in clip.get('pose_pins',[]):
        root_name=rig['joints'][0]['name']
        if root_name in pin['rotations']:pin['rotations'][root_name]=qmul(yaw,pin['rotations'][root_name])
    rig['root_position']=frames[0]['root'][:]
    clip['director_spec']=dict(spec,height=height,mass=mass,tempo=tempo,heading=spec.get('heading',0),origin=origin)
    clip['parameters']=dict(clip.get('parameters',{}),height_m=height,tempo=tempo,heading=spec.get('heading',0))
    clip['title']=rig['name'];clip['recipe_id']=recipe['id'];clip['playback']={'loop':False}
    from . import __version__
    clip['generated_by']=dict(clip.get('generated_by',{}),software='Anima',version=__version__,adapter='recipe_director')
    clip['quality_policy']={'forward_knees':recipe['backend'] in ('video_guided_reconstruction','motion_capture') or recipe['id']=='forehand_return',
                            'rotation_step_limit_deg':45}
    if recipe['id']=='forehand_return':
        clip['quality_policy']['elbow_speed_limit_m_s']=8*scale*time_ratio*1.005
    clip['notes']=list(clip.get('notes',[]))+[recipe['limitations']]
    if clip['backend']=='procedural_kinematic' and rig['species']=='human':
        from .biomechanics import adopt_motion,retime_motion
        clip=retime_motion(adopt_motion(clip),fps=60)
    return clip
