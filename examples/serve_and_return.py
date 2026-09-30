"""Create two safe takes and export the complete scene through the director."""
from anima.tools import Engine
from anima.store import Store

engine=Engine(Store('anima-project'))
serve=engine.call('create_animation',{'recipe':'zverev_serve'})
receiver=engine.call('create_animation',{'recipe':'forehand_return'})
result=engine.call('finish_animation',{
    'clip_id':receiver['clip_id'],
    'serve_clip_id':serve['clip_id'],
    'formats':['mp4'],
})
for item in result['files']:
    print(item['path'] if item['status']=='ready' else item)
