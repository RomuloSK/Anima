"""One validated registry serves Python, HTTP, and MCP callers."""
import math
from pathlib import Path
from . import __version__
from .rigs import make_rig, fk, pose_rotations
from .motion import generate
from .evaluate import evaluate
from .exports import export
from .physics import available, simulate
from .recorded import load_recorded_serve
from .math3d import solve_two_bone, norm

def string(**kw): return dict(type="string",**kw)
def number(lo,hi,**kw): return dict(type="number",minimum=lo,maximum=hi,**kw)
def object_schema(props,required=()): return {"type":"object","properties":props,"required":list(required),"additionalProperties":False}
ID=string(minLength=1,maxLength=80)
FPS={"type":"integer","enum":[24,30,60,120,180,240],"default":60}
VEC={"type":"array","items":number(-100,100),"minItems":3,"maxItems":3}

def tool(name,description,props={},required=(),read=False):
    return {"name":name,"description":description,"inputSchema":object_schema(props,required),"annotations":{"readOnlyHint":read,"destructiveHint":False,"idempotentHint":read,"openWorldHint":False}}

TOOLS=[
    tool("describe_capabilities","Discover supported species, motions, backend availability, coordinate conventions, and limitations.",read=True),
    tool("create_character","Create a synthetic human or dog rig. Human height is total height; dog height is withers reference scale. Ranges and masses are approximate.",{"species":string(enum=["human","dog"],default="human"),"name":string(minLength=1,maxLength=80),"height":number(.3,2.5),"mass":number(1,250)}),
    tool("list_assets","List persisted characters and compact motion summaries; shared with the local 3D viewer.",read=True),
    tool("get_character","Read rig hierarchy, units, approximate masses, and joint ranges.",{"character_id":ID},["character_id"],True),
    tool("load_recording","Reconstruct a tennis serve from licensed body and racket motion capture. Preserves the recorded 1.667-second timing and fits a constant-length skeleton to the character height. Ball flight is reconstructed. Returns source attribution and fit residuals through get_clip.",{"character_id":ID,"recording":string(enum=["tennis_serve"],default="tennis_serve"),"fps":FPS},["character_id"]),
    tool("generate_motion","Generate and check a deterministic procedural motion. Human: idle, walk, run, squat, jump, wave, serve. Dog: idle, walk, trot. Not a physics-balanced or learned policy.",{"character_id":ID,"action":string(enum=["idle","walk","run","squat","jump","wave","serve","trot"]),"duration":number(.5,15,default=4),"fps":FPS,"speed":number(.1,4,default=1.2),"stride_scale":number(.5,1.35,default=1),"jump_height":number(.1,.8,default=.3)},["character_id","action"]),
    tool("define_pose","Create a static clip using local intrinsic XYZ angles in degrees. Rejects out-of-range angles instead of silently clamping.",{"character_id":ID,"joint_angles":{"type":"object","additionalProperties":{"type":"array","items":number(-180,180),"minItems":3,"maxItems":3}},"duration":number(.5,5,default=1),"fps":FPS},["character_id","joint_angles"]),
    tool("get_clip","Read a motion header and a bounded slice of frames. Use frame_start/frame_count for pagination; frame_count=0 gives header only.",{"clip_id":ID,"frame_start":{"type":"integer","minimum":0,"maximum":10000,"default":0},"frame_count":{"type":"integer","minimum":0,"maximum":120,"default":1}},["clip_id"],True),
    tool("evaluate_motion","Return measured joint-limit, bone-length, penetration, sliding, root-jerk, rigid-grip, reach-target and pinned-pose diagnostics. Checks do not certify realism or balance.",{"clip_id":ID},["clip_id"],True),
    tool("solve_ik","Solve an isolated two-bone chain with a pole vector and hinge bend bounds. Returns feasible joint positions and residual; does not apply a pose or enforce shoulder limits.",{"root":VEC,"target":VEC,"pole":VEC,"upper_length":number(.01,3),"lower_length":number(.01,3),"min_bend":number(0,170,default=0),"max_bend":number(1,175,default=155)},["root","target","pole","upper_length","lower_length"],True),
    tool("simulate_physics","Run actual passive MuJoCo rigid-body dynamics with a floor. Character will collapse: no balancing controller or self-collision. Returns a saved clip and solver diagnostics.",{"character_id":ID,"duration":number(.5,5,default=2),"fps":FPS,"drop_height":number(0,2,default=.25),"friction":number(.1,2,default=.8)},["character_id"]),
    tool("export_motion","Export BVH (metres, XYZ), embedded-buffer glTF skeleton-only animation, full motion JSON, or the MJCF rig. Writes only inside the project exports directory.",{"clip_id":ID,"format":string(enum=["bvh","gltf","json","mjcf"])},["clip_id","format"]),
]

