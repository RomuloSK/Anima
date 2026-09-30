"""Conservative arm/torso clearance for the standard rendered human.

The torso is enclosed by overlapping oriented ellipsoids. Arms are tapered
capsules, not joint-centre points. A short connected shoulder seam is excluded.
Distances are conservative bounds, not calibrated anatomical measurements.
"""
import math
from .math3d import add,sub,mul,dot,norm,rotate,qinv,slerp,clamp


def torso_envelope(rig,positions,world):
    names={j['name']:i for i,j in enumerate(rig['joints'])}
    if rig.get('species')!='human' or not {'pelvis','spine','chest'}<=names.keys():return []
    s=rig['height']/1.98;pad=1.15;pelvis,spine,chest=[names[n] for n in ('pelvis','spine','chest')]
    # These shapes deliberately enclose the shirt cross sections in scene.js.
    return [
        (add(positions[pelvis],rotate(world[pelvis],[0,.08*s,0])),world[pelvis],[.162*s*pad,.15*s*pad,.119*s*pad]),
        (add(mul(positions[spine],.55),mul(positions[chest],.45)),slerp(world[spine],world[chest],.45),[.179*s*pad,.245*s*pad,.128*s*pad]),
        (add(positions[chest],rotate(world[chest],[0,.015*s,0])),world[chest],[.183*s*pad,.12*s*pad,.124*s*pad]),
    ]


def segment_ellipsoid_bound(a,b,shape,radius):
    """Lower bound on capsule/ellipsoid separation, using a supporting plane of the ellipsoid.

    A tangent plane at the normalized closest scaled point separates the entire
    segment from the ellipsoid. Its distance is a conservative outside bound.
    The complete line segment is tested analytically, so sparse limb samples
    cannot miss a forearm crossing through the torso.
    """
    center,q,radii=shape
    A=[v/r for v,r in zip(rotate(qinv(q),sub(a,center)),radii)]
    B=[v/r for v,r in zip(rotate(qinv(q),sub(b,center)),radii)]
    direction=sub(B,A);length=dot(direction,direction)
    u=clamp(-dot(A,direction)/length,0,1) if length>1e-14 else 0
    point=add(A,mul(direction,u));rho=norm(point)
    if rho<1e-12:return -min(radii)-radius
    return (rho-1)*rho/norm([v/r for v,r in zip(point,radii)])-radius


def arm_clearance(rig,positions,world,side,elbow=None,wrist=None,precise=False):
    names={j['name']:i for i,j in enumerate(rig['joints'])};s=rig['height']/1.98
    if not {side+'_'+n for n in ('shoulder','elbow','wrist')}<=names.keys():return None
    shoulder=positions[names[side+'_shoulder']]
    elbow=elbow if elbow is not None else positions[names[side+'_elbow']]
    wrist=wrist if wrist is not None else positions[names[side+'_wrist']]
    upper_length=norm(sub(elbow,shoulder));seam=min(1,.085*s/max(upper_length,1e-9))
    start=add(shoulder,mul(sub(elbow,shoulder),seam))
    # Subdivide the taper, testing whole segments. Each capsule uses the larger
    # endpoint radius, enclosing the actual cylinder in the renderer.
    pieces=[]
    for label,a,b,r0,r1 in [('upper_arm',start,elbow,.048*s-(.014*s)*seam,.034*s),('forearm',elbow,wrist,.034*s,.024*s)]:
        for k in range(4):
            u,v=k/4,(k+1)/4
            pieces.append((label,add(a,mul(sub(b,a),u)),add(a,mul(sub(b,a),v)),r0+(r1-r0)*u))
    values=[];triangles=None;envelope=torso_envelope(rig,positions,world)
    for label,a,b,r in pieces:
        bound=min(segment_ellipsoid_bound(a,b,shape,r) for shape in envelope)
        if precise and bound<0:
            from .surface_geometry import torso_triangles,capsule_surface_bound
            if triangles is None:triangles=torso_triangles(rig,positions,world)
            bound=capsule_surface_bound(a,b,r,triangles)
        values.append((bound,label))
    return min(values) if values else None


def pose_clearance(rig,positions,world):
    values=[(value[0],side+'_'+value[1]) for side in ('left','right') if (value:=arm_clearance(rig,positions,world,side,precise=True)) is not None]
    return min(values) if values else None


def clearance_report(clip,interpolated=True):
    from .rigs import fk
    rig=clip['rig'];frames=clip['frames'];worst=None
    for i,f in enumerate(frames):
        p,w=fk(rig,f['root'],f['rotations']);value=pose_clearance(rig,p,w)
        if value is not None:
            item=(value[0],f['time'],value[1])
            if worst is None or item<worst:worst=item
        if interpolated and i+1<len(frames):
            n=frames[i+1];root=mul(add(f['root'],n['root']),.5)
            p,w=fk(rig,root,[slerp(a,b,.5) for a,b in zip(f['rotations'],n['rotations'])]);value=pose_clearance(rig,p,w)
            if value is not None:
                item=(value[0],(f['time']+n['time'])/2,value[1])
                if worst is None or item<worst:worst=item
    return {'checks':{'arm_torso_clearance':None if worst is None else worst[0]>=-.001},
            'metrics':{'minimum_arm_torso_clearance_bound_m':None if worst is None else worst[0],
                       'arm_torso_worst_sample':None if worst is None else {'time':worst[1],'part':worst[2]}}}
