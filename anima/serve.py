"""An integrated reference serve with articulated arms and a fixed racket grip.

Kinematic authoring with explicit constraints; no force-driven tracking claim.
"""
import math
from .curves import KeyCurve
from .constraints import articulated_arms, swing_twist, basis_quat, attachment_transform, require_reachable
from .math3d import add,sub,mul,norm,unit,cross,dot,rotate,qmul,qinv,euler_quat,solve_two_bone
from .rigs import fk


def generate_serve(character, duration=4.2, fps=60):
    if character['species'] != 'human':raise ValueError('Serve requires a human character')
    if duration < 3:raise ValueError('Serve duration must be at least 3 seconds')
    rig=articulated_arms(character); idx={j['name']:i for i,j in enumerate(rig['joints'])}
    count=round(duration*fps)+1;duration=(count-1)/fps
    factor=duration/4.2;scale=rig['height']/1.86
    impact=round(2.2*factor*fps)/fps;impact_native=impact/factor
    release=round(1.15*factor*fps)/fps
    def curve(keys):
        return KeyCurve([(impact_native if k[0]==2.2 else k[0],*k[1:]) for k in keys])
    root=curve([(0,.02,.945,-.10),(.6,.025,.93,-.12),(1.15,.02,.91,-.10),(1.65,.035,.795,-.085),(1.88,.04,.85,-.04),(2.05,.05,1.045,.035),(2.20,.065,1.16,.17),(2.35,.07,1.11,.29),(2.55,.06,.94,.40),(2.72,.035,.885,.47),(3.1,.025,.92,.60),(3.5,.02,.96,.73),(4.2,.02,.955,.76)])
    pelvis=curve([(0,0,62,0),(1.0,0,66,-2),(1.65,-4,72,-4),(1.95,-2,58,-2),(2.20,8,18,2),(2.45,19,-20,3),(2.7,13,-34,1),(3.1,4,-15,0),(3.5,0,0,0),(4.2,0,0,0)])
    spine=curve([(0,3,0,0),(1.1,-3,4,-5),(1.65,-12,8,-12),(1.95,-13,1,-8),(2.08,-4,-7,6),(2.20,2,-12,16),(2.40,13,-20,6),(2.70,9,-12,0),(3.2,2,0,0),(4.2,2,0,0)])
    chest=curve([(0,0,4,0),(1.15,-5,5,-4),(1.65,-10,8,-10),(1.95,-11,0,-9),(2.08,-5,-10,3),(2.20,1,-15,9),(2.40,8,-22,5),(2.70,5,-8,0),(3.2,0,0,0),(4.2,0,0,0)])
    neck=curve([(0,0,-15,0),(1.0,-15,-15,0),(1.55,-25,-15,0),(2.05,-24,-8,0),(2.20,-18,-5,0),(2.5,-9,15,0),(3,0,12,0),(4.2,0,0,0)])
    
    left_foot=curve([(0,-.14,.078,.085),(1.83,-.14,.078,.085),(2.03,-.14,.16,.09),(2.2,-.12,.34,.20),(2.36,-.10,.22,.39),(2.55,-.095,.078,.56),(2.92,-.095,.078,.56),(3.2,-.16,.12,.65),(3.5,-.22,.078,.81),(4.2,-.22,.078,.81)])
    right_foot=curve([(0,.23,.078,-.31),(1.83,.23,.078,-.31),(2.03,.22,.20,-.27),(2.20,.22,.43,-.16),(2.4,.23,.51,-.23),(2.65,.25,.33,-.16),(2.88,.24,.20,.12),(3.16,.26,.078,.95),(4.2,.26,.078,.95)])
    foot_yaw_left=curve([(0,50),(1.83,50),(2.2,6),(2.55,-25),(2.92,-25),(3.5,0),(4.2,0)])
    foot_yaw_right=curve([(0,75),(1.83,75),(2.2,20),(2.4,-10),(2.65,-30),(3.16,0),(4.2,0)])
    foot_pitch_left=curve([(0,0),(1.83,0),(2.03,20),(2.20,15),(2.36,8),(2.55,0),(4.2,0)])
    foot_pitch_right=curve([(0,0),(1.83,0),(2.03,20),(2.20,21),(2.4,29),(2.65,25),(2.90,12),(3.16,0),(4.2,0)])

    # Elevation, swing plane and axial humeral rotation. The elbow, forearm
    # roll and wrist bend have separate controls; there is no racket track.
    right_arm=curve([(0,25,-30,0),(.45,10,15,5),(.9,50,40,15),
        (1.3,92,16,-17),(1.65,85,6,-20),(1.85,100,9,55),
        (1.98,113,22,79),(2.08,123,56,98),(2.14,128,80,65),
        (2.2,134,101,20),(2.26,136,75,-20),(2.36,127,57,-35),
        (2.55,74,44,-20),(2.8,10,-20,0),(3.15,20,15,0),(3.6,25,15,0),(4.2,25,15,0)])
    right_elbow=curve([(0,40),(.45,20),(.9,40),(1.3,95),(1.65,95),
        (1.85,105),(1.98,110),(2.08,100),(2.14,65),(2.2,8),
        (2.26,12),(2.36,20),(2.55,30),(2.8,35),(3.15,55),(3.6,60),(4.2,60)])
    right_roll=curve([(0,0),(.9,-15),(1.3,-20),(1.65,-25),(1.85,-85),(1.98,-90),
        (2.08,-90),(2.14,-50),(2.2,40),(2.3,85),(2.55,65),(2.8,20),(3.6,0),(4.2,0)])
    right_wrist=curve([(0,-10,0),(.9,-15,0),(1.3,-15,-8),(1.65,-20,-10),
        (1.85,45,-8),(1.98,55,-5),(2.08,45,-5),(2.14,20,-3),
        (2.2,0,0),(2.26,50,0),(2.36,70,10),(2.55,55,20),(2.8,0,0),(4.2,-10,0)])
    left_arm=curve([(0,15,-65,0),(.45,10,-65,0),(.85,25,-70,0),
        (1.0,40,-70,0),(1.15,90,-70,0),(1.3,160,-70,0),(1.5,170,-70,0),
        (1.8,170,-65,0),(1.95,145,-60,10),(2.08,90,-55,15),
        (2.2,35,-60,20),(2.4,20,-65,10),(2.8,15,-50,0),(3.5,30,-40,0),(4.2,30,-40,0)])
    left_elbow=curve([(0,35),(.8,15),(1.05,6),(1.65,6),(1.9,15),
        (2.08,80),(2.2,115),(2.55,110),(2.8,50),(3.5,70),(4.2,70)])
    clavicle=curve([(0,0,0),(1.,2,2),(1.65,7,6),(1.95,10,9),
        (2.2,13,3),(2.5,4,-7),(3.,0,0),(4.2,0,0)])
    identity=[0,0,0,1]
    def body_pose(t):
        ro=mul(root(t),scale);ro[1]-=.018*scale
        rots=[identity[:] for _ in rig['joints']]
        rots[0]=euler_quat(pelvis(t))
        for name,c in [('spine',spine),('chest',chest),('neck',neck)]:rots[idx[name]]=euler_quat(c(t))
        targets={};contacts={}
        for side,foot,yaw,pitch in [('left',left_foot,foot_yaw_left,foot_pitch_left),('right',right_foot,foot_yaw_right,foot_pitch_right)]:
            p,w=fk(rig,ro,rots);i,j,k=(idx[side+n] for n in ['_hip','_knee','_ankle'])
            target=mul(foot(t),scale);l1=norm(rig['joints'][j]['offset']);l2=norm(rig['joints'][k]['offset'])
            # Every foot target must actually be reachable; never silently clamp.
            require_reachable(p[i],target,l1,l2,0,155)
            pole=add(p[i],rotate(rots[0],[0,-.2,1]))
            ik=solve_two_bone(p[i],target,pole,l1,l2,0,155)
            d1=unit(sub(ik['middle'],p[i]));d2=unit(sub(ik['end'],ik['middle']))
            x=unit(cross(d1,d2));y=mul(d1,-1);upper=basis_quat(x,y,cross(x,y))
            rots[i]=qmul(qinv(w[rig['joints'][i]['parent']]),upper)
            rots[j]=euler_quat([ik['bend_degrees'],0,0])
            lower=qmul(upper,rots[j]);foot_world=qmul(euler_quat([0,yaw(t)[0],0]),euler_quat([pitch(t)[0],0,0]))
            rots[k]=qmul(qinv(lower),foot_world)
            targets[side+'_ankle']=target
            contacts[side+'_ankle']=t<1.83 or (side=='left' and 2.55<=t<=2.92) or (side=='left' and t>=3.5) or (side=='right' and t>=3.16)
        lift,protract=clavicle(t)
        for side,arm,elbow in [('right',right_arm,right_elbow),('left',left_arm,left_elbow)]:
            sign=1 if side=='right' else -1
            rots[idx[side+'_clavicle']]=euler_quat([0,sign*protract,sign*lift])
            rots[idx[side+'_shoulder']]=swing_twist(*arm(t))
            rots[idx[side+'_elbow']]=euler_quat([-elbow(t)[0],0,0])
        rots[idx['right_forearm']]=euler_quat([0,right_roll(t)[0],0])
        flex,deviation=right_wrist(t);rots[idx['right_wrist']]=euler_quat([flex,0,deviation])
        p,w=fk(rig,ro,rots)
        return {'root':ro,'rotations':rots,'positions':p,'world_rotations':w,'contacts':contacts,'position_targets':targets}

    contact=body_pose(impact_native)
    wristq=contact['world_rotations'][idx['right_wrist']]
    # Choose a single grip orientation: the face points towards the court at
    # contact. This constant transform is then used throughout the whole clip.
    y=rotate(wristq,[0,-1,0]);z=unit(sub([0,0,1],mul(y,dot(y,[0,0,1]))));x=unit(cross(y,z))
    world_racket=basis_quat(x,y,cross(x,y))
    racket={'name':'racket','parent_joint':'right_wrist','local_position':[0,-.057*rig['scale'],0],
        'local_rotation':qmul(qinv(wristq),world_racket),'shape':'tennis_racket','scale':scale,
        'points':{'sweet_spot':[0,.46*scale,0]}}
    def attach(f):
        f['attachments']={'racket':attachment_transform(racket,rig,f['positions'],f['world_rotations'])}
        f['grip']=f['attachments']['racket']['position'];f['racket_rotation']=f['attachments']['racket']['rotation']
        f['sweet_spot']=f['attachments']['racket']['points']['sweet_spot']
        f['left_palm']=add(f['positions'][idx['left_wrist']],rotate(f['world_rotations'][idx['left_wrist']],[0,-.057*rig['scale'],0]))
        return f
    contact=attach(contact);release_pose=attach(body_pose(release/factor))
    ball_radius=.0335*scale;release_pos=add(release_pose['left_palm'],[0,ball_radius,0])
    impact_pos=add(contact['sweet_spot'],rotate(contact['racket_rotation'],[0,0,ball_radius]))
    gravity=[0,-9.81,0];dt=impact-release
    toss_v=mul(sub(sub(impact_pos,release_pos),mul(gravity,.5*dt*dt)),1/dt)
    target=[-2.5*scale,ball_radius,17.6*scale];travel=.49*factor
    out_v=mul(sub(sub(target,impact_pos),mul(gravity,.5*travel**2)),1/travel)
    frames=[]
    for i in range(count):
        time=i/fps;t=time/factor;f=attach(body_pose(t));f['time']=time
        if time<release:ball=add(f['left_palm'],[0,ball_radius,0])
        elif time<=impact:
            u=time-release;ball=add(add(release_pos,mul(toss_v,u)),mul(gravity,.5*u*u))
        elif time<=impact+travel:
            u=time-impact;ball=add(add(impact_pos,mul(out_v,u)),mul(gravity,.5*u*u))
        else:
            velocity=[a*b for a,b in zip(add(out_v,mul(gravity,travel)),[.78,-.62,.78])];u=time-impact-travel
            ball=add(add(target,mul(velocity,u)),mul(gravity,.5*u*u));ball[1]=max(ball_radius,ball[1])
        f['ball']=ball
        f['phase']='Set' if t<.55 else 'Toss' if t<1.4 else 'Load' if t<1.83 else 'Racquet drop' if t<2.10 else 'Contact' if t<2.24 else 'Follow-through' if t<2.78 else 'Recover'
        frames.append(f)
    pin={'time':impact,'rotations':{rig['joints'][i]['name']:q for i,q in enumerate(contact['rotations']) if rig['joints'][i]['name'].startswith('right_') and any(n in rig['joints'][i]['name'] for n in ['shoulder','elbow','forearm','wrist'])}}
    return {'schema_version':2,'title':'Tennis serve','action':'serve','backend':'constrained_kinematic',
        'rig':rig,'duration':duration,'fps':fps,'frames':frames,'parameters':{'duration':duration},
        'release_time':release,'impact_time':impact,'attachments':[racket],'pose_pins':[pin],
        'ball_contact':{'time':impact,'attachment':'racket','point':'sweet_spot','radius':ball_radius},
        'notes':['Authored reference motion with an articulated arm and fixed racket grip.',
            'Clavicle and shoulder coordinates are synthetic approximations; no anatomical validation.',
            'No motion capture, force-driven tracking, or collision avoidance is claimed.']}
    
