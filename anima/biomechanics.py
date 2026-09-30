"""Versioned, pose-dependent constraints shared by tools, playback and export.

Research establishes the dependencies, not universal numeric limits. Values
below are explicit synthetic-model defaults, not clinical ROM measurements.
"""
import copy
import math
from functools import lru_cache
from .math3d import *
from .rigs import fk, make_rig
from .constraints import swing_twist, swing_twist_angles, rotation_distance
from .curves import KeyCurve

PROFILE='human_coupled_v1'
SOURCES=[
    {'id':'shoulder','title':'In vivo assessment of scapulohumeral rhythm during unconstrained overhead reaching', 'url':'https://pubmed.ncbi.nlm.nih.gov/19395283/', 'supports':'Scapular and humeral motion are coupled; rhythm varies through the movement.'},
    {'id':'shoulder_rotation','title':'Kinematic coupling of the glenohumeral and scapulothoracic joints generates humeral axial rotation', 'url':'https://pubmed.ncbi.nlm.nih.gov/35367838/', 'supports':'Shoulder-girdle orientation contributes to humeral rotation.'},
    {'id':'hip_knee','title':'Biceps femoris fascicle length during passive stretching', 'url':'https://pubmed.ncbi.nlm.nih.gov/29223017/', 'supports':'Hamstring length depends on combined hip and knee position.'},
    {'id':'knee_ankle','title':'The influence of knee position on ankle dorsiflexion', 'url':'https://pmc.ncbi.nlm.nih.gov/articles/PMC4118219/', 'supports':'Knee flexion changes gastrocnemius restriction of ankle dorsiflexion.'},
    {'id':'spine','title':'Lower lumbar spine axial rotation is reduced in end-range sagittal postures', 'url':'https://www.sciencedirect.com/science/article/abs/pii/S1356689X07000483', 'supports':'Available axial rotation depends on spine flexion/extension.'},
    {'id':'couplers','title':'OpenSim CoordinateCouplerConstraint', 'url':'https://opensim-org.github.io/opensim-moco-site/docs/1.2.0/html_user/classOpenSim_1_1CoordinateCouplerConstraint.html', 'supports':'Dependent coordinates can be functions of independent coordinates.'},
]
SETTINGS={
    'mobility':{'type':'number','minimum':.5,'maximum':1,'default':1,'description':'Fraction of this model’s range. Can tighten, never exceed, the base envelope.'},
    'shoulder_share':{'type':'number','minimum':.25,'maximum':.4,'default':1/3,'description':'Girdle share of total arm elevation when coordination is enabled.'},
    'max_speed':{'type':'number','minimum':60,'maximum':720,'default':360,'description':'Joint angular speed budget, degrees/s; an animation setting.'},
    'max_acceleration':{'type':'number','minimum':200,'maximum':6000,'default':2400,'description':'Joint angular acceleration budget, degrees/s².'},
    'max_jerk':{'type':'number','minimum':2000,'maximum':100000,'default':30000,'description':'Joint angular jerk budget, degrees/s³.'},
    'max_root_speed':{'type':'number','minimum':.5,'maximum':10,'default':3,'description':'Root travel speed budget, metres/s.'},
    'max_root_acceleration':{'type':'number','minimum':2,'maximum':80,'default':20,'description':'Root acceleration budget, metres/s².'},
    'max_root_jerk':{'type':'number','minimum':20,'maximum':5000,'default':400,'description':'Root jerk budget, metres/s³.'},
}
OPTIONS={
    'coordinate_shoulders':{'type':'boolean','default':True,'description':'Move the shoulder girdle with arm elevation. Turning this off reduces available elevation.'},
    'ground_lift':{'type':'boolean','default':True,'description':'Lift the root just enough to keep joint spheres above the floor; does not balance or plant feet.'},
    'auto_timing':{'type':'boolean','default':True,'description':'Lengthen timing when angular speed, acceleration or jerk exceed the profile budgets.'},
}


def settings_for(rig):
    values={k:v['default'] for k,v in SETTINGS.items()}
    values.update(rig.get('biomechanics',{}).get('settings',{}));return values


