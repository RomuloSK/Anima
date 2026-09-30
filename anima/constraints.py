"""Reusable articulated-arm, rigid attachment, reach and pose constraints."""
import copy
import math
from .math3d import add, sub, mul, norm, dot, cross, unit, rotate, qmul, qinv, euler_quat, quat_euler, clamp


def swing_twist(elevation, plane, twist):
    """Arm direction from rest-down, then axial humeral rotation, in degrees."""
    return qmul(qmul(euler_quat([0,plane,0]), euler_quat([-elevation,0,0])), euler_quat([0,twist,0]))


def swing_twist_angles(q):
    d = rotate(q, [0,-1,0])
    elevation = math.degrees(math.acos(clamp(-d[1],-1,1)))
    plane = math.degrees(math.atan2(d[0],d[2])) if abs(d[0])+abs(d[2]) > 1e-8 else 0
    remaining = qmul(qinv(swing_twist(elevation,plane,0)),q)
    twist = math.degrees(2*math.atan2(remaining[1],remaining[3]))
    twist = (twist+180)%360-180
    return [elevation,plane,twist]


def joint_angles(joint, q):
    if joint.get('rotation_model')=='axial_twist':
        angles=[math.degrees(2*math.atan2(v,q[3])) for v in q[:3]]
        return [(v+180)%360-180 for v in angles]
    return swing_twist_angles(q) if joint.get('rotation_model') == 'swing_twist' else quat_euler(q)


def articulated_arms(rig):
    """Return a new rig snapshot; old characters and stored clips are not changed."""
    if rig['species'] != 'human': raise ValueError('Articulated arms require a human rig')
    if any(j['name']=='right_forearm' for j in rig['joints']): return copy.deepcopy(rig)
    out = copy.deepcopy(rig); result=[]; old=rig['joints']; scale=rig['scale']
    for original in old:
        j=copy.deepcopy(original); parent=old[j['parent']]['name'] if j['parent'] >= 0 else None
        if j['name'].endswith('_shoulder'):
            side=j['name'].split('_')[0]; sign=1 if side=='right' else -1
            clavicle=copy.deepcopy(j);clavicle.update(name=side+'_clavicle',parent=parent,
                offset=[sign*.09*scale,.105*scale,0],radius=.035*scale,mass_kg=j['mass_kg']*.35,
                limits=[[-15,15],[-20,20],[-20,20]])
            result.append(clavicle)
            parent=clavicle['name'];j.update(offset=[sign*.095*scale,0,0],mass_kg=j['mass_kg']*.65,
                rotation_model='swing_twist',limits=[[0,180],[-160,160],[-120,120]])
        if j['name'].endswith('_wrist'):
            side=j['name'].split('_')[0]
            forearm=copy.deepcopy(j);forearm.update(name=side+'_forearm',parent=parent,
                offset=[0,0,0],radius=.022*scale,mass_kg=j['mass_kg']*.55,
                limits=[[0,0],[-100,100],[0,0]])
            result.append(forearm);parent=forearm['name']
            j.update(mass_kg=j['mass_kg']*.45,limits=[[-75,75],[0,0],[-35,35]])
        j['parent']=parent;result.append(j)
    names={j['name']:i for i,j in enumerate(result)}
    for j in result:j['parent']=names.get(j['parent'],-1)
    out['joints']=result;out['arm_model']='clavicle / humeral swing-twist / elbow hinge / forearm roll / wrist bend'
    return out


def basis_quat(x,y,z):
    m=[[x[i],y[i],z[i]] for i in range(3)];tr=sum(m[i][i] for i in range(3))
    if tr>0:
        s=math.sqrt(tr+1)*2;q=[(m[2][1]-m[1][2])/s,(m[0][2]-m[2][0])/s,(m[1][0]-m[0][1])/s,.25*s]
    else:
        i=max(range(3),key=lambda k:m[k][k]);j=(i+1)%3;k=(i+2)%3
        s=math.sqrt(max(0,1+m[i][i]-m[j][j]-m[k][k]))*2
        q=[0.,0.,0.,0.];q[i]=.25*s;q[j]=(m[j][i]+m[i][j])/s;q[k]=(m[k][i]+m[i][k])/s;q[3]=(m[k][j]-m[j][k])/s
    return unit(q)


