/* Camping con coche · experiencia familiar organizada por decisiones.
   El contenido técnico base permanece en car-guide-pro.js; aquí se agrupa,
   se relaciona con videos y se alinea el checklist con el recorrido. */

const CAR_VIDEO_LIBRARY = {
  familyChecklist: ['S0y6ajbTrKg', '¿Qué llevamos para un camping familiar?', 'Video publicado'],
  arpenaz: ['v3b2SwFLEJM', 'Cómo instalar Arpenaz Family 4.1 F&B Quechua', 'Video publicado'],
  colemanTent: ['MzRiI0ytFqM', 'Cómo instalar Coleman Instant Tent para 8 personas', 'Video publicado'],
  tentComparison: ['rPBMD8Nfabs', '¿Arpenaz Family 4.1 F&B o Instant Tent 8P?', 'Video publicado'],
  poles: ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Video publicado'],
  mesh: ['Dg6QOMleD5o', 'Cómo reparar la malla de una tienda de campaña', 'Video publicado'],
  footprint: ['BSY4E3g4YHQ', 'Cómo reparar un toldo o huella de tienda', 'Video publicado'],
  waterproof: ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Video publicado'],
  sealant: ['lkyYT_IhsDk', 'Sellador de pintura vs. impermeabilizante para tiendas de campaña', 'Video publicado'],
  condensation: ['q4wkpBTLdZM', 'Cómo disminuir la condensación en la tienda', 'Video publicado'],
  kidsTent: ['EWvfVxb9JTI', 'Arma tu tienda: guía para niñas y niños', 'Video publicado'],
  sleeping: ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Video publicado'],
  sleepingColemanKids: ['DWO1Og32bNk', 'Sleeping Coleman Kids 50°F (10°C): ¿realmente funciona?', 'Video publicado'],
  sleepingColemanYouth: ['S-fV50RlOu4', 'Coleman Plum Fun 45°F (7°C): sleeping juvenil', 'Video publicado'],
  sleepingStore: ['YXQddwtFLk0', 'Cómo guardar y transportar tu sleeping', 'Video publicado'],
  sleepingWarm: ['FvLxxc8hrcQ', 'Recomendaciones para dormir caliente', 'Video publicado'],
  sleepingExtend: ['Es82QAg1gys', 'Cómo extender el rango térmico de tu sistema de dormir', 'Video publicado'],
  stoveCompact: ['szYlu32mnRs', 'BRS-32: estufa de 2 quemadores en poco espacio', 'Video publicado'],
  stoveConnect: ['IgDUkKfkZ6Y', 'Cómo conectar una estufa de gas de campamento', 'Video publicado'],
  bottle: ['Zfd6RlcPW8U', 'Botella Nalgene: uso y cuidado en campamento', 'Video publicado'],
  fireFamily: ['rffe2D_1Nbs', 'Aprender haciendo: fogata en campamento familiar a 6 °C', 'Video publicado'],
  fireKitchen: ['PB42UAHTS1s', 'Setup básico: cocina de camping para fogata', 'Video publicado'],
  fireStarter: ['UEEO2BJDIyM', 'Iniciadores de fuego para campamento', 'Video publicado'],
  fireBasics: ['M6-9N9WIc94', 'Fogatas básicas: preparación, control y apagado', 'Video publicado'],
  clothesFold: ['H0h5B-UxwN8', 'Cómo doblar ropa para organizar el equipaje', 'Video publicado']
};

const CAR_FAMILY_STORIES = [
  ['07FCRUUbIvs', 'Acampando en Familia · Zirahuén', 'Experiencia en familia'],
  ['W814l_xkHjY', 'Una historia que llegó sola · camping', 'Experiencia en familia']
];

const CAR_PLANNED_VIDEOS = {
  tarp: [null, 'Cómo elegir y montar un toldo para campamento familiar', 'Próximamente'],
  lighting: [null, 'Iluminación personal y del campamento: frontales, faroles y autonomía', 'Próximamente'],
  daypack: [null, 'Cómo preparar una mochila de día para una excursión familiar', 'Próximamente'],
  furniture: [null, 'Mesas, sillas y estación de cocina: estabilidad y seguridad', 'Próximamente'],
  boxes: [null, 'Cómo organizar cajas y cargar el equipo en el vehículo', 'Próximamente'],
  clothing: [null, 'Cómo preparar ropa por capas para un camping familiar', 'Próximamente'],
  hygiene: [null, 'Higiene, botiquín y plan de emergencia familiar', 'Próximamente']
};