def body_rig(rig,settings=None):
    if rig['species']!='human':raise ValueError('Coupled body controls currently require a human rig; canine limits remain a separate model.')
    if rig.get('biomechanics',{}).get('profile')==PROFILE:
        out=copy.deepcopy(rig)
    else:
        # Use a known coordinate convention, never assume a captured rig's
        # marker frames are anatomical coordinates.
        from .constraints import articulated_arms
        out=articulated_arms(make_rig('human',rig['height'],rig['mass'],rig['name']))
        old=out['joints'];result=[]
        for item in old:
            j=copy.deepcopy(item);parent=old[j['parent']]['name'] if j['parent']>=0 else None
            if j['name'].endswith('_shoulder'):
                side=j['name'].split('_')[0]
                scap=copy.deepcopy(j);scap.update(name=side+'_scapula',parent=parent,
                    mass_kg=j['mass_kg']*.25,rotation_model='girdle_proxy',limits=[[-60,60]]*3)
                result.append(scap);parent=scap['name'];j['offset']=[0,0,0];j['mass_kg']*=.75
                j['limits']=[[0,120],[-180,180],[-100,100]]
            if j['name'].endswith('_forearm'):j.update(rotation_model='axial_twist',limits=[[0,0],[-90,90],[0,0]])
            if j['name'].endswith('_wrist'):j['limits']=[[-70,70],[0,0],[-35,35]]
            if j['name'].endswith('_elbow'):j['limits']=[[-150,0],[0,0],[0,0]]
            if j['name'].endswith(('_elbow','_wrist','_forearm')):j['arm_safety_limits']=True
            j['parent']=parent;result.append(j)
        names={j['name']:i for i,j in enumerate(result)}
        for j in result:j['parent']=names.get(j['parent'],-1)
        out['joints']=result;out.pop('id',None)
        out['biomechanics']={'profile':PROFILE,'settings':{k:v['default'] for k,v in SETTINGS.items()},
            'calibrated':False,'numeric_basis':'Synthetic animation envelope; research-informed dependencies, not measured subject ROM.'}
        out['joint_limits_calibrated']=False
        out['body_clearance_model']='standard_shirt_ellipsoids_v1'
        out['anatomy']='Synthetic coupled human; virtual shoulder-girdle coordinates, fixed bone lengths.'
    if settings:
        from .tools import validate
        validate(settings,{'type':'object','properties':SETTINGS,'additionalProperties':False})
        out['biomechanics']['settings'].update(settings)
    return out


@lru_cache(maxsize=1)
def coordinate_catalog():
    result={}
    def add(name,label,group,lo,hi,default=0,drivers=(),rule='Model envelope'):
        result[name]={'label':label,'group':group,'minimum':lo,'maximum':hi,'default':default,
                      'step':1,'unit':'deg','drivers':list(drivers),'rule':rule}
    add('pelvis_turn','Pelvis facing','Trunk',-180,180)
    add('trunk_flexion','Trunk flexion','Trunk',-25,60)
    add('trunk_side_bend','Trunk side bend','Trunk',-35,35,drivers=['trunk_flexion'],rule='Combined trunk envelope')
    add('trunk_twist','Trunk twist relative to pelvis','Trunk',-70,70,drivers=['trunk_flexion','trunk_side_bend'],rule='Bending reduces available twist; turn the pelvis to turn the whole body')
    for key,label,limit in [('flexion','Neck flexion',45),('turn','Neck turn',75),('side_bend','Neck side bend',35)]:
        add('neck_'+key,label,'Head',-limit,limit,drivers=['neck_'+k for k in ('flexion','turn','side_bend') if k!=key],rule='Combined neck envelope')
    for side in ('left','right'):
        arm=side.title()+' arm';leg=side.title()+' leg';p=side+'_'
        add(p+'girdle_up','Girdle upward rotation',arm,0,60,drivers=[p+'arm_elevation'],rule='Driven by arm elevation when shoulder coordination is on')
        add(p+'arm_elevation','Arm elevation',arm,0,175,15,[p+'girdle_up'],'Upper-arm elevation requires sufficient girdle rotation')
        add(p+'arm_plane','Arm plane · forward / outward / back',arm,-180,180,90)
        add(p+'arm_twist','Upper-arm axial rotation',arm,-100,100,drivers=[p+'arm_elevation'],rule='Narrower axial range near overhead elevation (model envelope)')
        add(p+'elbow_flexion','Elbow bend',arm,0,150,15)
        add(p+'forearm_roll','Forearm pronation / supination',arm,-90,90)
        add(p+'wrist_flexion','Wrist flexion',arm,-70,70)
        add(p+'wrist_deviation','Wrist deviation',arm,-35,35,drivers=[p+'wrist_flexion'],rule='Combined wrist envelope; forearm roll is a separate coordinate')
        add(p+'hip_flexion','Hip flexion',leg,-20,125,drivers=[p+'knee_flexion'],rule='Straight knee tightens the hip-flexion envelope')
        add(p+'hip_abduction','Hip abduction',leg,-20,45)
        add(p+'hip_rotation','Hip axial rotation',leg,-45,45,drivers=[p+'hip_flexion'],rule='Hip extension narrows axial rotation (model envelope)')
        add(p+'knee_flexion','Knee bend',leg,0,150)
        add(p+'ankle_dorsiflexion','Ankle dorsiflexion',leg,-45,45,drivers=[p+'knee_flexion'],rule='Knee bend releases the gastrocnemius-dependent restriction')
        add(p+'ankle_inversion','Ankle inversion',leg,-20,20)
    return result


