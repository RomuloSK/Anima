"""Sparse model-directed motion with the engine enforcing body dependencies."""
from anima.tools import Engine
from anima.store import Store

engine=Engine(Store('body-demo'))
character=engine.call('create_character',{'name':'Body controls demo'})
descriptor=engine.call('describe_body_controls',{'character_id':character['id']})
pose={'right_arm_elevation':140,'right_arm_plane':65,'right_elbow_flexion':35}
preview=engine.call('preview_body_pose',{'character_id':character['id'],'coordinates':pose})
if not preview['valid']:
    raise RuntimeError(preview['checks'])
clip=engine.call('animate_body',{'character_id':character['id'],'fps':60,
    'keyframes':[{'time':0,'coordinates':{}},{'time':2,'coordinates':pose},
                 {'time':4,'coordinates':descriptor['coordinates']}],
    'options':{'coordinate_shoulders':True,'auto_timing':True},'on_limit':'reject'})
print(clip['timing'])
print(engine.call('finish_animation',{'clip_id':clip['id'],'formats':['json','gltf']}))
