/* Mi Camino de Aventuras · Manada
   Fuente educativa: Carnet Aventuras en la Naturaleza para Manada 2024.
   El registro es local y apoya la conversación con la dirigencia; no valida insignias. */
const MOHWA_STORAGE_KEY = 'lobatos-acampando-mohwa-v1';

const MOHWA_TRACKS = [
  {
    id: 'cabuyeria', icon: '🪢', title: 'Cabuyería', page: 17, sectionTitle: 'Aprendiendo sobre nudos y su utilidad',
    intro: 'Aprender nudos útiles, cuidar la piola y usar cada nudo con responsabilidad y seguridad.',
    myth: 'Mowgli recordó las lianas extrañas que había visto en el poblado de los hombres. Kaa le mostró que una cuerda bien usada puede unir, asegurar y resolver problemas. Como una serpiente, cada nudo sigue un camino preciso: se aprende despacio, se practica y nunca se usa para jugar.',
    dentelladas: [
      'Perfeccionar el amarre de los zapatos para caminar con un paso seguro.',
      'Usar el nudo de la buena acción en la pañoleta como recordatorio de ayudar cada día.',
      'Aprender el nudo simple como tope y el rizo o llano para unir cuerdas del mismo grosor o sujetar un vendaje.',
      'Practicar cote simple, ocho y presilla de alondra con apoyo de los Viejos Lobos, entendiendo dónde se usa cada uno.',
      'Cuidar, identificar, enrollar y llevar la piola en el equipo de bolsillo; practicar hasta hacer nudos seguros y fáciles de deshacer.'
    ],
    tips: ['No jugar ni dar mal uso a una piola o cuerda.', 'Si existe duda sobre un nudo, pedir a los Viejos Lobos que revisen antes de usarlo.', 'Un nudo seguro se reconoce porque queda bien hecho y puede deshacerse sin dañarlo.', 'No usar la piola para trepar, cargar personas ni sustituir equipo de seguridad.'],
    prey: [
      ['cab-1', 'Soy capaz de hacer nudos básicos y los pongo en práctica de manera útil en mis cacerías y en mi casa.', 'Nudos básicos para comenzar'],
      ['cab-2', 'Puedo realizar correctamente varios nudos y le enseño a Lobatos y Lobeznas de menos experiencia a cómo hacerlos.', 'Cómo enseñar un nudo paso a paso'],
      ['cab-3', 'Soy responsable y tengo una cuerda o piola y sé cómo utilizarla de una manera adecuada. Ayudo en los campamentos a verificar que se les dé buen uso.', 'Mi piola: cuidado, enrollado y transporte'],
      ['cab-4', 'Entiendo que cada nudo tiene un uso diferente y los aplico en mi vida diaria, con responsabilidad y seguridad.', 'Elegir el nudo correcto para cada tarea']
    ]
  },
  {
    id: 'campismo', icon: '⛺', title: 'Campismo', page: 21, sectionTitle: 'Viajando a nuevas selvas',
    intro: 'Prepararse para acampar, cuidar el equipo personal, convivir con orden y alimentarse adecuadamente.',
    myth: 'Raksha preparó a Mowgli para dejar el cubil durante algunas lunas y conocer nuevos rincones de la selva. Antes de partir, debía pensar qué llevar, cómo cuidarse y cómo dejar cada lugar mejor de como lo encontró. Acampar también significa hacerse responsable de uno mismo y de la Manada.',
    dentelladas: [
      'Identificar el equipo personal que debe ir en la mochila y seguir la lista que entreguen los Viejos Lobos.',
      'Hacer el bazar personal: sacar, sacudir, revisar y volver a guardar ropa, calzado, sleeping y equipo; secar lo húmedo.',
      'Separar desechos orgánicos e inorgánicos y disponerlos según las reglas del lugar.',
      'Practicar higiene personal, usar los espacios indicados y llevar los artículos de aseo necesarios.',
      'Aprender a montar, usar y cuidar la tienda con apoyo de personas con experiencia; mantenerla limpia y no comer dentro.',
      'Preparar refrigerios balanceados con agua suficiente, frutas o verduras lavadas, y utensilios reutilizables marcados.',
      'Investigar meteorología, distinguir clima y tiempo atmosférico, y observar instrumentos como termómetro, veleta o pluviómetro.'
    ],
    tips: ['El Lobato arma su mochila; el adulto acompaña, revisa el peso y confirma que lleve lo necesario.', 'En el bazar no se dejan alimentos ni objetos dentro de la mochila; se sacuden prendas y sleeping antes de volver a guardarlos.', 'Los Viejos Lobos acampan en su propia tienda, cerca de la Manada para acompañar y cuidar.', 'Las reglas del campamento, fuego, sanitarios y residuos se confirman con la dirigencia y el lugar visitado.'],
    prey: [
      ['cam-1', 'Sé qué debo llevar a un campamento y puedo preparar mi mochila sin la ayuda de un adulto o un Viejo Lobo.', 'Cómo preparar mi mochila de campamento'],
      ['cam-2', 'Puedo organizar un bazar y sé identificar, cuidar y hacerme responsable de mis pertenencias en campamentos.', 'Cómo organizar mi bazar personal'],
      ['cam-3', 'Soy capaz de armar la tienda de campaña con el apoyo de mis Viejos Lobos y ayudo a montar el campamento de la Manada.', 'Montaje y cuidado de la tienda de campaña'],
      ['cam-4', 'Demuestro que puedo mantener ordenada y limpia la tienda de campaña y los lugares donde acampo o juego.', 'Orden y limpieza durante el campamento'],
      ['cam-5', 'Reconozco que es importante mantener mi higiene personal y me hago responsable de mis artículos de aseo en campamentos y excursiones.', 'Mi equipo de higiene personal'],
      ['cam-6', 'Puedo preparar refrigerios sencillos y nutritivos, y me alimento correctamente durante mis cacerías.', 'Refrigerios sencillos, seguros y nutritivos'],
      ['cam-7', 'He descubierto que la meteorología me ayuda a tomar decisiones al momento de salir de cacería. Reconozco la diferencia entre clima y tiempo atmosférico.', 'Clima, tiempo y decisiones antes de salir']
    ]
  },
  {
    id: 'exploracion', icon: '🧭', title: 'Exploración', page: 26, sectionTitle: 'Descubriendo los secretos de Seeonee',
    intro: 'Moverse con cuidado, orientarse, comunicarse, reconocer el entorno y disfrutarlo responsablemente.',
    myth: 'Baloo enseñó a Mowgli a escuchar y comunicarse con los pueblos de la selva; Bagheera le ayudó a observar el terreno y encontrar el rumbo. Explorar Seeonee exige ojos atentos, preparación y respeto: reconocer un sendero inseguro es tan valioso como descubrir uno nuevo.',
    dentelladas: [
      'Preparar con tiempo el equipo de bolsillo y la mochila de excursión: comida, agua, bloqueador, gorra, impermeable y ropa según el clima.',
      'Practicar caminatas familiares con calzado adecuado y aprender a caminar en distintos terrenos.',
      'Para actividades acuáticas, conocer reglas de seguridad y usar un salvavidas propio, adecuado al peso y a la medida, cuando corresponda.',
      'Aprender a comunicar una emergencia por teléfono, mensaje u otro medio seguro; practicar claves como gato y murciélago.',
      'Responder al llamado de Manada y reconocer el silbato Scout como señales importantes.',
      'Orientarse con Sol, puntos cardinales, rosa de los vientos, estrellas, pistas naturales y artificiales.',
      'Identificar animales y plantas de la región, conocer especies en riesgo y observarlas sin acercarse ni molestarlas.'
    ],
    tips: ['La comunicación es la base del éxito en una cacería.', 'Antes de salir, investigar el terreno, las plantas y los animales que se pueden encontrar.', 'Nunca explorar sin compañía; avisar a los Viejos Lobos a dónde se irá.', 'Si la ropa se moja, cambiarla por ropa seca de inmediato.', 'No tocar, alimentar ni recolectar plantas o animales; observar a distancia y avisar si una especie puede ser peligrosa.'],
    prey: [
      ['exp-1', 'Demuestro que sé cuidarme durante una excursión, me alimento y me hidrato adecuadamente y utilizo la ropa adecuada según el tiempo atmosférico.', 'Cómo cuidarme durante una excursión'],
      ['exp-2', 'Soy capaz de distinguir distintos tipos de terreno y caminar sobre ellos correctamente.', 'Cómo caminar en distintos terrenos'],
      ['exp-3', 'Sé utilizar adecuadamente mi equipo de excursionismo y me hago responsable de él.', 'Mi equipo básico de excursionismo'],
      ['exp-4', 'Me comunico de manera clara y segura utilizando distintos medios y demuestro que puedo seguir indicaciones de mis Viejos Lobos.', 'Señales y comunicación de la Manada'],
      ['exp-5', 'Utilizo técnicas sencillas para orientarme y puedo guiar a mi seisena en nuestras cacerías.', 'Orientación sencilla y puntos cardinales'],
      ['exp-6', 'He descubierto la grandeza de la Naturaleza, me siento parte de ella y disfruto observándola.', 'Observar la naturaleza con todos los sentidos'],
      ['exp-7', 'Identifico los animales y plantas de mi región, reconozco su importancia y que algunas especies pueden hacerme daño si no tengo precaución.', 'Plantas y animales de mi región']
    ]
  }
];

