"""Verified local MP4 export; no LLM or cloud-rendering service involved."""
import ctypes.util
import importlib.util
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile


def availability():
    missing=[]
    for module in ('numpy','PIL'):
        if importlib.util.find_spec(module) is None:missing.append(module)
    for command in ('node','ffmpeg','ffprobe'):
        if shutil.which(command) is None:missing.append(command)
    if not sys.platform.startswith('linux'):missing.append('Linux Mesa EGL renderer')
    for library in ('EGL','GL'):
        if not ctypes.util.find_library(library):missing.append('lib'+library)
    if not Path('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf').is_file():missing.append('DejaVu Sans font')
    return {'available':not missing,'missing':missing,'platform':'Linux with surfaceless Mesa EGL',
            'install':'Install anima-motion-lab[video], Node.js 22+, FFmpeg, Mesa EGL/OpenGL, and DejaVu Sans.'}


def render_video(clip,path,quality='final'):
    from .quality import assert_releasable
    assert_releasable(clip)
    state=availability()
    if not state['available']:return {'format':'mp4','status':'needs_dependency',**state}
    if clip['rig']['species']!='human':
        return {'format':'mp4','status':'unsupported','reason':'The court video renderer supports human rigs. Preview canine takes in the workbench or export glTF/BVH.'}
    required={'pelvis','spine','chest','neck','head'}|{s+'_'+j for s in ('left','right') for j in ('hip','knee','ankle','shoulder','elbow','wrist')}
    if not required<={j['name'] for j in clip['rig']['joints']}:
        return {'format':'mp4','status':'unsupported','reason':'This renderer requires the standard named human joints.'}
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    script=Path(__file__).parent/'render/render_video.py'
    with tempfile.TemporaryDirectory(prefix='anima-render-',dir=path.parent) as tmp:
        temp=Path(tmp);source=temp/'clip.json';source.write_text(json.dumps(clip,allow_nan=False))
        movie=temp/'render.mp4';env=dict(os.environ,MESA_SHADER_CACHE_DIR=str(temp/'mesa-cache'))
        try:
            result=subprocess.run([sys.executable,str(script),'video',str(source),str(movie),quality],
                                  text=True,capture_output=True,env=env,timeout=300)
            if result.returncode:
                return {'format':'mp4','status':'render_failed','reason':result.stderr[-1200:] or result.stdout[-1200:] or 'Renderer failed',
                        'next_step':'Check surfaceless EGL support and installed renderer dependencies.'}
            probe=subprocess.run(['ffprobe','-v','error','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_frames,pix_fmt','-show_entries','format=duration','-of','json',str(movie)],capture_output=True,text=True,check=True,timeout=20)
            info=json.loads(probe.stdout);stream=info['streams'][0];duration=float(info['format']['duration'])
            if stream['codec_name']!='h264' or stream['pix_fmt']!='yuv420p' or stream['r_frame_rate']!='60/1':
                raise ValueError('Unexpected MP4 format')
            replay=clip.get('scene',{}).get('replay')
            expected=round((clip['duration']+.5)*60)+round(((replay[1]-replay[0])*4 if replay else clip['duration']*4+.25)*60)
            if int(stream['nb_frames'])!=expected or abs(duration-expected/60)>.02:raise ValueError('Incomplete rendered video')
            subprocess.run(['ffmpeg','-v','error','-i',str(movie),'-f','null','-'],capture_output=True,check=True,timeout=120)
            movie.replace(path)
        except (subprocess.SubprocessError,OSError,ValueError,KeyError) as exc:
            return {'format':'mp4','status':'render_failed','reason':str(exc),'next_step':'Resolve the renderer error and retry finish_animation.'}
    return {'format':'mp4','status':'ready','path':str(path),'bytes':path.stat().st_size,
            'width':stream['width'],'height':stream['height'],'fps':60,'frames':expected,'duration':duration,
            'verified':'First-frame readback, frame count, stream format and complete FFmpeg decoding.',
            'playback':'Estimated/reference speed, then quarter-speed replay from a second angle.'}
