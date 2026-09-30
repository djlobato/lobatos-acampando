/* Experiencia unificada de Mochilero o Backpacking.
   Los videos publicados se limitan a los clasificados expresamente para esta modalidad.
   “Forclaz Trek 100” queda sin asignar hasta confirmar qué artículo explica. */

const BACKPACKING_VIDEO_LIBRARY = {
  sleepingKids: ['4s7kJTia7Y4', 'Bolsa de dormir infantil de verano', 'Video publicado'],
  backpackSkala: ['NT6muu9--74', 'Mochila SKALA 40 L', 'Video publicado'],
  bottle: ['Zfd6RlcPW8U', 'Botella Nalgene: hidratación en ruta', 'Video publicado'],
  sleepingStore: ['YXQddwtFLk0', 'Cómo guardar y transportar tu sleeping bag técnico', 'Video publicado'],
  sleepingExtend: ['Es82QAg1gys', 'Extiende el rango térmico de tu bolsa de dormir', 'Video publicado'],
  backpackLoad: ['vIJZS9yTE3g', '¿Qué llevar en una mochila para el monte?', 'Video publicado'],
  backpackWaterproof: ['544RfjLz0Qg', 'Restaura la impermeabilidad de tu mochila', 'Video publicado']
};

const BACKPACKING_PLANNED_VIDEOS = {
  packFit: [null, 'Ajuste de torso, cinturón y carga de una mochila de travesía', 'Próximamente'],
  trekkingPoles: [null, 'Cómo ajustar y usar bastones en subida y bajada', 'Próximamente'],
  daypack: [null, 'Mochila de ataque desde un campamento base', 'Próximamente'],
  shelter: [null, 'Cómo elegir y montar un refugio ligero', 'Próximamente'],
  sleepingPad: [null, 'Valor R y elección de colchoneta para ruta', 'Próximamente'],
  fieldRepair: [null, 'Reparación de refugio y colchoneta en ruta', 'Próximamente'],
  layers: [null, 'Sistema de capas para caminar y descansar', 'Próximamente'],
  rain: [null, 'Rompeviento e impermeable: cuándo usar cada uno', 'Próximamente'],
  footwear: [null, 'Calzado, calcetines y prevención de ampollas', 'Próximamente'],
  sun: [null, 'Protección solar para rutas largas', 'Próximamente'],
  waterPlan: [null, 'Cómo calcular agua entre fuentes', 'Próximamente'],
  treatment: [null, 'Filtro, químicos y respaldo para tratar agua', 'Próximamente'],
  food: [null, 'Raciones y colaciones para una travesía', 'Próximamente'],
  stove: [null, 'Estufa, combustible y cocina segura en ruta', 'Próximamente'],
  cookware: [null, 'Olla y utensilios: un sistema sin piezas de más', 'Próximamente'],
  wildlife: [null, 'Cómo proteger comida y artículos con olor', 'Próximamente'],
  map: [null, 'Mapa, brújula y decisiones en cruces', 'Próximamente'],
  offline: [null, 'Preparar mapas sin conexión y ahorrar batería', 'Próximamente'],
  power: [null, 'Calcular energía para varios días de ruta', 'Próximamente'],
  headlamp: [null, 'Linterna frontal y energía de respaldo', 'Próximamente'],
  firstAid: [null, 'Botiquín de ruta y cuidado de los pies', 'Próximamente'],
  emergency: [null, 'Silbato y refugio de emergencia: dónde llevarlos', 'Próximamente'],
  hygiene: [null, 'Higiene y lavado de manos sin contaminar fuentes', 'Próximamente'],
  waste: [null, 'Residuos y baño en ruta según las reglas del lugar', 'Próximamente'],
  permits: [null, 'Permisos, reservas e identificación protegida', 'Próximamente'],
  itinerary: [null, 'Cómo preparar y compartir un itinerario de emergencia', 'Próximamente']
};