DIRECTOR_CONTROLS={
    'height':number(.3,2.3,description='Human height or canine withers scale in metres; omit to keep reference dimensions.'),
    'mass':number(1,150,description='Mass in kg; affects diagnostics, not motion technique.'),
    'tempo':number(.75,1.25,description='Playback speed multiplier. 1 preserves the reference timing.'),
    'heading':number(-180,180,description='Rotate the entire take around world up, in degrees.'),
    'origin':{'type':'array','items':number(-10,10),'minItems':3,'maxItems':3,
              'description':'World translation in metres. Keep Y=0 for the floor.'},
    'name':string(minLength=1,maxLength=80),
}
GUIDED_TOOLS=[
    tool('list_motion_recipes','Find reusable motion recipes and their exact IDs. Start here; choose the intended performer reference. Returns a compact director guide.',{'query':string(maxLength=100,default='')},read=True),
    tool('create_animation','Create and validate a complete take from a recipe. Handles rig, FK, grip, event timing and release checks. No raw joint angles needed. Does not create a video; use finish_animation.',{'recipe':ID,**DIRECTOR_CONTROLS},['recipe']),
    tool('inspect_animation','Read compact quality issues, source provenance and current controls. Null checks are unknown, not passed.',{'clip_id':ID},['clip_id'],True),
    tool('revise_animation','Regenerate an immutable take from its source recipe with changed controls. Also repairs corrupted cached geometry. Omit controls to restore the take without changing its intended motion.',{'clip_id':ID,**DIRECTOR_CONTROLS},['clip_id']),
    tool('finish_animation','Validate and export local files. Add serve_clip_id when exporting a forehand_return to compose both players on court. Court scenes support MP4/JSON. MP4 needs the video extra, Node, FFmpeg and Mesa EGL.',{'clip_id':ID,'serve_clip_id':ID,'formats':{'type':'array','items':string(enum=['mp4','json','gltf','bvh']),'minItems':1,'maxItems':4,'default':['mp4']},'quality':string(enum=['preview','final'],default='final')},['clip_id']),
]
TOOLS+=GUIDED_TOOLS+[
    tool('import_reference_motion','Create a reusable human racket-motion recipe from observed 2D or fitted 3D tracks in a JSON manifest inside the project reference inbox. The engine lifts 2D camera observations and solves the skeleton. See examples/zverev_reference*.json. Does not extract poses from raw video. Requires the reference extra.',{'manifest_file':string(minLength=6,maxLength=100)},['manifest_file']),
]

from .biomechanics import SETTINGS as BODY_SETTINGS, OPTIONS as BODY_OPTIONS
COORDINATES={'type':'object','additionalProperties':number(-180,180),'description':'Named anatomical coordinates in degrees. Discover exact names and pose-dependent ranges with describe_body_controls.'}
BODY_TOOLS=[
    tool('describe_body_controls','Discover every body slider, effective ranges for this pose, dependency explanations, coordination toggles and research provenance.',
         {'character_id':ID,'coordinates':COORDINATES,'options':object_schema(BODY_OPTIONS)},['character_id'],True),
    tool('configure_body','Create an immutable coupled human rig/profile. Settings can narrow mobility and set animation timing budgets; hard constraints cannot be disabled.',
         {'character_id':ID,'settings':object_schema(BODY_SETTINGS)},['character_id']),
    tool('preview_body_pose','Preview coordinated posing without saving. Returns effective limits, adjustments, collision issues and a frame. Invalid previews cannot be exported.',
         {'character_id':ID,'coordinates':COORDINATES,'options':object_schema(BODY_OPTIONS),
          'on_limit':string(enum=['project','reject'],default='project')},['character_id','coordinates'],True),
    tool('animate_body','Create a coupled whole-body motion from sparse anatomical keyframes. C2 curves, pose-dependent limits, collisions and temporal budgets are enforced. Optional automatic retiming slows motion to meet budgets.',
         {'character_id':ID,'keyframes':{'type':'array','items':object_schema({'time':number(0,30),'coordinates':COORDINATES},['time','coordinates']),'minItems':2,'maxItems':16},
          'fps':FPS,'options':object_schema(BODY_OPTIONS),'on_limit':string(enum=['project','reject'],default='reject')},['character_id','keyframes']),
]
TOOLS+=BODY_TOOLS

def tool_catalog(profile='all'):
    if profile=='guided':return GUIDED_TOOLS
    if profile=='all':return TOOLS
    raise ValueError('profile must be guided or all')

