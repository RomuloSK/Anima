"""Articulate fitted reference tracks without LLM-authored joint rotations.

Input tracks need an upstream vision/pose pipeline or human annotations. This
module does not infer landmarks from raw video, and does not certify anatomy.
"""
import math
from . import __version__
from .math3d import *
from .rigs import fk
from .constraints import basis_quat,attachment_transform
NAMES=['pelvis','left_shoulder','right_shoulder','head','left_elbow','left_wrist','right_elbow','right_wrist','left_knee','left_ankle','right_knee','right_ankle','racket_head']

def validate_manifest(data):
    if not isinstance(data,dict):raise ValueError('Reference must be a JSON object')
    required={'schema_version','kind','name','height','mass','playback_slowdown','release_time','impact_time','view_direction','source','landmarks','controls','phases'}
    if required-set(data):raise ValueError('Missing reference fields: '+', '.join(sorted(required-set(data))))
    if data['schema_version']!=1 or data['kind']!='human_racket_reference':
        raise ValueError('Use schema_version 1, kind human_racket_reference')
    def numeric(value,lo,hi,label):
        if isinstance(value,bool) or not isinstance(value,(int,float)) or not math.isfinite(value) or not lo<=value<=hi:
            raise ValueError(label+' must be finite and within '+str((lo,hi)))
    def text(value,label):
        if not isinstance(value,str) or not 1<=len(value)<=200:raise ValueError(label+' must be a short string')
    def vector(value,label):
        if not isinstance(value,list) or len(value)!=3:raise ValueError(label+' must be a 3D vector')
        for v in value:numeric(v,-100,100,label)
    text(data['name'],'name');numeric(data['height'],1.3,2.3,'height');numeric(data['mass'],40,150,'mass')
    numeric(data['playback_slowdown'],.25,100,'playback_slowdown')
    vector(data['view_direction'],'view_direction')
    if norm(data['view_direction'])<.5:raise ValueError('view_direction must have a nonzero length')
    if not isinstance(data['source'],dict):raise ValueError('source must contain provenance metadata')
    for field in ('file','performer'):text(data['source'].get(field), 'source.'+field)
    rows=data['landmarks']
    if not isinstance(rows,list) or not 4<=len(rows)<=240:raise ValueError('Use 4–240 fitted landmark frames')
    prior=-1
    for row in rows:
        if not isinstance(row,dict):raise ValueError('Every landmark frame must be an object')
        numeric(row.get('time'),0,3600,'landmark time')
        if row['time']<=prior:raise ValueError('Landmark times must increase strictly')
        prior=row['time'];points=row.get('points')
        if not isinstance(points,dict) or set(points)!=set(NAMES):raise ValueError('Each frame needs these landmarks: '+', '.join(NAMES))
        for name,value in points.items():vector(value,name)
    start,end=rows[0]['time'],rows[-1]['time']
    duration=(end-start)/data['playback_slowdown']
    if not .5<=duration<=15:raise ValueError('Reconstructed duration must be 0.5–15 seconds')
    numeric(data['release_time'],start,end,'release_time');numeric(data['impact_time'],start,end,'impact_time')
    if not start<=data['release_time']<data['impact_time']<end:raise ValueError('Release must precede contact; contact must precede recovery')
    if (data['impact_time']-data['release_time'])/data['playback_slowdown']<.1:raise ValueError('Release/contact interval is too short')
    controls=data['controls']
    if not isinstance(controls,dict):raise ValueError('controls must be an object')
    for key,width in [('yaw',2),('left_foot',3),('right_foot',3),('racket_roll',2),('contact_twist',2)]:
        keys=controls.get(key)
        if not isinstance(keys,list) or not 2<=len(keys)<=240:raise ValueError(key+' needs 2–240 ordered keys')
        prior=-1
        for row in keys:
            if not isinstance(row,list) or len(row)!=width:raise ValueError(key+' key has wrong width')
            numeric(row[0],start,end,key+' time')
            if row[0]<=prior:raise ValueError(key+' times must increase strictly')
            prior=row[0]
            for value in row[1:]:numeric(value,-360,360,key+' value')
        if keys[0][0]!=start or keys[-1][0]!=end:raise ValueError(key+' must cover the full reference interval')
    phases=data['phases']
    if not isinstance(phases,list) or not 1<=len(phases)<=30:raise ValueError('phases needs 1–30 ordered labels')
    prior=-1
    for phase in phases:
        if not isinstance(phase,dict):raise ValueError('phase must be an object')
        numeric(phase.get('time'),start,end,'phase time');text(phase.get('label'),'phase label')
        if phase['time']<=prior:raise ValueError('Phase times must increase strictly')
        prior=phase['time']
    if phases[0]['time']!=start:raise ValueError('First phase must start with the reference')
    return data

