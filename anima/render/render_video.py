"""Offline EGL renderer for the shared Three.js scene, using Mesa GLES.
No browser, network service or third-party pose package is required.
"""
import ctypes as C
import json,math,subprocess,sys
from pathlib import Path
import numpy as np
from PIL import Image,ImageDraw,ImageFont
HERE=Path(__file__).resolve().parent;W,H=1920,1080
CLIP_PATH=Path(sys.argv[2]);OUTFILE=Path(sys.argv[3]);QUALITY=sys.argv[4]
CLIP=json.loads(CLIP_PATH.read_text())
OW,OH=(1280,720) if QUALITY=='preview' else (1920,1080)
E=C.CDLL('libEGL.so.1');G=C.CDLL('libGL.so.1')
def api(lib,name,result,args):
 f=getattr(lib,name);f.restype=result;f.argtypes=args;return f
P=C.c_void_p;I=C.c_int;U=C.c_uint;F=C.c_float
getdisplay=api(E,'eglGetPlatformDisplay',P,[U,P,P]);display=getdisplay(0x31DD,None,None)
init=api(E,'eglInitialize',U,[P,C.POINTER(I),C.POINTER(I)]);major,minor=I(),I();assert init(display,C.byref(major),C.byref(minor))
attrs=(I*21)(0x3033,1,0x3040,0x40,0x3024,8,0x3023,8,0x3022,8,0x3025,24,0x3032,0,0x3031,0,0x3038,0,0,0,0)
config=P();count=I();choose=api(E,'eglChooseConfig',U,[P,C.POINTER(I),C.POINTER(P),I,C.POINTER(I)]);assert choose(display,attrs,C.byref(config),1,C.byref(count)) and count.value
bind=api(E,'eglBindAPI',U,[U]);assert bind(0x30A0)
create_surface=api(E,'eglCreatePbufferSurface',P,[P,P,C.POINTER(I)]);surface=create_surface(display,config,(I*5)(0x3057,W,0x3056,H,0x3038))
create_context=api(E,'eglCreateContext',P,[P,P,P,C.POINTER(I)]);context=create_context(display,config,None,(I*3)(0x3098,3,0x3038))
make_current=api(E,'eglMakeCurrent',U,[P,P,P,P]);assert make_current(display,surface,surface,context)
genbuf=api(G,'glGenBuffers',None,[I,C.POINTER(U)]);bindbuf=api(G,'glBindBuffer',None,[U,U]);bufferdata=api(G,'glBufferData',None,[U,C.c_ssize_t,P,U])
enableattrib=api(G,'glEnableVertexAttribArray',None,[U]);attribptr=api(G,'glVertexAttribPointer',None,[U,I,U,U,I,P]);drawarrays=api(G,'glDrawArrays',None,[U,I,I])
createshader=api(G,'glCreateShader',U,[U]);source=api(G,'glShaderSource',None,[U,I,C.POINTER(C.c_char_p),C.POINTER(I)]);compile=api(G,'glCompileShader',None,[U]);shaderiv=api(G,'glGetShaderiv',None,[U,U,C.POINTER(I)]);shaderlog=api(G,'glGetShaderInfoLog',None,[U,I,C.POINTER(I),C.c_char_p])
createprog=api(G,'glCreateProgram',U,[]);attach=api(G,'glAttachShader',None,[U,U]);link=api(G,'glLinkProgram',None,[U]);use=api(G,'glUseProgram',None,[U]);uniformloc=api(G,'glGetUniformLocation',I,[U,C.c_char_p]);mat4=api(G,'glUniformMatrix4fv',None,[I,I,U,C.POINTER(F)]);vec3=api(G,'glUniform3f',None,[I,F,F,F]);ufloat=api(G,'glUniform1f',None,[I,F]);
enable=api(G,'glEnable',None,[U]);disable=api(G,'glDisable',None,[U]);clearcolor=api(G,'glClearColor',None,[F,F,F,F]);clear=api(G,'glClear',None,[U]);viewport=api(G,'glViewport',None,[I,I,I,I]);readpixels=api(G,'glReadPixels',None,[I,I,I,I,U,U,P]);blend=api(G,'glBlendFunc',None,[U,U]);depthmask=api(G,'glDepthMask',None,[U]);pixstore=api(G,'glPixelStorei',None,[U,I])
VERT='''#version 300 es
precision highp float;
layout(location=0) in vec3 position;layout(location=1) in vec3 normal;
uniform mat4 model;uniform mat4 vp;out vec3 p;out vec3 n;
void main(){vec4 w=model*vec4(position,1.);p=w.xyz;n=mat3(transpose(inverse(model)))*normal;gl_Position=vp*w;}
'''
FRAG='''#version 300 es
precision highp float;
in vec3 p;in vec3 n;uniform vec3 color;uniform vec3 eye;uniform vec3 shadow;uniform vec3 shadow2;uniform float opacity;out vec4 frag;
void main(){vec3 normal=normalize(n);vec3 view=normalize(eye-p);
if(!gl_FrontFacing)normal=-normal;
vec3 light=normalize(vec3(-.4,.85,-.35));vec3 rim=normalize(vec3(.5,.35,.7));
float diffuse=.44+max(dot(normal,light),0.)*.64+max(dot(normal,rim),0.)*.22;
float spec=pow(max(dot(normal,normalize(light+view)),0.),36.)*.07;
vec3 c=color*diffuse+vec3(spec);
if(p.y<.012){float dx=(p.x-shadow.x)/.43,dz=(p.z-shadow.z)/.65;float shade=exp(-(dx*dx+dz*dz)*.65)*(.34/(1.+shadow.y));float dx2=(p.x-shadow2.x)/.43,dz2=(p.z-shadow2.z)/.65;float shade2=exp(-(dx2*dx2+dz2*dz2)*.65)*(.34/(1.+shadow2.y));c*=(1.-shade)*(1.-shade2);}
float fog=smoothstep(50.,130.,length(eye-p));c=mix(c,vec3(.387,.477,.456),fog);
c=pow(clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.),vec3(1./2.2));frag=vec4(c,opacity);}
'''
def shader(kind,txt):
 s=createshader(kind);b=txt.encode();source(s,1,C.byref(C.c_char_p(b)),None);compile(s);ok=I();shaderiv(s,0x8B81,C.byref(ok))
 if not ok.value:
  err=C.create_string_buffer(8192);shaderlog(s,8192,None,err);raise RuntimeError(err.value.decode())
 return s
