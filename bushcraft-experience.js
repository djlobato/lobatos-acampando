/* Experiencia unificada de Bushcraft.
   Solo se asignan como publicados los videos clasificados para esta modalidad. */

const BUSHCRAFT_VIDEO_LIBRARY = {
  packLoad: ['vIJZS9yTE3g', '¿Qué llevar en una mochila para el monte?', 'Video publicado'],
  shelter: ['EAIb58gMdQI', 'Tienda Bushcraft Bungalow 2.0 OneTigris', 'Video publicado'],
  fireStarter: ['UEEO2BJDIyM', 'Iniciadores de fuego caseros para camping', 'Video publicado'],
  fireTypes: ['M6-9N9WIc94', 'Tipos de fogatas básicas y para qué sirven', 'Video publicado'],
  backpack: ['NT6muu9--74', 'Mochila SKALA 40 L', 'Video publicado'],
  knife: ['s_mGc2RxzLE', 'My First Victorinox', 'Video publicado']
};

const BUSHCRAFT_PLANNED_VIDEOS = {
  rules: [null, 'Cómo comprobar permisos y límites de una práctica Bushcraft', 'Próximamente'],
  sitePlan: [null, 'Diseña un campamento de práctica y una salida segura', 'Próximamente'],
  pack: [null, 'Organización de una mochila Bushcraft', 'Próximamente'],
  assaultPack: [null, 'Mochila de ataque para explorar desde el campamento', 'Próximamente'],
  tarp: [null, 'Montaje de tarp sin dañar árboles', 'Próximamente'],
  cordage: [null, 'Cordajes, correas protectoras y anclajes', 'Próximamente'],
  sleep: [null, 'Sistema de dormir para un campamento Bushcraft', 'Próximamente'],
  pad: [null, 'Aislamiento del suelo: espuma y colchoneta', 'Próximamente'],
  hammock: [null, 'Hamaca, correas y aislamiento inferior', 'Próximamente'],
  fieldKnife: [null, 'Selección y uso seguro de un cuchillo de campo', 'Próximamente'],
  saw: [null, 'Sierra plegable: corte controlado y mantenimiento', 'Próximamente'],
  axe: [null, 'Hachuela: zona segura, base y técnica básica', 'Próximamente'],
  gloves: [null, 'Cuándo usar guantes en trabajos de campamento', 'Próximamente'],
  sharpening: [null, 'Afilado y cuidado básico de herramientas', 'Próximamente'],
  stove: [null, 'Estufa y combustible como alternativa a la fogata', 'Próximamente'],
  extinguish: [null, 'Control y apagado completo de una fogata', 'Próximamente'],
  pot: [null, 'Olla de campo y cocina con una fuente autorizada', 'Próximamente'],
  food: [null, 'Alimentación y reserva para trabajo de campo', 'Próximamente'],
  waterContainers: [null, 'Recipientes para agua tratada y agua cruda', 'Próximamente'],
  waterTreatment: [null, 'Tratamiento de agua y método de respaldo', 'Próximamente'],
  navigation: [null, 'Mapa, brújula y mapa sin conexión', 'Próximamente'],
  communication: [null, 'Comunicación y energía fuera de cobertura', 'Próximamente'],
  firstAid: [null, 'Botiquín para cortes, quemaduras y evacuación', 'Próximamente'],
  headlamp: [null, 'Linterna frontal para trabajo y desplazamiento', 'Próximamente'],
  sanitation: [null, 'Sistema sanitario sin contaminar el sitio', 'Próximamente'],
  waste: [null, 'Retiro de residuos y revisión final del terreno', 'Próximamente'],
  wildlife: [null, 'Alimentos, olores y protección de fauna', 'Próximamente'],
  repair: [null, 'Kit de reparación para refugio, mochila y equipo', 'Próximamente']
};