const CAR_ITEM_VIDEOS = {
  mapa: [CAR_VIDEO_LIBRARY.familyChecklist],
  energia: [CAR_VIDEO_LIBRARY.familyChecklist],
  'carga-vehiculo': [CAR_PLANNED_VIDEOS.boxes],
  'llegada-inmediata': [CAR_VIDEO_LIBRARY.familyChecklist],
  tienda: [CAR_VIDEO_LIBRARY.arpenaz, CAR_VIDEO_LIBRARY.colemanTent, CAR_VIDEO_LIBRARY.tentComparison, CAR_VIDEO_LIBRARY.kidsTent, CAR_VIDEO_LIBRARY.condensation],
  estacas: [CAR_VIDEO_LIBRARY.arpenaz, CAR_VIDEO_LIBRARY.kidsTent],
  suelo: [CAR_VIDEO_LIBRARY.footprint],
  sombra: [CAR_PLANNED_VIDEOS.tarp],
  'toldo-anclajes': [CAR_PLANNED_VIDEOS.tarp],
  mesa: [CAR_PLANNED_VIDEOS.furniture],
  sillas: [CAR_PLANNED_VIDEOS.furniture],
  juegos: [[null, 'Juegos y actividades para convivir en el campamento', 'Próximamente']],
  saco: [CAR_VIDEO_LIBRARY.sleeping, CAR_VIDEO_LIBRARY.sleepingColemanKids, CAR_VIDEO_LIBRARY.sleepingColemanYouth, CAR_VIDEO_LIBRARY.sleepingWarm, CAR_VIDEO_LIBRARY.sleepingExtend],
  colchon: [CAR_VIDEO_LIBRARY.sleeping, CAR_VIDEO_LIBRARY.sleepingWarm, CAR_VIDEO_LIBRARY.sleepingExtend],
  almohada: [[null, 'Cómo completar un sistema de descanso cómodo', 'Próximamente']],
  inflador: [[null, 'Inflado, revisión de fugas y reparación de colchonetas', 'Próximamente']],
  agua: [CAR_VIDEO_LIBRARY.bottle],
  tratamiento: [[null, 'Cómo elegir y usar un sistema de tratamiento de agua', 'Próximamente']],
  comida: [CAR_VIDEO_LIBRARY.familyChecklist],
  nevera: [[null, 'Cómo organizar una hielera y mantener la cadena de frío', 'Próximamente']],
  estufa: [CAR_VIDEO_LIBRARY.stoveCompact, CAR_VIDEO_LIBRARY.stoveConnect],
  combustible: [CAR_VIDEO_LIBRARY.stoveConnect],
  ollas: [CAR_VIDEO_LIBRARY.stoveCompact],
  vajilla: [[null, 'Vajilla reutilizable y organización del comedor', 'Próximamente']],
  lavado: [[null, 'Lavado de utensilios y manejo de aguas grises', 'Próximamente']],
  'caja-alimentos': [[null, 'Cómo organizar alimentos secos y artículos con olor', 'Próximamente']],
  'fuego-reglas': [CAR_VIDEO_LIBRARY.fireFamily, CAR_VIDEO_LIBRARY.fireBasics],
  'fuego-encendido': [CAR_VIDEO_LIBRARY.fireStarter, CAR_VIDEO_LIBRARY.fireBasics],
  'fuego-control': [CAR_VIDEO_LIBRARY.fireFamily, CAR_VIDEO_LIBRARY.fireBasics],
  'fuego-area': [CAR_VIDEO_LIBRARY.fireKitchen, CAR_VIDEO_LIBRARY.fireBasics],
  frontal: [CAR_PLANNED_VIDEOS.lighting],
  farol: [CAR_PLANNED_VIDEOS.lighting],
  'luz-respaldo': [CAR_PLANNED_VIDEOS.lighting],
  'bolsa-ropa': [CAR_VIDEO_LIBRARY.clothesFold],
  'mochila-dia': [CAR_PLANNED_VIDEOS.daypack],
  cajas: [CAR_PLANNED_VIDEOS.boxes],
  reparacion: [CAR_VIDEO_LIBRARY.poles, CAR_VIDEO_LIBRARY.mesh, CAR_VIDEO_LIBRARY.footprint],
  herramientas: [[null, 'Herramientas y reparaciones básicas para camping con coche', 'Próximamente']],
  capas: [CAR_PLANNED_VIDEOS.clothing],
  lluvia: [CAR_PLANNED_VIDEOS.clothing],
  calzado: [[null, 'Cómo elegir calzado para el camping y sus excursiones', 'Próximamente']],
  sol: [[null, 'Protección frente al sol para toda la familia', 'Próximamente']],
  'carpa-bano': [CAR_PLANNED_VIDEOS.hygiene],
  inodoro: [CAR_PLANNED_VIDEOS.hygiene],
  'consumibles-bano': [CAR_PLANNED_VIDEOS.hygiene],
  'transporte-residuos': [CAR_PLANNED_VIDEOS.hygiene],
  lavamanos: [CAR_PLANNED_VIDEOS.hygiene],
  'aguas-grises': [CAR_PLANNED_VIDEOS.hygiene],
  botiquin: [CAR_PLANNED_VIDEOS.hygiene],
  higiene: [CAR_PLANNED_VIDEOS.hygiene],
  repelente: [[null, 'Cómo preparar protección contra insectos', 'Próximamente']],
  basura: [[null, 'Cómo separar, guardar y retirar los residuos del campamento', 'Próximamente']]
};

