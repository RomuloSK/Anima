// Prepare the same Three.js scene for an offline, native OpenGL render.
// Geometry, cameras and FK are shared with the interactive browser renderer.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const mode=process.argv[2]||'preview';
const clipPath=path.resolve(process.argv[3]);
const input=JSON.parse(fs.readFileSync(clipPath,'utf8'));
let src=fs.readFileSync(path.join(here,input.scene?'rally_scene.js':'scene.js'),'utf8');
src=src.replace("const clip=await(await fetch('serve.json')).json();",`const clip=JSON.parse(fs.readFileSync(${JSON.stringify(clipPath)},'utf8'));`);
const a=src.indexOf('const renderer=new T.WebGLRenderer('),b=src.indexOf('const scene=',a);
src=src.slice(0,a)+"const renderer={render(){}};\n"+src.slice(b);
const stubs=`import fs from 'node:fs';
const innerWidth=1920,innerHeight=1080;
const node=()=>({textContent:'',innerHTML:'',classList:{toggle(){}}});
const nodes={};const document={querySelector(s){return nodes[s]||(nodes[s]=node())},querySelectorAll(){return Array.from({length:7},node)}};
const window={};
`;
const tail=`
scene.updateMatrixWorld(true);
const meshes=[];const geometries={};const isRally=!!clip.scene;
const actorGroups=isRally?athletes:[athlete],torsoMeshes=isRally?torsos:[torso];
scene.traverse(o=>{
 if(!o.isMesh&&!o.isLineSegments&&!o.isLine)return;
 const g=o.geometry;if(o.isMesh&&!g.attributes.normal)g.computeVertexNormals();
 let geo=g;
 if(g.index)geo=g.toNonIndexed();
 const key=g.uuid;
 if(!geometries[key])geometries[key]={position:Array.from(geo.attributes.position.array),normal:geo.attributes.normal?Array.from(geo.attributes.normal.array):null,mode:o.isMesh?'triangles':o.isLine?'strip':'lines'};
 let p=o,dynamic=false;while(p){if(actorGroups.includes(p)||p===ball){dynamic=true;break}p=p.parent}
 meshes.push({object:o,key,dynamic,torso:torsoMeshes.includes(o),color:o.material.color.toArray(),opacity:o.material.opacity??1});
});
process.stdout.write(JSON.stringify({assets:{geometries,meshes:meshes.map(m=>({key:m.key,dynamic:m.dynamic,torso:m.torso,color:m.color,opacity:m.opacity,matrix:m.object.matrixWorld.elements}))}})+'\\n');
const shots=[];const fps=60,duration=clip.duration;
if(${JSON.stringify(mode)}==='preview'){
 const times=isRally||clip.action==='forehand_return'?[0,2.10,2.25,2.35,2.45,2.55,2.62,2.72,2.80,2.85,2.92,3.08,3.25,3.6,4.3]:[0,.60,1.10,1.65,1.98,2.108333,2.25,2.7];
 for(const angle of isRally?[0,1,2]:[0,1])for(const t of times)shots.push({t:Math.min(duration,t),angle});
}else{
 for(let i=0;i<Math.round((duration+.5)*fps);i++)shots.push({t:Math.max(0,Math.min(duration,i/fps-.25)),angle:0});
 const start=isRally?clip.scene.replay[0]:0,end=isRally?clip.scene.replay[1]:duration;
 const extra=isRally?0:.25;
 for(let i=0;i<Math.round(((end-start)*4+extra)*fps);i++)shots.push({t:Math.min(end,start+i/fps*.25),angle:1});
}
for(const {t,angle} of shots){
 draw(t,angle);scene.updateMatrixWorld(true);
 const updates=meshes.map((m,i)=>m.dynamic?{i,matrix:m.object.matrixWorld.elements}:null).filter(Boolean);
 const deform=torsoMeshes.map(torso=>{const g=torso.geometry.toNonIndexed();return {key:torso.geometry.uuid,position:Array.from(g.attributes.position.array),normal:Array.from(g.attributes.normal.array)}});
 const f=clip.frames[Math.min(clip.frames.length-1,Math.floor(t*clip.fps))];
 const vp=new T.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
 const line={t,angle,phase:(isRally&&angle===0?f.rally_phase:f.phase)||'Motion',source:f.source_time,vp:vp.elements,eye:camera.position.toArray(),updates,
 torsos:deform,shadows:isRally?shadows:[[(f.positions[byName.left_ankle][0]+f.positions[byName.right_ankle][0])*.5+1.25,(f.positions[byName.left_ankle][1]+f.positions[byName.right_ankle][1])*.5,(f.positions[byName.left_ankle][2]+f.positions[byName.right_ankle][2])*.5],[1000,0,1000]]};
 process.stdout.write(JSON.stringify(line)+'\\n');
}

`;
const moduleSource=(stubs+src+tail).replace("'../web/vendor/three.module.js'",JSON.stringify(new URL('../web/vendor/three.module.js',import.meta.url).href));
await import('data:text/javascript;base64,'+Buffer.from(moduleSource).toString('base64'));
