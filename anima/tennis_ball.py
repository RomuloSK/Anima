"""Continuous two-contact ball flight for a serve-and-return demonstration."""
from .math3d import add,sub,mul


def rally_flight(start,contact,destination,serve_time,bounce_time,return_time,return_bounce_time,
                 radius=.0335,gravity=9.81,damping=.75):
    dt1=bounce_time-serve_time;dt2=return_time-bounce_time;dt3=return_bounce_time-return_time
    if min(dt1,dt2,dt3)<=0:raise ValueError('Ball contact and bounce events must increase')
    v=mul(sub(contact,start),1/(dt1+damping*dt2))
    v[1]=(radius-start[1]+.5*gravity*dt1*dt1)/dt1
    bounce=add(start,mul(v,dt1));bounce[1]=radius
    rebound=[v[0]*damping,(contact[1]-radius+.5*gravity*dt2*dt2)/dt2,v[2]*damping]
    outgoing=mul(sub(destination,contact),1/dt3)
    outgoing[1]=(radius-contact[1]+.5*gravity*dt3*dt3)/dt3
    after=[outgoing[0]*.72,-(outgoing[1]-gravity*dt3)*.65,outgoing[2]*.72]
    def ballistic(origin,velocity,dt):
        p=add(origin,mul(velocity,dt));p[1]-=.5*gravity*dt*dt;return p
    def sample(t):
        if t<=serve_time:return start[:]
        if t<=bounce_time:return ballistic(start,v,t-serve_time)
        if t<=return_time:return ballistic(bounce,rebound,t-bounce_time)
        if t<=return_bounce_time:return ballistic(contact,outgoing,t-return_time)
        p=ballistic(destination,after,t-return_bounce_time)
        if p[1]<radius:raise ValueError('Sequence runs beyond the modelled second bounce; shorten it or add another bounce')
        return p
    return sample,{'gravity':gravity,'service_bounce':bounce,'return_contact':contact,'return_bounce':destination,
                   'rebound_coefficient':rebound[1]/-(v[1]-gravity*dt1),'incoming_velocity':v,'outgoing_velocity':outgoing}