const BUSHCRAFT_ITEM_VIDEOS = {
  'bc-permiso': [BUSHCRAFT_PLANNED_VIDEOS.rules],
  'bc-plan': [BUSHCRAFT_PLANNED_VIDEOS.sitePlan],
  'bc-mochila': [BUSHCRAFT_VIDEO_LIBRARY.packLoad, BUSHCRAFT_VIDEO_LIBRARY.backpack, BUSHCRAFT_PLANNED_VIDEOS.pack],
  'bc-dia': [BUSHCRAFT_VIDEO_LIBRARY.packLoad, BUSHCRAFT_PLANNED_VIDEOS.assaultPack],
  'bc-tarp': [BUSHCRAFT_VIDEO_LIBRARY.shelter, BUSHCRAFT_PLANNED_VIDEOS.tarp],
  'bc-cordaje': [BUSHCRAFT_PLANNED_VIDEOS.cordage],
  'bc-saco': [BUSHCRAFT_PLANNED_VIDEOS.sleep],
  'bc-aislante': [BUSHCRAFT_PLANNED_VIDEOS.pad],
  'bc-hamaca': [BUSHCRAFT_PLANNED_VIDEOS.hammock],
  'bc-cuchillo': [BUSHCRAFT_PLANNED_VIDEOS.fieldKnife],
  'bc-sierra': [BUSHCRAFT_PLANNED_VIDEOS.saw],
  'bc-hacha': [BUSHCRAFT_PLANNED_VIDEOS.axe],
  'bc-guantes': [BUSHCRAFT_PLANNED_VIDEOS.gloves],
  'bc-mantenimiento': [BUSHCRAFT_PLANNED_VIDEOS.sharpening],
  'bc-estufa': [BUSHCRAFT_PLANNED_VIDEOS.stove],
  'bc-encendido': [BUSHCRAFT_VIDEO_LIBRARY.fireStarter],
  'bc-control-fuego': [BUSHCRAFT_PLANNED_VIDEOS.extinguish],
  'bc-olla': [BUSHCRAFT_PLANNED_VIDEOS.pot],
  'bc-alimentos': [BUSHCRAFT_PLANNED_VIDEOS.food],
  'bc-agua': [BUSHCRAFT_PLANNED_VIDEOS.waterContainers],
  'bc-tratamiento': [BUSHCRAFT_PLANNED_VIDEOS.waterTreatment],
  'bc-navegacion': [BUSHCRAFT_PLANNED_VIDEOS.navigation],
  'bc-comunicacion': [BUSHCRAFT_PLANNED_VIDEOS.communication],
  'bc-botiquin': [BUSHCRAFT_PLANNED_VIDEOS.firstAid],
  'bc-frontal': [BUSHCRAFT_PLANNED_VIDEOS.headlamp],
  'bc-bano': [BUSHCRAFT_PLANNED_VIDEOS.sanitation],
  'bc-basura': [BUSHCRAFT_PLANNED_VIDEOS.waste],
  'bc-alimentos-fauna': [BUSHCRAFT_PLANNED_VIDEOS.wildlife],
  'bc-reparacion': [BUSHCRAFT_PLANNED_VIDEOS.repair]
};