const carTechnicalBody = index => PROFESSIONAL_CAR_GUIDE.sections[index][1];

const CAR_EXPERIENCE_GROUPS = [
  {
    id: 'planear', number: '01', icon: '🚙', title: 'Planeación y vehículo',
    summary: 'Confirma el destino, calcula la carga y decide el orden de descarga antes de elegir más equipo.',
    decision: 'Si un dato crítico sigue por confirmar, la salida todavía tiene un pendiente; no lo sustituyas con una suposición.',
    sections: [
      ['Definir las condiciones antes de elegir equipo', carTechnicalBody(0)],
      ['Vehículo, carga y orden de descarga', carTechnicalBody(1)]
    ],
    videos: [CAR_VIDEO_LIBRARY.familyChecklist, CAR_PLANNED_VIDEOS.boxes]
  },
  {
    id: 'refugio', number: '02', icon: '⛺', title: 'Refugio y zona de convivencia',
    summary: 'Dimensiona tienda, toldo, parcela y anclajes como un solo sistema expuesto a lluvia, viento y uso familiar.',
    decision: 'La capacidad nominal, el denier o la columna de agua no bastan por sí solos: revisa espacio real, costuras, ventilación, montaje y límites del fabricante.',
    sections: [
      ['Tienda familiar: capacidad y espacio utilizable', carTechnicalBody(2)],
      ['Tejidos, denier, recubrimientos y columna de agua', carTechnicalBody(3)],
      ['Condensación, viento y montaje', carTechnicalBody(4)],
      ['Toldo y zona de convivencia', `<p>El toldo crea sombra y un espacio protegido para convivir, pero no debe tratarse como una extensión cerrada de la tienda. Mide el área completa que necesitarán el techo, los vientos y las rutas de paso; confirma que la parcela permita ese despliegue.</p><div class="table-wrap"><table><thead><tr><th>Sistema</th><th>Ventaja</th><th>Límite práctico</th></tr></thead><tbody><tr><td>Canopy plegable</td><td>Montaje rápido y superficie definida</td><td>Pesado; sus patas y techo pueden sufrir con ráfagas</td></tr><tr><td>Tarp</td><td>Ligero, adaptable y fácil de guardar</td><td>Exige puntos de anclaje, tensión y práctica</td></tr><tr><td>Avance de tienda</td><td>Acceso inmediato al refugio</td><td>Área menor y dependencia del diseño de la tienda</td></tr></tbody></table></div><p>Usa todos los puntos estructurales previstos, estacas adecuadas al suelo y líneas visibles. No copies un límite de viento de otro modelo. Retira o baja el toldo cuando las condiciones se acerquen al límite indicado por el fabricante. Mantén estufas, parrillas y cualquier combustión fuera de la tienda y de espacios cerrados.</p>`]
    ],
    videos: [CAR_VIDEO_LIBRARY.arpenaz, CAR_VIDEO_LIBRARY.colemanTent, CAR_VIDEO_LIBRARY.tentComparison, CAR_VIDEO_LIBRARY.kidsTent, CAR_VIDEO_LIBRARY.condensation, CAR_VIDEO_LIBRARY.poles, CAR_VIDEO_LIBRARY.mesh, CAR_VIDEO_LIBRARY.footprint, CAR_VIDEO_LIBRARY.waterproof, CAR_VIDEO_LIBRARY.sealant, CAR_PLANNED_VIDEOS.tarp]
  },
  {
    id: 'descanso', number: '03', icon: '◒', title: 'Sistema de dormir',
    summary: 'Combina aislamiento frente al suelo, bolsa adecuada a la persona y ropa seca para conseguir descanso real.',
    decision: 'La bolsa abriga alrededor del cuerpo; el aislante controla la pérdida hacia el suelo. Ninguno sustituye al otro.',
    sections: [
      ['Valor R, tipos de aislante y comodidad', carTechnicalBody(5)],
      ['Bolsa de dormir: Comfort, Limit y relleno', carTechnicalBody(6)]
    ],
    videos: [CAR_VIDEO_LIBRARY.sleeping, CAR_VIDEO_LIBRARY.sleepingColemanKids, CAR_VIDEO_LIBRARY.sleepingColemanYouth, CAR_VIDEO_LIBRARY.sleepingStore, CAR_VIDEO_LIBRARY.sleepingWarm, CAR_VIDEO_LIBRARY.sleepingExtend]
  },
  {
    id: 'cocina', number: '04', icon: '🍳', title: 'Cocina, agua y conservación',
    summary: 'Diseña el menú, el frío, el agua y la estación de trabajo antes de escoger utensilios o combustible.',
    decision: 'Una mesa estable y un flujo limpio de alimentos valen más que llevar muchos accesorios sin un lugar seguro para utilizarlos.',
    sections: [
      ['Cocina, combustibles y utensilios', carTechnicalBody(8)],
      ['Hielera y seguridad alimentaria', carTechnicalBody(9)],
      ['Agua potable y tratamiento', carTechnicalBody(10)],
      ['Mesas, sillas y estación de cocina', `<p>Separa el comedor de la estación caliente. La mesa de cocina debe permanecer nivelada, aceptar la carga real y dejar la estufa en una superficie permitida por su manual. No coloques una estufa sobre plástico sensible al calor ni dentro de una tienda, vehículo o refugio cerrado.</p><ul><li><strong>Mesa:</strong> comprueba altura, estabilidad lateral, seguro de patas, carga admitida y superficie útil con la estufa y las ollas reales.</li><li><strong>Sillas:</strong> asigna una por persona, revisa carga máxima, uniones, tela y estabilidad en terreno irregular.</li><li><strong>Circulación:</strong> deja mangos, combustible, líquidos calientes y cables fuera del paso de niñas y niños.</li><li><strong>Lavado:</strong> organiza retirar sólidos, lavar, enjuagar y secar sin descargar restos o jabón en cuerpos de agua.</li></ul>`]
    ],
    videos: [CAR_VIDEO_LIBRARY.stoveCompact, CAR_VIDEO_LIBRARY.stoveConnect, CAR_VIDEO_LIBRARY.bottle, CAR_PLANNED_VIDEOS.furniture]
  },
  {
    id: 'fuego', number: '05', icon: '🔥', title: 'Fuego y fogata',
    summary: 'Incluye una fogata solo cuando el sitio y las condiciones del día la permiten; conserva siempre una alternativa de cocina.',
    decision: 'La fogata es opcional. Si no está autorizada, marca este módulo como No aplica y cocina con el sistema permitido que ya probaste.',
    sections: [
      ['Decidir si una fogata forma parte de la salida', `<p>Consulta las restricciones vigentes el mismo día. Pueden cambiar por viento, sequía, calidad del aire o decisión de la administración. Una reserva previa no garantiza que el fuego siga permitido.</p><ul><li>Usa únicamente el fogón o área establecida cuando así lo exijan.</li><li>No dependas de la fogata para preparar alimentos: lleva una alternativa autorizada.</li><li>Mantén agua y herramienta de extinción listas antes de encender.</li><li>Una persona adulta supervisa de forma continua; niñas y niños permanecen fuera del perímetro.</li><li>No uses gasolina, alcohol ni otros acelerantes líquidos.</li></ul>`],
      ['Control y apagado completo', `<p>Mantén el fuego pequeño y compatible con el fogón. Suspende el encendido si aparecen ráfagas, chispas fuera del área o una restricción nueva. Para apagar, agrega agua, mezcla cenizas y brasas, vuelve a agregar agua y comprueba en frío con el dorso de la mano a distancia segura. No abandones carbón caliente ni entierres brasas.</p>`]
    ],
    videos: [CAR_VIDEO_LIBRARY.fireFamily, CAR_VIDEO_LIBRARY.fireKitchen, CAR_VIDEO_LIBRARY.fireStarter, CAR_VIDEO_LIBRARY.fireBasics]
  },
  {
    id: 'iluminacion', number: '06', icon: '🔦', title: 'Iluminación y energía',
    summary: 'Da a cada persona luz de manos libres y conserva una fuente independiente de respaldo.',
    decision: 'Compara desempeño útil y autonomía; el número máximo de lúmenes no explica cuánto dura la luz ni cómo se comporta en lluvia.',
    sections: [
      ['Iluminación personal, del campamento y respaldo', `<p>Cada integrante debe localizar y operar su propia linterna frontal. El farol ilumina la mesa o el área común, pero no sustituye una luz personal cuando alguien camina al sanitario, al vehículo o fuera del círculo iluminado.</p><div class="table-wrap"><table><thead><tr><th>Dato</th><th>Qué permite decidir</th><th>Qué debes comprobar</th></tr></thead><tbody><tr><td>Lúmenes</td><td>Cantidad total de luz inicial</td><td>Nivel que usarás y cuánto tiempo se mantiene</td></tr><tr><td>Autonomía</td><td>Tiempo medido bajo condiciones declaradas</td><td>Modo, batería, temperatura y criterio de final de prueba</td></tr><tr><td>Alcance</td><td>Distancia de referencia del haz</td><td>Si necesitas visión amplia o puntual</td></tr><tr><td>Protección IP</td><td>Resistencia declarada a polvo y agua</td><td>Dos dígitos completos y límites del fabricante</td></tr></tbody></table></div><p>Antes de salir, enciende cada unidad, revisa ajuste, contactos y batería, y déjala funcionar durante el tiempo previsto de uso. Lleva baterías compatibles o un sistema de recarga calculado, además de una luz independiente que no dependa del mismo cable, batería externa o circuito.</p><p>Si el camping ofrece electricidad, confirma voltaje, conexión y límite de corriente. Usa cables y conexiones aptos para exterior, mantenlos fuera de charcos y rutas de paso, y evita adaptadores improvisados.</p>`],
      ['Clima, rayos y calor', `<p>Una tienda, un tarp o un refugio abierto no protegen contra rayos. Al oír truenos, trasládate al edificio cerrado o al vehículo de techo rígido que definiste como refugio y espera 30 minutos después del último trueno antes de regresar.</p><p>En calor, nunca dejes personas o mascotas dentro de un vehículo estacionado. Ajusta actividad, sombra, hidratación y pausas, y observa mareo, debilidad, confusión, náusea o temperatura corporal anormal. Las alertas y el pronóstico del destino prevalecen sobre el plan original.</p>`]
    ],
    videos: [CAR_PLANNED_VIDEOS.lighting]
  },
  {
    id: 'organizacion', number: '07', icon: '▣', title: 'Equipaje y organización',
    summary: 'Distingue la bolsa de ropa, la mochila de día y las cajas del vehículo para no cargar ni duplicar equipo sin función.',
    decision: 'Cada contenedor debe tener un propósito, un límite de carga y un lugar definido tanto en el vehículo como en el campamento.',
    sections: [
      ['Maleta, bolsa flexible y mochila de día', `<p>La maleta o bolsa de ropa transporta pertenencias entre casa, vehículo y tienda. Una bolsa flexible suele aprovechar mejor espacios irregulares; una maleta estructurada protege y ordena, pero ocupa el mismo volumen incluso vacía.</p><p>La mochila de día sirve para excursiones desde el campamento. Como punto de partida, 10–20 litros pueden funcionar para recorridos cortos; 20–30 litros dan margen cuando una persona carga más agua, abrigo o equipo familiar. El volumen no sustituye el ajuste: pruébala cargada, regula tirantes y confirma que agua, impermeable, frontal, alimento y auxilio permanezcan accesibles.</p>`],
      ['Cajas de almacenaje y orden de carga', `<p>Organiza por función y evita una sola caja pesada que deba vaciarse para encontrar algo. Son módulos útiles: llegada inmediata, cocina, alimentos secos, higiene y reparación. Etiqueta tapa y laterales para reconocerlas aun apiladas.</p><ul><li>Mide el espacio real del vehículo y conserva visibilidad, salidas y acceso al equipo de emergencia.</li><li>Consulta la carga máxima de la caja y de su tapa; que dos cajas encajen no demuestra que puedan apilarse cargadas.</li><li>Inmoviliza la carga para frenadas y curvas. Los objetos pesados viajan bajos.</li><li>Separa combustible, químicos y artículos de higiene de alimentos y agua.</li><li>Los alimentos, basura y artículos con olor se almacenan conforme a las reglas de fauna del destino.</li></ul>`]
    ],
    videos: [CAR_VIDEO_LIBRARY.clothesFold, CAR_PLANNED_VIDEOS.daypack, CAR_PLANNED_VIDEOS.boxes]
  },
  {
    id: 'ropa', number: '08', icon: '🧥', title: 'Ropa',
    summary: 'Prepara capas, impermeable, calzado y protección personal para cada integrante y para la noche más exigente prevista.',
    decision: 'Verifica talla, función y estado persona por persona; una cantidad grupal no confirma que cada integrante tenga abrigo seco y adecuado.',
    sections: [
      ['Ropa técnica por capas para la familia', carTechnicalBody(7)]
    ],
    videos: [CAR_PLANNED_VIDEOS.clothing]
  },
  {
    id: 'salud', number: '09', icon: '✚', title: 'Higiene, salud y emergencia',
    summary: 'Resuelve higiene, residuos, medicamentos, primeros auxilios y comunicación antes de depender de los servicios del sitio.',
    decision: 'Confirma qué servicios existen y cómo se eliminan los residuos. El botiquín se adapta a las personas y al tiempo real para recibir ayuda.',
    sections: [
      ['Higiene y campamento sin baño', carTechnicalBody(10)],
      ['Botiquín familiar y plan de emergencia', carTechnicalBody(12)],
      ['Prueba, mantenimiento y aprendizaje', carTechnicalBody(13)]
    ],
    videos: [CAR_PLANNED_VIDEOS.hygiene]
  }
];

