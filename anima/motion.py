"""Deterministic procedural reference trajectories, not learned motor policies."""
import math
from .math3d import clamp, euler_quat
from .rigs import fk, pose_rotations

TAU=math.tau

def foot_path(t,period,phase,duty,speed,clearance,ground):
    u=(t/period+phase)%1
    half=speed*period*duty/2
    if u<duty: return half-speed*period*u,ground,True
    s=(u-duty)/(1-duty)
    # Quintic Hermite preserves world velocity and acceleration at lift-off
    # and touchdown; a cubic path / sine-squared lift caused knee jerks.
    m=-speed*period*(1-duty)
    h0=1-10*s**3+15*s**4-6*s**5;h1=1-h0
    m0=s-6*s**3+8*s**4-3*s**5;m1=-4*s**3+7*s**4-3*s**5
    z=h0*(-half)+h1*half+(m0+m1)*m
    return z,ground+clearance*64*s**3*(1-s)**3,False

def leg_angles(dy,dz,l1,l2,sign=1):
    d2=dy*dy+dz*dz
    knee=sign*math.acos(clamp((d2-l1*l1-l2*l2)/(2*l1*l2),-1,1))
    hip=math.atan2(-dz,-dy)-math.atan2(l2*math.sin(knee),l1+l2*math.cos(knee))
    return [math.degrees(hip),math.degrees(knee),math.degrees(-hip-knee)]

def generate(rig,action="walk",duration=4,fps=60,speed=1.2,stride_scale=1,jump_height=.3):
    if action=='serve':
        from .serve import generate_serve
        return generate_serve(rig,duration,fps)
    human=rig["species"]=="human"
    actions=("idle","walk","run","squat","jump","wave") if human else ("idle","walk","trot")
    if action not in actions: raise ValueError(f"{rig['species']} supports {', '.join(actions)}")
    if action=="jump" and duration < .9+2*math.sqrt(2*jump_height/9.81):
        raise ValueError("Duration too short for crouch, ballistic flight, and landing; increase duration")
    scale=rig["scale"]; moving=action in ("walk","run","trot")
    duty=.62 if action=="walk" else .4 if action=="run" else .56
    stride=(.86 if human else .55)*scale*stride_scale
    period=stride/speed if moving else 2.6
    ground=(.07 if human else .05)*scale
    frames=[]; count=round(duration*fps)+1
    stems=["left","right"] if human else ["left_hind","right_hind","left_front","right_front"]
    phases=[0,.5] if human else ([0,.5,.5,0] if action=="trot" else [0,.5,.75,.25])
    byname={j["name"]:j for j in rig["joints"]}
    root_curve=None
    if moving:
        # Fit a smooth periodic root trajectory below the geometric reach
        # envelope. Taking a per-frame minimum of stance-leg heights creates
        # cusps and avoidable jerk at support changes.
        n=256; caps=[]
        for sample in range(n):
            candidate=[]
            for stem,phase in zip(stems,phases):
                z,y,_=foot_path(sample/n*period,period,phase,duty,speed,(.09 if action=="walk" else .16)*scale,ground)
                reach=abs(byname[stem+"_knee"]["offset"][1])+abs(byname[stem+"_ankle"]["offset"][1])-.012*scale
                if abs(z)>reach: raise ValueError("Stride exceeds limb reach; reduce stride_scale")
                candidate.append(y+math.sqrt(reach*reach-z*z))
            caps.append(min(candidate))
        mean=sum(caps)/n
        coeffs=[(2/n*sum(v*math.cos(TAU*k*i/n) for i,v in enumerate(caps)),2/n*sum(v*math.sin(TAU*k*i/n) for i,v in enumerate(caps))) for k in range(1,4)]
        def profile(phase): return mean+sum(a*math.cos(TAU*k*phase)+b*math.sin(TAU*k*phase) for k,(a,b) in enumerate(coeffs,1))
        correction=min(caps[i]-profile(i/n) for i in range(n))-.001*scale
        root_curve=lambda t:profile(t/period)+correction
    for f in range(count):
        t=f/fps; angles={}; contacts={}; paths={}
        root=[0,rig["root_position"][1],speed*t if moving else 0]
        for stem,phase in zip(stems,phases):
            if moving:
                paths[stem]=foot_path(t,period,phase,duty,speed,(.09 if action=="walk" else .16)*scale,ground)
            else: paths[stem]=(0,ground,True)
        if moving:
            root[1]=root_curve(t)
        elif action=="squat":
            depth=.20*scale*(.5-.5*math.cos(TAU*t/duration))
            root[1]-=.015*scale+depth
            angles["spine"]=[-14*depth/(.20*scale),0,0]
            for side in stems: angles[side+"_shoulder"]=[-70*depth/(.20*scale),0,0]
        elif action=="jump":
            takeoff=.5; v=math.sqrt(2*9.81*jump_height); flight=2*v/9.81
            if t<takeoff:
                root[1]-=.15*scale*math.sin(math.pi*t/takeoff)**2+.012*scale
            elif t<takeoff+flight:
                u=t-takeoff; h=v*u-.5*9.81*u*u
                root[1]+=-.012*scale+h
                tuck=.08*scale*math.sin(math.pi*u/flight)**2
                paths={s:(0,ground+h+tuck,False) for s in stems}
            else:
                u=min(1,(t-takeoff-flight)/.4)
                root[1]-=.10*scale*math.sin(math.pi*u)**2+.012*scale
        else:
            root[1]-=.015*scale+.003*scale*(1-math.cos(TAU*t/period))
        for stem,(z,y,contact) in paths.items():
            l1=abs(byname[stem+"_knee"]["offset"][1]); l2=abs(byname[stem+"_ankle"]["offset"][1])
            sign=-1 if "front" in stem else 1
            aa=leg_angles(y-root[1],z,l1,l2,sign)
            for name,a in zip(("_hip","_knee","_ankle"),aa): angles[stem+name]=[a,0,0]
            contacts[stem+"_toe"]=contact
        if human:
            for side,phase in zip(stems,phases):
                swing=math.sin(TAU*(t/period+phase)) if moving else 0
                if action!="squat": angles[side+"_shoulder"]=[swing*(26 if action=="run" else 17),0,0]
                angles[side+"_elbow"]=[-65 if action=="run" else -12,0,0]
            if action=="wave":
                angles["right_shoulder"]=[0,0,145]
                angles["right_elbow"]=[-50+23*math.sin(TAU*t*1.4),0,0]
                angles["right_wrist"]=[0,0,20*math.sin(TAU*t*1.4)]
        else:
            angles["tail"]=[0,20*math.sin(TAU*t/period),0]
        rotations=pose_rotations(rig,angles)
        positions,_=fk(rig,root,rotations)
        frames.append({"time":t,"root":root,"rotations":rotations,"positions":positions,"contacts":contacts})
    return {"schema_version":1,"rig":rig,"action":action,"duration":(count-1)/fps,"fps":fps,"parameters":{"speed":speed if moving else 0,"stride_scale":stride_scale,"jump_height":jump_height if action=="jump" else None},"backend":"procedural_kinematic","frames":frames,"notes":["Synthetic reference motion; not biomechanically validated.","Joint limits and ground contacts are checked; no learned balance, muscle actuation, or self-collision solver."]}