const MOHWA_GUIDES = {
  'cab-1': {
    steps: ['Practica primero el amarre de los zapatos hasta que quede firme y puedas caminar sin que se afloje.', 'Aprende con una piola el nudo simple, el rizo o llano, el cote simple, el ocho y la presilla de alondra.', 'Di en voz alta para qué sirve cada nudo mientras lo haces y repítelo varias veces sin mirar una muestra.'],
    evidence: ['Hace al menos tres nudos sin ayuda.', 'Reconoce su forma y explica un uso cotidiano correcto.', 'Puede deshacerlos sin dañar la piola.'],
    advice: 'Empieza por nudos fáciles y aumenta la dificultad. Si un nudo se usará para sujetar algo, pide a un Viejo Lobo que lo revise.'
  },
  'cab-2': {
    steps: ['Elige dos o tres nudos que ya puedas realizar con seguridad.', 'Enséñalos lentamente: muestra el resultado, explica su uso y divide el movimiento en pasos.', 'Observa a la otra persona hacerlo y corrige con respeto hasta que pueda repetirlo.'],
    evidence: ['Realiza los nudos de forma consistente.', 'Explica cuándo conviene usarlos.', 'Otro Lobato o Lobezna logra repetirlos con su orientación.'],
    advice: 'Enseñar también es una forma de aprender. Evita competir por velocidad antes de dominar la forma correcta.'
  },
  'cab-3': {
    steps: ['Marca tu piola para identificarla y revisa que no esté cortada, deshilachada o dañada.', 'Practica enrollarla sin nudos y guárdala en tu equipo de bolsillo.', 'Durante una actividad, observa que las piolas se utilicen solo para la tarea indicada y se recojan al terminar.'],
    evidence: ['Conserva su piola identificada, limpia y ordenada.', 'La lleva en el equipo de bolsillo cuando se solicita.', 'Reconoce y detiene juegos o usos inseguros.'],
    advice: 'Una piola no es equipo para trepar, sostener personas o realizar rescates. No se coloca alrededor del cuello ni se usa para jugar.'
  },
  'cab-4': {
    steps: ['Relaciona cada nudo con su función: simple y ocho como topes; rizo para unir cuerdas del mismo grosor o sujetar un vendaje; cote para un poste; presilla de alondra para una argolla, viga u otra cuerda.', 'Plantea situaciones de casa o campamento y elige el nudo que resolvería cada una.', 'Haz el nudo, comprueba que quedó ordenado y explica por qué lo elegiste.'],
    evidence: ['Distingue al menos cuatro usos diferentes.', 'Selecciona el nudo por su función y no solo por recordarlo.', 'Comprueba el resultado antes de utilizarlo.'],
    advice: 'Un nudo que se ve ordenado y se deshace con facilidad suele estar bien hecho; ante cualquier duda, consulta a los Viejos Lobos.'
  },
  'cam-1': {
    steps: ['Revisa la lista de equipo entregada por los Viejos Lobos y separa todo antes de empacar.', 'Agrupa ropa, descanso, aseo y utensilios; protege lo que deba permanecer seco.', 'Empaca personalmente y practica encontrar cada objeto sin vaciar toda la mochila.'],
    evidence: ['Reconoce el equipo personal solicitado.', 'Sabe dónde guardó cada objeto.', 'Prepara la mochila con supervisión final, sin que un adulto la arme por completo.'],
    advice: 'La lista oficial de cada salida tiene prioridad. Aprender qué llevar evita olvidar lo necesario y cargar peso de más.'
  },
  'cam-2': {
    steps: ['Vacía completamente la mochila y coloca las pertenencias por categorías.', 'Sacude ropa, zapatos y sleeping; busca humedad, suciedad o animales pequeños.', 'Pon a secar lo mojado, retira residuos y vuelve a empacar cada cosa limpia y ordenada.'],
    evidence: ['Realiza el bazar sin dejar objetos dentro de la mochila.', 'Identifica lo que necesita secarse, limpiarse o repararse.', 'Se hace responsable de que nada quede abandonado.'],
    advice: 'No dejes alimentos en la mochila durante el bazar. Mantén despejada y limpia el área de campamento.'
  },
  'cam-3': {
    steps: ['Observa una demostración e identifica cuerpo de la tienda, varillas, estacas y cubierta.', 'Con apoyo de los Viejos Lobos, extiende la tienda, arma la estructura, coloca estacas y ajusta la cubierta.', 'Antes de guardar, limpia, seca, cuenta las piezas y dobla sin forzar cierres o varillas.'],
    evidence: ['Reconoce las piezas principales.', 'Participa activamente en el montaje y desmontaje.', 'Sigue las indicaciones y cuida el equipo común.'],
    advice: 'Aprende con una persona experimentada. No fuerces piezas y no montes o desmontes la tienda sin la indicación de la dirigencia.'
  },
  'cam-4': {
    steps: ['Asigna un lugar para mochila, calzado, ropa seca y equipo de dormir.', 'Ventila y sacude la tienda; retira tierra y separa residuos orgánicos e inorgánicos.', 'Haz una revisión antes de cada actividad y antes de abandonar el lugar.'],
    evidence: ['Mantiene libres la entrada y los espacios para dormir.', 'No deja comida ni basura dentro de la tienda.', 'Entrega el lugar limpio y con todas sus pertenencias.'],
    advice: 'Una tienda ordenada permite guardar y salir con rapidez si cambia el tiempo o existe una emergencia. No comas dentro de ella.'
  },
  'cam-5': {
    steps: ['Prepara un neceser marcado con cepillo y pasta dental, jabón y los artículos indicados para la salida.', 'Practica una rutina: lavarse las manos, cepillarse después de comer, asearse y cambiarse ropa húmeda.', 'Utiliza solamente los espacios de aseo indicados y vuelve a guardar limpio el material.'],
    evidence: ['Lleva completos sus artículos de aseo.', 'Realiza su higiene sin recordatorios constantes.', 'Mantiene el neceser ordenado y no pierde sus objetos.'],
    advice: 'No compartas artículos personales. Sigue las indicaciones del lugar para baño, agua y manejo de productos de higiene.'
  },
  'cam-6': {
    steps: ['Planea un refrigerio con agua suficiente, fruta o verdura lavada y un alimento que aporte energía.', 'Reduce productos muy procesados y lleva plato, vaso y cubiertos reutilizables e identificados.', 'Con indicaciones de los Viejos Lobos, ayuda a limpiar ingredientes, ordenar, transportar o lavar utensilios.'],
    evidence: ['Prepara un refrigerio sencillo y balanceado.', 'Mantiene limpios sus alimentos y utensilios.', 'Prueba alimentos nuevos y participa responsablemente en una tarea de cocina.'],
    advice: 'Lava y desinfecta frutas y verduras con ayuda adulta. En campamento sigue siempre las reglas de higiene, fuego y cocina de la dirigencia.'
  },
  'cam-7': {
    steps: ['Investiga el clima habitual de tu región y compáralo con el tiempo atmosférico de un día concreto.', 'Consulta el pronóstico antes de una cacería y decide qué ropa o protección necesitas.', 'Construye con la Manada un instrumento sencillo reutilizando materiales, como veleta o pluvómetro, y registra lo observado.'],
    evidence: ['Explica la diferencia entre clima y tiempo atmosférico.', 'Relaciona el pronóstico con decisiones de equipo y ropa.', 'Observa o utiliza un instrumento meteorológico.'],
    advice: 'El pronóstico ayuda a decidir, pero puede cambiar. Durante la salida continúa observando el cielo y sigue las indicaciones de los Viejos Lobos.'
  },
  'exp-1': {
    steps: ['Prepara con tiempo el equipo de bolsillo y la mochila de excursión.', 'Elige comida, agua, bloqueador, gorra, impermeable y ropa de acuerdo con el lugar y el tiempo atmosférico.', 'Durante la marcha bebe agua, come en los momentos indicados y comunica cualquier malestar.'],
    evidence: ['Lleva el equipo completo y en buen estado.', 'Se hidrata y alimenta con regularidad.', 'Usa la ropa adecuada y se cambia si queda mojada.'],
    advice: 'En actividades acuáticas necesita un salvavidas adecuado a su peso y talla, además de conocer y respetar las reglas de seguridad.'
  },
  'exp-2': {
    steps: ['Realiza caminatas familiares cortas usando el calzado que llevarás a la cacería.', 'Practica sobre terreno plano, pendiente y superficies irregulares, manteniendo un paso estable.', 'Observa dónde apoyas los pies, conserva distancia y adapta la velocidad al grupo.'],
    evidence: ['Distingue varios tipos de terreno.', 'Ajusta el paso sin correr ni separarse.', 'Termina la caminata cuidando pies, calzado e hidratación.'],
    advice: 'Nunca explores sin compañía. Avisa a los Viejos Lobos adónde vas y evita ramas, rocas u objetos que puedan causar daño.'
  },
  'exp-3': {
    steps: ['Identifica cada elemento del equipo y explica para qué sirve.', 'Marca tus pertenencias, revisa su estado y colócalas donde puedas encontrarlas con rapidez.', 'Usa solamente herramientas que ya conoces y pide orientación para cualquier tarea nueva.'],
    evidence: ['Prepara y transporta su propio equipo.', 'Lo utiliza de acuerdo con su función.', 'Lo recupera, limpia y guarda al terminar.'],
    advice: 'Adquiere el equipo poco a poco. Para ayudar, confirma primero con los Viejos Lobos y carga solo objetos adecuados para tu capacidad.'
  },
  'exp-4': {
    steps: ['Practica cómo comunicar una emergencia: quién eres, dónde estás, qué ocurrió y qué ayuda necesitas.', 'Ensaya mensajes por teléfono u otro medio seguro y aprende claves como gato y murciélago.', 'Reconoce y responde al llamado “¡Manada!” y al silbato Scout siguiendo la formación indicada.'],
    evidence: ['Da un mensaje breve, claro y completo.', 'Usa correctamente al menos una clave.', 'Responde de inmediato a las señales de la Manada.'],
    advice: 'La comunicación sostiene la seguridad de la cacería. Confía en los Viejos Lobos y avisa en cuanto tengas una dificultad.'
  },
  'exp-5': {
    steps: ['Identifica por dónde sale y se oculta el Sol y relaciona esas direcciones con los puntos cardinales.', 'Aprende a leer una rosa de los vientos y practica ubicar un destino sencillo.', 'Observa estrellas con un mapa estelar y distingue pistas naturales de pistas artificiales.'],
    evidence: ['Ubica los cuatro puntos cardinales.', 'Explica dos formas sencillas de orientarse.', 'Puede guiar a su seisena en un ejercicio supervisado.'],
    advice: 'Las pistas naturales son observaciones, no garantías exactas. En una salida real sigue la ruta y las indicaciones de los Viejos Lobos.'
  },
  'exp-6': {
    steps: ['Busca un lugar autorizado para observar en silencio durante unos minutos.', 'Registra sonidos, colores, formas, huellas o cambios del tiempo sin arrancar ni mover elementos.', 'Comparte con la Manada qué descubriste y por qué vale la pena protegerlo.'],
    evidence: ['Observa con atención y paciencia.', 'Describe el entorno sin alterar lo que encuentra.', 'Relaciona su experiencia con una acción de cuidado.'],
    advice: 'Respeta la Naturaleza y serás respetado. Observa sin perseguir, alimentar, tocar o llevarte seres vivos u objetos del lugar.'
  },
  'exp-7': {
    steps: ['Investiga animales y plantas comunes de tu región y cuáles están en riesgo.', 'Aprende rasgos visibles para reconocerlos y el entorno donde suelen encontrarse.', 'Durante una salida, observa a distancia y registra el hallazgo para confirmarlo después con una persona experta.'],
    evidence: ['Identifica varias especies locales.', 'Explica su importancia y una precaución necesaria.', 'Sabe cuándo alejarse y avisar a un adulto.'],
    advice: 'No te acerques a animales sin una persona experta y no pruebes, cortes o manipules plantas desconocidas.'
  }
};