function applyCarExperienceContent() {
  const original = new Map(equipment.flatMap(([, items]) => items.map(item => [item[0], item])));
  const use = (id, replacement) => replacement || original.get(id);
  const item = (id, name, priority, unit, purpose, choice, check) => [id, name, priority, unit, purpose, choice, check];

  const enriched = [
    ['Planeación y vehículo', [
      use('mapa'), use('energia'),
      item('carga-vehiculo', 'Carga y sujeción del vehículo', 'Esencial', 'grupo', 'Evita que el equipo se desplace y mantiene accesibles salidas, visibilidad y elementos de emergencia.', 'Consulta la capacidad de carga del vehículo considerando personas, agua, hielera y equipaje. Usa puntos y sistemas de sujeción adecuados.', 'Coloca objetos pesados bajos, inmoviliza todos los módulos y realiza una inspección antes de circular.'),
      item('llegada-inmediata', 'Módulo de llegada inmediata', 'Esencial', 'grupo', 'Reúne lo necesario para llegar, montar y responder a lluvia u oscuridad sin descargar todo.', 'Incluye agua, abrigo, impermeables, frontales, documentos, botiquín y las piezas iniciales del refugio.', 'Cárgalo al final para descargarlo primero y confirma que cualquier adulto pueda localizarlo.')
    ]],
    ['Refugio y zona de convivencia', [
      use('tienda'), use('estacas'), use('suelo'),
      item('sombra', 'Toldo o sombra', 'Según la salida', 'grupo', 'Crea un área protegida para convivencia, comedor o preparación cuando el lugar lo permite.', 'Compara área desplegada, altura, puntos de anclaje, tiempo de montaje y límite de viento. Nylon y poliéster se eligen por construcción completa; “Oxford” no garantiza impermeabilidad.', 'Móntalo antes de salir, mide su huella completa y desmonta si el viento se acerca al límite del fabricante.'),
      item('toldo-anclajes', 'Líneas, anclajes y señalización del toldo', 'Según la salida', 'grupo', 'Mantienen la tensión estructural y reducen tropiezos alrededor del área común.', 'Usa componentes compatibles con el toldo y el terreno. Prefiere líneas visibles o marcadores para pasos nocturnos.', 'Cuenta piezas, revisa desgaste y coloca las líneas fuera de la circulación siempre que el diseño lo permita.'),
      item('mesa', 'Mesa plegable para comedor o cocina auxiliar', 'Confort', 'grupo', 'Crea una superficie estable para comer, preparar y organizar.', 'Revisa dimensiones abiertas y cerradas, altura, seguro de patas, carga admitida y compatibilidad de la superficie con el uso previsto.', 'Pruébala con el peso real; mantenla nivelada y separa líquidos calientes y combustible de las rutas de paso.'),
      item('sillas', 'Sillas plegables', 'Confort', 'persona', 'Ofrecen un asiento asignado y estable durante la estancia.', 'Comprueba carga máxima, ancho, altura, uniones y comportamiento en terreno irregular.', 'Abre por completo cada seguro, revisa tela y estructura y no uses una silla dañada.'),
      use('juegos')
    ]],
    ['Sistema de dormir', [use('saco'), use('colchon'), use('almohada'), use('inflador')]],
    ['Cocina, agua y conservación', [
      use('agua'), use('tratamiento'), use('comida'), use('nevera'), use('estufa'), use('combustible'), use('ollas'), use('vajilla'), use('lavado'),
      item('caja-alimentos', 'Caja para alimentos secos y artículos con olor', 'Según la salida', 'grupo', 'Separa comida y artículos con olor del resto del equipo y facilita aplicar las reglas de fauna.', 'Elige cierre, volumen y resistencia según las exigencias del destino; una caja doméstica no reemplaza un contenedor aprobado cuando el lugar lo exige.', 'Mantén cerrada, limpia y separada de combustible. Nunca dejes comida ni basura dentro de la tienda.')
    ]],
    ['Fuego y fogata', [
      item('fuego-reglas', 'Permiso y condiciones para fogata', 'Condicional', 'grupo', 'Confirma que el fuego está autorizado para el lugar, fecha y condiciones reales.', 'Consulta a la administración y las restricciones vigentes el mismo día. La existencia de un fogón no equivale a permiso.', 'Si no está permitido o no puedes confirmarlo, marca este módulo No aplica y usa la alternativa de cocina autorizada.'),
      item('fuego-encendido', 'Encendido seguro y protegido', 'Condicional', 'grupo', 'Permite iniciar un fuego autorizado sin recurrir a acelerantes líquidos.', 'Lleva cerillos o encendedor protegidos y un iniciador preparado para ese uso. No uses gasolina, alcohol ni otros líquidos inflamables.', 'Conserva el material seco y enciende solo después de tener listo el medio de extinción.'),
      item('fuego-control', 'Agua y herramienta de extinción', 'Condicional', 'grupo', 'Permiten controlar y apagar por completo una fogata.', 'Separa agua exclusiva para apagado y una herramienta adecuada para mezclar brasas y cenizas.', 'No enciendas si no cuentas con agua suficiente, supervisión adulta continua y un lugar autorizado.'),
      item('fuego-area', 'Fogón establecido y perímetro', 'Condicional', 'grupo', 'Mantiene el fuego en el área indicada y a las personas fuera de la zona de riesgo.', 'Usa la instalación del sitio y define un perímetro sin combustible, cuerdas ni circulación.', 'Retira objetos del paso, vigila chispas y comprueba el apagado en frío antes de retirarte.')
    ]],
    ['Iluminación y energía', [
      item('frontal', 'Linterna frontal personal', 'Esencial', 'persona', 'Da luz con las manos libres para caminar, montar y atender a otra persona.', 'Compara autonomía en el nivel útil, alcance, distribución del haz, protección IP, ajuste y batería. El máximo de lúmenes no describe todo el desempeño.', 'Prueba cada frontal, asigna uno por persona y confirma que pueda localizarlo y encenderlo.'),
      item('farol', 'Lámpara o farol de campamento', 'Confort', 'grupo', 'Ilumina el área común sin ocupar las manos.', 'Elige regulación, difusión, autonomía, estabilidad y protección contra agua según dónde se colocará.', 'Ubícalo sin deslumbrar, sin crear sombras peligrosas y respetando a campamentos vecinos.'),
      item('luz-respaldo', 'Baterías, recarga y luz de respaldo', 'Esencial', 'grupo', 'Mantiene iluminación disponible si falla una batería, cable o fuente principal.', 'Calcula horas de uso y lleva baterías compatibles o energía suficiente. La luz de respaldo debe ser independiente del mismo punto de falla.', 'Carga y prueba todo antes de salir; guarda repuestos secos, protegidos y accesibles.')
    ]],
    ['Equipaje y organización', [
      item('bolsa-ropa', 'Maleta, bolsa o mochila para ropa', 'Esencial', 'persona', 'Transporta y separa ropa limpia, sucia y húmeda entre casa, vehículo y tienda.', 'Elige un solo formato por persona o familia según el espacio. Una bolsa flexible aprovecha huecos; una maleta estructurada protege pero ocupa más volumen.', 'Deja abrigo e impermeable accesibles y protege la ropa de dormir en una bolsa interior seca.'),
      item('mochila-dia', 'Mochila de día o senderismo', 'Según la salida', 'persona', 'Transporta lo necesario durante una caminata sin llevar la bolsa de ropa.', 'Como referencia, 10–20 L sirven para recorridos cortos y 20–30 L dan margen para agua, abrigo o equipo familiar. Ajuste y carga real prevalecen sobre el volumen.', 'Pruébala cargada y guarda agua, impermeable, frontal, alimento, orientación y auxilio dentro; no los dejes en el coche si se usarán en ruta.'),
      item('cajas', 'Cajas modulares de almacenaje', 'Confort', 'grupo', 'Separan equipo por función y reducen tiempo de montaje y búsqueda.', 'Mide maletero y cajas, revisa carga máxima, cierre, asas y apilado. Que una tapa soporte una caja vacía no demuestra que acepte el peso cargado.', 'Etiqueta tapa y laterales; forma módulos de cocina, llegada, higiene y reparación, y sujétalos dentro del vehículo.'),
      use('reparacion'), use('herramientas')
    ]],
    ['Ropa', [
      use('capas'), use('lluvia'), use('calzado'), use('sol')
    ]],
    ['Higiene, salud y emergencia', [
      use('carpa-bano'), use('inodoro'), use('consumibles-bano'), use('transporte-residuos'), use('lavamanos'), use('aguas-grises'), use('botiquin'), use('higiene'), use('repelente'), use('basura')
    ]]
  ];

  equipment.splice(0, equipment.length, ...enriched.map(([category, items]) => [category, items.filter(Boolean)]));
  if (typeof MODE_CONFIGS !== 'undefined' && MODE_CONFIGS.coche) {
    MODE_CONFIGS.coche.equipment = equipment;
    MODE_CONFIGS.coche.title = 'Camping con coche en familia';
    MODE_CONFIGS.coche.description = 'Construye un campamento cómodo, seguro y ordenado junto al vehículo. Aprende qué llevar, cómo elegirlo y cómo comprobarlo antes de salir.';
    MODE_CONFIGS.coche.pills = ['Acceso en vehículo', 'Decisiones familiares', 'Preparación por módulos'];
    MODE_CONFIGS.coche.services = [['water', 'Agua potable'], ['toilets', 'Sanitarios'], ['electricity', 'Electricidad'], ['fire', 'Fogata permitida']];
  }
  if (typeof MODE_VIDEOS !== 'undefined') MODE_VIDEOS.coche = [...Object.values(CAR_VIDEO_LIBRARY), ...CAR_FAMILY_STORIES];
}
