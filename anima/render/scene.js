import * as T from '../web/vendor/three.module.js';
const clip=await(await fetch('serve.json')).json();
const W=innerWidth,H=innerHeight;
const bodyScale=clip.rig.height/1.98;
const renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(W,H);renderer.setPixelRatio(1);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;document.body.prepend(renderer.domElement);
const scene=new T.Scene();scene.background=new T.Color('#a7b8b5');scene.fog=new T.Fog('#a7b8b5',22,65);
const camera=new T.OrthographicCamera(-1.85*W/H,1.85*W/H,1.85,-1.85,.02,120);
scene.add(new T.HemisphereLight('#f7f5e5','#365451',2.3));
const sun=new T.DirectionalLight('#ffeacb',3.25);sun.position.set(-4,9,-4);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-7;sun.shadow.camera.right=7;sun.shadow.camera.top=7;sun.shadow.camera.bottom=-7;sun.shadow.camera.near=.1;sun.shadow.camera.far=25;sun.shadow.normalBias=.012;sun.shadow.bias=-.0001;sun.shadow.radius=3;sun.target.position.set(1.25,0,1);scene.add(sun,sun.target);
const rim=new T.DirectionalLight('#d8edfa',2);rim.position.set(3,4,7);scene.add(rim);
const mat=(color,roughness=.65,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
const grass=mat('#516d62',1),court=mat('#28556b',.98),white=mat('#f2efdb',.85),dark=mat('#162e3c',.65),shortmat=mat('#eff1e6',.8),bandmat=mat('#e34771',.8),skin=mat('#c69a7e',.6),hair=mat('#8a7050',.85),shirt=mat('#e9865d',.75),socks=mat('#e2e4d8',.8),accent=mat('#d7e96f',.5);
function mesh(geo,material,parent=scene){const m=new T.Mesh(geo,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function box(x,y,z,pos,material,parent=scene){const m=mesh(new T.BoxGeometry(x,y,z),material,parent);m.position.set(...pos);return m;}
function plane(w,d,x,z,material){const m=mesh(new T.PlaneGeometry(w,d),material);m.rotation.x=-Math.PI/2;m.position.set(x,.001,z);m.castShadow=false;return m;}
plane(150,150,0,12,grass);const cp=plane(14.6,30,0,11.7,court);cp.position.y=.003;
const baseline=.5,net=12.385,far=24.27;
const stripe=(x,z,w,d)=>{const m=plane(w,d,x,z,white);m.position.y=.006;};
for(const x of [-5.485,-4.115,4.115,5.485])stripe(x,(baseline+far)/2,.04,far-baseline);
for(const z of [baseline,far])stripe(0,z,10.97,.05);
for(const z of [net-6.4,net+6.4])stripe(0,z,8.23,.04);
stripe(0,net,.04,12.8);stripe(0,baseline-.06,.04,.12);stripe(0,far+.06,.04,.12);
// Net mesh, curved white tape, and posts.
const vertices=[];const top=x=>.915+.155*(Math.abs(x)/5.8)**2;
for(let x=-5.8;x<=5.801;x+=.09)vertices.push(x,.06,net,x,top(x),net);
for(let y=.09;y<1.1;y+=.075)for(let x=-5.8;x<5.8;x+=.12)if(y<=top(x))vertices.push(x,y,net,x+.12,y,net);
const netgeo=new T.BufferGeometry();netgeo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));scene.add(new T.LineSegments(netgeo,new T.LineBasicMaterial({color:'#122c36',transparent:true,opacity:.7})));
function rod(a,b,r,material,parent=scene){const m=mesh(new T.CylinderGeometry(r,r,1,12),material,parent);updateRod(m,new T.Vector3(...a),new T.Vector3(...b));return m;}
function updateRod(m,a,b){const d=b.clone().sub(a);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.clone().normalize());m.scale.y=d.length();}
for(let x=-5.8;x<5.8;x+=.2)rod([x,top(x),net],[x+.2,top(x+.2),net],.026,white);
for(const x of [-5.9,5.9])rod([x,0,net],[x,1.16,net],.048,dark);
// Architectural perimeter keeps focus on the serve.
const fence=new T.Group();scene.add(fence);const fm=new T.LineBasicMaterial({color:'#36564d',transparent:true,opacity:.45});let fv=[];
for(const x of [-9,9]){for(let z=-4;z<31;z+=2.5)rod([x,0,z],[x,2.8,z],.025,dark);for(let y=.3;y<2.8;y+=.22)fv.push(x,y,-4,x,y,31);for(let z=-4;z<31;z+=.22)fv.push(x,0,z,x,2.8,z);}
const fg=new T.BufferGeometry();fg.setAttribute('position',new T.Float32BufferAttribute(fv,3));fence.add(new T.LineSegments(fg,fm));
const athlete=new T.Group();athlete.position.x=1.25;scene.add(athlete);
const joints=clip.rig.joints,byName=Object.fromEntries(joints.map((j,i)=>[j.name,i]));
const parts=[],segments=[];
function part(name,scale,offset,material){scale=scale.map(v=>v*bodyScale);offset=offset.map(v=>v*bodyScale);const m=mesh(new T.SphereGeometry(1,28,20),material,athlete);m.scale.set(...scale);parts.push({mesh:m,index:byName[name],offset:new T.Vector3(...offset)});return m;}
function segment(start,end,r1,r2,material){r1*=bodyScale;r2*=bodyScale;const m=mesh(new T.CylinderGeometry(r2,r1,1,24),material,athlete);segments.push({mesh:m,a:byName[start],b:byName[end]});return m;}
// A continuous shirt surface, deformed along the torso each frame.
const rings=14,sides=36,torsoPositions=new Float32Array((rings+1)*(sides+1)*3),torsoIndices=[];
for(let r=0;r<rings;r++)for(let j=0;j<sides;j++){const a=r*(sides+1)+j,b=a+sides+1;torsoIndices.push(a,b,a+1,b,b+1,a+1);}
const torsoGeo=new T.BufferGeometry();torsoGeo.setAttribute('position',new T.BufferAttribute(torsoPositions,3));torsoGeo.setIndex(torsoIndices);const torso=mesh(torsoGeo,shirt,athlete);
part('pelvis',[.155,.124,.115],[0,.0,0],shortmat);
segment('chest','neck',.065,.043,shirt);
segment('neck','head',.045,.045,skin);
part('head',[.091,.119,.09],[0,.052,.001],skin);part('head',[.09,.074,.091],[0,.116,-.005],hair);
part('head',[.021,.023,.025],[0,.05,.084],skin);
const band=mesh(new T.TorusGeometry(.091*bodyScale,.009*bodyScale,8,48).rotateX(Math.PI/2),bandmat,athlete);parts.push({mesh:band,index:byName.head,offset:new T.Vector3(0,.090*bodyScale,0)});
for(const x of [-1,1]){part('head',[.012,.022,.012],[x*.09,.04,0],skin);part('head',[.013,.004,.004],[x*.033,.073,.082],dark);}
for(const side of ['left','right']){
  segment(side+'_hip',side+'_knee',.073,.052,skin);segment(side+'_knee',side+'_ankle',.045,.029,skin);
  part(side+'_knee',[.047,.049,.043],[0,0,0],skin);part(side+'_hip',[.082,.10,.089],[0,-.05,0],shortmat);
  const shorts=mesh(new T.CylinderGeometry(.078*bodyScale,.087*bodyScale,.24*bodyScale,24),shortmat,athlete);parts.push({mesh:shorts,index:byName[side+'_hip'],offset:new T.Vector3(0,-.10*bodyScale,0)});
  segment(side+'_shoulder',side+'_elbow',.048,.034,skin);segment(side+'_elbow',side+'_wrist',.034,.024,skin);
  part(side+'_shoulder',[.062,.062,.066],[0,0,0],shirt);part(side+'_elbow',[.034,.034,.034],[0,0,0],skin);
  part(side+'_wrist',[.036,.070,.028],[0,-.065,0],skin);
  part(side+'_ankle',[.037,.068,.035],[0,.017,0],socks);
  part(side+'_ankle',[.054,.035,.125],[0,-.068,.073],white);
  part(side+'_ankle',[.052,.012,.121],[0,-.091,.07],dark);
  part(side+'_ankle',[.046,.005,.045],[0,-.035,.099],accent);
}
// Racquet frame, strings, throat, and wrapped grip; all remain hand-attached.
const racket=new T.Group();athlete.add(racket);const racketSpec=(clip.attachments||[]).find(a=>a.name==='racket');
if(racketSpec){racket.scale.setScalar(racketSpec.scale||1);const headY=racketSpec.points.sweet_spot[1]/(racketSpec.scale||1);const carbon=mat('#153f55',.33,.3),strings=new T.LineBasicMaterial({color:'#e4e9d0',transparent:true,opacity:.8});
rod([0,-.08,0],[0,.13,0],.018,dark,racket);
for(let y=-.07;y<.13;y+=.013){const ring=mesh(new T.TorusGeometry(.0182,.0015,5,20),white,racket);ring.rotation.x=Math.PI/2;ring.position.y=y;}
rod([0,.12,0],[-.060,headY-.143,0],.011,carbon,racket);rod([0,.12,0],[.060,headY-.143,0],.011,carbon,racket);
class Oval extends T.Curve{getPoint(t){const a=t*Math.PI*2;return new T.Vector3(.126*Math.cos(a),headY+.175*Math.sin(a),0);}}
mesh(new T.TubeGeometry(new Oval(),96,.012,8,true),carbon,racket);
const st=[];for(let x=-.109;x<.115;x+=.016){const dy=.166*Math.sqrt(Math.max(0,1-x*x/.117**2));st.push(x,headY-dy,0,x,headY+dy,0);}for(let y=-.151;y<.154;y+=.017){const dx=.117*Math.sqrt(Math.max(0,1-y*y/.166**2));st.push(-dx,headY+y,0,dx,headY+y,0);}const sg=new T.BufferGeometry();sg.setAttribute('position',new T.Float32BufferAttribute(st,3));racket.add(new T.LineSegments(sg,strings));
rod([-.09,headY+.12,0],[-.07,headY+.155,0],.013,accent,racket);rod([.09,headY+.12,0],[.07,headY+.155,0],.013,accent,racket);
}
racket.visible=!!racketSpec;
const ball=new T.Group();athlete.add(ball);ball.visible=!!clip.frames[0].ball;mesh(new T.SphereGeometry(.0335,24,18),mat('#d6ed39',1),ball);
for(const sign of [-1,1]){const bp=[];for(let k=0;k<=96;k++){const a=k/96*Math.PI*2;bp.push(new T.Vector3(.0337*Math.cos(a),.0337*Math.sin(a)*Math.cos(.6*Math.sin(a)*sign),.0337*Math.sin(a)*Math.sin(.6*Math.sin(a)*sign)));}ball.add(new T.Line(new T.BufferGeometry().setFromPoints(bp),new T.LineBasicMaterial({color:'#faf4dc'})));}
const phases=[...new Set(clip.frames.map(f=>f.phase||'Motion'))];document.querySelector('#bar').innerHTML=phases.map(()=>'<i></i>').join('');
const bars=[...document.querySelectorAll('#bar i')];
function draw(t,angle=0){
  t=Math.max(0,Math.min(clip.duration,t));
  const sample=t*clip.fps,index=Math.floor(sample),alpha=sample-index;
  const f=clip.frames[index],next=clip.frames[Math.min(index+1,clip.frames.length-1)];
  // Interpolate the local pose and rebuild FK, preserving limb lengths at
  // every output time, including the fractional times of slow-motion replay.
  const pos=[],rot=[];
  for(let i=0;i<joints.length;i++){
    const local=new T.Quaternion(...f.rotations[i]).slerp(new T.Quaternion(...next.rotations[i]),alpha);
    const parent=joints[i].parent;
    if(parent<0){pos.push(new T.Vector3(...f.root).lerp(new T.Vector3(...next.root),alpha));rot.push(local);}
    else{pos.push(new T.Vector3(...joints[i].offset).applyQuaternion(rot[parent]).add(pos[parent]));rot.push(rot[parent].clone().multiply(local));}
  }
  for(const part of parts){part.mesh.position.copy(pos[part.index]).add(part.offset.clone().applyQuaternion(rot[part.index]));part.mesh.quaternion.copy(rot[part.index]);}
  for(const s of segments)updateRod(s.mesh,pos[s.a],pos[s.b]);
  for(let r=0;r<=rings;r++){
    const u=r/rings;let a,b,blend;
    if(u<.37){a=byName.pelvis;b=byName.spine;blend=u/.37;}else{a=byName.spine;b=byName.chest;blend=(u-.37)/.63;}
    const center=pos[a].clone().lerp(pos[b],blend);const q=rot[a].clone().slerp(rot[b],blend);
    if(u>.75)center.add(new T.Vector3(0,(u-.75)*.33*bodyScale,0).applyQuaternion(q));
    if(u<.15)center.add(new T.Vector3(0,-(.15-u)*.18*bodyScale,0).applyQuaternion(q));
    const width=(.128+.041*Math.sin(Math.PI*u*.8))*bodyScale,depth=(.09+.023*Math.sin(Math.PI*u))*bodyScale;
    for(let j=0;j<=sides;j++){const theta=j/sides*Math.PI*2;const p=new T.Vector3(width*Math.cos(theta),0,depth*Math.sin(theta)).applyQuaternion(q).add(center);const at=(r*(sides+1)+j)*3;torsoPositions[at]=p.x;torsoPositions[at+1]=p.y;torsoPositions[at+2]=p.z;}
  }
  torsoGeo.attributes.position.needsUpdate=true;torsoGeo.computeVertexNormals();
  const grip=racketSpec;if(grip){const hand=byName[grip.parent_joint];
  racket.position.copy(pos[hand]).add(new T.Vector3(...grip.local_position).applyQuaternion(rot[hand]));
  racket.quaternion.copy(rot[hand]).multiply(new T.Quaternion(...grip.local_rotation));
  }
  if(f.ball)ball.position.set(...f.ball).lerp(new T.Vector3(...next.ball),alpha);ball.rotation.set(t*3,t*9,t*5);
  const center=new T.Vector3(...clip.frames[0].root);
  if(!clip.action.includes('serve')){center.x=pos[byName.pelvis].x;center.z=pos[byName.pelvis].z;}
  center.x+=1.25;center.y=clip.rig.height*.86;
  const size=1.85*Math.max(1,bodyScale);camera.top=size;camera.bottom=-size;camera.left=-size*W/H;camera.right=size*W/H;camera.updateProjectionMatrix();
  if(angle===0)camera.position.copy(center).add(new T.Vector3(-8.15,1.24,1.83));else camera.position.copy(center).add(new T.Vector3(5.55,.9,-4.2));
  camera.lookAt(center);camera.updateMatrixWorld();
  document.querySelector('#mode').textContent=angle===0?'01 / REAL TIME':'02 / 0.25× REPLAY';document.querySelector('#phase').textContent=f.phase||'Motion';
  bars.forEach((b,i)=>b.classList.toggle('on',i<=phases.indexOf(f.phase)));
  renderer.render(scene,camera);
}
window.renderFrame=draw;window.clipInfo={duration:clip.duration,impact:clip.impact_time};draw(0);window.renderReady=true;
