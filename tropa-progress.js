/* Aventuras en la Naturaleza · Tropa
   Adaptación de seguimiento del Carnet 2024. El registro es local y la dirigencia valida el avance. */
const TROPA_PROGRESS_KEY = 'lobatos-acampando-tropa-aventuras-v1';
const TROPA_PDF = 'assets/carnet-aventuras-tropa-2024.pdf';

const TROPA_TERRITORIES = [
  {
    id: 'ajolote', name: 'Ajolote de Xochimilco', short: 'Ajolote', label: 'Técnica inicial', color: '#f3ce16', badge: 'assets/tropa-ajolote.png', pages: '17–35',
    intro: 'El recorrido inicia aquí. Practica las bases de cabuyería, campismo y exploración para resolver situaciones junto con tu Patrulla.',
    tracks: [
      { id: 'cabuyeria', icon: '🪢', name: 'Cabuyería', page: 17, subtitle: 'Nudos, amarres y cuidado de cuerdas',
        practice: ['Reconoce el material y revisa que la cuerda no esté dañada.', 'Practica cada nudo hasta hacerlo sin depender de una muestra.', 'Explica su función y úsalo solamente en una tarea adecuada.', 'Pide a tu Guía de Patrulla o Scouter que revise el resultado antes de cargar o tensar.'],
        caution: 'Los nudos de práctica no sustituyen sistemas certificados para escalada, rescate o soporte de personas.',
        items: [
          ['ajo-cab-1','Distingo los tipos de cuerdas, sus partes, cuidados y formas correctas de enrollarlas.','Cuerdas: tipos, cuidado y enrollado'],
          ['ajo-cab-2','Realizo nudos de unión, tope y anclaje, y explico para qué sirve cada uno.','Nudos básicos y su utilidad'],
          ['ajo-cab-3','Realizo los amarres cuadrado, diagonal, redondo y paralelo redondo de forma firme y ordenada.','Amarres para construcciones'],
          ['ajo-cab-4','Elijo el nudo o amarre por su función y compruebo que quedó seguro antes de usarlo.','Cómo revisar un nudo o amarre']
        ]},
      { id: 'campismo', icon: '⛺', name: 'Campismo', page: 23, subtitle: 'Refugio, fuego y meteorología',
        practice: ['Ensaya el montaje en un sitio permitido antes de la salida.', 'Revisa todas las piezas y deja secar el equipo antes de guardarlo.', 'Para cualquier práctica con fuego sigue las reglas del lugar y trabaja bajo supervisión.', 'Consulta el pronóstico y continúa observando el cielo durante la actividad.'],
        caution: 'Las restricciones de fuego, acceso y campamento cambian por lugar y temporada; la indicación de la autoridad y de tus Scouters tiene prioridad.',
        items: [
          ['ajo-cam-1','Conozco los diferentes tipos de casa de campaña, su uso, mantenimiento y cuidado.','Elegir, montar y cuidar una tienda'],
          ['ajo-cam-2','Comprendo cómo se crea y mantiene el fuego, y construyo una fogata con las medidas de seguridad correspondientes.','Fuego responsable y fogata segura'],
          ['ajo-cam-3','Identifico diferentes tipos de clima y sé cómo prepararme para ellos.','Preparación según el tiempo'],
          ['ajo-cam-4','Reconozco instrumentos meteorológicos, los utilizo e interpreto para ayudar a proteger el campamento.','Instrumentos y observación meteorológica']
        ]},
      { id: 'exploracion', icon: '🧭', name: 'Exploración', page: 31, subtitle: 'Equipo, comunicación y orientación',
        practice: ['Prepara tu equipo de bolsillo y mochila según la actividad.', 'Practica mensajes breves: quién eres, dónde estás, qué ocurrió y qué ayuda necesitas.', 'Ensaya claves y señales con tu Patrulla hasta que todos las comprendan.', 'Usa brújula y mapa en ejercicios conocidos antes de una ruta real.'],
        caution: 'Las señales naturales son referencias, no sustituyen mapa, brújula, ruta acordada ni las indicaciones de la dirigencia.',
        items: [
          ['ajo-exp-1','Preparo y cuido mi equipo de bolsillo y mi mochila para una excursión.','Equipo personal para explorar'],
          ['ajo-exp-2','Comunico correctamente una situación de emergencia y sigo las señales de mi Tropa.','Comunicación y señales Scouts'],
          ['ajo-exp-3','Uso claves sencillas para intercambiar mensajes claros con mi Patrulla.','Claves para comenzar'],
          ['ajo-exp-4','Uso la rosa de los vientos, los puntos cardinales y la brújula para obtener un rumbo.','Brújula, rumbo y orientación'],
          ['ajo-exp-5','Reconozco pistas de ruta y participo en un recorrido sin separarme de mi Patrulla.','Pistas y recorrido seguro']
        ]}
    ]
  },
  {
    id: 'jaguar', name: 'Jaguar', short: 'Jaguar', label: 'No dejar rastro', color: '#83b719', badge: 'assets/tropa-jaguar.png', pages: '37–43',
    intro: 'Planea y vive las actividades al aire libre reduciendo el impacto antes, durante y después de la salida.',
    tracks: [
      { id: 'principios', icon: '🌿', name: 'Siete principios', page: 37, subtitle: 'Decisiones para disfrutar sin dejar huella',
        practice: ['Planea con la Patrulla antes de salir.', 'Relaciona cada principio con una decisión concreta de la actividad.', 'Registra qué funcionó y qué cambiarían en la siguiente salida.', 'Comparte el resultado con tu Consejo de Patrulla.'],
        caution: 'Las reglas del sitio, las áreas restringidas y las indicaciones de guardaparques o autoridades siempre deben respetarse.',
        items: [
          ['jag-1','Sé escoger un lugar adecuado para realizar el campamento.','Cómo evaluar un sitio de campamento'],
          ['jag-2','Sé elegir el tipo de campamento de acuerdo con las actividades planeadas.','Actividad, sitio y tipo de campamento'],
          ['jag-3','Utilizo alternativas para no generar basura y sé manejar los residuos.','Reducir y manejar residuos'],
          ['jag-4','Sé preparar mi equipo para una excursión o campamento.','Preparación de equipo sin excedentes'],
          ['jag-5','Protejo la biodiversidad que me rodea.','Observar y proteger la biodiversidad'],
          ['jag-6','Sé evitar que una fogata deje marcas o afecte el entorno.','Fuego con mínimo impacto'],
          ['jag-7','Comprendo que llevarme recuerdos naturales puede afectar el ecosistema.','Dejar lo que encuentro'],
          ['jag-8','Respeto a las personas que acampan cerca de mí.','Convivencia y cortesía al aire libre']
        ]}
    ]
  },
  {
    id: 'mapache', name: 'Mapache de Cozumel', short: 'Mapache', label: 'Técnica avanzada', color: '#f36a2b', badge: 'assets/tropa-mapache.png', pages: '45–68',
    intro: 'Lleva las habilidades iniciales a un nivel avanzado y utilízalas para asumir responsabilidades dentro de tu Patrulla.',
    tracks: [
      { id: 'cabuyeria', icon: '🪢', name: 'Cabuyería avanzada', page: 45, subtitle: 'Nudos, amarres y tejidos funcionales',
        practice: ['Identifica la función antes de escoger una técnica.', 'Realiza el trabajo con tensión uniforme y remates limpios.', 'Comprueba estabilidad sin exponer a nadie a una carga peligrosa.', 'Desarma, limpia y guarda el material al terminar.'],
        caution: 'Las construcciones deben revisarse con la dirigencia; ninguna técnica recreativa sustituye equipo homologado de seguridad.',
        items: [
          ['map-cab-1','Identifico tipos de nudos y sus funciones específicas.','Nudos avanzados por función'],
          ['map-cab-2','Realizo los amarres indicados para cada construcción de forma resistente y limpia.','Amarres resistentes y limpios'],
          ['map-cab-3','Realizo tejidos resistentes y funcionales.','Tejidos para campismo'],
          ['map-cab-4','Comprendo y explico el uso y funcionamiento de los tejidos.','Cómo trabaja un tejido']
        ]},
      { id: 'campismo', icon: '🔥', name: 'Campismo avanzado', page: 48, subtitle: 'Organización, construcciones, refugios y cocina',
        practice: ['Acordar funciones según las habilidades y metas de cada integrante.', 'Dibujar y dimensionar la construcción antes de cortar o tensar.', 'Revisar herramientas y establecer una zona segura de trabajo.', 'Probar refugio, agua y alimentos antes de depender de ellos.'],
        caution: 'Hachas, cuchillos, fuego, agua silvestre y construcciones requieren capacitación, supervisión y reglas específicas de la actividad.',
        items: [
          ['map-cam-1','Conozco los roles de la Patrulla y asumo una responsabilidad para el campamento.','Roles y responsabilidades de Patrulla'],
          ['map-cam-2','Identifico astucias de campamento que mejoran el orden, la higiene y la comodidad.','Astucias útiles de campamento'],
          ['map-cam-3','Realizo construcciones aplicando amarres y tejidos adecuados.','Planear y levantar una construcción'],
          ['map-cam-4','Conozco diferentes tipos de refugios y elijo uno de acuerdo con el entorno.','Refugios según el entorno'],
          ['map-cam-5','Uso herramientas de campamento de acuerdo con su función y medidas de seguridad.','Herramientas: uso y zona segura'],
          ['map-cam-6','Cocino con fuego y preparo un menú sin utensilios cuando la actividad lo permite.','Cocina con fuego y sin utensilios'],
          ['map-cam-7','Purifico agua mediante un método adecuado y verificable.','Tratamiento seguro del agua'],
          ['map-cam-8','Identifico nubes y cambios meteorológicos, y uso capas y calzado adecuados para el terreno.','Nubes, capas y calzado']
        ]},
      { id: 'exploracion', icon: '🗺️', name: 'Exploración avanzada', page: 63, subtitle: 'Mapas, claves, pistas y cielo nocturno',
        practice: ['Ubica título, escala, orientación, curvas de nivel y simbología del mapa.', 'Practica mensajes con un emisor, un receptor y una comprobación.', 'Sigue pistas dentro de una zona conocida y con límites acordados.', 'Confirma la orientación celeste con mapa estelar o aplicación fuera del ejercicio.'],
        caution: 'Para una ruta real lleva mapa actualizado, brújula y plan de navegación; no dependas solamente del teléfono o de las estrellas.',
        items: [
          ['map-exp-1','Leo un mapa topográfico y reconozco los elementos que lo conforman.','Lectura de mapa topográfico'],
          ['map-exp-2','Reconozco e interpreto claves y me comunico con mi Patrulla mediante ellas.','Morse y otras claves'],
          ['map-exp-3','Sé guiarme mediante señales de pista.','Señales de pista y seguimiento'],
          ['map-exp-4','Sé orientarme por medio de las constelaciones.','Orientación con el cielo nocturno']
        ]}
    ]
  },
  {
    id: 'uakusi', name: 'Uakusi solitaria', short: 'Uakusi', label: 'Protección y cuidado', color: '#43b6d7', badge: 'assets/tropa-uakusi.png', pages: '70–98',
    intro: 'Desarrolla criterios para cuidarte, proteger a tu Patrulla y prevenir riesgos en actividades presenciales y digitales.',
    tracks: [
      { id: 'salvo', icon: '🛡️', name: 'A salvo del peligro', page: 70, subtitle: 'Comunicación, inclusión, salud y alimentación',
        practice: ['Reconoce una situación incómoda o insegura y nómbrala con claridad.', 'Busca un lugar seguro y comunícala de inmediato a un adulto responsable o Scouter.', 'Acuerda con tu Patrulla acciones concretas para mejorar el entorno.', 'Planea alimentación e hidratación según personas, actividad y clima.'],
        caution: 'Una persona joven no tiene que resolver sola abuso, acoso, crisis emocional o una situación de peligro. Debe pedir ayuda a una persona adulta de confianza o a servicios de emergencia.',
        items: [
          ['uak-sal-1','Reconozco cuándo algo me incomoda y sé comunicarlo a un adulto responsable o a mi Scouter.','Comunicar una situación insegura'],
          ['uak-sal-2','Identifico intimidación, abuso, acoso y factores de riesgo en una actividad Scout.','Reconocer riesgos y pedir ayuda'],
          ['uak-sal-3','Practico una comunicación respetuosa e inclusión dentro de mi Patrulla y Tropa.','Comunicación asertiva e inclusión'],
          ['uak-sal-4','Reconozco estrés, ansiedad y una crisis emocional, y tengo un plan para pedir apoyo.','Bienestar emocional y red de apoyo'],
          ['uak-sal-5','Planeo un menú de tres días considerando nutrición, actividad, hidratación, alergias e intolerancias.','Menú, hidratación y necesidades alimentarias']
        ]},
      { id: 'digital', icon: '🔐', name: 'Ciudadanía digital', page: 76, subtitle: 'Privacidad, respeto y protección en línea',
        practice: ['Revisa la privacidad de tus cuentas con una persona adulta de confianza.', 'Usa una contraseña única y robusta; activa verificación en dos pasos cuando sea posible.', 'Detente antes de abrir enlaces o compartir datos.', 'Guarda evidencia y pide ayuda ante amenaza, acoso o suplantación.'],
        caution: 'No respondas ni enfrentes en solitario una amenaza digital. Conserva evidencia, bloquea cuando corresponda y pide apoyo a una persona adulta de confianza.',
        items: [
          ['uak-dig-1','Uso redes Wi‑Fi seguras y protejo mis contraseñas sin compartirlas.','Contraseñas y conexiones seguras'],
          ['uak-dig-2','Configuro la privacidad y controlo quién ve mis publicaciones.','Privacidad en redes sociales'],
          ['uak-dig-3','Evito compartir datos personales y reviso mensajes o enlaces antes de abrirlos.','Datos, mensajes y enlaces'],
          ['uak-dig-4','Respeto los derechos, la imagen y la información de otras personas.','Convivencia y huella digital'],
          ['uak-dig-5','Sé pedir ayuda y reportar una situación que amenace mis derechos o seguridad digital.','Cómo actuar ante un riesgo digital']
        ]},
      { id: 'auxilios', icon: '➕', name: 'Primeros auxilios', page: 79, subtitle: 'Reconocer, proteger, avisar y ayudar dentro de tus límites',
        practice: ['Protege la escena antes de acercarte.', 'Activa el sistema de emergencias y sigue las indicaciones del operador.', 'Actúa solo dentro de tu capacitación y utiliza protección personal.', 'Practica técnicas únicamente con instructores y material adecuados.'],
        caution: 'Esta guía no sustituye capacitación práctica ni atención profesional. RCP, maniobras, vendajes, inmovilización y movilización deben aprenderse y evaluarse con personal competente.',
        items: [
          ['uak-pa-1','Reconozco una emergencia, evalúo la escena y activo correctamente el sistema de emergencias.','Evaluación de escena y llamada de emergencia'],
          ['uak-pa-2','Realizo una valoración inicial y reconozco lesiones que ponen en riesgo inmediato la vida.','Valoración inicial: AVDI y XABC'],
          ['uak-pa-3','Reconozco cuándo se requiere RCP y practico compresiones solo con las manos bajo instrucción.','RCP solo con las manos'],
          ['uak-pa-4','Reconozco asfixia o atragantamiento y conozco la respuesta indicada para mi nivel de formación.','Atragantamiento y activación de ayuda'],
          ['uak-pa-5','Distingo heridas, quemaduras y hemorragias, y conozco sus cuidados iniciales y señales de alarma.','Heridas, quemaduras y sangrado'],
          ['uak-pa-6','Reconozco signos de hipotermia, golpe de calor y mal de montaña, y sé pedir atención oportuna.','Emergencias por el ambiente'],
          ['uak-pa-7','Distingo picaduras, mordeduras, esguinces y fracturas, y evito acciones que agraven la lesión.','Lesiones, picaduras y mordeduras'],
          ['uak-pa-8','Organizo y mantengo un botiquín adecuado, conozco mis límites y sé cuándo pedir ayuda.','Botiquín y límites de actuación']
        ]},
      { id: 'riesgos', icon: '⚠️', name: 'Gestión de riesgos al aire libre', page: 93, subtitle: 'Preparación, servicios, alimentos e incendios',
        practice: ['Define actividad, lugar, participantes, equipo y condiciones antes de salir.', 'Ubica el punto de reunión, comunicaciones y servicios de emergencia.', 'Revisa pronóstico, ruta, transporte y una alternativa.', 'Identifica factores humanos, geográficos, biológicos y socioculturales.'],
        caution: 'Los protocolos de salida, traslado, autorizaciones y fichas médicas son responsabilidad de la dirigencia y de las instancias Scouts correspondientes; este registro no los sustituye.',
        items: [
          ['uak-rie-1','Identifico señales, rutas de evacuación y un punto de reunión accesible.','Señalización y punto de reunión'],
          ['uak-rie-2','Reviso ubicación, pronóstico, transporte, trayecto y rutas alternas de la actividad.','Plan previo de la salida'],
          ['uak-rie-3','Ubico comunicaciones, botiquín y servicios de emergencia cercanos.','Recursos para responder a emergencias'],
          ['uak-rie-4','Preparo, separo y almaceno alimentos de forma higiénica para evitar contaminación.','Inocuidad de alimentos'],
          ['uak-rie-5','Identifico medidas para prevenir incendios y factores humanos, naturales, biológicos y socioculturales de riesgo.','Prevención de incendios y análisis de riesgos']
        ]}
    ]
  }
];

