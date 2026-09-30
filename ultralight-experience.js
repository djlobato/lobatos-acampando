/* Experiencia unificada de Acampada ultraligera.
   Los videos publicados solo se vinculan cuando su clasificación es inequívoca. */

const ULTRALIGHT_VIDEO_LIBRARY = {
  forclaz: ['yx37Zqd7LhI', 'Forclaz Trek 100', 'Video publicado']
};

const ULTRALIGHT_PLANNED_VIDEOS = {
  pack: [null, 'Mochila ultraligera: volumen, ajuste y carga real', 'Próximamente'],
  liner: [null, 'Cómo impermeabilizar el interior de la mochila', 'Próximamente'],
  scale: [null, 'Pesa tu equipo y construye una lista útil', 'Próximamente'],
  repair: [null, 'Kit mínimo de reparación compatible', 'Próximamente'],
  shelter: [null, 'Elige un refugio ligero para condiciones reales', 'Próximamente'],
  stakes: [null, 'Estacas, vientos y anclajes para un refugio ligero', 'Próximamente'],
  sleep: [null, 'Saco o quilt: temperatura, talla y margen', 'Próximamente'],
  pad: [null, 'Aislante: valor R, comodidad y reparación', 'Próximamente'],
  footprint: [null, 'Protector de suelo: cuándo usarlo y cómo cortarlo', 'Próximamente'],
  layers: [null, 'Sistema de capas sin prendas duplicadas', 'Próximamente'],
  rain: [null, 'Protección contra lluvia y viento', 'Próximamente'],
  socks: [null, 'Calcetines de marcha y par seco para dormir', 'Próximamente'],
  footwear: [null, 'Calzado ligero probado para la ruta', 'Próximamente'],
  sun: [null, 'Protección solar para caminar varias horas', 'Próximamente'],
  water: [null, 'Calcula la capacidad de agua entre fuentes', 'Próximamente'],
  treatment: [null, 'Tratamiento de agua y método de respaldo', 'Próximamente'],
  menu: [null, 'Menú ligero con energía suficiente', 'Próximamente'],
  stove: [null, 'Estufa, combustible y encendido como sistema', 'Próximamente'],
  pot: [null, 'Olla o taza ligera y limpieza mínima', 'Próximamente'],
  wildlife: [null, 'Comida, olores y residuos según las reglas del lugar', 'Próximamente'],
  navigation: [null, 'Mapa, brújula y ruta sin conexión', 'Próximamente'],
  power: [null, 'Presupuesto de energía para teléfono y navegación', 'Próximamente'],
  headlamp: [null, 'Linterna frontal y batería compatible', 'Próximamente'],
  firstAid: [null, 'Botiquín compacto según ruta y evacuación', 'Próximamente'],
  hygiene: [null, 'Higiene y residuos con poco peso', 'Próximamente'],
  emergency: [null, 'Silbato y refugio de emergencia', 'Próximamente'],
  shared: [null, 'Reparte el equipo compartido en familia', 'Próximamente'],
  children: [null, 'Equipo accesible para niñas y niños durante la marcha', 'Próximamente'],
  itinerary: [null, 'Itinerario, contacto de salida y hora límite', 'Próximamente']
};