def validate(value,schema,path="arguments"):
    typ=schema.get("type")
    if typ=="object":
        if not isinstance(value,dict): raise ValueError(path+" must be an object")
        props=schema.get("properties",{}); extra=schema.get("additionalProperties",True)
        for key in schema.get("required",[]):
            if key not in value: raise ValueError(path+"."+key+" is required")
        for key,v in value.items():
            if key in props: validate(v,props[key],path+"."+key)
            elif extra is False: raise ValueError(path+" contains unknown field: "+key)
            elif isinstance(extra,dict): validate(v,extra,path+"."+key)
    elif typ=="array":
        if not isinstance(value,list): raise ValueError(path+" must be an array")
        if not schema.get("minItems",0)<=len(value)<=schema.get("maxItems",10**9): raise ValueError(path+" has wrong length")
        for i,v in enumerate(value): validate(v,schema["items"],f"{path}[{i}]")
    elif typ in ("number","integer"):
        if isinstance(value,bool) or not isinstance(value,(int,float)) or not math.isfinite(value): raise ValueError(path+" must be finite numeric data")
        if typ=="integer" and int(value)!=value: raise ValueError(path+" must be an integer")
        if value<schema.get("minimum",-math.inf) or value>schema.get("maximum",math.inf): raise ValueError(path+" outside supported range")
    elif typ=="string":
        if not isinstance(value,str): raise ValueError(path+" must be a string")
        if not schema.get("minLength",0)<=len(value)<=schema.get("maxLength",10000): raise ValueError(path+" has invalid length")
    elif typ=='boolean':
        if not isinstance(value,bool):raise ValueError(path+' must be a boolean')
    if "enum" in schema and value not in schema["enum"]: raise ValueError(path+" must be one of "+str(schema["enum"]))

def summary(clip):
    report=clip.get("evaluation",{})
    return {"id":clip["id"],"character":clip["rig"]["name"],"character_id":clip["rig"].get("id"),"species":clip["rig"]["species"],"action":clip["action"],"duration":clip["duration"],"fps":clip["fps"],"frame_count":len(clip["frames"]),"backend":clip["backend"],"status":report.get("status"),"checks":report.get("checks",{}),"metrics":report.get("metrics",{}),"body_profile":clip['rig'].get('biomechanics',{}).get('profile'),"timing":clip.get('timing')}

