"""Body-aware arm IK, forearm roll and bounded wrist articulation."""
import copy,math
from .math3d import *
from .rigs import fk
from .constraints import basis_quat,attachment_transform,rotation_distance,joint_angles
from .body_clearance import arm_clearance


def with_forearm_roll(rig):
    """Add independent pronation joints without altering the existing lengths."""
    out=copy.deepcopy(rig);old=out['joints'];result=[]
    for j in old:
        parent=old[j['parent']]['name'] if j['parent']>=0 else None
        item=copy.deepcopy(j)
        if j['name'].endswith('_wrist'):
            side=j['name'].split('_')[0];name=side+'_forearm'
            result.append({'name':name,'parent':parent,'offset':[0,0,0],'radius':j['radius'],
                           'mass_kg':j['mass_kg']*.5,'limits':[[0,0],[-105,105],[0,0]],'arm_safety_limits':True,'rotation_model':'axial_twist'})
            parent=name;item['mass_kg']*=.5;item['limits']=[[-70,70],[0,0],[-35,35]];item['arm_safety_limits']=True
        if j['name'].endswith('_elbow'):
            item['limits']=[[-150,-5],[0,0],[0,0]];item['arm_safety_limits']=True
        item['parent']=parent;result.append(item)
    names={j['name']:i for i,j in enumerate(result)}
    for j in result:j['parent']=names.get(j['parent'],-1)
    out['joints']=result;out['body_clearance_model']='standard_shirt_ellipsoids_v1';out['arm_model']='shoulder + elbow hinge + independent forearm roll + bounded wrist'
    return out


def set_world(rig,root,rotations,name,q):
    index=next(i for i,j in enumerate(rig['joints']) if j['name']==name)
    _,w=fk(rig,root,rotations);parent=rig['joints'][index]['parent']
    rotations[index]=q if parent<0 else qmul(qinv(w[parent]),q)


def yxz_angles(q):
    """Decompose forearm-Y * wrist-X * wrist-Z, in degrees."""
    x,y,z=[rotate(q,v) for v in ([1,0,0],[0,1,0],[0,0,1])]
    a=math.asin(clamp(-z[1],-1,1))
    if abs(math.cos(a))<1e-6:return None
    return [math.degrees(math.atan2(z[0],z[2])),math.degrees(a),math.degrees(math.atan2(x[1],y[1]))]


