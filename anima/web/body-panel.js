import {Viewer} from './viewer.js';
import {schemaForm} from './api-form.js';

export function installBodyPanel({call,current,refresh,loadClip,toast}){
  const $=s=>document.querySelector(s),dialog=$('#body-dialog');
  let viewer,descriptor,coordinates={},options={},fields={},sequence=[],pending=0,timer,valid=false,profileForm,profileId;
  const el=(tag,props={})=>Object.assign(document.createElement(tag),props);
  function updateSequence(){
    $('#body-keys').replaceChildren();sequence.forEach((key,i)=>{const row=el('div',{className:'body-key'});row.append(el('span',{textContent:'Pose '+(i+1)}));
      const input=el('input',{type:'number',min:0,max:30,step:.25,value:key.time});input.setAttribute('aria-label','Pose '+(i+1)+' time');input.onchange=()=>key.time=+input.value;row.append(input);
      const remove=el('button',{type:'button',className:'icon-button',textContent:'×'});remove.setAttribute('aria-label','Remove pose '+(i+1));remove.onclick=()=>{sequence.splice(i,1);updateSequence();};row.append(remove);$('#body-keys').append(row);});
    $('#body-animate').disabled=sequence.length<2;
  }
  async function preview(){
    const token=++pending;$('#body-status').textContent='Checking pose…';$('#body-add-key').disabled=true;
    try{
      const result=await call('preview_body_pose',{character_id:profileId,coordinates,options,on_limit:'project'});
      if(token!==pending)return;
      coordinates=result.coordinates;valid=result.valid;
      for(const [key,f]of Object.entries(fields)){
        const bounds=result.available[key];f.input.min=bounds[0];f.input.max=bounds[1];f.input.value=coordinates[key];
        f.input.disabled=key.endsWith('girdle_up')&&options.coordinate_shoulders;
        f.value.textContent=coordinates[key].toFixed(1)+'°';f.range.textContent='Available '+bounds[0].toFixed(1)+'° to '+bounds[1].toFixed(1)+'°';
      }
      const failed=Object.entries(result.checks).filter(([,v])=>v===false).map(([k])=>k.replaceAll('_',' '));
      $('#body-status').textContent=valid?'Pose passes the body constraints':'Pose blocked: '+failed.join(', ');
      $('#body-status').classList.toggle('warn',!valid);$('#body-add-key').disabled=!valid;
      const notes=result.adjustments.map(a=>a.coordinate.replaceAll('_',' ')+': '+a.requested.toFixed(1)+'° → '+a.resolved.toFixed(1)+'°. '+a.reason);
      notes.push(...result.issues.map(i=>(i.coordinate||'Body')+': '+(i.reason||'outside available range')));
      if(result.checks.arm_torso_clearance===false)notes.push('Arm touches torso: '+result.metrics.arm_torso_worst_sample.part);
      if(result.checks.limb_clearance===false)notes.push('Limb overlap: '+result.metrics.limb_clearance_worst_sample.part);
      $('#body-feedback').textContent=notes.join('\n')||'Fixed bone lengths and coupled limits are enforced in the engine.';
      viewer?.load(result.preview);viewer?.setView('front');
    }catch(error){if(token!==pending)return;valid=false;$('#body-status').textContent=error.message;$('#body-status').classList.add('warn');}
  }
  function schedule(){clearTimeout(timer);pending++;valid=false;$('#body-add-key').disabled=true;timer=setTimeout(preview,80);}
  async function load(){
    descriptor=await call('describe_body_controls',{character_id:profileId});coordinates=descriptor.coordinates;
    options=Object.fromEntries(Object.entries(descriptor.options_schema).map(([k,v])=>[k,v.default]));
    fields={};sequence=[];updateSequence();$('#body-sliders').replaceChildren();$('#body-options').replaceChildren();
    const groups={};
    for(const [key,c]of Object.entries(descriptor.controls)){
      if(!groups[c.group]){const details=el('details',{className:'body-group',open:c.group==='Right arm'});details.append(el('summary',{textContent:c.group}));groups[c.group]=details;$('#body-sliders').append(details);}
      const row=el('div',{className:'body-coordinate'});row.dataset.coordinate=key;
      const label=el('label',{className:'range-label',textContent:c.label}),value=el('output');label.append(value);
      const input=el('input',{type:'range',min:c.available[0],max:c.available[1],step:.5,value:c.value});input.setAttribute('aria-label',c.label);input.dataset.coordinate=key;
      const range=el('small',{className:'body-available'});row.append(label,input,range,el('p',{className:'tiny',textContent:c.rule}));groups[c.group].append(row);
      input.oninput=()=>{coordinates[key]=+input.value;value.textContent=input.value+'°';schedule();};fields[key]={input,value,range};
    }
    for(const [key,s]of Object.entries(descriptor.options_schema)){
      const label=el('label',{className:'toggle-row',textContent:key.replaceAll('_',' ')}),input=el('input',{type:'checkbox',checked:s.default});input.setAttribute('aria-label',key.replaceAll('_',' '));label.append(input);$('#body-options').append(label,el('p',{className:'tiny',textContent:s.description}));
      input.onchange=()=>{options[key]=input.checked;schedule();};
    }
    profileForm=schemaForm($('#body-profile-form'),{type:'object',properties:descriptor.settings_schema,required:Object.keys(descriptor.settings_schema)},descriptor.settings);
    $('#body-sources').replaceChildren();for(const source of descriptor.sources){const a=el('a',{href:source.url,textContent:source.title,target:'_blank',rel:'noreferrer'});$('#body-sources').append(a,el('p',{className:'tiny',textContent:source.supports}));}
    $('#body-calibration').textContent=descriptor.calibration;
    await preview();
  }
  $('#open-body').onclick=async()=>{
    if(current().character?.species!=='human'){toast('Select a human character for the coupled body controls.',true);return;}
    valid=false;$('#body-add-key').disabled=true;$('#body-status').textContent='Loading controls…';profileId=current().character.id;dialog.showModal();
    try{if(!viewer)viewer=new Viewer($('#body-viewport'));}catch{}
    try{await load();}catch(error){toast(error.message,true);}
  };
  $('#body-apply-profile').onclick=async()=>{
    try{const result=await call('configure_body',{character_id:profileId,settings:profileForm.value()});profileId=result.id;await refresh();await load();toast('New body profile saved');}catch(e){toast(e.message,true);}
  };
  $('#body-add-key').onclick=()=>{if(!valid)return;sequence.push({time:sequence.length?sequence.at(-1).time+2:0,coordinates:{...coordinates}});updateSequence();};
  $('#body-animate').onclick=async()=>{
    $('#body-animate').disabled=true;$('#body-status').textContent='Building and validating motion…';
    try{const result=await call('animate_body',{character_id:profileId,keyframes:sequence,fps:60,options,on_limit:'reject'});await refresh();await loadClip(result.id);dialog.close();toast('Body motion created · '+result.duration.toFixed(2)+' seconds');}
    catch(e){$('#body-status').textContent=e.message;$('#body-status').classList.add('warn');}
    finally{$('#body-animate').disabled=sequence.length<2;}
  };
  dialog.addEventListener('close',()=>{clearTimeout(timer);pending++;valid=false;});
  function render(){if(dialog.open)viewer?.render();requestAnimationFrame(render);}requestAnimationFrame(render);
}
