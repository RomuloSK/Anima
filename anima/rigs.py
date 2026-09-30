from .math3d import add, rotate, qmul, euler_quat

I=[0,0,0,1]

def make_rig(species="human", height=1.75, mass=75, name="Character"):
    """Synthetic articulated templates; not subject-specific anatomy models."""
    if species not in ("human","dog"): raise ValueError("species must be human or dog")
    scale=height/(1.75 if species=="human" else .65)
    joints=[]
    def joint(name,parent,offset,radius,weight,limits=None):
        joints.append({"name":name,"parent":next((i for i,j in enumerate(joints) if j["name"]==parent),-1),"offset":[v*scale for v in offset],"radius":radius*scale,"mass_weight":weight,"limits":limits or [[-45,45],[-30,30],[-30,30]]})
    if species=="human":
        root=[0,.93*scale,0]
        joint("pelvis",None,[0,0,0],.10,12)
        joint("spine","pelvis",[0,.16,0],.10,10)
        joint("chest","spine",[0,.21,0],.125,20)
        joint("neck","chest",[0,.17,0],.045,2)
        joint("head","neck",[0,.12,0],.09,8)
        joint("head_tip","head",[0,.16,0],.045,0,[[0,0]]*3)
        for side,x in (("left",-.1),("right",.1)):
            joint(side+"_hip","pelvis",[x,0,0],.072,1,[[-120,55],[-45,45],[-50,50]])
            joint(side+"_knee",side+"_hip",[0,-.43,0],.052,10,[[0,155],[0,0],[0,0]])
            joint(side+"_ankle",side+"_knee",[0,-.43,0],.033,4,[[-75,55],[-25,25],[-25,25]])
            joint(side+"_toe",side+"_ankle",[0,-.045,.15],.025,1,[[-40,60],[0,0],[0,0]])
            joint(side+"_shoulder","chest",[x*1.85,.105,0],.052,1,[[-160,160],[-100,100],[-170,170]])
            joint(side+"_elbow",side+"_shoulder",[0,-.285,0],.034,3,[[-155,0],[0,0],[0,0]])
            joint(side+"_wrist",side+"_elbow",[0,-.255,0],.025,2,[[-75,75],[-65,65],[-35,35]])
            joint(side+"_hand",side+"_wrist",[0,-.115,0],.025,1,[[-40,40],[-25,25],[-25,25]])
    else:
        root=[0,.57*scale,0]
        joint("pelvis",None,[0,0,0],.10,12)
        joint("spine","pelvis",[0,.035,.28],.12,25)
        joint("chest","spine",[0,.015,.25],.11,18)
        joint("neck","chest",[0,.10,.13],.065,4,[[-60,60],[-45,45],[-35,35]])
        joint("head","neck",[0,.08,.13],.075,7)
        joint("muzzle","head",[0,-.025,.16],.045,2)
        joint("tail","pelvis",[0,.02,-.09],.025,1,[[-65,65],[-75,75],[-75,75]])
        joint("tail_tip","tail",[0,.03,-.30],.014,1)
        for side,x in (("left",-.09),("right",.09)):
            for limb,parent,yy in (("hind","pelvis",0),("front","chest",-.05)):
                stem=side+"_"+limb
                bend=[0,150] if limb=="hind" else [-150,0]
                joint(stem+"_hip",parent,[x,yy,0],.047,1,[[-110,110],[-35,35],[-40,40]])
                joint(stem+"_knee",stem+"_hip",[0,-.265,0],.03,3,[bend,[0,0],[0,0]])
                joint(stem+"_ankle",stem+"_knee",[0,-.255,0],.021,2,[[-100,100],[-25,25],[-25,25]])
                joint(stem+"_toe",stem+"_ankle",[0,-.025,.075],.025,1,[[-45,45],[0,0],[0,0]])
    total=sum(j["mass_weight"] for j in joints)
    for j in joints: j["mass_kg"]=mass*j.pop("mass_weight")/total
    return {"name":name,"species":species,"height":height,"mass":mass,"scale":scale,"root_position":root,"joints":joints,"units":{"length":"metres","time":"seconds","mass":"kg","angles":"degrees","quaternions":"xyzw","axes":"Y up, Z forward, X right"},"anatomy":"synthetic template; approximate joint ranges and segment masses"}

def fk(rig,root_position,rotations):
    positions=[]; world=[]
    for i,j in enumerate(rig["joints"]):
        p=j["parent"]; q=rotations[i]
        positions.append(root_position[:] if p<0 else add(positions[p],rotate(world[p],j["offset"])))
        world.append(q[:] if p<0 else qmul(world[p],q))
    return positions,world

def pose_rotations(rig,angles):
    unknown=set(angles)-{j["name"] for j in rig["joints"]}
    if unknown: raise ValueError("Unknown joint: "+", ".join(sorted(unknown)))
    result=[]
    for j in rig["joints"]:
        a=angles.get(j["name"],[0,0,0])
        if len(a)!=3: raise ValueError("Joint angles require three XYZ values")
        for v,(lo,hi) in zip(a,j["limits"]):
            if not lo-1e-7<=v<=hi+1e-7: raise ValueError(f"{j['name']}: angle {v} outside [{lo}, {hi}]")
        if j.get('rotation_model')=='swing_twist':
            from .constraints import swing_twist
            result.append(swing_twist(*a))
        else:result.append(euler_quat(a))
    return result
