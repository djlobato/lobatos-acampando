/* Sincronizado desde “Contenido del sitio” en Google Drive el 2026-09-24.
   Edita la hoja y vuelve a sincronizar para actualizar esta copia offline del sitio. */
const DRIVE_SITE_CONTENT = {
  "menu": [
    [
      "coche",
      "Camping con coche",
      "#coche",
      "Acampa en Familia cerca de tu auto, con espacio y comodidad.",
      "Publicado",
      "familia-coche"
    ],
    [
      "senderismo",
      "Mochilero o Backpacking",
      "#senderismo",
      "Recorre rutas largas con total autonomía llevando todo tu equipo técnico en una sola mochila.",
      "Publicado",
      "familia-mochilera"
    ],
    [
      "bushcraft",
      "Bushcraft",
      "#bushcraft",
      "Prospera en el bosque usando habilidades tradicionales para crear refugio, fuego y herramientas con los recursos del entorno.",
      "Publicado",
      "familia-bushcraft"
    ],
    [
      "ultraligera",
      "Acampada ultraligera",
      "#ultraligera",
      "Reduce tu equipo a menos de 5 kg para caminar más lejos, más rápido y con la máxima libertad de movimiento.",
      "Publicado",
      "familia-ultraligera"
    ],
    [
      "tecnicas",
      "Técnicas de campismo",
      "#tecnicas",
      "Aprende a cuidar, reparar y elegir refugio y descanso desde los videos del canal.",
      "Publicado",
      "tecnicas-campismo"
    ],
    [
      "reviews",
      "Review de equipo",
      "#reviews",
      "Compara el equipo que ya mostramos en el canal y decide con información documentada.",
      "Publicado",
      "review-equipo"
    ],
    [
      "tropa",
      "Campamento Scout · Tropa",
      "#scout/tropa",
      "Checklist editable para organizar equipo y responsabilidades de patrulla.",
      "Publicado",
      "scout-tropa"
    ],
    [
      "manada",
      "Campamento Scout · Manada",
      "#scout/manada",
      "Checklist para lobatos, familias y autonomía por mochila.",
      "Publicado",
      "scout-manada"
    ]
  ],
  "checklist": [
    [
      "Mochilero o Backpacking",
      "Mochila y transporte",
      "Mochila de travesía",
      "Esencial",
      "persona",
      "Transportar todo el equipo de varios días con estabilidad y comodidad durante largas distancias.",
      "Para backpacking conviene priorizar ajuste al torso, cinturón lumbar eficaz, estructura interna y volumen acorde a la duración; 50–65 L cubre muchas travesías de varios días.",
      "Coloca el peso denso cerca de la espalda y a media altura, ajusta primero cinturón y después tirantes, y evita llevar volumen innecesario fuera de la mochila."
    ],
    [
      "Mochilero o Backpacking",
      "Mochila y transporte",
      "Bolsa interior impermeable o funda",
      "Esencial",
      "persona",
      "Mantener seco el contenido crítico frente a lluvia, humedad y cruces de agua.",
      "Una bolsa interior estanca o liner protege mejor el contenido que depender solo de una funda exterior, que deja expuesta la espalda y puede acumular agua.",
      "Protege dentro del liner saco, ropa seca y electrónica; usa la funda exterior solo como complemento."
    ],
    [
      "Mochilero o Backpacking",
      "Mochila y transporte",
      "Bastones de senderismo",
      "Según la ruta",
      "persona",
      "Reducir carga sobre rodillas, mejorar equilibrio y aportar estabilidad en ascensos y descensos.",
      "Los bastones transfieren parte del esfuerzo al tren superior y mejoran estabilidad en terreno suelto; deben ajustarse a la longitud adecuada y contar con puntas en buen estado.",
      "Acórtalos en subida, alárgalos ligeramente en bajada y úsalos también para cruces de río o como soporte de algunos refugios."
    ],
    [
      "Mochilero o Backpacking",
      "Mochila y transporte",
      "Mochila de ataque plegable",
      "Opcional",
      "persona",
      "Disponer de una mochila ligera para explorar desde un campamento base sin cargar todo el equipo.",
      "Una mochila plegable de 10–20 L permite llevar agua, capa impermeable, comida, navegación y botiquín con muy poco volumen cuando va guardada.",
      "Úsala solo para cargas ligeras; si habrá muchas horas de marcha, conviene una mochila pequeña con mejor estructura y tirantes."
    ],
    [
      "Mochilero o Backpacking",
      "Refugio y descanso",
      "Tienda ligera o tarp.",
      "Esencial",
      "grupo",
      "Proteger del clima con un refugio transportable y suficientemente habitable para varios días.",
      "En backpacking predominan nylon y poliéster recubiertos; el nylon ofrece buena relación resistencia-peso y el poliéster absorbe menos agua y conserva mejor la tensión. Una tienda 1P suele dejar poco espacio para equipo y mal clima.",
      "Si el peso lo permite, una 2P para una persona ofrece mejor habitabilidad; prioriza doble techo, ventilación, costuras selladas y una columna de agua adecuada."
    ],
    [
      "Mochilero o Backpacking",
      "Refugio y descanso",
      "Saco de dormir o quilt",
      "Esencial",
      "persona",
      "Conservar temperatura corporal durante el sueño y reducir el riesgo de enfriamiento nocturno.",
      "Usa como referencia la temperatura de confort del saco; la de límite o extrema no debe emplearse para planear una noche normal. En quilt, el aislamiento inferior depende casi por completo de la colchoneta.",
      "Elige un sistema con confort al menos 5 °C por debajo de la mínima prevista para cubrir fatiga, humedad o cambios inesperados de clima."
    ],
    [
      "Mochilero o Backpacking",
      "Refugio y descanso",
      "Aislante o colchoneta",
      "Esencial",
      "persona",
      "Aislar del suelo y proporcionar descanso suficiente para recuperar energía.",
      "La espuma de celda cerrada es la opción más resistente y ligera, pero también la más voluminosa y menos cómoda; las inflables ofrecen mejor confort y relación aislamiento-volumen.",
      "Selecciona por valor R y terreno: espuma para máxima fiabilidad, inflable para mayor comodidad, o ambas si esperas frío o una ruta remota."
    ],
    [
      "Mochilero o Backpacking",
      "Refugio y descanso",
      "Reparación de refugio y colchoneta",
      "Esencial",
      "grupo",
      "Resolver daños que puedan comprometer refugio o aislamiento durante la travesía.",
      "El kit debe cubrir rasgaduras, costuras y pinchazos con parches y adhesivos compatibles con nylon, poliéster, TPU o el material específico del equipo.",
      "Lleva parches autoadhesivos, cinta técnica y adhesivo compatible, y prueba antes cómo reparar una fuga o rasgadura con el mismo kit."
    ],
    [
      "Mochilero o Backpacking",
      "Ropa y calzado",
      "Sistema de capas",
      "Esencial",
      "persona",
      "Regular temperatura y humedad durante marcha y descanso sin depender de una sola prenda.",
      "El sistema funciona mejor en tres capas: base sintética o merino para evacuar humedad, capa térmica de fleece o aislamiento y capa exterior contra viento o lluvia; evita algodón porque retiene agua y pierde capacidad aislante.",
      "Regula antes de sudar: quita capas en subida y vuelve a colocarlas al detenerte; conserva siempre una muda seca exclusivamente para dormir."
    ],
    [
      "Mochilero o Backpacking",
      "Ropa y calzado",
      "Rompeviento y protección para lluvia",
      "Esencial",
      "persona",
      "Proteger de viento y precipitación sin acumular exceso de humedad interna.",
      "Un rompeviento ligero transpira mejor que una impermeable; para lluvia usa membrana impermeable-transpirable con costuras selladas y, si es posible, ventilación mecánica.",
      "Usa rompeviento para viento seco y reserva la impermeable para lluvia; abre ventilaciones antes de sobrecalentarte."
    ],
    [
      "Mochilero o Backpacking",
      "Ropa y calzado",
      "Calzado probado y calcetines",
      "Esencial",
      "persona",
      "Evitar ampollas, pérdida de estabilidad y problemas de pies durante jornadas largas.",
      "El calzado debe estar previamente probado y adaptarse al terreno; botas ofrecen mayor protección y trail runners menor peso y secado más rápido. Usa calcetines de merino o sintéticos.",
      "Cambia calcetines húmedos, ventila los pies en descansos y atiende cualquier punto caliente antes de que se convierta en ampolla."
    ],
    [
      "Mochilero o Backpacking",
      "Ropa y calzado",
      "Sombrero, lentes y protección solar",
      "Esencial",
      "persona",
      "Reducir exposición UV, deslumbramiento y carga térmica en rutas abiertas.",
      "Usa sombrero de ala amplia o gorra con protección de cuello, lentes UV400 categoría 3 y protector solar FPS 30–50; en nieve o alta montaña se requiere mayor protección ocular.",
      "Aplica protector antes de iniciar y reaplica cada 2 horas o tras sudor intenso; no olvides orejas, cuello, labios y dorso de las manos."
    ],
    [
      "Mochilero o Backpacking",
      "Agua",
      "Botellas o depósito de agua",
      "Esencial",
      "persona",
      "Transportar agua suficiente entre fuentes y mantener acceso durante la marcha.",
      "Las botellas permiten controlar mejor el consumo y son más fáciles de limpiar; los depósitos flexibles facilitan beber en marcha pero dificultan saber cuánto queda.",
      "Combina una botella rígida con un depósito flexible y calcula capacidad según distancia entre fuentes, clima y desnivel."
    ],
    [
      "Mochilero o Backpacking",
      "Agua",
      "Filtro o tratamiento de agua",
      "Esencial",
      "grupo",
      "Reducir el riesgo microbiológico del agua obtenida en ruta.",
      "Los filtros de fibra hueca eliminan protozoos y muchas bacterias, pero no todos los virus; si se congelan mojados pueden dañarse internamente.",
      "Filtra directamente desde una bolsa de agua sucia y protege el filtro del frío guardándolo cerca del cuerpo o dentro del saco."
    ],
    [
      "Mochilero o Backpacking",
      "Agua",
      "Método de tratamiento de respaldo",
      "Según la ruta",
      "grupo",
      "Mantener una segunda barrera si el filtro falla o la fuente presenta mayor riesgo.",
      "La ebullición y el dióxido de cloro complementan al filtrado; el tiempo de acción químico depende del producto, temperatura y microorganismo.",
      "Lleva dióxido de cloro como respaldo ligero y usa ebullición cuando dispongas de combustible suficiente."
    ],
    [
      "Mochilero o Backpacking",
      "Alimentación y cocina",
      "Alimentación, colaciones y raciones por día",
      "Esencial",
      "persona",
      "Mantener energía suficiente durante jornadas prolongadas sin cargar alimento innecesario.",
      "Calcula raciones según duración, desnivel, temperatura y esfuerzo; prioriza alimentos densos en energía, estables y fáciles de preparar.",
      "Distribuye 3 comidas y 2–3 colaciones, y añade una reserva independiente para al menos una comida extra."
    ],
    [
      "Mochilero o Backpacking",
      "Alimentación y cocina",
      "Estufa, combustible y encendido",
      "Según la salida",
      "grupo",
      "Cocinar con eficiencia y asegurar encendido en condiciones variables.",
      "Las estufas de gas son simples y eficientes para backpacking; el rendimiento baja con frío intenso y el consumo depende de viento, altitud y tiempo de cocción.",
      "Calcula combustible con margen, usa pantalla contra viento sin encerrar el cartucho y lleva encendedor más un segundo método de respaldo."
    ],
    [
      "Mochilero o Backpacking",
      "Alimentación y cocina",
      "Olla, taza y cubiertos",
      "Según el menú",
      "persona",
      "Reducir peso y volumen manteniendo capacidad para cocinar y comer.",
      "Una sola olla de 700–1000 ml suele bastar para una persona; titanio reduce peso, aluminio distribuye mejor el calor y acero ofrece mayor robustez.",
      "Elige piezas que aniden entre sí y usa cubierto largo si consumes alimentos directamente de bolsas o recipientes profundos."
    ],
    [
      "Mochilero o Backpacking",
      "Alimentación y cocina",
      "Sistema autorizado para proteger alimentos",
      "Según el lugar",
      "grupo",
      "Evitar acceso de fauna a alimentos, residuos y artículos con olor durante la travesía.",
      "El sistema depende de la regulación local: puede requerirse contenedor rígido certificado, casillero para alimentos o método de suspensión; una bolsa común no sustituye un sistema autorizado.",
      "Verifica antes de salir qué método exige el área y guarda juntos comida, basura, pasta dental y cualquier producto aromático, lejos de la zona de descanso."
    ],
    [
      "Mochilero o Backpacking",
      "Orientación y comunicación",
      "Mapa de ruta y brújula",
      "Esencial",
      "grupo",
      "Mantener orientación básica y una referencia independiente de dispositivos electrónicos.",
      "El mapa topográfico y la brújula permiten interpretar relieve, rumbo y rutas alternativas cuando falla el GPS; requieren conocer declinación y lectura de curvas de nivel.",
      "Lleva el mapa protegido de humedad y confirma periódicamente tu posición antes de perder referencias claras del terreno."
    ],
    [
      "Mochilero o Backpacking",
      "Orientación y comunicación",
      "Teléfono o GPS con mapa sin conexión",
      "Esencial",
      "grupo",
      "Navegar con precisión y consultar ruta, altitud y puntos de interés sin cobertura celular.",
      "El GPS del teléfono funciona sin señal móvil si el mapa y la ruta fueron descargados previamente; el uso continuo de pantalla y posicionamiento aumenta el consumo.",
      "Descarga mapa, track y puntos críticos antes de salir, activa modo avión cuando no necesites red y conserva una alternativa no electrónica."
    ],
    [
      "Mochilero o Backpacking",
      "Orientación y comunicación",
      "Batería externa y cables",
      "Según la duración",
      "grupo",
      "Mantener operativos teléfono, GPS, frontal y otros equipos electrónicos durante varios días.",
      "La capacidad necesaria depende de días de ruta, temperatura y consumo; el frío reduce temporalmente el rendimiento de las baterías de litio.",
      "Lleva solo los cables imprescindibles, protege batería y dispositivos del frío y evita cargarlos cuando estén a temperaturas bajo cero."
    ],
    [
      "Mochilero o Backpacking",
      "Seguridad, higiene y residuos",
      "Linterna frontal",
      "Esencial",
      "persona",
      "Proporcionar iluminación manos libres durante marcha, montaje, cocina y emergencias nocturnas.",
      "Prioriza autonomía útil, modo bajo, resistencia al agua y bloqueo; una potencia alta sostenida consume batería con rapidez y reduce adaptación nocturna.",
      "Lleva energía de repuesto y guarda frontal y baterías protegidos del frío durante la noche."
    ],
    [
      "Mochilero o Backpacking",
      "Seguridad, higiene y residuos",
      "Botiquín y medicamentos personales",
      "Esencial",
      "grupo",
      "Atender lesiones menores, controlar incidentes iniciales y mantener tratamientos personales durante la ruta.",
      "El botiquín debe responder a duración, aislamiento, tamaño del grupo y riesgos del terreno; incluye medicamentos personales suficientes y claramente identificados.",
      "Coloca material para hemorragias, ampollas y medicación crítica en una zona de acceso rápido, no al fondo de la mochila."
    ],
    [
      "Mochilero o Backpacking",
      "Seguridad, higiene y residuos",
      "Silbato, manta o refugio de emergencia",
      "Esencial",
      "persona",
      "Facilitar señalización y conservar calor ante extravío, inmovilización o retraso.",
      "El silbato permite emitir señales con poco gasto energético; una manta o bivy de emergencia reduce pérdida de calor y protege del viento.",
      "Llévalos siempre accesibles y separados del equipo que pueda quedar en el campamento."
    ],
    [
      "Mochilero o Backpacking",
      "Seguridad, higiene y residuos",
      "Higiene personal y lavado de manos",
      "Esencial",
      "persona",
      "Reducir riesgo de infecciones gastrointestinales y contaminación cruzada.",
      "El lavado de manos es especialmente importante antes de comer o cocinar y después de evacuar; el gel alcohólico no sustituye siempre al lavado cuando hay suciedad visible.",
      "Lleva jabón en pequeña cantidad y úsalo lejos de fuentes de agua; seca bien las manos en clima frío."
    ],
    [
      "Mochilero o Backpacking",
      "Seguridad, higiene y residuos",
      "Bolsas para basura y residuos humanos",
      "Esencial",
      "grupo",
      "Retirar residuos sin contaminar suelo, agua ni mochila.",
      "En zonas sensibles puede ser obligatorio retirar también residuos humanos con bolsas específicas; la normativa local define cuándo se permite enterrarlos.",
      "Lleva bolsas resistentes y separa basura, papel higiénico y residuos humanos según la regulación del área."
    ],
    [
      "Mochilero o Backpacking",
      "Documentos y plan de ruta",
      "Permisos, reservas e identificación",
      "Esencial",
      "grupo",
      "Acreditar acceso, estancia e identidad durante la travesía.        Algunas áreas exigen permisos, reservas, registros o comprobantes específicos; conviene llevar respaldo digital y una copia protegida de humedad.        Verifica requisitos antes de salir y guarda permisos e identificación en un bolsillo accesible, no junto al equipo que pueda mojarse.",
      "Algunas rutas exigen permisos, cupos, registros o comprobantes de reserva.",
      "Lleva copias digitales y, cuando convenga, impresas protegidas de humedad."
    ],
    [
      "Mochilero o Backpacking",
      "Documentos y plan de ruta",
      "Itinerario y contactos de emergencia",
      "Esencial",
      "grupo",
      "Facilitar localización y activar ayuda si no se cumple el plan previsto.        El itinerario debe incluir ruta, campamentos, horarios, puntos de escape, vehículo y una hora límite clara para iniciar alerta.        Déjalo con una persona responsable y acuerda de antemano cuándo debe contactar a emergencias si no reportas regreso.",
      "Debe incluir ruta, horarios, puntos de salida, vehículo, integrantes y hora límite de aviso.",
      "Déjalo con una persona responsable que sepa cuándo y a quién alertar."
    ],
    [
      "Bushcraft",
      "Reglas y planificación",
      "Reglas del terreno y plan de práctica",
      "Esencial",
      "grupo",
      "Facilitar localización, rescate y toma de decisiones si el grupo no regresa según lo previsto.",
      "El itinerario debe incluir acceso, ruta, campamento, vehículo, integrantes, horarios y una hora límite clara para activar ayuda.",
      "Deja el plan con una persona responsable y acuerda previamente qué hacer si no confirmas regreso a la hora establecida."
    ],
    [
      "Bushcraft",
      "Reglas y planificación",
      "Plan de sitio e itinerario",
      "Esencial",
      "grupo",
      "Definir qué técnicas de bushcraft pueden practicarse legalmente y sin degradar el terreno.",
      "El uso de fuego, corte de madera, recolección, construcción de refugios y excavación puede estar restringido según propiedad, ANP o temporada.",
      "Practica talla, fuego y construcciones solo con material permitido; evita cortar árboles vivos y confirma restricciones antes de usar hacha, fogata o refugios permanentes."
    ],
    [
      "Bushcraft",
      "Transporte y organización",
      "Mochila ",
      "Esencial",
      "persona",
      "Transportar equipo de campamento, herramientas y consumibles con buena distribución de carga.",
      "Para bushcraft conviene una mochila de 40–60 L en Cordura o tejido robusto, con cinturón lumbar, correas de compresión y panel PALS/MOLLE para modular equipo de acceso rápido.",
      "Usa MOLLE para cantimplora, botiquín o kit de fuego; coloca hacha, sierra y carga pesada centradas y pegadas a la espalda para no desbalancear la marcha."
    ],
    [
      "Bushcraft",
      "Transporte y organización",
      "Mochila de ataque ",
      "Según la salida",
      "persona",
      "Moverse desde el campamento base con autonomía suficiente para varias horas.",
      "Una mochila de ataque de 15–25 L debe cargar agua, impermeable, aislamiento, navegación, botiquín, fuego, comida y una herramienta de corte sin convertirse en otra mochila completa.",
      "Mantén preparado un módulo de salida permanente; así puedes explorar, recolectar o evacuar sin desmontar el campamento principal."
    ],
    [
      "Bushcraft",
      "Refugio y descanso",
      "Tarp o refugio completo",
      "Esencial",
      "grupo",
      "Crear un refugio resistente para lluvia, viento y trabajo prolongado en campamento.",
      "Para bushcraft, una lona de canvas o algodón tratado tolera mejor chispas y calor radiante que un tarp sintético, aunque pesa más y no es incombustible.",
      "Si trabajarás con fuego cercano, usa canvas, orienta la abertura según viento y mantén distancia suficiente para evitar brasas, humo y acumulación de CO."
    ],
    [
      "Bushcraft",
      "Refugio y descanso",
      "Cordaje, cintas protectoras y estacas",
      "Esencial",
      "grupo",
      "Tensar el refugio, crear anclajes sólidos y proteger árboles.",
      "Usa cordino de baja elasticidad de 2–3 mm para vientos, paracord para usos auxiliares, correas anchas en árboles y estacas robustas tipo Y/V según terreno.",
      "Prepara líneas con nudos ajustables y lleva al menos dos estacas reforzadas para puntos de máxima tensión."
    ],
    [
      "Bushcraft",
      "Refugio y descanso",
      "Saco, manta o quilt",
      "Esencial",
      "persona",
      "Conservar calor durante una noche estática y tolerar humedad o chispas alrededor del campamento.",
      "El saco o quilt aporta aislamiento principal; una manta de lana resiste mejor chispas y sigue aislando húmeda, pero es más pesada.",
      "Usa la manta como capa complementaria cerca del fuego y reserva saco o quilt para el sistema de sueño seco."
    ],
    [
      "Bushcraft",
      "Refugio y descanso",
      "Aislante de suelo",
      "Esencial",
      "persona",
      "Aislar el cuerpo del suelo y proteger el sistema de descanso de ramas, piedras y humedad.",
      "La espuma de celda cerrada es robusta, no se pincha y funciona bien en bushcraft; puede combinarse con una colchoneta para aumentar el valor R.",
      "Coloca primero espuma contra el terreno: protege la colchoneta y mantiene aislamiento aunque el sistema inflable falle."
    ],
    [
      "Bushcraft",
      "Refugio y descanso",
      "Hamaca, correas anchas y aislamiento inferior",
      "Según el sitio",
      "persona",
      "Dormir elevado en suelo húmedo, irregular o con abundante vegetación.",
      "La hamaca requiere correas de al menos 25 mm, suspensión con caída aproximada de 30° y underquilt o aislante inferior; el saco comprimido debajo pierde aislamiento.",
      "Revisa árboles vivos y firmes, evita ramas muertas superiores y añade aislamiento inferior antes de que baje la temperatura nocturna."
    ],
    [
      "Bushcraft",
      "Herramientas",
      "Cuchillo de campo con funda",
      "Según la práctica",
      "grupo",
      "Realizar talla, preparación de yesca, corte fino y trabajos de madera en campamento.",
      "Para bushcraft conviene hoja fija de espiga completa, 10–15 cm, acero fácil de mantener, funda segura y lomo vivo a 90° para ferrocerio; una geometría tipo drop point o Bowie de monte ofrece buen control y robustez.",
      "Usa el cuchillo para trabajo fino y batonning moderado sobre madera recta; evita palancas laterales, nudos grandes y golpes sobre la punta."
    ],
    [
      "Bushcraft",
      "Herramientas",
      "Sierra plegable",
      "Según la práctica",
      "grupo",
      "Seccionar ramas y troncos con menor gasto energético que un hacha.",
      "Una sierra plegable con hoja de 18–25 cm y dentado agresivo corta madera verde o seca con control y reduce el riesgo de rebote.",
      "Sierra primero los troncos a longitud útil y reserva el hacha para partir; trabajar en ese orden ahorra energía y filo."
    ],
    [
      "Bushcraft",
      "Herramientas",
      "Hacha o hachuela",
      "Opcional avanzado",
      "grupo",
      "Procesar leña, dividir troncos y preparar material para fuego o construcciones.",
      "Una hachuela robusta de 600–900 g con mango de 35–50 cm ofrece buen equilibrio entre potencia y control; el filo debe ser convexo o ligeramente convexo para soportar impactos repetidos.",
      "Parte siempre sobre un tocón o base estable, mantén piernas y pies fuera de la trayectoria y evita golpear tierra o piedra."
    ],
    [
      "Bushcraft",
      "Herramientas",
      "Guantes de trabajo",
      "Esencial",
      "persona",
      "Proteger las manos de astillas, abrasión, calor y bordes durante trabajos pesados.",
      "Los guantes de cuero o tejido reforzado funcionan bien para madera y fuego, pero reducen sensibilidad en talla fina y manejo de filo.",
      "Úsalos para hacha, sierra, leña y fogata; quítalos cuando necesites precisión con el cuchillo y tengas una técnica de corte controlada."
    ],
    [
      "Bushcraft",
      "Herramientas",
      "Afilado y mantenimiento básico",
      "Según herramientas",
      "grupo",
      "Mantener herramientas seguras y eficientes durante salidas prolongadas.",
      "Un filo ligeramente convexo soporta mejor el trabajo de campo; piedra, placa diamantada o asentador permiten recuperar filo sin retirar material en exceso.",
      "Retoca el filo antes de que se desafile por completo, seca el acero al carbono tras usarlo y revisa cuñas, mangos, tornillos y fundas al final del día."
    ],
    [
      "Bushcraft",
      "Alimentación, cocina y fuego",
      "Estufa de camping y combustible",
      "Esencial cuando no hay fuego",
      "grupo",
      "Cocinar con control y reducir dependencia de la fogata.",
      "En bushcraft, una estufa de gas o multifuel ofrece calor predecible cuando la madera está húmeda o el fuego está restringido; calcula combustible según días y número de personas.",
      "Lleva combustible con margen y usa la estufa como respaldo cuando una fogata no sea segura, legal o eficiente."
    ],
    [
      "Bushcraft",
      "Alimentación, cocina y fuego",
      "Encendedor, cerillos protegidos, ferrocerio y respaldo",
      "Según el plan",
      "grupo",
      "Asegurar capacidad de encendido en humedad, frío o viento.",
      "Combina encendedor, cerillos impermeabilizados y ferrocerio; el ferrocerio funciona mojado, pero exige yesca seca y bien preparada.",
      "Guarda dos métodos de encendido en sitios separados y lleva yesca seca en bolsa estanca."
    ],
    [
      "Bushcraft",
      "Alimentación, cocina y fuego",
      "Agua, pala y medio de extinción",
      "Esencial si hay fuego",
      "grupo",
      "Controlar y extinguir por completo cualquier fuego de campamento.",
      "Ten agua suficiente, pala y un medio para sofocar brasas; el fuego debe poder apagarse antes de encenderse y nunca depender solo de tierra.",
      "No abandones el fuego hasta que cenizas y suelo estén fríos al tacto; remueve y moja de nuevo los puntos calientes."
    ],
    [
      "Bushcraft",
      "Alimentación, cocina y fuego",
      "Olla metálica, taza y utensilios",
      "Esencial",
      "grupo",
      "Cocinar, hervir agua y servir alimentos con equipo robusto.",
      "Acero inoxidable es durable y apto para fuego directo; aluminio cocina de forma más uniforme y titanio reduce peso, pero distribuye peor el calor.",
      "Para bushcraft, una olla de acero con asa abatible permite colgarla sobre fuego y soporta mejor uso rudo."
    ],
    [
      "Bushcraft",
      "Alimentación, cocina y fuego",
      "Alimentación, colaciones y reserva por día",
      "Esencial",
      "persona",
      "Mantener energía estable durante trabajo físico prolongado.",
      "Planifica raciones por duración y esfuerzo; prioriza alimentos densos en energía, fáciles de cocinar y con buena estabilidad sin refrigeración.",
      "Separa una ración de emergencia que no se consuma salvo retraso, pérdida de alimentos o cambio de ruta."
    ],
    [
      "Bushcraft",
      "Agua",
      "Recipientes de agua",
      "Esencial",
      "persona",
      "Transportar, almacenar y, si es necesario, calentar agua en campo.",
      "Una cantimplora de acero inoxidable de pared simple permite hervir directamente; complementa con recipiente flexible y separa siempre agua tratada de agua cruda.",
      "No pongas al fuego recipientes de doble pared o aislados; marca un contenedor exclusivamente para agua sin tratar."
    ],
    [
      "Bushcraft",
      "Agua",
      "Filtro o tratamiento",
      "Esencial",
      "grupo",
      "Reducir el riesgo microbiológico cuando dependes de fuentes naturales.",
      "Los filtros de fibra hueca eliminan sedimentos, protozoos y muchas bacterias, pero no todos los virus; además pueden dañarse si se congelan estando húmedos.",
      "Filtra primero y lleva ebullición o dióxido de cloro como respaldo; protege el filtro del frío dentro de la ropa o saco."
    ],
    [
      "Bushcraft",
      "orientación y comunicación",
      "Mapa, brújula y mapa sin conexión",
      "Esencial",
      "grupo",
      "Mantener orientación y redundancia cuando no hay cobertura ni energía disponible.",
      "Usa mapa topográfico y brújula como sistema primario de respaldo; descarga previamente el mapa offline con ruta, puntos de agua, escape y campamento.",
      "Verifica declinación magnética, guarda el mapa protegido y confirma tu posición periódicamente antes de perder referencias claras."
    ],
    [
      "Bushcraft",
      "orientación y comunicación",
      "Teléfono, batería y comunicación de emergencia",
      "Esencial",
      "grupo",
      "Mantener navegación, coordinación y capacidad de pedir ayuda en zonas remotas.",
      "El teléfono sirve para GPS y comunicación, pero su autonomía cae con frío y mala señal; en áreas sin cobertura considera mensajero satelital o PLB.",
      "Lleva batería externa protegida del frío, activa modo avión cuando no necesites red y acuerda horarios de check-in con un contacto externo."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Botiquín para cortes y quemaduras",
      "Esencial",
      "grupo",
      "Atender cortes, quemaduras y traumatismos leves frecuentes en trabajo con herramientas y fuego.",
      "Incluye control de hemorragias, apósitos para quemaduras, irrigación de heridas, vendas, guantes y medicamentos personales; el contenido debe corresponder a tus habilidades de primeros auxilios.",
      "Coloca material para hemorragias y quemaduras en la parte superior del botiquín y separa los medicamentos del resto del equipo."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Linterna frontal",
      "Esencial",
      "persona",
      "Iluminar manos libres durante trabajo nocturno, montaje y desplazamientos.",
      "Prioriza buena autonomía en potencia baja, luz roja, resistencia al agua y bloqueo; el exceso de lúmenes consume energía y deteriora visión nocturna.",
      "Lleva batería de repuesto y conserva frontal y energía dentro del saco en noches frías para reducir pérdida de capacidad."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Sistema sanitario del sitio",
      "Esencial",
      "grupo",
      "Gestionar excretas y aseo sin contaminar agua, suelo ni campamento.",
      "Usa instalaciones existentes cuando existan; donde esté permitido enterrar, hazlo lejos de cursos de agua y sigue la normativa local sobre profundidad y retiro de papel.",
      "Lleva una pala pequeña y define el área sanitaria antes de oscurecer, siempre a sotavento y separada de cocina y agua."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Bolsas estancas para retirar residuos",
      "Esencial",
      "grupo",
      "Retirar basura, material contaminado y residuos húmedos sin ensuciar el equipo.",
      "Las bolsas estancas o de alta resistencia reducen fugas, olores y contaminación cruzada; los residuos deben salir del sitio cuando no exista gestión autorizada.",
      "Usa doble bolsa para residuos húmedos o cortantes y reserva una bolsa exclusiva para basura desde el inicio."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Resguardo para alimentos y residuos",
      "Según el sitio",
      "grupo",
      "Evitar atraer fauna y mantener separado el olor del área de descanso.",
      "Comida, basura, pasta dental y utensilios sucios pueden atraer animales; el método de almacenamiento depende de la fauna y regulación del lugar.",
      "Guarda alimentos y residuos juntos en un sistema cerrado y mantenlos lejos del refugio; usa contenedor rígido o colgado solo cuando sea apropiado y permitido."
    ],
    [
      "Bushcraft",
      "Seguridad, salud y residuos",
      "Kit de reparación",
      "Esencial",
      "grupo",
      "Resolver fallas de refugio, mochila, ropa, herramientas y equipo sin abandonar la salida.",
      "Un kit útil incluye cinta de reparación, parches compatibles, aguja gruesa, hilo encerado, bridas, alambre fino, repuesto de hebillas y elementos específicos del refugio.",
      "Incluye solo reparaciones que realmente puedas ejecutar: prueba antes una costura, un parche y una reparación de correa con el mismo kit que llevarás."
    ],
    [
      "Acampada ultraligera",
      "Sistema base y transporte",
      "Mochila ligera de volumen adecuado",
      "Esencial",
      "persona",
      "Transportar el sistema completo con el menor peso estructural posible.",
      "El volumen debe definirse después de depurar el equipo; una mochila más pequeña evita llenar espacio innecesario y los modelos simples reducen cierres, bolsillos y estructura.",
      "Compra la mochila al final: si tu carga total ya es baja, considera 35–50 L y elimina accesorios exteriores que no uses."
    ],
    [
      "Acampada ultraligera",
      "Sistema base y transporte",
      "Bolsa interior impermeable",
      "Esencial",
      "persona",
      "Mantener secos saco, ropa y electrónica sin añadir una funda pesada.",
      "Un liner interior ligero protege mejor el contenido crítico que impermeabilizar múltiples bolsas; además elimina la necesidad de una funda exterior en muchas condiciones.",
      "Usa una bolsa resistente tipo liner y reserva bolsas individuales solo para elementos que realmente necesiten organización o doble protección."
    ],
    [
      "Acampada ultraligera",
      "Sistema base y transporte",
      "Báscula y lista de pesos",
      "Esencial",
      "grupo",
      "Conocer exactamente dónde está el peso y tomar decisiones objetivas.",
      "El peso real puede diferir del declarado por el fabricante; registrar cada artículo permite identificar duplicados y atacar primero los componentes más pesados.",
      "Pesa absolutamente todo, incluso bolsas y accesorios; ordena la lista de mayor a menor y elimina primero lo que no usarías en una salida real."
    ],
    [
      "Acampada ultraligera",
      "Sistema base y transporte",
      "Kit mínimo de reparación",
      "Esencial",
      "grupo",
      "Resolver fallas críticas sin cargar un taller completo.",
      "El kit debe cubrir únicamente refugio, colchoneta, mochila y elementos cuya falla pueda comprometer la salida; cinta, parches, aguja e hilo suelen resolver la mayoría de reparaciones menores.",
      "Lleva pequeñas cantidades: enrolla cinta en otro objeto, corta parches al tamaño necesario y elimina herramientas duplicadas."
    ],
    [
      "Acampada ultraligera",
      "Refugio y descanso",
      "Tienda ligera, tarp o refugio",
      "Esencial",
      "grupo",
      "Proteger de lluvia y viento con la mínima masa estructural posible.",
      "Un tarp o refugio de una pared elimina varillas, doble techo y parte del tejido; refugios que usan bastones de trekking como estructura evitan cargar postes dedicados.",
      "Si el clima y tu experiencia lo permiten, sustituye tienda doble pared por tarp o refugio de trekking poles; no ahorres peso eliminando protección necesaria contra lluvia o insectos."
    ],
    [
      "Acampada ultraligera",
      "Refugio y descanso",
      "Estacas, vientos y cordaje",
      "Esencial",
      "grupo",
      "Anclar el refugio usando solo la resistencia necesaria en cada punto.",
      "No todas las estacas soportan la misma carga: los puntos principales requieren mayor sección y los secundarios pueden usar estacas más ligeras; cordinos finos de baja elongación reducen peso y volumen.",
      "Mezcla 2–4 estacas robustas para puntos críticos con estacas ligeras para el resto y lleva solo la longitud de cordaje realmente necesaria."
    ],
    [
      "Acampada ultraligera",
      "Refugio y descanso",
      "Saco de dormir o quilt",
      "Esencial",
      "persona",
      "Conservar calor reduciendo tejido, cremalleras y aislamiento innecesario.",
      "Un quilt elimina capucha, cremallera completa y aislamiento comprimido bajo el cuerpo; el plumón de alto fill power ofrece mejor relación calor-peso y volumen que opciones de menor calidad.",
      "Usa la temperatura de confort como referencia y conserva unos 5 °C de margen; reduce peso con diseño y materiales, no bajando el nivel térmico necesario."
    ],
    [
      "Acampada ultraligera",
      "Refugio y descanso",
      "Aislante o colchoneta",
      "Esencial",
      "persona",
      "Aislar del suelo con el mínimo peso compatible con temperatura y comodidad.",
      "Una colchoneta de espuma de 3/4 de longitud es ligera, resistente y no puede pincharse; una inflable puede ofrecer mejor relación aislamiento-volumen pero requiere reparación.",
      "Usa longitud torso y coloca mochila o ropa bajo las piernas; recortar espuma sobrante puede ahorrar gramos sin perder aislamiento crítico del tronco."
    ],
    [
      "Acampada ultraligera",
      "Refugio y descanso",
      "Protector de suelo",
      "Según el refugio",
      "grupo",
      "Evitar abrasión y humedad del suelo sin cargar un footprint pesado.",
      "El protector original de muchas tiendas puede pesar varios cientos de gramos; películas finas de polietileno o polycro cumplen la función con una fracción del peso.",
      "Corta el protector ligeramente menor que el piso de la tienda para que no recoja lluvia y sustitúyelo cuando se deteriore."
    ],
    [
      "Acampada ultraligera",
      "Capas, lluvia y calzado",
      "Sistema de capas",
      "Esencial",
      "persona",
      "Regular temperatura y humedad con capas especializadas y de bajo peso.",
      "Primera capa sintética o merino 150–200 g/m² para evacuar humedad; segunda capa polar tipo fleece 100 o grid fleece para aislamiento activo; añade chaqueta aislante solo si la temperatura lo exige.",
      "Evita duplicar capas: combina base + polar ligero + aislamiento estático + shell, seleccionando cada prenda por la mínima temperatura prevista."
    ],
    [
      "Acampada ultraligera",
      "Capas, lluvia y calzado",
      "Protección de lluvia y viento",
      "Esencial",
      "persona",
      "Proteger frente a viento y precipitación manteniendo transpirabilidad y bajo peso.",
      "Una shell de 2,5 o 3 capas con membrana Gore-Tex, eVent o equivalente ofrece impermeabilidad y transpirabilidad; un rompeviento de 60–120 g resulta más eficiente cuando no llueve.",
      "No uses la impermeable como rompeviento permanente: conserva su membrana y reduce condensación utilizando primero una capa cortaviento ligera."
    ],
    [
      "Acampada ultraligera",
      "Capas, lluvia y calzado",
      "Calcetines de marcha y par seco",
      "Esencial",
      "persona",
      "Controlar humedad, fricción y temperatura del pie durante jornadas largas.",
      "Los calcetines de lana merino mezclada con fibras sintéticas ofrecen termorregulación, menor olor y buen desempeño húmedos; un segundo par seco mejora recuperación nocturna.",
      "Usa un par de marcha y otro exclusivamente seco para dormir; evita algodón y cambia el par antes de que la humedad provoque maceración o ampollas."
    ],
    [
      "Acampada ultraligera",
      "Capas, lluvia y calzado",
      "Calzado ligero y ya probado",
      "Esencial",
      "persona",
      "Reducir masa en los pies manteniendo agarre y protección adecuados al terreno.",
      "Los trail runners reducen peso y secan rápido; calzado con membrana Gore-Tex resulta útil en frío, nieve o humedad persistente, pero seca más lentamente si entra agua por arriba.",
      "Usa Gore-Tex cuando necesites mantener agua exterior fuera; para calor, cruces frecuentes o humedad constante suele funcionar mejor calzado sin membrana y de secado rápido."
    ],
    [
      "Acampada ultraligera",
      "Capas, lluvia y calzado",
      "Sombrero, lentes y protección solar",
      "Esencial",
      "persona",
      "Proteger ojos, piel y cabeza frente a radiación solar con mínimo peso.",
      "Usa lentes UV400 categoría 3 para montaña y senderismo general; categoría 4 con protección lateral para nieve o alta montaña. Polarización reduce reflejos, pero no sustituye protección UV.",
      "Combina lentes categoría adecuada, sombrero ligero y ropa UPF 30–50; reserva categoría 4 para alta exposición y nunca la uses para conducir."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Botellas o depósito de agua",
      "Esencial",
      "persona",
      "Transportar solo el agua necesaria entre fuentes sin penalizar peso vacío.",
      "Las botellas PET ligeras suelen pesar menos que depósitos estructurados; un depósito flexible añade capacidad temporal para tramos secos sin cargar volumen permanente.",
      "Dimensiona capacidad según distancia real entre fuentes y rellena en ruta; evita transportar litros “por si acaso” cuando el agua es frecuente."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Tratamiento de agua y respaldo",
      "Esencial",
      "grupo",
      "Obtener agua segura con un sistema ligero y redundante.",
      "Un filtro de fibra hueca cubre protozoos y muchas bacterias con muy poco peso; el dióxido de cloro funciona bien como respaldo y no añade hardware.",
      "Usa filtro como sistema principal y lleva pocas dosis de dióxido de cloro; nunca dejes congelar un filtro húmedo porque puede dañarse internamente."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Menú, colaciones y raciones por día",
      "Esencial",
      "persona",
      "Aportar energía suficiente con la mejor relación calorías/peso.",
      "Para ultraligero convienen alimentos de alta densidad energética, aproximadamente 4–5 kcal/g, poco contenido de agua y mínima preparación.",
      "Reempaca por día, elimina envases originales y concentra calorías en frutos secos, grasas, tortillas, quesos curados y alimentos deshidratados."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Estufa certificada, combustible y encendido",
      "Según el menú",
      "grupo",
      "Cocinar con un sistema fiable y de masa mínima.",
      "Una estufa de rosca ligera y cartucho adecuado suele ofrecer mejor relación simplicidad-peso; sistemas integrados ahorran combustible pero pesan más.",
      "Calcula combustible por número de hervidos, comparte una estufa entre dos personas y evita cargar un segundo sistema de cocción."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Olla o taza, cuchara y limpieza mínima",
      "Según el menú",
      "persona",
      "Hervir y comer usando el menor número de piezas.",
      "Una olla de titanio de 550–750 ml puede funcionar también como taza; una cuchara larga permite comer directamente de bolsas y evita plato adicional.",
      "Anida estufa, encendedor y cartucho dentro de la olla y limpia con unas gotas de agua y la propia cuchara, sin cargar esponjas ni utensilios extra."
    ],
    [
      "Acampada ultraligera",
      "Agua, comida y cocina",
      "Sistema autorizado para comida y residuos",
      "Según el destino",
      "grupo",
      "Evitar acceso de fauna sin añadir equipo innecesario o incumplir normativa.",
      "El sistema depende del área: bolsa resistente a olores, colgado autorizado, locker o bear canister homologado; donde el canister sea obligatorio, su peso no es negociable.",
      "Consulta la regulación antes de empacar y comparte volumen de un contenedor autorizado cuando viajes en grupo, sin reducir el nivel de protección exigido."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Mapa, brújula y ruta sin conexión",
      "Esencial",
      "grupo",
      "Mantener navegación fiable con mínima redundancia electrónica.",
      "El teléfono con cartografía topográfica y track descargado puede sustituir un GPS dedicado; una brújula compacta y mapa reducido proporcionan respaldo sin depender de batería o cobertura.",
      "Recorta o imprime solo el sector necesario del mapa, descarga ruta y puntos de escape y lleva una brújula base ligera en lugar de duplicar dispositivos GPS."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Batería externa y cable compatible",
      "Según la duración",
      "grupo",
      "Mantener operativos teléfono y dispositivos esenciales durante toda la ruta.",
      "Una batería de 5.000–10.000 mAh suele cubrir salidas cortas según uso, señal y temperatura; cables largos, adaptadores y conectores duplicados añaden peso innecesario.",
      "Calcula capacidad según consumo diario real, usa modo avión y ahorro de energía y lleva un único cable corto compatible con todos los dispositivos cuando sea posible."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Linterna frontal y energía compatible",
      "Esencial",
      "persona",
      "Disponer de iluminación manos libres con bajo consumo energético.",
      "Una frontal ligera con modo bajo eficiente, bloqueo accidental y resistencia al agua resulta más útil que perseguir potencias máximas; modelos recargables pueden compartir la batería externa del teléfono.",
      "Prioriza autonomía a 20–100 lúmenes y compatibilidad USB-C; evita pilas o baterías de respaldo adicionales si la duración de la ruta y tu power bank ya proporcionan redundancia suficiente."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Botiquín y medicamentos personales",
      "Esencial",
      "grupo",
      "Atender problemas previsibles sin cargar material para situaciones improbables.",
      "El botiquín ultraligero debe adaptarse a duración, grupo y terreno: control de hemorragias, ampollas, pequeñas heridas y medicamentos personales tienen prioridad sobre grandes surtidos comerciales.",
      "Retira empaques voluminosos, lleva cantidades calculadas y conserva identificados los medicamentos; no elimines material crítico únicamente para reducir gramos."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Higiene, baño y residuos",
      "Esencial",
      "grupo",
      "Mantener higiene y gestionar excretas respetando la normativa con un kit mínimo.",
      "Jabón biodegradable concentrado, una pequeña cantidad de papel o sistema de bidé y pala ultraligera pueden reducir volumen; algunas áreas exigen retirar los residuos humanos mediante bolsas sanitarias.",
      "Usa envases pequeños, lleva solo la cantidad necesaria y verifica antes si se permiten catholes o si debes transportar todos los residuos fuera del área."
    ],
    [
      "Acampada ultraligera",
      "Orientación, higiene y emergencia",
      "Silbato y refugio de emergencia",
      "Esencial",
      "persona",
      "Facilitar señalización y protección térmica de emergencia con pocos gramos.",
      "Un silbato sin bola pesa muy poco y funciona sin energía; un bivy de emergencia aluminizado ofrece mayor protección contra viento y pérdida de calor que una simple manta plana.",
      "Aprovecha el silbato integrado en la correa pectoral si es funcional y lleva un bivy compacto de emergencia en lugar de duplicar manta, tarp y otros refugios de contingencia."
    ],
    [
      "Acampada ultraligera",
      "Carga compartida en familia",
      "Reparto de equipo compartido",
      "Esencial",
      "grupo",
      "Distribuir el peso común sin duplicar equipo y respetando la capacidad de cada integrante.",
      "Tienda, cocina, filtro, botiquín y otros elementos colectivos pueden repartirse entre adultos y jóvenes según peso corporal, condición física y experiencia; dividir componentes reduce cargas individuales.",
      "Separa tienda, varillas, estacas, cocina y alimento entre varias mochilas, pero evita que una sola persona cargue todo el equipo crítico del grupo."
    ],
    [
      "Acampada ultraligera",
      "Carga compartida en familia",
      "Abrigo, agua y alimento accesibles",
      "Esencial",
      "persona",
      "Mantener autonomía básica aunque el grupo se separe momentáneamente o una mochila no esté disponible.",
      "Cada integrante debe llevar accesibles su propia capa térmica, agua, colación y protección contra lluvia; los menores no deberían depender completamente de la mochila de un adulto para necesidades inmediatas.",
      "Reduce peso compartiendo lo colectivo, no lo esencial: cada persona conserva abrigo, hidratación y alimento suficiente para resolver una demora corta."
    ],
    [
      "Acampada ultraligera",
      "Carga compartida en familia",
      "Itinerario y contacto de salida",
      "Esencial",
      "grupo",
      "Facilitar búsqueda y respuesta ante retraso o emergencia sin añadir peso físico significativo.",
      "Un itinerario externo con ruta, campamentos, horarios, integrantes y hora límite de contacto aporta seguridad sin cargar equipo adicional.",
      "Envía track, puntos de salida y hora prevista de regreso a una persona responsable y define previamente cuándo debe iniciar una alerta si el grupo no reporta."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Estufa portátil",
      "Esencial",
      "patrulla",
      "Preparar los alimentos de toda la Patrulla de forma estable y controlada.",
      "La estufa o anafre debe estar limpio, operativo y dimensionado para las ollas de la Patrulla; cuando el lugar no permite fogatas, el carnet indica utilizar estufetas o quemadores.",
      "Prueben la estufa antes del campamento, colóquenla sobre una superficie firme y definan un responsable de operación durante cada comida."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Gas o combustible compatible",
      "Esencial",
      "patrulla",
      "Asegurar combustible suficiente y compatible durante todo el campamento.",
      "El tanque o cartucho debe corresponder exactamente al sistema de la estufa y contener combustible suficiente para el menú previsto; conexiones, mangueras y válvulas deben revisarse antes de salir.",
      "Calculen el combustible según número de comidas y tiempos de cocción, revisen fugas antes de encender y mantengan el combustible alejado de llamas y fuentes de calor."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Ollas, sartén y tapas",
      "Esencial",
      "patrulla",
      "Cocinar cantidades adecuadas para toda la Patrulla con equipo resistente.",
      "Ollas, sartenes y utensilios deben tolerar las temperaturas del sistema utilizado; las tapas reducen tiempo de cocción y consumo de combustible.",
      "Seleccionen tamaños según las porciones reales de la Patrulla y lleven tapas compatibles; eviten duplicar recipientes que no estén contemplados en el menú."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Utensilios de cocina",
      "Esencial",
      "patrulla",
      "Preparar, servir y manipular alimentos de manera organizada e higiénica.",
      "El equipo debe mantenerse limpio y en buen estado; conviene disponer de cucharón, espátula, cuchillo, tabla y utensilios de servicio acordes con los platillos planeados.",
      "Definan los utensilios a partir del menú, no al revés, y mantengan separados los elementos utilizados con alimentos crudos de los destinados a alimentos listos para consumo."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Recipiente para agua de cocina",
      "Esencial",
      "patrulla",
      "Disponer de agua suficiente para cocinar, preparar bebidas y mantener la operación de la Patrulla.",
      "El carnet asigna al Aguador mantener agua fresca en bidones dentro de la Patrulla; el recipiente debe ser exclusivo para agua limpia y permitir servirla sin contaminar el contenido.",
      "Utilicen bidones con tapa y llave o vertedor, identifiquen claramente el agua potable y eviten introducir vasos, manos o utensilios dentro del recipiente."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Despensa, menú y raciones",
      "Esencial",
      "patrulla",
      "Garantizar alimentación suficiente, balanceada y organizada para todos los integrantes.",
      "El menú debe considerar días de campamento, tipo de actividad, presupuesto, tiempo para cocinar, porciones, alergias e intolerancias; los perecederos requieren conservación y deben consumirse primero.",
      "Planeen desayuno, comida, cena y colaciones por día, compren según número real de asistentes y organicen la despensa en orden de consumo para reducir desperdicio."
    ],
    [
      "Campamento Scout · Tropa",
      "Cocina de patrulla",
      "Lavado y manejo de aguas usadas",
      "Esencial",
      "patrulla",
      "Mantener limpia el área de cocina y evitar que residuos contaminen el campamento.",
      "El material utilizado debe lavarse y regresar limpio al intendente; el carnet contempla basurero y grasero dentro de la organización del rincón de Patrulla y exige evitar contaminación de suelo y cuerpos de agua.",
      "Retiren restos de comida antes del lavado, concentren los residuos y utilicen el sistema de grasero establecido por la Patrulla; no descarguen directamente aguas de cocina en ríos, lagos o manantiales."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Casas de campaña y protectores de suelo",
      "Esencial",
      "patrulla",
      "Proporcionar alojamiento seguro y adecuado para los integrantes de la Patrulla.",
      "La capacidad debe considerar Scouts y equipo; una tienda 3 estaciones con doble techo, ventilación y costuras selladas cubre la mayoría de campamentos. El protector reduce abrasión y humedad del piso.",
      "Practiquen el montaje antes de salir, revisen varillas, cierres, estacas y rasgaduras, y corten el protector ligeramente menor que el piso para evitar que acumule lluvia."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Lona o tarp de patrulla",
      "Esencial",
      "patrulla",
      "Crear un área común protegida para cocina, reunión y actividades de Patrulla.",
      "Una lona impermeable permite generar sombra y protección contra lluvia; su tamaño y configuración deben responder al número de integrantes, viento y puntos de anclaje disponibles.",
      "Practiquen configuraciones tipo A, cobertizo o techo inclinado y orienten el lado bajo hacia el viento dominante para mejorar estabilidad y evacuación del agua."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Estacas, vientos y tensores",
      "Esencial",
      "patrulla",
      "Mantener tiendas y lonas correctamente ancladas y tensadas.",
      "Las estacas trabajan mejor según el tipo de suelo y los vientos estabilizan la estructura frente a ráfagas; el carnet destaca revisar y estirar periódicamente los vientos de la carpa.",
      "Usen estacas adecuadas al terreno, entiérrenlas inclinadas en sentido contrario a la tensión y revisen tensores después de lluvia, viento o cambios de temperatura."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Bordones o postes para construcciones",
      "Según el plan",
      "patrulla",
      "Construir mesas, portadas, alacenas, cercos y otras estructuras de campamento.",
      "El carnet contempla palos de escoba, bordones, bastones, largueros o tutores; la estabilidad depende del diseño, los puntos de apoyo y el amarre empleado.",
      "Seleccionen previamente longitudes y diámetros según la construcción y no corten vegetación viva cuando el lugar no lo permita; lleven el material preparado cuando sea necesario."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Cuerdas para construcciones y nudos",
      "Según el plan",
      "patrulla",
      "Realizar amarres, anclajes y astucias funcionales de Patrulla.",
      "Los amarres cuadrado, diagonal, redondo y de ocho responden a diferentes posiciones y esfuerzos; el ixtle o mecahilo son materiales mencionados para construcciones.",
      "Preparen cuerdas por longitudes antes del campamento, rematen sus extremos y practiquen ballestrinque, cuadrado, diagonal y redondo antes de construir estructuras de carga."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Banderín de patrulla",
      "Según el programa",
      "patrulla",
      "Identificar el rincón y reforzar la identidad de la Patrulla durante el campamento.",
      "El banderín funciona como elemento representativo y debe mantenerse visible y protegido sin interferir con circulaciones, vientos o zonas de trabajo.",
      "Asigne un punto fijo dentro del rincón de Patrulla y utilice un soporte estable; eviten colocarlo donde pueda caer sobre tiendas, cocina o zonas de paso."
    ],
    [
      "Campamento Scout · Tropa",
      "Campamento y construcciones",
      "Material para actividades",
      "Según el programa",
      "patrulla",
      "Contar con los recursos necesarios para ejecutar el programa educativo y las actividades previstas.",
      "El material debe definirse a partir del programa, duración y objetivos del campamento; las construcciones Scout requieren planear previamente materiales, tiempo y responsabilidades.",
      "Clasifiquen el material por actividad en bolsas o cajas identificadas y hagan inventario antes de salir y antes de levantar el campamento para evitar faltantes y duplicidades."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Botiquín grupal",
      "Esencial",
      "patrulla",
      "Atender lesiones y emergencias iniciales de toda la Patrulla hasta recibir ayuda especializada.",
      "El botiquín de Patrulla o Sección debe permanecer completo, ordenado, higienizado y accesible; el enfermero controla insumos y conoce las necesidades médicas relevantes de los integrantes.",
      "Revísenlo antes de cada salida, repongan inmediatamente lo utilizado y mantengan fichas médicas y medicamentos personales claramente identificados."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Linterna frontal y energía compatible",
      "Esencial",
      "persona",
      "Proporcionar iluminación manos libres durante desplazamientos, guardias, montaje y emergencias nocturnas.",
      "Una frontal individual permite trabajar sin ocupar las manos; conviene que tenga modo bajo, bloqueo accidental y resistencia al agua, además de autonomía suficiente para todas las noches previstas.",
      "Unifiquen, cuando sea posible, el tipo de batería o conexión de las lámparas de la Patrulla y lleven energía de respaldo protegida de humedad."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Higiene personal y lavado de manos",
      "Esencial",
      "persona",
      "Prevenir enfermedades y mantener condiciones sanitarias adecuadas durante todo el campamento.",
      "El equipo personal debe incluir jabón de manos y artículos de aseo; el lavado es especialmente importante antes de preparar alimentos, después de ir al baño y cuando exista suciedad visible.",
      "Instalen un punto de lavado de manos cerca del área común pero lejos de fuentes naturales de agua y mantengan jabón, agua y sistema de secado siempre disponibles."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Bolsas para residuos y reciclaje",
      "Esencial",
      "patrulla",
      "Evitar contaminación del sitio y organizar correctamente los desechos generados.",
      "El Scout debe impedir que los residuos contaminen suelo y cuerpos de agua; se recomienda reducir desechables, utilizar recipientes reutilizables y retirar la basura cuando el sitio no cuente con infraestructura.",
      "Usen bolsas diferenciadas para reciclables, residuos generales y material contaminado, ciérrenlas correctamente y asignen un responsable de su retiro al finalizar el campamento."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Mapa, itinerario y contactos",
      "Esencial",
      "patrulla",
      "Mantener control de desplazamientos y facilitar respuesta ante retrasos o emergencias.",
      "La planeación debe incluir ruta de ida y regreso, rutas alternas, recepción telefónica, servicios de emergencia cercanos, hospital disponible y tiempos aproximados de respuesta.",
      "Lleven mapa e itinerario accesibles y dejen una copia con responsables externos; incluyan teléfonos familiares, 911 y contactos específicos del lugar visitado."
    ],
    [
      "Campamento Scout · Tropa",
      "Seguridad, higiene y organización",
      "Lista de participantes y permisos",
      "Esencial",
      "patrulla",
      "Saber exactamente quién participa y disponer de la documentación necesaria para la actividad.",
      "El carnet exige llevar las fichas médicas debidamente requisitadas y contempla credencial Scout y contactos de emergencia; no especifica un formato único de autorización de salida.",
      "Verifiquen asistencia, ficha médica, contactos y credencial antes de partir, y completen las autorizaciones y permisos que exijan su Grupo Scout, ASMAC, transporte y sitio de campamento."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Mochila de campamento y bolsa interior",
      "Esencial",
      "persona",
      "Transportar el equipo personal de forma estable, ordenada y protegido de la humedad.",
      "La mochila debe corresponder a la duración del campamento y ajustarse correctamente al torso; cinturón lumbar y tirantes deben transferir la carga sin puntos de presión. Una bolsa interior impermeable protege mejor saco y ropa que depender únicamente de la funda exterior.",
      "Evita mochilas sobredimensionadas que inviten a cargar de más; coloca el equipo pesado próximo a la espalda y conserva saco, ropa seca y electrónica dentro del liner impermeable."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Bazar personal antes y después del campamento",
      "Esencial",
      "persona",
      "Verificar que el Scout salga y regrese con su equipo completo, funcional y correctamente identificado.",
      "El bazar personal permite extender y revisar sistemáticamente cada artículo antes de partir y al finalizar, detectando faltantes, daños, objetos innecesarios o material ajeno.",
      "Hagan el bazar con una lista de control y revisen estado, nombre y cantidad de cada pieza; al regresar, separen inmediatamente equipo húmedo o dañado para limpieza, secado y mantenimiento."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Saco de dormir y aislante",
      "Esencial",
      "persona",
      "Garantizar descanso, aislamiento térmico y recuperación durante la noche.",
      "El saco debe seleccionarse por temperatura de confort y condiciones previstas; el aislante reduce la pérdida de calor hacia el suelo y su capacidad térmica se expresa mediante valor R.",
      "Usa un saco con confort adecuado a la mínima prevista y una colchoneta acorde al terreno y temperatura; nunca confíes solo en el grosor del saco para aislarte del suelo."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Ropa por capas e impermeable",
      "Esencial",
      "persona",
      "Regular temperatura corporal y protegerse de viento y precipitación durante las actividades.",
      "El sistema técnico combina primera capa sintética o merino para gestionar humedad, segunda capa tipo fleece o polar para aislamiento y tercera capa impermeable-transpirable contra lluvia y viento.",
      "Evita algodón en frío o humedad; ajusta las capas antes de sudar y conserva una muda seca para dormir separada de la ropa utilizada durante el día."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Plato, taza y cubiertos",
      "Esencial",
      "persona",
      "Disponer de un sistema individual reutilizable e higiénico para todas las comidas.",
      "Plato o recipiente, taza y cubiertos deben ser resistentes, fáciles de lavar e identificables; materiales durables reducen el uso de desechables y facilitan el control del equipo de Patrulla.",
      "Marca cada pieza con nombre o distintivo, lávala inmediatamente después de comer y guárdala completamente limpia y seca para evitar contaminación y pérdidas."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Botella de agua personal",
      "Esencial",
      "persona",
      "Mantener acceso personal y controlado al agua durante todo el campamento.",
      "La botella debe ser reutilizable, resistente, de boca suficientemente amplia para limpieza y con capacidad acorde al clima y actividad; cada Scout debe distinguir claramente su recipiente personal.",
      "Rellénala únicamente desde la fuente de agua potable definida por la Patrulla y no compartas boquillas; revisa periódicamente cuánto has bebido en lugar de esperar a sentir sed intensa."
    ],
    [
      "Campamento Scout · Tropa",
      "Equipo personal",
      "Mochila personal de día",
      "Según el programa",
      "persona",
      "Transportar lo esencial durante excursiones o actividades alejadas del campamento base.",
      "La mochila de ataque debe dimensionarse según duración e incluir hidratación, colación, protección climática, orientación, lámpara y otros elementos específicos de la actividad sin cargar todo el equipo de campamento.",
      "Para salidas de varias horas suele bastar una mochila compacta bien ajustada; prepara su contenido antes de cada actividad según distancia, clima, terreno y autonomía requerida."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Mochila armada por el lobato",
      "Esencial",
      "persona",
      "Desarrollar autonomía y asegurar que el Lobato conozca dónde se encuentra cada elemento de su equipo.",
      "El Lobato debe participar directamente en doblar, clasificar y empacar sus pertenencias; si un adulto arma completamente la mochila, el niño puede desconocer su contenido y tener dificultad para localizarlo durante el campamento.",
      "Que el Lobato arme la mochila siguiendo una lista y que el adulto solo supervise al final; coloquen saco y ropa al fondo, equipo frecuente accesible y nada suelto en el exterior."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Práctica de carga con manos libres",
      "Esencial",
      "persona",
      "Desplazarse con seguridad manteniendo ambas manos disponibles para equilibrio y apoyo.",
      "La carga debe quedar estable y ajustada al cuerpo, sin bolsas, sleeping o cantimploras balanceándose; Scouts de México propone realizar una caminata de práctica para detectar errores de empacado.",
      "Realicen una prueba de al menos 15 minutos completamente cargado y reajusten tirantes y cinturón; durante caminatas reales eviten llevar objetos en las manos o una segunda mochila pesada al frente."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Uniforme completo",
      "Según el programa",
      "persona",
      "Portar correctamente la identidad Scout y disponer de la indumentaria prevista para las actividades.",
      "El uniforme debe estar completo, limpio, correctamente colocado e identificado; no sustituye las prendas técnicas necesarias para frío, lluvia o sol, que deben transportarse aparte según el programa y clima.",
      "Revísenlo antes de salir como una unidad completa y lleven impermeable o capa térmica accesible sin obligar al Lobato a desempacar toda la mochila."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Nombre completo marcado",
      "Esencial",
      "persona",
      "Evitar pérdidas y permitir identificar rápidamente las pertenencias de cada integrante de la Manada.",
      "El material de Manada recomienda marcar las pertenencias con nombre real, no nombre de selva, además de Grupo y Provincia; esto es especialmente importante en artículos visualmente idénticos.",
      "Marca mochila, saco, aislante, botella, ropa exterior y bolsas interiores con etiqueta resistente al agua; evita poner datos personales adicionales visibles innecesariamente."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Bazar personal antes y después del campamento",
      "Esencial",
      "persona",
      "Comprobar que el equipo esté completo antes de salir y regrese completo y en condiciones de uso.",
      "El bazar personal permite extender, ordenar y revisar físicamente cada artículo, favoreciendo que el Lobato reconozca sus pertenencias y detecte faltantes, ropa húmeda o equipo dañado.",
      "Realicen el mismo bazar antes y después usando una lista ilustrada o de lectura sencilla; el Lobato identifica cada pieza y el adulto confirma únicamente los elementos críticos."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Bolsa de basura como fondo de mochila",
      "Esencial",
      "persona",
      "Crear una barrera interior contra lluvia, humedad y filtraciones de la mochila.",
      "Una bolsa plástica resistente utilizada como liner protege conjuntamente saco, pijama y ropa seca incluso cuando la tela exterior de la mochila se moja; debe permanecer íntegra y cerrada dentro del compartimento principal.",
      "Usa una bolsa gruesa del tamaño de la mochila, introduce dentro únicamente el equipo que debe permanecer seco y cierra su parte superior por torsión; no dependas exclusivamente de la funda exterior."
    ],
    [
      "Campamento Scout · Manada",
      "Autonomía y preparación",
      "Bolsas resellables o estancas",
      "Esencial",
      "persona",
      "Organizar y proteger artículos pequeños, ropa y elementos sensibles a la humedad.",
      "Bolsas resellables transparentes facilitan que un Lobato identifique rápidamente cada categoría; las bolsas estancas son preferibles para elementos cuya falla por humedad sea crítica.",
      "Agrupa por función —aseo, ropa interior, electrónica, ropa seca—, etiqueta cada bolsa y evita embolsar individualmente cada objeto, porque aumenta complejidad y dificulta que el niño mantenga el orden."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Dos paliacates",
      "Esencial",
      "persona",
      "Resolver necesidades prácticas de protección, señalización y actividades Scout con un elemento multifuncional.",
      "Dos paliacates permiten usos simultáneos como protección solar, identificación, limpieza, señalización o apoyo básico de primeros auxilios sin depender de uno solo.",
      "Llévalos limpios, doblados y fácilmente accesibles; reserva uno para actividades y mantén el segundo disponible para una necesidad distinta."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Piola de máximo 2 metros",
      "Esencial",
      "persona",
      "Practicar nudos y resolver amarres ligeros durante actividades de Manada.",
      "Una piola de hasta 2 m es suficiente para practicar nudos básicos y pequeños amarres sin añadir volumen innecesario; no debe utilizarse para asegurar personas ni soportar cargas críticas.",
      "Usa cordino flexible de aproximadamente 4–5 mm, con extremos rematados, y enseña al Lobato a enrollarlo siempre de la misma manera para evitar enredos."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Lápiz o pluma y libreta pequeña",
      "Esencial",
      "persona",
      "Registrar instrucciones, observaciones, pistas y aprendizajes durante las actividades.",
      "Una libreta pequeña y un instrumento de escritura permiten trabajar sin depender de teléfono o batería; el tamaño debe permitir llevarlos permanentemente en la cangurera.",
      "Elige libreta resistente y lápiz como primera opción porque continúa escribiendo con humedad moderada y no presenta problemas de tinta o derrames."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Costurero pequeño",
      "Según el programa",
      "persona",
      "Resolver reparaciones menores de ropa y uniforme durante el campamento.",
      "Un kit compacto puede incluir aguja protegida, hilo de los colores necesarios, botones y seguros; los elementos punzantes requieren almacenamiento seguro y supervisión acorde con la edad.",
      "Utiliza un pequeño estuche rígido o cerrado y lleva únicamente materiales compatibles con el uniforme y prendas que realmente porta el Lobato."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Credencial Scout vigente",
      "Esencial",
      "persona",
      "Acreditar pertenencia e identificación dentro de las actividades de la Asociación.",
      "La credencial debe corresponder al Lobato y mantenerse vigente, legible y protegida contra humedad y pérdida.",
      "Guárdala siempre en el mismo compartimento cerrado de la cangurera, preferentemente dentro de una funda transparente, y revisa su vigencia antes de cada salida."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Dinero para imprevistos",
      "Según indicación",
      "persona",
      "Disponer de una cantidad limitada para una necesidad no prevista durante una salida.",
      "El dinero debe responder al tipo de actividad y no convertirse en una suma elevada bajo responsabilidad del menor; conviene diferenciarlo del dinero previsto para compras programadas.",
      "Define previamente con la familia una cantidad pequeña para emergencias, guárdala separada y enseña al Lobato que solo debe utilizarla cuando la situación lo justifique o por indicación de un adulto responsable."
    ],
    [
      "Campamento Scout · Manada",
      "Equipo de bolsillo · cangurera",
      "Agenda Scout",
      "Según el programa",
      "persona",
      "Conserva información de actividades y progresión.",
      "Protégela en una bolsa resellable.",
      "Llévala solo si está solicitada para la salida."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Almuerzo o snack nutritivo",
      "Esencial",
      "persona",
      "Aportar energía durante la actividad sin requerir preparación ni utensilios adicionales.",
      "El snack debe ser nutritivo, fácil de abrir y consumir, resistente al transporte y conocido por el Lobato; deben considerarse alergias alimentarias y evitar productos que se deterioren rápidamente con calor.",
      "Prepara una porción individual identificada y de poco residuo, combinando carbohidrato y proteína; evita alimentos nuevos, muy azucarados o que requieran refrigeración si no existe cadena de frío."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Botella de agua reutilizable",
      "Esencial",
      "persona",
      "Mantener hidratación disponible y permitir que el Lobato controle su propio consumo.",
      "La botella debe ser reutilizable, resistente, hermética y operable por el niño; para actividades cortas una capacidad aproximada de 500–750 ml puede ser práctica, aumentando según duración, calor y disponibilidad de recarga.",
      "Llévala llena al iniciar, identificada con nombre y en un bolsillo accesible; enseña al Lobato a beber periódicamente y no a esperar hasta tener sed intensa."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Repelente, bloqueador y gorra",
      "Esencial",
      "persona",
      "Reducir exposición a radiación UV y picaduras durante actividades exteriores.",
      "Utiliza protector solar de amplio espectro SPF 30 o superior y resistente al agua; para insectos, repelentes registrados con ingredientes como DEET o picaridina son opciones eficaces cuando se usan conforme a su etiqueta.",
      "Un adulto debe verificar la aplicación antes de salir; evita repelente en manos, ojos y boca, reaplica el protector según indicaciones y complementa con gorra, sombra y ropa que cubra la piel."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Impermeable reutilizable",
      "Esencial",
      "persona",
      "Mantener al Lobato seco durante lluvia o cambios repentinos del tiempo.",
      "Un impermeable reutilizable con capucha ofrece protección más fiable que ponchos desechables; debe permitir libertad de movimiento y colocarse sobre las demás capas sin quedar excesivamente grande.",
      "Guárdalo en un bolsillo exterior o superior para colocarlo antes de que la ropa se moje; practica previamente con el Lobato cómo ponérselo y guardarlo por sí mismo."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Suéter o capa de abrigo",
      "Esencial",
      "persona",
      "Conservar temperatura corporal durante descansos, viento o descenso de temperatura.",
      "Una segunda capa de fleece o polar sintético conserva aislamiento, evacua humedad y seca más rápido que una sudadera pesada de algodón; debe quedar protegida de la lluvia dentro de la mochila.",
      "Lleva una sola capa térmica adecuada al pronóstico, guardada seca y accesible; enséñale a colocarla antes de sentir frío intenso y a retirarla antes de sobrecalentarse."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Linterna frontal en bolsa resellable",
      "Esencial",
      "persona",
      "Proporcionar iluminación manos libres durante desplazamientos o contingencias con poca luz.",
      "Una frontal infantil o compacta debe tener operación sencilla, modo de baja intensidad y suficiente autonomía; una bolsa resellable protege lámpara y batería de humedad y evita activación accidental entre otros objetos.",
      "Comprueba carga o baterías antes de salir, activa el bloqueo si existe y enseña al Lobato a utilizar el modo bajo; la máxima potencia debe reservarse para cuando realmente se necesite."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Silbato de emergencia",
      "Según indicación de jefatura",
      "persona",
      "Permitir que el Lobato pueda llamar la atención rápidamente si se separa o necesita ayuda.",
      "El silbato funciona sin batería y su sonido alcanza más distancia que la voz; debe permanecer accesible y sujeto a la mochila o ropa, sin cordones largos alrededor del cuello.",
      "Practiquen previamente la señal de emergencia adoptada por la Manada y expliquen que no es un juguete; si queda separado del grupo debe permanecer en un lugar seguro y usarlo para hacerse localizar."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de ataque",
      "Ficha de salud actualizada",
      "Esencial",
      "persona",
      "Proporcionar al adulto responsable información médica relevante durante una emergencia.",
      "La ficha debe incluir identificación, contactos responsables, alergias, medicamentos y otra información necesaria para atención; por contener datos personales debe mantenerse protegida y no exhibirse exteriormente.",
      "Lleva la ficha actualizada en un sobre o bolsa impermeable claramente identificada dentro de un compartimento conocido por los Scouters y revisa sus datos antes de cada campamento."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Cambio de ropa completo",
      "Esencial",
      "persona",
      "Mantener al Lobato seco, limpio y funcional durante todo el campamento.",
      "El cambio debe incluir ropa interior, calcetines, camiseta y pantalón adecuados al clima; conviene separar claramente la ropa limpia de la usada o húmeda para que el niño pueda identificarla sin ayuda.",
      "Empaca cada cambio completo en una bolsa resellable identificada por día; conserva al menos una muda completamente seca reservada para contingencia o para dormir."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Calzado de repuesto o plan para mantener los pies secos",
      "Según el clima",
      "persona",
      "Evitar enfriamiento, ampollas y pérdida de comodidad por calzado mojado.",
      "Los pies requieren calcetines secos y calzado correctamente ajustado; un segundo par puede ser útil en campamentos húmedos, mientras que en condiciones más secas puede bastar proteger el calzado principal y disponer de calcetines de recambio.",
      "No lleves zapatos pesados solo por duplicar: evalúa clima y terreno; guarda calzado o calcetines de respaldo en bolsa impermeable y nunca permitas que el Lobato duerma con calcetines húmedos."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Chamarra, gorro y guantes",
      "Según el clima",
      "persona",
      "Conservar temperatura corporal durante frío, viento y periodos de baja actividad.",
      "La chamarra aporta aislamiento; gorro y guantes protegen extremidades y permiten ampliar el rango térmico sin añadir prendas voluminosas. Para humedad, el aislamiento sintético mantiene mejor desempeño mojado que algodón.",
      "Dimensiona el abrigo para la mínima temperatura prevista y permite colocarlo sobre las demás capas; guarda gorro y guantes juntos en un bolsillo que el Lobato pueda localizar inmediatamente."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Pijama, calcetines de dormir, aislante y sleeping bag",
      "Esencial",
      "persona",
      "Proporcionar un sistema completo de descanso térmico y confortable.",
      "La pijama seca funciona como capa nocturna; calcetines exclusivos para dormir evitan introducir humedad al saco. El aislante reduce pérdida de calor hacia el suelo y el sleeping debe seleccionarse por temperatura de confort, no solo por grosor.",
      "Mantén pijama, calcetines y sleeping completamente secos dentro de la bolsa interior; enseña al Lobato a extender el aislante y acomodar su saco antes de que anochezca."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Cobija pequeña",
      "Según el clima",
      "persona",
      "Añadir confort o aislamiento complementario cuando las condiciones y el sistema de sueño lo justifican.",
      "Una cobija pequeña puede servir como refuerzo térmico, apoyo durante actividades o elemento de confort, pero no debe sustituir un sleeping adecuado ni compensar una colchoneta insuficiente.",
      "Si el sleeping ya cubre correctamente la temperatura prevista, evita una cobija pesada; cuando se incluya, prioriza una pieza compacta de fleece o material sintético de secado rápido."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Kit de aseo personal",
      "Esencial",
      "persona",
      "Mantener higiene personal y fomentar autonomía en rutinas básicas de campamento.",
      "El kit debe contener cepillo y pasta dental, jabón, peine o cepillo, toalla compacta y los artículos personales necesarios; los envases deben ser pequeños, resistentes a fugas y fáciles de reconocer.",
      "Coloca todo en una sola bolsa identificada y practica previamente la rutina; evita envases grandes y productos innecesarios, pero no reduzcas artículos esenciales de higiene por ahorrar espacio."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Plato, vaso y cuchara reutilizables",
      "Esencial",
      "persona",
      "Permitir que cada Lobato coma y beba con utensilios propios, durables e higiénicos.",
      "Plato o tazón, vaso y cuchara reutilizables deben ser resistentes, ligeros, fáciles de lavar y claramente identificados; un sistema sencillo reduce piezas perdidas y facilita que el niño se responsabilice de su equipo.",
      "Prioriza un tazón profundo y una cuchara resistente sobre juegos de vajilla completos; marca cada pieza y establece la rutina de lavar, secar y guardar inmediatamente después de cada comida."
    ],
    [
      "Campamento Scout · Manada",
      "Mochila de campamento",
      "Bolsa de basura extra",
      "Esencial",
      "persona",
      "Contener ropa húmeda, residuos o equipo contaminado sin afectar el resto de la mochila.",
      "Una bolsa adicional permite separar temporalmente basura o prendas mojadas y evita transferir humedad, olores o suciedad al equipo limpio; debe distinguirse claramente del liner impermeable principal.",
      "Utiliza una bolsa resistente y reutilízala mientras esté íntegra; no mezcles residuos con ropa y mantenla siempre separada del sleeping, comida y artículos de higiene."
    ],
    [
      "Camping con coche",
      "Refugio y montaje",
      "Tienda de campaña",
      "Esencial",
      "grupo",
      "Crear un refugio familiar habitable, dividido por zonas y cómodo para estancias de varios días.",
      "En car camping conviene una tienda familiar tipo túnel o cabin con dormitorios separados y un habitáculo central de altura completa —idealmente 1.90 m o más— donde sea posible permanecer de pie, cambiarse y colocar una mesa pequeña, sillas o equipo. Es preferible doble techo, piso tipo bañera o suelo integrado, ventilación alta y baja, mosquiteros y un porche o vestíbulo protegido para calzado y objetos húmedos.",
      "No elijas capacidad solo por número de plazas: para 4 personas suele resultar más funcional una configuración 4+ o 5–6 plazas con 2 dormitorios y sala central. Prioriza superficie habitable, altura, accesos independientes y un avance cubierto antes que peso o tamaño plegado."
    ],
    [
      "Camping con coche",
      "Refugio y montaje",
      "Estacas, vientos y mazo",
      "Esencial",
      "grupo",
      "Mantener estable una estructura familiar grande, que presenta mayor superficie expuesta al viento.",
      "Las tiendas familiares necesitan más puntos de anclaje que una tienda pequeña: estacas principales robustas, vientos completos y tensores regulables. En camping con coche pueden usarse estacas de acero de 20–30 cm para terreno duro, perfiles anchos para suelo blando y anclajes específicos para arena; los vientos reflectantes reducen tropiezos nocturnos.",
      "Lleva un juego mixto de estacas y varias de repuesto, un mazo de goma o cabeza plástica y utiliza todos los puntos estructurales cuando exista previsión de viento. Tensa primero el perímetro, después arcos o postes y finalmente vientos; no sobre-tenses el tejido y revisa nuevamente después de lluvia o cambios térmicos."
    ],
    [
      "Camping con coche",
      "Refugio y montaje",
      "Protector de suelo",
      "Según la salida",
      "grupo",
      "Proteger el piso de la tienda contra abrasión, humedad, lodo y perforaciones, y mejorar la limpieza del área habitable.",
      "En camping familiar conviene diferenciar entre footprint exterior y piso interior de confort. El footprint debe ser de polietileno, PVC ligero o tejido Oxford recubierto, resistente a abrasión y completamente impermeable; debe quedar 5–10 cm dentro del perímetro de la tienda para evitar que capte lluvia. En vestíbulos o salas centrales puede añadirse una alfombra de camping transpirable que reduzca polvo y permita drenar humedad.",
      "Usa un footprint recortado específicamente a la geometría de la tienda y nunca dejes plástico sobresaliendo. En estancias largas, combina footprint bajo la tienda con una alfombra transpirable en el porche o habitáculo; evita lonas totalmente impermeables sobre césped durante varios días porque retienen humedad y deterioran el terreno."
    ],
    [
      "Camping con coche",
      "Refugio y montaje",
      "Toldo o sombra",
      "Según la salida",
      "grupo",
      "Crear una zona exterior protegida para comedor, cocina auxiliar, descanso y actividades familiares.",
      "Para car camping resulta más funcional un tarp o canopy independiente de 3 × 3 m como mínimo, o 3 × 4.5 m para una familia de cuatro. Prioriza poliéster u Oxford con recubrimiento PU, protección UV UPF 50+, costuras selladas si también se usará con lluvia y postes robustos de acero o aluminio. Un toldo con faldón lateral desmontable mejora notablemente la protección frente a sol bajo, viento y lluvia lateral.",
      "Monta la sombra como estructura independiente y ligeramente separada de la tienda para no transmitir cargas de viento. Da pendiente suficiente para evacuar agua, utiliza todos los vientos y anclajes y desmonta el toldo ante viento fuerte; no cocines con llama abierta pegado al tejido ni debajo de un techo bajo sin ventilación adecuada."
    ],
    [
      "Camping con coche",
      "Sistema de descanso",
      "Saco de dormir o ropa de cama",
      "Esencial",
      "persona",
      "Proporcionar aislamiento y confort térmico durante la noche de acuerdo con el clima y la forma de dormir de cada integrante.",
      "En camping con coche puede utilizarse saco individual o ropa de cama convencional. El saco debe seleccionarse por temperatura de confort, no por temperatura extrema; los modelos rectangulares ofrecen mayor libertad de movimiento y los tipo momia conservan mejor el calor. Con ropa de cama pueden combinarse sábana, cobertor y edredón según la temperatura nocturna.",
      "Prioriza comodidad sobre peso y utiliza un sistema de abrigo regulable por capas; mantén siempre una manta o prenda térmica adicional completamente seca como respaldo."
    ],
    [
      "Camping con coche",
      "Sistema de descanso",
      "Colchón, catre o aislante",
      "Esencial",
      "persona",
      "Aislar el cuerpo del suelo y proporcionar una superficie estable y cómoda para dormir durante varias noches.",
      "El colchón inflable alto ofrece gran confort pero poco aislamiento térmico; el catre separa del suelo y facilita incorporarse, mientras que las colchonetas de espuma o autoinflables aportan aislamiento medido mediante valor R. En frío puede combinarse colchón o catre con un aislante térmico.",
      "Verifica dimensiones interiores de la tienda y capacidad de carga antes de elegir. Para estancias familiares prioriza colchones de 15–30 cm o catres robustos y añade aislamiento específico cuando las temperaturas nocturnas sean bajas."
    ],
    [
      "Camping con coche",
      "Sistema de descanso",
      "Almohada",
      "Confort",
      "persona",
      "Mantener una posición cervical adecuada y mejorar significativamente la calidad del descanso.",
      "En camping con coche no existe necesidad de utilizar almohadas ultraligeras; pueden emplearse modelos domésticos compactos, de espuma comprimible o inflables. La altura debe corresponder a la postura habitual de sueño y al nivel de firmeza del colchón.",
      "Si el espacio del vehículo lo permite, utiliza una almohada real o de espuma en lugar de ropa enrollada; protégela con funda y transpórtala siempre seca y separada del equipo húmedo."
    ],
    [
      "Camping con coche",
      "Sistema de descanso",
      "Inflador y reparación del colchón",
      "Según la salida",
      "grupo",
      "Inflar rápidamente el colchón y disponer de capacidad para solucionar pequeñas fugas durante el campamento.",
      "Un inflador eléctrico de 12 V, USB-C o batería interna resulta especialmente práctico en car camping; debe incluir boquillas compatibles con las válvulas utilizadas. El kit de reparación debe corresponder al material del colchón —PVC, TPU u otro— e incluir los parches y adhesivos especificados por el fabricante.",
      "Prueba colchón, válvulas e inflador antes del viaje; lleva la fuente de alimentación correspondiente y guarda el kit de reparación junto al colchón. Antes de colocar un parche localiza y limpia correctamente la fuga y respeta el tiempo de curado del adhesivo."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Maleta, bolsa o mochila para ropa",
      "Esencial",
      "persona",
      "Transportar y organizar la ropa familiar sin convertir la tienda en un espacio desordenado.",
      "En camping con coche funcionan mejor bolsas de viaje, duffels o cajas textiles semirrígidas que mochilas técnicas grandes; permiten abrir completamente el contenido y separar ropa limpia, usada y húmeda. Los materiales resistentes a abrasión y con cierta protección frente a humedad soportan mejor el uso continuo en campamento.",
      "Asigna una bolsa por persona, usa organizadores internos por tipo de prenda y mantén la ropa de dormir y una muda seca en un compartimento protegido. Evita dejar maletas abiertas sobre el piso de la tienda durante toda la estancia."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Mochila de ataque o senderismo",
      "Según la salida",
      "persona",
      "Llevar agua, protección climática, comida y equipo esencial durante caminatas alejadas del campamento base.",
      "Para senderismo familiar conviene una mochila de 15–30 L con respaldo ventilado, tirantes anatómicos, cinturón y bolsillos accesibles. Debe dimensionarse según duración, clima y autonomía; no necesita transportar el equipo completo del campamento.",
      "Ajusta primero cinturón y después tirantes, distribuye el peso próximo a la espalda y lleva siempre agua, impermeable, capa térmica, protección solar, navegación, iluminación y elementos básicos de emergencia."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Ropa por capas y abrigo",
      "Esencial",
      "persona",
      "Regular temperatura y humedad corporal durante cambios de actividad y clima.",
      "El sistema técnico combina primera capa de poliéster, polipropileno o lana merino para gestionar humedad; segunda capa de fleece, polar o aislamiento sintético para conservar calor; y una capa exterior contra viento y precipitación. El algodón pierde capacidad térmica cuando se moja y seca lentamente.",
      "Ajusta las capas antes de sudar o enfriarte: retira aislamiento durante esfuerzo intenso y vuelve a colocarlo al detenerte. Conserva siempre una muda seca y una capa de abrigo exclusiva para campamento o noche."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Impermeable",
      "Esencial",
      "persona",
      "Mantener cuerpo y capas interiores secos frente a lluvia y viento.",
      "Un impermeable técnico debe combinar membrana o recubrimiento impermeable-transpirable, costuras selladas, capucha ajustable y ventilación suficiente. Membranas como Gore-Tex, eVent o equivalentes ofrecen mejor gestión de humedad que ponchos o plásticos simples, aunque requieren mantenimiento del acabado repelente exterior.",
      "Lleva chaqueta y pantalón impermeables cuando exista lluvia sostenida prevista; colócalos antes de empaparte y no confundas resistencia al agua con impermeabilidad real. Revisa costuras, cierres y tratamiento DWR periódicamente."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Calzado y calcetines de repuesto",
      "Esencial",
      "persona",
      "Mantener pies secos, estables y sin lesiones durante actividades y cambios de clima.",
      "El calzado principal debe corresponder al terreno: sendero ligero, trekking o superficie húmeda. Un segundo par seco resulta especialmente útil en car camping. Los calcetines técnicos de merino o fibras sintéticas evacuan mejor la humedad que algodón y reducen fricción prolongada.",
      "Lleva al menos un par adicional de calcetines secos por jornada exigente y reserva otro exclusivamente para dormir. Alterna el calzado cuando se moje y deja secar plantillas y zapatos en una zona ventilada, nunca junto a una llama."
    ],
    [
      "Camping con coche",
      "Ropa y calzado",
      "Sombrero y protección solar",
      "Esencial",
      "persona",
      "Reducir exposición solar, acumulación térmica y riesgo de quemadura durante actividades prolongadas.",
      "Un sombrero de ala ancha protege mejor cara, orejas y cuello que una gorra convencional; complementa con ropa de manga larga y protector solar de amplio espectro SPF 30 o superior. En alta radiación, tejidos con clasificación UPF 30–50+ ofrecen protección más consistente que telas delgadas comunes.",
      "Aplica protector antes de la exposición y reaplica según etiqueta, sudoración y contacto con agua. Para caminatas largas prioriza sombrero ventilado, lentes con protección UV y prendas UPF antes que depender únicamente del bloqueador."
    ],
    [
      "Camping con coche",
      "Agua y alimentación",
      "Agua y recipientes",
      "Esencial",
      "grupo",
      "Garantizar disponibilidad suficiente de agua para beber, cocinar y realizar higiene básica durante toda la estancia.",
      "En camping con coche conviene separar agua potable de agua de servicio. Utiliza garrafones, bidones o jerry cans de grado alimentario, preferentemente con tapa hermética y grifo, y dimensiona la reserva según personas, clima, duración y posibilidad real de reabastecimiento.",
      "Mantén al menos un recipiente exclusivo para beber y cocinar, protegido del sol y claramente identificado; distribuye la reserva en más de un envase para no depender de un único contenedor en caso de fuga o contaminación."
    ],
    [
      "Camping con coche",
      "Agua y alimentación",
      "Sistema de tratamiento de agua",
      "Según la salida",
      "grupo",
      "Disponer de una alternativa segura cuando la fuente disponible no sea potable o exista duda sobre su calidad.",
      "Los sistemas portátiles incluyen filtros de fibra hueca o cerámica para remover partículas y microorganismos, purificadores capaces de ampliar protección microbiológica y métodos químicos o térmicos como respaldo. Ningún filtro básico elimina necesariamente virus, sales disueltas o contaminantes químicos.",
      "Selecciona el tratamiento según la fuente y riesgo previsto; combina filtración y desinfección cuando corresponda y lleva un método de respaldo. No utilices agua superficial sin tratamiento únicamente porque se vea limpia."
    ],
    [
      "Camping con coche",
      "Agua y alimentación",
      "Alimentos y menú",
      "Esencial",
      "grupo",
      "Organizar comidas completas, prácticas y seguras para una familia durante varios días.",
      "El menú debe planearse por día y comida considerando número de personas, requerimientos energéticos, alergias, tiempo de preparación, almacenamiento y cadena de frío. En car camping pueden incorporarse alimentos frescos, pero los perecederos deben consumirse en función de su estabilidad y capacidad de refrigeración.",
      "Prepara un menú escrito y una lista de compras por raciones; agrupa ingredientes por comida y día para reducir aperturas innecesarias de la hielera. Prioriza recetas conocidas, de preparación sencilla y con pocos utensilios cuando el programa incluya muchas actividades."
    ],
    [
      "Camping con coche",
      "Agua y alimentación",
      "Hielera o nevera y acumuladores de frío",
      "Según la salida",
      "grupo",
      "Mantener alimentos perecederos a temperatura segura y conservar hielo durante el campamento.",
      "Una hielera rígida de buen aislamiento es adecuada para viajes cortos; para estancias largas puede justificarse una nevera de compresor de 12 V. Los acumuladores reutilizables reducen agua de deshielo y funcionan mejor cuando alimentos y bebidas entran previamente refrigerados.",
      "Preenfría la hielera, coloca los alimentos más sensibles en la zona más fría y limita aperturas. Separa, si es posible, bebidas de alimentos para reducir pérdidas térmicas y utiliza un termómetro interno para verificar que los perecederos permanezcan a 4 °C o menos."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Estufa de camping",
      "Según la salida",
      "grupo",
      "Cocinar de forma estable, eficiente y segura para varias personas durante estancias de varios días.",
      "En camping con coche conviene una estufa de dos quemadores con potencia regulable, base estable y superficie suficiente para utilizar simultáneamente una olla y un sartén. Los modelos a propano o butano-propano ofrecen mayor autonomía que los sistemas ultraligeros y facilitan cocinar para una familia.",
      "Elige un equipo con encendido fiable, control independiente por quemador y protección razonable contra viento; colócalo siempre sobre una superficie firme, nivelada y ventilada, nunca dentro de la tienda ni junto a materiales combustibles."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Combustible compatible",
      "Según la salida",
      "grupo",
      "Alimentar la estufa con el combustible y sistema de conexión especificados por el fabricante.",
      "Cartuchos, cilindros, reguladores, mangueras y conexiones deben corresponder exactamente al sistema de la estufa; no todos los recipientes de gas son intercambiables. En car camping puede utilizarse un cilindro de mayor capacidad cuando el equipo esté diseñado para ello.",
      "Calcula combustible según duración, número de comidas y temperatura prevista, transporta los cilindros verticales y protegidos del calor, y revisa conexiones, mangueras y regulador antes de cada salida; no improvises adaptadores."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Ollas y utensilios",
      "Según la salida",
      "grupo",
      "Preparar, cocinar y servir alimentos con un sistema completo y adecuado al tamaño familiar.",
      "El núcleo debe incluir al menos una olla grande con tapa, una olla mediana y un sartén de diámetro suficiente para cocinar varias porciones, además de cuchillo, tabla, espátula, cucharón, pinzas, abrelatas y utensilios de servicio. Acero inoxidable y aluminio anodizado son opciones durables; un sartén antiadherente facilita cocinar con menos aceite y limpiar rápidamente.",
      "Dimensiona ollas y sartén según el número de personas y el diámetro real de los quemadores; evita juegos excesivos de piezas y prioriza utensilios que puedan cumplir varias funciones. Lleva tapas compatibles porque reducen tiempo de cocción y consumo de combustible."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Plato, taza y cubiertos",
      "Esencial",
      "persona",
      "Disponer de vajilla individual resistente, reutilizable y fácil de limpiar.",
      "Plato profundo o tazón, taza y cubiertos reutilizables funcionan mejor que vajillas desechables. Acero inoxidable, polipropileno alimentario o melamina de buena calidad ofrecen alta resistencia para uso familiar repetido.",
      "Asigna e identifica un juego por persona y evita transportar vajilla frágil. Un tazón profundo puede sustituir plato plano en muchas comidas y simplifica almacenamiento y lavado."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Kit de lavado",
      "Esencial",
      "grupo",
      "Mantener utensilios y vajilla higiénicos sin contaminar el entorno.",
      "Un sistema funcional incluye recipiente o tina para lavado, detergente biodegradable, esponja o cepillo, paños de secado y un método para recolectar restos de comida antes de desechar el agua. En campamentos largos resulta útil separar lavado, enjuague y secado.",
      "Retira primero restos sólidos, usa poca cantidad de detergente y realiza el lavado lejos de ríos, lagos o manantiales. Mantén utensilios limpios separados de los usados y deja secar completamente antes de guardarlos."
    ],
    [
      "Camping con coche",
      "Cocina",
      "Estacion de cocina ",
      "Esencial",
      "grupo",
      "Crear una zona de trabajo organizada, estable y ergonómica para preparar alimentos y operar la estufa.",
      "Una estación de cocina puede integrar mesa resistente, superficie de preparación, estufa, almacenamiento de utensilios, despensa seca y espacio para agua. En car camping son útiles mesas plegables con altura de trabajo aproximada a una cubierta doméstica y módulos cerrados que protejan alimentos de polvo y animales.",
      "Separa físicamente la zona caliente de la preparación y del paso de niños; coloca estufa y combustible en el extremo más ventilado, conserva cuchillos y encendedores fuera del alcance infantil y evita cocinar dentro de la tienda o bajo toldos bajos."
    ],
    [
      "Camping con coche",
      "Orientación y comunicación",
      "Ruta, mapas y reserva",
      "Esencial",
      "grupo",
      "Planear el desplazamiento, localizar el campamento y contar con alternativas ante cierres, desvíos o falta de señal.",
      "Antes de salir conviene llevar dirección exacta, ruta principal, rutas alternativas, mapa descargado para uso sin conexión, coordenadas del campamento y comprobante de reservación. En áreas rurales también es útil identificar gasolineras, poblaciones, hospitales y puntos de abastecimiento cercanos.",
      "Descarga mapas offline antes del viaje y guarda una captura o copia de la reservación y coordenadas. No dependas exclusivamente de una aplicación con conexión móvil y comparte el itinerario con una persona que no participe en el viaje."
    ],
    [
      "Camping con coche",
      "Orientación y comunicación",
      "Teléfono, cargadores y batería",
      "Esencial",
      "grupo",
      "Mantener comunicación, navegación y energía para teléfonos y otros equipos electrónicos esenciales.",
      "El sistema puede incluir teléfono principal, cables USB-C o Lightning según los dispositivos, cargador de automóvil de 12 V, cargador de pared cuando exista electricidad y una power bank de capacidad suficiente. Para estancias largas puede justificarse una estación de energía portátil si se utilizan iluminación, refrigeración o varios dispositivos.",
      "Carga todo antes de salir, lleva cables duplicados para los dispositivos críticos y reserva parte de la batería exclusivamente para comunicación y navegación. Mantén power banks y teléfonos protegidos del calor directo y no dejes baterías de litio dentro de un vehículo cerrado al sol."
    ],
    [
      "Camping con coche",
      "Iluminación",
      "Linterna frontal",
      "Esencial",
      "persona",
      "Proporcionar iluminación personal manos libres para desplazamientos, tareas nocturnas y emergencias.",
      "La linterna frontal debe ofrecer varios niveles de intensidad, buena autonomía y resistencia a lluvia o salpicaduras; para uso familiar es preferible una interfaz simple, haz amplio para proximidad y modo rojo o bajo para evitar deslumbrar dentro del campamento.",
      "Asigna una frontal por persona, revisa baterías antes de salir y guarda una fuente de energía compatible de repuesto. Evita usar máxima potencia de forma continua dentro del campamento para conservar autonomía y no molestar a otros."
    ],
    [
      "Camping con coche",
      "Iluminación",
      "laparas de campamento",
      "Confort",
      "grupo",
      "Iluminar de manera uniforme las zonas comunes del campamento y mejorar orientación y confort nocturno.",
      "Conviene combinar una lámpara principal de campamento con tiras LED decorativas enrollables de bajo consumo. La lámpara debe ofrecer luz difusa de 360°, regulación de intensidad y base o gancho estable; las tiras LED funcionan bien bajo toldo, en el perímetro del comedor o dentro del habitáculo, preferentemente con alimentación USB o batería recargable y protección frente a humedad.",
      "Usa luz cálida y regulable en áreas de convivencia, instala las tiras LED sin obstaculizar pasos ni salidas y evita tensarlas sobre zonas de cocina o superficies calientes. Lleva conectores, power bank o fuente USB compatible y enrolla completamente las tiras antes de transportarlas para evitar daños en cableado y LEDs."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Carpa de baño o privacidad",
      "Según la salida",
      "grupo",
      "Crear un espacio privado, ventilado y funcional para uso sanitario o cambio de ropa dentro del campamento.",
      "Una carpa de baño debe ofrecer altura suficiente para permanecer de pie, ventilación superior, acceso amplio y estructura estable. Para uso con inodoro es preferible un modelo sin piso fijo o con piso removible, que facilite limpieza y evite retener líquidos en caso de derrame.",
      "Instálala en terreno nivelado, alejada de cocina y comedor, pero suficientemente accesible durante la noche. Añade iluminación tenue, un gancho para ropa o toalla y asegura correctamente la estructura con estacas y vientos."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Inodoro o excusado portátil",
      "Según la salida",
      "grupo",
      "Proporcionar una solución sanitaria cómoda cuando el sitio no cuenta con baños.",
      "Los sistemas más prácticos para car camping son el inodoro plegable con bolsa sanitaria o el sanitario químico portátil de depósito. Los modelos de cassette o depósito sellado ofrecen mayor comodidad y control de olores, pero requieren productos compatibles y un punto autorizado de vaciado.",
      "Elige una altura de asiento cómoda y capacidad acorde con el número de personas y días. Colócalo sobre una superficie estable y nunca vacíes residuos directamente en suelo, drenajes pluviales, cuerpos de agua o letrinas no autorizadas."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Bolsas sanitarias o insumos del inodoro",
      "Según la salida",
      "grupo",
      "Contener excretas y controlar olores de forma higiénica dentro de sistemas portátiles.",
      "Los inodoros con bolsa requieren liners resistentes y absorbentes o gelificantes diseñados para residuos humanos; los sanitarios químicos utilizan aditivos específicos para el depósito de residuos y, según el modelo, para el tanque de descarga. No todos los productos son compatibles con fosas sépticas o plantas de tratamiento.",
      "Utiliza únicamente insumos recomendados por el fabricante, lleva unidades suficientes más un margen de reserva y almacénalos separados de alimentos. Evita improvisar con bolsas domésticas delgadas o químicos no diseñados para sanitarios portátiles."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Contención y transporte de residuos sanitarios",
      "Según la salida",
      "grupo",
      "Evitar fugas, contaminación y exposición durante el traslado de residuos sanitarios hasta un punto autorizado.",
      "Los residuos deben permanecer en un sistema primario cerrado y, cuando sea posible, dentro de una segunda contención estanca y lavable. En sistemas de bolsa, el cierre debe ser seguro; en sanitarios de depósito, válvulas y tapones deben quedar completamente bloqueados antes de transportar.",
      "Reserva un contenedor rígido exclusivamente para residuos sanitarios y mantenlo separado de agua, alimentos y equipo de cocina. Identifica previamente estaciones de descarga o instalaciones autorizadas y nunca abandones bolsas sanitarias en el área de campamento."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Estación de lavado de manos",
      "Según la salida",
      "grupo",
      "Permitir una higiene de manos inmediata después del uso del baño y antes de manipular alimentos.",
      "Una estación funcional incluye depósito de agua con grifo, jabón, sistema de secado y recipiente para captar el agua usada. El gel hidroalcohólico puede complementar, pero no sustituye el lavado cuando las manos presentan suciedad visible.",
      "Coloca la estación junto a la zona sanitaria sin contaminar el acceso y asegúrate de que pueda operarse con una sola mano o mediante grifo. Mantén jabón disponible, repón agua diariamente y separa claramente el agua limpia de la residual."
    ],
    [
      "Camping con coche",
      "Baño portátil y desechos",
      "Recipiente para aguas de lavado",
      "Según la salida",
      "grupo",
      "Recolectar aguas grises de lavado para evitar encharcamientos y contaminación alrededor del campamento.",
      "Un recipiente cerrado o cubeta dedicada permite contener agua procedente de manos, vajilla o aseo hasta darle la disposición permitida en el sitio. Las aguas grises pueden contener grasa, detergentes, restos de comida y microorganismos, por lo que no deben verterse indiscriminadamente aunque se utilice jabón biodegradable.",
      "Usa un recipiente de boca amplia o depósito con tapa, filtra primero restos sólidos cuando procedan de la cocina y vacía únicamente en el punto designado por el camping o conforme a la normativa local. Mantén este recipiente claramente diferenciado de cualquier contenedor de agua potable."
    ],
    [
      "Camping con coche",
      "Salud e higiene",
      "Botiquín y medicamentos personales",
      "Esencial",
      "grupo",
      "Responder a lesiones menores, malestares habituales y necesidades médicas individuales durante el campamento.",
      "El botiquín familiar debe incluir material básico para curación, guantes, antiséptico, vendas, apósitos, tijeras, pinzas y los medicamentos personales prescritos para cada integrante. Los fármacos deben conservarse en su envase original, correctamente identificados y protegidos de calor, humedad y acceso infantil.",
      "Revisa fechas de caducidad antes de cada salida, separa medicamentos personales del botiquín general y lleva únicamente aquellos cuyo uso y dosis ya estén claramente indicados para cada miembro de la familia."
    ],
    [
      "Camping con coche",
      "Salud e higiene",
      "Aseo personal y papel higiénico",
      "Esencial",
      "persona",
      "Mantener higiene corporal y disponer de consumibles sanitarios suficientes durante toda la estancia.",
      "El kit debe contemplar jabón, cepillo y pasta dental, toalla, artículos personales y papel higiénico protegido de humedad. En lugares sin infraestructura sanitaria, el manejo del papel y otros residuos debe ajustarse a las reglas específicas del sitio.",
      "Organiza los artículos por persona o función en bolsas impermeables y lleva una reserva razonable de papel higiénico. No dejes productos de aseo directamente sobre el suelo ni cerca de alimentos o utensilios de cocina."
    ],
    [
      "Camping con coche",
      "Salud e higiene",
      "Repelente de insectos",
      "Según la salida",
      "grupo",
      "Reducir el riesgo de picaduras durante actividades al aire libre y horas de mayor presencia de insectos.",
      "Los repelentes con ingredientes activos como DEET o picaridina ofrecen protección eficaz cuando se utilizan conforme a la etiqueta; deben complementarse con ropa de manga larga, mosquiteros y reducción de piel expuesta cuando las condiciones lo permitan.",
      "Aplica el producto únicamente en piel expuesta y ropa según indicaciones, evita ojos, boca y manos de niños pequeños, y reaplica conforme al tiempo de protección indicado por el fabricante."
    ],
    [
      "Camping con coche",
      "Salud e higiene",
      "Bolsas y gestión de residuos",
      "Esencial",
      "grupo",
      "Mantener el campamento limpio, evitar fauna atraída por residuos y retirar correctamente los desechos generados.",
      "Conviene separar residuos generales, reciclables, orgánicos y sanitarios cuando exista infraestructura para su disposición diferenciada. Utiliza bolsas resistentes y recipientes con tapa para comida o basura que puedan atraer animales.",
      "Instala un punto de residuos alejado de la zona de descanso y cocina, vacíalo con frecuencia y transporta fuera del sitio todo residuo que el camping no reciba; no quemes plástico, envases ni residuos sanitarios."
    ],
    [
      "Camping con coche",
      "Reparación y herramientas",
      "Kit de reparación",
      "Esencial",
      "grupo",
      "Resolver fallas menores del equipo sin interrumpir el campamento ni dejar inutilizable la tienda, mobiliario o sistema de descanso.",
      "Un kit familiar debe cubrir reparaciones frecuentes de tejido, varillas, colchones y herrajes: cinta de reparación resistente, parches compatibles con nylon/poliéster/PVC/TPU, adhesivo apropiado, manguito para varilla, cordino, bridas, hebillas de repuesto, aguja e hilo fuerte y algunas piezas específicas del equipo principal.",
      "Arma el kit según tu equipo real y no como una colección genérica; revisa antes del viaje qué materiales usa la tienda y el colchón, guarda cada adhesivo cerrado y añade repuestos críticos que no puedan conseguirse fácilmente en destino."
    ],
    [
      "Camping con coche",
      "Reparación y herramientas",
      "Herramienta multiusos",
      "Según la salida",
      "grupo",
      "Realizar ajustes, cortes y reparaciones mecánicas básicas durante el montaje y uso del campamento.",
      "Una multiherramienta útil para car camping debería integrar al menos pinzas, cuchilla, destornilladores plano y Phillips, abrelatas y cortadores; modelos con puntas intercambiables amplían compatibilidad con mobiliario, estufas y accesorios. No sustituye herramientas específicas para reparaciones de fuerza o mantenimiento del vehículo.",
      "Selecciona una herramienta robusta y de tamaño completo si el peso no es limitante, mantenla limpia y seca y guárdala en un punto conocido por los adultos. Complementa con la herramienta específica que exija tu equipo —por ejemplo llave ajustable o destornilladores dedicados— en lugar de forzar la multiherramienta fuera de su capacidad."
    ],
    [
      "Camping con coche",
      "Organización y convivencia",
      "Sillas y mesa",
      "Confort",
      "grupo",
      "Crear una zona cómoda y funcional para comer, convivir y realizar actividades sin depender del mobiliario del sitio.",
      "En camping con coche conviene una mesa plegable estable, de altura suficiente para comer o preparar actividades, y sillas con respaldo firme, estructura de acero o aluminio y capacidad de carga adecuada. Para estancias largas, la comodidad y estabilidad importan más que el peso.",
      "Prioriza una mesa que no flexione al apoyar utensilios o alimentos y sillas que puedan utilizarse durante periodos prolongados; distribuye el mobiliario sin bloquear accesos, vientos de la tienda ni zonas de circulación."
    ],
    [
      "Camping con coche",
      "Organización y convivencia",
      "Cajas y bolsas organizadoras",
      "Confort",
      "grupo",
      "Mantener el equipo visible, clasificado y rápidamente accesible durante todo el campamento.",
      "Las cajas rígidas apilables con tapa transparente son especialmente prácticas en car camping porque permiten identificar el contenido sin abrirlas, protegen de polvo y humedad moderada y funcionan como módulos por sistema: cocina, despensa seca, iluminación, higiene, herramientas o actividades. Las bolsas organizadoras son mejores para ropa y artículos blandos.",
      "Utiliza cajas del mismo formato para facilitar apilado, coloca lo más pesado abajo y etiqueta frente y tapa aunque sean transparentes. Evita llenar cada caja al máximo: deja margen para manipular el contenido y mantén una caja de acceso rápido con los artículos que se utilizan varias veces al día."
    ],
    [
      "Camping con coche",
      "Organización y convivencia",
      "Juegos y actividades",
      "Confort",
      "grupo",
      "Facilitar convivencia, entretenimiento y actividades familiares durante tiempos libres o condiciones meteorológicas adversas.",
      "Conviene combinar actividades exteriores y de mesa: cartas, juegos compactos, frisbee, pelota, material de dibujo o lectura. En estancias de varios días resulta útil disponer de opciones que puedan realizarse bajo el toldo cuando llueve o hace demasiado sol.",
      "Selecciona pocos juegos versátiles y adecuados a las edades del grupo, guárdalos juntos en una caja transparente específica y evita llevar material con muchas piezas pequeñas si resulta difícil recuperarlas en terreno natural."
    ]
  ],
  "videos": [
    [],
    [],
    [],
    [],
    [
      "coche",
      "rPBMD8Nfabs",
      "¿Arpenaz Family 4.1 F&B o Instant Tent 8P?",
      "Comparativa de tienda familiar",
      "Video de YouTube"
    ],
    [
      "Mochilero o Backpacking",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Sistema de descanso",
      "Video de YouTube"
    ],
    [
      "Mochilero o Backpacking",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Reparación en ruta",
      "Video de YouTube"
    ],
    [
      "Mochilero o Backpacking",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Protección frente a lluvia",
      "Video de YouTube"
    ],
    [],
    [],
    [
      "Bushcraft",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Protección de equipo",
      "Video de YouTube"
    ],
    [
      "Acampada ultraligera",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Sistema de sueño ligero",
      "Video de YouTube"
    ],
    [
      "Acampada ultraligera",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Kit de reparación",
      "Video de YouTube"
    ],
    [
      "Acampada ultraligera",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Refugio ante lluvia",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Tropa",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Sistema de descanso",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Tropa",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Mantenimiento de tiendas",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Tropa",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Cuidado del refugio",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Manada",
      "search:mochila",
      "Armado de mochila para Manada y Tropa",
      "Buscar en nuestro canal",
      "Búsqueda en canal"
    ],
    [
      "Campamento Scout · Manada",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Sistema de descanso",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Manada",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Cuidado de la tienda",
      "Video de YouTube"
    ],
    [
      "Campamento Scout · Manada",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Protección ante lluvia",
      "Video de YouTube"
    ],
    [
      "Técnicas de campismo",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Mantenimiento del refugio",
      "Video de YouTube"
    ],
    [
      "Técnicas de campismo",
      "lkyYT_IhsDk",
      "Sellador de pintura vs. impermeabilizante para tiendas de campaña",
      "Decisión de mantenimiento",
      "Video de YouTube"
    ],
    [
      "Técnicas de campismo",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Reparación del refugio",
      "Video de YouTube"
    ],
    [
      "Técnicas de campismo",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Sistema de descanso",
      "Video de YouTube"
    ],
    [
      "Review de equipo",
      "rPBMD8Nfabs",
      "¿Arpenaz Family 4.1 F&B o Instant Tent 8P?",
      "Comparativa de tienda familiar",
      "Video de YouTube"
    ],
    [
      "Review de equipo",
      "CIrwbFW72fk",
      "Cómo elegir tu sleeping bag o bolsa de dormir",
      "Selección de sistema de descanso",
      "Video de YouTube"
    ],
    [
      "Review de equipo",
      "klq_hwdJd4c",
      "Reimpermeabiliza tu tienda de campaña",
      "Cuidado de tienda",
      "Video de YouTube"
    ],
    [
      "Review de equipo",
      "lkyYT_IhsDk",
      "Sellador de pintura vs. impermeabilizante para tiendas de campaña",
      "Comparación de tratamientos",
      "Video de YouTube"
    ],
    [
      "Review de equipo",
      "JdF0FJ0bi0s",
      "Reparación de postes de tienda o casa de campaña",
      "Vida útil y reparación",
      "Video de YouTube"
    ]
  ]
};

