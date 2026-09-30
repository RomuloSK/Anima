const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const {spawn}=require('node:child_process');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const project=path.resolve(__dirname,'..'),workspace=path.dirname(project),data=fs.mkdtempSync(path.join(os.tmpdir(),'anima-serve-qa-'));
(async()=>{
 const server=spawn('python',['-u','-m','anima','serve','--data',data,'--port','8767'],{cwd:project});let browser;
 try{
  await new Promise((resolve,reject)=>{server.stdout.on('data',d=>{if(d.toString().includes('Anima is running'))resolve()});server.on('error',reject);server.on('exit',c=>reject(Error('Server exited '+c)));});
  const launch={headless:true,args:['--enable-unsafe-swiftshader']};
  if(process.env.CHROMIUM_EXECUTABLE_PATH)launch.executablePath=process.env.CHROMIUM_EXECUTABLE_PATH;
  else if(fs.existsSync(workspace+'/.browser/chromium')){const binary=require(workspace+'/.build/node_modules/@sparticuz/chromium');Object.assign(launch,{executablePath:workspace+'/.browser/chromium',args:[...binary.args,'--enable-unsafe-swiftshader'],env:{...process.env,LD_LIBRARY_PATH:workspace+'/.browser'}});}
  browser=await chromium.launch(launch);const page=await browser.newPage({viewport:{width:1440,height:1050}});const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:8767');await page.waitForFunction(()=>window.animaReady);
  await page.getByRole('button',{name:'Serve · recorded',exact:true}).click();await page.locator('#generate').click();
  await page.waitForFunction(()=>document.querySelector('#clip-title').textContent==='Human serve · recorded');
  assert.match(await page.locator('#check-status').textContent(),/passed/);assert.equal(await page.locator('#duration').isDisabled(),true);assert.match(await page.locator('#metrics').textContent(),/Not calibrated/);assert.equal(await page.locator('#joint-count').textContent(),'24 joints');
  await page.locator('#scrubber').fill('80');await page.screenshot({path:project+'/docs/recorded-serve-workbench.png'});
  const downloadPromise=page.waitForEvent('download');await page.locator('#export-open').click();await page.locator('[data-format="gltf"]').click();const download=await downloadPromise;const exportPath=path.join(data,'serve.gltf');await download.saveAs(exportPath);
  const exported=JSON.parse(fs.readFileSync(exportPath,'utf8'));const wrist=exported.nodes.findIndex(n=>n.name==='right_wrist'),racket=exported.nodes.findIndex(n=>n.name==='racket');assert(exported.nodes[wrist].children.includes(racket));assert(exported.nodes.some(n=>n.name==='ball'));
  await page.locator('#playback-speed').selectOption('.25');await page.locator('#play').click();await page.waitForFunction(()=>Number(document.querySelector('#scrubber').value)>80);
  await page.waitForFunction(()=>document.querySelector('#play').getAttribute('aria-label')==='Play');assert.equal(await page.locator('#scrubber').inputValue(),'100');await page.reload();await page.waitForFunction(()=>window.animaReady);await page.getByRole('button',{name:/Serve · recorded.*Human/}).click();await page.waitForFunction(()=>document.querySelector('#clip-title').textContent==='Human serve · recorded');
  assert.equal(errors.length,0,errors.join('\n'));
  const report={checks:['Recorded serve available in movement list','Loaded using shared engine','24-joint reconstruction loaded','Geometry checks passed','Duration preserves native timing','Uncalibrated limits shown honestly','Fractional playback and scrubbing','Capture stops at end without loop snap','glTF preserves hand-to-racket parent','Ball exported','Take survives reload','No browser runtime errors'],errors};
  fs.writeFileSync(project+'/docs/recorded-serve-browser-checks.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{if(browser)await browser.close();server.kill('SIGTERM');fs.rmSync(data,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exit(1)});
