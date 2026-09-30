"""Lift screen-space reference observations into constrained 3-D tracks.

Orthographic camera and synthetic body proportions are explicit assumptions.
Depth is underdetermined by one view; optional hints must retain provenance.
"""
import copy
import math
from .math3d import norm,dot,rotate,euler_quat
from .reference_motion import NAMES,validate_manifest


def lift_2d(manifest):
    if not isinstance(manifest,dict):raise ValueError('Reference must be a JSON object')
    try:
        import numpy as np
        from scipy.optimize import least_squares
        from scipy.interpolate import PchipInterpolator
    except ImportError as exc:
        raise ValueError('2D reference lifting needs NumPy/SciPy: install anima-motion-lab[reference]') from exc
    data=copy.deepcopy(manifest)
    if data.get('kind')!='human_racket_reference_2d':raise ValueError('Use kind human_racket_reference_2d')
    camera=data.get('camera',{})
    if not isinstance(camera,dict):raise ValueError('camera must be an object')
    def finite(value,length,label,bound=10000):
        if not isinstance(value,list) or len(value)!=length or any(isinstance(v,bool) or not isinstance(v,(int,float)) or not math.isfinite(v) or abs(v)>bound for v in value):
            raise ValueError(label+' has invalid finite coordinates')
        return np.array(value,dtype=float)
    right=finite(camera.get('right'),3,'camera.right');up=finite(camera.get('up'),3,'camera.up');view=finite(data.get('view_direction'),3,'view_direction')
    for vector in (right,up,view):
        if abs(norm(vector)-1)>1e-4:raise ValueError('Camera basis vectors must have unit length')
    if any(abs(dot(a,b))>1e-4 for a,b in [(right,up),(right,view),(up,view)]):raise ValueError('Camera basis must be orthogonal')
    origin=finite(camera.get('origin_px'),2,'camera.origin_px')
    ppm=camera.get('pixels_per_metre')
    if isinstance(ppm,bool) or not isinstance(ppm,(int,float)) or not math.isfinite(ppm) or not 10<=ppm<=10000:
        raise ValueError('camera.pixels_per_metre must be finite, 10–10000')
    rows=data.get('landmarks')
    if not isinstance(rows,list) or not 4<=len(rows)<=240:raise ValueError('Use 4–240 screen-space frames')
    pan=camera.get('pan_offsets_px',[[0,0] for _ in rows])
    if not isinstance(pan,list) or len(pan)!=len(rows):raise ValueError('Provide one camera-pan offset per landmark frame')
    observations=[]
    for i,row in enumerate(rows):
        if not isinstance(row,dict) or not isinstance(row.get('points'),dict) or set(row['points'])!=set(NAMES):raise ValueError('2D frame has missing landmark roles')
        offset=finite(pan[i],2,'camera pan')
        observations.append([finite(row['points'][name],2,name)-offset for name in NAMES])
    observations=np.array(observations)
    lifted=copy.deepcopy(data);lifted['kind']='human_racket_reference'
    for row in lifted['landmarks']:row['points']={name:[0.,0.,0.] for name in NAMES}
    validate_manifest(lifted)
    times=np.array([row['time'] for row in rows]);factor=data['height']/1.98
    yaw=PchipInterpolator([k[0] for k in data['controls']['yaw']],[k[1] for k in data['controls']['yaw']])
    planar=(observations-origin)/ppm;planar[:,:,1]*=-1
    flat=planar[:,:,0,None]*right+planar[:,:,1,None]*up
    hints=data.get('fit_hints',{})
    if not isinstance(hints,dict):raise ValueError('fit_hints must be an object')
    def hint_matrix(key,width,default):
        values=hints.get(key,default)
        if not isinstance(values,list) or len(values)!=len(rows):raise ValueError(key+' needs one row per observed frame')
        return np.array([finite(value,width,key,100) for value in values])
    depth=hint_matrix('relative_depth_m',len(NAMES),[[0.]*len(NAMES) for _ in rows])
    root_depth=hint_matrix('root_depth_m',1,[[.25*factor] for _ in rows])[:,0]
    # No camera-depth coordinates are requested from the language model unless
    # an upstream source already supplies them. Neutral priors disambiguate.
    if 'relative_depth_m' not in hints:
        for i,t in enumerate(times):
            bx=np.array(rotate(euler_quat([0,float(yaw(t)),0]),[1,0,0]))
            depth[i,1]=-.225*factor*np.dot(bx,view);depth[i,2]=.225*factor*np.dot(bx,view)
    ground_default=[[max(.105*factor,flat[i,NAMES.index(side+'_ankle'),1]) for side in ('left','right')] for i in range(len(rows))]
    ground=hint_matrix('ankle_height_m',2,ground_default)
    bends=None
    if 'knee_flexion_degrees' in hints:
        bends=hint_matrix('knee_flexion_degrees',2,[[15,15] for _ in rows])
        if np.min(bends)<0 or np.max(bends)>165:raise ValueError('Knee flexion hints must be 0–165 degrees')
    fits=[];errors=[];prior=None;converged=[]
    for i,t in enumerate(times):
        bx=np.array(rotate(euler_quat([0,float(yaw(t)),0]),[1,0,0]))
        initial=flat[i]+(depth[i]+root_depth[i])[:,None]*view
        if prior is not None:initial=flat[i]+(.6*(depth[i]+root_depth[i])+.4*(prior@view))[:,None]*view
        def residual(values):
            p=values.reshape(-1,3);q=dict(zip(NAMES,p));axis=q['right_shoulder']-q['left_shoulder']
            mid=(q['right_shoulder']+q['left_shoulder'])/2;torso_up=mid-q['pelvis']
            out=list((((p@np.stack([right,-up],axis=1))-(observations[i]-origin)/ppm)*5).ravel())
            out.extend([25*(np.linalg.norm(axis)-.45*factor),25*(np.linalg.norm(torso_up)-.585*factor),20*np.dot(axis/max(np.linalg.norm(axis),1e-8),torso_up)])
            out.extend(((axis/(.45*factor)-bx)*.35).tolist())
            target=mid+.205*factor*torso_up/max(np.linalg.norm(torso_up),1e-8)
            out.extend(((q['head']-target)*7).tolist())
            for side_index,side in enumerate(('left','right')):
                hip=q['pelvis']+(-1 if side=='left' else 1)*.12*factor*bx
                for a,b,length in [(q[side+'_shoulder'],q[side+'_elbow'],.37),(q[side+'_elbow'],q[side+'_wrist'],.33),(hip,q[side+'_knee'],.515),(q[side+'_knee'],q[side+'_ankle'],.475)]:
                    out.append(35*(np.linalg.norm(a-b)-length*factor))
                if bends is not None:
                    angle=math.radians(bends[i,side_index]);distance=math.sqrt(.515**2+.475**2+2*.515*.475*math.cos(angle))*factor
                    out.append(12*(np.linalg.norm(hip-q[side+'_ankle'])-distance))
                out.append(10*(q[side+'_ankle'][1]-ground[i,side_index]))
                out.append(20*max(0,.1*factor-q[side+'_ankle'][1]))
            out.append(35*(np.linalg.norm(q['racket_head']-q['right_wrist'])-.53*factor))
            out.extend(((p@view-(depth[i]+root_depth[i]))*.45).tolist())
            out.append(6*(np.dot(q['pelvis'],view)-root_depth[i]))
            if prior is not None:out.extend(((p@view-prior@view)*.4).tolist())
            return out
        result=least_squares(residual,initial.ravel(),max_nfev=120,ftol=1e-8,xtol=1e-8)
        points=result.x.reshape(-1,3);prior=points;fits.append(points);converged.append(bool(result.success))
        projected=origin+ppm*np.stack([points@right,-points@up],axis=1)
        errors.extend(np.linalg.norm(projected-observations[i],axis=1).tolist())
        lifted['landmarks'][i]['points']={name:point.tolist() for name,point in zip(NAMES,points)}
    lifted['source'].update(depth_is_estimated=True,processing='Screen-space observations, camera-pan compensation, constrained monocular lifting and fixed-length articulated reconstruction.')
    lifted['lifting_report']={'median_reprojection_error_px':float(np.median(errors)),
                              'maximum_reprojection_error_px':float(np.max(errors)),
                              'solver_converged_frames':sum(converged),'observed_frames':len(rows),
                              'scope':'Fit to supplied image points, not calibrated 3D accuracy. Single-view depth remains inferred.'}
    return lifted
