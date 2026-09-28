/* Herramientas de Manada: hábitos sencillos para niñas y niños, con ayuda desplegable para familias. */
(function () {
  const TOOL_CONFIG = {
    bolsillo: {
      group: 'Equipo de bolsillo · cangurera',
      title: 'Equipo de bolsillo',
      eyebrow: 'Para cada salida · Cangurera',
      description: 'Una revisión rápida para comprobar que la cangurera está completa antes de excursiones, reuniones y campamentos.',
      image: 'assets/manada-cangurera.svg',
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
      eyebrow: 'Para cada salida · Mochila de 10 a 20 litros',
      description: 'Lo necesario para una actividad, excursión o recorrido corto, organizado en una mochila pequeña que el Lobato pueda usar sin ayuda.',
      image: 'assets/manada-mochila-ataque.svg',
      alt: 'Mochila de ataque pequeña con agua, abrigo e impermeable',
      videoTitle: 'Cómo revisar una mochila de ataque antes de salir',
      childPrompt: 'Marca únicamente lo que ya revisaste y guardaste dentro de tu mochila.',
      autonomyChecks: [
        'Puedo decir qué llevo y para qué sirve.',
        'Sé encontrar el agua, el impermeable y la linterna.',
        'Puedo cerrar y ponerme la mochila sin ayuda.',
        'La mochila queda cómoda y mis manos quedan libres.'
      ]
    }
  };

  const ITEM_ART = {
    'mn-paliacates': 'paliacates', 'mn-piola': 'piola', 'mn-escritura': 'escritura',
    'mn-costurero': 'costurero', 'mn-credencial': 'credencial', 'mn-dinero': 'dinero',
    'mn-agenda': 'agenda', 'mn-snack': 'snack', 'mn-agua': 'agua', 'mn-sol': 'sol',
    'mn-impermeable': 'impermeable', 'mn-sueter': 'sueter', 'mn-frontal': 'frontal',
    'mn-silbato': 'silbato'
  };

  function groupByName(name) {
    return MANADA_EQUIPMENT.find(([group]) => group === name)?.[1] || [];
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

  function markingNotice() {
    return `<aside class="manada-marking-notice"><span aria-hidden="true">✎</span><div><strong>Todo el equipo debe llevar el nombre de la Manada</strong><p>Madres, padres o tutores pueden escribirlo con plumón indeleble o colocar una etiqueta resistente y bien fijada.</p></div></aside>`;
  }

  function currentVideo() {
    const id = 'HxDVdis9f7E';
    return `<section class="panel manada-current-video"><div><p class="eyebrow">Video disponible · Acampando en Familia</p><h2>Cómo armar la mochila de campamento para Manada</h2><p>Este es el video completo que actualmente reúne el proceso. Los tutoriales cortos se integrarán en cada bloque conforme se publiquen.</p><a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></div><div class="manada-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Cómo armar la mochila de campamento para Manada" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div></section>`;
  }

  function checklistMarkup(items) {
    return `<div class="manada-child-list">${items.map(item => {
      const state = itemState(item[0]), done = state.status === 'packed', omitted = state.status === 'na';
      const icon = ITEM_ART[item[0]] ? `<svg class="manada-item-art" aria-hidden="true"><use href="assets/manada-item-icons.svg#${ITEM_ART[item[0]]}"></use></svg>` : '';
      return `<article class="manada-child-item ${icon ? 'has-item-art' : ''} ${done ? 'is-done' : ''} ${omitted ? 'is-omitted' : ''}"><label class="manada-child-check"><input type="checkbox" data-manada-check="${item[0]}" ${done ? 'checked' : ''} ${omitted ? 'disabled' : ''}><span class="manada-check-box" aria-hidden="true">${done ? '✓' : ''}</span>${icon}<span><strong>${esc(item[1])}</strong><small>${omitted ? 'No se necesita en esta salida' : done ? 'Listo y guardado' : item[2]}</small></span></label><details class="manada-parent-help"><summary>Ayuda para la familia</summary><div><h3>¿Para qué sirve?</h3><p>${esc(item[4])}</p><h3>¿Cómo prepararlo?</h3><p>${esc(item[5])}</p><h3>Antes de marcarlo</h3><p>${esc(item[6])}</p><button class="text-button" type="button" data-manada-na="${item[0]}">${omitted ? 'Incluirlo nuevamente' : 'No se necesita en esta salida'}</button></div></details></article>`;
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
    const pocket = groupByName(TOOL_CONFIG.bolsillo.group), attack = groupByName(TOOL_CONFIG.ataque.group), camp = groupByName('Mochila de campamento');
    const pocketStats = itemStats(pocket), attackStats = itemStats(attack), campStats = itemStats(camp);
    shell(`<section class="manada-home-hero"><div><p class="eyebrow">Zona Scout · Manada</p><h1>Aprendo a preparar mi equipo</h1><p>Listas sencillas para que Lobatos y Lobeznas revisen su propio equipo. La familia acompaña y abre las explicaciones solo cuando necesita más información.</p></div><img src="assets/manada-mochila-campamento.svg" alt="Mochila de campamento organizada"></section><section class="manada-tool-grid" aria-label="Herramientas de Manada"><a class="manada-tool-card habit-card" href="#scout/manada/bolsillo"><figure><img src="assets/manada-cangurera.svg" alt="Cangurera con equipo de bolsillo"></figure><div><span class="manada-tool-tag">Para cada salida</span><h2>Equipo de bolsillo</h2><p>Revisa la cangurera antes de reuniones, excursiones, actividades y campamentos.</p><strong>${pocketStats.done}/${pocketStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card habit-card" href="#scout/manada/ataque"><figure><img src="assets/manada-mochila-ataque.svg" alt="Mochila de ataque pequeña"></figure><div><span class="manada-tool-tag">Para cada salida</span><h2>Mochila de ataque</h2><p>Agua, protección y abrigo para la actividad del día en una mochila de 10 a 20 litros.</p><strong>${attackStats.done}/${attackStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card camp-card" href="#scout/manada/salida"><figure><img src="assets/manada-mochila-campamento.svg" alt="Mochila de campamento organizada"></figure><div><span class="manada-tool-tag">Para dormir fuera</span><h2>Mochila de campamento</h2><p>Ropa, descanso, aseo y utensilios organizados para que cada niño sepa encontrarlos y guardarlos.</p><strong>${campStats.done}/${campStats.total} listos <b>→</b></strong></div></a><a class="manada-tool-card progress-card" href="#scout/aventuras"><figure><img src="assets/insignias-aventuras-naturaleza.png" alt="Insignias de Aventuras en la Naturaleza"></figure><div><span class="manada-tool-tag">Aprendizaje</span><h2>Progresiones de Manada</h2><p>Practica, registra y conversa con los Viejos Lobos sobre cada presa.</p><strong>Abrir Mi Camino de Aventuras <b>→</b></strong></div></a></section><section class="panel manada-home-note"><div><p class="eyebrow">Una rutina para crecer</p><h2>El adulto acompaña; el niño prepara</h2></div><p>La meta no es terminar rápido. Antes de cada salida, el Lobato o Lobezna reconoce cada artículo, lo coloca en la mochila correcta y vuelve a guardarlo al terminar.</p></section>`, 'manada-home-page');
  };

  window.manadaQuickPage = function (kind) {
    switchMode('manada');
    const cfg = TOOL_CONFIG[kind];
    if (!cfg) { location.hash = '#scout/manada'; return; }
    const items = groupByName(cfg.group);
    shell(`<section class="manada-tool-hero"><div><p class="eyebrow">${cfg.eyebrow}</p><h1>${cfg.title}</h1><p>${cfg.description}</p><label class="manada-child-name">Nombre de la Manada<input data-manada-name maxlength="80" value="${esc(trip().familyName || '')}" placeholder="Escribe el nombre de la Manada"></label></div><figure><img src="${cfg.image}" alt="${cfg.alt}"></figure></section>${markingNotice()}<section class="manada-quick-bar"><div><p class="eyebrow">Mi revisión</p><h2>${cfg.childPrompt}</h2></div>${progressMarkup(items, 'artículos listos')}<button class="secondary" type="button" data-manada-reset>Usar en una nueva salida</button></section>${plannedVideo(cfg.videoTitle)}<section class="manada-kid-checklist" aria-label="Checklist de ${cfg.title}">${checklistMarkup(items)}</section>${completionMarkup(items, cfg.image, cfg.alt)}<section class="panel manada-autonomy-check"><div><p class="eyebrow">Antes de salir</p><h2>Haz la prueba sin ayuda</h2></div><ul>${cfg.autonomyChecks.map(check => `<li>${esc(check)}</li>`).join('')}</ul></section>`, `manada-quick-page manada-${kind}-page`);
    bindManadaName();
    bindChecklist(items, () => manadaQuickPage(kind));
    bindReset(items, () => manadaQuickPage(kind));
  };

  function campGroups() {
    return ['Autonomía y preparación', 'Mochila de campamento', 'Documentos de salida Scout'].map(name => [name, groupByName(name)]);
  }

  function campGroupVideo(name) {
    if (name === 'Autonomía y preparación') return 'Cómo reconocer, marcar y organizar todo mi equipo';
    if (name === 'Documentos de salida Scout') return 'Documentos que preparan los padres antes del campamento';
    return 'Cómo empacar ropa, descanso, aseo y utensilios';
  }

  function campReferenceCard(kind) {
    const cfg = TOOL_CONFIG[kind], items = groupByName(cfg.group), st = itemStats(items);
    return `<a class="manada-reference-card" href="#scout/manada/${kind}"><img src="${cfg.image}" alt=""><div><span>Lista independiente para cada salida</span><strong>${cfg.title}</strong><small>${st.done}/${st.total} artículos listos</small></div><b aria-hidden="true">→</b></a>`;
  }

  function campDataForm() {
    const t = trip();
    const field = (key, label, type = 'text') => `<label class="field">${label}<input data-manada-field="${key}" type="${type}" value="${esc(t[key] || '')}"></label>`;
    return `<section class="panel manada-trip-simple"><div><p class="eyebrow">Datos del campamento</p><h2>Solo lo necesario para identificar esta salida</h2><p>Los datos se guardan en este navegador.</p></div><div class="manada-simple-fields">${field('familyName', 'Nombre de la Manada')}${field('destination', 'Lugar del campamento')}${field('start', 'Fecha de salida', 'date')}${field('end', 'Fecha de regreso', 'date')}</div></section>`;
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
    shell(`<section class="manada-tool-hero camp-tool-hero"><div><p class="eyebrow">Campamento de Manada · Preparación en familia</p><h1>Prepara tu mochila de campamento</h1><p>El Lobato o Lobezna consigue, reconoce y guarda su equipo. La familia acompaña, revisa y abre la información adicional cuando la necesita.</p></div><figure><img src="assets/manada-mochila-campamento.svg" alt="Mochila de campamento con el equipo organizado"></figure></section>${campDataForm()}${markingNotice()}<section class="panel manada-references"><div><p class="eyebrow">También deben estar listas</p><h2>Dos listas que sirven para cualquier salida</h2><p>Se preparan por separado y su avance se refleja aquí; no es necesario revisar los mismos artículos dos veces.</p></div><div>${campReferenceCard('bolsillo')}${campReferenceCard('ataque')}</div></section>${currentVideo()}<section class="manada-camp-checklists"><div class="manada-camp-heading"><div><p class="eyebrow">Paso a paso</p><h2>Lo que va en la mochila de campamento</h2></div>${progressMarkup(allCampItems, 'elementos preparados')}<button class="secondary" type="button" data-manada-reset>Preparar un nuevo campamento</button></div>${groups.map(([name, items]) => `<section class="panel manada-camp-group"><header><div><p class="eyebrow">${name === 'Mochila de campamento' ? 'Dentro de la mochila' : 'Antes de cerrarla'}</p><h2>${name}</h2></div>${progressMarkup(items, 'listos')}</header>${plannedVideo(campGroupVideo(name))}${checklistMarkup(items)}</section>`).join('')}</section>${completionMarkup(allCampItems, 'assets/manada-mochila-campamento.svg', 'Mochila de campamento lista')}<section class="panel manada-final-test"><div><p class="eyebrow">Prueba final</p><h2>Yo puedo preparar y cuidar mi equipo</h2></div><ol><li>Reconozco mis tres sistemas: cangurera, mochila de ataque y mochila de campamento.</li><li>Sé dónde está cada artículo y puedo volver a guardarlo.</li><li>Puedo guardar mi sleeping bag y cerrar mis bolsas.</li><li>Puedo cargar todo dejando las manos libres.</li><li>El nombre de la Manada está visible en ropa, calzado y equipo.</li></ol><button class="primary" type="button" onclick="window.print()">Imprimir esta lista</button></section>`, 'manada-camp-page');
    bindCampFields();
    bindChecklist(allCampItems, manadaCampPage);
    bindReset(allCampItems, manadaCampPage);
  };
})();