function mohwaState() {
  try {
    const saved = JSON.parse(localStorage.getItem(MOHWA_STORAGE_KEY));
    if (saved && typeof saved === 'object') return { profile: saved.profile || {}, prey: saved.prey || {}, own: Array.isArray(saved.own) ? saved.own : [], reflections: saved.reflections || {} };
  } catch (_) {}
  return { profile: {}, prey: {}, own: [], reflections: {} };
}
function saveMohwa(state) { localStorage.setItem(MOHWA_STORAGE_KEY, JSON.stringify(state)); }
function mohwaStatus(value) { return value === 'ready' ? 'Lista para conversar' : value === 'practiced' ? 'Practicada' : 'Pendiente'; }
function mohwaCount(state, track) { return track.prey.filter(([id]) => (state.prey[id] || {}).status && (state.prey[id] || {}).status !== 'pending').length; }
function mohwaTotal(state = {}) { return MOHWA_TRACKS.reduce((sum, track) => sum + track.prey.length, 0) + (state.own || []).length; }
function mohwaDone(state) { return MOHWA_TRACKS.reduce((sum, track) => sum + mohwaCount(state, track), 0) + state.own.filter(x => x.status && x.status !== 'pending').length; }

function progressMap() {
  const cards = [
    ['mohwa', 'Mohwa', 'Un gran inicio', 'Primer paso de la progresión', true, 'assets/insignia-mohwa.png'],
    ['dhak', 'Dhâk', 'No dejemos rastro', 'Pendiente de desarrollo', false, 'assets/insignia-dhak.png'],
    ['flor', 'Flor Roja', 'Garras y colmillos más afilados', 'Pendiente de desarrollo', false, 'assets/insignia-flor-roja.png'],
    ['tregua', 'Tregua del Agua', 'Me cuido yo, te cuido a ti', 'Pendiente de desarrollo', false, 'assets/insignia-tregua-agua.png']
  ];
  return `<section class="progress-map" aria-label="Mapa de progresiones de Manada"><div class="progress-start">Comienza aquí</div>${cards.map(([id, name, subtitle, note, active, image]) => `<div class="progress-node ${active ? 'active' : 'pending'}"><span>${active ? '01' : '○'}</span><img class="progress-badge" src="${image}" alt="Insignia ${name}"><strong>${name}</strong><small>${subtitle}</small><em>${note}</em>${active ? '<a class="primary" href="#scout/aventuras/mohwa">Trabajar Mohwa →</a>' : `<button class="secondary" type="button" data-pending-progress="${id}">Ver ruta</button>`}</div>`).join('')}</section>`;
}