def defaults():return {k:v['default'] for k,v in coordinate_catalog().items()}


def envelope(rig,coordinates,options=None):
    """Return effective intervals from the whole pose, not independent boxes."""
    c=defaults();c.update(coordinates);opts={k:v['default'] for k,v in OPTIONS.items()};opts.update(options or {})
    params=settings_for(rig);m=params['mobility'];cat=coordinate_catalog()
    ranges={k:[v['minimum']*(1 if k in ('pelvis_turn',) or k.endswith('arm_plane') else m),
               v['maximum']*(1 if k in ('pelvis_turn',) or k.endswith('arm_plane') else m)] for k,v in cat.items()}
    def remaining(*items):return math.sqrt(max(0,1-sum((value/limit)**2 for value,limit in items)))
    flex=c['trunk_flexion'];flexmax=(60 if flex>=0 else 25)*m
    side=35*m*remaining((flex,flexmax));ranges['trunk_side_bend']=[-side,side]
    twist=70*m*remaining((flex,flexmax),(c['trunk_side_bend'],35*m));ranges['trunk_twist']=[-twist,twist]
    for key,limit in [('flexion',45),('turn',75),('side_bend',35)]:
        # Triangular dependency order makes projection deterministic.
        others=[(c['neck_'+k],l*m) for k,l in [('flexion',45),('side_bend',35)] if k!=key and key=='turn']
        if key=='side_bend':others=[(c['neck_flexion'],45*m)]
        maximum=limit*m*remaining(*others);ranges['neck_'+key]=[-maximum,maximum]
    for side in ('left','right'):
        p=side+'_';up=c[p+'girdle_up']
        if opts['coordinate_shoulders']:
            up=min(60*m,max(0,c[p+'arm_elevation'])*params['shoulder_share'])
            ranges[p+'arm_elevation'][1]=min(175*m,120*m/(1-params['shoulder_share']))
        else:ranges[p+'arm_elevation'][1]=min(175*m,120*m+up)
        posterior=clamp((abs(c[p+'arm_plane'])-100)/65,0,1)
        ranges[p+'arm_elevation'][1]=min(ranges[p+'arm_elevation'][1],(175-130*posterior)*m)
        ranges[p+'girdle_up']=[up,up] if opts['coordinate_shoulders'] else [0,60*m]
        limit=(100-30*clamp((c[p+'arm_elevation']-90)/85,0,1))*m
        ranges[p+'arm_twist']=[-limit,limit]
        dev=35*m*remaining((c[p+'wrist_flexion'],70*m));ranges[p+'wrist_deviation']=[-dev,dev]
        knee=max(0,c[p+'knee_flexion'])
        ranges[p+'hip_flexion'][1]=(85+40*clamp(knee/90,0,1))*m
        limit=(30+15*clamp((c[p+'hip_flexion']+20)/40,0,1))*m
        ranges[p+'hip_rotation']=[-limit,limit]
        ranges[p+'ankle_dorsiflexion'][1]=(25+20*clamp(knee/20,0,1))*m
    return ranges