const ULTRALIGHT_ITEM_VIDEOS = {
  'ul-mochila': [ULTRALIGHT_PLANNED_VIDEOS.pack],
  'ul-liner': [ULTRALIGHT_PLANNED_VIDEOS.liner],
  'ul-bascula': [ULTRALIGHT_PLANNED_VIDEOS.scale],
  'ul-reparacion': [ULTRALIGHT_PLANNED_VIDEOS.repair],
  'ul-refugio': [ULTRALIGHT_PLANNED_VIDEOS.shelter],
  'ul-estacas': [ULTRALIGHT_PLANNED_VIDEOS.stakes],
  'ul-saco': [ULTRALIGHT_PLANNED_VIDEOS.sleep],
  'ul-aislante': [ULTRALIGHT_PLANNED_VIDEOS.pad],
  'ul-suelo': [ULTRALIGHT_PLANNED_VIDEOS.footprint],
  'ul-capas': [ULTRALIGHT_PLANNED_VIDEOS.layers],
  'ul-lluvia': [ULTRALIGHT_PLANNED_VIDEOS.rain],
  'ul-calcetines': [ULTRALIGHT_PLANNED_VIDEOS.socks],
  'ul-calzado': [ULTRALIGHT_PLANNED_VIDEOS.footwear],
  'ul-sol': [ULTRALIGHT_PLANNED_VIDEOS.sun],
  'ul-agua': [ULTRALIGHT_PLANNED_VIDEOS.water],
  'ul-tratamiento': [ULTRALIGHT_PLANNED_VIDEOS.treatment],
  'ul-menu': [ULTRALIGHT_PLANNED_VIDEOS.menu],
  'ul-estufa': [ULTRALIGHT_PLANNED_VIDEOS.stove],
  'ul-olla': [ULTRALIGHT_PLANNED_VIDEOS.pot],
  'ul-fauna': [ULTRALIGHT_PLANNED_VIDEOS.wildlife],
  'ul-mapa': [ULTRALIGHT_PLANNED_VIDEOS.navigation],
  'ul-energia': [ULTRALIGHT_PLANNED_VIDEOS.power],
  'ul-frontal': [ULTRALIGHT_PLANNED_VIDEOS.headlamp],
  'ul-botiquin': [ULTRALIGHT_PLANNED_VIDEOS.firstAid],
  'ul-higiene': [ULTRALIGHT_PLANNED_VIDEOS.hygiene],
  'ul-emergencia': [ULTRALIGHT_PLANNED_VIDEOS.emergency],
  'ul-compartido': [ULTRALIGHT_PLANNED_VIDEOS.shared],
  'ul-abrigo-menores': [ULTRALIGHT_PLANNED_VIDEOS.children],
  'ul-itinerario': [ULTRALIGHT_PLANNED_VIDEOS.itinerary]
};

