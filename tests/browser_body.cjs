// Run from the workspace root. Server and browser share this process namespace.
const {chromium}=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright':'playwright');
const fs=require('fs'),path=require('path'),{spawn}=require('child_process');
const assert=require('assert');
(async()=>{
 const project=path.resolve(__dirname,'..'),root=path.dirname(project),out=process.env.ANIMA_TEST_OUTPUT||fs.mkdtempSync(path.join(require('os').tmpdir(),'anima-body-qa-'));fs.mkdirSync(out,{recursive:true});
 const server=spawn('python3',['-m','anima','serve','--data',path.join(out,'ui-project'),'--port','8769'],{env:{...process.env,PYTHONPATH:path.join(root,'anima')}});
 let browser;
 try{
  await new Promise((ok,fail)=>{server.stdout.on('data',d=>{if(d.toString().includes('Anima is running'))ok()});server.on('exit',c=>fail(Error('Server exited '+c)));});
  const launch={headless:true,args:['--enable-unsafe-swiftshader']};
  if(process.env.CHROMIUM_EXECUTABLE_PATH)launch.executablePath=process.env.CHROMIUM_EXECUTABLE_PATH;
  else if(fs.existsSync(path.join(root,'.browser/chromium'))){const binary=require(path.join(root,'.build/node_modules/@sparticuz/chromium'));Object.assign(launch,{executablePath:path.join(root,'.browser/chromium'),args:[...binary.args,'--enable-unsafe-swiftshader'],env:{...process.env,LD_LIBRARY_PATH:path.join(root,'.browser')}});}
  browser=await chromium.launch(launch);
  const page=await browser.newPage({viewport:{width:1480,height:1050}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:8769');await page.waitForFunction(()=>window.animaReady);
  await page.locator('#open-body').click();await page.waitForFunction(()=>document.querySelector('#body-status').textContent.includes('passes'));
  assert.equal(await page.locator('#body-sliders input').count(),35);
  const input=k=>page.locator('input[data-coordinate="'+k+'"]');
  async function set(k,v){const response=page.waitForResponse(r=>r.url().endsWith('/api/call')&&r.request().postDataJSON().name==='preview_body_pose');await input(k).evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}))},v);await response;await page.waitForFunction(()=>!document.querySelector('#body-status').textContent.includes('Checking'));}
  await page.getByLabel('coordinate shoulders',{exact:true}).uncheck();await page.waitForFunction(()=>!document.querySelector('input[data-coordinate=right_girdle_up]').disabled);
  await set('right_girdle_up',0);assert.equal(await input('right_arm_elevation').getAttribute('max'),'120');
  await page.getByLabel('coordinate shoulders',{exact:true}).check();await page.waitForFunction(()=>document.querySelector('input[data-coordinate=right_girdle_up]').disabled);
  assert.equal(await input('right_arm_elevation').getAttribute('max'),'175');
  assert.equal(await input('right_hip_flexion').getAttribute('max'),'85');
  await set('right_knee_flexion',90);assert.equal(await input('right_hip_flexion').getAttribute('max'),'125');
  assert.equal(await input('right_ankle_dorsiflexion').getAttribute('max'),'45');
  await set('right_knee_flexion',0);await page.locator('#body-add-key').click();
  await set('right_arm_elevation',140);await page.locator('#body-add-key').click();
  await page.screenshot({path:path.join(out,'body-controls-desktop.png')});
  await page.locator('#body-animate').click();await page.waitForFunction(()=>!document.querySelector('#body-dialog').open,{timeout:60000});
  assert((await page.locator('#metrics').textContent()).includes('Coupled body limits'));
  // Use the actual form renderer against every registry schema and validate
  // its serialized values in Python after this browser test.
  const forms=await page.evaluate(async()=>{
   const {schemaForm}=await import('/api-form.js');
   const tools=(await (await fetch('/api/tools')).json()).tools;
   const assets=await (await fetch('/api/assets')).json();
   const call=async(name,args)=>(await (await fetch('/api/call',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,arguments:args})})).json());
   const char=assets.characters.find(c=>c.species==='human');
   const body=await call('describe_body_controls',{character_id:char.id}),recipes=await call('list_motion_recipes',{});
   const host=document.createElement('div');document.body.append(host);
   const rows=tools.map(tool=>{const form=schemaForm(host,tool.inputSchema,{manifest_file:'reference.json'}, {...assets,recipes:recipes.recipes,joints:char.joints,coordinates:body.controls});return {name:tool.name,args:form.value(),schema:tool.inputSchema};});host.remove();return rows;
  });assert.equal(forms.length,22);
  fs.writeFileSync(path.join(out,'api-form-values.json'),JSON.stringify(forms,null,2));
  await page.locator('#open-tools').click();await page.locator('#tool-select').selectOption('configure_body');await page.waitForFunction(()=>!document.querySelector('#run-tool').disabled);
  await page.locator('#tool-form').getByLabel('Include settings',{exact:true}).check();
  assert.equal(await page.locator('#tool-form input[type=range]').count(),8);
  await page.locator('#tool-json-mode').check();assert((await page.locator('#tool-args').inputValue()).includes('mobility'));
  await page.locator('#tool-json-mode').uncheck();
  await page.screenshot({path:path.join(out,'api-controls-desktop.png')});await page.locator('#tools-dialog .close-dialog').click();
  const config=await page.evaluate(async()=>{const all=await (await fetch('/api/mcp-config')).json(),guided=await (await fetch('/api/mcp-config?profile=guided')).json();return {all,guided}});
  assert(JSON.stringify(config.all).includes('all'));assert(JSON.stringify(config.guided).includes('guided'));
  await page.setViewportSize({width:390,height:844});await page.locator('#open-body').click();await page.waitForFunction(()=>document.querySelector('#body-status').textContent.includes('passes'));
  await page.screenshot({path:path.join(out,'body-controls-mobile.png')});
  const overflow=await page.evaluate(()=>{const e=document.querySelector('#body-dialog');return e.scrollWidth-e.clientWidth});assert(overflow<=2,'Mobile dialog overflows by '+overflow);
  assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(out,'browser-body-results.json'),JSON.stringify({status:'passed',controls:35,tool_forms:forms.length,dependent_bounds:true,animation_created:true,raw_mode_round_trip:true,mcp_profiles:true,mobile_overflow_px:overflow,js_errors:errors},null,2));
  console.log('Body/API browser checks passed');
 }finally{if(browser)await browser.close();server.kill();}
})().catch(e=>{console.error(e);process.exit(1)});