program=createprog();attach(program,shader(0x8B31,VERT));attach(program,shader(0x8B30,FRAG));link(program);use(program)
loc={s:uniformloc(program,s.encode()) for s in ['model','vp','color','eye','opacity','shadow','shadow2']}
viewport(0,0,W,H);enable(0x0B71);enable(0x0BE2);blend(0x0302,0x0303);pixstore(0x0D05,1)
fontpath='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
fonts={size:ImageFont.truetype(fontpath,size) for size in [18,20,22,24,28,42,62]}
mode=sys.argv[1] if len(sys.argv)>1 else 'preview'
exporter=subprocess.Popen(['node',str(HERE/'export_scene.mjs'),mode,str(CLIP_PATH)],stdout=subprocess.PIPE,text=True,bufsize=1)
assets=json.loads(exporter.stdout.readline())['assets'];geos={}
def upload(key,geo):
 if key not in geos:
  a,b=U(),U();genbuf(1,C.byref(a));genbuf(1,C.byref(b));geos[key]={'position':a.value,'normal':b.value,'mode':{'triangles':4,'lines':1,'strip':3}[geo['mode']]}
 entry=geos[key]
 for name in ['position','normal']:
  arr=np.array(geo.get(name) or [0,1,0]*(len(geo['position'])//3),dtype=np.float32);bindbuf(0x8892,entry[name]);bufferdata(0x8892,arr.nbytes,arr.ctypes.data,0x88E8)
 entry['count']=len(geo['position'])//3
for key,g in assets['geometries'].items():upload(key,g)
meshes=assets['meshes'];matrices=[np.array(m['matrix'],np.float32) for m in meshes]
if mode=='video':
 outfile=OUTFILE
 encoder=subprocess.Popen(['ffmpeg','-hide_banner','-loglevel','error','-y','-f','rawvideo','-pixel_format','rgb24','-video_size',f'{OW}x{OH}','-framerate','60','-i','pipe:0','-an','-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart','-metadata','title='+CLIP.get('title','Anima animation'),'-metadata','comment=Anima recipe animation. See motion JSON for source provenance and estimation limits.',str(outfile)],stdin=subprocess.PIPE)
get_error=api(G,'glGetError',U,[]);print('GL setup error',hex(get_error()),flush=True)
raw=np.empty((H,W,4),dtype=np.uint8);num=0
for line in exporter.stdout:
 frame=json.loads(line)
 for update in frame['updates']:matrices[update['i']]=np.array(update['matrix'],np.float32)
 for tg in frame['torsos']:
  tg['mode']='triangles';upload(tg['key'],tg)
 vp=np.array(frame['vp'],np.float32);mat4(loc['vp'],1,0,vp.ctypes.data_as(C.POINTER(F)));vec3(loc['eye'],*frame['eye']);vec3(loc['shadow'],*frame['shadows'][0]);vec3(loc['shadow2'],*frame['shadows'][1])
 clearcolor(.65,.72,.71,1);clear(0x4000|0x0100)
 for i,m in enumerate(meshes):
  entry=geos[m['key']];matrix=matrices[i];mat4(loc['model'],1,0,matrix.ctypes.data_as(C.POINTER(F)));vec3(loc['color'],*m['color']);ufloat(loc['opacity'],m['opacity'])
  for index,name in enumerate(['position','normal']):bindbuf(0x8892,entry[name]);enableattrib(index);attribptr(index,3,0x1406,0,0,None)
  drawarrays(entry['mode'],0,entry['count'])
 # Single-sample pbuffer is read directly.
 readpixels(0,0,W,H,0x1908,0x1401,raw.ctypes.data);im=Image.fromarray(raw[::-1,:,:3]);d=ImageDraw.Draw(im)
 fg=(243,246,227);muted=(220,232,221)
 d.text((86,64),'ANIMA / MOTION RECIPE',fill=fg,font=fonts[20]);d.text((82,105),CLIP.get('source',{}).get('performer',CLIP['rig']['name'])[:40],fill=fg,font=fonts[62]);d.text((86,184),CLIP['rig']['name'][:65],fill=muted,font=fonts[24])
 label=('01 / FULL COURT' if frame['angle']==0 else '02 / RETURN · 0.25×') if CLIP.get('scene') else ('01 / REAL TIME' if frame['angle']==0 else '02 / 0.25× REPLAY');box=d.textbbox((0,0),label,font=fonts[22]);x=W-87-(box[2]-box[0])-38
 d.rounded_rectangle((x,63,W-86,115),radius=26,fill=(51,80,84),outline=(160,188,183),width=1);d.text((x+19,77),label,fill=fg,font=fonts[22])
 d.text((86,H-141),'RALLY PHASE' if CLIP.get('scene') else ('SERVICE MOTION' if 'serve' in CLIP['action'] else 'MOTION PHASE'),fill=muted,font=fonts[18]);d.text((84,H-111),frame['phase'],fill=fg,font=fonts[42])
 phase_key='rally_phase' if CLIP.get('scene') and not frame['angle'] else 'phase';phases=list(dict.fromkeys(f.get(phase_key,'Motion') for f in CLIP['frames']));stage=phases.index(frame['phase'])
 for i in range(len(phases)):d.rectangle((86+i*46,H-48,124+i*46,H-43),fill=(219,235,149) if i<=stage else (146,170,168))
 d.text((W-86,H-88),'Serve → bounce → return' if CLIP.get('scene') else ('Reference recipe' if CLIP.get('backend') in ('motion_capture','video_guided_reconstruction') else 'Procedural recipe'),fill=muted,font=fonts[20],anchor='ra');d.text((W-86,H-59),'3D motion · ANIMA',fill=muted,font=fonts[18],anchor='ra')
 if mode=='preview':im.save(OUTFILE.parent/f"pose-{frame['t']:.2f}{('-view'+str(frame['angle'])) if frame['angle'] else ''}.png")
 else:encoder.stdin.write(im.resize((OW,OH),Image.Resampling.LANCZOS).tobytes() if OW!=W else im.tobytes())
 num+=1
 if num==1:
  assert get_error()==0, 'OpenGL render/readback failed'
  assert raw[:,:,:3].mean()>10, 'Empty render'
  print('First frame verified',flush=True)
 if num%60==0:print(f'Rendered {num} frames',flush=True)
assert exporter.wait()==0
if mode=='video':
 encoder.stdin.close();assert encoder.wait()==0;print(json.dumps({'outfile':str(outfile),'frames':num,'fps':60,'duration':num/60,'bytes':outfile.stat().st_size}))
else:print(json.dumps({'preview_frames':num}))