def resolve(rig,coordinates,options=None,on_limit='reject'):
    cat=coordinate_catalog();unknown=set(coordinates)-cat.keys()
    if unknown:raise ValueError('Unknown body coordinate: '+', '.join(sorted(unknown)))
    if any(isinstance(v,bool) or not isinstance(v,(int,float)) or not math.isfinite(v) for v in coordinates.values()):raise ValueError('Body coordinates must be finite numbers')
    c=defaults();c.update(coordinates);requested=c.copy();opts={k:v['default'] for k,v in OPTIONS.items()};opts.update(options or {})
    # Resolve drivers before dependents; a dependency can only tighten bounds.
    order=['pelvis_turn','trunk_flexion','trunk_side_bend','trunk_twist','neck_flexion','neck_side_bend','neck_turn']
    for s in ('left','right'):
        order += [s+'_'+k for k in ('knee_flexion','hip_flexion','hip_abduction','hip_rotation','ankle_dorsiflexion','ankle_inversion',
                  'girdle_up','arm_plane','arm_elevation','arm_twist','elbow_flexion','forearm_roll','wrist_flexion','wrist_deviation')]
    changes=[]
    for key in order:
        if key.endswith('girdle_up') and opts['coordinate_shoulders']:continue
        if c[key]==0:continue # every non-driven interval contains neutral
        lo,hi=envelope(rig,c,opts)[key];value=clamp(c[key],lo,hi)
        if abs(value-c[key])>1e-6:
            issue={'coordinate':key,'requested':c[key],'resolved':value,'available':[lo,hi],
                   'drivers':{d:c[d] for d in cat[key]['drivers']},'reason':cat[key]['rule']}
            if on_limit=='reject':raise ValueError('Body constraint: '+str(issue))
            changes.append(issue);c[key]=value
    if opts['coordinate_shoulders']:
        for s in ('left','right'):c[s+'_girdle_up']=envelope(rig,c,opts)[s+'_girdle_up'][0]
    return c,changes,envelope(rig,c,opts)


def rotations_from_coordinates(rig,c):
    names={j['name']:i for i,j in enumerate(rig['joints'])};q=[[0,0,0,1] for _ in names]
    def setq(name,value):q[names[name]]=value
    setq('pelvis',euler_quat([0,c['pelvis_turn'],0]))
    trunk=euler_quat([c['trunk_flexion'],c['trunk_twist'],c['trunk_side_bend']])
    low=slerp([0,0,0,1],trunk,.35);setq('spine',low);setq('chest',qmul(qinv(low),trunk))
    neck=euler_quat([c['neck_flexion'],c['neck_turn'],c['neck_side_bend']]);setq('neck',slerp([0,0,0,1],neck,.55));setq('head',slerp([0,0,0,1],neck,.45))
    for side,sign in [('left',-1),('right',1)]:
        p=side+'_';plane=c[p+'arm_plane']*sign;up=c[p+'girdle_up']
        girdle=qmul(swing_twist(up,plane,0),euler_quat([0,-plane,0]))
        total=swing_twist(c[p+'arm_elevation'],plane,c[p+'arm_twist']*sign-plane)
        setq(p+'scapula',girdle);setq(p+'shoulder',qmul(qinv(girdle),total))
        setq(p+'elbow',euler_quat([-c[p+'elbow_flexion'],0,0]));setq(p+'forearm',euler_quat([0,sign*c[p+'forearm_roll'],0]))
        setq(p+'wrist',euler_quat([c[p+'wrist_flexion'],0,sign*c[p+'wrist_deviation']]))
        setq(p+'hip',euler_quat([-c[p+'hip_flexion'],sign*c[p+'hip_rotation'],sign*c[p+'hip_abduction']]))
        setq(p+'knee',euler_quat([c[p+'knee_flexion'],0,0]));setq(p+'ankle',euler_quat([-c[p+'ankle_dorsiflexion'],0,sign*c[p+'ankle_inversion']]))
    return q


def coordinates_from_rotations(rig,q):
    names={j['name']:i for i,j in enumerate(rig['joints'])};c=defaults()
    def get(name):return q[names[name]]
    c['pelvis_turn']=quat_euler(get('pelvis'))[1]
    a=quat_euler(qmul(get('spine'),get('chest')))
    c.update(trunk_flexion=a[0],trunk_twist=a[1],trunk_side_bend=a[2])
    a=quat_euler(qmul(get('neck'),get('head')));c.update(neck_flexion=a[0],neck_turn=a[1],neck_side_bend=a[2])
    for side,sign in [('left',-1),('right',1)]:
        p=side+'_';a=swing_twist_angles(qmul(get(p+'scapula'),get(p+'shoulder')))
        c[p+'arm_elevation']=a[0];c[p+'arm_plane']=a[1]*sign;c[p+'arm_twist']=((a[2]+a[1]+180)%360-180)*sign
        # Plane/axial rotation are coupled at the arm-down singularity.
        if a[0]<1e-5:c[p+'arm_plane']=0
        c[p+'girdle_up']=rotation_distance([0,0,0,1],get(p+'scapula'))
        c[p+'elbow_flexion']=-quat_euler(get(p+'elbow'))[0]
        c[p+'forearm_roll']=((math.degrees(2*math.atan2(get(p+'forearm')[1],get(p+'forearm')[3]))+180)%360-180)*sign
        a=quat_euler(get(p+'wrist'));c[p+'wrist_flexion']=a[0];c[p+'wrist_deviation']=a[2]*sign
        a=quat_euler(get(p+'hip'));c[p+'hip_flexion']=-a[0];c[p+'hip_rotation']=a[1]*sign;c[p+'hip_abduction']=a[2]*sign
        c[p+'knee_flexion']=quat_euler(get(p+'knee'))[0]
        a=quat_euler(get(p+'ankle'));c[p+'ankle_dorsiflexion']=-a[0];c[p+'ankle_inversion']=a[2]*sign
    return c


