import * as THREE from './vendor/three.module.js';
import {OrbitControls} from './vendor/OrbitControls.js';

export class Viewer {
  constructor(element) {
    this.element=element; this.solid=true; this.follow=true; this.showContacts=true; this.showCom=false;
    this.scene=new THREE.Scene(); this.scene.background=new THREE.Color('#eff0e9'); this.scene.fog=new THREE.Fog('#eff0e9',12,34);
    this.camera=new THREE.PerspectiveCamera(36,1,.01,100);
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)); this.renderer.shadowMap.enabled=true; this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace; this.renderer.toneMapping=THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure=1.15;
    element.prepend(this.renderer.domElement);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement); this.controls.enableDamping=true; this.controls.dampingFactor=.09; this.controls.maxPolarAngle=Math.PI*.49; this.controls.minDistance=.3; this.controls.maxDistance=18;
    this.scene.add(new THREE.HemisphereLight('#fffff2','#74836e',2.2));
    const sun=new THREE.DirectionalLight('#fff8e8',3.1); sun.position.set(-3,7,4); sun.castShadow=true; sun.shadow.mapSize.set(2048,2048); sun.shadow.camera.left=-6;sun.shadow.camera.right=6;sun.shadow.camera.top=6;sun.shadow.camera.bottom=-6;sun.shadow.normalBias=.015;sun.shadow.bias=-.0001; this.scene.add(sun,sun.target);this.sun=sun;
    const fill=new THREE.DirectionalLight('#cbded9',1.6);fill.position.set(4,3,-4);this.scene.add(fill);
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(160,160),new THREE.MeshStandardMaterial({color:'#eff0e9',roughness:.95}));floor.rotation.x=-Math.PI/2;floor.position.y=-.007;floor.receiveShadow=true;this.scene.add(floor);this.floor=floor;
    const gridMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexShader:'varying vec3 worldPoint; void main(){vec4 p=modelMatrix*vec4(position,1.0); worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}',fragmentShader:'varying vec3 worldPoint; void main(){vec2 p=worldPoint.xz*2.0; vec2 g=abs(fract(p-0.5)-0.5)/max(fwidth(p),vec2(0.0001));float a=(1.0-min(min(g.x,g.y),1.0))*0.23;float fade=1.0-smoothstep(7.0,18.0,distance(worldPoint,cameraPosition));gl_FragColor=vec4(0.48,0.54,0.43,a*fade);}'});
    this.grid=new THREE.Mesh(new THREE.PlaneGeometry(100,100),gridMaterial);this.grid.rotation.x=-Math.PI/2;this.grid.position.y=.002;this.grid.renderOrder=2;this.scene.add(this.grid);
    this.rigGroup=new THREE.Group();this.scene.add(this.rigGroup);this.markerGroup=new THREE.Group();this.scene.add(this.markerGroup);
    this.mat=new THREE.MeshStandardMaterial({color:'#8a9e8a',roughness:.48,metalness:.08});
    this.jointMat=new THREE.MeshStandardMaterial({color:'#365b4c',roughness:.45});
    this.shellMat=new THREE.MeshStandardMaterial({color:'#99aa96',roughness:.46,metalness:.06});
    this.boneMat=new THREE.MeshStandardMaterial({color:'#335e4b',roughness:.5});
    this.com=new THREE.Mesh(new THREE.SphereGeometry(.023,16,10),new THREE.MeshBasicMaterial({color:'#d3914f',depthTest:false}));this.com.renderOrder=10;this.com.visible=false;this.scene.add(this.com);
    this.resize=new ResizeObserver(()=>{const w=element.clientWidth,h=element.clientHeight;this.renderer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();});this.resize.observe(element);
  }
  clear(group){for(const o of [...group.children]){o.traverse(x=>{if(x.geometry)x.geometry.dispose();});group.remove(o);}}
  mesh(geometry,material){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;this.rigGroup.add(m);return m;}
  load(clip){
    this.clip=clip;this.clear(this.rigGroup);this.clear(this.markerGroup);this.joints=[];this.bones=[];this.shells=[];this.markers={};this.lastRoot=null;
    const rig=clip.rig,s=rig.scale,human=rig.species==='human';
    this.clip.rig.joints.forEach((j,i)=>{
      const m=this.mesh(new THREE.SphereGeometry(1,16,12),this.jointMat);this.joints.push(m);
      if(j.parent>=0){
        const r=Math.min(j.radius,rig.joints[j.parent].radius)*.84;
        const bone=this.mesh(new THREE.CylinderGeometry(1,1.12,1,16),this.mat);this.bones.push({mesh:bone,a:j.parent,b:i,r});
      }
      if(j.name.endsWith('_toe')){
        const marker=new THREE.Mesh(new THREE.RingGeometry(.045*s,.065*s,32),new THREE.MeshBasicMaterial({color:'#71994e',side:THREE.DoubleSide,transparent:true,opacity:.8}));marker.rotation.x=-Math.PI/2;this.markerGroup.add(marker);this.markers[j.name]={mesh:marker,index:i};
      }
    });
    const at=(name,shape,offset=[0,0,0],material=this.shellMat)=>{
      const i=rig.joints.findIndex(j=>j.name===name);if(i<0)return;
      const mesh=this.mesh(new THREE.SphereGeometry(1,24,18),material);mesh.scale.set(...shape.map(v=>v*s));this.shells.push({mesh,index:i,offset:new THREE.Vector3(...offset.map(v=>v*s))});
    };
    if(human){
      at('pelvis',[.145,.112,.102],[0,.005,0]);at('spine',[.115,.16,.089],[0,.035,0]);at('chest',[.163,.17,.104],[0,.005,0]);at('head',[.089,.116,.085],[0,.049,.005]);
      at('head',[.052,.012,.009],[0,.065,.086],this.jointMat);
      for(const side of ['left','right']){at(side+'_hand',[.035,.075,.025],[0,.033,0]);at(side+'_ankle',[.045,.032,.117],[0,-.034,.064],this.jointMat);}
    }else{
      at('spine',[.121,.132,.31],[0,0,0]);at('chest',[.117,.135,.145],[0,0,0]);at('pelvis',[.116,.114,.17]);at('head',[.085,.092,.13],[0,.01,.035]);at('muzzle',[.059,.052,.098],[0,-.007,.025]);
      for(const side of [-1,1]){
        const mesh=this.mesh(new THREE.ConeGeometry(.045*s,.13*s,3),this.jointMat);this.shells.push({mesh,index:rig.joints.findIndex(j=>j.name==='head'),offset:new THREE.Vector3(side*.06*s,.115*s,-.025*s)});
      }
      for(const stem of ['left_hind','right_hind','left_front','right_front'])at(stem+'_ankle',[.038,.025,.075],[0,-.024,.04],this.jointMat);
    }
    if(this.path){this.path.geometry.dispose();this.path.material.dispose();this.scene.remove(this.path);}
    const points=clip.frames.filter((_,i)=>i%5===0).map(f=>new THREE.Vector3(f.root[0],.003,f.root[2]));
    this.path=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineDashedMaterial({color:'#a9b795',dashSize:.025,gapSize:.075,transparent:true,opacity:.5}));this.path.computeLineDistances();this.scene.add(this.path);
    this.props=[];
    for(const spec of clip.attachments||[]){
      const group=new THREE.Group();this.rigGroup.add(group);
      if(spec.shape==='tennis_racket'){
        const ring=new THREE.Mesh(new THREE.TorusGeometry(1,.07,8,48),this.boneMat);ring.scale.set(.126,.175,.126);const headY=spec.points.sweet_spot[1]/(spec.scale||1);ring.position.y=headY;group.add(ring);
        const handle=new THREE.Mesh(new THREE.CylinderGeometry(.016,.016,.33,12),this.jointMat);handle.position.y=.105;group.add(handle);
        const strings=[];for(let x=-.1;x<=.1;x+=.025){const h=.16*Math.sqrt(1-x*x/.12**2);strings.push(x,headY-h,0,x,headY+h,0);}
        const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(strings,3));group.add(new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color:'#dbe4c5'})));
        group.scale.setScalar(spec.scale||1);
      }
      this.props.push({group,spec,index:rig.joints.findIndex(j=>j.name===spec.parent_joint)});
    }
    this.ball=clip.frames[0].ball?this.mesh(new THREE.SphereGeometry(.0335*(clip.attachments?.[0]?.scale||1),16,12),new THREE.MeshStandardMaterial({color:'#cfdf35'})):null;
    this.draw(0);this.setView('perspective');
  }
  setView(view){
    if(!this.clip)return;
    const rig=this.clip.rig,base=this.clip.frames[0].root;
    const current=this.lastRoot||new THREE.Vector3(...base),h=rig.species==='human'?rig.height:rig.height*1.6;
    const serving=['serve','recorded_serve'].includes(this.clip.action);
    this.controls.target.set(current.x,h*(serving?.95:.48),current.z+(rig.species==='dog'?.22*rig.scale:0));
    const target=this.controls.target,dist=h*(serving?(view==='perspective'?2.7:3.5):2.05);
    const v=view==='front'?[0,.08,dist]:view==='side'?[dist,.08,0]:view==='top'?[0,dist,.001]:[dist*.8,dist*.32,dist*1.05];
    this.camera.position.copy(target).add(new THREE.Vector3(...v));this.controls.update();
  }
  draw(index){
    if(!this.clip)return;
    index=Math.max(0,Math.min(index,this.clip.frames.length-1));const integer=Math.floor(index),alpha=index-integer;
    const frame=this.clip.frames[integer],next=this.clip.frames[Math.min(integer+1,this.clip.frames.length-1)],rig=this.clip.rig,s=rig.scale;
    const root=new THREE.Vector3(...frame.root).lerp(new THREE.Vector3(...next.root),alpha);
    if(this.follow&&this.lastRoot){const delta=root.clone().sub(this.lastRoot);this.controls.target.add(delta);this.camera.position.add(delta);}
    this.lastRoot=root;this.sun.position.copy(root).add(new THREE.Vector3(-3,7,4));this.sun.target.position.copy(root);this.sun.target.updateMatrixWorld();
    const points=[],world=[];
    rig.joints.forEach((j,i)=>{
      const q=new THREE.Quaternion(...frame.rotations[i]).slerp(new THREE.Quaternion(...next.rotations[i]),alpha);
      world.push(j.parent>=0?world[j.parent].clone().multiply(q):q);
      points.push(j.parent>=0?new THREE.Vector3(...j.offset).applyQuaternion(world[j.parent]).add(points[j.parent]):root.clone());
    });
    rig.joints.forEach((j,i)=>{
      const m=this.joints[i];m.position.copy(points[i]);m.scale.setScalar(this.solid?j.radius*.75:.015*s);
      m.visible=!this.solid||!['head_tip','head','muzzle','tail_tip'].includes(j.name)&&!j.name.endsWith('_toe');
    });
    for(const b of this.bones){const a=points[b.a],p=points[b.b],d=p.clone().sub(a);b.mesh.position.copy(a).add(p).multiplyScalar(.5);b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.clone().normalize());b.mesh.scale.set(this.solid?b.r:.009*s,d.length(),this.solid?b.r:.009*s);b.mesh.material=this.solid?this.mat:this.boneMat;const name=rig.joints[b.b].name;b.mesh.visible=!this.solid||name!=='head_tip'&&!name.endsWith('_toe');}
    for(const shell of this.shells){shell.mesh.visible=this.solid;shell.mesh.position.copy(points[shell.index]).add(shell.offset.clone().applyQuaternion(world[shell.index]));shell.mesh.quaternion.copy(world[shell.index]);}
    for(const [name,m]of Object.entries(this.markers)){m.mesh.position.set(points[m.index].x,.004,points[m.index].z);m.mesh.visible=this.showContacts&&!!frame.contacts[name];}
    for(const {group,spec,index:i} of this.props){group.position.copy(points[i]).add(new THREE.Vector3(...spec.local_position).applyQuaternion(world[i]));group.quaternion.copy(world[i]).multiply(new THREE.Quaternion(...spec.local_rotation));}
    if(this.ball)this.ball.position.set(...frame.ball).lerp(new THREE.Vector3(...next.ball),alpha);
    this.com.visible=this.showCom;const center=this.clip.evaluation?.estimated_com?.[integer];if(center)this.com.position.set(...center);
  }
  render(){this.controls.update();this.renderer.render(this.scene,this.camera);}
}