function scoutProgressOverview() {
  return `<section class="scout-progress-overview"><div class="scout-progress-copy"><p class="eyebrow">Progresiones de Manada</p><h2>Mi Camino de Aventuras</h2><p>Una guía de consulta para que familias, Lobatos y Lobeznas registren prácticas y preparen una conversación informada con sus Viejos Lobos.</p><a class="primary" href="#scout/aventuras">Abrir el seguimiento →</a></div><figure class="scout-progress-insignias"><img src="assets/insignias-aventuras-naturaleza.png" alt="Conjunto completo de las insignias Mohwa, Dhâk, Flor Roja y Tregua del Agua"><figcaption>Las cuatro Aventuras en la Naturaleza</figcaption></figure><div class="scout-progress-map">${progressMap()}</div></section>`;
}

function manadaProgressPage() {
  const parts = location.hash.slice(1).split('/');
  if (parts[2] === 'mohwa') { mohwaPage(); return; }
  const state = mohwaState();
  app.innerHTML = `<div class="shell manada-journey-shell"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary" href="#scout">← Zona Scout</a></header><main id="main" class="container journey-container"><section class="journey-hero progress-landing-hero"><div><a href="#scout">← Volver a Zona Scout</a><p class="eyebrow">Manada · Aventuras en la Naturaleza</p><h1>Mi Camino de Aventuras</h1><p>Un registro familiar para acompañar el aprendizaje de Lobatos y Lobeznas. El carnet guía cada paso; la Manada y sus Viejos Lobos acompañan y validan el avance.</p><div class="pills"><span class="pill">Registro en este navegador</span><span class="pill">Guía para familias</span><span class="pill">Consulta el carnet</span></div></div><figure class="journey-insignias"><img src="assets/insignias-aventuras-naturaleza.png" alt="Conjunto completo de las insignias Mohwa, Dhâk, Flor Roja y Tregua del Agua"><figcaption>Cuatro rutas de progresión</figcaption></figure></section><section class="panel journey-how"><div><p class="eyebrow">Cómo usarlo</p><h2>Practicar, registrar, conversar</h2><ol><li>Lean juntos las dentelladas y elijan una presa a practicar.</li><li>La familia registra el avance y lo que aprendió el Lobato.</li><li>Cuando esté listo, compártanlo con los Viejos Lobos. Ellos acuerdan el avance y la entrega de la insignia.</li></ol></div><aside><strong>Avance registrado</strong><b>${mohwaDone(state)} / ${mohwaTotal(state)}</b><small>presas de Mohwa y propias en práctica</small></aside></section><section class="panel"><p class="eyebrow">Mapa de progresiones</p><h2>Elige una ruta de aprendizaje</h2><p>El carnet establece a <strong>Mohwa</strong> como el gran inicio. Al obtenerlo, el Lobato o Lobezna podrá continuar con Dhâk, Flor Roja o Tregua del Agua en el orden que acuerde con su Manada.</p>${progressMap()}</section><section class="panel carnet-source"><div><p class="eyebrow">Documento de consulta</p><h2>Carnet Aventuras en la Naturaleza para Manada 2024</h2><p>Esta sección adapta el carnet a un seguimiento familiar. Conserva las presas, dentelladas y consejos como guía educativa; no reemplaza el programa, la formación ni los acuerdos de la dirigencia.</p></div><a class="secondary" href="assets/carnet-aventuras-manada-2024.pdf" target="_blank" rel="noopener">Abrir carnet en PDF ↗</a></section></main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const progressBack = document.querySelector('.manada-journey-shell .topbar .secondary');
  if (progressBack) { progressBack.classList.add('menu-back'); progressBack.textContent = 'Zona Scout'; }
  document.querySelectorAll('[data-pending-progress]').forEach(btn => btn.onclick = () => modal(`<p class="eyebrow">Progresiones de Manada</p><h2>${btn.dataset.pendingProgress === 'dhak' ? 'Dhâk' : btn.dataset.pendingProgress === 'flor' ? 'Flor Roja' : 'Tregua del Agua'}</h2><p>Esta ruta está considerada en el mapa y se desarrollará después de Mohwa. Por ahora pueden consultar su contenido en el carnet de aventuras.</p><a class="secondary" href="assets/carnet-aventuras-manada-2024.pdf" target="_blank" rel="noopener">Consultar el carnet ↗</a>`));
}

function preyCard(track, item, state) {
  const [id, text] = item, current = state.prey[id] || { status: 'pending', note: '', date: '' };
  return `<article class="prey-card ${current.status !== 'pending' ? 'is-active' : ''}" data-prey-card="${id}"><div class="prey-number">Presa</div><p>${text}</p><div class="prey-controls"><label class="field">Estado<select data-prey-status="${id}"><option value="pending" ${current.status === 'pending' ? 'selected' : ''}>Pendiente</option><option value="practiced" ${current.status === 'practiced' ? 'selected' : ''}>Practicada</option><option value="ready" ${current.status === 'ready' ? 'selected' : ''}>Lista para conversar</option></select></label><label class="field">Fecha de práctica<input data-prey-date="${id}" type="date" value="${esc(current.date || '')}"></label></div><label class="field prey-note">Lo que aprendí o dónde lo practiqué<textarea data-prey-note="${id}" placeholder="Escribe una nota breve…">${esc(current.note || '')}</textarea></label></article>`;
}

function mohwaPage() {
  const state = mohwaState(), profile = state.profile;
  app.innerHTML = `<div class="shell manada-journey-shell"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary" href="#scout/aventuras">← Mapa de progresiones</a></header><main id="main" class="container journey-container"><section class="journey-hero mohwa-hero"><div><a href="#scout/aventuras">← Mi Camino de Aventuras</a><p class="eyebrow">Insignia 01 · Un gran inicio</p><h1>Mohwa</h1><p>El primer paso para descubrir habilidades de campismo, cabuyería y exploración. Cada presa se trabaja en el orden que elijan, con el acompañamiento de la familia y la Manada.</p><div class="pills"><span class="pill">18 presas del carnet</span><span class="pill">3 caminos de aprendizaje</span><span class="pill">Videos tutoriales próximos</span></div></div><div class="journey-emblem" aria-hidden="true">🐾</div></section><section class="panel family-record"><div><p class="eyebrow">Registro de familia</p><h2>¿Qué Manada está recorriendo Mohwa?</h2><p>Usen solo los datos necesarios para identificar la hoja de seguimiento. Esta página no solicita ni guarda información médica.</p></div><div class="form-grid"><label class="field">Nombre de la Manada<input data-mohwa-profile="pack" value="${esc(profile.pack || '')}" placeholder="Nombre de la Manada"></label><label class="field">Grupo Scout<input data-mohwa-profile="group" value="${esc(profile.group || '')}" placeholder="Número o nombre"></label></div></section><section class="mohwa-summary"><div><strong id="mohwa-count">${mohwaDone(state)} / ${mohwaTotal(state)}</strong><span>presas con avance registrado</span></div><progress id="mohwa-progress" value="${mohwaDone(state)}" max="${mohwaTotal(state)}"></progress><p>La marca solo registra práctica. La insignia se conversa y acuerda con los Viejos Lobos.</p><button class="secondary" type="button" id="print-mohwa">Imprimir / guardar seguimiento</button></section><section class="video-coming"><span aria-hidden="true">▶</span><div><p class="eyebrow">Acampando en Familia · Próximamente</p><h2>Videos para aprender paso a paso</h2><p>Publicaremos tutoriales breves para acompañar cada bloque de Mohwa. Mientras tanto, el carnet y las indicaciones de los Viejos Lobos son la referencia de aprendizaje.</p></div></section><section class="mohwa-tracks">${MOHWA_TRACKS.map(track => `<section class="panel mohwa-track" id="mohwa-${track.id}"><header><span class="track-icon" aria-hidden="true">${track.icon}</span><div><p class="eyebrow">Mohwa · ${track.title}</p><h2>${track.title}</h2><p>${track.intro}</p></div><strong class="track-progress" data-track-count="${track.id}">${mohwaCount(state, track)} / ${track.prey.length}</strong></header><div class="tutorial-placeholder"><span>▶</span>${track.tutorial}</div><details class="dentelladas"><summary>Ver dentelladas y consejos del carnet</summary><div class="guide-details"><div><h3>Dentelladas para practicar</h3><ul>${track.dentelladas.map(x => `<li>${x}</li>`).join('')}</ul></div><div><h3>Consejos para familia y Manada</h3><ul>${track.tips.map(x => `<li>${x}</li>`).join('')}</ul></div></div></details><div class="prey-list">${track.prey.map(item => preyCard(track, item, state)).join('')}</div><section class="always-best"><p class="eyebrow">Siempre lo mejor</p><h3>Aprendo y comparto</h3><p>Al terminar estas dentelladas, anota qué aprendiste y qué consejo darías a otros Lobatos y Lobeznas, amistades y familia.</p><label class="field">Mi reflexión<input data-track-reflection="${track.id}" value="${esc((state.reflections || {})[track.id] || '')}" placeholder="Lo que aprendí o el consejo que quiero compartir"></label></section></section>`).join('')}</section><section class="panel own-prey"><div><p class="eyebrow">Mi propuesta</p><h2>Mis propias presas</h2><p>El carnet permite proponer presas propias y compartirlas con la Manada. Regístrenlas aquí como una propuesta; los Viejos Lobos orientan si puede integrarse al avance.</p></div><form id="own-prey-form" class="own-prey-form"><label class="field">Mi presa propuesta<input name="title" required maxlength="220" placeholder="Ejemplo: enseñé a mi seisena a cuidar la piola"></label><button class="primary">Agregar propuesta</button></form><div id="own-prey-list">${state.own.length ? state.own.map((item, i) => `<article class="own-prey-item"><div><strong>${esc(item.title)}</strong><small>${mohwaStatus(item.status || 'pending')}</small></div><select data-own-status="${i}"><option value="pending" ${item.status === 'pending' ? 'selected' : ''}>Pendiente</option><option value="practiced" ${item.status === 'practiced' ? 'selected' : ''}>Practicada</option><option value="ready" ${item.status === 'ready' ? 'selected' : ''}>Lista para conversar</option></select><button class="text-button" type="button" data-remove-own="${i}">Quitar</button></article>`).join('') : '<p class="muted">Aún no hay propuestas propias.</p>'}</div></section><section class="panel leader-handoff"><div><p class="eyebrow">Siguiente paso</p><h2>Conversar con los Viejos Lobos</h2><p>Antes de solicitar revisión, lean el registro juntos. La familia puede imprimirlo o guardarlo en PDF y compartirlo con la dirigencia. Ellos acordarán qué presas son necesarias y cuándo corresponde recibir la insignia.</p></div><div><p><strong>Recuerda:</strong> la ficha de salud y la autorización de salida Scout son formatos oficiales que entrega la dirigencia. No se cargan ni se sustituyen en este recorrido.</p><a class="secondary" href="assets/carnet-aventuras-manada-2024.pdf" target="_blank" rel="noopener">Consultar el carnet completo ↗</a></div></section></main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const mohwaBack = document.querySelector('.manada-journey-shell .topbar .secondary');
  if (mohwaBack) { mohwaBack.classList.add('menu-back'); mohwaBack.textContent = 'Mapa de progresiones'; }
  bindMohwa(state);
}