def describe(rig,coordinates=None,options=None):
    rig=body_rig(rig);c,changes,ranges=resolve(rig,coordinates or {},options,'project')
    controls=copy.deepcopy(coordinate_catalog())
    for key,item in controls.items():item.update(value=c[key],available=ranges[key])
    return {'profile':PROFILE,'controls':controls,'coordinates':c,'adjustments':changes,
            'settings':settings_for(rig),'settings_schema':SETTINGS,'options_schema':OPTIONS,'sources':SOURCES,
            'enforcement':['fixed bone lengths','coupled ranges','arm/torso clearance','nonadjacent limb clearance','temporal budgets'],
            'calibration':rig['biomechanics']['numeric_basis']}


def body_frame(rig,coordinates,options=None,on_limit='reject',root=None):
    c,changes,ranges=resolve(rig,coordinates,options,on_limit);q=rotations_from_coordinates(rig,c)
    root=list(root or rig['root_position']);p,w=fk(rig,root,q)
    if (options or {}).get('ground_lift',True):
        lift=max(0,max(j['radius']-point[1] for j,point in zip(rig['joints'],p)))
        root[1]+=lift;p,w=fk(rig,root,q)
    return {'time':0,'root':root,'rotations':q,'positions':p,'world_rotations':w,'contacts':{},'body_coordinates':c},changes


def limb_clearance(rig,p,w):
    from .surface_geometry import segment_segment_distance2,point_segment_distance2,torso_triangles,capsule_surface_bound
    from .body_clearance import torso_envelope,segment_ellipsoid_bound
    n={j['name']:i for i,j in enumerate(rig['joints'])};scale=rig['height']/1.98;segments=[]
    for s in ('left','right'):
        for part,a,b,r in [('upper_arm','shoulder','elbow',.048),('forearm','elbow','wrist',.034),('hand','wrist','hand',.035),('thigh','hip','knee',.073),('calf','knee','ankle',.045)]:
            segments.append((s+'_'+part,s,part,p[n[s+'_'+a]],p[n[s+'_'+b]],r*scale))
    worst=(math.inf,None)
    for i,a in enumerate(segments):
        for b in segments[i+1:]:
            # Adjacent segments meet by design; opposite limbs must stay apart.
            if a[1]==b[1] and ({a[2],b[2]}<={'upper_arm','forearm'} or {a[2],b[2]}<={'forearm','hand'} or {a[2],b[2]}<={'thigh','calf'}):continue
            d=math.sqrt(segment_segment_distance2(a[3],a[4],b[3],b[4]))-a[5]-b[5]
            if d<worst[0]:worst=(d,a[0]+' / '+b[0])
    shapes=torso_envelope(rig,p,w);triangles=None
    head=add(p[n['head']],rotate(w[n['head']],[0,.05*scale,0]))
    for name,side,part,a,b,r in segments:
        d=math.sqrt(point_segment_distance2(head,a,b))-r-.10*scale
        if d<worst[0]:worst=(d,name+' / head')
        if part not in ('hand','thigh','calf'):continue
        if part=='thigh':a=add(a,mul(unit(sub(b,a)),2*r)) # connected hip seam: one proximal capsule diameter
        bound=min(segment_ellipsoid_bound(a,b,shape,r) for shape in shapes)
        if bound<0:
            if triangles is None:triangles=torso_triangles(rig,p,w)
            bound=capsule_surface_bound(a,b,r,triangles)
        if bound<worst[0]:worst=(bound,name+' / torso')
    return worst


