"""Measured diagnostics. No invented confidence or realism scores."""
import math
from .math3d import norm, sub, add, rotate, slerp
from .constraints import joint_angles, constraint_report

def percentile(values,p):
    if not values: return None
    s=sorted(values); return s[round((len(s)-1)*p)]

def evaluate(clip):
    rig=clip["rig"]; joints=rig["joints"]; frames=clip["frames"]
    slips=[]; length_error=0; penetration=0; violations=[]; com=[]; support=[]
    names={j["name"]:i for i,j in enumerate(joints)}
    mass=sum(j["mass_kg"] for j in joints)
    for f,frame in enumerate(frames):
        pos=frame["positions"]
        center=[sum(p[k]*j["mass_kg"] for p,j in zip(pos,joints))/mass for k in range(3)]
        com.append(center)
        pads=[]
        for i,j in enumerate(joints):
            penetration=max(penetration,j["radius"]-pos[i][1])
            if j["parent"]>=0: length_error=max(length_error,abs(norm(sub(pos[i],pos[j["parent"]]))-norm(j["offset"])))
            a=joint_angles(j,frame["rotations"][i])
            # The root is a world transform, not an anatomical joint.
            ranges=[] if j["parent"]<0 else j["limits"]
            for axis,(value,(lo,hi)) in enumerate(zip(a,ranges)):
                if value<lo-.1 or value>hi+.1:
                    if len(violations)<50: violations.append({"frame":f,"joint":j["name"],"axis":"xyz"[axis],"angle_deg":round(value,3),"range":[lo,hi]})
            if frame["contacts"].get(j["name"],False):
                pads.append([pos[i][0],pos[i][2]])
                if f and frames[f-1]["contacts"].get(j["name"],False):
                    prev=frames[f-1]["positions"][i]; dt=frame["time"]-frames[f-1]["time"]
                    slips.append(math.hypot(pos[i][0]-prev[0],pos[i][2]-prev[2])/dt)
        # Distance to nearest declared foot center is diagnostic only, not stability.
        if pads: support.append(min(math.hypot(center[0]-p[0],center[2]-p[1]) for p in pads))
    jerk=[]; fps=clip["fps"]
    for i in range(3,len(frames)):
        roots=[frames[i-k]["root"] for k in range(4)]
        jerk.append(norm([(roots[0][k]-3*roots[1][k]+3*roots[2][k]-roots[3][k])*fps**3 for k in range(3)]))
    metrics={"max_bone_length_error_m":length_error,"max_ground_penetration_m":max(0,penetration),"stance_foot_slip_p95_m_s":percentile(slips,.95),"stance_foot_slip_max_m_s":max(slips) if slips else None,"joint_limit_violations_sample":violations,"root_jerk_rms_m_s3":math.sqrt(sum(x*x for x in jerk)/len(jerk)) if jerk else None,"mean_com_to_nearest_contact_m":sum(support)/len(support) if support else None}
    limits_calibrated=rig.get('joint_limits_calibrated',True)
    checks={"bone_lengths":length_error<1e-5,"joint_limits":not violations if limits_calibrated else None,"ground_clearance":penetration<=.005,"contact_sliding":None if not slips else max(slips)<=.05}
    constraints=constraint_report(clip)
    checks.update(constraints['checks']);metrics.update(constraints['metrics'])
    # A declared standard body profile is required for general motions. The
    # return action also opts in old return clips, so the rejected take cannot
    # escape the new gate simply by lacking the new rig metadata.
    supported=rig.get('body_clearance_model')=='standard_shirt_ellipsoids_v1' or clip.get('action')=='forehand_return' or any(j['name'].endswith('_scapula') for j in joints)
    if supported:
        from .body_clearance import clearance_report
        clearance=clearance_report(clip,interpolated=True)
        checks.update(clearance['checks']);metrics.update(clearance['metrics'])
    else:checks['arm_torso_clearance']=None
    safe_joints=[(i,j) for i,j in enumerate(joints) if j.get('arm_safety_limits')]
    arm_violations=[]
    arm_samples=((frame['time'],frame['rotations']) for frame in frames)
    mid_samples=(((a['time']+b['time'])/2,[slerp(x,y,.5) for x,y in zip(a['rotations'],b['rotations'])])
                 for a,b in zip(frames,frames[1:])) if safe_joints else ()
    from itertools import chain
    for time,rotations in chain(arm_samples,mid_samples):
        for i,j in safe_joints:
            angles=joint_angles(j,rotations[i])
            for axis,(value,(lo,hi)) in enumerate(zip(angles,j['limits'])):
                if not lo-.05<=value<=hi+.05:
                    arm_violations.append({'time':time,'joint':j['name'],'axis':'xyz'[axis],'angle_deg':value,'range':[lo,hi]})
    checks['arm_joint_limits']=not arm_violations if safe_joints else None
    metrics['arm_joint_limit_violations']=arm_violations[:8]
    if clip.get('ball_contact'):
        event=clip['ball_contact'];f=min(frames,key=lambda f:abs(f['time']-event['time']))
        attachment=f['attachments'][event['attachment']]
        gap=abs(norm(sub(f['ball'],attachment['points'][event['point']]))-event['radius'])
        center=add(attachment['points'][event['point']],rotate(attachment['rotation'],[0,0,event['radius']]))
        error=norm(sub(f['ball'],center))
        metrics['ball_surface_gap_at_contact_m']=gap
        metrics['ball_contact_position_error_m']=error;checks['ball_contact']=gap<1e-6 and error<1e-6
    if any(j['name'].endswith('_scapula') for j in joints):
        from .biomechanics import report as body_report
        body=body_report(clip);checks.update(body['checks']);metrics.update(body['metrics'])
    ok=all(v is not False for v in checks.values())
    return {"status":"checks_passed" if ok else "needs_review","checks":checks,"metrics":metrics,"sample_count":len(frames),"estimated_com":com,"scope":"Geometric and kinematic checks only. Passing is not evidence of physical balance or anatomical accuracy.","dynamics":clip.get("physics_report",{"available":False,"reason":"Procedural reference trajectory; forces and torques were not simulated."})}