class Engine:
    def __init__(self,store): self.store=store
    def save_clip(self,clip,save_character=False):
        if clip.get("backend") in ("constrained_kinematic","coupled_kinematic") or clip['rig'].get('biomechanics') or any(j['name'].endswith('_scapula') for j in clip['rig']['joints']):
            from .quality import assert_releasable
            clip['evaluation']=assert_releasable(clip)
        else:clip['evaluation']=evaluate(clip)
        if save_character:clip['rig']=self.store.put('character',clip['rig'])
        return summary(self.store.put("clip",clip))
    def call(self,name,args):
        schema=next((t["inputSchema"] for t in TOOLS if t["name"]==name),None)
        if schema is None: raise ValueError("Unknown tool: "+str(name))
        validate(args,schema)
        a={k:v.get("default") for k,v in schema["properties"].items() if "default" in v}; a.update(args)
        if "fps" in a: a["fps"]=int(a["fps"])
        if name in {t['name'] for t in BODY_TOOLS}:
            from . import biomechanics as body
            rig=self.store.get(a.pop('character_id'),'character')
            if name=='describe_body_controls':return body.describe(rig,**a)
            if name=='configure_body':return self.store.put('character',body.body_rig(rig,a.get('settings')))
            if name=='preview_body_pose':return body.preview(rig,**a)
            clip=body.animate(rig,**a)
            result=self.save_clip(clip,save_character=True)
            result.update(timing=clip['timing'],adjustments=clip['body_adjustments'])
            return result
        if name in {t['name'] for t in GUIDED_TOOLS} or name=='import_reference_motion':
            from .guided import call
            return call(self,name,a)
        if name=="describe_capabilities":
            from .video import availability as video_availability
            return {"body_controls":{"profile":"human_coupled_v1","tools":[t["name"] for t in BODY_TOOLS],"coordinate_count":35,"checks":"Coupled ranges, fixed lengths, capsule/torso clearance and temporal budgets; frames plus playback midpoints.","numeric_basis":"Synthetic defaults with research-informed dependencies; not subject-calibrated.","scope":"New human poses and procedural motions. Existing racket/reference recipes retain their own rig and explicit known/unknown checks."},"guided_workflow":{"profile":"guided","tools":[t["name"] for t in GUIDED_TOOLS],"reference_import":"Observed 2D or fitted 3D tracks, not raw video","default_sample_rate":240},"video_export":video_availability(),"version":__version__,"species":{"human":["idle","walk","run","squat","jump","wave","serve"],"dog":["idle","walk","trot"]},"recordings":{"human":["tennis_serve"]},"backends":{"procedural":True,"motion_capture":True,"mujoco":available()},"exports":["bvh","gltf","json","mjcf"],"units":{"length":"metres","time":"seconds","angles":"degrees intrinsic XYZ","quaternions":"xyzw","axes":"Y up, Z forward"},"limits":["Procedural rigs are synthetic. The bundled serve uses licensed body and racket motion capture with inferred joint centres.","Procedural motion has no dynamics balance guarantee.","MuJoCo backend is passive dynamics, without control or self-collision.","glTF contains skeleton animation, no skinned mesh.","Tools are callable by an external LLM; no built-in language model or arbitrary prompt interpreter."]}
        if name=="create_character":
            human=a["species"]=="human"
            return self.store.put("character",make_rig(a["species"],a.get("height",1.75 if human else .65),a.get("mass",75 if human else 22),a.get("name","Human 01" if human else "Canine 01")))
        if name=="list_assets": return {"characters":self.store.list("character"),"clips":[summary(c) for c in self.store.list("clip")]}
        if name=="get_character": return self.store.get(a["character_id"],"character")
        if name=="load_recording":
            return self.save_clip(load_recorded_serve(self.store.get(a['character_id'],'character'),a['fps']))
        if name in ("generate_motion","simulate_physics","define_pose"):
            rig=self.store.get(a.pop("character_id"),"character")
            if name=="generate_motion":
                if rig['species']=='human' and a['action']!='serve':
                    from .biomechanics import adopt_motion,retime_motion,settings_for
                    output_fps=a['fps'];a['fps']=240
                    source=make_rig('human',rig['height'],rig['mass'],rig['name'])
                    clip=retime_motion(adopt_motion(generate(source,**a),settings_for(rig)),output_fps)
                    return self.save_clip(clip,save_character=True)
                if rig['species']=='human' and a['action']=='serve':
                    source=make_rig('human',rig['height'],rig['mass'],rig['name'])
                    clip=generate(source,**a)
                    clip['notes'].append('Racket preset uses its own articulated rig and release gates; the general coupled body profile is not applied to this preset.')
                    return self.save_clip(clip,save_character=True)
                return self.save_clip(generate(rig,**a))
            if name=="simulate_physics": return self.save_clip(simulate(rig,**a))
            if rig.get('joint_limits_calibrated') is False and not rig.get('biomechanics'):
                raise ValueError('Raw posing requires known coordinate frames. Use configure_body or preview_body_pose for this reference character.')
            angles=dict(a['joint_angles'])
            if rig['species']=='human' and not rig.get('biomechanics'):
                angles.setdefault('left_shoulder',[0,0,-8]);angles.setdefault('right_shoulder',[0,0,8])
            rots=pose_rotations(rig,angles); root=rig["root_position"]; positions,_=fk(rig,root,rots)
            count=round(a["duration"]*a["fps"])+1
            frames=[{"time":i/a["fps"],"root":root,"rotations":rots,"positions":positions,"contacts":{}} for i in range(count)]
            clip={"schema_version":1,"rig":rig,"action":"pose","duration":(count-1)/a["fps"],"fps":a["fps"],"parameters":{"joint_angles":a["joint_angles"]},"backend":"authored_pose","frames":frames,"notes":["Static authored pose; no contact constraints or dynamics."]}
            if rig['species']=='human' and not rig.get('biomechanics'):
                from .biomechanics import adopt_motion
                clip=adopt_motion(clip)
                return self.save_clip(clip,save_character=True)
            return self.save_clip(clip)
        if name=="solve_ik":
            if a["min_bend"]>a["max_bend"]: raise ValueError("min_bend must not exceed max_bend")
            return solve_two_bone(a["root"],a["target"],a["pole"],a["upper_length"],a["lower_length"],a["min_bend"],a["max_bend"])
        clip=self.store.get(a["clip_id"],"clip")
        if name=="get_clip":
            start=int(a["frame_start"]); end=start+int(a["frame_count"])
            return {"summary":summary(clip),"rig":clip["rig"],"notes":clip["notes"],"body_request":clip.get("body_request"),"body_adjustments":clip.get("body_adjustments"),"source":clip.get('source'),"capture_fit":clip.get('capture_fit'),"attachments":clip.get('attachments',[]),"pose_pins":clip.get('pose_pins',[]),"ball_contact":clip.get('ball_contact'),"frames":clip["frames"][start:end],"next_frame_start":end if a["frame_count"] and end<len(clip["frames"]) else None}
        if name=="evaluate_motion": return {k:v for k,v in clip["evaluation"].items() if k!="estimated_com"}
        if name=="export_motion":
            if clip.get("backend")=="constrained_kinematic" and evaluate(clip)["status"]!="checks_passed":
                raise ValueError("Constrained motion failed validation; export refused")
            folder=self.store.directory/"exports"; folder.mkdir(exist_ok=True)
            path=folder/(clip["id"]+"."+a["format"])
            path.write_text(export(clip,a["format"]),encoding="utf-8")
            return {"path":str(path),"format":a["format"],"bytes":path.stat().st_size,"skeleton_only":a["format"]=="gltf"}