def report(clip):
    """Recompute coordinates from quaternion poses, including playback midpoints."""
    rig=clip['rig'];names={j['name']:i for i,j in enumerate(rig['joints'])}
    if not {'left_scapula','right_scapula'}<=names.keys():
        return {'checks':{'coupled_body_limits':None,'limb_clearance':None,'temporal_budgets':None},'metrics':{}}
    issues=[];minimum=(math.inf,0,None);samples=[]
    frames=clip['frames'];m=settings_for(rig)['mobility']
    for i,f in enumerate(frames):
        samples.append((f['time'],f['root'],f['rotations']))
        if i+1<len(frames):
            b=frames[i+1];samples.append(((f['time']+b['time'])/2,mul(add(f['root'],b['root']),.5),[slerp(a,z,.5) for a,z in zip(f['rotations'],b['rotations'])]))
    for time,root,q in samples:
        c=coordinates_from_rotations(rig,q);ranges=envelope(rig,c,{'coordinate_shoulders':False})
        for key,(lo,hi) in ranges.items():
            if not lo-.15<=c[key]<=hi+.15 and len(issues)<12:issues.append({'time':time,'coordinate':key,'value':c[key],'available':[lo,hi]})
        # Canonical reconstruction detects unrepresented DOFs, including knee
        # twist, clavicle bypasses and independently counter-rotated spine parts.
        expected=rotations_from_coordinates(rig,c)
        for j,(a,b) in enumerate(zip(q,expected)):
            if j==names['pelvis']:continue # world/root orientation is unrestricted
            if rotation_distance(a,b)>.35 and len(issues)<12:
                issues.append({'time':time,'coordinate':rig['joints'][j]['name'],'reason':'Rotation leaves the supported coupled coordinate model'})
        p,w=fk(rig,root,q);distance,part=limb_clearance(rig,p,w)
        if distance<minimum[0]:minimum=(distance,time,part)
    temporal=temporal_metrics(clip);limits=settings_for(rig)
    return {'checks':{'coupled_body_limits':not issues,'limb_clearance':minimum[0]>=-.001,
                      'temporal_budgets':all(temporal[k]<=limits['max_'+k]*1.01 for k in temporal)},
            'metrics':{'body_constraint_issues':issues,'minimum_limb_clearance_m':minimum[0],
                       'limb_clearance_worst_sample':{'time':minimum[1],'part':minimum[2]},'angular_motion':temporal}}


def temporal_metrics(clip):
    # Quaternion-log velocities avoid Euler wrapping and detect reversal jumps.
    frames=clip['frames'];vel=[]
    for a,b in zip(frames,frames[1:]):
        dt=b['time']-a['time'];row=[]
        for x,y in zip(a['rotations'],b['rotations']):
            d=qmul(qinv(x),y)
            if d[3]<0:d=mul(d,-1)
            size=norm(d[:3]);angle=math.degrees(2*math.atan2(size,d[3]))
            row.append(mul(d[:3],angle/(size*dt)) if size>1e-12 else [0,0,0])
        vel.append(row)
    fps=clip['fps'];acc=[[mul(sub(b,a),fps) for a,b in zip(x,y)] for x,y in zip(vel,vel[1:])]
    jerk=[[mul(sub(b,a),fps) for a,b in zip(x,y)] for x,y in zip(acc,acc[1:])]
    result={k:max((norm(v) for row in rows for v in row),default=0) for k,rows in [('speed',vel),('acceleration',acc),('jerk',jerk)]}
    root_v=[mul(sub(b['root'],a['root']),1/(b['time']-a['time'])) for a,b in zip(frames,frames[1:])]
    root_a=[mul(sub(b,a),fps) for a,b in zip(root_v,root_v[1:])]
    root_j=[mul(sub(b,a),fps) for a,b in zip(root_a,root_a[1:])]
    result.update({k:max((norm(v) for v in rows),default=0) for k,rows in [('root_speed',root_v),('root_acceleration',root_a),('root_jerk',root_j)]})
    return result


def timing_factor(metrics,limits):
    return max((metrics[k]/limits['max_'+k])**(1/(3 if k.endswith('jerk') else 2 if k.endswith('acceleration') else 1)) for k in metrics)


def smooth_floor(rig,frames,fps):
    """Smooth the floor envelope with a conservative global clearance offset."""
    radius=max(1,round(.07*fps));sigma=max(1,.03*fps);raw=[f['root'][1] for f in frames]
    weights=[math.exp(-.5*(j/sigma)**2) for j in range(-radius,radius+1)];total=sum(weights)
    smooth=[sum(w*raw[min(len(raw)-1,max(0,i+j))] for j,w in zip(range(-radius,radius+1),weights))/total for i in range(len(raw))]
    padding=max(a-b for a,b in zip(raw,smooth))
    for f,y in zip(frames,smooth):
        f['root'][1]=y+padding;f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])


