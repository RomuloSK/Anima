import base64
import json
import struct
from .math3d import quat_euler
from .physics import to_mjcf
from . import __version__

def bvh(clip):
    joints=clip["rig"]["joints"]; order=[]; lines=["HIERARCHY"]
    def visit(i,depth):
        j=joints[i]; pad="  "*depth; order.append(i)
        lines.extend([pad+("ROOT " if depth==0 else "JOINT ")+j["name"],pad+"{",pad+"  OFFSET "+" ".join(f"{v:.8f}" for v in j["offset"])])
        lines.append(pad+"  CHANNELS "+("6 Xposition Yposition Zposition " if depth==0 else "3 ")+"Xrotation Yrotation Zrotation")
        children=[k for k,c in enumerate(joints) if c["parent"]==i]
        for child in children: visit(child,depth+1)
        if not children: lines.extend([pad+"  End Site",pad+"  {",pad+"    OFFSET 0 0 0",pad+"  }"])
        lines.append(pad+"}")
    visit(0,0)
    lines.extend(["MOTION",f"Frames: {len(clip['frames'])}",f"Frame Time: {1/clip['fps']:.10f}"])
    for frame in clip["frames"]:
        values=frame["root"][:]
        for i in order: values.extend(quat_euler(frame["rotations"][i]))
        lines.append(" ".join(f"{v:.8f}" for v in values))
    return "\n".join(lines)+"\n"

def gltf(clip):
    """glTF 2.0 skeleton animation with an embedded buffer; no skinned mesh."""
    data=bytearray(); views=[]; accessors=[]
    def accessor(values,kind,limits=False):
        offset=len(data); flat=[v for row in values for v in (row if isinstance(row,list) else [row])]
        data.extend(struct.pack("<"+"f"*len(flat),*flat))
        views.append({"buffer":0,"byteOffset":offset,"byteLength":len(data)-offset})
        a={"bufferView":len(views)-1,"componentType":5126,"count":len(values),"type":kind}
        if limits: a.update(min=[min(values)],max=[max(values)])
        accessors.append(a); return len(accessors)-1
    times=accessor([f["time"] for f in clip["frames"]],"SCALAR",True)
    samplers=[]; channels=[]
    def channel(node,path,values,kind):
        out=accessor(values,kind)
        samplers.append({"input":times,"output":out,"interpolation":"LINEAR"})
        channels.append({"sampler":len(samplers)-1,"target":{"node":node,"path":path}})
    nodes=[]
    for i,j in enumerate(clip["rig"]["joints"]):
        node={"name":j["name"],"translation":j["offset"],"rotation":clip["frames"][0]["rotations"][i]}
        children=[k for k,c in enumerate(clip["rig"]["joints"]) if c["parent"]==i]
        if children: node["children"]=children
        nodes.append(node)
        channel(i,"rotation",[f["rotations"][i] for f in clip["frames"]],"VEC4")
    channel(0,"translation",[f["root"] for f in clip["frames"]],"VEC3")
    for attachment in clip.get('attachments',[]):
        parent=next(i for i,j in enumerate(clip['rig']['joints']) if j['name']==attachment['parent_joint'])
        nodes[parent].setdefault('children',[]).append(len(nodes))
        nodes.append({'name':attachment['name'],'translation':attachment['local_position'],
            'rotation':attachment['local_rotation'],'extras':{'attachment':True,'points':attachment.get('points',{})}})
    roots=[0]
    if all('ball' in f for f in clip['frames']):
        ball=len(nodes);roots.append(ball);nodes.append({'name':'ball','translation':clip['frames'][0]['ball']})
        channel(ball,'translation',[f['ball'] for f in clip['frames']],'VEC3')
    return json.dumps({"asset":{"version":"2.0","generator":"Anima "+__version__},"scene":0,"scenes":[{"nodes":roots}],"nodes":nodes,"animations":[{"name":clip["action"],"samplers":samplers,"channels":channels}],"buffers":[{"uri":"data:application/octet-stream;base64,"+base64.b64encode(data).decode(),"byteLength":len(data)}],"bufferViews":views,"accessors":accessors,"extras":{"units":"metres","skeletonOnly":True,"backend":clip["backend"]}},separators=(",",":"))

def export(clip,format):
    if clip.get('scene') and format!='json':
        raise ValueError('Court scenes export as MP4 or JSON; export individual actor clips for BVH/glTF')
    if clip.get('quality_policy') or clip.get('action')=='forehand_return' or clip['rig'].get('body_clearance_model') or any(j['name'].endswith('_scapula') for j in clip['rig']['joints']):
        from .quality import assert_releasable
        assert_releasable(clip)
    if clip.get('backend')=='constrained_kinematic':
        from .evaluate import evaluate
        report=evaluate(clip)
        if report['status']!='checks_passed':raise ValueError('Constrained motion failed validation; export refused')
    if format=="bvh": return bvh(clip)
    if format=="gltf": return gltf(clip)
    if format=="json": return json.dumps(clip,separators=(",",":"),allow_nan=False)
    if format=="mjcf":
        if clip['rig'].get('joint_limits_calibrated') is False:
            raise ValueError('MJCF export requires calibrated joint limits; this captured rig has none')
        return to_mjcf(clip["rig"])
    raise ValueError("format must be bvh, gltf, json, or mjcf")
