"""Reconstruct a recorded serve from body and racket markers.

The source samples, timing and racket orientation are retained. Joint centres
are inferred from surface markers, then fitted to constant-length limbs.
This is motion-capture reconstruction, not a dynamics controller.
"""
import gzip
import json
import math
import statistics
from pathlib import Path
from .math3d import *
from .rigs import fk
from .constraints import basis_quat, attachment_transform


def mean(points):
    return [sum(p[k] for p in points)/len(points) for k in range(3)]


def frame_xy(x, y):
    y = unit(y); z = unit(cross(x, y)); x = unit(cross(y, z))
    return basis_quat(x, y, z)


def load_recorded_serve(character, fps=60):
    if character['species'] != 'human': raise ValueError('Serve recording requires a human character')
    with gzip.open(Path(__file__).parent/'data'/'tennis_serve_markers.json.gz','rt') as f:
        source = json.load(f)
    raw = source.pop('markers')
    # Source Z is vertical. Turn the recorded court direction (+source X)
    # into +world Z with one fixed, proper rotation. No mirroring.
    def convert(v): return [v[1],v[2],v[0]]
    captured = [[convert(p) for p in row] for row in raw]
    native_fps = source['fps']; duration = (len(captured)-1)/native_fps
    records=[]
    for p in captured:
        avg=lambda *ids:mean([p[i] for i in ids])
        px=sub(avg(47,48),avg(45,46)); forward=sub(avg(45,48),avg(49,50))
        pq=frame_xy(px,cross(forward,px)); py=rotate(pq,[0,1,0])
        root=sub(avg(45,46,47,48,49,50),mul(py,.075))
        cx=sub(p[9],p[8]); cq=frame_xy(cx,sub(avg(8,9),root));cy=rotate(cq,[0,1,0])
        shoulder={'right':sub(p[8],mul(cy,.026)), 'left':sub(p[9],mul(cy,.026))}
        chest=sub(mean(list(shoulder.values())),mul(cy,.105))
        head=avg(3,4,5,6)
        # The four head markers run around the head perimeter, not as two
        # consecutive front/back pairs. Using that wrong pairing turns the
        # reconstructed face sideways and down during contact.
        headforward=sub(avg(3,6),avg(4,5));headx=sub(avg(5,6),avg(3,4))
        hq=frame_xy(headx,cross(headforward,headx))
        # Markers 1 and 2 are opposite rim points, 0 is the throat marker.
        center=avg(1,2); rq=frame_xy(sub(p[2],p[1]),sub(center,p[0]))
        records.append({'root':root,'pelvis_q':pq,'chest':chest,'chest_q':cq,
            'head':sub(head,rotate(hq,[0,.045,0])),'head_q':hq,
            'shoulder':shoulder,'elbow':{'right':avg(35,36),'left':avg(18,19)},
            'wrist':{'right':avg(40,41),'left':avg(23,24)},
            'wrist_axis':{'left':sub(p[24],p[23])},
            'hand':{'right':avg(42,43),'left':avg(25,26)},
            'knee':{'right':add(p[55],mul(unit(px),.038)),'left':sub(p[67],mul(unit(px),.038))},
            'ankle':{'right':avg(60,61),'left':avg(72,73)},
            'toe':{'right':p[62],'left':p[74]},
            'ankle_axis':{'right':sub(p[61],p[60]),'left':sub(p[72],p[73])},
            'racket_center':center,'racket_q':rq})
    # Measured hand centre relative to the rigid racket is fitted once.
    # A constant wrist-to-racket transform prevents independent prop drift.
    local_wrists=[rotate(qinv(r['racket_q']),sub(r['wrist']['right'],r['racket_center'])) for r in records]
    wrist_local=[statistics.median(p[k] for p in local_wrists) for k in range(3)]
    grip_from_head=[0,-.43,0]
    palm_delta=sub(grip_from_head,wrist_local); palm_length=norm(palm_delta)
    wrist_in_racket=frame_xy([1,0,0],mul(palm_delta,-1))
    bind=qinv(wrist_in_racket)
    # Marker-based stature estimate; character scaling is uniform and never
    # time-stretches the recorded delivery.
    source_height=statistics.median(max(p[i][1] for i in [3,4,5,6])+.06 for p in captured[:30])
    scale=character['height']/source_height
    origin=[records[0]['root'][0],0,records[0]['root'][2]]
    median=lambda seq:statistics.median(seq)
    lengths={}
    for side in ['left','right']:
        lengths[side+'_upper']=median(norm(sub(r['elbow'][side],r['shoulder'][side])) for r in records)
        lengths[side+'_lower']=median(norm(sub(r['wrist'][side],r['elbow'][side])) for r in records)
        lengths[side+'_thigh']=median(norm(sub(r['knee'][side],add(r['root'],rotate(r['pelvis_q'],[.10 if side=='left' else -.10,0,0])))) for r in records)
        lengths[side+'_shin']=median(norm(sub(r['ankle'][side],r['knee'][side])) for r in records)
    # Arm reach is measured against the fitted rigid-grip wrist, not the noisy
    # wrist surface markers. Tiny length calibration avoids endpoint clamping.
    for side in ['left','right']:
        distances=[]
        for r in records:
            wrist=(add(r['racket_center'],rotate(r['racket_q'],wrist_local)) if side=='right' else r['wrist'][side])
            distances.append(norm(sub(wrist,r['shoulder'][side])))
        current=lengths[side+'_upper']+lengths[side+'_lower']
        correction=max(1,(max(distances)+.006)/current)
        lengths[side+'_upper']*=correction;lengths[side+'_lower']*=correction
        distances=[norm(sub(r['ankle'][side],add(r['root'],rotate(r['pelvis_q'],[.10 if side=='left' else -.10,0,0])))) for r in records]
        correction=max(1,(max(distances)+.002)/(lengths[side+'_thigh']+lengths[side+'_shin']))
        lengths[side+'_thigh']*=correction;lengths[side+'_shin']*=correction
    joints=[]; idx={}
    def joint(name,parent,offset,radius,mass):
        idx[name]=len(joints);joints.append({'name':name,'parent':idx.get(parent,-1),
            'offset':mul(offset,scale),'radius':radius*scale,'mass_kg':mass*character['mass']/75,
            'limits':[], 'limit_status':'Not calibrated for the captured subject'})
    joint('pelvis',None,[0,0,0],.09,12)
    joint('spine','pelvis',[0,.10,0],.09,10)
    spine_length=median(norm(sub(r['chest'],add(r['root'],rotate(r['pelvis_q'],[0,.10,0])))) for r in records)
    joint('chest','spine',[0,spine_length,0],.11,20)
    joint('neck','chest',[0,.155,0],.035,2)
    joint('head','neck',[0,.115,0],.08,8)
    joint('head_tip','head',[0,.16,0],.025,0)
    for side,sign in [('left',1),('right',-1)]:
        joint(side+'_hip','pelvis',[sign*.10,0,0],.065,1)
        joint(side+'_knee',side+'_hip',[0,-lengths[side+'_thigh'],0],.04,6)
        joint(side+'_ankle',side+'_knee',[0,-lengths[side+'_shin'],0],.028,3)
        joint(side+'_toe',side+'_ankle',[0,-.06,.17],.022,.5)
        joint(side+'_clavicle','chest',[0,.105,0],.035,.5)
        collar_length=median(norm(sub(r['shoulder'][side],add(r['chest'],rotate(r['chest_q'],[0,.105,0])))) for r in records)
        joint(side+'_shoulder',side+'_clavicle',[sign*collar_length,0,0],.045,.5)
        joint(side+'_elbow',side+'_shoulder',[0,-lengths[side+'_upper'],0],.03,2)
        joint(side+'_wrist',side+'_elbow',[0,-lengths[side+'_lower'],0],.022,1)
        joint(side+'_hand',side+'_wrist',[0,-.12,0],.018,.5)
    total=sum(j['mass_kg'] for j in joints)
    for j in joints:j['mass_kg']*=character['mass']/total
    rig={**character,'joints':joints,'scale':scale,'anatomy':'Joint centres estimated from surface markers; constant segment lengths fitted to this recording.',
         'joint_limits_calibrated':False,'source_height_m':source_height,'root_position':mul(sub(records[0]['root'],origin),scale)}
    racket={'name':'racket','parent_joint':'right_wrist','local_position':[0,-palm_length*scale,0],
        'local_rotation':bind,'shape':'tennis_racket','scale':scale,
        'points':{'sweet_spot':[0,.43*scale,0]}}
    frames=[];residuals=[];elbow_residuals=[];shoulder_residuals=[];reach_residuals=[]
    previous_bend={}
    for frame,r in enumerate(records):
        root=mul(sub(r['root'],origin),scale);rotations=[[0,0,0,1] for _ in joints]
        def point(p):return mul(sub(p,origin),scale)
        def world(name,q):
            _,w=fk(rig,root,rotations);parent=joints[idx[name]]['parent']
            rotations[idx[name]]=q if parent<0 else qmul(qinv(w[parent]),q)
        world('pelvis',r['pelvis_q'])
        pp,ww=fk(rig,root,rotations)
        sq=frame_xy(rotate(r['chest_q'],[1,0,0]),sub(point(r['chest']),pp[idx['spine']]))
        world('spine',sq);world('chest',r['chest_q'])
        pp,ww=fk(rig,root,rotations)
        nq=frame_xy(rotate(r['head_q'],[1,0,0]),sub(point(r['head']),pp[idx['neck']]))
        world('neck',nq);world('head',r['head_q'])
        for side,sign in [('left',1),('right',-1)]:
            pp,ww=fk(rig,root,rotations)
            collar=side+'_clavicle';delta=sub(point(r['shoulder'][side]),pp[idx[collar]])
            world(collar,from_to([sign,0,0],delta))
            pp,ww=fk(rig,root,rotations)
            shoulder_residuals.append(norm(sub(pp[idx[side+'_shoulder']],point(r['shoulder'][side]))))
            for limb,a,b,c,target,pole,bend_sign in [
                ('arm','shoulder','elbow','wrist',
                 point(add(r['racket_center'],rotate(r['racket_q'],wrist_local))) if side=='right' else point(r['wrist'][side]),
                 point(r['elbow'][side]),-1),
                ('leg','hip','knee','ankle',point(r['ankle'][side]),point(r['knee'][side]),1)]:
                pp,ww=fk(rig,root,rotations);a,b,c=[side+'_'+v for v in (a,b,c)]
                ik=solve_two_bone(pp[idx[a]],target,pole,norm(joints[idx[b]]['offset']),norm(joints[idx[c]]['offset']),0,175)
                if limb=='leg':
                    # Surface markers can fall behind the hip-to-ankle line
                    # near extension. A positive scalar IK bend does not stop
                    # that pole from selecting the backward-bending branch.
                    # Use the measured foot direction as an anterior reference
                    # and constrain the pole before transporting it in time.
                    axis=unit(sub(target,pp[idx[a]]));bend=sub(pole,pp[idx[a]])
                    bend=sub(bend,mul(axis,dot(bend,axis)))
                    anterior=sub(r['toe'][side],r['ankle'][side])
                    anterior=sub(anterior,mul(axis,dot(anterior,axis)))
                    if norm(anterior)<1e-5:
                        anterior=cross(axis,r['ankle_axis'][side])
                    anterior=unit(anterior);lateral=unit(cross(axis,anterior))
                    forward=dot(bend,anterior)
                    confidence=clamp(forward/(.03*scale),0,1)
                    confidence=confidence*confidence*(3-2*confidence)
                    angle=clamp(math.atan2(dot(bend,lateral),forward),-math.pi/4,math.pi/4)*confidence
                    bend=add(mul(anterior,math.cos(angle)),mul(lateral,math.sin(angle)))
                    prior=previous_bend.get(side)
                    if prior is not None:
                        prior=sub(prior,mul(axis,dot(prior,axis)))
                        if norm(prior)>1e-8:
                            prior_angle=clamp(math.atan2(dot(prior,lateral),dot(prior,anterior)),-math.pi/4,math.pi/4)
                            prior=add(mul(anterior,math.cos(prior_angle)),mul(lateral,math.sin(prior_angle)))
                            amount=clamp((ik['bend_degrees']-12)/20,0,1)
                            # Also bound convergence to a changed pole, avoiding
                            # a sudden flip as the knee bends after extension.
                            amount=min(amount,.12)
                            mixed=add(mul(prior,1-amount),mul(bend,amount))
                            if norm(mixed)>1e-8:bend=unit(mixed)
                    previous_bend[side]=bend
                    stable_pole=add(pp[idx[a]],bend)
                    ik=solve_two_bone(pp[idx[a]],target,stable_pole,norm(joints[idx[b]]['offset']),norm(joints[idx[c]]['offset']),0,175)
                reach_residuals.append(ik['residual_m'])
                d1=unit(sub(ik['middle'],pp[idx[a]]));d2=unit(sub(ik['end'],ik['middle']))
                axis=cross(d1,d2)
                if norm(axis)<1e-7:axis=cross(d1,sub(pole,pp[idx[a]]))
                if norm(axis)<1e-7:axis=rotate(r['chest_q'],[1,0,0])
                x=mul(unit(axis),bend_sign);y=mul(d1,-1);q=basis_quat(x,y,cross(x,y))
                world(a,q);rotations[idx[b]]=euler_quat([bend_sign*ik['bend_degrees'],0,0])
                if limb=='arm':elbow_residuals.append(norm(sub(ik['middle'],pole)))
            # Wrist orientation follows measured racket orientation, with one
            # fixed grip. The toss hand follows its hand marker direction.
            if side=='right':wq=qmul(r['racket_q'],wrist_in_racket)
            else:wq=frame_xy(r['wrist_axis'][side],sub(r['wrist'][side],r['hand'][side]))
            world(side+'_wrist',wq)
            # Foot pitch and yaw come from the measured ankle-to-toe vector.
            z=unit(sub(r['toe'][side],r['ankle'][side]));lateral=r['ankle_axis'][side]
            x=unit(sub(lateral,mul(z,dot(lateral,z))));y=cross(z,x)
            world(side+'_ankle',qmul(basis_quat(x,y,z),euler_quat([-math.degrees(math.atan2(.06,.17)),0,0])))
        pp,ww=fk(rig,root,rotations)
        attachment=attachment_transform(racket,rig,pp,ww)
        target_center=point(r['racket_center'])
        residuals.append(norm(sub(attachment['points']['sweet_spot'],target_center)))
        frames.append({'time':frame/native_fps,'root':root,'rotations':rotations,'positions':pp,'world_rotations':ww,
            'contacts':{},'attachments':{'racket':attachment},'grip':attachment['position'],
            'racket_rotation':attachment['rotation'],'sweet_spot':attachment['points']['sweet_spot'],
            'left_palm':add(pp[idx['left_wrist']],rotate(ww[idx['left_wrist']],[0,-.085*scale,0]))})
    # Resample quaternions, never Euler angles or world-space bone endpoints.
    source_frames=frames;count=round(duration*fps)+1;duration=(count-1)/fps;frames=[]
    for n in range(count):
        t=n/fps;u=min(len(source_frames)-1,t*native_fps);i=int(u);v=u-i
        a=source_frames[i];b=source_frames[min(i+1,len(source_frames)-1)]
        before=source_frames[max(0,i-1)]['root'];after=source_frames[min(i+2,len(source_frames)-1)]['root']
        root=[.5*((2*x)+(-p+y)*v+(2*p-5*x+4*y-n)*v*v+(-p+3*x-3*y+n)*v*v*v) for p,x,y,n in zip(before,a['root'],b['root'],after)]
        rots=[slerp(x,y,v) for x,y in zip(a['rotations'],b['rotations'])];p,w=fk(rig,root,rots)
        attachment=attachment_transform(racket,rig,p,w)
        frames.append({'time':t,'root':root,'rotations':rots,'positions':p,'world_rotations':w,'contacts':{},
            'attachments':{'racket':attachment},'grip':attachment['position'],'racket_rotation':attachment['rotation'],
            'sweet_spot':attachment['points']['sweet_spot'],
            'left_palm':add(p[idx['left_wrist']],rotate(w[idx['left_wrist']],[0,-.085*scale,0]))})
    impact_index=max(range(len(frames)),key=lambda i:frames[i]['sweet_spot'][1])
    impact=frames[impact_index]['time'];radius=.0335
    # Contact time is inferred from peak racket height, not a recorded ball event.
    q=frames[impact_index]['racket_rotation'];normal=rotate(q,[0,0,1])
    if normal[2]<0:
        racket['local_rotation']=qmul(racket['local_rotation'],euler_quat([0,180,0]))
        # A 180-degree rotation about the racket's long axis flips face normal,
        # leaves its head centre, grip, and measured string plane unchanged.
        for f in frames:
            a=attachment_transform(racket,rig,f['positions'],f['world_rotations']);f['attachments']['racket']=a;f['racket_rotation']=a['rotation']
    impact_pos=add(frames[impact_index]['sweet_spot'],rotate(frames[impact_index]['racket_rotation'],[0,0,radius]))
    # Choose the release sample that best matches a ballistic toss velocity to
    # the captured toss hand; the ball itself is reconstructed, not captured.
    options=[]
    for i,f in enumerate(frames[1:impact_index-1],1):
        if not .25<f['time']<.8:continue
        dt=impact-f['time'];p=add(f['left_palm'],[0,radius,0]);v=mul(sub(impact_pos,p),1/dt);v[1]+=4.905*dt
        hand_v=mul(sub(frames[i+1]['left_palm'],frames[i-1]['left_palm']),fps/2)
        if hand_v[1]>0:options.append((norm(sub(v,hand_v)),i,p,v))
    _,release_i,release_pos,toss_v=min(options);release=frames[release_i]['time']
    # Racket normal speed supplies an illustrative outgoing ball speed. Ball
    # collision, spin and aerodynamic forces are not solved.
    rv=mul(sub(frames[min(impact_index+1,len(frames)-1)]['sweet_spot'],frames[impact_index-1]['sweet_spot']),fps/2)
    flight=max(.36,18/max(20,norm(rv)*1.35));landing=[-2.7,radius,18]
    out_v=mul(sub(landing,impact_pos),1/flight);out_v[1]+=4.905*flight
    gaze_q=None
    for f in frames:
        t=f['time']
        if t<release:f['ball']=add(f['left_palm'],[0,radius,0])
        else:
            dt=t-(release if t<=impact else impact);p=release_pos if t<=impact else impact_pos;v=toss_v if t<=impact else out_v
            f['ball']=add(add(p,mul(v,dt)),[0,-4.905*dt*dt,0])
        # The MAT files do not provide an anatomical head calibration. Keep
        # its reconstructed position, but aim the face at the reconstructed
        # toss with a short tracking lag instead of treating a marker-cluster
        # axis as a known gaze direction.
        gaze_target=f['ball'] if t>=release else add(add(release_pos,mul(toss_v,.22)),[0,-4.905*.22**2,0])
        direction=sub(gaze_target,f['positions'][idx['head']])
        horizontal=math.hypot(direction[0],direction[2])
        direction[1]=max(-horizontal*.8,min(horizontal*math.tan(math.radians(68)),direction[1]))
        z=unit(direction);x=unit(cross([0,1,0],z));desired=basis_quat(x,cross(z,x),z)
        gaze_q=desired if gaze_q is None else slerp(gaze_q,desired,1-math.exp(-1/(fps*.065)))
        f['rotations'][idx['head']]=qmul(qinv(f['world_rotations'][idx['neck']]),gaze_q)
        f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])
        f['phase']='Set' if t<.18 else 'Toss' if t<.7 else 'Load' if t<1.1 else 'Racquet drop' if t<impact-.075 else 'Contact' if t<impact+.045 else 'Follow-through'
    marker_residuals=[]
    for p in captured:
        marker_residuals.append([norm(sub(p[i],p[j])) for i,j in [(0,1),(0,2),(1,2)]])
    distances=[median(r[k] for r in marker_residuals) for k in range(3)]
    rigidity=max(abs(r[k]-distances[k]) for r in marker_residuals for k in range(3))
    return {'schema_version':3,'title':'Recorded tennis serve','action':'recorded_serve','backend':'motion_capture',
        'rig':rig,'duration':duration,'fps':fps,'frames':frames,'parameters':{'recording':'tennis_serve'},
        'attachments':[racket],'impact_time':impact,'release_time':release,
        'ball_contact':{'time':impact,'attachment':'racket','point':'sweet_spot','radius':radius},
        'source':{**source,'recorded_duration':(len(captured)-1)/native_fps,'recorded_samples':len(captured),
            'processing':'Fixed coordinate rotation, uniform stature scaling, inferred joint centres, constant-length IK fit with anterior knee poles, quaternion resampling. Ball trajectory and head gaze reconstructed.'},
        'capture_fit':{'max_racket_center_error_m':max(residuals),'max_shoulder_marker_fit_error_m':max(shoulder_residuals),
            'max_elbow_marker_fit_error_m':max(elbow_residuals),'right_elbow_fit_max_m':max(elbow_residuals[1::2]),'left_elbow_fit_max_m':max(elbow_residuals[::2]),'rms_elbow_marker_fit_error_m':math.sqrt(sum(v*v for v in elbow_residuals)/len(elbow_residuals)),
            'max_ik_reach_residual_m':max(reach_residuals),
            'max_source_racket_distance_variation_m':rigidity,'racket_speed_at_inferred_contact_m_s':norm(rv)},
        'notes':['Recorded body and racket motion from University of Bath dataset 10.15125/BATH-01454, file 4D_56.mat; CC BY 4.0.',
            'Surface-marker joint centres are inferred; no subject-specific joint limits or dynamics validation.',
            'Knee poles stay within 45 degrees of projected foot-forward; this prevents backward IK bends without claiming calibrated joint ranges.',
            'The source contains 1.667 seconds and ends during follow-through. No fabricated recovery frames.',
            'Ball toss, flight and head gaze are reconstructed; contact timing is inferred from peak racket height.']}