def attachment_transform(spec, rig, positions, world):
    index=next(i for i,j in enumerate(rig['joints']) if j['name']==spec['parent_joint'])
    p=add(positions[index],rotate(world[index],spec['local_position']))
    q=qmul(world[index],spec['local_rotation'])
    return {'position':p,'rotation':q,'points':{n:add(p,rotate(q,v)) for n,v in spec.get('points',{}).items()}}


def rotation_distance(a,b):
    # atan2 form avoids acos precision loss for nearly identical rotations.
    d=qmul(qinv(unit(a)),unit(b))
    return math.degrees(2*math.atan2(norm(d[:3]),abs(d[3])))


def require_reachable(root,target,l1,l2,min_bend=0,max_bend=155,tolerance=1e-6):
    d=norm(sub(target,root))
    near=math.sqrt(l1*l1+l2*l2+2*l1*l2*math.cos(math.radians(max_bend)))
    far=math.sqrt(l1*l1+l2*l2+2*l1*l2*math.cos(math.radians(min_bend)))
    if not near-tolerance <= d <= far+tolerance:
        raise ValueError(f'Unreachable target: distance {d:.6f} m; feasible interval [{near:.6f}, {far:.6f}] m')


def constraint_report(clip):
    from .rigs import fk
    grip_p=grip_q=point_error=fk_error=target_error=pin_error=0.;missing=[];valid_rotations=True
    for f in clip['frames']:
        valid_rotations = valid_rotations and all(len(q)==4 and all(math.isfinite(v) for v in q) and abs(norm(q)-1)<1e-6 for q in f['rotations'])
        p,w=fk(clip['rig'],f['root'],f['rotations'])
        fk_error=max(fk_error,max(norm(sub(a,b)) for a,b in zip(p,f['positions'])))
        for spec in clip.get('attachments',[]):
            actual=f.get('attachments',{}).get(spec['name'])
            if actual is None:missing.append(spec['name']);continue
            expected=attachment_transform(spec,clip['rig'],p,w)
            grip_p=max(grip_p,norm(sub(actual['position'],expected['position'])))
            grip_q=max(grip_q,rotation_distance(actual['rotation'],expected['rotation']))
            for name,point in expected['points'].items():
                if name not in actual.get('points',{}):missing.append(spec['name']+'.'+name)
                else:point_error=max(point_error,norm(sub(actual['points'][name],point)))
        for name,target in f.get('position_targets',{}).items():
            i=next(i for i,j in enumerate(clip['rig']['joints']) if j['name']==name)
            target_error=max(target_error,norm(sub(p[i],target)))
    for pin in clip.get('pose_pins',[]):
        f=min(clip['frames'],key=lambda f:abs(f['time']-pin['time']))
        for name,q in pin['rotations'].items():
            i=next(i for i,j in enumerate(clip['rig']['joints']) if j['name']==name)
            pin_error=max(pin_error,rotation_distance(f['rotations'][i],q))
    return {'checks':{'rotation_integrity':valid_rotations,'fk_consistency':fk_error<1e-6,
            'rigid_grip':not missing and grip_p<1e-6 and grip_q<1e-4 and point_error<1e-6,
            'target_tracking':target_error<.001,'pinned_poses':pin_error<1e-4},
        'metrics':{'max_fk_error_m':fk_error,'max_grip_position_error_m':grip_p,
            'max_grip_rotation_error_deg':grip_q,'max_attachment_point_error_m':point_error,'max_target_error_m':target_error,
            'max_pinned_pose_error_deg':pin_error,'missing_attachments':missing[:10]}}
