// Every tool input is rendered from the same JSON schema used by HTTP/MCP.
const element=(tag,props={})=>Object.assign(document.createElement(tag),props);
const title=s=>s.replaceAll('_',' ');

export function schemaForm(host,schema,initial={},context={}){
  host.replaceChildren();
  function field(parent,key,s,value,path,required=true){
    const box=element('div',{className:'api-field'});box.dataset.path=path;parent.append(box);
    const head=element('div',{className:'api-field-head'});box.append(head);
    const label=element('label',{textContent:title(key)});head.append(label);
    let enabled;
    if(!required){
      enabled=element('input',{type:'checkbox',checked:value!==undefined});enabled.setAttribute('aria-label','Include '+title(key));head.prepend(enabled);
    }
    const body=element('div',{className:'api-field-body'});box.append(body);
    if(s.description)body.append(element('p',{className:'tiny field-help',textContent:s.description}));
    let read;
    if(s.enum){
      const input=element('select');input.setAttribute('aria-label',title(key));
      for(const v of s.enum)input.append(element('option',{value:String(v),textContent:String(v)}));
      input.value=String(value??s.default??s.enum[0]);body.append(input);read=()=>s.type==='number'||s.type==='integer'?Number(input.value):input.value;
    }else if(s.type==='boolean'){
      const input=element('input',{type:'checkbox',checked:value??s.default??false});input.setAttribute('aria-label',title(key));body.append(input);read=()=>input.checked;
    }else if(s.type==='number'||s.type==='integer'){
      const row=element('div',{className:'api-number'}),step=s.type==='integer'?1:(s.maximum-s.minimum<=3?.01:.1);
      const number=element('input',{type:'number',min:s.minimum,max:s.maximum,step,value:value??s.default??Math.max(0,s.minimum??0)});
      number.setAttribute('aria-label',title(key)+' value');row.append(number);
      if(Number.isFinite(s.minimum)&&Number.isFinite(s.maximum)){
        const slider=element('input',{type:'range',min:s.minimum,max:s.maximum,step,value:number.value});slider.setAttribute('aria-label',title(key));
        slider.oninput=()=>number.value=slider.value;number.oninput=()=>slider.value=number.value;row.prepend(slider);
      }
      body.append(row);read=()=>Number(number.value);
    }else if(s.type==='string'){
      const isChar=key.endsWith('character_id'),isClip=key.endsWith('clip_id');
      const choices=isChar?context.characters:isClip?context.clips:key==='recipe'?context.recipes:null;
      if(choices?.length){
        const input=element('select');input.setAttribute('aria-label',title(key));
        for(const item of choices)input.append(element('option',{value:item.id,textContent:item.name||item.character+' · '+item.action||item.id}));
        input.value=value??s.default??choices[0].id;body.append(input);read=()=>input.value;
      }else{
        const input=element('input',{type:'text',value:value??s.default??'',maxLength:s.maxLength??1000});input.setAttribute('aria-label',title(key));body.append(input);read=()=>input.value;
      }
    }else if(s.type==='array'){
      if(s.items.enum&&s.minItems!==s.maxItems){
        const list=element('div',{className:'api-enums'}),selected=value??s.default??[];body.append(list);const inputs=[];
        for(const option of s.items.enum){const label=element('label',{textContent:String(option)}),input=element('input',{type:'checkbox',checked:selected.includes(option)});label.prepend(input);list.append(label);inputs.push([option,input]);}
        read=()=>inputs.filter(([,input])=>input.checked).map(([option])=>option);
      }else{
        let rows=[];const list=element('div',{className:'api-items'});body.append(list);
        function add(v){
          const row=element('div',{className:'api-item'}),index=rows.length;list.append(row);
          const get=field(row,'item '+(index+1),s.items,v,path+'.'+index);
          const item={row,get};rows.push(item);
          if(s.minItems!==s.maxItems){const remove=element('button',{type:'button',className:'button quiet',textContent:'Remove item'});remove.onclick=()=>{if(rows.length>(s.minItems??0)){rows=rows.filter(x=>x!==item);row.remove();}};row.append(remove);}
        }
        for(const v of value??s.default??Array(s.minItems??0).fill(undefined))add(v);
        if(s.minItems!==s.maxItems){const button=element('button',{type:'button',className:'button quiet',textContent:'Add item'});button.onclick=()=>{if(rows.length<(s.maxItems??100))add(undefined);};body.append(button);}
        read=()=>rows.map(r=>r.get());
      }
    }else if(s.type==='object'){
      if(s.properties){
        const getters=Object.entries(s.properties).map(([k,v])=>[k,field(body,k,v,value?.[k]??v.default,path+'.'+k,(s.required??[]).includes(k))]);
        read=()=>Object.fromEntries(getters.map(([k,get])=>[k,get()]).filter(([,v])=>v!==undefined));
      }else{
        let rows=[];const list=element('div');body.append(list);
        const mapChoices=key==='coordinates'?Object.keys(context.coordinates??{}):key==='joint_angles'?(context.joints??[]).map(j=>j.name):[];
        function add(k='',v){
          const row=element('div',{className:'api-map-item'});list.append(row);
          const name=element(mapChoices.length?'select':'input');if(!mapChoices.length)name.type='text';
          name.setAttribute('aria-label',title(key)+' key');
          for(const item of mapChoices)name.append(element('option',{value:item,textContent:title(item)}));
          name.value=k||mapChoices.find(n=>!rows.some(r=>r.name.value===n))||'';row.append(name);
          const holder=element('div');row.append(holder);let get;
          function draw(){holder.replaceChildren();let itemSchema=s.additionalProperties===true?{type:'string'}:s.additionalProperties;
            if(key==='coordinates'&&context.coordinates?.[name.value]){const c=context.coordinates[name.value];itemSchema={type:'number',minimum:c.minimum,maximum:c.maximum,description:c.rule};}
            get=field(holder,'value',itemSchema,v,path+'.'+name.value);}
          name.onchange=draw;draw();const item={row,name,get:()=>get()};rows.push(item);
          const remove=element('button',{type:'button',className:'button quiet',textContent:'Remove'});remove.onclick=()=>{rows=rows.filter(r=>r!==item);row.remove();};row.append(remove);
        }
        for(const [k,v]of Object.entries(value??{}))add(k,v);
        const button=element('button',{type:'button',className:'button quiet',textContent:'Add '+(key==='joint_angles'?'joint':key==='coordinates'?'coordinate':'entry')});button.onclick=()=>add();body.append(button);
        read=()=>{const names=rows.map(r=>r.name.value.trim());if(names.some(n=>!n)||new Set(names).size!==names.length)throw Error('Map keys must be nonempty and unique');return Object.fromEntries(rows.map(r=>[r.name.value.trim(),r.get()]));};
      }
    }else throw Error('Unsupported schema type: '+s.type);
    if(enabled){const set=()=>{body.hidden=!enabled.checked;};enabled.onchange=set;set();}
    return ()=>enabled&&!enabled.checked?undefined:read();
  }
  const get=field(host,'Arguments',schema,initial,'arguments');return {value:get};
}