def animate(rig,keyframes,fps=60,options=None,on_limit='reject'):
    rig=body_rig(rig);opts={k:v['default'] for k,v in OPTIONS.items()};opts.update(options or {})
    if len(keyframes)<2 or keyframes[0]['time']!=0 or any(b['time']<=a['time'] for a,b in zip(keyframes,keyframes[1:])):
        raise ValueError('Use at least two increasing keyframe times, starting at zero')
    requested_duration=keyframes[-1]['time']
    if requested_duration<.25:raise ValueError('Motion must span at least 0.25 seconds')
    values=defaults();keys=[];adjustments=[];order=list(values)
    for key in keyframes:
        values.update(key['coordinates']);values,changes,_=resolve(rig,values,opts,on_limit)
        keys.append([key['time']]+[values[k] for k in order]);adjustments.extend(dict(time=key['time'],**v) for v in changes)
    curve=KeyCurve(keys);duration=requested_duration;frames=[]
    for attempt in range(4):
        count=round(duration*fps);duration=count/fps;frames=[]
        for i in range(count+1):
            c=dict(zip(order,curve(i/count*requested_duration)))
            # Never clamp animation samples; a curve crossing a coupled
            # boundary must be redesigned, not flattened into a rigid plateau.
            f,_=body_frame(rig,c,opts,'reject');f['time']=i/fps;frames.append(f)
        if opts['ground_lift']:smooth_floor(rig,frames,fps)
        clip={'schema_version':1,'title':rig['name']+' · body motion','rig':rig,'action':'body_motion','backend':'coupled_kinematic',
              'duration':duration,'fps':fps,'frames':frames,'parameters':{},'notes':['Research-informed synthetic coupled body profile; no muscle forces or balance controller.'],
              'body_request':{'keyframes':keyframes,'options':opts,'on_limit':on_limit},
              'playback':{'loop':False},'quality_policy':{'rotation_step_limit_deg':45},
              'body_adjustments':adjustments,'timing':{'requested_duration':requested_duration,'actual_duration':duration}}
        metrics=temporal_metrics(clip);limits=settings_for(rig)
        factor=timing_factor(metrics,limits)
        if factor<=1.005:break
        if not opts['auto_timing']:raise ValueError('Motion exceeds angular speed/acceleration/jerk budgets. Enable auto_timing or lengthen keyframe times.')
        duration*=factor*1.02
        if duration>30:raise ValueError('Required motion duration exceeds 30 seconds; simplify the sequence')
    from .quality import assert_releasable,rebuild_derived
    clip=rebuild_derived(clip);clip['evaluation']=assert_releasable(clip)
    return clip


def preview(rig,coordinates,options=None,on_limit='project'):
    rig=body_rig(rig);frame,changes=body_frame(rig,coordinates,options,on_limit)
    clip={'rig':rig,'action':'body_pose','backend':'coupled_kinematic','duration':0,'fps':60,'frames':[frame],
          'notes':[],'parameters':{}}
    from .evaluate import evaluate
    result=evaluate(clip)
    return {'valid':result['status']=='checks_passed','coordinates':frame['body_coordinates'],
            'adjustments':changes,'available':envelope(rig,frame['body_coordinates'],options),
            'checks':result['checks'],'issues':result['metrics'].get('body_constraint_issues',[]),
            'metrics':{k:v for k,v in result['metrics'].items() if k in ('arm_torso_worst_sample','limb_clearance_worst_sample','minimum_arm_torso_clearance_bound_m','minimum_limb_clearance_m')},
            'preview':clip}


