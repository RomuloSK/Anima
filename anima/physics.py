"""Actual MuJoCo passive articulated-body simulation. No balance controller."""
import importlib.util
import math
import xml.etree.ElementTree as ET
from .math3d import qinv, qmul, euler_quat

def available(): return importlib.util.find_spec("mujoco") is not None
def nums(v): return " ".join(str(x) for x in v)

def to_mjcf(rig,friction=.8):
    if rig.get('biomechanics') or any(j['name'].endswith('_scapula') for j in rig['joints']):
        raise ValueError('The coupled body profile has no calibrated dynamics mapping. MJCF would omit its dependent constraints; use a legacy synthetic rig for passive dynamics.')
    root=ET.Element("mujoco",model="anima_"+rig["species"])
    ET.SubElement(root,"compiler",angle="degree",inertiafromgeom="true")
    ET.SubElement(root,"option",timestep=str(1/240),gravity="0 -9.81 0",integrator="implicitfast",iterations="50")
    defaults=ET.SubElement(root,"default")
    ET.SubElement(defaults,"joint",damping="1.0",armature="0.02",limited="true")
    # Bit masks enable body-ground contacts; body-body contacts intentionally off.
    ET.SubElement(defaults,"geom",contype="1",conaffinity="2",friction=f"{friction} .005 .0001",condim="3")
    world=ET.SubElement(root,"worldbody")
    ET.SubElement(world,"geom",name="floor",type="plane",size="50 50 .1",quat=".70710678 -.70710678 0 0",contype="2",conaffinity="1")
    bodies=[]
    joints=rig["joints"]
    for i,j in enumerate(joints):
        p=j["parent"]
        body=ET.SubElement(world if p<0 else bodies[p],"body",name=j["name"],pos=nums(rig["root_position"] if p<0 else j["offset"]))
        bodies.append(body)
        if p<0: ET.SubElement(body,"freejoint",name="root_free")
        elif j.get('rotation_model')=='swing_twist':
            for name,axis,bounds in [('plane',[0,1,0],j['limits'][1]),('elevation',[-1,0,0],j['limits'][0]),('twist',[0,1,0],j['limits'][2])]:
                ET.SubElement(body,'joint',name=j['name']+'_'+name,type='hinge',axis=nums(axis),range=nums(bounds))
        else:
            for k,(lo,hi) in enumerate(j["limits"]):
                if hi>lo:
                    axis=[0,0,0]; axis[k]=1
                    ET.SubElement(body,"joint",name=j["name"]+"_"+"xyz"[k],type="hinge",axis=nums(axis),range=f"{lo} {hi}")
        children=[c for c in joints if c["parent"]==i]
        attrs={"name":j["name"]+"_geom","size":str(j["radius"]),"mass":str(max(.0001,j["mass_kg"]))}
        if children and sum(v*v for v in children[0]['offset'])>1e-12:
            attrs.update(type="capsule",fromto="0 0 0 "+nums(children[0]["offset"]))
        else: attrs.update(type="sphere")
        ET.SubElement(body,"geom",**attrs)
    return ET.tostring(root,encoding="unicode")

def simulate(rig,duration=2,fps=60,drop_height=.25,friction=.8):
    if rig.get('joint_limits_calibrated') is False:
        raise ValueError('Physics requires a supported calibrated coordinate mapping; this rig has none. Use create_character for legacy passive dynamics.')
    if not available(): raise ValueError('MuJoCo is not installed. Run: python -m pip install ".[physics]"')
    import mujoco
    import numpy as np
    model=mujoco.MjModel.from_xml_string(to_mjcf(rig,friction))
    data=mujoco.MjData(model)
    data.qpos[1]+=drop_height
    tilt=euler_quat([0,0,8])
    data.qpos[3:7]=[tilt[3],*tilt[:3]]
    mujoco.mj_forward(model,data)
    ids=[mujoco.mj_name2id(model,mujoco.mjtObj.mjOBJ_BODY,j["name"]) for j in rig["joints"]]
    geom_names={mujoco.mj_name2id(model,mujoco.mjtObj.mjOBJ_GEOM,j["name"]+"_geom"):j["name"] for j in rig["joints"]}
    frames=[]; max_contacts=0; max_force=0; warning_before=data.warning.number.copy()
    count=round(duration*fps)+1; substeps=240//fps
    for frame in range(count):
        if frame:
            mujoco.mj_step(model,data,nstep=substeps)
            mujoco.mj_forward(model,data)
        if not np.isfinite(data.qpos).all(): raise ValueError("Dynamics diverged: non-finite state")
        world=[]; local=[]; positions=[]; contacts={j["name"]:False for j in rig["joints"] if j["name"].endswith("_toe")}
        for i,bid in enumerate(ids):
            w,x,y,z=data.xquat[bid]; q=[float(x),float(y),float(z),float(w)]
            world.append(q)
            p=rig["joints"][i]["parent"]
            local.append(q if p<0 else qmul(qinv(world[p]),q))
            positions.append(data.xpos[bid].tolist())
        for c in range(data.ncon):
            contact=data.contact[c]
            for gid in (contact.geom1,contact.geom2):
                name=geom_names.get(gid,"")
                if name in contacts: contacts[name]=True
            force=np.zeros(6); mujoco.mj_contactForce(model,data,c,force)
            max_force=max(max_force,float(np.linalg.norm(force[:3])))
        max_contacts=max(max_contacts,data.ncon)
        frames.append({"time":frame/fps,"root":positions[0],"positions":positions,"rotations":local,"contacts":contacts})
    warnings=(data.warning.number-warning_before).tolist()
    return {"schema_version":1,"rig":rig,"action":"passive_dynamics","duration":(count-1)/fps,"fps":fps,"parameters":{"drop_height":drop_height,"friction":friction},"backend":"mujoco_"+mujoco.__version__,"frames":frames,"physics_report":{"available":True,"mode":"passive articulated body","timestep_s":1/240,"max_contact_count":int(max_contacts),"peak_contact_force_n":max_force,"solver_warning_counts":warnings,"self_collision":False,"balance_controller":False,"anatomy_validated":False},"notes":["Real passive rigid-body dynamics with floor contacts; the character is expected to collapse.","Synthetic masses, inertias, capsules, and joint ranges; no muscles, balance policy, or self-collision."]}