const BUSHCRAFT_EXPERIENCE_GROUPS = [
  {
    id: 'reglas', number: '01', icon: '▤', title: 'Reglas y planificación',
    summary: 'Define el lugar, las técnicas permitidas y el plan de regreso antes de empacar herramientas.',
    decision: 'Si no puedes confirmar permiso para fuego, corte, recolección o estructuras, elimina esa práctica del plan.',
    sections: [
      ['Permiso para cada técnica', `<p>Identifica quién administra el terreno y consulta por separado acceso, pernocta, fogata, estufa, recolección, corte, excavación y construcción. Una reserva de campamento no autoriza automáticamente modificar el lugar ni utilizar madera.</p><p>Trabaja con material propio o expresamente autorizado. No cortes árboles vivos, no retires recursos de áreas protegidas y no construyas estructuras permanentes.</p>`],
      ['Itinerario y límites de la práctica', `<p>Registra acceso, coordenadas, vehículo, integrantes, horarios, agua, campamento y salida alternativa. Entrega a una persona responsable una hora concreta para activar ayuda si no reportas regreso.</p><p>Describe qué se practicará, quién supervisa, qué herramienta se usará y cuándo se detendrá la actividad. Viento, sequía, fatiga, oscuridad o falta de espacio seguro son razones para cambiar el plan.</p>`]
    ],
    videos: [BUSHCRAFT_PLANNED_VIDEOS.rules, BUSHCRAFT_PLANNED_VIDEOS.sitePlan]
  },
  {
    id: 'transporte', number: '02', icon: '🎒', title: 'Transporte y organización',
    summary: 'Distribuye campamento, agua, herramientas y respuesta de emergencia sin crear una carga inestable.',
    decision: 'La mochila principal sostiene el campamento; la de ataque solo conserva autonomía básica cuando te separas de él.',
    sections: [
      ['Ajuste y orden de la mochila principal', `<p>Elige el volumen después de reunir el equipo. Ajusta longitud de torso, cinturón y tirantes con la carga real. Coloca objetos densos cerca de la espalda y protege filos con funda; ninguna herramienta debe moverse, golpear o quedar expuesta.</p><p>Los bolsillos o sistemas modulares sirven para equipo de acceso rápido, pero demasiado peso por fuera altera el equilibrio y puede engancharse. Pesa el conjunto con agua y comida.</p>`],
      ['Módulo de salida desde el campamento', `<p>La mochila de ataque mantiene agua, impermeable, aislamiento, navegación, alimento, frontal, botiquín y comunicación durante un recorrido corto. No dependas de regresar al campamento para resolver un cambio de clima o una demora.</p><p>Una referencia de 15–25 L puede ser útil, pero ajuste, duración y equipo real deciden el tamaño. Pruébala caminando antes de la salida.</p>`]
    ],
    videos: [BUSHCRAFT_VIDEO_LIBRARY.packLoad, BUSHCRAFT_VIDEO_LIBRARY.backpack, BUSHCRAFT_PLANNED_VIDEOS.pack, BUSHCRAFT_PLANNED_VIDEOS.assaultPack]
  },
  {
    id: 'refugio', number: '03', icon: '⛺', title: 'Refugio y descanso',
    summary: 'Monta protección contra clima sin dañar árboles y conserva aislamiento real frente al suelo o al aire.',
    decision: 'El tarp controla lluvia y viento; el aislante y el saco controlan la pérdida de calor. Necesitas ambos sistemas.',
    sections: [
      ['Tarp, anclajes y distancia del fuego', `<p>Elige tamaño, tejido y configuración según precipitación, viento, número de personas y habilidad. Usa correas anchas cuando rodees árboles y retira todo el cordaje al salir. Mantén líneas visibles fuera de las rutas de paso.</p><p>Canvas y algodón tratado pueden tolerar mejor pequeñas chispas que tejidos sintéticos, pero <strong>ningún tarp es incombustible</strong>. Mantén combustión y monóxido de carbono fuera del refugio y respeta la distancia indicada por el fabricante.</p>`],
      ['Suelo, bolsa y hamaca', `<p>Combina saco, manta o quilt con aislamiento inferior suficiente. La espuma de celda cerrada resiste perforaciones y puede proteger una colchoneta inflable. Prueba el sistema completo antes de una noche fría.</p><p>Una hamaca necesita árboles sanos, correas anchas, suspensión compatible y underquilt o aislante inferior. Revisa ramas superiores y marca No aplica cuando el lugar no tenga anclajes adecuados o restrinja su uso.</p>`]
    ],
    videos: [BUSHCRAFT_VIDEO_LIBRARY.shelter, BUSHCRAFT_PLANNED_VIDEOS.tarp, BUSHCRAFT_PLANNED_VIDEOS.cordage, BUSHCRAFT_PLANNED_VIDEOS.sleep, BUSHCRAFT_PLANNED_VIDEOS.hammock]
  },
  {
    id: 'herramientas', number: '04', icon: '🪓', title: 'Herramientas',
    summary: 'Selecciona la herramienta más controlable para una tarea permitida y prepara una zona de trabajo.',
    decision: 'Una herramienta se incluye solo si hay necesidad, competencia, funda y espacio para usarla sin exponer a otras personas.',
    sections: [
      ['Zona segura y herramienta adecuada', `<p>Separa a observadores del recorrido completo de la herramienta. Trabaja sobre base estable y corta alejándote del cuerpo. El cuchillo resuelve tareas finas, la sierra corta transversalmente con eficiencia y el hacha divide material cuando existe espacio y experiencia.</p><p>No uses cuchillos como palanca ni golpees la punta. Para partir con hachuela, coloca la pieza sobre un tocón, mantén pies y piernas fuera de la trayectoria y detente si cambia el equilibrio o la visibilidad.</p>`],
      ['Filo, funda y mantenimiento', `<p>Un filo controlable requiere geometría, acero y tratamiento adecuados a la tarea. Revisa holguras, mango, tornillos, dientes, funda y mecanismo antes de cada uso. Guarda filos secos y protegidos.</p><p>Retoca el filo antes de que pierda control, con el método compatible que ya practicaste. El mantenimiento se realiza lejos del área de comida y con la herramienta inmovilizada.</p>`]
    ],
    videos: [BUSHCRAFT_VIDEO_LIBRARY.knife, BUSHCRAFT_PLANNED_VIDEOS.fieldKnife, BUSHCRAFT_PLANNED_VIDEOS.saw, BUSHCRAFT_PLANNED_VIDEOS.axe, BUSHCRAFT_PLANNED_VIDEOS.sharpening]
  },
  {
    id: 'cocina-fuego', number: '05', icon: '🔥', title: 'Alimentación, cocina y fuego',
    summary: 'Conserva una cocina autorizada y trata la fogata como una actividad opcional que debe poder extinguirse.',
    decision: 'La estufa es el sistema predecible. Solo enciende fogata si está permitida y tienes agua, herramienta y supervisión continua.',
    sections: [
      ['Encendido y control', `<p>Comprueba las restricciones el mismo día. Prepara primero agua y medio de extinción; después delimita el área y reúne únicamente el combustible autorizado. No uses gasolina, alcohol ni acelerantes líquidos.</p><p>Encendedor y cerillos protegidos son métodos directos. El ferrocerio exige yesca adecuada y práctica; no convierte una prohibición en permiso. Mantén el fuego pequeño y suspéndelo si cambia el viento.</p>`],
      ['Cocina, raciones y apagado', `<p>La estufa se usa al aire libre, estable y según su manual. Calcula combustible por menú y conserva una alternativa que no dependa de fogata. El material de la olla se elige por tipo de cocción, robustez y peso.</p><p>Para cerrar, agrega agua, mezcla brasas y ceniza, repite y comprueba en frío. No entierres brasas. Empaca comida y una reserva, y retira todos los residuos.</p>`]
    ],
    videos: [BUSHCRAFT_VIDEO_LIBRARY.fireStarter, BUSHCRAFT_VIDEO_LIBRARY.fireTypes, BUSHCRAFT_PLANNED_VIDEOS.extinguish, BUSHCRAFT_PLANNED_VIDEOS.stove, BUSHCRAFT_PLANNED_VIDEOS.food]
  },
  {
    id: 'agua', number: '06', icon: '💧', title: 'Agua',
    summary: 'Separa agua cruda y tratada, conoce los límites del método y protege el filtro del frío.',
    decision: 'La apariencia clara no indica potabilidad. Lleva capacidad suficiente y un respaldo compatible con el riesgo del lugar.',
    sections: [
      ['Recipientes sin contaminación cruzada', `<p>Calcula capacidad desde la última fuente confirmada hasta la siguiente, incluido el consumo de cocina. Marca qué recipiente recibe agua cruda y cuál guarda agua tratada; evita que boquillas y manos contaminadas toquen el lado limpio.</p><p>Solo un recipiente metálico de pared simple diseñado para calor puede usarse para hervir. Nunca pongas al fuego una botella aislada o de doble pared.</p>`],
      ['Filtro, químicos y ebullición', `<p>Un filtro de fibra hueca suele reducir protozoos y bacterias, pero no necesariamente virus o químicos. Si se congela mojado puede fallar sin daño visible. Revisa especificaciones, limpieza y caudal del modelo.</p><p>Define un respaldo: químicos respetando dosis y tiempo, o ebullición con combustible suficiente. La turbidez y la temperatura cambian el proceso.</p>`]
    ],
    videos: [BUSHCRAFT_PLANNED_VIDEOS.waterContainers, BUSHCRAFT_PLANNED_VIDEOS.waterTreatment]
  },
  {
    id: 'orientacion', number: '07', icon: '🧭', title: 'Orientación y comunicación',
    summary: 'Mantén mapa y brújula como referencia independiente y prepara energía y comunicación para la zona real.',
    decision: 'Comprueba posición antes de perder referencias; una batería externa mantiene el teléfono encendido, pero no crea cobertura.',
    sections: [
      ['Mapa, brújula y puntos críticos', `<p>Marca acceso, campamento, agua, cruces, desniveles y salidas. Descarga cartografía y track antes de salir, protege el mapa físico y conoce la declinación aplicable.</p><p>Verifica la posición en cada cruce importante. Si la observación del terreno no coincide con el mapa, detente y resuelve antes de avanzar.</p>`],
      ['Comunicación y protocolo', `<p>Calcula batería por duración, frío y uso del GPS. Protege cables y dispositivos del agua, usa modo avión cuando corresponda y conserva energía para una emergencia.</p><p>Fuera de cobertura, valora mensajero satelital o localizador según aislamiento. Comparte horarios de reporte, hora límite y quién activará ayuda.</p>`]
    ],
    videos: [BUSHCRAFT_PLANNED_VIDEOS.navigation, BUSHCRAFT_PLANNED_VIDEOS.communication]
  },
  {
    id: 'seguridad', number: '08', icon: '✚', title: 'Seguridad, salud y residuos',
    summary: 'Prepara auxilio, luz, higiene, protección de alimentos y reparación antes de comenzar la práctica.',
    decision: 'El botiquín responde a riesgos y tiempo de evacuación; el cierre termina cuando no queda residuo, cordaje ni material de práctica.',
    sections: [
      ['Cortes, quemaduras y evacuación', `<p>Incluye material para control inicial de hemorragias, irrigación y cobertura de heridas, quemaduras, esguinces y medicamentos personales. Añade solo equipo que el grupo esté formado para usar.</p><p>Define responsable, ubicación del botiquín, acceso para evacuación y forma de detener la actividad. Mantén una frontal accesible por persona y energía compatible.</p>`],
      ['Sanidad, fauna y reparación', `<p>Usa instalaciones existentes. Cuando no existan, aplica únicamente el método autorizado para residuos humanos y mantén higiene lejos de fuentes. Retira papel y productos de higiene cuando lo indiquen las reglas.</p><p>Protege comida, basura y artículos con olor con el sistema exigido por el lugar. Lleva reparaciones compatibles con refugio y mochila, y realiza una revisión final del área antes de partir.</p>`]
    ],
    videos: [BUSHCRAFT_PLANNED_VIDEOS.firstAid, BUSHCRAFT_PLANNED_VIDEOS.sanitation, BUSHCRAFT_PLANNED_VIDEOS.wildlife, BUSHCRAFT_PLANNED_VIDEOS.repair]
  }
];
