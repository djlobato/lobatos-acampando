/* Videos registrados en "Datos de la tabla.csv". Cada video se presenta
   dentro de su tema de Review de equipo; no existe un catálogo general. */
const CHANNEL_REVIEW_VIDEOS = {
  'Tiendas, refugio y mantenimiento': [
    ['lkyYT_IhsDk', 'Sellador de pintura vs. impermeabilizante para tiendas de campaña', 'Impermeabilización de tiendas'],
    ['rPBMD8Nfabs', '¿Arpenaz Family 4.1 F&B o Instant Tent 8P?', 'Comparativa de tiendas familiares'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Reparación de refugio'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña · Nikwax Tent & Gear', 'Cuidado del refugio'],
    ['Dg6QOMleD5o', 'Cómo reparar malla o mosquitero de tienda o casa de campaña', 'Reparación de mosquitero'],
    ['BSY4E3g4YHQ', 'Reparación de toldo o huella de tienda · Gear Aid Repair Tape', 'Parches y reparación'],
    ['v3b2SwFLEJM', 'Cómo instalar Arpenaz Family 4.1 F&B Quechua', 'Montaje de tienda familiar'],
    ['q4wkpBTLdZM', 'Cómo disminuir la condensación en una tienda de campaña', 'Ventilación y condensación'],
    ['MzRiI0ytFqM', 'Cómo instalar Coleman Instant Tent para 8 personas', 'Montaje de tienda familiar'],
    ['EAIb58gMdQI', 'Revisión Tienda Bushcraft Bungalow 2.0 OneTigris', 'Review de refugio'],
    ['EWvfVxb9JTI', 'Arma tu casa de campaña · guía para niños', 'Montaje en familia']
  ],
  'Descanso y sistema de dormir': [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Elegir sistema de descanso'],
    ['YXQddwtFLk0', 'Cómo guardar y transportar tu sleeping bag técnico', 'Cuidado y transporte'],
    ['FvLxxc8hrcQ', 'Nuestras recomendaciones para dormir calientito en camping', 'Abrigo nocturno'],
    ['DWO1Og32bNk', 'Sleeping Coleman Kids 50°F (10°C): ¿realmente funciona?', 'Review infantil'],
    ['Es82QAg1gys', 'Cómo extender el rango térmico de tu sleeping bag', 'Ajuste térmico'],
    ['S-fV50RlOu4', 'Coleman Plum Fun 45°F (7°C): sleeping juvenil', 'Review juvenil'],
    ['4s7kJTia7Y4', 'Sleeping bag técnico infantil de verano', 'Review infantil']
  ],
  'Mochilas, transporte y organización': [
    ['544RfjLz0Qg', 'Cómo restauré la impermeabilidad de mi mochila con Gear Aid Seam Grip TF', 'Mantenimiento de mochila'],
    ['H0h5B-UxwN8', 'Hack para doblar tu ropa de camping', 'Organización de equipaje'],
    ['HxDVdis9f7E', 'Mochila de Manada Scout: explicación paso a paso', 'Mochila de campamento'],
    ['pvqQnnJYzuk', 'Mochila de ataque para campamento de Manada Scout', 'Mochila de ataque'],
    ['NT6muu9--74', 'SKALA 40L: la mochila YETI con alma táctica de Mystery Ranch', 'Review de mochila'],
    ['S0y6ajbTrKg', '¿Qué llevamos para un camping familiar?', 'Equipo para salida familiar'],
    ['vIJZS9yTE3g', 'Mi mochila de monte · Hazard 4 Plan-B + equipo', 'Equipo personal']
  ],
  'Cocina, agua y fuego': [
    ['M6-9N9WIc94', 'Cómo hacer fogatas básicas para campamento', 'Técnica de fogata'],
    ['UEEO2BJDIyM', 'Iniciadores de fuego para fogata u hoguera', 'Encendido'],
    ['Zfd6RlcPW8U', '¿Vale la pena una botella Nalgene?', 'Review de recipiente de agua'],
    ['IgDUkKfkZ6Y', '¿Cómo conectar una estufa de gas de campamento?', 'Uso de estufa'],
    ['rffe2D_1Nbs', 'Aprender haciendo: fogata en campamento familiar a 6 °C', 'Práctica familiar'],
    ['PB42UAHTS1s', 'Setup básico: cocina de camping para fogata', 'Cocina de campamento'],
    ['szYlu32mnRs', 'BRS-32: estufa de 2 quemadores en poco espacio', 'Review de estufa']
  ],
  'Equipo de campo, Scout y salidas': [
    ['yx37Zqd7LhI', 'Forclaz Trek 100: de lo mejor en equipo de Decathlon', 'Review de equipo'],
    ['s_mGc2RxzLE', 'My First Victorinox: navaja para niños', 'Herramienta de campo'],
    ['07FCRUUbIvs', 'Acampando en Familia · Zirahuén', 'Salida familiar'],
    ['kwzz3iC6FlY', 'Ferao en Misión Scout: Derechos que Cambian tu Vida', 'Actividad Scout'],
    ['EalEwet0Jm8', 'Ferao en Misión Scout: Deberes de los niños', 'Actividad Scout'],
    ['W814l_xkHjY', 'Una historia que llegó sola · camping', 'Experiencia de campamento'],
    ['LZ2WI9J52ds', 'Llegamos a 1000: cuéntanos tu historia de campismo', 'Comunidad campista']
  ],
  'Comunidad y archivo del canal': [
    ['06QZeLno7zI', 'Making Luis Omar', 'Archivo del canal'],
    ['hKbO-andAqk', 'Immersive by knotion', 'Archivo del canal'],
    ['rRkgtW06aTM', 'Gracias Miranda', 'Archivo del canal'],
    ['Qt9ADhyydE4', '14 de Febrero', 'Archivo del canal'],
    ['Ug3OHhM7rPQ', 'Gaby y Omar bailando tango', 'Archivo del canal'],
    ['MRxMe7GsJkw', 'Navidad video', 'Archivo del canal'],
    ['307Ck1jVPnw', 'Seteo de logic para audio contra video', 'Archivo del canal'],
    ['X5tnB2z58Tw', 'Immersive + Knotion Portal prueba', 'Archivo del canal'],
    ['uUjbx4zsuN8', 'Jairo Is Coming To Town', 'Archivo del canal'],
    ['_WCJsbFQTEg', 'weeked', 'Archivo del canal'],
    ['QI9iZPuMg3A', 'blanco', 'Archivo del canal'],
    ['u0E-zpvCNKY', 'Trabajar con tomas', 'Archivo del canal'],
    ['A4CBe2SsTaM', 'ruidos', 'Archivo del canal'],
    ['LhnmKOSb5sQ', 'Flex corrección de tiempo', 'Archivo del canal'],
    ['KkgKSYb6q5w', 'IMMERSIVE + KNOTION MOTIVADORES', 'Archivo del canal'],
    ['H7zCNA_98T8', 'Procesos de efectos', 'Archivo del canal'],
    ['iJX3VfDAkgI', 'ejemplo de portal', 'Archivo del canal'],
    ['pBUTKuqU4k0', 'presentación', 'Archivo del canal'],
    ['rE0NtpiIwYE', 'Immersive by knotion', 'Archivo del canal'],
    ['lIp9enzpuIk', 'Aniversario', 'Archivo del canal'],
    ['PZFj51rtT_4', 'Proyecto nuevo', 'Archivo del canal'],
    ['beOApquQeZs', 'Buenos días Miranda', 'Archivo del canal'],
    ['gWFXk4Blmrs', 'Proyecto nuevo', 'Archivo del canal']
  ]
};
