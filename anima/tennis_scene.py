"""Compose two saved takes into a reproducible court sequence."""
import copy,math
from .math3d import *
from .rigs import fk
from .constraints import attachment_transform,basis_quat
from .arm_solver import solve_arm,set_world
from .tennis_ball import rally_flight


def rebuild(rig,f,attachments):
    f['positions'],f['world_rotations']=fk(rig,f['root'],f['rotations'])
    f['attachments']={a['name']:attachment_transform(a,rig,f['positions'],f['world_rotations']) for a in attachments}
    if 'racket' in f['attachments']:
        a=f['attachments']['racket'];f.update(grip=a['position'],racket_rotation=a['rotation'],sweet_spot=a['points']['sweet_spot'])


def place_return(clip):
    out=copy.deepcopy(clip);out.pop('evaluation',None)
    yaw=euler_quat([0,180-clip.get('director_spec',{}).get('heading',0),0]);start=clip['frames'][0]['root'];shift=[start[0],0,start[2]]
    for f in out['frames']:
        f['root']=add(rotate(yaw,sub(f['root'],shift)),[-.45,0,24.90]);f['rotations'][0]=qmul(yaw,f['rotations'][0])
        rebuild(out['rig'],f,out.get('attachments',[]))
    out['rig']['root_position']=out['frames'][0]['root'][:]
    return out


def extend_server(server,duration):
    out=copy.deepcopy(server);out.pop('evaluation',None);rig=out['rig'];joints=rig['joints'];names={j['name']:i for i,j in enumerate(joints)}
    last=out['frames'][-1];root=[.05,.94,1.62];rots=[[0,0,0,1] for _ in joints]
    def world(name,q):set_world(rig,root,rots,name,q)
    world('pelvis',euler_quat([8,0,0]));world('spine',euler_quat([10,0,0]));world('chest',euler_quat([10,0,0]))
    for side,sign in [('left',-1),('right',1)]:
        p,w=fk(rig,root,rots);a,b,c=[names[side+'_'+name] for name in ('hip','knee','ankle')]
        target=[.05+sign*.32,.105,1.62];ik=solve_two_bone(p[a],target,add(p[a],[0,0,1]),norm(joints[b]['offset']),norm(joints[c]['offset']),3,155)
        d1=unit(sub(ik['middle'],p[a]));d2=unit(sub(ik['end'],ik['middle']));x=unit(cross(d1,d2));y=mul(d1,-1)
        world(side+'_hip',basis_quat(x,y,cross(x,y)));rots[b]=euler_quat([ik['bend_degrees'],0,0]);world(side+'_ankle',euler_quat([0,sign*8,0]))
        if side+'_clavicle' in names:rots[names[side+'_clavicle']]=euler_quat([0,-sign*12,0])
        p,w=fk(rig,root,rots);chest=names['chest']
        target=add(p[chest],rotate(w[chest],[sign*.14,-.12,.40]));pole=add(p[chest],rotate(w[chest],[sign*.34,-.30,.16]))
        solve_arm(rig,root,rots,side,target,pole,bounded_wrist=False,minimum_clearance=.005)
    world('right_wrist',qmul(euler_quat([0,0,-20]),qinv(out['attachments'][0]['local_rotation'])))
    for i in range(len(out['frames']),round(duration*out['fps'])+1):
        t=i/out['fps'];u=clamp((t-server['duration'])/.78,0,1);u=u**3*(10-15*u+6*u*u)
        f={'time':t,'root':add(mul(last['root'],1-u),mul(root,u)),
           'rotations':[slerp(a,b,u) for a,b in zip(last['rotations'],rots)],'phase':'Recover','contacts':{}}
        rebuild(rig,f,out['attachments'])
        lift=max(0,max(j['radius']-point[1]+.003 for j,point in zip(joints,f['positions'])))
        f['root'][1]+=lift;rebuild(rig,f,out['attachments']);out['frames'].append(f)
    out['duration']=duration;return out


def compose_rally(serve,receiver):
    from .quality import assert_releasable
    assert_releasable(serve);assert_releasable(receiver)
    if serve.get('recipe_id')!='zverev_serve' or receiver.get('recipe_id')!='forehand_return':
        raise ValueError('Court composition currently supports zverev_serve followed by forehand_return')
    if any(abs(c.get('director_spec',{}).get('tempo',1)-1)>1e-8 for c in (serve,receiver)):
        raise ValueError('Use tempo=1 for both court takes; the scene controls the replay speed')
    if serve.get('director_spec',{}).get('heading',0)!=0 or serve.get('director_spec',{}).get('origin',[0,0,0])!=[0,0,0]:
        raise ValueError('Keep the serve heading and origin at their defaults for court composition')
    clip=place_return(receiver);duration=clip['duration'];server=extend_server(serve,duration)
    serve_t=serve['impact_time'];return_t=receiver['impact_time'];bounce_t=2.6166666666666667;radius=.0335
    start=add(serve['frames'][round(serve_t*serve['fps'])]['ball'],[1.25,0,0])
    hit=clip['frames'][round(return_t*clip['fps'])]['attachments']['racket']
    contact=add(hit['points']['sweet_spot'],rotate(hit['rotation'],[0,0,radius]))
    ball,physics=rally_flight(start,contact,[2.9,radius,2.9],serve_t,bounce_t,return_t,return_t+1.07)
    net=12.385;vin=physics['incoming_velocity'];vout=physics['outgoing_velocity']
    t_in=serve_t+(net-start[2])/vin[2];t_out=return_t+(net-contact[2])/vout[2]
    for key,t in [('serve_net_clearance_m',t_in),('return_net_clearance_m',t_out)]:
        point=ball(t);physics[key]=point[1]-radius-(.915+.155*(abs(point[0])/5.8)**2)
        if physics[key]<.02:raise ValueError('Ball plan intersects the net; use the default serve dimensions')
    bounce=physics['service_bounce']
    if not -4.115<bounce[0]<0 or not net<bounce[2]<net+6.4:
        raise ValueError('Serve plan misses the far service box')
    if not .4<physics['rebound_coefficient']<1:raise ValueError('Ball plan requires an implausible rebound; revise the dimensions')
    for f in clip['frames']:
        t=f['time'];index=min(round(t*server['fps']),len(server['frames'])-1)
        f['ball']=add(server['frames'][index]['ball'],[1.25,0,0]) if t<=serve_t else ball(t)
        f['rally_phase']='Serve' if t<serve_t+.06 else f['phase']
    for f in server['frames']:
        i=min(round(f['time']*clip['fps']),len(clip['frames'])-1);f['ball']=sub(clip['frames'][i]['ball'],[1.25,0,0])
    clip['scene']={'type':'tennis_rally','server':server,'server_offset':[1.25,0,0],
                   'replay':[1.90,3.85],'events':{'serve_contact':serve_t,'service_bounce':bounce_t,'return_contact':return_t,'return_bounce':return_t+1.07},'ball_physics':physics}
    clip['title']='Serve + Return';clip['rig']['name']='Zverev serve · forehand return'
    clip['source']={'performer':'Serve + Return','serve':serve.get('source'),'return':receiver.get('source')}
    clip['notes'].append('The return is generated by the body-aware forehand preset; the server retains the supplied Zverev reconstruction.')
    assert_releasable(clip);return clip