function tropaEsc(value) { return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
function tropaLoad() {
  try {
    const value = JSON.parse(localStorage.getItem(TROPA_PROGRESS_KEY));
    if (value && typeof value === 'object') return { profile: value.profile || {}, items: value.items || {}, reflections: value.reflections || {}, own: value.own || {} };
  } catch (_) {}
  return { profile: {}, items: {}, reflections: {}, own: {} };
}
function tropaSave(state) { localStorage.setItem(TROPA_PROGRESS_KEY, JSON.stringify(state)); }
function tropaItems(territory) { return territory.tracks.flatMap(track => track.items); }
function tropaCount(state, territory) { return tropaItems(territory).filter(([id]) => ['practicing','ready'].includes((state.items[id] || {}).status)).length; }
function tropaReady(state, territory) { return tropaItems(territory).filter(([id]) => (state.items[id] || {}).status === 'ready').length; }
function tropaAllCount(state) { return TROPA_TERRITORIES.reduce((n,t) => n + tropaCount(state,t),0); }
function tropaAllTotal() { return TROPA_TERRITORIES.reduce((n,t) => n + tropaItems(t).length,0); }
function tropaStatusLabel(status) { return status === 'ready' ? 'Listo para compartir' : status === 'practicing' ? 'En práctica' : 'Por explorar'; }

function tropaProgressMap(state) {
  return `<div class="tropa-map" role="list">${TROPA_TERRITORIES.map((territory, index) => {
    const done=tropaCount(state,territory), total=tropaItems(territory).length;
    return `<article class="tropa-map-card tropa-${territory.id}" role="listitem" style="--territory:${territory.color}">
      <div class="tropa-map-order">${index === 0 ? 'Comienza aquí' : 'Después de Ajolote'}</div>
      <img src="${territory.badge}" alt="Insignia ${territory.name}">
      <p>${territory.label}</p><h3>${territory.name}</h3><small>${done} de ${total} logros con avance</small>
      <progress value="${done}" max="${total}"></progress>
      <a class="primary" href="#scout/tropa/aventuras/${territory.id}">Trabajar esta insignia →</a>
    </article>`;
  }).join('')}</div>`;
}

function tropaProgressPage() {
  const path = location.hash.slice(1).split('/');
  const territory = TROPA_TERRITORIES.find(item => item.id === path[3]);
  if (territory) { tropaTerritoryPage(territory); return; }
  const state=tropaLoad(), total=tropaAllTotal(), done=tropaAllCount(state);
  app.innerHTML = `<div class="shell tropa-journey-shell"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary menu-back" href="#scout">Zona Scout</a></header>
    <main id="main" class="container tropa-journey-container">
      <section class="tropa-journey-hero"><div><a href="#scout">← Volver a Zona Scout</a><p class="eyebrow">Tropa · Aventuras en la Naturaleza</p><h1>Mi ruta de territorios</h1><p>Una bitácora personal para elegir exploraciones, practicar con tu Patrulla y reunir lo que quieres compartir con tus Scouters.</p><div class="pills"><span class="pill">Avance autónomo</span><span class="pill">Evidencias y reflexiones</span><span class="pill">Videos por logro</span></div></div><figure><img src="assets/tropa-aventuras-completa.png" alt="Conjunto de las cuatro insignias de Aventuras en la Naturaleza para Tropa"><figcaption>Cuatro Grandes Territorios de Vida al Aire Libre</figcaption></figure></section>
      <section class="panel tropa-how"><div><p class="eyebrow">Cómo usar esta bitácora</p><h2>Elige, practica y comparte</h2><ol><li>Comienza con <strong>Ajolote de Xochimilco</strong>.</li><li>Después elige Jaguar, Mapache o Uakusi en el orden que acuerdes con tu Patrulla y tus Scouters.</li><li>Marca cada logro, anota la práctica o evidencia y compártela cuando esté lista.</li></ol></div><aside><strong>Avance personal</strong><b>${done} / ${total}</b><progress value="${done}" max="${total}"></progress><small>logros con práctica registrada</small></aside></section>
      <section class="panel tropa-map-section"><p class="eyebrow">Mapa de progresiones</p><h2>Elige el territorio que vas a explorar</h2><p>Ajolote es el inicio. Los otros tres territorios no forman una fila obligatoria: puedes decidir cuál trabajar después con tu Patrulla y tu dirigencia.</p>${tropaProgressMap(state)}</section>
      <section class="panel tropa-source"><div><p class="eyebrow">Fuente de consulta</p><h2>Carnet Aventuras en la Naturaleza para Tropa 2024</h2><p>La bitácora organiza las exploraciones del carnet para darles seguimiento. No reemplaza el programa ni entrega automáticamente una insignia.</p></div><a class="secondary" href="${TROPA_PDF}" target="_blank" rel="noopener">Abrir carnet completo ↗</a></section>
    </main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
}

function tropaItemCard(item, state) {
  const [id,text,video]=item, current=state.items[id] || {status:'pending',date:'',note:''};
  return `<article class="tropa-achievement ${current.status !== 'pending' ? 'has-progress' : ''}" data-tropa-card="${id}">
    <div class="tropa-achievement-head"><span aria-hidden="true">✓</span><p>${text}</p></div>
    <details class="tropa-achievement-help"><summary>Guía, video y evidencia</summary><div class="tropa-achievement-body">
      <div class="tropa-video"><b aria-hidden="true">▶</b><span><small>Video tutorial</small><strong>${video}</strong></span><em>Próximamente</em></div>
      <p><strong>Para demostrarlo:</strong> realiza una práctica adecuada con tu Patrulla, explica qué decisión tomaste y registra aquí qué hiciste o qué aprendiste.</p>
    </div></details>
    <div class="tropa-achievement-controls"><label class="field">Mi avance<select data-tropa-status="${id}"><option value="pending" ${current.status==='pending'?'selected':''}>Por explorar</option><option value="practicing" ${current.status==='practicing'?'selected':''}>En práctica</option><option value="ready" ${current.status==='ready'?'selected':''}>Listo para compartir con mi Scouter</option></select></label><label class="field">Fecha de práctica<input type="date" data-tropa-date="${id}" value="${tropaEsc(current.date)}"></label></div>
    <label class="field tropa-evidence">Mi práctica o evidencia<textarea data-tropa-note="${id}" placeholder="Qué hice, con quién, qué resultó y qué quiero mejorar…">${tropaEsc(current.note)}</textarea></label>
  </article>`;
}

function tropaTerritoryPage(territory) {
  const state=tropaLoad(), profile=state.profile, items=tropaItems(territory), count=tropaCount(state,territory), ready=tropaReady(state,territory);
  const own=Array.isArray(state.own[territory.id]) ? state.own[territory.id] : [];
  app.innerHTML = `<div class="shell tropa-journey-shell territory-${territory.id}" style="--territory:${territory.color}"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary menu-back" href="#scout/tropa/aventuras">Mapa de territorios</a></header>
    <main id="main" class="container tropa-journey-container">
      <section class="tropa-territory-hero"><div><a href="#scout/tropa/aventuras">← Mi ruta de territorios</a><p class="eyebrow">${territory.label}</p><h1>${territory.name}</h1><p>${territory.intro}</p><div class="pills"><span class="pill">${items.length} logros</span><span class="pill">Páginas ${territory.pages}</span><span class="pill">Registro personal</span></div></div><figure><img src="${territory.badge}" alt="Insignia ${territory.name}"><figcaption>${territory.label}</figcaption></figure></section>
      <section class="panel tropa-profile"><div><p class="eyebrow">Mi bitácora</p><h2>Identifica tu recorrido</h2><p>Estos datos y tus avances se guardan solo en este navegador.</p></div><div class="form-grid"><label class="field">Mi nombre Scout<input data-tropa-profile="name" value="${tropaEsc(profile.name)}" placeholder="Nombre o nombre Scout"></label><label class="field">Patrulla<input data-tropa-profile="patrol" value="${tropaEsc(profile.patrol)}" placeholder="Nombre de tu Patrulla"></label><label class="field">Tropa / Grupo Scout<input data-tropa-profile="group" value="${tropaEsc(profile.group)}" placeholder="Tropa y número de Grupo"></label></div></section>
      <section class="tropa-summary"><div><strong id="tropa-count">${count} / ${items.length}</strong><span>logros con avance</span></div><progress id="tropa-progress" value="${count}" max="${items.length}"></progress><p><b id="tropa-ready">${ready}</b> listos para compartir. Tu Scouter revisa el proceso y acuerda contigo cuándo corresponde la insignia.</p><button class="secondary" id="print-tropa" type="button">Imprimir / guardar bitácora</button></section>
      <nav class="tropa-track-nav" aria-label="Exploraciones de ${territory.name}">${territory.tracks.map(track => `<button type="button" data-tropa-jump="tropa-${track.id}"><span>${track.icon}</span><strong>${track.name}</strong><small>${track.items.length} logros</small></button>`).join('')}</nav>
      <section class="tropa-tracks">${territory.tracks.map((track,index) => `<section class="panel tropa-track" id="tropa-${track.id}"><header><span class="tropa-track-index">${String(index+1).padStart(2,'0')}</span><span class="tropa-track-icon" aria-hidden="true">${track.icon}</span><div><p class="eyebrow">${territory.short} · exploración</p><h2>${track.name}</h2><p>${track.subtitle}</p><a href="${TROPA_PDF}#page=${track.page}" target="_blank" rel="noopener">Consultar el carnet · página ${track.page} ↗</a></div><strong data-tropa-track-count="${track.id}">${track.items.filter(([id]) => (state.items[id]||{}).status && (state.items[id]||{}).status!=='pending').length} / ${track.items.length}</strong></header>
        <details class="tropa-track-guide"><summary>Antes de practicar: ruta y límites</summary><div><section><h3>Ruta de práctica</h3><ol>${track.practice.map(x=>`<li>${x}</li>`).join('')}</ol></section><aside><h3>Cuida este límite</h3><p>${track.caution}</p></aside></div></details>
        <div class="tropa-achievements">${track.items.map(item=>tropaItemCard(item,state)).join('')}</div>
        <label class="field tropa-reflection">Reflexión de esta exploración<textarea data-tropa-reflection="${territory.id}:${track.id}" placeholder="Qué aprendí, cómo ayudé a mi Patrulla y cuál será mi siguiente práctica…">${tropaEsc(state.reflections[`${territory.id}:${track.id}`])}</textarea></label>
      </section>`).join('')}</section>
      <section class="panel tropa-own"><div><p class="eyebrow">Mi iniciativa</p><h2>Propongo una exploración</h2><p>El carnet permite proponer acciones propias. Escríbela, acuerda su propósito con tu Patrulla y preséntala a tus Scouters.</p></div><form id="tropa-own-form"><label class="field">Mi propuesta<input name="title" required maxlength="220" placeholder="Ejemplo: dirigir una práctica de orientación para mi Patrulla"></label><button class="primary">Agregar propuesta</button></form><div id="tropa-own-list">${own.length?own.map((x,i)=>`<article><div><strong>${tropaEsc(x.title)}</strong><small>${tropaStatusLabel(x.status)}</small></div><select data-tropa-own-status="${i}"><option value="pending" ${x.status==='pending'?'selected':''}>Por explorar</option><option value="practicing" ${x.status==='practicing'?'selected':''}>En práctica</option><option value="ready" ${x.status==='ready'?'selected':''}>Lista para compartir</option></select><button class="text-button" data-tropa-own-remove="${i}" type="button">Quitar</button></article>`).join(''):'<p class="muted">Todavía no has agregado una exploración propia.</p>'}</div></section>
      <section class="panel tropa-handoff"><div><p class="eyebrow">Consejo de Patrulla</p><h2>Comparte tu proceso</h2><p>Revisa tus fechas, evidencias y reflexiones. Lleva la bitácora a tu Consejo de Patrulla y conversa con tus Scouters sobre la práctica que falta o el siguiente territorio que quieres explorar.</p></div><div><p><strong>La marca registra tu proceso:</strong> no valida por sí sola una insignia y no reemplaza el carnet ni la orientación de la dirigencia.</p><a class="secondary" href="${TROPA_PDF}" target="_blank" rel="noopener">Consultar el carnet completo ↗</a></div></section>
    </main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  bindTropaProgress(state,territory);
}

function bindTropaProgress(state,territory) {
  const refresh=()=>{
    const count=tropaCount(state,territory), items=tropaItems(territory);
    const countEl=document.querySelector('#tropa-count'), progress=document.querySelector('#tropa-progress'), ready=document.querySelector('#tropa-ready');
    if(countEl) countEl.textContent=`${count} / ${items.length}`;
    if(progress) progress.value=count;
    if(ready) ready.textContent=tropaReady(state,territory);
    territory.tracks.forEach(track=>{const el=document.querySelector(`[data-tropa-track-count="${track.id}"]`);if(el)el.textContent=`${track.items.filter(([id])=>(state.items[id]||{}).status && (state.items[id]||{}).status!=='pending').length} / ${track.items.length}`;});
  };
  document.querySelectorAll('[data-tropa-jump]').forEach(button=>button.onclick=()=>document.getElementById(button.dataset.tropaJump)?.scrollIntoView({behavior:'smooth',block:'start'}));
  document.querySelectorAll('[data-tropa-profile]').forEach(input=>input.oninput=()=>{state.profile[input.dataset.tropaProfile]=input.value;tropaSave(state);});
  document.querySelectorAll('[data-tropa-status]').forEach(select=>select.onchange=()=>{const id=select.dataset.tropaStatus;state.items[id]={...(state.items[id]||{}),status:select.value};tropaSave(state);refresh();document.querySelector(`[data-tropa-card="${id}"]`)?.classList.toggle('has-progress',select.value!=='pending');});
  document.querySelectorAll('[data-tropa-date]').forEach(input=>input.onchange=()=>{const id=input.dataset.tropaDate;state.items[id]={...(state.items[id]||{}),date:input.value};tropaSave(state);});
  document.querySelectorAll('[data-tropa-note]').forEach(input=>input.oninput=()=>{const id=input.dataset.tropaNote;state.items[id]={...(state.items[id]||{}),note:input.value};tropaSave(state);});
  document.querySelectorAll('[data-tropa-reflection]').forEach(input=>input.oninput=()=>{state.reflections[input.dataset.tropaReflection]=input.value;tropaSave(state);});
  document.querySelector('#print-tropa')?.addEventListener('click',()=>window.print());
  document.querySelector('#tropa-own-form')?.addEventListener('submit',event=>{event.preventDefault();const title=event.currentTarget.elements.title.value.trim();if(!title)return;state.own[territory.id]=Array.isArray(state.own[territory.id])?state.own[territory.id]:[];state.own[territory.id].push({title,status:'pending'});tropaSave(state);tropaTerritoryPage(territory);});
  document.querySelectorAll('[data-tropa-own-status]').forEach(select=>select.onchange=()=>{state.own[territory.id][Number(select.dataset.tropaOwnStatus)].status=select.value;tropaSave(state);});
  document.querySelectorAll('[data-tropa-own-remove]').forEach(button=>button.onclick=()=>{state.own[territory.id].splice(Number(button.dataset.tropaOwnRemove),1);tropaSave(state);tropaTerritoryPage(territory);});
}
