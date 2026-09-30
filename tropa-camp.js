/* Campamento de Tropa · checklist autónomo por Scout y Patrulla. */
(function () {
  const ORDER = ['Equipo personal','Documentos de salida Scout','Campamento y construcciones','Cocina de patrulla','Seguridad, higiene y organización'];
  const CATEGORY = {
    'Equipo personal': {number:'01',icon:'🎒',label:'Mi responsabilidad',description:'Cada Scout revisa, prueba, organiza y carga su propio equipo.'},
    'Documentos de salida Scout': {number:'02',icon:'📋',label:'Antes de participar',description:'Confirma con tu familia y tus Scouters que los formatos oficiales fueron entregados y recibidos.'},
    'Campamento y construcciones': {number:'03',icon:'⛺',label:'Equipo de Patrulla',description:'Distribuyan refugios, piezas y material según el programa; nada viaja sin una función y una persona responsable.'},
    'Cocina de patrulla': {number:'04',icon:'🍲',label:'Menú y agua',description:'El menú define recipientes, combustible, agua, conservación y limpieza.'},
    'Seguridad, higiene y organización': {number:'05',icon:'🧰',label:'Preparados para responder',description:'Revisen orientación, botiquín, iluminación, higiene, residuos y control de participantes.'}
  };
  const ITEM_ICONS = {
    'sc-estufa':'🔥','sc-gas':'⛽','sc-ollas':'🍲','sc-utensilios':'🍴','sc-agua-cocina':'💧','sc-despensa':'🥫','sc-lavado':'🧽',
    'sc-tienda':'⛺','sc-lona':'🏕️','sc-estacas':'📌','sc-bordones':'🪵','sc-cuerdas':'🪢','sc-banderin':'🚩','sc-actividades':'🎯',
    'sc-botiquin':'🧰','sc-frontal':'🔦','sc-higiene':'🧼','sc-residuos':'♻️','sc-mapa':'🗺️','sc-lista':'👥',
    'sc-ficha-salud':'🩺','sc-autorizacion':'✍️','sc-mochila-campamento':'🎒','sc-bazar':'✅','sc-descanso':'🛏️','sc-ropa':'🧥','sc-vajilla':'🍽️','sc-agua-personal':'🚰','sc-mochila-personal':'🎒'
  };
  const VIDEOS = {
    'sc-descanso': ['CIrwbFW72fk','Cómo elegir tu sleeping bag o bolsa de dormir'],
    'sc-tienda': ['JdF0FJ0bi0s','Reparación de postes de tienda o casa de campaña'],
    'sc-lona': ['klq_hwdJd4c','Cómo reimpermeabilizar una tienda de campaña']
  };
  const VIDEO_TITLES = {
    'sc-estufa':'Cómo revisar y usar una estufa de Patrulla','sc-gas':'Cómo calcular y transportar el combustible','sc-ollas':'Cómo elegir ollas según el menú y la Patrulla','sc-utensilios':'Cómo organizar utensilios y filos para el traslado','sc-agua-cocina':'Cómo separar el agua potable y las aguas usadas','sc-despensa':'Cómo dividir el menú y las raciones por día','sc-lavado':'Cómo lavar y disponer aguas usadas en campamento',
    'sc-estacas':'Cómo revisar estacas, vientos y tensores','sc-bordones':'Cómo seleccionar bordones para una construcción','sc-cuerdas':'Cómo preparar las cuerdas y evitar riesgos de paso','sc-banderin':'Cómo transportar e instalar el banderín de Patrulla','sc-actividades':'Cómo inventariar el material del programa',
    'sc-botiquin':'Cómo revisar el botiquín de Patrulla','sc-frontal':'Cómo revisar una linterna frontal y sus baterías','sc-higiene':'Cómo preparar la higiene personal para campamento','sc-residuos':'Cómo organizar residuos y restos de comida','sc-mapa':'Cómo preparar mapa, itinerario y contactos','sc-lista':'Cómo comprobar participantes y permisos',
    'sc-ficha-salud':'Qué revisar antes de entregar la ficha de salud Scout','sc-autorizacion':'Qué revisar en la autorización de salida Scout','sc-mochila-campamento':'Cómo elegir, ajustar y cargar la mochila de campamento','sc-bazar':'Cómo hacer el bazar personal antes y después','sc-ropa':'Cómo organizar ropa por capas y un cambio seco','sc-vajilla':'Cómo identificar, lavar y guardar la vajilla personal','sc-agua-personal':'Cómo calcular y revisar el agua personal','sc-mochila-personal':'Cómo preparar una mochila de día'
  };

  function groups() {
    return ORDER.map(name => [name, (SCOUT_EQUIPMENT.find(([group]) => group === name) || [name,[]])[1]]);
  }
  function allItems() { return groups().flatMap(([,items]) => items); }
  function stats(items) {
    const active=items.filter(item => itemState(item[0]).status !== 'na');
    return {done:active.filter(item => itemState(item[0]).status === 'packed').length,total:active.length,na:items.length-active.length};
  }
  function progress(items,label) {
    const value=stats(items);
    return `<div class="tropa-camp-progress"><div><strong>${value.done} de ${value.total}</strong><span>${label}</span></div><progress value="${value.done}" max="${value.total || 1}" aria-label="${esc(label)}"></progress></div>`;
  }
  function video(item) {
    const published=VIDEOS[item[0]];
    if (published) return `<a class="tropa-camp-video is-published" href="https://youtu.be/${published[0]}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span><div><small>Video disponible · Acampando en Familia</small><strong>${esc(published[1])}</strong><p>Abrir el video en YouTube.</p></div><b aria-hidden="true">↗</b></a>`;
    const title=VIDEO_TITLES[item[0]] || `Cómo preparar ${item[1].toLocaleLowerCase('es')}`;
    return `<div class="tropa-camp-video"><span aria-hidden="true">▶</span><div><small>Video tutorial · Próximamente</small><strong>${esc(title)}</strong><p>Cuando publiquemos este tutorial podrás verlo aquí, sin salir de la guía.</p></div></div>`;
  }
  function itemCard(item) {
    const state=itemState(item[0]),done=state.status==='packed',omitted=state.status==='na',scope=item[3]==='persona'?'Personal':'Patrulla';
    return `<article class="tropa-camp-item ${done?'is-done':''} ${omitted?'is-omitted':''}" data-tropa-camp-card="${item[0]}">
      <label class="tropa-camp-check"><input type="checkbox" data-tropa-camp-check="${item[0]}" ${done?'checked':''} ${omitted?'disabled':''}><span class="tropa-camp-box" aria-hidden="true">${done?'✓':''}</span><span class="tropa-camp-icon" aria-hidden="true">${ITEM_ICONS[item[0]] || '✓'}</span><span><strong>${esc(item[1])}</strong><small>${omitted?'No se necesita en esta salida':done?'Listo y comprobado':`${scope} · ${item[2]}`}</small></span></label>
      <details class="tropa-camp-help"><summary>Información, responsabilidad y video</summary><div class="tropa-camp-help-body"><section><h3>¿Para qué sirve?</h3><p>${esc(item[4])}</p><h3>¿Cómo prepararlo?</h3><p>${esc(item[5])}</p><h3>Antes de marcarlo</h3><p>${esc(item[6])}</p></section>${video(item)}<div class="tropa-camp-assignment"><label class="field">${item[3]==='persona'?'Quién lo revisó':'Responsable de llevarlo'}<input data-tropa-camp-owner="${item[0]}" maxlength="80" value="${esc(state.owner||'')}" placeholder="Nombre o cargo de Patrulla"></label><label class="field">Nota breve<textarea data-tropa-camp-note="${item[0]}" placeholder="Cantidad, ubicación, condición o pendiente…">${esc(state.note||'')}</textarea></label></div><button class="text-button" type="button" data-tropa-camp-na="${item[0]}">${omitted?'Incluirlo nuevamente':'No se necesita en esta salida'}</button></div></details>
    </article>`;
  }
  function dataForm() {
    const t=trip();
    const input=(key,label,type='text')=>`<label class="field">${label}<input data-tropa-camp-field="${key}" type="${type}" value="${esc(t[key]||'')}"></label>`;
    return `<section class="panel tropa-camp-data"><div><p class="eyebrow">Datos del campamento</p><h2>Identifiquen la salida</h2><p>Solo se guardan en este navegador y pueden modificarse en cualquier momento.</p></div><div class="tropa-camp-fields">${input('name','Nombre del campamento')}${input('familyName','Tropa')}${input('patrolName','Patrulla')}${input('groupNumber','Grupo Scout')}${input('destination','Lugar del campamento')}${input('start','Salida','date')}${input('end','Regreso','date')}</div></section>`;
  }
  function categorySection(name,items) {
    const cfg=CATEGORY[name];
    return `<section class="panel tropa-camp-category" id="tropa-camp-${cfg.number}"><header><span>${cfg.number}</span><b aria-hidden="true">${cfg.icon}</b><div><p class="eyebrow">${cfg.label}</p><h2>${name}</h2><p>${cfg.description}</p></div>${progress(items,'comprobados')}</header><div class="tropa-camp-list">${items.map(itemCard).join('')}</div></section>`;
  }
  function completion(items) {
    const value=stats(items); if (!value.total || value.done!==value.total) return '';
    return `<section class="tropa-camp-complete" role="status" aria-live="polite"><span aria-hidden="true">⚜</span><div><p class="eyebrow">Siempre listo</p><h2>¡El checklist está completo!</h2><p>Comparte la revisión con tu Guía de Patrulla y tus Scouters. Confirmen juntos responsables, documentos y cualquier cambio antes de salir.</p><a class="primary" href="#scout/tropa/aventuras">Continuar con mis progresiones →</a></div></section>`;
  }
  function bind(items) {
    document.querySelectorAll('[data-tropa-camp-field]').forEach(input => input.onchange=input.oninput=()=>{trip()[input.dataset.tropaCampField]=input.value;save();});
    document.querySelectorAll('[data-tropa-camp-check]').forEach(input => input.onchange=()=>{const id=input.dataset.tropaCampCheck;trip().items[id]={...itemState(id),status:input.checked?'packed':'pending'};save();tropaCampPage();});
    document.querySelectorAll('[data-tropa-camp-na]').forEach(button => button.onclick=()=>{const id=button.dataset.tropaCampNa;trip().items[id]={...itemState(id),status:itemState(id).status==='na'?'pending':'na'};save();tropaCampPage();});
    document.querySelectorAll('[data-tropa-camp-owner]').forEach(input => input.oninput=()=>{const id=input.dataset.tropaCampOwner;trip().items[id]={...itemState(id),owner:input.value};save();});
    document.querySelectorAll('[data-tropa-camp-note]').forEach(input => input.oninput=()=>{const id=input.dataset.tropaCampNote;trip().items[id]={...itemState(id),note:input.value};save();});
    document.querySelectorAll('[data-tropa-camp-jump]').forEach(link => link.onclick=event=>{event.preventDefault();document.getElementById(link.dataset.tropaCampJump)?.scrollIntoView({behavior:'smooth',block:'start'});});
    document.querySelector('#tropa-camp-reset')?.addEventListener('click',()=>{
      modal(`<h2>¿Preparar la lista para un nuevo campamento?</h2><p>Los artículos comprobados volverán a pendientes. Se conservarán responsables, notas y artículos marcados como “No se necesita”.</p><div class="actions"><button class="secondary" id="cancel-tropa-reset">Cancelar</button><button class="primary" id="confirm-tropa-reset">Reiniciar lista</button></div>`);
      document.querySelector('#cancel-tropa-reset').onclick=()=>dialog.close();
      document.querySelector('#confirm-tropa-reset').onclick=()=>{items.forEach(item=>{if(itemState(item[0]).status==='packed')trip().items[item[0]]={...itemState(item[0]),status:'pending'};});save();dialog.close();tropaCampPage();toast('Lista preparada para un nuevo campamento');};
    });
    document.querySelector('#print-tropa-camp')?.addEventListener('click',()=>window.print());
  }

  window.tropaCampPage = function () {
    switchMode('tropa');
    const grouped=groups(),items=allItems(),value=stats(items);
    app.innerHTML=`<div class="shell tropa-camp-shell"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><span class="save-state">Guardado en este navegador</span><a class="secondary menu-back" href="#scout">Zona Scout</a></header><main id="main" class="container tropa-camp-container">
      <section class="tropa-camp-hero"><div><a href="#scout">← Volver a Zona Scout</a><p class="eyebrow">Scout · Campamento de Tropa</p><h1>Prepara tu campamento</h1><p>Cada Scout revisa su equipo personal. La Patrulla reparte el material compartido, asigna responsables y comprueba que todo tenga una función antes de salir.</p><div class="pills"><span class="pill">Autonomía personal</span><span class="pill">Responsabilidad de Patrulla</span><span class="pill">Información y video por artículo</span></div></div><figure><img src="assets/interior-tropa.jpeg" alt="Scouts con sus mochilas listas para una salida"><figcaption>Siempre listos para la próxima aventura</figcaption></figure></section>
      <aside class="tropa-camp-rule"><span aria-hidden="true">⚜</span><div><p class="eyebrow">Regla de preparación</p><h2>Cada artículo tiene función, ubicación y responsable</h2><p>Marca un elemento solo después de revisarlo. Si es de Patrulla, anota quién lo lleva; si es personal, cada Scout comprueba el suyo. Nada compartido debe depender de que “alguien más” lo haya empacado.</p></div></aside>
      ${dataForm()}
      <section class="panel tropa-camp-current-video"><div><p class="eyebrow">Video disponible · Acampando en Familia</p><h2>Armado de mochila para campamento</h2><p>Úsalo como vista general. Los tutoriales específicos aparecen dentro de cada elemento; donde todavía no existe un video verás “Próximamente”.</p><a href="https://youtu.be/HxDVdis9f7E" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div><div><iframe src="https://www.youtube-nocookie.com/embed/HxDVdis9f7E" title="Armado de mochila para campamento" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div></section>
      <section class="tropa-camp-overview"><div><p class="eyebrow">Revisión de la salida</p><h2>Trabajen módulo por módulo</h2><p>Abre “Información, responsabilidad y video” para consultar criterios, asignar quién lo lleva y dejar una nota.</p></div>${progress(items,'elementos comprobados')}<button class="secondary" id="tropa-camp-reset" type="button">Preparar un nuevo campamento</button></section>
      <nav class="tropa-camp-index" aria-label="Módulos del checklist">${grouped.map(([name])=>{const cfg=CATEGORY[name];return `<a href="#tropa-camp-${cfg.number}" data-tropa-camp-jump="tropa-camp-${cfg.number}"><span>${cfg.number}</span><b aria-hidden="true">${cfg.icon}</b><strong>${name}</strong></a>`;}).join('')}</nav>
      <section class="tropa-camp-categories">${grouped.map(([name,categoryItems])=>categorySection(name,categoryItems)).join('')}</section>
      ${completion(items)}
      <section class="panel tropa-camp-final"><div><p class="eyebrow">Consejo de Patrulla</p><h2>Última comprobación</h2></div><ol><li>Cada Scout reconoce, carga y puede encontrar su equipo personal.</li><li>Cada artículo de Patrulla tiene responsable y ubicación.</li><li>El menú coincide con alimentos, agua, ollas y combustible.</li><li>Tiendas, lonas, estacas, herramientas y botiquín fueron probados o revisados.</li><li>La ficha de salud y la autorización son los formatos oficiales entregados por la dirigencia.</li><li>La Patrulla conoce lugar, horarios, pronóstico, punto de reunión y plan de emergencia.</li></ol><button class="primary" id="print-tropa-camp" type="button">Imprimir esta lista</button></section>
      <section class="panel tropa-camp-link"><div><p class="eyebrow">Aventuras en la Naturaleza</p><h2>El campamento también es una oportunidad de progresión</h2><p>Registra las habilidades que practicaste y prepara la conversación con tus Scouters.</p></div><a class="secondary" href="#scout/tropa/aventuras">Abrir mi ruta de territorios →</a></section>
    </main></div>`;
    app.insertAdjacentHTML('beforeend',contactFooter());
    bind(items);
  };
})();