const BACKPACKING_ITEM_VIDEOS = {
  'bp-mochila': [BACKPACKING_VIDEO_LIBRARY.backpackSkala, BACKPACKING_VIDEO_LIBRARY.backpackLoad, BACKPACKING_VIDEO_LIBRARY.backpackWaterproof, BACKPACKING_PLANNED_VIDEOS.packFit],
  'bp-liner': [BACKPACKING_VIDEO_LIBRARY.backpackWaterproof],
  'bp-bastones': [BACKPACKING_PLANNED_VIDEOS.trekkingPoles],
  'bp-dia': [BACKPACKING_VIDEO_LIBRARY.backpackLoad, BACKPACKING_PLANNED_VIDEOS.daypack],
  'bp-tienda': [BACKPACKING_PLANNED_VIDEOS.shelter],
  'bp-saco': [BACKPACKING_VIDEO_LIBRARY.sleepingKids, BACKPACKING_VIDEO_LIBRARY.sleepingStore, BACKPACKING_VIDEO_LIBRARY.sleepingExtend],
  'bp-aislante': [BACKPACKING_PLANNED_VIDEOS.sleepingPad],
  'bp-reparacion-refugio': [BACKPACKING_PLANNED_VIDEOS.fieldRepair],
  'bp-capas': [BACKPACKING_PLANNED_VIDEOS.layers],
  'bp-lluvia': [BACKPACKING_PLANNED_VIDEOS.rain],
  'bp-calzado': [BACKPACKING_PLANNED_VIDEOS.footwear],
  'bp-sol': [BACKPACKING_PLANNED_VIDEOS.sun],
  'bp-recipientes': [BACKPACKING_VIDEO_LIBRARY.bottle, BACKPACKING_PLANNED_VIDEOS.waterPlan],
  'bp-filtro': [BACKPACKING_PLANNED_VIDEOS.treatment],
  'bp-respaldo-agua': [BACKPACKING_PLANNED_VIDEOS.treatment],
  'bp-comida': [BACKPACKING_PLANNED_VIDEOS.food],
  'bp-estufa': [BACKPACKING_PLANNED_VIDEOS.stove],
  'bp-cocina': [BACKPACKING_PLANNED_VIDEOS.cookware],
  'bp-comida-fauna': [BACKPACKING_PLANNED_VIDEOS.wildlife],
  'bp-mapa': [BACKPACKING_PLANNED_VIDEOS.map],
  'bp-gps': [BACKPACKING_PLANNED_VIDEOS.offline],
  'bp-energia': [BACKPACKING_PLANNED_VIDEOS.power],
  'bp-frontal': [BACKPACKING_PLANNED_VIDEOS.headlamp],
  'bp-botiquin': [BACKPACKING_PLANNED_VIDEOS.firstAid],
  'bp-emergencia': [BACKPACKING_PLANNED_VIDEOS.emergency],
  'bp-higiene': [BACKPACKING_PLANNED_VIDEOS.hygiene],
  'bp-residuos': [BACKPACKING_PLANNED_VIDEOS.waste],
  'bp-permiso': [BACKPACKING_PLANNED_VIDEOS.permits],
  'bp-itinerario': [BACKPACKING_PLANNED_VIDEOS.itinerary]
};

