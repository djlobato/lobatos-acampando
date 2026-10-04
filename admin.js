/* Panel editorial local de Lobatos Acampando.
   La contraseña se valida mediante hash y la sesión vive solo en la pestaña.
   Los cambios se guardan en este navegador y pueden exportarse como JSON. */
(function () {
  const VERSION = '1.7';
  const PASSWORD_HASH = '3a529ebf2172938cc9c62d5aeed0dd92fcc3c7f15bad9746c5c5d718d3ef1b7c';
  const STORAGE_KEY = 'lobatos-admin-content-v1';
  const SESSION_KEY = 'lobatos-admin-session-v1';
  const STATUS = {
    published: ['Publicado', 'Visible y disponible'],
    soon: ['Próximamente', 'Visible, pero no permite entrar'],
    locked: ['Bloqueado', 'Visible con aviso de acceso restringido'],
    hidden: ['Oculto', 'No aparece en los menús públicos']
  };
  const SECTIONS = [
    ['inicio', 'Página principal', '#inicio'],
    ['coche', 'Camping con coche', '#coche'],
    ['senderismo', 'Mochilero o Backpacking', '#senderismo'],
    ['bushcraft', 'Bushcraft', '#bushcraft'],
    ['ultraligera', 'Acampada ultraligera', '#ultraligera'],
    ['tecnicas', 'Técnicas de campismo', '#tecnicas'],
    ['reviews', 'Review de equipo', '#reviews'],
    ['scout', 'Zona Scout', '#scout'],
    ['manada', 'Herramientas de Manada', '#scout/manada'],
    ['manada-progresiones', 'Progresiones de Manada', '#scout/aventuras'],
    ['manada-bolsillo', 'Manada · Equipo de bolsillo', '#scout/manada/bolsillo'],
    ['manada-ataque', 'Manada · Mochila de ataque', '#scout/manada/ataque'],
    ['manada-campamento', 'Manada · Mochila de campamento', '#scout/manada/salida'],
    ['tropa', 'Herramientas de Tropa', '#scout/tropa'],
    ['tropa-progresiones', 'Progresiones de Tropa', '#scout/tropa/aventuras'],
    ['tropa-bolsillo', 'Tropa · Equipo de bolsillo', '#scout/tropa/bolsillo'],
    ['tropa-ataque', 'Tropa · Mochila de ataque', '#scout/tropa/ataque'],
    ['tropa-campamento', 'Tropa · Campamento Scout', '#scout/tropa/campamento']
  ].map(([id, title, route]) => ({ id, title, route }));
  const P = (id, title, purpose) => ({ id, title, purpose });
  const SECTION_DETAILS = {
    inicio: ['Portada', 'Presenta las rutas principales del sitio y dirige a cada experiencia.', [P('modalidades','Elige tu forma de acampar','Accesos a las cuatro modalidades.'),P('tecnicas','Técnicas de campismo','Biblioteca de técnicas del canal.'),P('reviews','Review de equipo','Comparativas y pruebas de equipo.'),P('scout','Zona Scout','Acceso a Manada y Tropa.'),P('contacto','Tu historia nos inspira','Redes sociales y contacto.')]],
    coche: ['Modalidades de campismo', 'Guía familiar para organizar un campamento base junto al vehículo.', [P('planear','Planeación y vehículo','Destino, reglas, clima y carga segura.'),P('refugio','Refugio y zona de convivencia','Tienda, huella, toldo y área común.'),P('descanso','Sistema de dormir','Bolsa de dormir, aislante y comodidad.'),P('cocina','Cocina, agua y conservación','Cocina, agua segura y cadena fría.'),P('fuego','Fuego y fogata','Uso responsable cuando esté permitido.'),P('iluminacion','Iluminación y energía','Luz personal, luz de campamento y energía.'),P('organizacion','Equipaje y organización','Cajas, mochilas, mesas y orden.'),P('ropa','Ropa','Capas adecuadas al clima.'),P('salud','Higiene, salud y emergencia','Aseo, botiquín y respuesta.')]],
    senderismo: ['Modalidades de campismo', 'Preparación autónoma para caminar y pernoctar con todo el equipo en la mochila.', [P('mochila','Mochila y transporte','Ajuste, volumen y carga.'),P('refugio','Refugio y descanso','Refugio, aislante y bolsa de dormir.'),P('ropa','Ropa y calzado','Capas, lluvia y calzado.'),P('agua','Agua','Capacidad, abastecimiento y tratamiento.'),P('alimentacion','Alimentación y cocina','Menú, combustible y utensilios.'),P('orientacion','Orientación y comunicación','Mapa, navegación y comunicación.'),P('seguridad','Seguridad, higiene y residuos','Botiquín, higiene y mínimo impacto.'),P('plan','Documentos y plan de ruta','Permisos, contactos y emergencia.')]],
    bushcraft: ['Modalidades de campismo', 'Habilidades tradicionales con permiso, seguridad y mínimo impacto.', [P('reglas','Reglas y planificación','Autorizaciones, lugar y límites.'),P('transporte','Transporte y organización','Carga del equipo especializado.'),P('refugio','Refugio y descanso','Protección y descanso.'),P('herramientas','Herramientas','Selección, transporte y uso.'),P('cocina-fuego','Alimentación, cocina y fuego','Cocina y fuego bajo reglas vigentes.'),P('agua','Agua','Abastecimiento y tratamiento.'),P('orientacion','Orientación y comunicación','Ubicación, retorno y comunicación.'),P('seguridad','Seguridad, salud y residuos','Prevención y primeros auxilios.')]],
    ultraligera: ['Modalidades de campismo', 'Reducción responsable de peso sin eliminar funciones de seguridad.', [P('sistema-base','Sistema base y transporte','Peso base, mochila y carga.'),P('refugio-descanso','Refugio y descanso','Sistema ligero probado.'),P('capas-calzado','Capas, lluvia y calzado','Protección personal.'),P('agua-comida','Agua, comida y cocina','Consumos y sistema de cocina.'),P('orientacion-emergencia','Orientación, higiene y emergencia','Esenciales que no se eliminan.'),P('carga-familia','Carga compartida en familia','Reparto por capacidad y función.')]],
    tecnicas: ['Biblioteca del canal', 'Procedimientos demostrados en los videos de Acampando en Familia.', [P('tienda','Cuidar la tienda antes de que falle','Mantenimiento e impermeabilización.'),P('poste','Resolver un poste dañado con calma','Diagnóstico y reparación.'),P('dormir','Elegir la bolsa de dormir como sistema','Sistema completo de descanso.'),P('familia','Cómo practicar una técnica en familia','Aprender y comprobar una habilidad.')]],
    reviews: ['Biblioteca del canal', 'Comparativas y experiencia documentada con equipo mostrado en el canal.', [P('criterio','Cómo leer nuestras reviews','Interpretación de pruebas.'),P('tiendas','Comparativa de tiendas familiares','Refugios ya probados.'),P('descanso','Sistema de descanso: elegir con criterio','Decisiones para dormir.'),P('mantenimiento','Mantenimiento también es una decisión de equipo','Cuidado y reparación.'),P('proximas','Próximas reseñas','Nuevos videos por publicar.')]],
    scout: ['Zona Scout', 'Puerta de entrada a las herramientas y progresiones de Manada y Tropa.', [P('manada','Lobatos y Lobeznas','Preparación y progresiones de Manada.'),P('tropa','Vida de patrulla','Equipo y progresiones de Tropa.')]],
    manada: ['Zona Scout · Manada', 'Listas sencillas para salidas y campamentos de Lobatos y Lobeznas.', [P('bolsillo','Equipo de bolsillo','Cangurera para cada actividad.'),P('ataque','Mochila de ataque','Equipo para actividades del día.'),P('campamento','Mochila de campamento','Equipo personal para pernocta.'),P('progresiones','Progresiones de Manada','Aventuras en la Naturaleza.')]],
    'manada-progresiones': ['Zona Scout · Manada', 'Mapa educativo del Carnet de Aventuras en la Naturaleza.', [P('mohwa','Mohwa · Habilidades para la vida','Progresión inicial disponible.'),P('dhak','Dhak · No dejar rastro','Progresión ambiental pendiente.'),P('flor-roja','Flor Roja · Técnica avanzada','Progresión técnica pendiente.'),P('tregua','Tregua del agua · Protección y cuidado','Salud y bienestar pendiente.')]],
    'manada-bolsillo': ['Zona Scout · Manada', 'Checklist habitual de cangurera o bolsillos.', [P('contenedor','Cangurera o equipo de bolsillo','Contenedor y ajuste.'),P('elementos','Contenido del equipo de bolsillo','Objetos y ubicación fija.'),P('revision','Revisión antes de salir','Comprobación y nombre de Manada.')]],
    'manada-ataque': ['Zona Scout · Manada', 'Mochila de 15 a 20 litros para excursión o actividad diurna.', [P('mochila','Mochila de ataque','Capacidad y empaque.'),P('proteccion','Protección personal','Sol, lluvia y clima.'),P('agua','Agua y alimento','Hidratación y refrigerio.'),P('documentos','Documentos de salida Scout','Formatos oficiales.'),P('revision','Revisión antes de salir','Comprobación completa.')]],
    'manada-campamento': ['Zona Scout · Manada', 'Checklist para que cada Lobato prepare y guarde su equipo.', [P('documentos','Documentos de salida Scout','Formatos de la dirigencia.'),P('mochila','Mochila y organización','Mochila infantil cercana a 40 litros.'),P('descanso','Sistema de descanso','Aislante, bolsa y ropa nocturna.'),P('ropa','Ropa y calzado','Cambios, capas y calzado extra.'),P('aseo','Aseo personal','Kit individual.'),P('orden','Iluminación, comida y orden','Linterna, alimentos y bolsas.'),P('revision','Revisión antes de salir','Empacado sin objetos colgando.')]],
    tropa: ['Zona Scout · Tropa', 'Preparación autónoma y progresiones para Scouts.', [P('bolsillo','Equipo de bolsillo','Equipo habitual.'),P('ataque','Mochila de ataque','Equipo de excursión.'),P('campamento','Prepárate para el Campamento Scout','Equipo personal y de patrulla.'),P('progresiones','Lleva tu proceso de insignias','Aventuras en la Naturaleza.')]],
    'tropa-progresiones': ['Zona Scout · Tropa', 'Bitácora autónoma para el proceso de insignias.', [P('cabuyeria','Cabuyería','Nudos y amarres.'),P('campismo','Campismo','Vida al aire libre.'),P('exploracion','Exploración','Navegación y entorno.'),P('principios','Siete principios','Conducta responsable.'),P('seguridad','Seguridad y primeros auxilios','Prevención y atención inicial.')]],
    'tropa-bolsillo': ['Zona Scout · Tropa', 'Equipo pequeño que acompaña al Scout.', [P('cangurera','Cangurera o bolsillos','Contenedor y cierre.'),P('contenido','Contenido del equipo de bolsillo','Objetos inmediatos.'),P('revision','Control final','Funcionamiento y ubicación.')]],
    'tropa-ataque': ['Zona Scout · Tropa', 'Checklist técnico para ruta o actividad del día.', [P('mochila','Mochila de excursión','Ajuste y capacidad.'),P('proteccion','Protección y capas','Sol, lluvia y abrigo.'),P('agua','Agua y alimento','Consumo y reserva.'),P('orientacion','Orientación y emergencia','Navegación y respuesta.'),P('revision','Control final','Comprobación autónoma.')]],
    'tropa-campamento': ['Zona Scout · Tropa', 'Equipo personal, de patrulla y control final.', [P('documentos','Documentos de salida Scout','Fichas y autorizaciones.'),P('personal','Equipo personal','Descanso, uniforme, capas y calzado.'),P('construcciones','Campamento y construcciones','Tiendas, huellas y lonas.'),P('cocina','Cocina de patrulla','Cocción, agua y conservación.'),P('seguridad','Seguridad, higiene y organización','Botiquín, limpieza y residuos.'),P('empacado','Empacado y control final','Mochilas, bazar y participantes.')]]
  };
  const PUBLIC_SECTION_COPY = {
    inicio: ['Elige tu forma de acampar', 'Te ayudamos a mejorar tu experiencia de camping con guías prácticas, videos y listas para preparar cada aventura en familia o en la vida Scout.'],
    coche: ['Camping con coche', 'Descansa, cocina y convive con tu campamento cerca del vehículo. Prepara lo que tu familia necesita para disfrutar la estancia.'],
    senderismo: ['Mochilero o Backpacking', 'El backpacking, o viajar como mochilero, recorre rutas de larga distancia llevando equipo, refugio y alimento en una mochila, priorizando movilidad, autonomía y ligereza.'],
    bushcraft: ['Bushcraft', 'El bushcraft es el arte de prosperar en la naturaleza con autosuficiencia, usando habilidades tradicionales de fuego, refugio y trabajo de madera.'],
    ultraligera: ['Acampada ultraligera', 'Diseña un sistema ligero, completo y probado para caminar con más libertad, sin recortar seguridad, descanso, agua ni alimentación.'],
    tecnicas: ['Técnicas de campismo', 'Aprende a cuidar, reparar y elegir el refugio y el sistema de descanso a partir de los videos que ya publicamos.'],
    reviews: ['Review de equipo', 'Compara el equipo que ya hemos mostrado en el canal y descubre qué video responde a cada decisión de compra o mantenimiento.'],
    scout: ['Zona Scout', 'Puerta de entrada a las herramientas y progresiones de Manada y Tropa.'],
    manada: ['Aprendo a preparar mi equipo', 'Listas sencillas para que Lobatos y Lobeznas revisen su propio equipo. La familia acompaña y abre las explicaciones solo cuando necesita más información.'],
    'manada-progresiones': ['Mi Camino de Aventuras', 'Un registro familiar para acompañar el aprendizaje de Lobatos y Lobeznas. El carnet guía cada paso; la Manada y sus Viejos Lobos acompañan y validan el avance.'],
    'manada-bolsillo': ['Equipo de bolsillo', 'Una revisión rápida para comprobar que la cangurera está completa antes de excursiones, reuniones y campamentos.'],
    'manada-ataque': ['Mochila de ataque', 'Lo necesario para una actividad, excursión o recorrido corto, dentro de una mochila que cierre sin quedar apretada y que el Lobato pueda usar sin ayuda.'],
    'manada-campamento': ['Prepara tu mochila de campamento', 'El Lobato o Lobezna consigue, reconoce y guarda su equipo. La familia acompaña, revisa y abre la información adicional cuando la necesita.'],
    tropa: ['Equipo, autonomía y progresiones', 'Elige la herramienta que necesitas para la próxima actividad. Cada lista tiene una función distinta para evitar duplicados: lo que te acompaña siempre, lo que llevas durante la ruta y lo que utilizas al establecer el campamento.'],
    'tropa-progresiones': ['Mi ruta de territorios', 'Una bitácora personal para elegir exploraciones, practicar con tu Patrulla y reunir lo que quieres compartir con tus Scouters.'],
    'tropa-bolsillo': ['Equipo de bolsillo', 'Una lista breve para comprobar el material pequeño que acompaña al Scout en reuniones, excursiones y campamentos.'],
    'tropa-ataque': ['Mochila de ataque', 'Lo necesario para la ruta o actividad del día, preparado según duración, clima, esfuerzo y programa.'],
    'tropa-campamento': ['Prepárate para el Campamento Scout', 'Cada Scout revisa su equipo personal. La Patrulla reparte el material compartido, asigna responsables y comprueba que todo tenga una función antes de salir.']
  };
  function publicCopy(section, field) {
    const copy = PUBLIC_SECTION_COPY[section.id] || [section.title, section.purpose];
    return copy[field === 'title' ? 0 : 1];
  }
  SECTIONS.forEach(item => { const detail = SECTION_DETAILS[item.id]; item.group = detail[0]; item.purpose = detail[1]; item.parts = detail[2]; });
  const AREAS = [
    { id: 'campismo', title: 'Formas de acampar', description: 'Portada, cuatro modalidades, técnicas y revisión de equipo.', icon: '⌂', sections: ['inicio', 'coche', 'senderismo', 'bushcraft', 'ultraligera', 'tecnicas', 'reviews'] },
    { id: 'manada', title: 'Manada', description: 'Menú de Zona Scout, equipo para cada salida, campamento y progresiones.', icon: '🐺', sections: ['scout', 'manada', 'manada-bolsillo', 'manada-ataque', 'manada-campamento', 'manada-progresiones'] },
    { id: 'tropa', title: 'Tropa', description: 'Menú de Zona Scout, equipo personal, campamento Scout y progresiones.', icon: '⚜', sections: ['scout', 'tropa', 'tropa-bolsillo', 'tropa-ataque', 'tropa-campamento', 'tropa-progresiones'] }
  ];
  const CONTENT_FIELDS = [
    ['home.coche.title', 'Portada · Camping con coche · título', 'Camping con coche'],
    ['home.coche.description', 'Portada · Camping con coche · descripción', 'Acampa cerca del auto, con espacio y comodidad.'],
    ['home.senderismo.title', 'Portada · Backpacking · título', 'Mochilero o Backpacking'],
    ['home.senderismo.description', 'Portada · Backpacking · descripción', 'Recorre rutas largas con total autonomía llevando todo tu equipo técnico en una sola mochila.'],
    ['home.bushcraft.title', 'Portada · Bushcraft · título', 'Bushcraft'],
    ['home.bushcraft.description', 'Portada · Bushcraft · descripción', 'Practica técnicas tradicionales de refugio, fuego y herramientas con planificación, permiso y mínimo impacto.'],
    ['home.ultraligera.title', 'Portada · Ultraligera · título', 'Acampada ultraligera'],
    ['home.ultraligera.description', 'Portada · Ultraligera · descripción', 'Reduce el peso base con un sistema completo, probado y adecuado para la ruta, el clima y cada integrante.'],
    ['home.tecnicas.title', 'Portada · Técnicas · título', 'Técnicas de campismo'],
    ['home.tecnicas.description', 'Portada · Técnicas · descripción', 'Aprende a cuidar, reparar y elegir refugio y descanso desde los videos del canal.'],
    ['home.reviews.title', 'Portada · Reviews · título', 'Review de equipo'],
    ['home.reviews.description', 'Portada · Reviews · descripción', 'Compara el equipo que ya mostramos en el canal y decide con información documentada.'],
    ['home.scout.title', 'Portada · Zona Scout · título', 'Zona Scout']
  ];
  const PLACEMENTS = SECTIONS.filter(item => item.id !== 'inicio').map(item => [item.route.slice(1), item.title]);
  const placementAliases = {
    'Camping con coche': 'coche', 'Mochilero o Backpacking': 'senderismo', 'Bushcraft': 'bushcraft',
    'Acampada ultraligera': 'ultraligera', 'Técnicas de campismo': 'tecnicas', 'Review de equipo': 'reviews',
    'Campamento Scout · Manada': 'scout/manada', 'Campamento Scout · Tropa': 'scout/tropa'
  };
  let currentTab = 'resumen';
  let selectedAreaId = '';
  let editingSectionId = '';
  let editingPartId = '';
  let editingItemId = '';
  let videoPickerTarget = null;
  let videoQuery = '';
  let scheduled = false;
  const originalItems = new Map();

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }
  function defaultState() {
    return {
      schema: 1,
      savedAt: null,
      sections: Object.fromEntries(SECTIONS.map(section => [section.id, { status: 'published', message: '' }])),
      content: {},
      sectionContent: {},
      partContent: {},
      itemContent: {},
      videoAssignments: {},
      videos: []
    };
  }
  function load() {
    const base = defaultState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || saved.schema !== 1) return base;
      base.sections = { ...base.sections, ...(saved.sections || {}) };
      base.content = saved.content || {};
      base.sectionContent = saved.sectionContent || {};
      base.partContent = saved.partContent || {};
      base.itemContent = saved.itemContent || {};
      base.videoAssignments = saved.videoAssignments || {};
      base.videos = Array.isArray(saved.videos) ? saved.videos : [];
      base.savedAt = saved.savedAt || null;
    } catch { /* Conserva la configuración inicial si el almacenamiento no es válido. */ }
    return base;
  }
  let state = load();
  async function loadPublishedContent() {
    if (location.protocol === 'file:') return;
    try {
      const response = await fetch(`data/contenido-sitio.json?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) return;
      const published = await response.json();
      if (published?.schema !== 1) return;
      let local = {};
      try { local = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { local = {}; }
      const base = defaultState();
      state = {
        ...base,
        ...published,
        ...local,
        sections: { ...base.sections, ...(published.sections || {}), ...(local.sections || {}) },
        content: { ...(published.content || {}), ...(local.content || {}) },
        sectionContent: { ...(published.sectionContent || {}), ...(local.sectionContent || {}) },
        partContent: { ...(published.partContent || {}), ...(local.partContent || {}) },
        itemContent: { ...(published.itemContent || {}), ...(local.itemContent || {}) },
        videoAssignments: { ...(published.videoAssignments || {}), ...(local.videoAssignments || {}) },
        videos: Array.isArray(local.videos) && local.videos.length ? local.videos : (Array.isArray(published.videos) ? published.videos : [])
      };
      if (location.hash.startsWith('#administrador')) renderAdmin();
      else window.dispatchEvent(new Event('hashchange'));
    } catch { /* En modo local o sin archivo publicado se utiliza la copia integrada. */ }
  }
  function save() {
    state.savedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    decorateSoon();
  }
  function text(key, fallback) {
    const value = state.content[key];
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
  }
  function sectionForHash(hash) {
    const clean = (hash || '#inicio').split('?')[0];
    return SECTIONS.filter(section => clean === section.route || clean.startsWith(`${section.route}/`))
      .sort((a, b) => b.route.length - a.route.length)[0] || null;
  }
  function sectionState(section) {
    return state.sections[section.id] || { status: 'published', message: '' };
  }
  function routeFromElement(element) {
    if (element.dataset?.camp !== undefined) {
      return ['#coche', '#senderismo', '#bushcraft', '#ultraligera', '#tecnicas', '#reviews'][Number(element.dataset.camp)] || '';
    }
    return element.getAttribute?.('href') || '';
  }
  function publicSectionStatus(route) {
    const section = sectionForHash(route);
    return section ? { section, ...sectionState(section) } : null;
  }
  function isAdminSession() { return sessionStorage.getItem(SESSION_KEY) === 'ok'; }
  async function digest(value) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('');
  }
  function loginPage(error = '') {
    app.innerHTML = `<main id="main" class="admin-login-shell"><section class="admin-login-card"><a class="admin-back" href="#inicio">← Volver al sitio</a><img src="assets/logo.png" alt="Lobatos Acampando"><p class="eyebrow">Administración · Versión ${VERSION}</p><h1>Panel editorial</h1><p>Ingresa la contraseña para administrar secciones, videos y contenidos.</p>${error ? `<p class="admin-error" role="alert">${escapeHtml(error)}</p>` : ''}<form id="admin-login-form"><label>Contraseña<input id="admin-password" type="password" required autocomplete="current-password" autofocus></label><button class="primary" type="submit">Entrar al panel</button></form><small>La sesión se cierra al cerrar esta pestaña o al seleccionar “Cerrar sesión”.</small></section></main>`;
    document.querySelector('#admin-login-form').onsubmit = async event => {
      event.preventDefault();
      const input = document.querySelector('#admin-password');
      const valid = await digest(input.value) === PASSWORD_HASH;
      input.value = '';
      if (!valid) { loginPage('La contraseña no es correcta.'); return; }
      sessionStorage.setItem(SESSION_KEY, 'ok');
      renderAdmin();
    };
  }
  function baseVideos() {
    const rows = typeof DRIVE_SITE_CONTENT !== 'undefined' && Array.isArray(DRIVE_SITE_CONTENT.videos) ? DRIVE_SITE_CONTENT.videos : [];
    const unique = new Map();
    rows.forEach(([area, youtubeId, title, topic]) => {
      if (!youtubeId) return;
      const id = `youtube-${youtubeId}`;
      const placement = placementAliases[area] || 'reviews';
      const existing = unique.get(id);
      if (existing) {
        if (!existing.placements.includes(placement)) existing.placements.push(placement);
      } else unique.set(id, { id, youtubeId, title, topic, placement, placements: [placement], status: 'published', custom: false });
    });
    return [...unique.values()];
  }
  function legacyVideoMaps() {
    return {
      coche: typeof CAR_ITEM_VIDEOS === 'undefined' ? {} : CAR_ITEM_VIDEOS,
      senderismo: typeof BACKPACKING_ITEM_VIDEOS === 'undefined' ? {} : BACKPACKING_ITEM_VIDEOS,
      bushcraft: typeof BUSHCRAFT_ITEM_VIDEOS === 'undefined' ? {} : BUSHCRAFT_ITEM_VIDEOS,
      ultraligera: typeof ULTRALIGHT_ITEM_VIDEOS === 'undefined' ? {} : ULTRALIGHT_ITEM_VIDEOS
    };
  }
  function legacyVideos() {
    const unique = new Map();
    Object.entries(legacyVideoMaps()).forEach(([sectionId, map]) => Object.values(map).flat().forEach(video => {
      const [youtubeId, title, label] = video || [];
      if (!youtubeId) return;
      const id = `youtube-${youtubeId}`;
      if (!unique.has(id)) unique.set(id, { id, youtubeId, title: title || 'Video publicado', topic: 'Contenido existente', placement: sectionId, placements: [sectionId], status: /pr[oó]ximamente/i.test(label || '') ? 'soon' : 'published', custom: false });
    }));
    return [...unique.values()];
  }
  function videos() {
    const combined = new Map([...baseVideos(), ...legacyVideos()].map(video => [video.id, video]));
    state.videos.forEach(video => combined.set(video.id, { ...(combined.get(video.id) || {}), ...video }));
    return [...combined.values()].filter(video => video.deleted !== true);
  }
  function assignmentKey(kind, sectionId, itemId = '') { return `${kind}:${sectionId}${itemId ? `:${itemId}` : ''}`; }
  function hasExplicitAssignment(kind, sectionId, itemId = '') { return Object.prototype.hasOwnProperty.call(state.videoAssignments, assignmentKey(kind, sectionId, itemId)); }
  function legacyItemVideoIds(sectionId, itemId) {
    const existing = new Set(videos().map(video => video.id));
    const mapped = (legacyVideoMaps()[sectionId]?.[itemId] || []).map(video => video?.[0] ? `youtube-${video[0]}` : '').filter(id => id && existing.has(id));
    const direct = state.videos.filter(video => video.sectionId === sectionId && video.itemId === itemId && video.youtubeId && video.deleted !== true).map(video => video.id);
    return [...new Set([...mapped, ...direct])];
  }
  function assignedIds(kind, sectionId, itemId = '') {
    const key = assignmentKey(kind, sectionId, itemId);
    if (Object.prototype.hasOwnProperty.call(state.videoAssignments, key)) return state.videoAssignments[key];
    return kind === 'item' ? legacyItemVideoIds(sectionId, itemId) : [];
  }
  function assignedVideos(kind, sectionId, itemId = '') {
    const ids = new Set(assignedIds(kind, sectionId, itemId));
    return videos().filter(video => ids.has(video.id));
  }
  function assignedVideoPreview(kind, sectionId, itemId = '') {
    const list = assignedVideos(kind, sectionId, itemId);
    if (!list.length) return '<p class="admin-video-assignment-empty">No hay videos seleccionados de la biblioteca.</p>';
    return `<div class="admin-assigned-videos">${list.map(video => `<article>${video.youtubeId ? `<img src="https://i.ytimg.com/vi/${encodeURIComponent(video.youtubeId)}/mqdefault.jpg" alt="">` : '<span>▶</span>'}<div><strong>${escapeHtml(video.title)}</strong><small>${escapeHtml(video.status === 'published' ? 'Publicado' : video.status === 'soon' ? 'Próximamente' : video.status === 'hidden' ? 'Oculto' : 'Borrador')}</small></div><button type="button" class="admin-assigned-remove" data-video-unassign-id="${escapeHtml(video.id)}" data-video-unassign-kind="${escapeHtml(kind)}" data-video-unassign-section="${escapeHtml(sectionId)}" data-video-unassign-item="${escapeHtml(itemId)}">Quitar</button></article>`).join('')}</div>`;
  }
  function statusOptions(selected) {
    return Object.entries(STATUS).map(([value, [label]]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${label}</option>`).join('');
  }
  function placementOptions(selected) {
    return PLACEMENTS.map(([value, label]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('');
  }
  function videoStatusOptions(selected) {
    return [['published', 'Publicado'], ['soon', 'Próximamente'], ['draft', 'Borrador'], ['hidden', 'Oculto']].map(([value, label]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${label}</option>`).join('');
  }
  function youtubeIdFrom(value = '') {
    const clean = value.trim();
    if (!clean) return '';
    if (/^[A-Za-z0-9_-]{11}$/.test(clean)) return clean;
    try {
      const url = new URL(/^https?:\/\//i.test(clean) ? clean : `https://${clean}`);
      if (url.hostname === 'youtu.be') return url.pathname.split('/').filter(Boolean)[0] || '';
      if (url.hostname.endsWith('youtube.com')) {
        if (url.pathname === '/watch') return url.searchParams.get('v') || '';
        const parts = url.pathname.split('/').filter(Boolean);
        if (['shorts', 'embed', 'live'].includes(parts[0])) return parts[1] || '';
      }
    } catch (_) {}
    return '';
  }
  function partVideo(sectionId, partId) { return state.videos.find(video => video.sectionId === sectionId && video.partId === partId); }
  function itemVideo(sectionId, itemId) { return state.videos.find(video => video.sectionId === sectionId && video.itemId === itemId); }
  function areaById(id) { return AREAS.find(area => area.id === id); }
  function catalogGroups(sectionId) { return window.LOBATOS_ADMIN_CATALOG?.[sectionId] || []; }
  function itemsForPart(section, part, index) {
    const groups = catalogGroups(section.id);
    if (!groups.length) return [[`part-${section.id}-${part.id}`, part.title, '', 'contenido', part.purpose, part.purpose, 'Revisa el texto y el enlace en la vista pública.']];
    const wanted = normalized(part.title);
    const exact = groups.find(([name]) => normalized(name) === wanted);
    const partial = groups.find(([name]) => normalized(name).includes(wanted) || wanted.includes(normalized(name)));
    return (exact || partial || groups[index] || [part.title, []])[1] || [];
  }
  function allSectionItems(section) { return section.parts.flatMap((part, index) => itemsForPart(section, part, index)); }
  function itemCustom(sectionId, itemId) { return state.itemContent[sectionId]?.[itemId] || {}; }
  function displayItem(sectionId, item) {
    const custom = itemCustom(sectionId, item[0]);
    return {
      id: item[0], title: custom.title || item[1], requirement: custom.requirement || item[2], scope: item[3],
      purpose: custom.purpose || item[4], preparation: custom.preparation || item[5], check: custom.check || item[6],
      image: custom.image || '', visible: custom.visible !== false
    };
  }
  function nav() {
    const tabs = [['resumen', 'Resumen'], ['secciones', 'Secciones'], ['videos', 'Biblioteca de videos'], ['contenidos', 'Textos de portada']];
    return `<aside class="admin-nav"><a class="admin-brand" href="#inicio"><img src="assets/logo.png" alt=""><span>Lobatos Acampando</span></a><p>Administrador</p>${tabs.map(([id, label]) => `<button type="button" data-admin-tab="${id}" class="${currentTab === id ? 'is-active' : ''}">${escapeHtml(label)}</button>`).join('')}<span class="admin-nav-space"></span><button type="button" class="admin-ftp-export" data-admin-export-ftp>Descargar actualización FTP</button><button type="button" data-admin-export>Exportar respaldo JSON</button><label class="admin-import">Importar respaldo<input type="file" accept="application/json" data-admin-import></label><button type="button" data-admin-logout>Cerrar sesión</button><small>Versión ${VERSION}</small></aside>`;
  }
  function summaryPanel() {
    const counts = Object.values(state.sections).reduce((acc, item) => { acc[item.status] = (acc[item.status] || 0) + 1; return acc; }, {});
    const catalog = videos();
    const published = catalog.filter(video => video.status === 'published').length;
    return `<section class="admin-page"><header><p class="eyebrow">Vista general</p><h1>Centro de administración</h1><p>Entra por área, abre una sección, elige un módulo y edita el elemento exacto que necesitas.</p></header><div class="admin-stats"><article><span>${SECTIONS.length}</span><strong>Secciones administrables</strong><small>${counts.published || 0} publicadas</small></article><article><span>${SECTIONS.reduce((sum, item) => sum + item.parts.length, 0)}</span><strong>Módulos identificados</strong><small>Organizados por ubicación</small></article><article><span>${published}</span><strong>Videos publicados</strong><small>${catalog.length} registros en la biblioteca</small></article></div><section class="admin-notice"><strong>Dos archivos con funciones diferentes</strong><p>El respaldo JSON conserva tu trabajo. “Descargar actualización FTP” genera <code>contenido-sitio.json</code>, el archivo que debes subir a la carpeta <code>data</code> del sitio.</p></section><div class="admin-quick"><button type="button" data-admin-go="secciones"><span>01</span><strong>Entrar a las secciones</strong><small>Formas de acampar, Manada y Tropa.</small></button><button type="button" data-admin-go="videos"><span>02</span><strong>Revisar la videoteca</strong><small>Busca y corrige videos ya registrados.</small></button><button type="button" data-admin-export-ftp><span>03</span><strong>Preparar actualización FTP</strong><small>Descarga el archivo público listo para subir.</small></button></div></section>`;
  }
  function sectionVideos(section) {
    const related = [...videos().filter(video => video.placement === section.route.slice(1) || video.sectionId === section.id), ...assignedVideos('section', section.id)];
    return [...new Map(related.map(video => [video.id, video])).values()];
  }
  function sectionMapCard(section) {
    const config = sectionState(section);
    const custom = state.sectionContent[section.id] || {};
    return `<article class="admin-site-card" data-state="${config.status}"><div class="admin-site-card-head"><span>${escapeHtml(section.group)}</span><em>${escapeHtml(STATUS[config.status]?.[0] || config.status)}</em></div><h3>${escapeHtml(custom.title || publicCopy(section, 'title'))}</h3><code>${escapeHtml(section.route)}</code><p>${escapeHtml(custom.description || publicCopy(section, 'description'))}</p><div class="admin-site-meta"><span><b>${section.parts.length}</b> apartados</span><span><b>${sectionVideos(section).length}</b> videos relacionados</span></div><div class="admin-site-actions"><button class="primary" type="button" data-section-edit="${section.id}">Editar sección</button><a class="secondary" href="${section.route}">Ver en el sitio ↗</a></div></article>`;
  }
  function areaCard(area) {
    const sections = area.sections.map(id => SECTIONS.find(section => section.id === id)).filter(Boolean);
    const items = sections.reduce((sum, section) => sum + allSectionItems(section).length, 0);
    return `<button class="admin-area-card admin-area-${area.id}" type="button" data-area-open="${area.id}"><span class="admin-area-icon" aria-hidden="true">${area.icon}</span><div><p class="eyebrow">Área del sitio</p><h2>${escapeHtml(area.title)}</h2><p>${escapeHtml(area.description)}</p><small>${sections.length} secciones · ${items} elementos registrados</small></div><b aria-hidden="true">→</b></button>`;
  }
  function sectionsPanel() {
    return `<section class="admin-page"><header><p class="eyebrow">Primer nivel</p><h1>¿Qué área quieres administrar?</h1><p>La navegación reproduce la estructura del sitio para que siempre sepas dónde aparecerá cada cambio.</p></header><div class="admin-area-grid">${AREAS.map(areaCard).join('')}</div></section>`;
  }
  function areaPanel(area) {
    const sections = area.sections.map(id => SECTIONS.find(section => section.id === id)).filter(Boolean);
    return `<section class="admin-page"><button type="button" class="admin-back-button" data-area-close>← Volver a las áreas</button><header><p class="eyebrow">Segundo nivel · ${escapeHtml(area.title)}</p><h1>Secciones de ${escapeHtml(area.title)}</h1><p>${escapeHtml(area.description)} Abre una sección para ver sus módulos.</p></header><div class="admin-site-grid">${sections.map(sectionMapCard).join('')}</div></section>`;
  }
  function sectionEditorPanel(section) {
    const config = sectionState(section);
    const custom = state.sectionContent[section.id] || {};
    const area = areaById(selectedAreaId) || AREAS.find(item => item.sections.includes(section.id));
    return `<section class="admin-page admin-section-editor"><button type="button" class="admin-back-button" data-section-close>← Volver a ${escapeHtml(area?.title || 'las secciones')}</button><header><p class="eyebrow">Tercer nivel · ${escapeHtml(area?.title || section.group)}</p><h1>${escapeHtml(custom.title || publicCopy(section, 'title'))}</h1><p>${escapeHtml(custom.description || publicCopy(section, 'description'))}</p></header><div class="admin-location-card"><div><span>Ubicación en el sitio</span><strong>${escapeHtml(area?.title || section.group)} <b>›</b> ${escapeHtml(section.title)}</strong><code>${escapeHtml(section.route)}</code></div><a class="secondary" href="${section.route}">Abrir vista pública ↗</a></div><details class="admin-section-config"><summary>Editar título, texto principal y estado de esta sección</summary><form class="admin-section-settings" id="admin-section-settings"><div><p class="eyebrow">Contenido público de la página</p><label>Título principal<input data-section-title value="${escapeHtml(custom.title || '')}" placeholder="${escapeHtml(publicCopy(section, 'title'))}"></label><label>Texto principal de la sección<textarea data-section-description rows="4" placeholder="${escapeHtml(publicCopy(section, 'description'))}">${escapeHtml(custom.description || '')}</textarea></label><small>Este texto sustituye al texto público actual; no agrega un párrafo adicional.</small></div><div><p class="eyebrow">Publicación y acceso</p><label>Estado<select data-section-status>${statusOptions(config.status)}</select></label><label>Mensaje para el público<input data-section-message maxlength="180" value="${escapeHtml(config.message || '')}" placeholder="Ej. Estamos preparando esta guía"></label></div><div class="admin-form-actions"><button class="primary" type="submit">Guardar datos de la sección</button></div></form></details><section class="admin-section-video-box"><div><p class="eyebrow">Videos generales de esta sección</p><h2>Biblioteca vinculada</h2><p>Selecciona uno o varios videos para mostrarlos como apoyo general de esta sección.</p></div><button type="button" class="primary" data-video-picker-section="${section.id}">Seleccionar videos</button>${assignedVideoPreview('section', section.id)}</section><div class="admin-parts-heading"><div><p class="eyebrow">Módulos de la sección</p><h2>¿Qué parte quieres editar?</h2><p>Entra al módulo para ver todos los elementos que contiene.</p></div><span>${section.parts.length} módulos</span></div><div class="admin-module-grid">${section.parts.map((part, index) => { const items = itemsForPart(section, part, index); const customPart = state.partContent[section.id]?.[part.id] || {}; return `<button type="button" class="admin-module-card" data-part-open="${part.id}"><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(customPart.title || part.title)}</strong><small>${escapeHtml(part.purpose)}</small><em>${items.length} ${items.length === 1 ? 'elemento' : 'elementos'}</em></div><b aria-hidden="true">→</b></button>`; }).join('')}</div></section>`;
  }
  function modulePanel(section, part) {
    const partIndex = section.parts.findIndex(item => item.id === part.id);
    const items = itemsForPart(section, part, partIndex);
    const custom = state.partContent[section.id]?.[part.id] || {};
    return `<section class="admin-page"><button type="button" class="admin-back-button" data-part-close>← Volver a los módulos de ${escapeHtml(section.title)}</button><header><p class="eyebrow">Cuarto nivel · ${escapeHtml(section.title)}</p><h1>${escapeHtml(custom.title || part.title)}</h1><p>${escapeHtml(part.purpose)}</p></header><form class="admin-module-settings" id="admin-module-settings"><label>Nombre del módulo<input data-part-title value="${escapeHtml(custom.title || '')}" placeholder="${escapeHtml(part.title)}"></label><label>Texto introductorio<textarea data-part-copy rows="3" placeholder="${escapeHtml(part.purpose)}">${escapeHtml(custom.content || '')}</textarea></label><div><button class="secondary" type="submit">Guardar datos del módulo</button><button class="text-button" type="button" data-part-reset>Restaurar</button></div></form><div class="admin-parts-heading"><div><p class="eyebrow">Elementos del módulo</p><h2>Selecciona el elemento que quieres editar</h2><p>Cada tarjeta abre su contenido técnico, referencia visual y videos.</p></div><span>${items.length} elementos</span></div><div class="admin-item-list">${items.map((item, index) => { const view = displayItem(section.id, item); const direct = itemVideo(section.id, item[0]); const selected = assignedVideos('item', section.id, item[0]); const published = selected.some(video => video.youtubeId && video.status === 'published') || (direct?.youtubeId && direct.status === 'published'); const count = selected.length + (direct ? 1 : 0); return `<button type="button" class="admin-item-row" data-item-open="${escapeHtml(item[0])}" data-visible="${view.visible}"><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(view.title)}</strong><small>${escapeHtml(view.requirement || part.purpose)}</small></div><em>${published ? `${count} video${count === 1 ? '' : 's'} vinculado${count === 1 ? '' : 's'}` : 'Video próximamente'}</em><b aria-hidden="true">Editar →</b></button>`; }).join('')}</div></section>`;
  }
  function itemEditorPanel(section, part, item) {
    const view = displayItem(section.id, item);
    const custom = itemCustom(section.id, item[0]);
    return `<section class="admin-page admin-item-editor-page"><button type="button" class="admin-back-button" data-item-close>← Volver a ${escapeHtml(part.title)}</button><header><p class="eyebrow">Elemento · ${escapeHtml(section.title)} › ${escapeHtml(part.title)}</p><h1>${escapeHtml(view.title)}</h1><p>Edita únicamente este elemento. Los campos vacíos conservan la información original del sitio.</p></header><form class="admin-item-editor" id="admin-item-editor"><section><p class="eyebrow">Contenido técnico</p><label>Nombre del elemento<input data-item-title value="${escapeHtml(custom.title || '')}" placeholder="${escapeHtml(item[1])}"></label><label>Clasificación o requisito<input data-item-requirement value="${escapeHtml(custom.requirement || '')}" placeholder="${escapeHtml(item[2] || '')}"></label><label>¿Para qué sirve?<textarea data-item-purpose rows="4" placeholder="${escapeHtml(item[4] || '')}">${escapeHtml(custom.purpose || '')}</textarea></label><label>¿Cómo elegirlo o prepararlo?<textarea data-item-preparation rows="6" placeholder="${escapeHtml(item[5] || '')}">${escapeHtml(custom.preparation || '')}</textarea></label><label>¿Qué comprobar antes de marcarlo?<textarea data-item-check rows="5" placeholder="${escapeHtml(item[6] || '')}">${escapeHtml(custom.check || '')}</textarea></label></section><section><p class="eyebrow">Imagen y publicación</p><label>Ruta de imagen o icono<input data-item-image value="${escapeHtml(custom.image || '')}" placeholder="assets/…"></label><small>Usa una ruta dentro de la carpeta del sitio, por ejemplo <code>assets/tropa-item-icons/sc-saco-dormir.png</code>.</small><label class="admin-switch"><input type="checkbox" data-item-visible ${view.visible ? 'checked' : ''}> Mostrar este elemento en el sitio</label><div class="admin-item-library-box"><div><strong>Videos de la biblioteca</strong><small>Los videos activos aparecen aquí. Puedes quitarlos o abrir la biblioteca para cambiar la selección.</small></div><button type="button" class="primary" data-video-picker-item="${escapeHtml(item[0])}">Seleccionar videos</button>${assignedVideoPreview('item', section.id, item[0])}</div></section><div class="admin-part-actions"><button class="primary" type="submit">Guardar elemento</button><button class="secondary" type="button" data-item-reset>Restaurar este elemento</button></div></form></section>`;
  }
  function videoRow(video) {
    const thumb = video.youtubeId ? `https://i.ytimg.com/vi/${encodeURIComponent(video.youtubeId)}/mqdefault.jpg` : '';
    return `<article class="admin-video-row" data-admin-video="${escapeHtml(video.id)}">${thumb ? `<img src="${thumb}" alt="">` : '<span class="admin-video-placeholder">▶</span>'}<div class="admin-video-fields"><label>Título<input data-video-title maxlength="150" value="${escapeHtml(video.title || '')}"></label><div><label>Enlace de YouTube o ID<input data-video-youtube value="${escapeHtml(video.youtubeId || '')}" placeholder="https://www.youtube.com/watch?v=…"></label><label>Tema<input data-video-topic maxlength="80" value="${escapeHtml(video.topic || '')}"></label></div><div><label>Ubicación<select data-video-placement>${placementOptions(video.placement)}</select></label><label>Estado<select data-video-status>${videoStatusOptions(video.status || 'published')}</select></label></div></div><div class="admin-video-actions"><button type="button" class="secondary" data-video-save>Guardar</button><button type="button" class="admin-danger" data-video-delete>Eliminar</button></div></article>`;
  }
  function videosPanel() {
    const query = videoQuery.trim().toLocaleLowerCase('es');
    const list = videos().filter(video => !query || `${video.title} ${video.topic} ${video.youtubeId} ${video.placement}`.toLocaleLowerCase('es').includes(query));
    return `<section class="admin-page"><header><p class="eyebrow">Biblioteca audiovisual completa</p><h1>Videos y ubicaciones</h1><p>Registra aquí los videos y después selecciónalos desde cualquier sección o elemento.</p></header><form class="admin-video-register" id="admin-video-register"><div><p class="eyebrow">Registrar un video</p><h2>Agregar a la biblioteca</h2><p>Puedes pegar el enlace normal de YouTube o solamente su ID.</p></div><label>Título del video<input data-new-video-title maxlength="150" required placeholder="Ej. Cómo preparar la mochila"></label><label>Enlace de YouTube o ID<input data-new-video-youtube placeholder="https://www.youtube.com/watch?v=…"></label><label>Estado<select data-new-video-status>${videoStatusOptions('soon')}</select></label><small>Si el video aún no existe, deja el enlace vacío y conserva “Próximamente”.</small><button type="submit" class="primary">Registrar video</button></form><section class="admin-video-toolbar"><input type="search" data-video-search value="${escapeHtml(videoQuery)}" placeholder="Buscar video, tema o sección…"></section><div class="admin-video-list">${list.length ? list.map(videoRow).join('') : '<p class="admin-empty">No encontramos videos con esa búsqueda.</p>'}</div></section>`;
  }
  function videoPickerPanel() {
    if (!videoPickerTarget) return '';
    const { kind, sectionId, itemId = '', title } = videoPickerTarget;
    const selected = new Set(assignedIds(kind, sectionId, itemId));
    const catalog = videos();
    return `<div class="admin-picker-backdrop" role="presentation"><section class="admin-video-picker" role="dialog" aria-modal="true" aria-labelledby="admin-video-picker-title"><header><div><p class="eyebrow">Biblioteca de videos</p><h2 id="admin-video-picker-title">Seleccionar para ${escapeHtml(title)}</h2><p>Marca todos los videos que quieras mostrar. Puedes vincular más de uno.</p></div><button type="button" class="admin-picker-close" data-video-picker-cancel aria-label="Cerrar">×</button></header><div class="admin-picker-grid">${catalog.length ? catalog.map(video => `<label class="admin-picker-card"><input type="checkbox" data-video-picker-check="${escapeHtml(video.id)}" ${selected.has(video.id) ? 'checked' : ''}><span class="admin-picker-thumb">${video.youtubeId ? `<img src="https://i.ytimg.com/vi/${encodeURIComponent(video.youtubeId)}/mqdefault.jpg" alt="">` : '<b>▶</b>'}<em>${escapeHtml(video.status === 'published' ? 'Publicado' : video.status === 'soon' ? 'Próximamente' : video.status === 'hidden' ? 'Oculto' : 'Borrador')}</em></span><span class="admin-picker-copy"><strong>${escapeHtml(video.title || 'Video sin título')}</strong><small>${escapeHtml(video.topic || 'Sin tema')}</small></span></label>`).join('') : '<p class="admin-empty">La biblioteca está vacía. Registra tu primer video.</p>'}</div><footer><button type="button" class="secondary" data-video-picker-new>+ Registrar un video</button><span></span><button type="button" class="secondary" data-video-picker-cancel>Cancelar</button><button type="button" class="primary" data-video-picker-apply>Agregar seleccionados</button></footer></section></div>`;
  }
  function contentPanel() {
    return `<section class="admin-page"><header><p class="eyebrow">Edición editorial</p><h1>Contenidos principales</h1><p>Estos campos modifican los textos de la portada. Si dejas un campo vacío, se conserva el texto original.</p></header><form class="admin-content-form" id="admin-content-form">${CONTENT_FIELDS.map(([key, label, fallback]) => `<label>${escapeHtml(label)}${key.endsWith('.description') ? `<textarea data-content-key="${key}" rows="3" placeholder="${escapeHtml(fallback)}">${escapeHtml(state.content[key] || '')}</textarea>` : `<input data-content-key="${key}" value="${escapeHtml(state.content[key] || '')}" placeholder="${escapeHtml(fallback)}">`}</label>`).join('')}<div class="admin-form-actions"><button class="primary" type="submit">Guardar contenidos</button><button class="secondary" type="button" data-content-reset>Restaurar textos originales</button></div></form></section>`;
  }
  function panel() {
    if (currentTab === 'secciones') {
      const section = SECTIONS.find(item => item.id === editingSectionId);
      const part = section?.parts.find(item => item.id === editingPartId);
      const partIndex = section && part ? section.parts.indexOf(part) : -1;
      const item = section && part ? itemsForPart(section, part, partIndex).find(entry => entry[0] === editingItemId) : null;
      if (section && part && item) return itemEditorPanel(section, part, item);
      if (section && part) return modulePanel(section, part);
      if (section) return sectionEditorPanel(section);
      if (selectedAreaId) return areaPanel(areaById(selectedAreaId));
      return sectionsPanel();
    }
    if (currentTab === 'videos') return videosPanel();
    if (currentTab === 'contenidos') return contentPanel();
    return summaryPanel();
  }
  function renderAdmin() {
    if (!isAdminSession()) { loginPage(); return; }
    app.innerHTML = `<main id="main" class="admin-shell">${nav()}<div class="admin-workspace">${panel()}</div>${videoPickerPanel()}</main>`;
    bindAdmin();
    window.scrollTo(0, 0);
  }
  function bindAdmin() {
    document.querySelectorAll('[data-admin-tab],[data-admin-go]').forEach(button => button.onclick = () => { currentTab = button.dataset.adminTab || button.dataset.adminGo; selectedAreaId = ''; editingSectionId = ''; editingPartId = ''; editingItemId = ''; renderAdmin(); });
    document.querySelector('[data-admin-logout]').onclick = () => { sessionStorage.removeItem(SESSION_KEY); loginPage(); };
    document.querySelector('[data-admin-export]')?.addEventListener('click', exportState);
    document.querySelectorAll('[data-admin-export-ftp]').forEach(button => button.onclick = exportFtpState);
    document.querySelector('[data-admin-import]').onchange = importState;
    document.querySelectorAll('[data-area-open]').forEach(button => button.onclick = () => { selectedAreaId = button.dataset.areaOpen; renderAdmin(); });
    document.querySelector('[data-area-close]')?.addEventListener('click', () => { selectedAreaId = ''; renderAdmin(); });
    document.querySelectorAll('[data-section-edit]').forEach(button => button.onclick = () => { editingSectionId = button.dataset.sectionEdit; editingPartId = ''; editingItemId = ''; renderAdmin(); });
    const closeSection = document.querySelector('[data-section-close]');
    if (closeSection) closeSection.onclick = () => { editingSectionId = ''; editingPartId = ''; editingItemId = ''; renderAdmin(); };
    document.querySelectorAll('[data-part-open]').forEach(button => button.onclick = () => { editingPartId = button.dataset.partOpen; editingItemId = ''; renderAdmin(); });
    document.querySelector('[data-part-close]')?.addEventListener('click', () => { editingPartId = ''; editingItemId = ''; renderAdmin(); });
    document.querySelectorAll('[data-item-open]').forEach(button => button.onclick = () => { editingItemId = button.dataset.itemOpen; renderAdmin(); });
    document.querySelector('[data-item-close]')?.addEventListener('click', () => { editingItemId = ''; renderAdmin(); });
    document.querySelector('[data-video-picker-section]')?.addEventListener('click', buttonEvent => {
      const section = SECTIONS.find(item => item.id === buttonEvent.currentTarget.dataset.videoPickerSection);
      videoPickerTarget = { kind: 'section', sectionId: section.id, title: section.title };
      renderAdmin();
    });
    document.querySelector('[data-video-picker-item]')?.addEventListener('click', buttonEvent => {
      const section = SECTIONS.find(item => item.id === editingSectionId);
      const part = section?.parts.find(item => item.id === editingPartId);
      const item = section && part ? itemsForPart(section, part, section.parts.indexOf(part)).find(entry => entry[0] === buttonEvent.currentTarget.dataset.videoPickerItem) : null;
      if (!section || !item) return;
      videoPickerTarget = { kind: 'item', sectionId: section.id, itemId: item[0], title: item[1] };
      renderAdmin();
    });
    document.querySelectorAll('[data-video-picker-cancel]').forEach(button => button.onclick = () => { videoPickerTarget = null; renderAdmin(); });
    document.querySelector('[data-video-picker-apply]')?.addEventListener('click', () => {
      if (!videoPickerTarget) return;
      const { kind, sectionId, itemId = '' } = videoPickerTarget;
      const selected = [...document.querySelectorAll('[data-video-picker-check]:checked')].map(input => input.dataset.videoPickerCheck);
      const key = assignmentKey(kind, sectionId, itemId);
      state.videoAssignments[key] = selected;
      save();
      videoPickerTarget = null;
      renderAdmin();
      notifyAdmin(selected.length ? `${selected.length} video${selected.length === 1 ? '' : 's'} vinculado${selected.length === 1 ? '' : 's'}.` : 'Se retiraron los videos vinculados.');
    });
    document.querySelectorAll('[data-video-unassign-id]').forEach(button => button.onclick = () => {
      const { videoUnassignId: id, videoUnassignKind: kind, videoUnassignSection: sectionId, videoUnassignItem: itemId = '' } = button.dataset;
      state.videoAssignments[assignmentKey(kind, sectionId, itemId)] = assignedIds(kind, sectionId, itemId).filter(videoId => videoId !== id);
      save(); renderAdmin(); notifyAdmin('El video se quitó de este elemento. Sigue disponible en la biblioteca.');
    });
    document.querySelector('[data-video-picker-new]')?.addEventListener('click', () => {
      videoPickerTarget = null; currentTab = 'videos'; videoQuery = ''; renderAdmin();
    });
    const sectionForm = document.querySelector('#admin-section-settings');
    if (sectionForm) sectionForm.onsubmit = event => {
      event.preventDefault();
      const section = SECTIONS.find(item => item.id === editingSectionId);
      state.sections[section.id] = { status: sectionForm.querySelector('[data-section-status]').value, message: sectionForm.querySelector('[data-section-message]').value.trim() };
      const title = sectionForm.querySelector('[data-section-title]').value.trim();
      const description = sectionForm.querySelector('[data-section-description]').value.trim();
      if (title || description) state.sectionContent[section.id] = { title, description }; else delete state.sectionContent[section.id];
      save(); notifyAdmin('Sección guardada.'); renderAdmin();
    };
    const moduleForm = document.querySelector('#admin-module-settings');
    if (moduleForm) moduleForm.onsubmit = event => {
      event.preventDefault();
      const section = SECTIONS.find(item => item.id === editingSectionId);
      const part = section.parts.find(item => item.id === editingPartId);
      const title = moduleForm.querySelector('[data-part-title]').value.trim();
      const content = moduleForm.querySelector('[data-part-copy]').value.trim();
      if (!state.partContent[section.id]) state.partContent[section.id] = {};
      if (title || content) state.partContent[section.id][part.id] = { title, content }; else delete state.partContent[section.id][part.id];
      save(); notifyAdmin('Módulo guardado.'); renderAdmin();
    };
    document.querySelector('[data-part-reset]')?.addEventListener('click', () => {
      if (!window.confirm('¿Restaurar el contenido de este módulo?')) return;
      if (state.partContent[editingSectionId]) delete state.partContent[editingSectionId][editingPartId];
      save(); renderAdmin();
    });
    const itemForm = document.querySelector('#admin-item-editor');
    if (itemForm) itemForm.onsubmit = event => {
      event.preventDefault();
      const section = SECTIONS.find(item => item.id === editingSectionId);
      const part = section.parts.find(item => item.id === editingPartId);
      const item = itemsForPart(section, part, section.parts.indexOf(part)).find(entry => entry[0] === editingItemId);
      const value = selector => itemForm.querySelector(selector).value.trim();
      const custom = {
        title: value('[data-item-title]'), requirement: value('[data-item-requirement]'), purpose: value('[data-item-purpose]'),
        preparation: value('[data-item-preparation]'), check: value('[data-item-check]'), image: value('[data-item-image]'),
        visible: itemForm.querySelector('[data-item-visible]').checked
      };
      if (!state.itemContent[section.id]) state.itemContent[section.id] = {};
      const hasContent = Object.entries(custom).some(([key, entry]) => key === 'visible' ? entry === false : Boolean(entry));
      if (hasContent) state.itemContent[section.id][item[0]] = custom; else delete state.itemContent[section.id][item[0]];
      save(); notifyAdmin('Elemento guardado.'); renderAdmin();
    };
    document.querySelector('[data-item-reset]')?.addEventListener('click', () => {
      if (!window.confirm('¿Restaurar el contenido y el video de este elemento?')) return;
      if (state.itemContent[editingSectionId]) delete state.itemContent[editingSectionId][editingItemId];
      state.videos = state.videos.filter(video => !(video.sectionId === editingSectionId && video.itemId === editingItemId));
      delete state.videoAssignments[assignmentKey('item', editingSectionId, editingItemId)];
      save(); renderAdmin();
    });
    const search = document.querySelector('[data-video-search]');
    if (search) search.oninput = event => { videoQuery = event.target.value; window.clearTimeout(search._timer); search._timer = window.setTimeout(renderAdmin, 180); };
    const registerVideo = document.querySelector('#admin-video-register');
    if (registerVideo) registerVideo.onsubmit = event => {
      event.preventDefault();
      const title = registerVideo.querySelector('[data-new-video-title]').value.trim();
      const rawYoutube = registerVideo.querySelector('[data-new-video-youtube]').value.trim();
      const youtubeId = youtubeIdFrom(rawYoutube);
      const status = registerVideo.querySelector('[data-new-video-status]').value;
      if (rawYoutube && !youtubeId) { notifyAdmin('El enlace o ID de YouTube no es válido.'); return; }
      if (!youtubeId && status === 'published') { notifyAdmin('Un video publicado necesita un enlace de YouTube.'); return; }
      const item = { id: `custom-${Date.now()}`, youtubeId, title, topic: 'Tutorial', placement: 'coche', status, custom: true };
      state.videos.unshift(item); save(); videoQuery = ''; renderAdmin(); notifyAdmin('Video registrado en la biblioteca.');
    };
    document.querySelectorAll('[data-admin-video]').forEach(row => {
      const id = row.dataset.adminVideo;
      row.querySelector('[data-video-save]').onclick = () => {
        const original = videos().find(video => video.id === id) || { id };
        const rawYoutube = row.querySelector('[data-video-youtube]').value.trim();
        const youtubeId = youtubeIdFrom(rawYoutube);
        if (rawYoutube && !youtubeId) { notifyAdmin('El enlace o ID de YouTube no es válido.'); return; }
        const updated = { ...original, title: row.querySelector('[data-video-title]').value.trim(), youtubeId, topic: row.querySelector('[data-video-topic]').value.trim(), placement: row.querySelector('[data-video-placement]').value, status: row.querySelector('[data-video-status]').value };
        if (!youtubeId && updated.status === 'published') { notifyAdmin('Un video publicado necesita un enlace de YouTube.'); return; }
        const index = state.videos.findIndex(video => video.id === id);
        if (index >= 0) state.videos[index] = updated; else state.videos.push(updated);
        save(); notifyAdmin('Video guardado.'); renderAdmin();
      };
      const remove = row.querySelector('[data-video-delete]');
      if (remove) remove.onclick = () => {
        if (!window.confirm('¿Eliminar este video de la biblioteca y retirarlo del sitio publicado?')) return;
        const original = videos().find(video => video.id === id);
        state.videos = state.videos.filter(video => video.id !== id);
        if (original && !original.custom) state.videos.push({ ...original, status: 'hidden', deleted: true });
        Object.keys(state.videoAssignments).forEach(key => { state.videoAssignments[key] = state.videoAssignments[key].filter(videoId => videoId !== id); if (!state.videoAssignments[key].length) delete state.videoAssignments[key]; });
        save(); notifyAdmin('Video eliminado de la biblioteca y del sitio.'); renderAdmin();
      };
    });
    const form = document.querySelector('#admin-content-form');
    if (form) form.onsubmit = event => {
      event.preventDefault();
      form.querySelectorAll('[data-content-key]').forEach(field => { const value = field.value.trim(); if (value) state.content[field.dataset.contentKey] = value; else delete state.content[field.dataset.contentKey]; });
      save(); notifyAdmin('Contenidos guardados.');
    };
    const reset = document.querySelector('[data-content-reset]');
    if (reset) reset.onclick = () => { if (window.confirm('¿Restaurar los textos originales de la portada?')) { state.content = {}; save(); renderAdmin(); } };
  }
  function notifyAdmin(message) {
    const notice = document.querySelector('#notice');
    if (!notice) return;
    notice.textContent = message; notice.classList.add('show');
    window.setTimeout(() => notice.classList.remove('show'), 2200);
  }
  function exportState() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); link.download = `lobatos-admin-${new Date().toISOString().slice(0, 10)}.json`; link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }
  function exportFtpState() {
    const published = {
      schema: 1,
      version: VERSION,
      updatedAt: new Date().toISOString(),
      sections: state.sections,
      content: state.content,
      sectionContent: state.sectionContent,
      partContent: state.partContent,
      itemContent: state.itemContent,
      videoAssignments: state.videoAssignments,
      videos: state.videos
    };
    const blob = new Blob([JSON.stringify(published, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); link.download = 'contenido-sitio.json'; link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    notifyAdmin('Archivo FTP preparado: súbelo a la carpeta data del sitio.');
  }
  function importState(event) {
    const file = event.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (imported.schema !== 1 || !imported.sections || !Array.isArray(imported.videos)) throw new Error('Formato inválido');
        state = { ...defaultState(), ...imported, sections: { ...defaultState().sections, ...imported.sections }, sectionContent: imported.sectionContent || {}, partContent: imported.partContent || {}, itemContent: imported.itemContent || {}, videoAssignments: imported.videoAssignments || {} };
        save(); notifyAdmin('Respaldo importado.'); renderAdmin();
      } catch { notifyAdmin('No se pudo importar: el archivo no es un respaldo válido.'); }
    };
    reader.readAsText(file);
  }
  function renderLocked(hash) {
    const info = publicSectionStatus(hash);
    if (!info) return false;
    const labels = STATUS[info.status] || STATUS.locked;
    const message = info.message || (info.status === 'soon' ? 'Estamos preparando esta sección para publicarla próximamente.' : 'Esta sección está temporalmente bloqueada por el administrador.');
    app.innerHTML = `<main id="main" class="admin-public-lock"><section><img src="assets/logo.png" alt="Lobatos Acampando"><p class="eyebrow">${escapeHtml(labels[0])}</p><h1>${escapeHtml(info.section.title)}</h1><p>${escapeHtml(message)}</p><a class="primary" href="${info.section.route.startsWith('#scout/') ? '#scout' : '#inicio'}">← Volver al menú</a></section></main>`;
    return true;
  }
  function canNavigate(hash) {
    const info = publicSectionStatus(hash);
    return !info || info.status === 'published';
  }
  function decorateSections(root = document) {
    root.querySelectorAll?.('a[href^="#"],button[data-camp]').forEach(element => {
      if (element.closest('.admin-shell')) return;
      const route = routeFromElement(element); const info = publicSectionStatus(route);
      if (!info) return;
      element.hidden = info.status === 'hidden';
      element.dataset.adminPublicStatus = info.status;
      let badge = element.querySelector('.admin-public-badge');
      if (info.status === 'soon' || info.status === 'locked') {
        if (!badge) { badge = document.createElement('em'); badge.className = 'admin-public-badge'; element.appendChild(badge); }
        badge.textContent = STATUS[info.status][0];
      } else badge?.remove();
    });
  }
  function normalized(value) { return String(value || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('es'); }
  function findPartHeading(title) {
    const wanted = normalized(title);
    return [...document.querySelectorAll('main h2,main h3,main summary strong,main .card-title,main [data-admin-original-title]')].find(node => normalized(node.dataset.adminOriginalTitle || node.textContent) === wanted);
  }
  function decorateContent() {
    const section = sectionForHash(location.hash); if (!section) return;
    const custom = state.sectionContent[section.id] || {};
    const heading = document.querySelector('main h1');
    if (heading && custom.title && heading.textContent !== custom.title) heading.textContent = custom.title;
    if (custom.description && section.id !== 'scout') {
      const intro = heading?.nextElementSibling;
      if (intro?.matches('p') && intro.textContent !== custom.description) intro.textContent = custom.description;
    }
    section.parts.forEach(part => {
      const override = state.partContent[section.id]?.[part.id]; if (!override) return;
      const partHeading = findPartHeading(part.title); if (!partHeading) return;
      if (!partHeading.dataset.adminOriginalTitle) partHeading.dataset.adminOriginalTitle = part.title;
      if (override.title && partHeading.textContent !== override.title) partHeading.textContent = override.title;
      let copy = partHeading.parentElement?.querySelector(':scope > .admin-content-override');
      if (override.content) {
        if (!copy) { copy = document.createElement('p'); copy.className = 'admin-content-override'; partHeading.insertAdjacentElement('afterend', copy); }
        if (copy.textContent !== override.content) copy.textContent = override.content;
      } else copy?.remove();
    });
  }
  function itemHost(itemId) {
    return document.querySelector(`[data-tropa-camp-card="${CSS.escape(itemId)}"]`)
      || document.querySelector(`[data-manada-check="${CSS.escape(itemId)}"]`)?.closest('article')
      || document.querySelector(`[data-check="${CSS.escape(itemId)}"]`)?.closest('.item');
  }
  function syncItemOverrides() {
    const catalog = window.LOBATOS_ADMIN_CATALOG || {};
    Object.values(catalog).flatMap(groups => groups.flatMap(([, items]) => items)).forEach(item => {
      if (!originalItems.has(item[0])) originalItems.set(item[0], item.slice());
      const original = originalItems.get(item[0]);
      for (let index = 1; index <= 6; index += 1) item[index] = original[index];
    });
    Object.entries(state.itemContent || {}).forEach(([sectionId, entries]) => {
      const groups = catalog[sectionId] || [];
      Object.entries(entries || {}).forEach(([itemId, custom]) => {
        const item = groups.flatMap(([, items]) => items).find(entry => entry[0] === itemId);
        if (!item) return;
        if (custom.title) item[1] = custom.title;
        if (custom.requirement) item[2] = custom.requirement;
        if (custom.purpose) item[4] = custom.purpose;
        if (custom.preparation) item[5] = custom.preparation;
        if (custom.check) item[6] = custom.check;
      });
    });
  }
  function decorateItems() {
    const section = sectionForHash(location.hash); if (!section) return;
    syncItemOverrides();
    Object.entries(state.itemContent[section.id] || {}).forEach(([itemId, custom]) => {
      const host = itemHost(itemId); if (!host) return;
      host.hidden = custom.visible === false;
      const title = host.querySelector('strong'); if (title && custom.title) title.textContent = custom.title;
      const image = host.querySelector('img.manada-item-art,img.tropa-item-art');
      if (image && custom.image) image.src = custom.image;
      const paragraphs = host.querySelectorAll('.tropa-camp-help-body section > p,.manada-parent-help > div > p');
      if (paragraphs[0] && custom.purpose) paragraphs[0].textContent = custom.purpose;
      if (paragraphs[1] && custom.preparation) paragraphs[1].textContent = custom.preparation;
      if (paragraphs[2] && custom.check) paragraphs[2].textContent = custom.check;
    });
    const itemIds = new Set([
      ...allSectionItems(section).map(item => item[0]),
      ...state.videos.filter(video => video.sectionId === section.id && video.itemId).map(video => video.itemId)
    ]);
    itemIds.forEach(itemId => {
      const selected = assignedVideos('item', section.id, itemId).filter(video => ['published', 'soon'].includes(video.status));
      const direct = state.videos.filter(video => video.sectionId === section.id && video.itemId === itemId && ['published', 'soon'].includes(video.status) && (video.youtubeId || !selected.length));
      const list = [...new Map([...selected, ...direct].map(video => [video.id, video])).values()];
      if (!list.length) return;
      const host = itemHost(itemId); if (!host) return;
      const current = host.querySelector('.tropa-camp-video,.manada-item-video,[data-admin-item-video]');
      const markup = `<div class="admin-item-video-list">${list.map(managedVideoCard).join('')}</div>`;
      if (current?.dataset?.adminItemVideo) { if (current.innerHTML !== markup) current.innerHTML = markup; return; }
      const wrapper = document.createElement('div'); wrapper.dataset.adminItemVideo = itemId; wrapper.innerHTML = markup;
      if (current) current.replaceWith(wrapper); else host.appendChild(wrapper);
    });
  }
  function savedVideoByYoutube(id) { return state.videos.find(video => video.youtubeId && video.youtubeId === id); }
  function currentPlacement() {
    return location.hash.replace(/^#/, '').split('?')[0] || 'inicio';
  }
  function placementMatches(placement, current) { return current === placement || current.startsWith(`${placement}/`); }
  function managedVideoCard(video) {
    if (video.status === 'soon' || !video.youtubeId) return `<article class="admin-part-video admin-part-video-soon"><span>Video</span><strong>${escapeHtml(video.title || 'Tutorial')}</strong><b>Próximamente</b></article>`;
    return `<button class="video-card video-card-play admin-part-video" type="button" data-admin-video-play="${escapeHtml(video.youtubeId)}" data-admin-video-title="${escapeHtml(video.title)}"><img class="video-thumb" src="https://i.ytimg.com/vi/${escapeHtml(video.youtubeId)}/hqdefault.jpg" alt="Miniatura del video: ${escapeHtml(video.title)}"><span>${escapeHtml(video.topic || 'Tutorial')}</span><strong>${escapeHtml(video.title)}</strong><b>Reproducir aquí ▶</b></button>`;
  }
  function decorateVideos(root = document) {
    if (location.hash.startsWith('#administrador')) return;
    const current = currentPlacement();
    root.querySelectorAll?.('[data-youtube-id],[data-resource-video-id]').forEach(card => {
      const youtubeId = card.dataset.youtubeId || card.dataset.resourceVideoId;
      const override = savedVideoByYoutube(youtubeId); if (!override) return;
      const allowed = placementMatches(override.placement, current);
      card.hidden = !allowed || override.status === 'hidden' || override.status === 'draft';
      card.disabled = override.status === 'soon';
      const title = card.querySelector('strong'); if (title && override.title) title.textContent = override.title;
      if (card.dataset.youtubeTitle !== undefined) card.dataset.youtubeTitle = override.title;
      if (card.dataset.resourceVideoTitle !== undefined) card.dataset.resourceVideoTitle = override.title;
      card.dataset.adminVideoStatus = override.status;
    });
    const currentSection = sectionForHash(location.hash);
    state.videos.filter(video => video.custom && video.sectionId === currentSection?.id && video.partId && ['published', 'soon'].includes(video.status)).forEach(video => {
      if (document.querySelector(`[data-admin-part-video="${CSS.escape(video.id)}"]`)) return;
      const part = currentSection.parts.find(item => item.id === video.partId);
      const heading = part ? findPartHeading(part.title) : null;
      const host = heading?.closest('section,article,details,.panel') || heading?.parentElement; if (!host) return;
      const wrapper = document.createElement('div'); wrapper.dataset.adminPartVideo = video.id; wrapper.innerHTML = managedVideoCard(video); host.appendChild(wrapper);
    });
    const assigned = currentSection ? assignedVideos('section', currentSection.id).filter(video => ['published', 'soon'].includes(video.status)) : [];
    const additions = state.videos.filter(video => video.custom && !video.partId && !video.itemId && video.status === 'published' && placementMatches(video.placement, current));
    const sectionVideos = [...new Map([...assigned, ...additions].map(video => [video.id, video])).values()];
    if (!sectionVideos.length || document.querySelector('.admin-managed-videos')) return;
    const host = document.querySelector('#content') || document.querySelector('main .container') || document.querySelector('main');
    if (!host) return;
    const section = document.createElement('section'); section.className = 'panel video-panel admin-managed-videos';
    section.innerHTML = `<p class="eyebrow">Videos seleccionados para esta sección</p><h2>Míralo en nuestro canal</h2><div class="video-grid">${sectionVideos.map(managedVideoCard).join('')}</div>`;
    host.appendChild(section);
  }
  function decorate() { if (location.hash.startsWith('#administrador')) return; syncItemOverrides(); decorateSections(); decorateContent(); decorateItems(); decorateVideos(); }
  function decorateSoon() {
    if (scheduled) return; scheduled = true;
    requestAnimationFrame(() => { scheduled = false; decorate(); });
  }
  document.addEventListener('click', event => {
    const adminVideo = event.target.closest('[data-admin-video-play]');
    if (adminVideo) {
      const id = adminVideo.dataset.adminVideoPlay, title = adminVideo.dataset.adminVideoTitle;
      if (typeof modal === 'function') modal(`<p class="eyebrow">Acampando en Familia · Video</p><h2>${escapeHtml(title)}</h2><div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(id)}?autoplay=1" title="${escapeHtml(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a class="secondary" href="https://youtu.be/${escapeHtml(id)}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></p>`);
      return;
    }
    const target = event.target.closest('a[href^="#"],button[data-camp]');
    if (!target || target.closest('.admin-shell') || location.hash.startsWith('#administrador')) return;
    const route = routeFromElement(target); const info = publicSectionStatus(route);
    if (!info || info.status === 'published') return;
    event.preventDefault(); event.stopImmediatePropagation(); renderLocked(route);
  }, true);
  new MutationObserver(decorateSoon).observe(document.querySelector('#app'), { childList: true, subtree: true });

  function publicItemVideoTuples(sectionId, itemId, fallback = []) {
    if (!hasExplicitAssignment('item', sectionId, itemId)) return fallback;
    return assignedVideos('item', sectionId, itemId).filter(video => ['published', 'soon'].includes(video.status)).map(video => [video.youtubeId || null, video.title, video.status === 'published' ? 'Video publicado' : 'Próximamente']);
  }
  function sectionText(sectionId, field, fallback = '') { return state.sectionContent[sectionId]?.[field] || fallback; }
  window.LOBATOS_ADMIN = { VERSION, text, sectionText, renderAdmin, renderLocked, canNavigate, decorate, itemVideoTuples: publicItemVideoTuples, getState: () => state };
  window.setTimeout(loadPublishedContent, 0);
}());
