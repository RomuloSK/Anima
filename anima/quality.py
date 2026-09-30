"""Release gates and small, actionable reports for animation directors.

These gates catch broken geometry and discontinuities, not perceptual realism.
"""
import copy
from .math3d import add, sub, mul, dot, norm, unit, slerp, rotate, qinv
from .rigs import fk
from .constraints import attachment_transform, rotation_distance
from .evaluate import evaluate


def rebuild_derived(clip):
    """Repair cached FK/props and quaternion representation, without retiming.

    Never invent a new limb pose or move the ball to conceal a bad contact.
    """
    out=copy.deepcopy(clip); previous=None
    for frame in out['frames']:
        rots=[]
        for i,q in enumerate(frame['rotations']):
            if len(q)!=4 or norm(q)<1e-8:
                raise ValueError('Invalid rotation; regenerate from the motion recipe')
            value=unit(q)
            if previous and dot(value,previous[i])<0: value=mul(value,-1)
            rots.append(value)
        frame['rotations']=rots; previous=rots
        p,w=fk(out['rig'],frame['root'],rots)
        frame['positions']=p;frame['world_rotations']=w
        frame['attachments']={a['name']:attachment_transform(a,out['rig'],p,w)
                              for a in out.get('attachments',[])}
        racket=frame['attachments'].get('racket')
        if racket:
            frame.update(grip=racket['position'],racket_rotation=racket['rotation'],
                         sweet_spot=racket['points']['sweet_spot'])
        names={j['name']:i for i,j in enumerate(out['rig']['joints'])}
        if 'left_wrist' in names:
            i=names['left_wrist'];frame['left_palm']=add(p[i],rotate(w[i],[0,-.075*out['rig']['height']/1.98,0]))
    out.pop('evaluation',None)
    return out


def release_report(clip):
    report=evaluate(clip)
    if not clip.get('quality_policy'): return report
    frames=clip['frames'];rig=clip['rig'];names={j['name']:i for i,j in enumerate(rig['joints'])}
    timing=bool(frames) and abs(frames[0]['time'])<1e-8
    timing=timing and len(frames)==round(clip['duration']*clip['fps'])+1
    timing=timing and all(abs(f['time']-i/clip['fps'])<1e-7 for i,f in enumerate(frames))
    timing=timing and abs(frames[-1]['time']-clip['duration'])<1e-7
    report['checks']['sample_timing']=timing
    max_step=max((rotation_distance(a,b) for first,last in zip(frames,frames[1:])
                  for a,b in zip(first['rotations'],last['rotations'])),default=0)
    report['metrics']['maximum_rotation_step_deg']=max_step
    # A representation/branch-flip guard; this is not a human speed limit.
    bound=clip['quality_policy'].get('rotation_step_limit_deg',45)
    report['checks']['rotation_continuity']=max_step<=bound
    # A recipe-specific temporal bound detects elbow-plane switches which can
    # slip through a generous quaternion-step guard. Remove torso translation
    # and rotation so a court placement does not change this measurement.
    elbow_bound=clip['quality_policy'].get('elbow_speed_limit_m_s')
    if elbow_bound is not None:
        worst=(0.,0.,None);previous=None
        for frame in frames:
            p,w=fk(rig,frame['root'],frame['rotations']);chest=names['chest']
            elbows={side:rotate(qinv(w[chest]),sub(p[names[side+'_elbow']],p[chest]))
                    for side in ('left','right')}
            if previous:
                dt=frame['time']-previous[0]
                for side,point in elbows.items():
                    speed=norm(sub(point,previous[1][side]))/dt if dt>0 else float('inf')
                    worst=max(worst,(speed,frame['time'],side+'_elbow'))
            previous=(frame['time'],elbows)
        report['metrics']['maximum_chest_relative_elbow_speed_m_s']=worst[0]
        report['metrics']['elbow_continuity_worst_sample']={'time':worst[1],'part':worst[2]}
        report['checks']['elbow_continuity']=worst[0]<=elbow_bound
    if clip['quality_policy'].get('forward_knees'):
        alignment=[]
        for first,last in zip(frames,frames[1:]):
            for alpha in (0,.5,1):
                root=add(mul(first['root'],1-alpha),mul(last['root'],alpha))
                rots=[slerp(a,b,alpha) for a,b in zip(first['rotations'],last['rotations'])]
                p,_=fk(rig,root,rots)
                for side in ('left','right'):
                    h,k,a,to=[p[names[side+'_'+part]] for part in ('hip','knee','ankle','toe')]
                    axis=unit(sub(a,h));bend=sub(sub(k,h),mul(axis,dot(sub(k,h),axis)))
                    front=sub(sub(to,a),mul(axis,dot(sub(to,a),axis)))
                    if norm(bend)>1e-7 and norm(front)>1e-7:
                        alignment.append(dot(unit(bend),unit(front)))
        value=min(alignment) if alignment else None
        report['metrics']['minimum_knee_forward_alignment']=value
        report['checks']['forward_knees']=value is not None and value>=.69
    report['status']='checks_passed' if all(v is not False for v in report['checks'].values()) else 'needs_review'
    return report


def assert_releasable(clip):
    report=release_report(clip)
    failed=[k for k,v in report['checks'].items() if v is False]
    if failed:
        remedy='Use animate_body with revised coordinates or timing.' if clip['rig'].get('biomechanics') else 'Use revise_animation to rebuild from its recipe.'
        details=report['metrics'].get('body_constraint_issues',[])[:2]
        if 'limb_clearance' in failed:details.append(report['metrics'].get('limb_clearance_worst_sample',{}))
        raise ValueError('Animation release blocked: '+', '.join(failed)+'. '+remedy+(' Details: '+str(details) if details else ''))
    if clip.get('scene',{}).get('server'):
        assert_releasable(clip['scene']['server'])
    return report


def compact_report(clip,report=None):
    report=report or release_report(clip)
    fixes={'fk_consistency':'rebuild', 'bone_lengths':'rebuild', 'rigid_grip':'rebuild',
           'rotation_integrity':'rebuild'}
    issues=[{'code':key,'repair':'rebuild_from_recipe' if key not in fixes else fixes[key]}
            for key,value in report['checks'].items() if value is False]
    for issue in issues:
        if issue['code']=='arm_torso_clearance':issue.update(report['metrics'].get('arm_torso_worst_sample') or {})
        if issue['code']=='elbow_continuity':issue.update(report['metrics'].get('elbow_continuity_worst_sample') or {})
        if issue['code']=='limb_clearance':issue.update(report['metrics'].get('limb_clearance_worst_sample') or {})
        if issue['code']=='coupled_body_limits':issue['details']=report['metrics'].get('body_constraint_issues',[])[:3]
    unknown=[key for key,value in report['checks'].items() if value is None]
    metrics={key:value for key,value in report['metrics'].items()
             if key in ('max_bone_length_error_m','max_ground_penetration_m',
                        'max_grip_position_error_m','maximum_rotation_step_deg',
                        'minimum_knee_forward_alignment','ball_contact_position_error_m',
                        'minimum_arm_torso_clearance_bound_m','arm_joint_limit_violations',
                        'maximum_chest_relative_elbow_speed_m_s','angular_motion','minimum_limb_clearance_m')}
    return {'status':report['status'],'issues':issues,'unknown_checks':unknown,'metrics':metrics,
            'scope':report['scope'],'next_tool':'finish_animation' if not issues else ('animate_body' if clip['rig'].get('biomechanics') else 'revise_animation')}