def frame_xy(x,y):
    y=unit(y);z=unit(cross(x,y));x=unit(cross(y,z));return basis_quat(x,y,z)

def build_rig(name, height, mass):
    joints=[];names={}
    def j(name,parent,offset,radius,mass):
        names[name]=len(joints);joints.append({'name':name,'parent':names.get(parent,-1),'offset':offset,'radius':radius,'mass_kg':mass,'limits':[]})
    j('pelvis',None,[0,0,0],.09,12);j('spine','pelvis',[0,.13,0],.09,10);j('chest','spine',[0,.38,0],.11,20)
    j('neck','chest',[0,.16,0],.035,2);j('head','neck',[0,.12,0],.08,8);j('head_tip','head',[0,.16,0],.025,0)
    for side,sign in [('left',-1),('right',1)]:
        j(side+'_hip','pelvis',[sign*.12,0,0],.065,1);j(side+'_knee',side+'_hip',[0,-.515,0],.04,6)
        j(side+'_ankle',side+'_knee',[0,-.475,0],.028,3);j(side+'_toe',side+'_ankle',[0,-.055,.175],.022,.5)
        j(side+'_clavicle','chest',[0,.075,0],.035,.5);j(side+'_shoulder',side+'_clavicle',[sign*.225,0,0],.045,.5)
        j(side+'_elbow',side+'_shoulder',[0,-.37,0],.03,2);j(side+'_wrist',side+'_elbow',[0,-.33,0],.022,1);j(side+'_hand',side+'_wrist',[0,-.10,0],.018,.5)
    total=sum(v['mass_kg'] for v in joints)
    for v in joints:v['mass_kg']*=mass/total
    factor=height/1.98
    for v in joints:v['offset']=mul(v['offset'],factor);v['radius']*=factor
    rig={'name':name,'species':'human','height':height,'mass':mass,'scale':1.13143*factor,
         'joints':joints,'joint_limits_calibrated':False,'anatomy':'Synthetic fixed-length skeleton fitted to video observations; monocular depth and joint centres are estimates.',
         'units':{'length':'metres','time':'seconds','quaternions':'xyzw','axes':'Y up, Z serve direction, X right'}}
    return rig,names

