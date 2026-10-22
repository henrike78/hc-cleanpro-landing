(() => {
  'use strict';
  const texts = {
    es: {
      launch:'Ayuda y presupuesto', title:'Asistente de H&C', close:'Cerrar', language:'Idioma',
      intro:'Soy un asistente guiado con respuestas preparadas. Te ayudo a conocer nuestros servicios y preparar un presupuesto para H&C Clean Pro.',
      limit:'H&C Clean Pro confirmará el alcance, precio y disponibilidad. No se realiza ninguna reserva aquí.',
      services:['Comunidades y escaleras','Oficinas y pequeños negocios','Fin de obra y reformas'],
      details:['Limpieza de escaleras, rellanos, portales y zonas comunes según lo acordado.','Limpieza de puestos de trabajo, aseos y zonas comunes según lo acordado.','Limpieza tras reformas y obras. El alcance y los materiales requieren valoración previa.'],
      zone:'Trabajamos principalmente en Barcelona y alrededores. Otras zonas requieren confirmación.',
      ask:'Preparar solicitud', human:'Contactar con H&C Clean Pro', back:'Volver', area:'Municipio o barrio', size:'Superficie aproximada (opcional)', frequency:'Frecuencia', frequencies:['Por decidir','Una vez','Semanal','Quincenal','Mensual','Otra frecuencia'], date:'Fecha deseada (opcional, sin confirmar)', privacy:'No escribas nombres, direcciones exactas, teléfonos, datos sensibles ni códigos de acceso. Los datos de este asistente permanecen en esta página mientras está abierta; no se guardan ni se envían automáticamente.',
      review:'Revisar resumen', edit:'Editar', reset:'Empezar de nuevo', summary:'Revisa tu solicitud', send:'Abrir correo para H&C Clean Pro', delivery:'Esto abre tu aplicación de correo. Añade allí tus datos de contacto y envía el mensaje. La solicitud no se ha enviado desde esta web.', subject:'Solicitud de presupuesto H&C Clean Pro', consent:'Quiero abrir mi aplicación de correo con este resumen para solicitar un presupuesto.', unknown:'Sin indicar', body:'Hola H&C Clean Pro, me gustaría solicitar un presupuesto. Entiendo que precio, alcance y fecha están pendientes de confirmación.', service:'Servicio', copy:'Selecciona y copia el resumen si no se abre tu correo. También puedes escribir a hyccleanpro@gmail.com.'
    },
    ca: {
      launch:'Ajuda i pressupost', title:'Assistent d’H&C', close:'Tancar', language:'Idioma',
      intro:'Soc un assistent guiat amb respostes preparades. T’ajudo a conèixer els serveis i preparar una sol·licitud de pressupost per a H&C Clean Pro.',
      limit:'H&C Clean Pro confirmarà l’abast, el preu i la disponibilitat. Aquí no es fa cap reserva.',
      services:['Comunitats i escales','Oficines i petits negocis','Final d’obra i reformes'],
      details:['Neteja d’escales, replans, portals i zones comunes segons el que s’acordi.','Neteja de llocs de treball, lavabos i zones comunes segons el que s’acordi.','Neteja després de reformes i obres. L’abast i els materials requereixen valoració prèvia.'],
      zone:'Treballem principalment a Barcelona i rodalia. Cal confirmar les altres zones.',
      ask:'Preparar sol·licitud', human:'Contactar amb H&C Clean Pro', back:'Tornar', area:'Municipi o barri', size:'Superfície aproximada (opcional)', frequency:'Freqüència', frequencies:['Per decidir','Una vegada','Setmanal','Quinzenal','Mensual','Una altra freqüència'], date:'Data desitjada (opcional, sense confirmar)', privacy:'No escriguis noms, adreces exactes, telèfons, dades sensibles ni codis d’accés. Les dades d’aquest assistent romanen en aquesta pàgina mentre està oberta; no es desen ni s’envien automàticament.',
      review:'Revisar resum', edit:'Editar', reset:'Tornar a començar', summary:'Revisa la sol·licitud', send:'Obrir correu per a H&C Clean Pro', delivery:'S’obre la teva aplicació de correu. Afegeix-hi les dades de contacte i envia el missatge. La sol·licitud no s’ha enviat des d’aquesta web.', subject:'Sol·licitud de pressupost H&C Clean Pro', consent:'Vull obrir la meva aplicació de correu amb aquest resum per demanar un pressupost.', unknown:'Sense indicar', body:'Hola H&C Clean Pro, voldria demanar un pressupost. Entenc que el preu, l’abast i la data estan pendents de confirmació.', service:'Servei', copy:'Selecciona i copia el resum si no s’obre el correu. També pots escriure a hyccleanpro@gmail.com.'
    },
    en: {
      launch:'Help and quote', title:'H&C assistant', close:'Close', language:'Language',
      intro:'I am a guided assistant with prepared answers. I can explain our services and help you prepare a quote request for H&C Clean Pro.',
      limit:'H&C Clean Pro will confirm the scope, price and availability. No booking is made here.',
      services:['Communal areas and stairs','Offices and small businesses','After building work and renovations'],
      details:['Cleaning stairs, landings, entrances and communal areas as agreed.','Cleaning work areas, washrooms and shared spaces as agreed.','Cleaning after renovations and building work. Scope and materials require prior assessment.'],
      zone:'We mainly work in Barcelona and nearby areas. Other locations require confirmation.',
      ask:'Prepare request', human:'Contact H&C Clean Pro', back:'Back', area:'Town or neighbourhood', size:'Approximate floor area (optional)', frequency:'Frequency', frequencies:['To be decided','Once','Weekly','Fortnightly','Monthly','Other frequency'], date:'Preferred date (optional, unconfirmed)', privacy:'Do not enter names, exact addresses, phone numbers, sensitive information or access codes. Information in this assistant stays on this page while it is open; it is not stored or sent automatically.',
      review:'Review summary', edit:'Edit', reset:'Start again', summary:'Review your request', send:'Open email to H&C Clean Pro', delivery:'This opens your email app. Add your contact details there and send the message. This website has not sent your request.', subject:'H&C Clean Pro quote request', consent:'I want to open my email app with this summary to request a quote.', unknown:'Not specified', body:'Hello H&C Clean Pro, I would like a quote. I understand that the price, scope and date need confirmation.', service:'Service', copy:'Select and copy the summary if your email app does not open. You can also email hyccleanpro@gmail.com.'
    }
  };
  Object.assign(texts.es, {
    send:'Enviar solicitud', name:'Nombre', email:'Correo electrónico', sending:'Enviando…',
    delivery:'Revisa el resumen y añade tu nombre y correo para recibir respuesta. Envía tu solicitud aquí mismo, sin abrir tu aplicación de correo.',
    provider:'Al enviar, Formspree recibirá tu nombre, correo y resumen para trasladar la solicitud a H&C Clean Pro. No incluyas datos sensibles ni códigos de acceso.',
    success:'Formspree ha recibido tu solicitud para H&C Clean Pro. El precio y la disponibilidad siguen pendientes de confirmación.',
    error:'No hemos podido confirmar el envío. Tus datos siguen aquí. Puedes reintentarlo o escribir a hyccleanpro@gmail.com. Si el envío anterior llegó, reintentarlo podría duplicarlo.'
  });
  Object.assign(texts.ca, {
    send:'Enviar sol·licitud', name:'Nom', email:'Correu electrònic', sending:'Enviant…',
    delivery:'Revisa el resum i afegeix el nom i el correu per rebre resposta. Envia la sol·licitud aquí mateix, sense obrir l’aplicació de correu.',
    provider:'En enviar, Formspree rebrà el nom, el correu i el resum per traslladar la sol·licitud a H&C Clean Pro. No incloguis dades sensibles ni codis d’accés.',
    success:'Formspree ha rebut la sol·licitud per a H&C Clean Pro. El preu i la disponibilitat continuen pendents de confirmació.',
    error:'No hem pogut confirmar l’enviament. Les dades continuen aquí. Pots tornar-ho a provar o escriure a hyccleanpro@gmail.com. Si l’enviament anterior ha arribat, repetir-lo podria duplicar-lo.'
  });
  Object.assign(texts.en, {
    send:'Send request', name:'Name', email:'Email address', sending:'Sending…',
    delivery:'Review your summary and add your name and email so we can reply. Send your request here without opening your email app.',
    provider:'When you send, Formspree receives your name, email and summary to forward your request to H&C Clean Pro. Do not include sensitive information or access codes.',
    success:'Formspree has received your request for H&C Clean Pro. Price and availability still need confirmation.',
    error:'We could not confirm your submission. Your details are still here. Retry or email hyccleanpro@gmail.com. If the previous submission arrived, retrying may create a duplicate.'
  });
  let lang = /^ca/i.test(navigator.language) ? 'ca' : /^en/i.test(navigator.language) ? 'en' : 'es';
  let step = 'home', service = 0;
  const values = {area:'',size:'',frequency:'0',date:''};
  const contactValues = {name:'',email:''};
  let sending = false;
  const endpoint = 'https://formspree.io/f/mrppzyqp';
  const root = document.createElement('aside');
  root.id = 'hc-helper';
  root.innerHTML = '<section class="hc-panel" hidden role="region" aria-labelledby="hc-title"><div class="hc-top"><h2 id="hc-title"></h2><button type="button" data-close></button></div><label for="hc-language"></label><select id="hc-language"><option value="es">Español</option><option value="ca">Català</option><option value="en">English</option></select><div data-content></div></section><button type="button" class="hc-launch" aria-expanded="false" aria-controls="hc-content-panel"></button>';
  document.body.append(root);
  const panel = root.querySelector('.hc-panel');
  panel.id = 'hc-content-panel';
  const launcher = root.querySelector('.hc-launch');
  const content = root.querySelector('[data-content]');
  const selector = root.querySelector('select');
  function el(tag,text,className) { const n=document.createElement(tag); if(text)n.textContent=text; if(className)n.className=className; return n; }
  function button(label,action,primary=false) { const b=el('button',label,primary?'hc-primary':''); b.type='button'; b.addEventListener('click',action); return b; }
  function navigate(next) { step=next; render(); content.querySelector('input,button,a')?.focus(); }
  function summary() { const t=texts[lang]; return `${t.body}\n\n${t.service}: ${t.services[service]}\n${t.area}: ${values.area || t.unknown}\n${t.size}: ${values.size || t.unknown}\n${t.frequency}: ${t.frequencies[Number(values.frequency)]}\n${t.date}: ${values.date || t.unknown}`; }
  function render() {
    const t=texts[lang]; root.lang=lang; selector.value=lang;
    root.querySelector('h2').textContent=t.title;
    root.querySelector('[data-close]').textContent=t.close;
    root.querySelector('label').textContent=t.language;
    launcher.textContent=t.launch;
    content.replaceChildren();
    content.append(el('p',t.limit,'hc-note'));
    if(step==='home') {
      content.append(el('p',t.intro));
      const options=el('div',null,'hc-options');
      t.services.forEach((name,i)=>options.append(button(name,()=>{service=i;navigate('service');})));
      content.append(options,el('p',t.zone,'hc-note'));
    } else if(step==='service') {
      content.append(el('p',t.services[service]),el('p',t.details[service]),el('p',t.zone),button(t.ask,()=>navigate('form'),true),button(t.back,()=>navigate('home')));
    } else if(step==='form') {
      content.append(el('p',t.services[service]),el('p',t.privacy,'hc-note'));
      const form=el('form');
      ['area','size','frequency','date'].forEach(key=>{
        const id='hc-'+key; const label=el('label',t[key]);label.htmlFor=id;
        const input=el(key==='frequency'?'select':'input');input.id=id;input.name=key;
        if(key==='frequency') t.frequencies.forEach((name,i)=>{const o=el('option',name);o.value=String(i);input.append(o);});
        else {input.type='text';input.maxLength=key==='area'?80:50; input.autocomplete='off';}
        input.value=values[key]; input.required=key==='area';
        input.addEventListener('input',()=>{values[key]=input.value;});
        input.addEventListener('change',()=>{values[key]=input.value;});
        form.append(label,input);
      });
      const submit=el('button',t.review,'hc-primary');submit.type='submit';form.append(el('p'),submit);
      form.addEventListener('submit',event=>{event.preventDefault(); values.area=values.area.trim(); if(!values.area){form.querySelector('input').focus();return;}navigate('summary');});
      content.append(form,button(t.back,()=>navigate('service')));
    } else if(step==='sent') {
      const success=el('p',t.success);success.setAttribute('role','status');
      success.tabIndex=-1;
      content.append(success,button(t.reset,()=>navigate('home'),true));
      success.focus();
    } else {
      content.append(el('p',t.summary),el('div',summary(),'hc-summary'),el('p',t.delivery,'hc-note'));
      const form=el('form');
      ['name','email'].forEach(key=>{
        const label=el('label',t[key]);label.htmlFor='hc-contact-'+key;
        const input=el('input');input.id=label.htmlFor;input.name=key;
        input.type=key==='email'?'email':'text';input.autocomplete=key==='email'?'email':'given-name';
        input.maxLength=key==='email'?254:80;input.required=true;input.value=contactValues[key];
        input.addEventListener('input',()=>{contactValues[key]=input.value;});
        form.append(label,input);
      });
      const status=el('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
      const send=el('button',t.send,'hc-primary');send.type='submit';
      form.append(el('p',t.provider,'hc-note'),send,status);
      const edit=button(t.edit,()=>navigate('form'));
      const reset=button(t.reset,()=>{Object.keys(values).forEach(k=>values[k]=k==='frequency'?'0':'');contactValues.name='';contactValues.email='';navigate('home');});
      form.addEventListener('submit',async event=>{
        event.preventDefault();
        if(sending || !form.reportValidity()) return;
        const fields=form.querySelectorAll('input');
        fields.forEach(input=>{contactValues[input.name]=input.value.trim();input.value=contactValues[input.name];});
        if(!form.reportValidity()) return;
        sending=true;selector.disabled=true;send.disabled=true;edit.disabled=true;reset.disabled=true;
        fields.forEach(input=>input.readOnly=true);
        send.textContent=t.sending;status.textContent=t.sending;form.setAttribute('aria-busy','true');
        const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),20000);
        try {
          const response=await fetch(endpoint,{
            method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},
            body:JSON.stringify({name:contactValues.name,email:contactValues.email,message:summary(),_subject:t.subject}),
            signal:controller.signal
          });
          const result=await response.json();
          if(!response.ok || result.ok!==true) throw new Error('Submission failed');
          Object.keys(values).forEach(k=>values[k]=k==='frequency'?'0':'');
          contactValues.name='';contactValues.email='';
          step='sent';render();
        } catch {
          status.textContent=t.error;
        } finally {
          clearTimeout(timer);sending=false;selector.disabled=false;send.disabled=false;edit.disabled=false;reset.disabled=false;
          fields.forEach(input=>input.readOnly=false);
          send.textContent=t.send;form.removeAttribute('aria-busy');
        }
      });
      content.append(form,edit,reset);
    }
    const contact=el('a',t.human);contact.href='mailto:hyccleanpro@gmail.com';content.append(el('p'),contact);
  }
  function close() {panel.hidden=true;launcher.setAttribute('aria-expanded','false');launcher.focus();}
  launcher.addEventListener('click',()=>{if(!panel.hidden){close();return;}panel.hidden=false;launcher.setAttribute('aria-expanded','true');root.querySelector('[data-close]').focus();});
  root.querySelector('[data-close]').addEventListener('click',close);
  root.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden)close();});
  selector.addEventListener('change',()=>{lang=selector.value;render();});
  render();
})();
