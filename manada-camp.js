/* Herramientas de Manada: hábitos sencillos para niñas y niños, con ayuda desplegable para familias. */
(function () {
  const TOOL_CONFIG = {
    bolsillo: {
      group: 'Equipo de bolsillo · cangurera',
      title: 'Equipo de bolsillo',
      eyebrow: 'Para cada salida · Cangurera',
      description: 'Una revisión rápida para comprobar que la cangurera está completa antes de excursiones, reuniones y campamentos.',
      image: 'assets/manada-cangurera.png',
      alt: 'Cangurera con el equipo de bolsillo ordenado',
      videoTitle: 'Cómo preparar y revisar el equipo de bolsillo',
      childPrompt: 'Toca cada casilla cuando el artículo ya esté dentro de tu cangurera.',
      autonomyChecks: [
        'Puedo decir qué llevo y para qué sirve.',
        'Sé encontrar mis paliacates, mi piola y mi libreta.',
        'Puedo cerrar y colocarme la cangurera sin ayuda.',
        'La cangurera queda cómoda y mis manos quedan libres.'
      ]
    },
    ataque: {
      group: 'Mochila de ataque',
      title: 'Mochila de ataque',
      eyebrow: 'Para cada salida · Mochila de 15 a 20 litros',
      description: 'Lo necesario para una actividad, excursión o recorrido corto, dentro de una mochila que cierre sin quedar apretada y que el Lobato pueda usar sin ayuda.',
      image: 'assets/manada-mochila-ataque.png',
      alt: 'Mochila de ataque pequeña con agua, abrigo e impermeable',
      videoTitle: 'Cómo revisar una mochila de ataque antes de salir',
      childPrompt: 'Marca únicamente lo que ya revisaste y guardaste dentro de tu mochila.',
      autonomyChecks: [
        'Puedo decir qué llevo y para qué sirve.',
        'Sé encontrar el agua, el impermeable, la gorra y el abrigo.',
        'Puedo cerrar y ponerme la mochila sin ayuda.',
        'La mochila queda cómoda y mis manos quedan libres.'
      ]
    }
  };

  const ITEM_ART = {
    'mn-paliacates': 'paliacates', 'mn-piola': 'piola', 'mn-escritura': 'escritura',
    'mn-costurero': 'costurero', 'mn-credencial': 'credencial', 'mn-dinero': 'dinero',
    'mn-agenda': 'agenda', 'mn-mochila-ataque': 'mochila-ataque', 'mn-snack': 'snack', 'mn-agua': 'agua', 'mn-sol': 'sol', 'mn-gorra': 'gorra',
    'mn-impermeable': 'impermeable', 'mn-sueter': 'sueter', 'mn-frontal': 'frontal',
    'mn-salud': 'salud', 'mn-autorizacion': 'autorizacion',
    'mn-carga': 'carga', 'mn-uniforme': 'uniforme', 'mn-marcado': 'marcado', 'mn-bazar': 'bazar',
    'mn-mochila-propia': 'mochila-campamento', 'mn-fondo': 'liner', 'mn-bolsas': 'bolsas',
    'mn-aislante': 'aislante', 'mn-dormir': 'sleeping', 'mn-pijama': 'pijama', 'mn-cobija': 'cobija',
    'mn-ropa': 'ropa', 'mn-calzado-seco': 'calzado', 'mn-frio': 'abrigo', 'mn-aseo': 'aseo',
    'mn-vajilla': 'vajilla', 'mn-bolsa-extra': 'bolsa-extra'
  };

  const ITEM_VIDEO_TITLES = {
    'mn-mochila-propia': 'Cómo elegir y ajustar una mochila de campamento infantil',
    'mn-fondo': 'Cómo colocar una bolsa protectora dentro de la mochila',
    'mn-bolsas': 'Cómo organizar el equipo en bolsas por categoría',
    'mn-aislante': 'Cómo elegir, enrollar y guardar el aislante térmico',
    'mn-dormir': 'Cómo elegir y guardar el sleeping bag',
    'mn-pijama': 'Cómo proteger la ropa reservada para dormir',
    'mn-cobija': 'Cuándo llevar una cobija adicional',
    'mn-ropa': 'Cómo preparar los cambios completos de ropa',
    'mn-calzado-seco': 'Cómo elegir y empacar el calzado extra',
    'mn-frio': 'Cómo organizar el abrigo para clima frío',
    'mn-aseo': 'Cómo preparar el kit de aseo personal',
    'mn-frontal': 'Cómo revisar y guardar la linterna frontal',
    'mn-vajilla': 'Cómo preparar, lavar y guardar la vajilla',
    'mn-bolsa-extra': 'Cómo separar residuos y ropa húmeda',
    'mn-carga': 'Cómo comprobar la carga y dejar las manos libres',
    'mn-uniforme': 'Cómo revisar el uniforme antes de salir',
    'mn-marcado': 'Cómo marcar el equipo con el nombre de Manada',
    'mn-bazar': 'Cómo hacer el bazar personal antes y después',
    'mn-salud': 'Cómo revisar y entregar la ficha de salud Scout',
    'mn-autorizacion': 'Cómo completar la autorización de salida Scout'
  };

  function groupByName(name) {
    return MANADA_EQUIPMENT.find(([group]) => group === name)?.[1] || [];
  }

  function quickItems(kind) {
    const cfg = TOOL_CONFIG[kind], items = [...groupByName(cfg.group)];
    if (kind === 'ataque') {
      const health = groupByName('Documentos de salida Scout').find(item => item[0] === 'mn-salud');
      if (health) items.push(health);
    }
    return items;
  }

  function itemStats(items) {
    const active = items.filter(item => itemState(item[0]).status !== 'na');
    return { done: active.filter(item => itemState(item[0]).status === 'packed').length, total: active.length };
  }

  function shell(content, pageClass = '') {
    const isHome = pageClass.includes('manada-home-page');
    const backHref = isHome ? '#scout' : '#scout/manada';
    const backLabel = isHome ? 'Zona Scout' : 'Menú de Manada';
    app.innerHTML = `<div class="shell manada-tools-shell ${pageClass}"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><span class="save-state">Guardado en este navegador</span><a class="secondary menu-back" href="${backHref}">${backLabel}</a></header><main id="main" class="container manada-tools-container">${content}</main></div>`;
    app.insertAdjacentHTML('beforeend', contactFooter());
  }

  function progressMarkup(items, label) {
    const st = itemStats(items);
    return `<div class="manada-tool-progress"><div><strong>${st.done} de ${st.total}</strong><span>${label}</span></div><progress value="${st.done}" max="${st.total || 1}" aria-label="${esc(label)}"></progress></div>`;
  }

  function completionMarkup(items, image, alt) {
    const st = itemStats(items);
    if (!st.total || st.done !== st.total) return '';
    const manada = String(trip().familyName || '').trim();
    return `<section class="manada-complete" role="status" aria-live="polite"><div class="manada-complete-burst" aria-hidden="true">★</div><img src="${image}" alt="${esc(alt)}"><div><p class="eyebrow">${manada ? `¡Muy bien, ${esc(manada)}!` : '¡Muy bien!'}</p><h2>¡Checklist completo!</h2><p>Avisa a tus padres que estás listo para la cacería. Si lo necesitas, continúa revisando tu demás equipo.</p><a class="primary" href="#scout/manada">Revisar mi demás equipo →</a></div></section>`;
  }

  function plannedVideo(title) {
    return `<section class="manada-planned-video" aria-label="Video planeado"><span aria-hidden="true">▶</span><div><small>Video tutorial planeado</small><strong>${esc(title)}</strong><p>Cuando publiquemos este tutorial aparecerá aquí para verlo sin salir de la página.</p></div></section>`;
  }

  function itemVideoMarkup(item) {
    const title = ITEM_VIDEO_TITLES[item[0]] || `Cómo preparar ${item[1].toLowerCase()}`;
    return `<div class="manada-item-video" aria-label="Video tutorial próximamente"><span aria-hidden="true">▶</span><div><small>Video tutorial · Próximamente</small><strong>${esc(title)}</strong><p>Cuando publiquemos este video podrás verlo aquí, sin salir de esta guía.</p></div></div>`;
  }

  function markingNotice() {
    return `<aside class="manada-marking-notice"><span aria-hidden="true">✎</span><div><strong>Todo el equipo debe llevar el nombre de Manada</strong><p>Cada niño adopta un nombre de Manada al integrarse. Madres, padres o tutores pueden escribir ese nombre con plumón indeleble o colocar una etiqueta resistente y bien fijada.</p></div></aside>`;
  }

  function currentVideo() {
    const id = 'HxDVdis9f7E';
    return `<section class="panel manada-current-video"><div><p class="eyebrow">Video disponible · Acampando en Familia</p><h2>Cómo armar la mochila de campamento para Manada</h2><p>Este es el video completo que actualmente reúne el proceso. Los tutoriales cortos se integrarán en cada bloque conforme se publiquen.</p><a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div><div class="manada-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Cómo armar la mochila de campamento para Manada" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div></section>`;
  }

  function checklistMarkup(items) {
    return `<div class="manada-child-list">${items.map(item => {
      const state = itemState(item[0]), done = state.status === 'packed', omitted = state.status === 'na';
      const icon = ITEM_ART[item[0]] ? `<img class="manada-item-art" src="assets/manada-item-icons/${ITEM_ART[item[0]]}.png" alt="" aria-hidden="true">` : '';
      return `<article class="manada-child-item ${icon ? 'has-item-art' : ''} ${done ? 'is-done' : ''} ${omitted ? 'is-omitted' : ''}"><label class="manada-child-check"><input type="checkbox" data-manada-check="${item[0]}" ${done ? 'checked' : ''} ${omitted ? 'disabled' : ''}><span class="manada-check-box" aria-hidden="true">${done ? '✓' : ''}</span>${icon}<span><strong>${esc(item[1])}</strong><small>${omitted ? 'No se necesita en esta salida' : done ? 'Listo y guardado' : item[2]}</small></span></label><details class="manada-parent-help"><summary>Información y video</summary><div><h3>¿Para qué sirve?</h3><p>${esc(item[4])}</p><h3>¿Cómo prepararlo?</h3><p>${esc(item[5])}</p><h3>Antes de marcarlo</h3><p>${esc(item[6])}</p>${itemVideoMarkup(item)}<button class="text-button" type="button" data-manada-na="${item[0]}">${omitted ? 'Incluirlo nuevamente' : 'No se necesita en esta salida'}</button></div></details></article>`;
    }).join('')}</div>`;
  }

  function setStatus(id, status, rerender) {
    trip().items[id] = { ...itemState(id), status };
    save();
    rerender();
  }

  function bindChecklist(items, rerender) {
    const ids = new Set(items.map(item => item[0]));
    document.querySelectorAll('[data-manada-check]').forEach(input => input.onchange = () => {
      if (!ids.has(input.dataset.manadaCheck)) return;
      setStatus(input.dataset.manadaCheck, input.checked ? 'packed' : 'pending', rerender);
    });
    document.querySelectorAll('[data-manada-na]').forEach(button => button.onclick = () => {
      if (!ids.has(button.dataset.manadaNa)) return;
      const next = itemState(button.dataset.manadaNa).status === 'na' ? 'pending' : 'na';
      setStatus(button.dataset.manadaNa, next, rerender);
    });
  }

  function bindReset(items, rerender) {
    const button = document.querySelector('[data-manada-reset]');
    if (!button) return;
    button.onclick = () => {
      modal(`<h2>¿Preparar esta lista para una nueva salida?</h2><p>Todos los artículos de esta sección volverán a pendientes para que el Lobato o Lobezna los revise nuevamente.</p><div class="actions"><button class="secondary" id="cancel-manada-reset">Cancelar</button><button class="primary" id="confirm-manada-reset">Reiniciar lista</button></div>`);
      document.querySelector('#cancel-manada-reset').onclick = () => dialog.close();
      document.querySelector('#confirm-manada-reset').onclick = () => {
        items.forEach(item => { trip().items[item[0]] = { ...itemState(item[0]), status: 'pending' }; });
        save(); dialog.close(); rerender(); toast('Lista preparada para una nueva salida');
      };
    };
  }

  function bindManadaName() {
    const input = document.querySelector('[data-manada-name]');
    if (!input) return;
    input.oninput = () => { trip().familyName = input.value; save(); };
  }

  window.manadaHomePage = function () {
    switchMode('manada');
    const pocket = quickItems('bolsillo'), attack = quickItems('ataque'), camp = campGroups().flatMap(([, items]) => items);
    const pocketStats = itemStats(pocket), attackStats = itemStats(attack), campStats = itemStats(camp);
    shell(`<section class="manada-home-hero"><div><p class="eyebrow">Zona Scout · Manada</p><h1>Aprendo a preparar mi equipo</h1><p>Listas sencillas para que Lobatos y Lobeznas revisen su propio equipo. La familia acompaña y abre las explicaciones solo cuando necesita más información.</p></div><img src="assets/manada-mochila-campamento.png" alt="Mochila de campamento organizada"></section><section class="manada-tool-grid" aria-label="Herramientas de Manada"><a class="manada-tool-card habit-card" href="#scout/manada/bolsillo"><figure><img src="assets/manada-cangurera.png" alt="Cangurera con equipo de bolsillo"></figure><div><span class="manada-tool-tag">Para cada salida</span><h2>Equipo de bolsillo</h2><p>Revisa la cangurera antes de reuniones, excursiones, actividades y campamentos.</p><strong>${pocketStats.done}/${pocketStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card habit-card" href="#scout/manada/ataque"><figure><img src="assets/manada-mochila-ataque.png" alt="Mochila de ataque pequeña"></figure><div><span class="manada-tool-tag">Para cada salida</span><h2>Mochila de ataque</h2><p>Agua, protección y abrigo dentro de una mochila de 15 a 20 litros que cierre sin quedar apretada.</p><strong>${attackStats.done}/${attackStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card camp-card" href="#scout/manada/salida"><figure><img src="assets/manada-mochila-campamento.png" alt="Mochila de campamento organizada"></figure><div><span class="manada-tool-tag">Para dormir fuera</span><h2>Mochila de campamento</h2><p>Ropa, descanso, aseo y utensilios organizados para que cada niño sepa encontrarlos y guardarlos.</p><strong>${campStats.done}/${campStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card progress-card" href="#scout/aventuras"><figure><img src="assets/insignias-aventuras-naturaleza.png" alt="Insignias de Aventuras en la Naturaleza"></figure><div><span class="manada-tool-tag">Aprendizaje</span><h2>Progresiones de Manada</h2><p>Practica, registra y conversa con los Viejos Lobos sobre cada presa.</p><strong>Abrir Mi Camino de Aventuras <b>→</b></strong></div></a></section><section class="panel manada-home-note"><div><p class="eyebrow">Una rutina para crecer</p><h2>El adulto acompaña; el niño prepara</h2></div><p>La meta no es terminar rápido. Antes de cada salida, el Lobato o Lobezna reconoce cada artículo, lo coloca en la mochila correcta y vuelve a guardarlo al terminar.</p></section>`, 'manada-home-page');
  };

  window.manadaQuickPage = function (kind) {
    switchMode('manada');
    const cfg = TOOL_CONFIG[kind];
    if (!cfg) { location.hash = '#scout/manada'; return; }
    const items = quickItems(kind);
    shell(`<section class="manada-tool-hero"><div><p class="eyebrow">${cfg.eyebrow}</p><h1>${cfg.title}</h1><p>${cfg.description}</p><label class="manada-child-name">Nombre de Manada<input data-manada-name maxlength="80" value="${esc(trip().familyName || '')}" placeholder="Escribe el nombre de Manada"></label></div><figure><img src="${cfg.image}" alt="${cfg.alt}"></figure></section>${markingNotice()}<section class="manada-quick-bar"><div><p class="eyebrow">Mi revisión</p><h2>${cfg.childPrompt}</h2></div>${progressMarkup(items, 'artículos listos')}<button class="secondary" type="button" data-manada-reset>Usar en una nueva salida</button></section>${plannedVideo(cfg.videoTitle)}<section class="manada-kid-checklist" aria-label="Checklist de ${cfg.title}">${checklistMarkup(items)}</section>${completionMarkup(items, cfg.image, cfg.alt)}<section class="panel manada-autonomy-check"><div><p class="eyebrow">Antes de salir</p><h2>Haz la prueba sin ayuda</h2></div><ul>${cfg.autonomyChecks.map(check => `<li>${esc(check)}</li>`).join('')}</ul></section>`, `manada-quick-page manada-${kind}-page`);
    bindManadaName();
    bindChecklist(items, () => manadaQuickPage(kind));
    bindReset(items, () => manadaQuickPage(kind));
  };

  function campGroups() {
    return [
      'Mochila y organización',
      'Sistema de descanso',
      'Ropa y calzado',
      'Aseo personal',
      'Iluminación, comida y orden',
      'Revisión antes de salir',
      'Documentos de salida Scout'
    ].map(name => [name, groupByName(name)]);
  }

  function campGroupVideo(name) {
    if (name === 'Mochila y organización') return 'Cómo elegir, ajustar y organizar la mochila de campamento';
    if (name === 'Sistema de descanso') return 'Cómo preparar el aislante, sleeping y ropa para dormir';
    if (name === 'Ropa y calzado') return 'Cómo organizar los cambios de ropa y el calzado extra';
    if (name === 'Aseo personal') return 'Cómo preparar un kit de aseo para campamento';
    if (name === 'Iluminación, comida y orden') return 'Cómo guardar la frontal, la vajilla y la bolsa extra';
    if (name === 'Revisión antes de salir') return 'Cómo hacer el bazar y comprobar mi equipo';
    if (name === 'Documentos de salida Scout') return 'Documentos que preparan los padres antes del campamento';
    return 'Cómo preparar esta categoría de la mochila';
  }

  function campGroupEyebrow(name) {
    if (name === 'Mochila y organización') return '01 · La mochila';
    if (name === 'Sistema de descanso') return '02 · Para dormir';
    if (name === 'Ropa y calzado') return '03 · Para cambiarse';
    if (name === 'Aseo personal') return '04 · Higiene';
    if (name === 'Iluminación, comida y orden') return '05 · Uso personal';
    if (name === 'Revisión antes de salir') return '06 · Revisión final';
    return '07 · Entrega a los Scouters';
  }

  function campPackingNotice() {
    return `<aside class="manada-packing-notice"><img src="assets/manada-mochila-campamento.png" alt=""><div><p class="eyebrow">Regla de la mochila</p><h2>Todo va dentro y las manos quedan libres</h2><p>Nada debe ir colgando por fuera. La mochila debe cerrar sin quedar apretada y permitir que el Lobato o Lobezna encuentre y saque su equipo con facilidad.</p></div></aside>`;
  }

  function campReferenceCard(kind) {
    const cfg = TOOL_CONFIG[kind], items = quickItems(kind), st = itemStats(items);
    return `<a class="manada-reference-card" href="#scout/manada/${kind}"><img src="${cfg.image}" alt=""><div><span>Lista independiente para cada salida</span><strong>${cfg.title}</strong><small>${st.done}/${st.total} artículos listos</small></div><b aria-hidden="true">→</b></a>`;
  }

  function campDataForm() {
    const t = trip();
    const field = (key, label, type = 'text') => `<label class="field">${label}<input data-manada-field="${key}" type="${type}" value="${esc(t[key] || '')}"></label>`;
    return `<section class="panel manada-trip-simple"><div><p class="eyebrow">Datos del campamento</p><h2>Solo lo necesario para identificar esta salida</h2><p>Los datos se guardan en este navegador.</p></div><div class="manada-simple-fields">${field('familyName', 'Nombre de Manada')}${field('destination', 'Lugar del campamento')}${field('start', 'Fecha de salida', 'date')}${field('end', 'Fecha de regreso', 'date')}</div></section>`;
  }

  function bindCampFields() {
    document.querySelectorAll('[data-manada-field]').forEach(input => {
      input.onchange = input.oninput = () => {
        const key = input.dataset.manadaField;
        if (key === 'mapsUrl' && input.value && !validMapsUrl(input.value)) return;
        trip()[key] = input.value;
        save();
      };
    });
  }

  window.manadaCampPage = function () {
    switchMode('manada');
    const groups = campGroups(), allCampItems = groups.flatMap(([, items]) => items);
    shell(`<section class="manada-tool-hero camp-tool-hero"><div><p class="eyebrow">Campamento de Manada · Preparación en familia</p><h1>Prepara tu mochila de campamento</h1><p>El Lobato o Lobezna consigue, reconoce y guarda su equipo. La familia acompaña, revisa y abre la información adicional cuando la necesita.</p></div><figure><img src="assets/manada-mochila-campamento.png" alt="Mochila de campamento con el equipo organizado"></figure></section>${campPackingNotice()}${campDataForm()}${markingNotice()}<section class="panel manada-references"><div><p class="eyebrow">También deben estar listas</p><h2>Dos listas que sirven para cualquier salida</h2><p>Se preparan por separado y su avance se refleja aquí; no es necesario revisar los mismos artículos dos veces.</p></div><div>${campReferenceCard('bolsillo')}${campReferenceCard('ataque')}</div></section>${currentVideo()}<section class="manada-camp-checklists"><div class="manada-camp-heading"><div><p class="eyebrow">Paso a paso</p><h2>Prepara cada categoría de la mochila</h2><p>Abre <strong>Información y video</strong> en cada artículo para consultar su explicación y el tutorial correspondiente.</p></div>${progressMarkup(allCampItems, 'elementos preparados')}<button class="secondary" type="button" data-manada-reset>Preparar un nuevo campamento</button></div>${groups.map(([name, items]) => `<section class="panel manada-camp-group"><header><div><p class="eyebrow">${campGroupEyebrow(name)}</p><h2>${name}</h2></div>${progressMarkup(items, 'listos')}</header>${checklistMarkup(items)}</section>`).join('')}</section>${completionMarkup(allCampItems, 'assets/manada-mochila-campamento.png', 'Mochila de campamento lista')}<section class="panel manada-final-test"><div><p class="eyebrow">Prueba final</p><h2>Yo puedo preparar y cuidar mi equipo</h2></div><ol><li>Reconozco mis tres sistemas: cangurera, mochila de ataque y mochila de campamento.</li><li>Todo mi equipo está dentro y nada va colgando.</li><li>Puedo encontrar mis cosas sin vaciar toda la mochila.</li><li>Puedo guardar mi sleeping bag y cerrar mis bolsas.</li><li>Puedo cargar todo dejando las manos libres.</li><li>Mi nombre de Manada está visible en ropa, calzado y equipo.</li></ol><button class="primary" type="button" onclick="window.print()">Imprimir esta lista</button></section>`, 'manada-camp-page');
    bindCampFields();
    bindChecklist(allCampItems, manadaCampPage);
    bindReset(allCampItems, manadaCampPage);
  };
})();