const ULTRALIGHT_EXPERIENCE_GROUPS = [
  {
    id: 'sistema-base', number: '01', icon: '⚖', title: 'Sistema base y transporte',
    summary: 'Mide el sistema completo, elimina duplicados por función y elige la mochila después de definir la carga.',
    decision: 'Reduce primero los sistemas grandes; nunca persigas una cifra si obliga a quitar agua, abrigo, descanso, navegación o emergencia.',
    sections: [
      ['Peso base y peso total', `<p>El <strong>peso base</strong> excluye agua, comida y combustible; el peso total sí los incluye y es el que cargarás al salir. Registra cada artículo y su peso real en una báscula. Ataca primero refugio, descanso y mochila: ahorrar gramos en objetos pequeños no compensa un sistema grande mal elegido.</p><p>“Menos de 5 kg” describe algunos equipos avanzados, no es una obligación familiar. Evalúa distancia, desnivel, clima, talla, experiencia y capacidad individual.</p>`],
      ['Mochila al final y reparación compatible', `<p>Reúne primero el equipo y después elige la mochila. Un volumen aproximado de 35–50 L puede funcionar cuando el conjunto ya es compacto, pero la capacidad, la carga máxima del fabricante y el ajuste de torso mandan. Pruébala con agua y comida reales.</p><p>Una bolsa interior resistente puede impermeabilizar el contenido sin multiplicar fundas. El kit de reparación debe corresponder a los materiales: parches, cinta, aguja, hilo o repuesto de hebilla solo cuando realmente resuelven una falla probable.</p>`]
    ],
    videos: [ULTRALIGHT_VIDEO_LIBRARY.forclaz, ULTRALIGHT_PLANNED_VIDEOS.pack, ULTRALIGHT_PLANNED_VIDEOS.scale]
  },
  {
    id: 'refugio-descanso', number: '02', icon: '△', title: 'Refugio y descanso',
    summary: 'Evalúa refugio, saco o quilt y aislante como un solo sistema contra viento, lluvia, insectos y pérdida de calor.',
    decision: 'El ahorro es válido solo si el sistema completo conserva margen térmico, estabilidad y protección para el lugar previsto.',
    sections: [
      ['Refugio completo, no solo la tela', `<p>Compara el peso con estacas, vientos, bastones o postes, protector y reparación. Un tarp o una tienda de una pared exige mejor selección del sitio y control de condensación; no es intercambiable con una tienda cerrada cuando hay insectos, exposición o poca experiencia.</p><p>Combina estacas según el suelo: más fuertes en puntos de carga y más ligeras donde la tensión sea menor. Practica el montaje con viento antes del viaje.</p>`],
      ['Temperatura de confort y valor R', `<p>Elige saco o quilt por la temperatura de <strong>confort</strong> apropiada al usuario, no por la extrema. Conserva un margen cercano a 5 °C cuando el pronóstico, la humedad o la experiencia lo aconsejen. La talla debe cerrar sin comprimir el aislamiento.</p><p>El valor R de la colchoneta indica resistencia térmica. La espuma es resistente y reparable; la inflable suele aislar y acomodar mejor con menos volumen. Prueba saco, ropa y aislante juntos durante una noche comparable.</p>`]
    ],
    videos: [ULTRALIGHT_PLANNED_VIDEOS.shelter, ULTRALIGHT_PLANNED_VIDEOS.sleep, ULTRALIGHT_PLANNED_VIDEOS.pad]
  },
  {
    id: 'capas-calzado', number: '03', icon: '◫', title: 'Capas, lluvia y calzado',
    summary: 'Cada prenda cumple una función comprobable: manejo de humedad, aislamiento, viento, lluvia o protección solar.',
    decision: 'No elimines la capa que protege del peor escenario razonable; evita duplicados que resuelven exactamente la misma función.',
    sections: [
      ['Capas por función', `<p>La capa base aleja humedad, la intermedia aporta aislamiento y la exterior protege de viento o precipitación. Una rompeviento ligera puede evitar usar la impermeable en clima seco, pero no sustituye una prenda impermeable cuando se espera lluvia sostenida.</p><p>Reserva un par de calcetines seco para dormir y protégelo dentro de la bolsa interior. Ajusta guantes, gorro y aislamiento a altitud, viento y temperatura nocturna.</p>`],
      ['Calzado y protección solar', `<p>El calzado ligero puede reducir fatiga si la suela, el ajuste y la estabilidad funcionan en el terreno real. Úsalo antes de la ruta con la carga prevista; no estrenes calzado ni cambies a un modelo mínimo durante la salida.</p><p>Sombrero, ropa, lentes UV400 y protector solar se seleccionan por exposición y duración. La ligereza no reduce el riesgo de radiación, deshidratación ni enfriamiento por viento.</p>`]
    ],
    videos: [ULTRALIGHT_PLANNED_VIDEOS.layers, ULTRALIGHT_PLANNED_VIDEOS.rain, ULTRALIGHT_PLANNED_VIDEOS.footwear]
  },
  {
    id: 'agua-comida', number: '04', icon: '◉', title: 'Agua, comida y cocina',
    summary: 'Calcula capacidad entre fuentes verificadas, tratamiento con respaldo y energía suficiente para la duración y el esfuerzo.',
    decision: 'Nunca reduzcas agua o comida para alcanzar una meta de peso; reduce envases, duplicados y utensilios innecesarios.',
    sections: [
      ['Capacidad y tratamiento', `<p>Calcula litros desde la última fuente confiable hasta la siguiente, incluidos cocina, calor, desnivel y retrasos. Una fuente dibujada en el mapa puede estar seca o ser inaccesible: confirma información reciente y define una reserva.</p><p>Conoce los límites del filtro frente a protozoos, bacterias, virus y contaminación química. Lleva un respaldo compatible, como tabletas de dióxido de cloro respetando dosis y tiempo, y separa recipientes de agua cruda y tratada.</p>`],
      ['Energía, cocina y fauna', `<p>Diseña cada día con comidas que la familia ya tolera y una densidad energética útil; alrededor de 4–5 kcal por gramo es una referencia práctica, no una razón para sacrificar nutrición o porciones. Incluye alimento de reserva.</p><p>Cuenta estufa, combustible, encendedor, respaldo, olla y cuchara como un sistema. Una olla de titanio de 550–750 ml puede servir también de taza para una persona, si el menú lo permite. Las normas de almacenamiento contra fauna prevalecen sobre cualquier ahorro de peso.</p>`]
    ],
    videos: [ULTRALIGHT_PLANNED_VIDEOS.water, ULTRALIGHT_PLANNED_VIDEOS.treatment, ULTRALIGHT_PLANNED_VIDEOS.menu, ULTRALIGHT_PLANNED_VIDEOS.stove]
  },
  {
    id: 'orientacion-emergencia', number: '05', icon: '✚', title: 'Orientación, higiene y emergencia',
    summary: 'Mantén navegación, luz, comunicación, primeros auxilios e higiene aunque cada elemento sea compacto.',
    decision: 'El equipo crítico se adapta al riesgo y al tiempo de evacuación; no se elimina únicamente porque no se use en una salida normal.',
    sections: [
      ['Navegación y energía', `<p>Descarga mapas y ruta antes de salir y conserva una referencia independiente: mapa protegido y brújula compacta. Marca accesos, agua, cruces, desniveles y salidas. El teléfono aporta navegación, pero una batería externa no crea cobertura.</p><p>Calcula energía con el consumo real y un margen por frío o retraso. En salidas cortas, 5,000–10,000 mAh pueden bastar según teléfono y uso; compruébalo, protege cable y puerto, y reserva energía para emergencia.</p>`],
      ['Botiquín, higiene y señalización', `<p>El botiquín se personaliza por integrantes, lesiones probables, medicamentos, formación y tiempo de evacuación. Compacto no significa incompleto. Añade una frontal eficiente por persona y verifica modo de bloqueo y batería.</p><p>Usa instalaciones cuando existan; en campo lleva el sistema sanitario requerido, jabón concentrado y bolsas para retirar residuos. Un silbato y un vivac de emergencia ofrecen señalización y protección sin sustituir abrigo ni refugio principal.</p>`]
    ],
    videos: [ULTRALIGHT_PLANNED_VIDEOS.navigation, ULTRALIGHT_PLANNED_VIDEOS.power, ULTRALIGHT_PLANNED_VIDEOS.firstAid, ULTRALIGHT_PLANNED_VIDEOS.emergency]
  },
  {
    id: 'carga-familia', number: '06', icon: '♟', title: 'Carga compartida en familia',
    summary: 'Distribuye el equipo común por capacidad y conserva agua, abrigo y seguridad accesibles para cada integrante.',
    decision: 'La carga no se reparte en partes iguales: se asigna según talla, experiencia, ritmo y condición de cada persona.',
    sections: [
      ['Equipo común y autonomía personal', `<p>Una sola familia puede compartir refugio, cocina, reparación, primeros auxilios y tratamiento, pero debe saber quién lleva cada sistema. Evita que todo lo crítico quede en una mochila que pueda separarse del grupo.</p><p>Niñas y niños conservan accesibles agua, alimento, impermeable o abrigo, silbato y frontal según edad y supervisión. Ajusta el peso de forma individual y practica con la carga real antes de aumentar distancia.</p>`],
      ['Itinerario y prueba completa', `<p>Comparte ruta, integrantes, vehículo, campamentos, horarios de reporte y una hora límite para activar ayuda. Registra también el contacto responsable y las alternativas si el clima, el agua o el ritmo cambian.</p><p>Haz una caminata de prueba con comida y agua reales. Revisa ajuste, puntos de roce, acceso a capas, consumo, tiempos y qué artículo no cumplió una función. Aligerar es un proceso de medición y aprendizaje, no una compra aislada.</p>`]
    ],
    videos: [ULTRALIGHT_PLANNED_VIDEOS.shared, ULTRALIGHT_PLANNED_VIDEOS.children, ULTRALIGHT_PLANNED_VIDEOS.itinerary]
  }
];