function bindMohwa(state) {
  const persist = () => { saveMohwa(state); refreshMohwaCounts(state); };
  document.querySelectorAll('[data-mohwa-jump]').forEach(button => button.onclick = () => {
    const target = document.getElementById(button.dataset.mohwaJump);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.querySelectorAll('[data-mohwa-profile]').forEach(input => input.oninput = () => { state.profile[input.dataset.mohwaProfile] = input.value; saveMohwa(state); });
  document.querySelectorAll('[data-prey-status]').forEach(select => select.onchange = () => { const id = select.dataset.preyStatus; state.prey[id] = { ...(state.prey[id] || {}), status: select.value }; persist(); const card = document.querySelector(`[data-prey-card="${id}"]`); card?.classList.toggle('is-active', select.value !== 'pending'); });
  document.querySelectorAll('[data-prey-date]').forEach(input => input.onchange = () => { const id = input.dataset.preyDate; state.prey[id] = { ...(state.prey[id] || {}), date: input.value }; saveMohwa(state); });
  document.querySelectorAll('[data-prey-note]').forEach(input => input.oninput = () => { const id = input.dataset.preyNote; state.prey[id] = { ...(state.prey[id] || {}), note: input.value }; saveMohwa(state); });
  document.querySelectorAll('[data-track-reflection]').forEach(input => input.oninput = () => { state.reflections = state.reflections || {}; state.reflections[input.dataset.trackReflection] = input.value; saveMohwa(state); });
  document.querySelector('#own-prey-form').onsubmit = e => { e.preventDefault(); const input = e.currentTarget.elements.title, title = input.value.trim(); if (!title) return; state.own.push({ title, status: 'pending' }); saveMohwa(state); mohwaPage(); };
  document.querySelectorAll('[data-own-status]').forEach(select => select.onchange = () => { state.own[Number(select.dataset.ownStatus)].status = select.value; persist(); });
  document.querySelectorAll('[data-remove-own]').forEach(button => button.onclick = () => { state.own.splice(Number(button.dataset.removeOwn), 1); saveMohwa(state); mohwaPage(); });
  document.querySelector('#print-mohwa').onclick = () => window.print();
}

function refreshMohwaCounts(state) {
  const done = mohwaDone(state), total = mohwaTotal(state);
  const count = document.querySelector('#mohwa-count'), progress = document.querySelector('#mohwa-progress');
  if (count) count.textContent = `${done} / ${total}`;
  if (progress) progress.value = done;
  MOHWA_TRACKS.forEach(track => { const label = document.querySelector(`[data-track-count="${track.id}"]`); if (label) label.textContent = `${mohwaCount(state, track)} / ${track.prey.length}`; });
}

/* Vista Mohwa renovada: identidad de Manada, relato de Seeonee y video por presa. */
function preyCard(track, item, state) {
  const [id, text, videoTitle] = item;
  const current = state.prey[id] || { status: 'pending', note: '', date: '' };
  const guide = MOHWA_GUIDES[id];
  return `<article class="prey-card ${current.status !== 'pending' ? 'is-active' : ''}" data-prey-card="${id}">
    <div class="prey-heading"><div class="prey-number">Presa</div><span class="prey-paw" aria-hidden="true">●</span></div>
    <p class="prey-statement">${text}</p>
    <div class="prey-video-slot" aria-label="Video tutorial considerado para esta presa">
      <span class="prey-video-icon" aria-hidden="true">▶</span>
      <span><small>Video tutorial</small><strong>${videoTitle}</strong></span>
      <em>Próximamente</em>
    </div>
    <details class="prey-howto">
      <summary>Cómo trabajar esta presa</summary>
      <div class="prey-howto-body">
        <section><h4>Práctica sugerida</h4><ol>${guide.steps.map(step => `<li>${step}</li>`).join('')}</ol></section>
        <section><h4>Señales de logro</h4><ul>${guide.evidence.map(item => `<li>${item}</li>`).join('')}</ul></section>
        <aside><strong>Consejo del carnet</strong><p>${guide.advice}</p></aside>
      </div>
    </details>
    <div class="prey-controls">
      <label class="field">Estado<select data-prey-status="${id}"><option value="pending" ${current.status === 'pending' ? 'selected' : ''}>Pendiente</option><option value="practiced" ${current.status === 'practiced' ? 'selected' : ''}>Practicada</option><option value="ready" ${current.status === 'ready' ? 'selected' : ''}>Lista para conversar</option></select></label>
      <label class="field">Fecha de práctica<input data-prey-date="${id}" type="date" value="${esc(current.date || '')}"></label>
    </div>
    <label class="field prey-note">Lo que aprendí o dónde lo practiqué<textarea data-prey-note="${id}" placeholder="Escribe una nota breve…">${esc(current.note || '')}</textarea></label>
  </article>`;
}

function mohwaPage() {
  const state = mohwaState();
  const profile = state.profile;
  app.innerHTML = `<div class="shell manada-journey-shell mohwa-shell">
    <header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary" href="#scout/aventuras">← Mapa de progresiones</a></header>
    <main id="main" class="container journey-container">
      <section class="journey-hero mohwa-hero">
        <div>
          <a href="#scout/aventuras">← Mi Camino de Aventuras</a>
          <p class="eyebrow">Aventuras en la Naturaleza · Un gran inicio</p>
          <h1>Mohwa</h1>
          <p>Toda aventura comienza bajo el árbol del Mohwa. Con el consejo de Baloo, cada Lobato y Lobezna empieza a afilar sus garras y colmillos mientras aprende a hacer, cuidar y compartir.</p>
          <div class="pills"><span class="pill">18 presas del carnet</span><span class="pill">3 territorios de aprendizaje</span><span class="pill">Registro familiar</span></div>
        </div>
        <figure class="mohwa-badge"><img src="assets/insignia-mohwa.png" alt="Insignia Mohwa: un gran inicio"><figcaption>Insignia Mohwa</figcaption></figure>
      </section>

      <section class="mohwa-story panel">
        <div class="mohwa-story-mark" aria-hidden="true">M</div>
        <div><p class="eyebrow">El comienzo en Seeonee</p><h2>Baloo acompaña la primera cacería</h2><p>Mohwa es el punto de partida del camino. Aquí se descubren habilidades de cabuyería, campismo y exploración mediante pequeñas presas que se practican en casa, en las cacerías y con la Manada. No se trata de terminar deprisa: se trata de aprender con atención, ganar autonomía y estar listo para compartir lo aprendido con los Viejos Lobos.</p></div>
      </section>

      <section class="panel mohwa-carnet-index">
        <div><p class="eyebrow">Consulta directa</p><h2>Busca la explicación en el carnet</h2><p>Abre el documento en la página donde comienza cada territorio de Mohwa.</p></div>
        <div class="carnet-page-links">
          <a href="assets/carnet-aventuras-manada-2024.pdf#page=16" target="_blank" rel="noopener"><span>16</span><strong>Mapa de Mohwa</strong><small>Contenido de la insignia</small></a>
          ${MOHWA_TRACKS.map(track => `<a href="assets/carnet-aventuras-manada-2024.pdf#page=${track.page}" target="_blank" rel="noopener"><span>${track.page}</span><strong>${track.title}</strong><small>${track.sectionTitle}</small></a>`).join('')}
        </div>
        <a class="secondary carnet-full-link" href="assets/carnet-aventuras-manada-2024.pdf" target="_blank" rel="noopener">Abrir el carnet completo ↗</a>
      </section>

      <section class="panel family-record">
        <div><p class="eyebrow">Mi rastro en la selva</p><h2>¿Quién está recorriendo Mohwa?</h2><p>Estos datos identifican la hoja de seguimiento que la familia podrá revisar con la dirigencia. Se guardan solamente en este navegador.</p></div>
        <div class="form-grid"><label class="field">Nombre de la Manada<input data-mohwa-profile="pack" value="${esc(profile.pack || '')}" placeholder="Nombre de la Manada"></label><label class="field">Grupo Scout<input data-mohwa-profile="group" value="${esc(profile.group || '')}" placeholder="Número o nombre"></label></div>
      </section>

      <section class="mohwa-summary">
        <div><strong id="mohwa-count">${mohwaDone(state)} / ${mohwaTotal(state)}</strong><span>presas con avance registrado</span></div>
        <progress id="mohwa-progress" value="${mohwaDone(state)}" max="${mohwaTotal(state)}"></progress>
        <p>La marca registra práctica; los Viejos Lobos acompañan y acuerdan el avance.</p>
        <button class="secondary" type="button" id="print-mohwa">Imprimir / guardar seguimiento</button>
      </section>

      <nav class="mohwa-path-nav" aria-label="Territorios de Mohwa">${MOHWA_TRACKS.map(track => `<button type="button" data-mohwa-jump="mohwa-${track.id}"><span>${track.icon}</span><strong>${track.title}</strong><small>${mohwaCount(state, track)} de ${track.prey.length}</small></button>`).join('')}</nav>

      <section class="mohwa-tracks">${MOHWA_TRACKS.map((track, index) => `<section class="panel mohwa-track track-${track.id}" id="mohwa-${track.id}">
        <header><span class="track-index">0${index + 1}</span><span class="track-icon" aria-hidden="true">${track.icon}</span><div><p class="eyebrow">Territorio de Mohwa</p><h2>${track.title}</h2><p>${track.sectionTitle}</p><p>${track.intro}</p><a class="track-carnet-link" href="assets/carnet-aventuras-manada-2024.pdf#page=${track.page}" target="_blank" rel="noopener">Consultar el carnet · página ${track.page} ↗</a></div><strong class="track-progress" data-track-count="${track.id}">${mohwaCount(state, track)} / ${track.prey.length}</strong></header>
        <aside class="track-story"><span>Relato de Seeonee</span><p>${track.myth}</p></aside>
        <details class="dentelladas"><summary>Preparar la cacería: dentelladas y consejos</summary><div class="guide-details"><div><h3>Dentelladas para practicar</h3><ul>${track.dentelladas.map(x => `<li>${x}</li>`).join('')}</ul></div><div><h3>Consejos para familia y Manada</h3><ul>${track.tips.map(x => `<li>${x}</li>`).join('')}</ul></div></div></details>
        <div class="prey-list">${track.prey.map(item => preyCard(track, item, state)).join('')}</div>
        <section class="always-best"><p class="eyebrow">Siempre lo mejor</p><h3>Aprendo y comparto</h3><p>Al terminar estas dentelladas, escribe qué aprendiste y qué consejo compartirías con otros Lobatos y Lobeznas.</p><label class="field">Mi reflexión<input data-track-reflection="${track.id}" value="${esc((state.reflections || {})[track.id] || '')}" placeholder="Lo que aprendí o el consejo que quiero compartir"></label></section>
      </section>`).join('')}</section>

      <section class="panel own-prey"><div><p class="eyebrow">Mi propuesta</p><h2>Mis propias presas</h2><p>El carnet permite imaginar nuevas presas y compartirlas con la Manada. Regístrenlas como propuesta para que los Viejos Lobos ayuden a convertirlas en una experiencia de aprendizaje.</p></div><form id="own-prey-form" class="own-prey-form"><label class="field">Mi presa propuesta<input name="title" required maxlength="220" placeholder="Ejemplo: enseñé a mi seisena a cuidar la piola"></label><button class="primary">Agregar propuesta</button></form><div id="own-prey-list">${state.own.length ? state.own.map((item, i) => `<article class="own-prey-item"><div><strong>${esc(item.title)}</strong><small>${mohwaStatus(item.status || 'pending')}</small></div><select data-own-status="${i}"><option value="pending" ${item.status === 'pending' ? 'selected' : ''}>Pendiente</option><option value="practiced" ${item.status === 'practiced' ? 'selected' : ''}>Practicada</option><option value="ready" ${item.status === 'ready' ? 'selected' : ''}>Lista para conversar</option></select><button class="text-button" type="button" data-remove-own="${i}">Quitar</button></article>`).join('') : '<p class="muted">Aún no hay propuestas propias.</p>'}</div></section>

      <section class="panel leader-handoff"><div><p class="eyebrow">Consejo de la Roca</p><h2>Compartir el rastro con los Viejos Lobos</h2><p>Antes de conversar con la dirigencia, revisen juntos las prácticas, fechas y reflexiones. La familia puede imprimir este registro o guardarlo como PDF para explicar qué hizo el Lobato o la Lobezna y qué aprendió.</p></div><div><p><strong>El registro acompaña la conversación:</strong> no reemplaza el carnet ni la orientación de los Viejos Lobos. La ficha de salud y la autorización de salida son formatos oficiales que entrega la dirigencia.</p><a class="secondary" href="assets/carnet-aventuras-manada-2024.pdf" target="_blank" rel="noopener">Consultar el carnet completo ↗</a></div></section>
    </main>
  </div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const mohwaBack = document.querySelector('.manada-journey-shell .topbar .secondary');
  if (mohwaBack) { mohwaBack.classList.add('menu-back'); mohwaBack.textContent = 'Mapa de progresiones'; }
  bindMohwa(state);
}