const BACKPACKING_EXPERIENCE_GROUPS = [
  {
    id: 'mochila', number: '01', icon: '🎒', title: 'Mochila y transporte',
    summary: 'Ajusta el contenedor a la persona y organiza la carga para caminar con estabilidad durante toda la ruta.',
    decision: 'El volumen se elige después del equipo. Prueba ajuste, límite de carga y peso total con agua y comida antes de salir.',
    sections: [
      ['Volumen, torso y transferencia de carga', `<p>Una referencia frecuente para varios días es <strong>50–65 L</strong>, pero la cifra no sustituye una prueba con el equipo real. Confirma la longitud de torso indicada por el fabricante, coloca el cinturón sobre la cresta ilíaca y revisa que la estructura transfiera la mayor parte del peso a la cadera sin impedir respirar ni caminar.</p><p>Ajusta en este orden: cinturón, tirantes, estabilizadores superiores y correa de pecho. Camina, sube escalones y vuelve a regular. Si el cinturón resbala o todo el peso queda en los hombros, cambia el ajuste o el modelo.</p>`],
      ['Orden de carga y protección contra agua', `<p>Protege bolsa de dormir, ropa de noche y electrónicos dentro de un liner o bolsas independientes. Coloca objetos densos cerca de la espalda y a media altura; deja agua, impermeable, mapa, comida del tramo y emergencia accesibles.</p><p>Pesa el conjunto en su condición más exigente: salida con agua, comida y combustible completos. Nada debe balancearse o golpear por fuera; cada pieza exterior necesita una sujeción que resista la marcha.</p>`]
    ],
    videos: [BACKPACKING_VIDEO_LIBRARY.backpackSkala, BACKPACKING_VIDEO_LIBRARY.backpackLoad, BACKPACKING_VIDEO_LIBRARY.backpackWaterproof, BACKPACKING_PLANNED_VIDEOS.packFit, BACKPACKING_PLANNED_VIDEOS.trekkingPoles]
  },
  {
    id: 'refugio', number: '02', icon: '⛺', title: 'Refugio y descanso',
    summary: 'Combina protección climática, aislamiento del suelo y abrigo nocturno como un solo sistema.',
    decision: 'Compara peso completo y temperatura de confort; monta y duerme con el sistema antes de depender de él en una travesía.',
    sections: [
      ['Refugio completo y condiciones reales', `<p>Cuenta cuerpo o tarp, doble techo, piso, varillas, estacas, cuerdas, funda y reparación. El denier, el material y la columna de agua describen solo partes del desempeño: también importan costuras, ventilación, espacio útil y estabilidad cuando cambia el viento.</p><p>Practica el montaje con poca luz y manos frías. Comprueba que el espacio permita dormir sin tocar paredes húmedas y que el sitio elegido esté autorizado, drene y no quede bajo ramas dañadas.</p>`],
      ['Bolsa, quilt y valor R', `<p>Planea con la temperatura <strong>Comfort</strong> apropiada para la persona; no uses “Extreme” como temperatura de descanso. La bolsa o quilt reduce la pérdida alrededor del cuerpo, mientras que la colchoneta controla la pérdida hacia el suelo. Ninguno sustituye al otro.</p><p>En un aislante inflable revisa el valor R, válvula, fugas y kit compatible. La espuma de celda cerrada ocupa más volumen y ofrece menos comodidad, pero no pierde toda su función por una perforación.</p>`]
    ],
    videos: [BACKPACKING_VIDEO_LIBRARY.sleepingKids, BACKPACKING_VIDEO_LIBRARY.sleepingStore, BACKPACKING_VIDEO_LIBRARY.sleepingExtend, BACKPACKING_PLANNED_VIDEOS.shelter, BACKPACKING_PLANNED_VIDEOS.sleepingPad, BACKPACKING_PLANNED_VIDEOS.fieldRepair]
  },
  {
    id: 'ropa', number: '03', icon: '🧥', title: 'Ropa y calzado',
    summary: 'Regula calor y humedad durante la marcha y conserva un conjunto seco para detenerte y dormir.',
    decision: 'Cada prenda debe resolver una función y cada par de calzado debe estar probado con los calcetines de la ruta.',
    sections: [
      ['Capas sin duplicaciones', `<p>Combina una capa base sintética o de lana merino, aislamiento y protección exterior. El algodón húmedo seca lentamente y pierde buena parte de su capacidad de abrigo; evita depender de él en clima frío o lluvioso.</p><p>Quita abrigo antes de sudar en una subida y añádelo al detenerte. Reserva una capa y calcetines secos para dormir dentro de la protección impermeable.</p>`],
      ['Pies, lluvia y radiación', `<p>Usa calzado probado y adecuado al terreno y a la carga. Atiende un punto caliente antes de que sea ampolla: detente, seca, protege y corrige el calcetín, la plantilla o el ajuste de las agujetas.</p><p>Lleva el impermeable accesible. Revisa costuras, ventilación y talla sobre otras capas. Complementa con sombrero, lentes con protección UV y protector solar aplicado según su etiqueta.</p>`]
    ],
    videos: [BACKPACKING_PLANNED_VIDEOS.layers, BACKPACKING_PLANNED_VIDEOS.rain, BACKPACKING_PLANNED_VIDEOS.footwear, BACKPACKING_PLANNED_VIDEOS.sun]
  },
  {
    id: 'agua', number: '04', icon: '💧', title: 'Agua',
    summary: 'Calcula capacidad entre fuentes y prepara un tratamiento principal con un respaldo compatible.',
    decision: 'La distancia, el clima y la confiabilidad de cada fuente determinan los litros; no la costumbre de llevar una sola botella.',
    sections: [
      ['Capacidad entre fuentes', `<p>Confirma reportes recientes y calcula desde la última fuente segura hasta la siguiente, incluido el agua de cocina. Añade un margen para calor, desnivel, retrasos o una fuente seca. Llevar capacidad disponible no significa llenarla en cada tramo.</p><p>Las botellas facilitan medir y limpiar; un depósito permite beber en marcha, pero dificulta saber cuánto queda. Combinar formatos aporta control y flexibilidad.</p>`],
      ['Tratamiento y punto de falla', `<p>Un filtro de fibra hueca suele reducir protozoos y bacterias, pero no necesariamente virus o contaminantes químicos. Si se congela húmedo puede dañarse sin señales visibles. Conoce los límites del modelo, su caudal y su mantenimiento.</p><p>El respaldo puede ser químico o ebullición cuando hay combustible suficiente. Respeta dosis, tiempo, temperatura y turbidez indicados; separa siempre el lado de agua sucia del recipiente limpio.</p>`]
    ],
    videos: [BACKPACKING_VIDEO_LIBRARY.bottle, BACKPACKING_PLANNED_VIDEOS.waterPlan, BACKPACKING_PLANNED_VIDEOS.treatment]
  },
  {
    id: 'alimentacion', number: '05', icon: '🍲', title: 'Alimentación y cocina',
    summary: 'Planea energía, agua, combustible y residuos por día antes de elegir olla o estufa.',
    decision: 'El menú define el sistema de cocina. Si una comida no necesita cocción, también reduce combustible, tiempo y lavado.',
    sections: [
      ['Raciones, reserva y preparación', `<p>Distribuye comidas y colaciones según duración, desnivel, clima, experiencia y necesidades del grupo. Prioriza alimentos densos en energía, estables y fáciles de preparar; añade una reserva separada para un retraso razonable.</p><p>Etiqueta por día para controlar consumo. Registra alergias y prueba el menú antes de la ruta. Incluye el agua y combustible que exige cada preparación.</p>`],
      ['Estufa, olla y protección de alimentos', `<p>Comprueba compatibilidad de estufa, cartucho, soporte y olla. Calcula combustible con margen y prueba el encendido; usa el sistema al aire libre y nunca dentro de la tienda o vestíbulo.</p><p>El material de la olla cambia peso y cocción: titanio destaca al hervir agua, aluminio distribuye mejor el calor y acero tolera más abuso. Guarda comida, basura, pasta dental y otros olores con el método exigido por el área.</p>`]
    ],
    videos: [BACKPACKING_PLANNED_VIDEOS.food, BACKPACKING_PLANNED_VIDEOS.stove, BACKPACKING_PLANNED_VIDEOS.cookware, BACKPACKING_PLANNED_VIDEOS.wildlife]
  },
  {
    id: 'orientacion', number: '06', icon: '🧭', title: 'Orientación y comunicación',
    summary: 'Prepara navegación electrónica y una referencia independiente, con energía para el tiempo completo de la ruta.',
    decision: 'Descargar el mapa no basta: el grupo debe reconocer puntos críticos, salidas y el momento para volver.',
    sections: [
      ['Mapa, brújula y cartografía sin conexión', `<p>Marca inicio, campamentos, fuentes, cruces, desniveles, salidas y puntos donde una decisión equivocada tenga consecuencias. Comprueba el track antes de salir y protege el mapa físico de la humedad.</p><p>El GPS del teléfono puede funcionar sin cobertura si el mapa se descargó. Usa modo avión cuando corresponda y verifica la posición antes de perder referencias claras, no después.</p>`],
      ['Energía y comunicación', `<p>Calcula el consumo de cada dispositivo según días, temperatura y tiempo de pantalla. Prueba batería y cables, protégelos del agua y del frío, y conserva energía para navegación y emergencia.</p><p>Fuera de cobertura, un comunicador satelital puede reducir dependencia del teléfono solo si la suscripción está activa, la persona sabe usarlo y el contacto entiende el protocolo.</p>`]
    ],
    videos: [BACKPACKING_PLANNED_VIDEOS.map, BACKPACKING_PLANNED_VIDEOS.offline, BACKPACKING_PLANNED_VIDEOS.power]
  },
  {
    id: 'seguridad', number: '07', icon: '✚', title: 'Seguridad, higiene y residuos',
    summary: 'Mantén accesibles iluminación, auxilio, señalización, higiene y el sistema autorizado de residuos.',
    decision: 'Dimensiona botiquín y emergencia al grupo y al tiempo de evacuación; llevar material que nadie sabe usar no crea capacidad.',
    sections: [
      ['Botiquín y señales tempranas', `<p>Incluye material para hemorragias, heridas, ampollas, esguinces, frío o calor y medicamentos personales identificados. Ajusta cantidades a integrantes, duración y aislamiento, y asigna quién lo transporta.</p><p>Atiende los pies en cuanto aparezca roce. Observa cambios en ritmo, coordinación, temperatura, hidratación y estado mental; acorta o abandona antes de que una molestia se convierta en una emergencia.</p>`],
      ['Luz, higiene y residuos', `<p>La linterna frontal deja las manos libres; prioriza autonomía útil, modo bajo, bloqueo y resistencia al agua. Lleva energía compatible y accesible.</p><p>Lávate las manos antes de cocinar o comer y después de evacuar. Usa jabón lejos de fuentes. Confirma si el lugar permite hoyo sanitario o exige retirar residuos humanos; papel y productos de higiene se manejan según la regla local.</p>`]
    ],
    videos: [BACKPACKING_PLANNED_VIDEOS.headlamp, BACKPACKING_PLANNED_VIDEOS.firstAid, BACKPACKING_PLANNED_VIDEOS.emergency, BACKPACKING_PLANNED_VIDEOS.hygiene, BACKPACKING_PLANNED_VIDEOS.waste]
  },
  {
    id: 'plan', number: '08', icon: '▤', title: 'Documentos y plan de ruta',
    summary: 'Confirma acceso y deja a una persona responsable la información necesaria para activar ayuda.',
    decision: 'El itinerario incluye una hora límite y una acción concreta; “vamos al bosque” no permite localizar al grupo.',
    sections: [
      ['Permisos, reservas y cierres', `<p>Comprueba administración, fechas, cupo, campamentos permitidos, cierres, reglas de fuego, fauna y residuos. Guarda una copia accesible sin conexión y otra protegida de humedad cuando sea necesaria.</p><p>Revisa nuevamente cerca de la salida: el clima, incendios o mantenimiento pueden cambiar el acceso después de reservar.</p>`],
      ['Itinerario para activar ayuda', `<p>Incluye integrantes, ruta, campamentos, vehículo, accesos, salidas alternativas, horarios y contactos. Define la hora exacta en que la persona responsable debe intentar comunicarse y cuándo debe avisar a emergencias.</p><p>Al terminar, confirma el regreso. Si el plan cambia, actualízalo mientras exista comunicación; no conviertas un desvío improvisado en una ruta desconocida para todos.</p>`]
    ],
    videos: [BACKPACKING_PLANNED_VIDEOS.permits, BACKPACKING_PLANNED_VIDEOS.itinerary]
  }
];