def reconstruct(manifest):
    validate_manifest(manifest)
    try:
        import numpy as np
        from scipy.interpolate import PchipInterpolator
    except ImportError as exc:
        raise ValueError('Reference reconstruction needs NumPy and SciPy: install anima-motion-lab[reference]') from exc
    data={'method':manifest['source'].get('processing','Fitted 3-D landmarks and declared phase/foot/racket controls.')}
    times=np.array([f['time'] for f in manifest['landmarks']])
    points=np.array([[f['points'][n] for n in NAMES] for f in manifest['landmarks']])
    V=np.array(unit(manifest['view_direction']));FPS=240;SLOWDOWN=manifest['playback_slowdown']
    rig,names=build_rig(manifest['name'],manifest['height'],manifest['mass']);joints=rig['joints']
    controls=manifest['controls']
    foot_curves={side:[PchipInterpolator([row[0] for row in controls[side+'_foot']], [row[k] for row in controls[side+'_foot']]) for k in (1,2)] for side in ('left','right')}
    def foot_angles(s,side):return [float(c(s)) for c in foot_curves[side]]
    # Dense smooth trajectories, then solve the articulated skeleton every sample.
    curves={name:PchipInterpolator(times,points[:,k,:],axis=0) for k,name in enumerate(NAMES)}
    yaw=PchipInterpolator([k[0] for k in controls['yaw']],[k[1] for k in controls['yaw']])
    frame_times=np.arange(round((times[-1]-times[0])/SLOWDOWN*FPS)+1)/FPS
    racket={'name':'racket','parent_joint':'right_wrist','local_position':[0,-.10*rig['height']/1.98,0],
            'local_rotation':euler_quat([0,0,180]),'scale':rig['height']/1.98,'shape':'tennis_racket','points':{'sweet_spot':[0,.43*rig['height']/1.98,0]}}
    # Estimate string-bed roll from visible ellipses. At contact the bed faces
    # the service direction; roll is independent of the traced long axis.
    roll_curve=PchipInterpolator([k[0] for k in controls['racket_roll']],[k[1] for k in controls['racket_roll']])
    frames=[];previous_axes={};previous_poles={};previous_knee_angles={};previous_racket_x=None;reach_errors=[];reach_details=[]
    for t in frame_times:
        s=times[0]+t*SLOWDOWN;q={name:curve(s).tolist() for name,curve in curves.items()};root=q['pelvis']
        rots=[[0,0,0,1] for _ in joints]
        def world(name,r):
            _,wr=fk(rig,root,rots);parent=joints[names[name]]['parent'];rots[names[name]]=r if parent<0 else qmul(qinv(wr[parent]),r)
        axis=sub(q['right_shoulder'],q['left_shoulder']);up=sub(mul(add(q['left_shoulder'],q['right_shoulder']),.5),root)
        torso=frame_xy(axis,up);world('pelvis',frame_xy(rotate(euler_quat([0,float(yaw(s)),0]),[1,0,0]),up));p,w=fk(rig,root,rots)
        world('spine',frame_xy(axis,sub(mul(add(q['left_shoulder'],q['right_shoulder']),.5),p[names['spine']])));world('chest',torso)
        # The neck is posed toward the reference head centre, so the head
        # position is not driven by a ball-look rotation.
        p,w=fk(rig,root,rots);world('neck',frame_xy(rotate(torso,[1,0,0]),sub(q['head'],p[names['neck']])))
        for side in ['left','right']:
            foot_yaw,pitch=foot_angles(s,side);footq=euler_quat([-pitch,foot_yaw,0]);front=rotate(footq,[0,0,1])
            for limb,a,b,c,target,pole,sgn in [('arm','shoulder','elbow','wrist',q[side+'_wrist'],q[side+'_elbow'],-1),('leg','hip','knee','ankle',q[side+'_ankle'],q[side+'_knee'],1)]:
                a,b,c=[side+'_'+part for part in [a,b,c]];p,w=fk(rig,root,rots)
                line=unit(sub(target,p[names[a]]));bend=sub(pole,p[names[a]]);bend=sub(bend,mul(line,dot(bend,line)))
                if limb=='leg':
                    toe_vector=rotate(footq,[0,-.055,.175]);anterior=unit(sub(toe_vector,mul(line,dot(toe_vector,line))));lateral=unit(cross(line,anterior))
                    confidence=clamp(dot(bend,anterior)/.045,0,1);confidence=confidence*confidence*(3-2*confidence)
                    angle=clamp(math.atan2(dot(bend,lateral),dot(bend,anterior)),-math.pi/4,math.pi/4)*confidence
                    prior=previous_knee_angles.get(a,angle);angle=prior+clamp(angle-prior,-.035,.035);previous_knee_angles[a]=angle
                    bend=add(mul(anterior,math.cos(angle)),mul(lateral,math.sin(angle)))
                else:
                    prior=previous_poles.get(a)
                    if prior is not None:
                        prior=unit(sub(prior,mul(line,dot(prior,line))))
                        candidate=unit(bend);turn=math.acos(clamp(dot(prior,candidate),-1,1))
                        amount=min(1,.09/max(turn,1e-9))
                        # Carry the last bend plane through near-extension.
                        distance=norm(sub(target,p[names[a]]));full=norm(joints[names[b]]['offset'])+norm(joints[names[c]]['offset'])
                        amount*=clamp((full-distance)/.015,0,1)
                        bend=unit(add(mul(prior,1-amount),mul(candidate,amount)))
                    else:bend=unit(bend)
                    previous_poles[a]=bend
                pole=add(p[names[a]],bend)
                ik=solve_two_bone(p[names[a]],target,pole,norm(joints[names[b]]['offset']),norm(joints[names[c]]['offset']),3,165)
                reach_errors.append(ik['residual_m']);reach_details.append((ik['residual_m'],float(s),a))
                d1=unit(sub(ik['middle'],p[names[a]]));d2=unit(sub(ik['end'],ik['middle']))
                x=mul(unit(cross(d1,d2)),sgn)
                if norm(x)<1e-5:x=previous_axes.get(a,rotate(torso,[1,0,0]))
                previous_axes[a]=x;y=mul(d1,-1);world(a,basis_quat(x,y,cross(x,y)));rots[names[b]]=euler_quat([sgn*ik['bend_degrees'],0,0])
            world(side+'_ankle',footq)
        p,w=fk(rig,root,rots)
        long_axis=unit(sub(q['racket_head'],q['right_wrist']))
        # Parallel-transport a frame along the racket axis before applying the
        # observed roll; no world-up cross-product singularity at contact.
        if previous_racket_x is None:
            z=unit(sub(V.tolist(),mul(long_axis,dot(V,long_axis))));x=unit(cross(long_axis,z))
        else:
            x=unit(sub(previous_racket_x,mul(long_axis,dot(previous_racket_x,long_axis))))
            if norm(x)<.1:x=unit(cross(long_axis,V.tolist()))
        previous_racket_x=x
        rq=qmul(basis_quat(x,long_axis,cross(x,long_axis)),euler_quat([0,float(roll_curve(s)),0]))
        world('right_wrist',qmul(rq,qinv(racket['local_rotation'])))
        # Toss palm aligned along its forearm; head orientation is refined after
        # ball reconstruction without modifying shoulders or the hitting arm.
        p,w=fk(rig,root,rots);world('left_wrist',w[names['left_elbow']]);p,w=fk(rig,root,rots)
        a=attachment_transform(racket,rig,p,w)
        frames.append({'time':float(t),'source_time':float(s),'root':root,'rotations':rots,'positions':p,'world_rotations':w,
                       'contacts':{},'attachments':{'racket':a},'grip':a['position'],'racket_rotation':a['rotation'],'sweet_spot':a['points']['sweet_spot'],
                       'left_palm':add(p[names['left_wrist']],rotate(w[names['left_wrist']],[0,-.075*rig['height']/1.98,0]))})
    # A small centred filter removes fitting noise at a nearly straight
    # elbow, without shifting the reference timing or changing segment lengths.
    raw_rotations=[[v[:] for v in f['rotations']] for f in frames]
    raw_wrist=[f['world_rotations'][names['right_wrist']][:] for f in frames]
    def average_quaternion(values,weights):
        first=values[len(values)//2];total=[0.,0.,0.,0.]
        for value,weight in zip(values,weights):
            sign=1 if dot(value,first)>=0 else -1
            total=add(total,mul(value,weight*sign))
        return unit(total)
    for n,f in enumerate(frames):
        samples=[min(max(n+k,0),len(frames)-1) for k in range(-4,5)]
        weights=[math.exp(-k*k/(2*1.8**2)) for k in range(-4,5)]
        for name in ['left_shoulder','right_shoulder','left_elbow','right_elbow']:
            j=names[name];f['rotations'][j]=average_quaternion([raw_rotations[i][j] for i in samples],weights)
        p,w=fk(rig,f['root'],f['rotations']);wq=average_quaternion([raw_wrist[i] for i in samples],weights)
        parent=joints[names['right_wrist']]['parent'];f['rotations'][names['right_wrist']]=qmul(qinv(w[parent]),wq)
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations']);a=attachment_transform(racket,rig,f['positions'],f['world_rotations'])
        f.update(attachments={'racket':a},grip=a['position'],racket_rotation=a['rotation'],sweet_spot=a['points']['sweet_spot'],left_palm=add(f['positions'][names['left_wrist']],rotate(f['world_rotations'][names['left_wrist']],[0,-.075*rig['height']/1.98,0])))
    impact=round((manifest['impact_time']-times[0])/SLOWDOWN*FPS)/FPS;release=round((manifest['release_time']-times[0])/SLOWDOWN*FPS)/FPS
    ri,ii=[round(v*FPS) for v in [release,impact]];radius=.0335*rig['height']/1.98
    # Smoothly fit string-bed roll to the inferred contact normal. Correct
    # around the long axis only; the traced racket path and grip are unchanged.
    hitq=frames[ii]['racket_rotation'];long_axis=rotate(hitq,[0,1,0]);desired=unit(sub([0,0,1],mul(long_axis,dot([0,0,1],long_axis))))
    delta=math.degrees(math.atan2(dot(desired,rotate(hitq,[1,0,0])),dot(desired,rotate(hitq,[0,0,1]))))
    correction=PchipInterpolator([k[0] for k in controls['contact_twist']],[k[1]*delta for k in controls['contact_twist']])
    for f in frames:
        rq=qmul(f['racket_rotation'],euler_quat([0,float(correction(f['source_time'])),0]));parent=joints[names['right_wrist']]['parent']
        f['rotations'][names['right_wrist']]=qmul(qinv(f['world_rotations'][parent]),qmul(rq,qinv(racket['local_rotation'])))
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations']);a=attachment_transform(racket,rig,f['positions'],f['world_rotations'])
        f.update(attachments={'racket':a},grip=a['position'],racket_rotation=a['rotation'],sweet_spot=a['points']['sweet_spot'],left_palm=add(f['positions'][names['left_wrist']],rotate(f['world_rotations'][names['left_wrist']],[0,-.075*rig['height']/1.98,0])))
    start=add(frames[ri]['left_palm'],[0,radius,0]);contact=add(frames[ii]['sweet_spot'],rotate(frames[ii]['racket_rotation'],[0,0,radius]))
    dt=impact-release;toss=mul(sub(contact,start),1/dt);toss[1]+=4.905*dt
    velocity=[-4,-3,50];gaze=None
    for f in frames:
        t=f['time'];s=f['source_time']
        if t<release:f['ball']=add(f['left_palm'],[0,radius,0])
        elif t<=impact:
            d=t-release;f['ball']=add(add(start,mul(toss,d)),[0,-4.905*d*d,0])
        else:
            d=t-impact;f['ball']=add(add(contact,mul(velocity,d)),[0,-4.905*d*d,0])
        aim=f['ball'] if release<=t<impact+.03 else add(f['positions'][names['head']],[0,.15 if t<release else -.15,5])
        z=unit(sub(aim,f['positions'][names['head']]));horizontal=math.hypot(z[0],z[2]);z[1]=min(z[1],horizontal*math.tan(math.radians(65)));z=unit(z)
        desired=frame_xy(cross([0,1,0],z),cross(z,cross([0,1,0],z)))
        gaze=desired if gaze is None else slerp(gaze,desired,1-math.exp(-1/(FPS*.04)))
        f['rotations'][names['head']]=qmul(qinv(f['world_rotations'][names['neck']]),gaze)
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])
        f['phase']=next(k['label'] for k in reversed(manifest['phases']) if s>=k['time'])
    clip={'title':manifest['name'],'action':'reference_serve','backend':'video_guided_reconstruction',
          'rig':rig,'frames':frames,'fps':FPS,'duration':float(frame_times[-1]),'attachments':[racket],
          'impact_time':impact,'release_time':release,'ball_contact':{'time':impact,'attachment':'racket','point':'sweet_spot','radius':radius},
          'source':dict(manifest['source'],processing=data['method']),
          'parameters':{'height_m':manifest['height'],'source_slowdown_estimate':SLOWDOWN},
          'notes':['Reference-based reconstruction from the supplied video, not subject motion capture.',
                   'Visible screen-space joint and racket observations are manually traced; camera panning is removed.',
                   'Depth, synthetic anatomy, occluded joints, racket roll, playback speed, and ball flight are reconstructed estimates.',
                   'No calibrated anatomy, self-collision, force or torque simulation is claimed.'],
          'generated_by':{'software':'Anima','version':__version__,'adapter':'reference_motion.py','base_motion_capture':False}}
    clip['capture_fit']={'maximum_ik_reach_residual_m':max(reach_errors),
                         'input':'Fitted 3-D landmark tracks; depth is estimated upstream.'}
    if max(reach_errors)>.08*rig['height']/1.98:
        raise ValueError('Reference tracks exceed the fixed skeleton reach tolerance; review the fitted tracks before importing')
    return clip