def adopt_motion(clip,settings=None):
    """Give legacy procedural/XYZ-authored input the same enforced body model.

    Reference captures have different coordinate conventions and stay in their
    own reference workflow; arbitrary raw edits to those rigs are disallowed.
    """
    if clip['rig']['species']!='human' or clip.get('backend') not in ('procedural_kinematic','authored_pose'):return clip
    original=clip['rig'];rig=body_rig(original,settings);out=copy.deepcopy(clip);out['rig']=rig
    old={j['name']:i for i,j in enumerate(original['joints'])};frames=[]
    for f in clip['frames']:
        q=f['rotations'];c=defaults()
        def get(n):return q[old[n]]
        a=quat_euler(qmul(get('spine'),get('chest')));c.update(trunk_flexion=a[0],trunk_twist=a[1],trunk_side_bend=a[2])
        a=quat_euler(qmul(get('neck'),get('head')));c.update(neck_flexion=a[0],neck_turn=a[1],neck_side_bend=a[2])
        for side,sign in [('left',-1),('right',1)]:
            p=side+'_';arm=get(p+'shoulder')
            if clip.get('backend')=='procedural_kinematic':arm=qmul(euler_quat([0,0,sign*8]),arm)
            a=swing_twist_angles(arm)
            c[p+'arm_elevation']=a[0];c[p+'arm_plane']=a[1]*sign;c[p+'arm_twist']=((a[2]+a[1]+180)%360-180)*sign
            c[p+'elbow_flexion']=-quat_euler(get(p+'elbow'))[0]
            from .arm_solver import yxz_angles
            a=yxz_angles(get(p+'wrist'))
            if a is None:raise ValueError('Wrist orientation is singular; use body coordinates')
            c[p+'forearm_roll']=a[0]*sign;c[p+'wrist_flexion']=a[1];c[p+'wrist_deviation']=a[2]*sign
            a=quat_euler(get(p+'hip'));c[p+'hip_flexion']=-a[0];c[p+'hip_rotation']=a[1]*sign;c[p+'hip_abduction']=a[2]*sign
            c[p+'knee_flexion']=quat_euler(get(p+'knee'))[0]
            a=quat_euler(get(p+'ankle'));c[p+'ankle_dorsiflexion']=-a[0];c[p+'ankle_inversion']=a[2]*sign
        frame,_=body_frame(rig,c,{'ground_lift':False},'reject',f['root'])
        frame['time']=f['time'];frame['contacts']=copy.deepcopy(f['contacts'])
        # Preserve the world root; body limits operate relative to it.
        frame['rotations'][0]=get('pelvis');frame['positions'],frame['world_rotations']=fk(rig,frame['root'],frame['rotations'])
        frames.append(frame)
    out['frames']=frames;out['backend']='coupled_kinematic';out.pop('evaluation',None)
    out['notes'].append('Procedural/XYZ input converted to the coupled human profile; shoulder girdle and independent forearm rotation are resolved by the engine.')
    out['quality_policy']={'rotation_step_limit_deg':45}
    return out


def retime_motion(clip,fps=None,automatic=True):
    """Uniformly retime all tracks; preserve planted-foot and pose trajectories."""
    fps=fps or clip['fps'];source=copy.deepcopy(clip);duration=clip['duration'];requested=duration
    limits=settings_for(clip['rig'])
    from .curves import SampleSpline
    tracks=[];previous=None
    for frame in source['frames']:
        quats=[mul(q,-1) if previous and dot(q,previous[j])<0 else q for j,q in enumerate(frame['rotations'])]
        tracks.append(frame['root']+[x for q in quats for x in q]);previous=quats
    curve=SampleSpline(tracks)
    for attempt in range(5):
        factor=timing_factor(temporal_metrics(clip),limits)
        if factor>1.005 and not automatic:raise ValueError('Temporal body limits exceeded; reduce speed or enable automatic timing')
        if factor>1.005:duration*=factor*1.025
        count=round(duration*fps);duration=count/fps
        if duration>60:raise ValueError('Body timing needs more than 60 seconds; reduce the requested speed or motion range')
        frames=[]
        for i in range(count+1):
            sample=i/count*source['duration']*source['fps'];j=min(int(sample),len(source['frames'])-1);u=sample-j
            a=source['frames'][j];b=source['frames'][min(j+1,len(source['frames'])-1)]
            values=curve(sample)
            f={'time':i/fps,'root':values[:3],
               'rotations':[unit(values[k:k+4]) for k in range(3,len(values),4)],
               'contacts':{key:bool(value and b['contacts'].get(key)) for key,value in a['contacts'].items()}}
            f['positions'],f['world_rotations']=fk(clip['rig'],f['root'],f['rotations']);frames.append(f)
        clip['duration']=duration;clip['fps']=fps;clip['frames']=frames
        if timing_factor(temporal_metrics(clip),limits)<=1.005:break
    clip['timing']={'requested_duration':requested,'actual_duration':duration,'speed_multiplier':requested/duration}
    if duration>requested+.01:clip['notes'].append(f'Timing lengthened from {requested:.3f} to {duration:.3f} s to meet the profile motion budgets.')
    clip['parameters']['requested_speed']=clip['parameters'].get('speed')
    if clip['parameters'].get('speed'):clip['parameters']['speed']*=requested/duration
    return clip
