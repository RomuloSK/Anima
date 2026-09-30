"""Exact standard shirt surface and capsule/triangle narrow-phase geometry."""
import math
from .math3d import *

class TriangleSurface(list):
    def __init__(self,triangles):
        super().__init__(triangles)
        self.bounds=([min(v[k] for tri in self for v in tri) for k in range(3)],
                     [max(v[k] for tri in self for v in tri) for k in range(3)])


def torso_triangles(rig,p,w):
    names={j['name']:i for i,j in enumerate(rig['joints'])};scale=rig['height']/1.98;rings=[]
    for r in range(15):
        u=r/14
        if u<.37:a,b,blend=names['pelvis'],names['spine'],u/.37
        else:a,b,blend=names['spine'],names['chest'],(u-.37)/.63
        center=add(mul(p[a],1-blend),mul(p[b],blend));q=slerp(w[a],w[b],blend)
        if u>.75:center=add(center,rotate(q,[0,(u-.75)*.33*scale,0]))
        if u<.15:center=add(center,rotate(q,[0,-(.15-u)*.18*scale,0]))
        width=(.128+.041*math.sin(math.pi*u*.8))*scale;depth=(.09+.023*math.sin(math.pi*u))*scale
        rings.append([add(center,rotate(q,[width*math.cos(j/36*math.tau),0,depth*math.sin(j/36*math.tau)])) for j in range(36)])
    triangles=[]
    for r in range(14):
        for j in range(36):
            k=(j+1)%36;a,b,c,d=rings[r][j],rings[r+1][j],rings[r][k],rings[r+1][k]
            triangles.extend([(a,b,c),(b,d,c)])
    for row in (rings[0],rings[-1]):
        center=[sum(v[k] for v in row)/36 for k in range(3)]
        triangles.extend((center,row[j],row[(j+1)%36]) for j in range(36))
    return TriangleSurface(triangles)


def point_segment_distance2(p,a,b):
    ab=sub(b,a);d=dot(ab,ab);u=clamp(dot(sub(p,a),ab)/d,0,1) if d>1e-15 else 0
    delta=sub(p,add(a,mul(ab,u)));return dot(delta,delta)


def segment_segment_distance2(p,q,a,b):
    d1,d2,r=sub(q,p),sub(b,a),sub(p,a);A,E,F=dot(d1,d1),dot(d2,d2),dot(d2,r)
    if A<=1e-15:return point_segment_distance2(p,a,b)
    if E<=1e-15:return point_segment_distance2(a,p,q)
    C=dot(d1,r);B=dot(d1,d2);den=A*E-B*B
    s=clamp((B*F-C*E)/den,0,1) if den>1e-15 else 0;t=(B*s+F)/E
    if t<0:t=0;s=clamp(-C/A,0,1)
    elif t>1:t=1;s=clamp((B-C)/A,0,1)
    delta=sub(add(p,mul(d1,s)),add(a,mul(d2,t)));return dot(delta,delta)


def closest_triangle(p,a,b,c):
    ab,ac,ap=sub(b,a),sub(c,a),sub(p,a);d1,d2=dot(ab,ap),dot(ac,ap)
    if d1<=0 and d2<=0:return a
    bp=sub(p,b);d3,d4=dot(ab,bp),dot(ac,bp)
    if d3>=0 and d4<=d3:return b
    vc=d1*d4-d3*d2
    if vc<=0 and d1>=0 and d3<=0:return add(a,mul(ab,d1/(d1-d3)))
    cp=sub(p,c);d5,d6=dot(ab,cp),dot(ac,cp)
    if d6>=0 and d5<=d6:return c
    vb=d5*d2-d1*d6
    if vb<=0 and d2>=0 and d6<=0:return add(a,mul(ac,d2/(d2-d6)))
    va=d3*d6-d5*d4
    if va<=0 and d4-d3>=0 and d5-d6>=0:return add(b,mul(sub(c,b),(d4-d3)/((d4-d3)+(d5-d6))))
    den=1/(va+vb+vc);return add(a,add(mul(ab,vb*den),mul(ac,vc*den)))


def ray_triangle(origin,direction,a,b,c):
    ab,ac=sub(b,a),sub(c,a);h=cross(direction,ac);det=dot(ab,h)
    if abs(det)<1e-12:return None
    inv=1/det;s=sub(origin,a);u=dot(s,h)*inv
    if u<0 or u>1:return None
    q=cross(s,ab);v=dot(direction,q)*inv
    if v<0 or u+v>1:return None
    t=dot(ac,q)*inv;return t if t>=0 else None


def inside_surface(point,triangles):
    hits=sorted(t for tri in triangles if (t:=ray_triangle(point,[1,.1234,.031],*tri)) is not None)
    unique=[]
    for t in hits:
        if not unique or t-unique[-1]>1e-7:unique.append(t)
    return len(unique)%2==1


def capsule_surface_bound(a,b,radius,triangles):
    # A whole-surface bound avoids expensive ray tests for limbs entirely
    # below the shirt or beyond its sides. It cannot hide an intersection.
    if hasattr(triangles,'bounds'):
        lo,hi=triangles.bounds
        gap=[max(0,lo[k]-max(a[k],b[k]),min(a[k],b[k])-hi[k]) for k in range(3)]
        distance=norm(gap)-radius
        if distance>=0:return min(.08-radius,distance)
    midpoint=mul(add(a,b),.5)
    if inside_surface(midpoint,triangles):return -radius
    # The cap on outside distance is another conservative lower bound. It
    # permits bounding-box culling while still detecting every intersection.
    best=.08**2;low=[min(a[k],b[k]) for k in range(3)];high=[max(a[k],b[k]) for k in range(3)]
    direction=sub(b,a)
    for tri in triangles:
        tl=[min(v[k] for v in tri) for k in range(3)];th=[max(v[k] for v in tri) for k in range(3)]
        gaps=[max(0,tl[k]-high[k],low[k]-th[k]) for k in range(3)]
        if dot(gaps,gaps)>=best:continue
        hit=ray_triangle(a,direction,*tri)
        if hit is not None and hit<=1:return -radius
        for point in (a,b):
            delta=sub(point,closest_triangle(point,*tri));best=min(best,dot(delta,delta))
        for p,q in zip(tri,tri[1:]+tri[:1]):best=min(best,segment_segment_distance2(a,b,p,q))
        if best<radius*radius:return math.sqrt(best)-radius
    return math.sqrt(best)-radius
