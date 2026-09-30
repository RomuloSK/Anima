"""Small dependency-free vector/quaternion kernel. Quaternions are XYZW."""
import math

EPS = 1e-10

def add(a, b): return [x + y for x, y in zip(a, b)]
def sub(a, b): return [x - y for x, y in zip(a, b)]
def mul(a, s): return [x * s for x in a]
def dot(a, b): return sum(x * y for x, y in zip(a, b))
def cross(a, b): return [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]]
def norm(a): return math.sqrt(dot(a, a))
def unit(a):
    n = norm(a)
    if n < EPS: raise ValueError("Cannot normalize a zero vector")
    return mul(a, 1/n)
def clamp(x, lo, hi): return max(lo, min(hi, x))
def qmul(a, b):
    x,y,z,w = a; X,Y,Z,W = b
    return [w*X+x*W+y*Z-z*Y, w*Y-x*Z+y*W+z*X, w*Z+x*Y-y*X+z*W, w*W-x*X-y*Y-z*Z]
def qinv(q): return [-q[0], -q[1], -q[2], q[3]]
def rotate(q, v):
    t = mul(cross(q[:3], v), 2)
    return add(v, add(mul(t, q[3]), cross(q[:3], t)))
def euler_quat(degrees):
    """Intrinsic XYZ, qx*qy*qz; matches BVH XYZrotation channel order."""
    a,b,c = [math.radians(x)*.5 for x in degrees]
    return qmul(qmul([math.sin(a),0,0,math.cos(a)], [0,math.sin(b),0,math.cos(b)]), [0,0,math.sin(c),math.cos(c)])
def quat_euler(q):
    x,y,z,w=q
    m13 = 2*(x*z+y*w)
    b = math.asin(clamp(m13,-1,1))
    if abs(m13) < .9999999:
        a = math.atan2(2*(x*w-y*z), 1-2*(x*x+y*y))
        c = math.atan2(2*(z*w-x*y), 1-2*(y*y+z*z))
    else:
        a = math.atan2(2*(x*w+y*z), 1-2*(x*x+z*z)); c=0
    return [math.degrees(v) for v in (a,b,c)]
def from_to(a, b):
    a,b=unit(a),unit(b); d=dot(a,b)
    if d < -.999999:
        axis = cross(a,[1,0,0] if abs(a[0]) < .8 else [0,1,0])
        return unit(axis)+[0]
    return unit(cross(a,b)+[1+d])
def solve_two_bone(root, target, pole, upper, lower, min_bend=0, max_bend=155):
    """Analytic two-link IK with hinge-angle reach bounds and pole projection.

    Returns a feasible endpoint and explicit residual instead of concealing an
    unreachable target. min/max_bend are included angles from a straight chain.
    """
    delta=sub(target,root); requested=norm(delta)
    direction=unit(delta) if requested > EPS else [0,-1,0]
    near=math.sqrt(max(EPS,upper**2+lower**2+2*upper*lower*math.cos(math.radians(max_bend))))
    far=math.sqrt(max(EPS,upper**2+lower**2+2*upper*lower*math.cos(math.radians(min_bend))))
    distance=clamp(requested,max(near,1e-7),max(far,1e-7))
    along=(upper*upper-lower*lower+distance*distance)/(2*distance)
    lift=math.sqrt(max(0,upper*upper-along*along))
    bend=sub(sub(pole,root),mul(direction,dot(sub(pole,root),direction)))
    if norm(bend)<EPS:
        axis=[1,0,0] if abs(direction[0])<.8 else [0,0,1]
        bend=sub(axis,mul(direction,dot(axis,direction)))
    elbow=add(root,add(mul(direction,along),mul(unit(bend),lift)))
    end=add(root,mul(direction,distance))
    angle=math.degrees(math.acos(clamp((distance**2-upper**2-lower**2)/(2*upper*lower),-1,1)))
    return {"root":root,"middle":elbow,"end":end,"target":target,"residual_m":norm(sub(target,end)),"reachable":abs(requested-distance)<1e-5,"bend_degrees":angle}


def slerp(a, b, t):
    d = dot(a, b)
    if d < 0:
        b = [-v for v in b]
        d = -d
    if d > .9995:
        q = [x + t*(y-x) for x, y in zip(a, b)]
        n = math.sqrt(dot(q, q))
        return [v/n for v in q]
    angle = math.acos(max(-1, min(1, d)))
    s = math.sin(angle)
    u, v = math.sin((1-t)*angle)/s, math.sin(t*angle)/s
    return [u*x + v*y for x, y in zip(a, b)]

