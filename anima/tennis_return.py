"""Reusable compact forehand return; the director chooses high-level controls."""
import json,math
from pathlib import Path
from .math3d import *
from .curves import KeyCurve
from .reference_motion import build_rig
from .rigs import fk
from .constraints import basis_quat,attachment_transform
from .arm_solver import with_forearm_roll,solve_arm,set_world,smooth_recipe_arms


def generate_forehand_return(fps=240):
    controls=json.loads((Path(__file__).parent/'data/forehand_return_controls.json').read_text())
    rig,names=build_rig('Forehand return',controls['height'],controls['mass'])
    rig=with_forearm_roll(rig);joints=rig['joints'];names={j['name']:i for i,j in enumerate(joints)}
    rig['anatomy']='Synthetic human, fixed segment lengths, bounded arm articulation and conservative torso clearance.'
    curves={k:KeyCurve(controls[k]) for k in ('root','hips','chest','lean','right_hand','left_hand','right_elbow','left_elbow','racket_axis')}
    feet={side:KeyCurve(rows) for side,rows in controls['feet'].items()}
    foot_yaw={side:KeyCurve(rows) for side,rows in controls['foot_yaw'].items()}
    duration=controls['duration'];impact=controls['impact_time'];s=rig['height']/1.98
    racket={'name':'racket','parent_joint':'right_wrist','local_position':[0,-.10*s,0],
            'local_rotation':qmul(euler_quat([180,0,0]),euler_quat([0,45,0])),'scale':s,'shape':'tennis_racket','points':{'sweet_spot':[0,.43*s,0]}}
    # Solve the contact grip once, then drive forearm and wrist in their own
    # coordinates. Imposing an independent racket orientation on every frame
    # overconstrains the arm and can force an elbow-plane branch switch.
    contact_root=curves['root'](impact);contact_rots=[[0,0,0,1] for _ in joints]
    hip=curves['hips'](impact)[0];chest=curves['chest'](impact)[0];lean=curves['lean'](impact)[0]
    for name,q in [('pelvis',euler_quat([-lean*.45,hip,0])),('spine',euler_quat([-lean,(hip+chest)*.5,0])),('chest',euler_quat([-lean,chest,0]))]:
        set_world(rig,contact_root,contact_rots,name,q)
    contact_rots[names['right_clavicle']]=euler_quat([0,-12,0])
    p,w=fk(rig,contact_root,contact_rots);cq=w[names['chest']];center=p[names['chest']]
    hand=add(center,rotate(cq,curves['right_hand'](impact)));elbow=add(center,rotate(cq,curves['right_elbow'](impact)))
    axis=unit(curves['racket_axis'](impact));z=unit(sub([0,0,1],mul(axis,axis[2])));x=unit(cross(axis,z))
    wrist=qmul(qmul(cq,basis_quat(x,axis,z)),qinv(racket['local_rotation']))
    contact_pose=solve_arm(rig,contact_root,contact_rots,'right',hand,elbow,wrist,
                           minimum_clearance=.002,elbow_region={'min_lateral':.06*s,'min_forward':.04*s,'max_up':curves['right_hand'](impact)[1]+.02})
    contact_elbow=rotate(qinv(cq),sub(contact_pose['elbow'],center))
    rows=[row[:] for row in controls['right_elbow']]
    for row in rows:
        if row[0]==impact:row[1:]=contact_elbow
    curves['right_elbow']=KeyCurve(rows)
    roll,flex,deviation=contact_pose['articulation']
    articulation=KeyCurve([[0,20,-30,5],[1.95,20,-30,5],[2.45,-10,-40,10],
                          [2.65,0,-20,-10],[impact,roll,flex,deviation],
                          [3.08,65,20,0],[3.24,75,10,-5],[3.48,50,10,0],
                          [3.85,20,-30,5],[duration,20,-30,5]])
    frames=[];previous={}
    for n in range(round(duration*fps)+1):
        t=n/fps;root=curves['root'](t);rots=[[0,0,0,1] for _ in joints]
        hips=curves['hips'](t)[0];chest=curves['chest'](t)[0];lean=curves['lean'](t)[0]
        def world(name,q):set_world(rig,root,rots,name,q)
        world('pelvis',euler_quat([-lean*.45,hips,0]));world('spine',euler_quat([-lean,(hips+chest)*.5,0]));world('chest',euler_quat([-lean,chest,0]))
        world('neck',euler_quat([-4,0,0]));world('head',euler_quat([-9,0,0]))
        for side in ('left','right'):
            foot_q=euler_quat([0,foot_yaw[side](t)[0],0]);target=feet[side](t)
            p,w=fk(rig,root,rots);a,b,c=[names[side+'_'+j] for j in ('hip','knee','ankle')]
            start=p[a];pole=rotate(foot_q,[0,0,1]);ik=solve_two_bone(start,target,add(start,pole),norm(joints[b]['offset']),norm(joints[c]['offset']),3,155)
            if ik['residual_m']>.002:raise ValueError(f'Foot target unreachable at {t:.4f}')
            d1=unit(sub(ik['middle'],start));d2=unit(sub(ik['end'],ik['middle']));x=unit(cross(d1,d2));y=mul(d1,-1)
            world(side+'_hip',basis_quat(x,y,cross(x,y)));rots[b]=euler_quat([ik['bend_degrees'],0,0]);world(side+'_ankle',foot_q)
        # The hands and elbow guides live in the turning chest frame. Shoulder
        # protraction brings the arms forward before the swing, not through skin.
        for side,sgn in [('right',1),('left',-1)]:
            rots[names[side+'_clavicle']]=euler_quat([0,-sgn*12,0])
            p,w=fk(rig,root,rots);cq=w[names['chest']];center=p[names['chest']]
            hand=add(center,rotate(cq,curves[side+'_hand'](t)))
            elbow=add(center,rotate(cq,curves[side+'_elbow'](t)))
            if side=='left' and t<2.45:
                p,w=fk(rig,root,rots);a=attachment_transform(racket,rig,p,w)
                support=add(p[names['right_wrist']],rotate(a['rotation'],[0,.12*s,0]))
                blend=clamp((t-2.15)/.30,0,1);blend=blend**3*(10-15*blend+6*blend*blend)
                hand=add(mul(support,1-blend),mul(hand,blend))
            try:
                solved=solve_arm(rig,root,rots,side,hand,elbow,None,previous.get(side),minimum_clearance=.002,
                                 elbow_region={'min_lateral':(.06-.21*clamp((t-2.85)/.24,0,1))*s if side=='right' else .06*s,'min_forward':.04*s,'max_up':curves[side+'_hand'](t)[1]+.04 if side=='right' else math.inf})
            except ValueError as exc:raise ValueError(f'{side} arm at {t:.4f}: {exc}') from exc
            previous[side]=solved['elbow']
            if side=='right':
                roll,flex,deviation=articulation(t)
                rots[names['right_forearm']]=euler_quat([0,roll,0]);rots[names['right_wrist']]=euler_quat([flex,0,deviation])
        p,w=fk(rig,root,rots);a=attachment_transform(racket,rig,p,w)
        phase='Ready' if t<2 else 'Split step' if t<2.25 else 'Unit turn' if t<2.6 else 'Forward swing' if t<impact-.015 else 'Contact' if t<impact+.04 else 'Follow through' if t<3.45 else 'Recover'
        frames.append({'time':t,'root':root,'rotations':rots,'positions':p,'world_rotations':w,
                       'attachments':{'racket':a},'grip':a['position'],'sweet_spot':a['points']['sweet_spot'],
                       'racket_rotation':a['rotation'],'phase':phase,'contacts':{}})
    smooth_recipe_arms(rig,frames,fps)
    for f in frames:
        a=attachment_transform(racket,rig,f['positions'],f['world_rotations'])
        f.update(attachments={'racket':a},grip=a['position'],sweet_spot=a['points']['sweet_spot'],racket_rotation=a['rotation'])
    rig['root_position']=frames[0]['root'][:]
    radius=.0335;hit=frames[round(impact*fps)]['attachments']['racket']
    contact=add(hit['points']['sweet_spot'],rotate(hit['rotation'],[0,0,radius]))
    from .tennis_ball import rally_flight
    ball,_=rally_flight([-2.24386,3.13949,23.74022],contact,[-3.35,radius,22.0],2.1083333333333334,2.6166666666666667,impact,impact+1.07)
    for f in frames:f['ball']=ball(f['time'])
    return {'title':'Forehand return','action':'forehand_return','backend':'constrained_kinematic',
            'rig':rig,'fps':fps,'duration':duration,'impact_time':impact,'frames':frames,'attachments':[racket],
            'ball_contact':{'time':impact,'attachment':'racket','point':'sweet_spot','radius':radius},
            'source':controls['source'],'parameters':{},'notes':['Coordinated procedural forehand-return preset, not motion capture.','Arm capsules, torso envelope, forearm roll and wrist bounds are checked; dynamic balance remains unverified.'],
            'quality_policy':{'forward_knees':True,'rotation_step_limit_deg':45,'elbow_speed_limit_m_s':8}}