def solve_arm(rig,root,rotations,side,target,preferred_elbow,wrist_world=None,
              previous_elbow=None,minimum_clearance=.008,bounded_wrist=True,wrist_options=None,previous_wrist=None,previous_articulation=None,elbow_region=None,angle_step=5):
    """Select a feasible elbow plane, keeping the requested hand/racket pose.

    Collision and wrist bounds are hard constraints. Temporal preference is a
    cost amongst feasible poses; it never blends a safe pose back through skin.
    Failure is explicit: callers must revise the coordinated target, not hide it.
    """
    joints=rig['joints'];names={j['name']:i for i,j in enumerate(joints)}
    a,b,c=[names[side+'_'+n] for n in ('shoulder','elbow','wrist')]
    p,w=fk(rig,root,rotations);shoulder=p[a];line=unit(sub(target,shoulder))
    preferred=sub(preferred_elbow,shoulder);preferred=sub(preferred,mul(line,dot(preferred,line)))
    if norm(preferred)<1e-8:preferred=cross(line,rotate(w[names['chest']],[0,0,1]))
    preferred=unit(preferred);lateral=unit(cross(line,preferred))
    upper=norm(joints[b]['offset']);lower=norm(joints[c]['offset'])
    full=solve_two_bone(shoulder,target,add(shoulder,preferred),upper,lower,5 if bounded_wrist else 3,150 if bounded_wrist else 165)
    if full['residual_m']>.0005:raise ValueError(f'{side} arm target unreachable by {full["residual_m"]:.4f} m')
    elbow_parent=joints[b]['parent'];forearm=names.get(side+'_forearm');chosen=None;best_clearance=-math.inf;nearest_wrist=None
    for angle in [0]+[sign*k for k in range(angle_step,181,angle_step) for sign in (1,-1)]:
        radians=math.radians(angle);bend=add(mul(preferred,math.cos(radians)),mul(lateral,math.sin(radians)))
        ik=solve_two_bone(shoulder,target,add(shoulder,bend),upper,lower,5 if bounded_wrist else 3,150 if bounded_wrist else 165)
        if elbow_region:
            local=rotate(qinv(w[names['chest']]),sub(ik['middle'],p[names['chest']]))
            sign=1 if side=='right' else -1
            if sign*local[0]<elbow_region.get('min_lateral',0) or local[2]<elbow_region.get('min_forward',-math.inf) or local[1]>elbow_region.get('max_up',math.inf):continue
        separation=arm_clearance(rig,p,w,side,ik['middle'],ik['end'])[0];best_clearance=max(best_clearance,separation)
        if separation<minimum_clearance:continue
        d1=unit(sub(ik['middle'],shoulder));d2=unit(sub(ik['end'],ik['middle']))
        x=mul(unit(cross(d1,d2)),-1);y=mul(d1,-1);shoulder_q=basis_quat(x,y,cross(x,y))
        elbow_q=euler_quat([-ik['bend_degrees'],0,0]);forearm_q=qmul(shoulder_q,elbow_q)
        options=wrist_options if wrist_options is not None else [(wrist_world,0.)]
        for desired,orientation_cost in options:
            articulation=None
            if bounded_wrist:
                if forearm is None:raise ValueError('Bounded arm IK requires an independent forearm-roll joint')
                if desired is not None:
                    articulation=yxz_angles(qmul(qinv(forearm_q),desired))
                    if articulation is not None:
                        excess=sum(max(0,abs(v)-limit)**2 for v,limit in zip(articulation,[105,70,35]))
                        if nearest_wrist is None or excess<nearest_wrist[0]:nearest_wrist=(excess,articulation)
                    if articulation is None or abs(articulation[0])>105 or abs(articulation[1])>70 or abs(articulation[2])>35:continue
                else:articulation=[0,0,0]
            cost=(angle/120)**2+orientation_cost
            if previous_elbow is not None:cost+=norm(sub(ik['middle'],previous_elbow))**2/(.10*rig['height']/1.98)**2
            if articulation is not None:
                cost+=.4*sum((abs(v)/limit)**8 for v,limit in zip(articulation,[105,70,35]))
                if previous_articulation is not None:cost+=.08*sum(((v-prior)/20)**2 for v,prior in zip(articulation,previous_articulation))
            if previous_wrist is not None and desired is not None:cost+=.15*(rotation_distance(previous_wrist,desired)/30)**2
            if chosen is None or cost<chosen[0]:chosen=(cost,ik,shoulder_q,elbow_q,articulation,separation,desired)
    if chosen is None:
        if angle_step>1:
            return solve_arm(rig,root,rotations,side,target,preferred_elbow,wrist_world,previous_elbow,minimum_clearance,bounded_wrist,wrist_options,previous_wrist,previous_articulation,elbow_region,angle_step=1)
        raise ValueError(f'{side} arm has no body-clear pose within wrist limits (best clearance {best_clearance:.4f} m; nearest roll/flex/deviation {nearest_wrist}). Revise the body-relative hand/racket path.')
    _,ik,shoulder_q,elbow_q,articulation,separation,desired=chosen
    rotations[a]=qmul(qinv(w[joints[a]['parent']]),shoulder_q);rotations[b]=elbow_q
    if bounded_wrist:
        roll,flex,deviation=articulation
        rotations[forearm]=euler_quat([0,roll,0]);rotations[c]=euler_quat([flex,0,deviation])
    elif desired is not None:set_world(rig,root,rotations,side+'_wrist',desired)
    return {'elbow':ik['middle'],'wrist':ik['end'],'clearance_bound_m':separation,'articulation':articulation,'wrist_world':desired}


def smooth_recipe_arms(rig,frames,fps):
    """Remove discrete search jitter before the recipe creates contact events.

    Articulated joints are filtered in their bounded angle coordinates; shoulder
    quaternions are averaged in one hemisphere. This is recipe construction,
    not a way to move observed targets or repair an already pinned take. The
    result must pass the collision gate, including interpolated poses.
    """
    radius=max(1,round(.018*fps));sigma=max(.7,.009*fps)
    raw=[[q[:] for q in f['rotations']] for f in frames]
    for i,f in enumerate(frames):
        indices=[clamp(i+k,0,len(frames)-1) for k in range(-radius,radius+1)]
        weights=[math.exp(-k*k/(2*sigma*sigma)) for k in range(-radius,radius+1)];total=sum(weights)
        for j,joint in enumerate(rig['joints']):
            if joint['name'].endswith('_shoulder'):
                first=raw[i][j];q=[0,0,0,0]
                for index,weight in zip(indices,weights):
                    value=raw[index][j];q=add(q,mul(value,weight*(1 if dot(value,first)>=0 else -1)))
                f['rotations'][j]=unit(q)
            elif joint.get('arm_safety_limits'):
                values=[joint_angles(joint,raw[index][j]) for index in indices]
                angles=[sum(row[k]*weight for row,weight in zip(values,weights))/total for k in range(3)]
                f['rotations'][j]=euler_quat(angles)
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])
