/* Modalidades desarrolladas después del módulo inicial de Camping con coche. */
const originalCarGuide = guide;

const BACKPACKING_EQUIPMENT = [
  ['Mochila y transporte', [
    ['bp-mochila', 'Mochila de travesía', 'Esencial', 'persona', 'Transporta el campamento durante toda la ruta.', 'Elige el volumen según duración y equipo; prioriza ajuste de torso, cinturón lumbar y comodidad con carga real.', 'Ajusta la mochila, pesa el conjunto y camina con ella antes de la salida.'],
    ['bp-liner', 'Bolsa interior impermeable o funda', 'Esencial', 'persona', 'Protege el equipo crítico de lluvia y humedad.', 'Una bolsa interior resistente protege el contenido aunque la funda exterior se desplace con el viento.', 'Guarda saco, ropa de dormir y electrónicos en protección independiente.'],
    ['bp-bastones', 'Bastones de senderismo', 'Según la ruta', 'persona', 'Ayudan con equilibrio y reparto de esfuerzo.', 'Comprueba longitud, sistema de bloqueo y compatibilidad con el terreno.', 'Prueba la regulación y guárdalos si el paso exige usar las manos.'],
    ['bp-dia', 'Mochila de ataque plegable', 'Opcional', 'persona', 'Sirve para recorridos cortos desde un campamento base.', 'Solo añádela si habrá una excursión sin la mochila principal.', 'Marca No aplica en rutas donde siempre cargas todo el equipo.']
  ]],
  ['Refugio y descanso', [
    ['bp-tienda', 'Tienda ligera, tarp o refugio', 'Esencial', 'grupo', 'Protege del clima durante la noche.', 'Elige según número de personas, exposición, insectos, habilidad de montaje y reglas del sitio.', 'Monta el sistema completo en casa y cuenta varillas, estacas, cuerdas y protector.'],
    ['bp-saco', 'Saco de dormir o quilt', 'Esencial', 'persona', 'Aporta abrigo durante el descanso.', 'Selecciona el rango de uso según las temperaturas nocturnas previstas y las características del usuario.', 'Mantenlo seco y guárdalo sin compresión prolongada al regresar.'],
    ['bp-aislante', 'Aislante o colchoneta', 'Esencial', 'persona', 'Reduce la pérdida de calor hacia el suelo.', 'Compara valor R, peso, volumen, longitud y comodidad.', 'Revisa fugas y lleva reparación compatible si es inflable.'],
    ['bp-reparacion-refugio', 'Reparación de refugio y colchoneta', 'Esencial', 'grupo', 'Resuelve daños pequeños que comprometen descanso y protección.', 'Lleva parches, cinta y piezas compatibles con el equipo real.', 'Practica la reparación antes de depender de ella.']
  ]],
  ['Ropa y calzado', [
    ['bp-capas', 'Sistema de capas', 'Esencial', 'persona', 'Permite regular abrigo y humedad mientras caminas y descansas.', 'Combina capa base, abrigo y protección exterior según clima; evita duplicar prendas sin función clara.', 'Reserva una capa seca para dormir y protégela del agua.'],
    ['bp-lluvia', 'Chaqueta y protección para lluvia', 'Esencial', 'persona', 'Limita exposición a lluvia y viento.', 'Revisa impermeabilidad, ventilación, talla sobre otras capas y cobertura necesaria.', 'Llévala accesible, no al fondo de la mochila.'],
    ['bp-calzado', 'Calzado probado y calcetines', 'Esencial', 'persona', 'Sostiene los pies durante la ruta.', 'Usa calzado conocido y adecuado a terreno, carga y condiciones.', 'Revisa uñas, puntos de roce y lleva calcetines secos.'],
    ['bp-sol', 'Sombrero, lentes y protección solar', 'Esencial', 'persona', 'Reduce exposición al sol durante la marcha.', 'Adapta la cobertura a altitud, sombra y sensibilidad personal.', 'Déjalo accesible y sigue las indicaciones de cada producto.']
  ]],
  ['Agua', [
    ['bp-recipientes', 'Botellas o depósito de agua', 'Esencial', 'persona', 'Transportan el agua entre fuentes.', 'La capacidad debe cubrir el tramo más largo sin una fuente confirmada.', 'Comprueba fugas y anota dónde podrás reabastecerte.'],
    ['bp-filtro', 'Filtro o tratamiento de agua', 'Esencial', 'grupo', 'Permite tratar agua cuando la potabilidad no está confirmada.', 'Conoce qué contaminantes cubre el método y sus límites de temperatura y turbidez.', 'Prueba el sistema y lleva el consumible o respaldo necesario.'],
    ['bp-respaldo-agua', 'Método de tratamiento de respaldo', 'Según la ruta', 'grupo', 'Cubre una falla del método principal.', 'Elige un sistema pequeño y compatible con el agua esperada.', 'Verifica caducidad y tiempo de tratamiento.']
  ]],
  ['Alimentación y cocina', [
    ['bp-comida', 'Alimentación, colaciones y raciones por día', 'Esencial', 'persona', 'Aportan energía durante la ruta y deben planearse como parte central de la carga.', 'Calcula comidas, colaciones y una reserva razonable por día. Prioriza alimentos nutritivos, energéticos, ligeros y fáciles de preparar según el grupo y el acceso a agua.', 'Revisa alergias, porciones, empaque, residuos y peso total. Separa lo que comerás cada día para no gastar de más al inicio.'],
    ['bp-estufa', 'Estufa, combustible y encendido', 'Según la salida', 'grupo', 'Permite cocinar cuando está autorizado.', 'Comprueba compatibilidad, estabilidad, autonomía y restricciones de fuego.', 'Prueba conexiones y lleva un encendido de respaldo; cocina ventilado.'],
    ['bp-cocina', 'Olla, taza y cubiertos', 'Según el menú', 'persona', 'Resuelven preparación y consumo con pocas piezas.', 'Selecciona solo lo necesario para el menú, el combustible y el tamaño del grupo.', 'Evita piezas redundantes, guarda todo limpio y lleva de vuelta los residuos de comida.'],
    ['bp-comida-fauna', 'Sistema autorizado para proteger alimentos', 'Según el lugar', 'grupo', 'Reduce el acceso de fauna a comida y residuos.', 'Usa el método exigido por la zona: contenedor, gabinete o suspensión donde esté permitida.', 'Confirma la regla específica del destino antes de elegir el sistema.']
  ]],
  ['Orientación y comunicación', [
    ['bp-mapa', 'Mapa de ruta y brújula', 'Esencial', 'grupo', 'Permiten orientarse sin depender de señal o batería.', 'Lleva cartografía vigente y comprende los desvíos, salidas y fuentes.', 'Practica su uso y protege el mapa de la humedad.'],
    ['bp-gps', 'Teléfono o GPS con mapa sin conexión', 'Esencial', 'grupo', 'Complementa la navegación y registra la ruta.', 'Descarga mapas y recorrido; no dependas de cobertura móvil.', 'Activa ahorro de energía y protege el dispositivo.'],
    ['bp-energia', 'Batería externa y cables', 'Según la duración', 'grupo', 'Mantienen disponibles navegación y comunicación.', 'Calcula capacidad según días, temperatura y dispositivos.', 'Carga todo y comprueba cables antes de partir.'],
    ['bp-satelite', 'Comunicador satelital o localizador', 'Según la ruta', 'grupo', 'Permite avisar o pedir ayuda fuera de cobertura.', 'Valora aislamiento, duración y plan de respuesta; aprende a utilizarlo.', 'Activa suscripción, carga batería y comparte el protocolo con el contacto.']
  ]],
  ['Seguridad, higiene y residuos', [
    ['bp-frontal', 'Linterna frontal y energía de repuesto', 'Esencial', 'persona', 'Permite caminar o resolver tareas de noche.', 'Revisa autonomía y controles accesibles.', 'Bloquea el encendido accidental y prueba cada unidad.'],
    ['bp-botiquin', 'Botiquín y medicamentos personales', 'Esencial', 'grupo', 'Atiende problemas dentro de la formación del grupo.', 'Adáptalo a personas, duración, riesgos y tiempo de ayuda.', 'Revisa caducidades y acceso rápido.'],
    ['bp-emergencia', 'Silbato, manta o refugio de emergencia', 'Esencial', 'persona', 'Aporta señalización y protección si el itinerario cambia.', 'Elige elementos simples que el grupo sepa usar.', 'Llévalos en un lugar accesible.'],
    ['bp-higiene', 'Higiene personal y lavado de manos', 'Esencial', 'persona', 'Reduce contaminación durante comida y uso del baño.', 'Lleva cantidades pequeñas y un sistema compatible con la ruta.', 'Mantén jabón lejos de fuentes de agua y sigue reglas locales.'],
    ['bp-residuos', 'Bolsas para basura y residuos humanos', 'Esencial', 'grupo', 'Permiten retirar residuos cuando la zona lo exige.', 'Confirma si se permite hoyo sanitario o si debes retirar todo; lleva el sistema autorizado.', 'Nunca entierres productos de higiene; separa y sella los residuos.']
  ]],
  ['Documentos y plan de ruta', [
    ['bp-permiso', 'Permisos, reservas e identificación', 'Esencial', 'grupo', 'Acreditan acceso y pernocta donde se exige.', 'Comprueba zonas, fechas, integrantes y condiciones.', 'Guarda una copia accesible sin conexión.'],
    ['bp-itinerario', 'Itinerario y contactos de emergencia', 'Esencial', 'grupo', 'Permiten que otra persona sepa dónde buscar si no regresas.', 'Incluye ruta, campamentos, vehículo, horarios y momento para activar ayuda.', 'Entrégalo a una persona responsable y avisa al concluir.']
  ]]
];

const BUSHCRAFT_EQUIPMENT = [
  ['Reglas y planificación', [
    ['bc-permiso', 'Reglas del terreno y plan de práctica', 'Esencial', 'grupo', 'Define las condiciones del sitio antes de entrar, pernoctar o practicar.', 'Identifica quién administra el lugar y revisa restricciones de herramientas, fuego, madera y residuos.', 'Guarda el comprobante o las reglas consultadas y elimina del plan cualquier actividad que no encaje.'],
    ['bc-plan', 'Plan de sitio e itinerario', 'Esencial', 'grupo', 'Define acceso, campamento, agua, salida y contacto de emergencia.', 'Incluye coordenadas, horarios y una alternativa segura.', 'Compártelo con una persona de confianza.']
  ]],
  ['Transporte y organización', [
    ['bc-mochila', 'Mochila o bolsa resistente', 'Esencial', 'persona', 'Transporta refugio, herramientas, agua y descanso.', 'Elige capacidad y ajuste según distancia y carga; separa filos y combustible.', 'Carga con peso real y protege el contenido del agua.'],
    ['bc-dia', 'Mochila de ataque o senderismo', 'Según la salida', 'persona', 'Sirve para recorridos desde un campamento base.', 'Inclúyela solo si te separarás del equipo principal.', 'Lleva agua, orientación, abrigo y emergencia aunque el recorrido sea corto.']
  ]],
  ['Refugio y descanso', [
    ['bc-tarp', 'Tarp o refugio completo', 'Esencial', 'grupo', 'Protege de precipitación, viento y rocío.', 'Elige tamaño, puntos de anclaje y configuración según clima y número de personas.', 'Practica varias configuraciones sin dañar árboles.'],
    ['bc-cordaje', 'Cordaje, cintas protectoras y estacas', 'Esencial', 'grupo', 'Permiten tensar el refugio y organizar el sitio.', 'Usa cintas anchas cuando rodees árboles y evita cortar corteza.', 'Cuenta piezas, revisa desgaste y retira todo al salir.'],
    ['bc-saco', 'Saco, manta o quilt', 'Esencial', 'persona', 'Aporta abrigo durante la noche.', 'Selecciona según temperatura y humedad esperadas.', 'Mantenlo seco y prueba el sistema completo.'],
    ['bc-aislante', 'Aislante de suelo', 'Esencial', 'persona', 'Reduce pérdida de calor y humedad desde el terreno.', 'Compara aislamiento, tamaño, resistencia y peso.', 'No dependas solo de hojas o vegetación del lugar.'],
    ['bc-hamaca', 'Hamaca, correas anchas y aislamiento inferior', 'Según el sitio', 'persona', 'Alternativa de descanso donde existan árboles sanos y condiciones adecuadas.', 'Requiere puntos de anclaje válidos, correas que protejan la corteza, lluvia cubierta y aislamiento inferior para evitar pérdida de calor.', 'Marca No aplica si no hay árboles adecuados o si el lugar restringe su uso. Nunca uses cuerdas que dañen la corteza.']
  ]],
  ['Herramientas', [
    ['bc-cuchillo', 'Cuchillo de campo con funda', 'Según la práctica', 'grupo', 'Permite tareas controladas donde su uso es legal y necesario.', 'Elige tamaño manejable, funda segura y herramienta acorde a tu formación.', 'Transporta protegido y trabaja lejos de otras personas.'],
    ['bc-sierra', 'Sierra plegable', 'Según la práctica', 'grupo', 'Corta material previsto con mayor control que una herramienta de golpe.', 'Revisa las reglas del sitio sobre madera antes de incluirla.', 'Revisa cierre, dientes y técnica segura; marca No aplica si no forma parte del plan.'],
    ['bc-hacha', 'Hacha o hachuela', 'Opcional avanzado', 'grupo', 'Sirve para tareas específicas de madera.', 'Inclúyela solo con experiencia, espacio de trabajo y una necesidad clara.', 'Protege el filo, define un perímetro y nunca la uses cerca de menores.'],
    ['bc-guantes', 'Guantes de trabajo', 'Esencial', 'persona', 'Protegen durante manipulación de madera y montaje.', 'Busca talla correcta, agarre y resistencia acorde a la tarea.', 'Sustitúyelos si están rotos o pierden agarre.'],
    ['bc-mantenimiento', 'Afilado y mantenimiento básico', 'Según herramientas', 'grupo', 'Mantiene las herramientas controlables y seguras.', 'Usa el sistema compatible y aprende antes de salir.', 'Transporta piedras o limas protegidas.']
  ]],
  ['Alimentación, cocina y fuego', [
    ['bc-estufa', 'Estufa de camping y combustible', 'Esencial cuando no hay fuego', 'grupo', 'Permite cocinar sin depender de una fogata.', 'Comprueba reglas, estabilidad y combustible compatible.', 'Úsala ventilada y conforme al fabricante.'],
    ['bc-encendido', 'Encendedor, cerillos protegidos, ferrocerio y respaldo', 'Según el plan', 'grupo', 'Inician una estufa o un fuego contemplado en la salida.', 'Lleva métodos sencillos, redundantes y protegidos del agua; el ferrocerio no justifica encender una fogata.', 'Marca No aplica para fogata cuando exista prohibición.'],
    ['bc-control-fuego', 'Agua, pala y medio de extinción', 'Esencial si hay fuego', 'grupo', 'Permiten controlar y apagar por completo un fuego.', 'Dimensiona el agua y herramientas al sitio; usa el fogón existente cuando se exija.', 'No enciendas si no puedes extinguirlo o si cambian viento y restricciones.'],
    ['bc-olla', 'Olla metálica, taza y utensilios', 'Esencial', 'grupo', 'Resuelven agua caliente y alimentación.', 'Elige piezas estables y compatibles con la estufa.', 'Limpia sin verter restos en fuentes de agua.'],
    ['bc-alimentos', 'Alimentación, colaciones y reserva por día', 'Esencial', 'persona', 'Sostienen la actividad sin depender de recursos del lugar.', 'Planifica comidas, colaciones, agua y una reserva según duración, esfuerzo y necesidades personales. Prioriza alimentos nutritivos que puedas preparar con el método previsto.', 'No recolectes ni consumas recursos silvestres sin identificación experta y conocimiento local verificable. Empaca los residuos de comida y guarda los alimentos según las reglas de fauna.']
  ]],
  ['Agua, orientación y comunicación', [
    ['bc-agua', 'Recipientes de agua', 'Esencial', 'persona', 'Transportan agua segura al campamento.', 'Calcula capacidad según fuente, clima y duración.', 'No dependas de encontrar agua sin confirmación.'],
    ['bc-tratamiento', 'Filtro o tratamiento', 'Esencial', 'grupo', 'Reduce riesgos cuando la potabilidad no está confirmada.', 'Conoce los límites del método y lleva respaldo si la salida es remota.', 'Prueba y limpia el sistema.'],
    ['bc-navegacion', 'Mapa, brújula y mapa sin conexión', 'Esencial', 'grupo', 'Permiten llegar, regresar y ubicar salidas alternativas.', 'Usa cartografía vigente y conoce su lectura.', 'Registra acceso, vehículo y puntos críticos.'],
    ['bc-comunicacion', 'Teléfono, batería y comunicación de emergencia', 'Esencial', 'grupo', 'Permiten coordinar o pedir ayuda según cobertura.', 'Determina si necesitas un comunicador satelital.', 'Carga, protege y comparte el protocolo de emergencia.']
  ]],
  ['Seguridad, salud y residuos', [
    ['bc-botiquin', 'Botiquín para cortes y quemaduras', 'Esencial', 'grupo', 'Atiende incidentes dentro de la formación disponible.', 'Adáptalo a herramientas, fuego, distancia y personas.', 'Revisa caducidad y conoce el tiempo de evacuación.'],
    ['bc-frontal', 'Linterna frontal', 'Esencial', 'persona', 'Mantiene las manos libres de noche.', 'Revisa autonomía y resistencia a humedad.', 'Prueba y lleva energía compatible.'],
    ['bc-bano', 'Sistema sanitario del sitio', 'Esencial', 'grupo', 'Resuelve desechos humanos sin contaminar el sitio.', 'Confirma si debes retirar todo o si se permite otro método; incluye papel y lavado de manos.', 'No improvises ni entierres residuos donde esté prohibido.'],
    ['bc-basura', 'Bolsas estancas para retirar residuos', 'Esencial', 'grupo', 'Evitan dejar basura, restos de comida o material de práctica.', 'Separa residuos y protégelos de fauna.', 'Revisa el área antes de partir y retira cordajes y virutas.'],
    ['bc-alimentos-fauna', 'Resguardo para alimentos y residuos', 'Según el sitio', 'grupo', 'Ayuda a evitar que fauna acceda a comida y basura.', 'Consulta el método exigido: contenedor, gabinete, vehículo o sistema específico del destino.', 'No dejes comida ni basura en el refugio sin confirmar que es aceptable en la zona.'],
    ['bc-reparacion', 'Kit de reparación', 'Esencial', 'grupo', 'Resuelve fallos de refugio, mochila y equipo.', 'Incluye piezas compatibles y herramientas pequeñas.', 'Practica las reparaciones prioritarias.']
  ]]
];

const ULTRALIGHT_EQUIPMENT = [
  ['Sistema base y transporte', [
    ['ul-mochila', 'Mochila ligera de volumen adecuado', 'Esencial', 'persona', 'Transporta el sistema completo durante la ruta.', 'El volumen y el ajuste mandan: una mochila pequeña ayuda a no duplicar artículos, pero debe acomodar el equipo real, agua y comida sin forzar cierres ni sobrecargar la espalda.', 'Prueba el ajuste con peso total, no solo con el peso base. Reparte el equipo compartido según capacidad y experiencia.'],
    ['ul-liner', 'Bolsa interior impermeable', 'Esencial', 'persona', 'Mantiene seco el equipo crítico dentro de la mochila.', 'Protege por separado el sistema de dormir, ropa seca y electrónicos; la funda exterior por sí sola puede no bastar.', 'Cierra cada bolsa antes de caminar y revisa que no tenga perforaciones.'],
    ['ul-bascula', 'Báscula y lista de pesos', 'Esencial', 'grupo', 'Ayuda a decidir qué se lleva por función y qué sobra.', 'El peso base excluye comida, agua y combustible. Registra también esos consumibles para conocer el peso que realmente cargará cada integrante.', 'Pesa el conjunto completo antes de salir y anota lo que no usaste al volver.'],
    ['ul-reparacion', 'Kit mínimo de reparación', 'Esencial', 'grupo', 'Resuelve fallos pequeños del refugio, colchoneta o mochila.', 'Incluye solo materiales compatibles con el equipo que realmente llevas: parches, cinta y una pieza de repuesto esencial.', 'Practica las reparaciones principales en casa.']
  ]],
  ['Refugio y descanso', [
    ['ul-refugio', 'Tienda ligera, tarp o refugio', 'Esencial', 'grupo', 'Protege del clima, insectos y humedad durante la noche.', 'Una tienda ofrece un montaje más definido; un tarp puede reducir peso, pero exige elegir mejor el sitio y dominar el montaje. Selecciona según clima, exposición, insectos y habilidad del grupo.', 'Monta el sistema completo antes de la ruta. Nunca uses una estufa dentro del refugio.'],
    ['ul-estacas', 'Estacas, vientos y cordaje', 'Esencial', 'grupo', 'Aseguran y tensan el refugio.', 'Incluye el número compatible con tu configuración y el suelo esperado. El cordaje puede cumplir varias tareas si sabes usarlo.', 'Cuenta las piezas y revisa tensores antes de empacar.'],
    ['ul-saco', 'Saco de dormir o quilt', 'Esencial', 'persona', 'Aporta abrigo al descanso.', 'Elige el rango de temperatura para las noches previstas y para cada persona; un quilt o saco ligero no elimina la necesidad de aislamiento inferior.', 'Guárdalo seco dentro de la mochila y airea el sistema al regresar.'],
    ['ul-aislante', 'Aislante o colchoneta', 'Esencial', 'persona', 'Reduce la pérdida de calor hacia el suelo.', 'Compara aislamiento, comodidad, volumen y resistencia. Los inflables ahorran espacio, pero requieren cuidado y un método de reparación.', 'Pruébalo con el saco o quilt y verifica válvulas, inflador y parches.'],
    ['ul-suelo', 'Protector de suelo', 'Según el refugio', 'grupo', 'Protege la base cuando el sistema lo requiere.', 'Elige una pieza ajustada que no sobresalga ni recoja agua. No sustituye elegir un sitio adecuado.', 'Marca No aplica si tu refugio no lo necesita.']
  ]],
  ['Capas, lluvia y calzado', [
    ['ul-capas', 'Sistema de capas', 'Esencial', 'persona', 'Regula temperatura y humedad al caminar, detenerse y dormir.', 'Combina una capa que gestione humedad, abrigo para las pausas y protección exterior contra lluvia o viento. Cada prenda debe tener una función clara.', 'Guarda una capa seca exclusiva para dormir. Ajusta antes de sudar o enfriarte.'],
    ['ul-lluvia', 'Protección de lluvia y viento', 'Esencial', 'persona', 'Limita la exposición durante cambios de tiempo.', 'Chaqueta, pantalón o poncho se eligen por cobertura, ventilación, viento y experiencia. Un poncho puede cubrir mochila, pero es menos estable con viento.', 'Llévala accesible y revisa costuras, cierres y talla sobre las capas.'],
    ['ul-calcetines', 'Calcetines de marcha y par seco', 'Esencial', 'persona', 'Ayudan a cuidar los pies y mantener un cambio seco para la noche.', 'Usa materiales que gestionen humedad y lleva al menos un par de marcha y otro limpio para dormir, ajustando por duración y clima.', 'Atiende de inmediato puntos de roce y no duermas con calcetines húmedos.'],
    ['ul-calzado', 'Calzado ligero y ya probado', 'Esencial', 'persona', 'Sostiene los pies durante el desplazamiento.', 'Debe dejar espacio para los dedos y ser adecuado para carga, terreno, clima y experiencia. El calzado ligero puede exigir más atención a protección y durabilidad.', 'Estrénalo en caminatas cortas antes de una ruta de varios días.'],
    ['ul-sol', 'Sombrero, lentes y protección solar', 'Esencial', 'persona', 'Reduce la exposición al sol en la marcha.', 'Ajusta cobertura a altitud, sombra, clima y necesidades personales.', 'Déjalo accesible y sigue las indicaciones del producto.']
  ]],
  ['Agua, comida y cocina', [
    ['ul-agua', 'Botellas o depósito de agua', 'Esencial', 'persona', 'Transportan el agua entre fuentes.', 'Calcula la capacidad para el tramo más largo sin fuente confirmada, cocina y margen razonable. El agua es consumible, pero forma parte del peso real.', 'Revisa cierres y anota fuentes, distancia y litros previstos.'],
    ['ul-tratamiento', 'Tratamiento de agua y respaldo', 'Esencial', 'grupo', 'Permite tratar agua cuya potabilidad no está confirmada.', 'Comprueba qué cubre el método, sus límites con agua turbia, temperatura y mantenimiento. Elige un respaldo pequeño si la ruta depende de fuentes.', 'Prueba el sistema y sigue exactamente sus instrucciones de uso.'],
    ['ul-menu', 'Menú, colaciones y raciones por día', 'Esencial', 'persona', 'Aportan energía durante la ruta.', 'Planifica comidas y colaciones nutritivas según duración, esfuerzo, alergias, agua disponible, combustible y residuos. Ligero no significa comer menos de lo necesario.', 'Divide por día y deja una alternativa que no requiera cocción.'],
    ['ul-estufa', 'Estufa certificada, combustible y encendido', 'Según el menú', 'grupo', 'Permite cocinar cuando las reglas y condiciones lo permiten.', 'Revisa compatibilidad, autonomía, estabilidad y restricciones vigentes. No dependas de una fogata para alimentarte.', 'Cocina solo al aire libre y según el fabricante; nunca dentro de la tienda o el vestíbulo.'],
    ['ul-olla', 'Olla o taza, cuchara y limpieza mínima', 'Según el menú', 'persona', 'Resuelven preparación y consumo con pocas piezas.', 'Un recipiente versátil puede cubrir comida y bebida. Selecciona el tamaño a partir del menú y del grupo, no de una lista genérica.', 'Evita piezas duplicadas, retira restos de comida y lava lejos de fuentes de agua según las reglas locales.'],
    ['ul-fauna', 'Sistema autorizado para comida y residuos', 'Según el destino', 'grupo', 'Reduce el acceso de fauna a alimentos y basura.', 'Usa exactamente el método exigido por el destino: contenedor, gabinete o sistema autorizado.', 'Confirma la regla antes de elegir el sistema.']
  ]],
  ['Orientación, higiene y emergencia', [
    ['ul-mapa', 'Mapa, brújula y ruta sin conexión', 'Esencial', 'grupo', 'Permiten orientarse sin depender de señal móvil.', 'Lleva cartografía actual, salidas alternativas y puntos de agua. El teléfono o GPS complementa, pero no reemplaza la planificación.', 'Descarga mapas, protege el dispositivo y practica la ruta con el grupo.'],
    ['ul-energia', 'Batería externa y cable compatible', 'Según la duración', 'grupo', 'Mantiene disponible navegación y comunicación.', 'Calcula consumo por días y frío; una batería no crea cobertura móvil.', 'Carga y prueba todos los cables antes de partir.'],
    ['ul-frontal', 'Linterna frontal y energía compatible', 'Esencial', 'persona', 'Permite moverse y montar el campamento con las manos libres.', 'Revisa autonomía y controles. Cada persona debe saber dónde está su frontal.', 'Bloquea el encendido accidental y pruébala antes de salir.'],
    ['ul-botiquin', 'Botiquín y medicamentos personales', 'Esencial', 'grupo', 'Atiende incidentes dentro de la formación del grupo.', 'Adáptalo a personas, ruta, riesgos y tiempo de ayuda. Incluye solo elementos que sepan utilizar.', 'Revisa caducidades y mantenlo accesible.'],
    ['ul-higiene', 'Higiene, baño y residuos', 'Esencial', 'grupo', 'Permite mantener manos limpias y retirar los residuos requeridos.', 'Confirma el sistema sanitario del destino; lleva bolsas para retirar papel y productos de higiene cuando sea obligatorio. Mantén jabón y lavado lejos de fuentes de agua.', 'No entierres ni abandones productos de higiene.'],
    ['ul-emergencia', 'Silbato y refugio de emergencia', 'Esencial', 'persona', 'Aportan señalización y protección si el plan cambia.', 'Elige artículos simples y prácticos que cada integrante sepa localizar y usar.', 'Explícalos al grupo antes de caminar.']
  ]],
  ['Carga compartida en familia', [
    ['ul-compartido', 'Reparto de equipo compartido', 'Esencial', 'grupo', 'Distribuye refugio, tratamiento, cocina y reparación sin duplicarlos.', 'Reparte por tamaño, condición, experiencia y margen de cada persona. Los menores no deben cargar una cuota fija de adulto ni elementos que no puedan manejar.', 'Haz una prueba corta con el peso real y ajusta antes de la salida.'],
    ['ul-abrigo-menores', 'Abrigo, agua y alimento accesibles', 'Esencial', 'persona', 'Mantiene a cada integrante preparado entre descansos.', 'Cada menor debe tener sus capas, agua, colación, silbato y frontal adecuados, con supervisión adulta.', 'Revisa en cada parada frío, calor, cansancio, hambre y agua.'],
    ['ul-itinerario', 'Itinerario y contacto de salida', 'Esencial', 'grupo', 'Permite que otra persona sepa dónde buscar si el grupo no regresa.', 'Incluye ruta, campamento, vehículo, integrantes, horarios y criterio para pedir ayuda.', 'Compártelo antes de salir y avisa al regresar.']
  ]]
];

const TROPA_POCKET_EQUIPMENT = [
  ['tr-bolsillo-contenedor', 'Cangurera o bolsillos del uniforme', 'Esencial', 'persona', 'Mantienen reunido el equipo pequeño que acompaña al Scout en reuniones, excursiones y campamentos.', 'Usa bolsillos que cierren o una cangurera ligera que no limite el movimiento. Distribuye las piezas para que no formen bultos duros ni se pierdan al sentarse o caminar.', 'Colócatela con el uniforme, camina y agáchate. Confirma que cierre, que nada sobresalga y que puedas encontrar cada objeto sin vaciarla.'],
  ['tr-credencial', 'Credencial oficial de la ASMAC', 'Esencial', 'persona', 'Permite acreditar la identidad Scout cuando la actividad lo requiere.', 'Protégela de humedad y dobleces dentro de una funda o bolsillo cerrado. No escribas datos adicionales sobre la tarjeta.', 'Comprueba vigencia, legibilidad y que regrese siempre al mismo compartimento.'],
  ['tr-libreta', 'Libreta con contactos de emergencia', 'Esencial', 'persona', 'Sirve para registrar instrucciones, rutas, claves y teléfonos aunque no haya batería o señal.', 'Anota nombre, Patrulla y los teléfonos autorizados por la familia y la dirigencia. Usa una libreta pequeña protegida en una bolsa resellable.', 'Verifica que los números estén actualizados y que el Scout sepa a quién llamar y qué información comunicar.'],
  ['tr-lapiz', 'Bolígrafo o lápiz', 'Esencial', 'persona', 'Permite registrar indicaciones, croquis y mensajes durante la actividad.', 'Elige una pieza corta, resistente y con tapa o punta protegida. Un lápiz suele seguir funcionando con frío o humedad ligera.', 'Haz una prueba de escritura y guárdalo junto a la libreta sin riesgo de perforarla.'],
  ['tr-silbato', 'Silbato', 'Esencial', 'persona', 'Permite emitir una señal audible cuando la voz no alcanza.', 'Usa un silbato sin bola, de plástico resistente, sujeto con un cordón corto o clip que no rodee el cuello. Su uso y señales deben acordarse con los Scouters.', 'Prueba su funcionamiento al aire libre y confirma que el Scout conoce cuándo utilizarlo; no se usa como juguete.'],
  ['tr-costurero', 'Costurero básico', 'Según el programa', 'persona', 'Resuelve desprendimientos sencillos de botones o pequeñas costuras del uniforme.', 'Incluye dos agujas protegidas, hilos del color del uniforme, botones y seguros dentro de una caja rígida pequeña. Las puntas nunca deben viajar sueltas.', 'Cuenta las piezas, cierra la caja y practica una reparación sencilla antes de depender del kit.'],
  ['tr-paliacates', 'Dos pañuelos o paliacates', 'Esencial', 'persona', 'Cumplen funciones autorizadas de señalización, protección y práctica Scout.', 'Llévalos limpios, secos y doblados. No sustituyen material médico ni equipo diseñado para soportar cargas.', 'Comprueba que sean reconocibles y que uno quede accesible sin desordenar el resto.'],
  ['tr-transporte', 'Dinero y tarjeta de transporte', 'Según la salida', 'persona', 'Permiten resolver el traslado o una llamada cuando el programa lo contempla.', 'Lleva solo la cantidad acordada, separada del alimento y protegida en un compartimento cerrado. La tarjeta debe tener saldo comprobado.', 'Cuenta el dinero con la familia, verifica el saldo y registra dónde se guarda.'],
  ['tr-gis', 'Gis o tiza', 'Según la actividad', 'persona', 'Sirve para ejercicios de señales o claves sobre superficies autorizadas.', 'Transporta uno o dos trozos dentro de una bolsa pequeña para evitar que manchen o se pulvericen.', 'Confirma que la actividad lo solicita y que su uso está permitido en el lugar.'],
  ['tr-piola', 'Piola de trabajo de 5 m', 'Esencial', 'persona', 'Permite practicar nudos, amarres sencillos y tareas de campismo.', 'Usa cuerda o paracord de 4 a 5 mm, flexible y en buen estado. Remata los extremos y enróllala sin nudos para evitar enredos.', 'Extiéndela, revisa cortes o zonas quemadas y practica el enrollado antes de guardarla. No se utiliza para asegurar personas.'],
  ['tr-salud', 'Ficha de salud personal confirmada', 'Esencial', 'persona', 'Permite que la dirigencia disponga de información médica vigente ante una emergencia.', 'Completa el formato oficial con la familia y entrégalo según el protocolo del Grupo. El checklist confirma su recepción; no expone el historial médico dentro de la cangurera.', 'Confirma con la persona responsable que la ficha está actualizada, firmada y resguardada antes de participar.']
];

const TROPA_ATTACK_EQUIPMENT = [
  ['tr-mochila-ataque', 'Mochila de ataque o excursión', 'Esencial', 'persona', 'Transporta lo necesario durante una excursión sin cargar la mochila completa de campamento.', 'Elige el volumen según duración, clima y material solicitado. Debe ajustar al torso, cerrar sin forzarse y mantener el peso estable cerca de la espalda.', 'Carga el equipo real, ajusta tirantes y correa de pecho y camina al menos diez minutos. Todo debe quedar dentro y las manos libres.'],
  ['tr-agua', 'Agua para la actividad', 'Esencial', 'persona', 'Mantiene una reserva individual controlable durante el recorrido.', 'La dirigencia define la cantidad según duración, clima, esfuerzo y recargas seguras. Usa una botella identificada, fácil de limpiar y con cierre firme.', 'Llénala con agua potable, inviértela para comprobar fugas y colócala accesible sin que pueda caer.'],
  ['tr-alimento', 'Snack, lonche o ración de marcha', 'Esencial', 'persona', 'Aporta alimento suficiente para el horario y esfuerzo previstos.', 'Elige la cantidad conforme al programa: snack para pocas horas o una o más comidas para jornada completa. Evita alimentos que requieran frío si no existe conservación segura.', 'Revisa alergias, fecha, empaque y residuos previstos. El Scout debe poder abrirlo y volver a guardar la basura.'],
  ['tr-impermeable', 'Impermeable, poncho o rompevientos', 'Según el pronóstico', 'persona', 'Reduce la exposición a lluvia y viento durante el recorrido.', 'Elige una prenda que cubra el cuerpo y permita caminar con la mochila. Un rompevientos repelente no sustituye un impermeable en lluvia sostenida.', 'Pruébatelo sobre las demás capas y guárdalo en un compartimento accesible, no al fondo.'],
  ['tr-abrigo', 'Capa de abrigo', 'Según el clima', 'persona', 'Conserva calor durante descansos, viento o descenso de temperatura.', 'Usa polar, fleece o prenda térmica adecuada a la mínima prevista. Debe caber bajo la protección exterior y mantenerse seca.', 'Pruébate el sistema completo y guarda la capa protegida dentro de una bolsa seca.'],
  ['tr-sombrero', 'Gorra o sombrero', 'Según exposición', 'persona', 'Protege cabeza y rostro frente a radiación y calor.', 'Elige cobertura acorde con altitud, sombra y duración; debe quedar firme sin impedir visión ni audición.', 'Ajusta la talla y déjalo accesible desde el inicio del recorrido.'],
  ['tr-bloqueador', 'Bloqueador solar', 'Según exposición', 'persona', 'Complementa la ropa para reducir exposición solar en piel descubierta.', 'Usa el producto acordado por la familia, dentro de su vigencia y siguiendo etiqueta, cantidad y reaplicación. Protégelo de derrames.', 'Comprueba cierre y fecha; colócalo en bolsa resellable y aplícalo antes de la exposición.'],
  ['tr-repelente', 'Repelente de insectos', 'Según el sitio', 'persona', 'Reduce picaduras cuando el destino y la temporada lo requieren.', 'Usa un producto apropiado para la edad y sigue la etiqueta. No se aplica sobre ojos, boca, heridas ni manos que llevarán alimento.', 'Revisa cierre, vigencia y posibles restricciones; transpórtalo en bolsa resellable.'],
  ['tr-frontal', 'Linterna frontal y energía compatible', 'Según horario y contingencia', 'persona', 'Permite orientarse y trabajar con ambas manos si oscurece o existe retraso.', 'Usa una frontal resistente a salpicaduras y con autonomía suficiente. Protege baterías o cable y batería externa compatibles.', 'Enciende todos los modos, revisa la cinta y bloquea el botón para evitar que se active dentro de la mochila.'],
  ['tr-orientacion', 'Mapa o croquis y brújula', 'Según la actividad', 'persona', 'Permiten seguir la ruta acordada y practicar orientación sin depender de un solo teléfono.', 'Lleva el material indicado por la dirigencia, protegido del agua. El mapa debe corresponder al recorrido y la brújula debe estar lejos de imanes y electrónicos al leerla.', 'Ubica salida, destino, puntos de reunión y norte antes de caminar; no basta con llevarlos si no sabes utilizarlos.'],
  ['tr-botiquin', 'Botiquín de uso personal', 'Esencial', 'persona', 'Reúne insumos personales definidos por el Grupo para atender incidentes menores dentro de la capacitación disponible.', 'Usa un estuche pequeño, identificado y protegido de humedad. El contenido y cualquier medicamento se gestionan conforme al protocolo de la dirigencia; no se improvisan tratamientos.', 'Revisa inventario, caducidades y empaques. Confirma quién administra medicamentos y cómo solicitar ayuda.'],
  ['tr-residuos', 'Bolsa para residuos o equipo húmedo', 'Esencial', 'persona', 'Permite retirar envolturas y separar artículos mojados sin contaminar el resto del equipo.', 'Usa una bolsa resistente y resellable del tamaño necesario. No mezcles basura con alimento ni dejes residuos en la ruta.', 'Comprueba el cierre y vacíala, límpiala o reemplázala después de cada actividad.'],
  ['tr-herramientas', 'Herramientas autorizadas para la actividad', 'Solo con indicación', 'persona', 'Reúne únicamente la navaja, cuerda adicional u otro material solicitado para una tarea concreta.', 'Incluye cada herramienta solo con autorización, capacitación y método seguro de transporte. Protege filos y separa cualquier pieza que pueda perforar la mochila.', 'La dirigencia confirma qué se lleva y quién puede usarlo. Si no fue solicitado, marca “No se necesita”.']
];

const SCOUT_EQUIPMENT = [
  ['Documentos de salida Scout', [
    ['sc-ficha-salud', 'Ficha de salud Scout actualizada', 'Esencial', 'persona', 'Permite que la dirigencia conozca antecedentes, alergias, medicamentos, restricciones y contactos necesarios para responder ante una emergencia.', 'Completa el formato oficial que entrega la dirigencia. Actualiza cualquier cambio médico, tratamiento, dosis, horario y contacto; entrégalo cerrado y conforme al protocolo de privacidad del Grupo Scout.', 'Confirma antes de la fecha límite que todos los campos y firmas están completos y que la persona responsable de la salida registró su recepción.'],
    ['sc-autorizacion', 'Ficha de autorización de salida Scout', 'Esencial', 'persona', 'Acredita que madre, padre o tutor conoce y autoriza la actividad específica.', 'Usa únicamente el formato entregado por la dirigencia. Verifica nombre de la actividad, lugar, fechas, horarios, transporte, teléfonos y los consentimientos que solicite el documento.', 'Entrega el original firmado dentro del plazo y confirma su recepción; una foto o un mensaje no sustituyen el formato si la dirigencia no lo autoriza.']
  ]],
  ['Equipo personal', [
    ['sc-saco-dormir', 'Saco o bolsa de dormir', 'Esencial', 'persona', 'Conserva el aire caliente alrededor del cuerpo y permite recuperar energía durante la noche.', 'Elige por la temperatura de confort indicada por el fabricante y compárala con la mínima prevista y con la sensibilidad al frío del Scout. Transpórtalo dentro de una bolsa impermeable; no dependas de la temperatura límite para planear.', 'Comprueba cierre, capucha y talla. Pruébalo con la ropa de dormir; al regresar, ventílalo y guárdalo sin compresión prolongada.'],
    ['sc-aislante', 'Aislante o colchoneta para dormir', 'Esencial', 'persona', 'Reduce la pérdida de calor hacia el suelo y aporta una superficie estable para descansar.', 'Elige tamaño suficiente para torso y cadera. Para frío, revisa el valor R; si es inflable, prueba válvula y fugas y lleva el sistema de reparación indicado por el fabricante. La espuma de celda cerrada es sencilla y resistente.', 'Extiéndelo y recuéstate antes de salir. Confirma que no pierda aire, que quepa en la tienda y que viaje protegido de perforaciones.'],
    ['sc-ropa-base', 'Ropa base', 'Esencial', 'persona', 'Aleja humedad de la piel y ayuda a regular la temperatura durante la actividad.', 'Usa talla correcta y tejido sintético o lana merino cuando se espere frío o humedad. Prepara una muda completa y reserva un conjunto seco exclusivamente para dormir.', 'Comprueba que cada prenda esté seca e identificada; evita algodón como capa principal si existe riesgo de lluvia, sudor o bajas temperaturas.'],
    ['sc-segunda-capa', 'Segunda capa de abrigo', 'Esencial', 'persona', 'Retiene calor sobre la ropa base sin impedir el movimiento.', 'Elige polar, fleece o lana con el grosor adecuado a la mínima prevista. Debe permitir levantar brazos y trabajar con la capa exterior puesta.', 'Pruébate el sistema completo y guarda esta prenda seca en una bolsa interior. No sustituyas el abrigo con varias prendas húmedas de algodón.'],
    ['sc-tercera-capa', 'Tercera capa: chamarra o rompevientos', 'Esencial', 'persona', 'Reduce la pérdida de calor por viento y añade protección durante actividad y descanso.', 'Elige rompevientos o chamarra según pronóstico, altitud y tiempo de exposición. Debe cerrar en cuello y puños y permitir usar debajo las dos primeras capas.', 'Revisa cierre, ajuste y libertad de movimiento. Si no tiene construcción impermeable y costuras selladas, no la cuentes como protección contra lluvia.'],
    ['sc-impermeable', 'Impermeable con capucha', 'Esencial', 'persona', 'Mantiene secas las capas de abrigo y reduce el enfriamiento por lluvia y viento.', 'Usa una prenda reutilizable de talla correcta, con capucha, cierres funcionales y costuras protegidas. Debe cubrir el torso y permitir caminar y trabajar sin engancharse.', 'Pruébatelo sobre todas las capas y verifica que el agua no atraviese tela, cierres ni costuras. La funda de mochila no sustituye el impermeable personal.'],
    ['sc-calzado-extra', 'Calzado extra y calcetines secos', 'Esencial', 'persona', 'Permite cambiar calzado mojado o sucio y mantener los pies secos en el campamento.', 'Lleva un par cerrado, cómodo, con suela en buen estado y ya usado antes de la salida. Empácalo limpio y separado de ropa y comida.', 'Comprueba talla, agujetas y suela; incluye al menos un par de calcetines secos reservado para utilizar con este calzado.'],
    ['sc-uniforme', 'Uniforme Scout completo', 'Según el programa', 'persona', 'Permite participar con la indumentaria indicada para ceremonia, formación o actividad.', 'Confirma con la dirigencia qué prendas, pañoleta y distintivos se usarán y en qué momento. Lleva el uniforme limpio, completo, identificado y protegido de humedad.', 'Realiza una revisión pieza por pieza. Marca “No se necesita” solo cuando la dirigencia indique que el programa no lo requiere.'],
    ['sc-vajilla', 'Plato, taza y cubiertos', 'Esencial', 'persona', 'Proporciona un juego individual reutilizable y evita compartir utensilios.', 'Usa piezas resistentes, aptas para alimentos, fáciles de lavar y claramente identificadas. Incluye una bolsa transpirable o paño para transportarlas después de secar.', 'Cuenta todas las piezas, revisa bordes y mangos y confirma que el conjunto esté limpio y completamente seco.'],
    ['sc-agua-personal', 'Botella de agua personal', 'Esencial', 'persona', 'Mantiene una reserva individual controlable durante actividades y traslados.', 'Define la capacidad con la dirigencia según clima, recorrido y puntos seguros de recarga. Usa un recipiente reutilizable, identificable, de cierre firme y fácil limpieza.', 'Llénala en la fuente potable acordada, inviértela para comprobar fugas y evita compartir la boquilla.'],
    ['sc-mochila-personal', 'Mochila personal de día', 'Según el programa', 'persona', 'Transporta agua, colación, capas, frontal y material de actividad fuera del campamento base.', 'Dimensiona la mochila por la actividad, no por el equipo disponible. Distribuye la carga cerca de la espalda y conserva agua, impermeable y mapa en puntos accesibles.', 'Cárgala con el contenido real, ajusta tirantes y pecho y confirma que cierre sin piezas colgantes. Marca “No se necesita” si el programa no incluye recorridos.']
  ]],
  ['Campamento y construcciones', [
    ['sc-tienda', 'Casa de campaña', 'Esencial', 'patrulla', 'Proporciona refugio para dormir y protege de viento, precipitación e insectos.', 'Asigna ocupantes según la capacidad útil, considerando el espacio del equipo. Prefiere doble techo, ventilación regulable y costuras en buen estado. La Patrulla debe conocer el orden de montaje sin forzar varillas ni cierres.', 'Móntala completa antes de salir. Cuenta cuerpo, doble techo, varillas, estacas, vientos y bolsa; revisa rasgaduras, elástico de varillas y cierres.'],
    ['sc-huella', 'Protector de suelo o huella', 'Esencial', 'patrulla', 'Reduce abrasión y humedad directa sobre el piso de la tienda.', 'Usa una huella del tamaño de la base o recorta el protector ligeramente menor; ningún borde debe sobresalir porque canalizaría lluvia debajo de la tienda.', 'Colócala con la tienda montada y verifica que no asome. Límpiala, sécala y guárdala separada si quedó húmeda o con tierra.'],
    ['sc-lona-tienda', 'Lona para protección de la tienda', 'Según el clima', 'patrulla', 'Añade sombra o una segunda barrera de lluvia cuando el sitio y el pronóstico lo requieren.', 'Tiéndela con anclajes independientes, pendiente continua y separación suficiente para que no roce ni aplaste el doble techo. Dirige el escurrimiento lejos de entradas y de otras tiendas.', 'Practiquen la configuración, cuenten cuerdas y anclajes y comprueben que no forme bolsas de agua ni dependa de vegetación frágil.'],
    ['sc-lona-comun', 'Lona o tarp para el área común', 'Esencial', 'patrulla', 'Crea un espacio protegido para reunión, comedor o cocina de la Patrulla.', 'Calcula cobertura para las personas y la actividad. Monta un punto alto y uno bajo para evacuar agua, orienta el lado bajo hacia el viento y deja rutas de entrada libres.', 'Marca vientos a la altura de paso, revisa tensión y escurrimiento. No uses fuego ni estufa bajo una lona baja, cerrada o sin la separación indicada por el fabricante y la dirigencia.'],
    ['sc-estacas', 'Estacas, vientos y tensores', 'Esencial', 'patrulla', 'Mantienen tiendas y lonas ancladas y con la geometría necesaria para evacuar agua y resistir viento.', 'Selecciona estacas compatibles con suelo blando, duro o arenoso. Instálalas inclinadas en sentido contrario a la tensión y usa todos los puntos previstos cuando haya viento o lluvia.', 'Cuenta las piezas y lleva repuestos. Revisa tensores después del montaje, lluvia o cambio de temperatura y elimina riesgos de tropiezo.'],
    ['sc-bordones', 'Bordones o postes para construcciones', 'Según el plan', 'patrulla', 'Forman la estructura de mesas, alacenas, portadas u otras astucias previstas.', 'Define el diseño antes de salir y lleva cantidades, longitudes y diámetros adecuados. Descarta piezas rajadas, podridas, con astillas peligrosas o deformación.', 'Comprueba material y amarres con el responsable. No cortes vegetación viva ni construyas estructuras para soportar personas sin autorización y supervisión.'],
    ['sc-cuerdas', 'Cuerdas para construcciones y nudos', 'Según el plan', 'patrulla', 'Permiten realizar amarres, anclajes y tensores con una función definida.', 'Separa cuerdas por longitud y uso; remata extremos e inspecciona cortes, abrasión, rigidez o daño por calor. Practica el nudo o amarre específico antes de construir.', 'Etiqueta y enrolla cada cuerda. No uses cordaje de campamento para asegurar personas ni para una carga crítica si no fue diseñado y autorizado para ello.'],
    ['sc-banderin', 'Banderín de patrulla', 'Según el programa', 'patrulla', 'Identifica el rincón y refuerza la vida de Patrulla.', 'Transporta banderín y soporte protegidos. Elige un punto visible que no interfiera con vientos, cocina, circulación o salida de las tiendas.', 'Prueba que el soporte sea estable y que ninguna punta, cuerda o asta pueda caer sobre personas o refugios.'],
    ['sc-actividades', 'Material para actividades', 'Según el programa', 'patrulla', 'Reúne los recursos exactos para juegos, talleres, servicios y retos programados.', 'Haz una lista por actividad con cantidad, responsable y requisito de seguridad. Separa el material en bolsas o cajas identificadas en el orden en que se usará.', 'Ensaya lo que requiera montaje, cuenta el material antes de salir y repite el inventario antes de levantar campamento.']
  ]],
  ['Cocina de patrulla', [
    ['sc-estufa', 'Estufa portátil', 'Esencial', 'patrulla', 'Permite cocinar de manera controlada sin depender de una fogata.', 'Usa una estufa estable y compatible con el tamaño de las ollas. La persona asignada debe conocer encendido, regulación y apagado conforme al fabricante. Colócala al aire libre sobre base firme y no combustible.', 'Prueba el sistema antes de salir. Revisa soportes, roscas, manguera y válvula; nunca la enciendas dentro de tienda, vehículo o espacio cerrado.'],
    ['sc-gas', 'Gas o combustible compatible', 'Esencial', 'patrulla', 'Aporta la energía calculada para el menú y la duración del campamento.', 'Utiliza exactamente el combustible y conexión indicados por la estufa. Calcula por número de comidas, tiempo de cocción y frío, con un margen acordado por la dirigencia.', 'Inspecciona envases y sello, prueba conexiones con el equipo frío y transporta el combustible protegido del calor. No rellenes cartuchos desechables.'],
    ['sc-ollas', 'Ollas, sartén y tapas', 'Esencial', 'patrulla', 'Permiten preparar las porciones del menú con estabilidad y menor consumo de combustible.', 'Elige diámetro compatible con la estufa y capacidad por número de raciones. Usa tapas ajustadas y mangos firmes; evita recipientes que sobresalgan del soporte o resulten inestables.', 'Simula una comida con agua, cuenta tapas y asas y elimina piezas sin función. Guarda el conjunto limpio y seco.'],
    ['sc-utensilios', 'Utensilios de cocina', 'Esencial', 'patrulla', 'Sirven para cortar, mezclar, cocinar y servir sin improvisaciones ni contaminación cruzada.', 'Deriva la lista del menú: cuchillo con funda, tabla, cucharón, espátula, pinzas y abrelatas solo si se requieren. Separa utensilios de alimento crudo de los listos para consumo.', 'Protege filos, prueba mangos y abrelatas y asigna un estuche. Cada utensilio debe tener una receta o tarea concreta.'],
    ['sc-agua-cocina', 'Recipiente para agua de cocina', 'Esencial', 'patrulla', 'Mantiene agua potable disponible para cocinar, beber y lavarse las manos.', 'Usa un bidón apto para agua potable, con tapa y llave o vertedor; nadie debe introducir manos o vasos. Identifica por separado agua potable y recipiente de agua usada.', 'Lava y desinfecta el bidón, comprueba que no gotee y define fuente, capacidad, recargas y responsable antes de salir.'],
    ['sc-despensa', 'Despensa, menú y raciones', 'Esencial', 'patrulla', 'Asegura alimento suficiente y permite coordinar ollas, combustible, conservación y residuos.', 'Planea por día y comida según asistentes reales, alergias, actividad, preparación y agua disponible. Mantén los perecederos a 4 °C o menos y evita llevarlos si no puedes conservar la cadena de frío.', 'Etiqueta cada comida, comprueba cantidades y fechas y guarda crudos separados de alimentos listos para comer. Incluye una alternativa sencilla que no requiera cocción.'],
    ['sc-lavado', 'Lavado y manejo de aguas usadas', 'Esencial', 'patrulla', 'Evita residuos de comida, olores, fauna atraída y contaminación del lugar.', 'Retira sólidos antes de lavar. Usa el punto y método indicados por el sitio y la dirigencia; mantén esponja, jabón, recipientes y paño separados del agua potable.', 'Define quién instala y vacía el sistema. Nunca viertas grasa, comida o agua de lavado directamente en ríos, lagos, manantiales o desagües no autorizados.']
  ]],
  ['Seguridad, higiene y organización', [
    ['sc-botiquin', 'Botiquín grupal', 'Esencial', 'patrulla', 'Apoya la atención inicial dentro de la capacitación disponible mientras se activa el protocolo de emergencia.', 'Adapta contenido a participantes, duración, entorno y tiempo de acceso a ayuda. Ordena por función, protege de humedad y separa medicamentos personales identificados conforme al protocolo del Grupo.', 'La persona responsable revisa inventario, caducidades y consumos y conoce ubicación, contactos, ruta de evacuación y límites de su capacitación.'],
    ['sc-frontal', 'Linterna frontal y energía compatible', 'Esencial', 'persona', 'Permite desplazarse y trabajar con ambas manos durante la noche.', 'Cada Scout lleva una frontal resistente a salpicaduras, fácil de operar y con autonomía para todas las noches. Protege baterías de repuesto o cable y batería externa compatibles.', 'Enciende todos los modos, revisa cinta y cierre y bloquea el botón para evitar encendido dentro de la mochila. Guárdala siempre en el mismo bolsillo accesible.'],
    ['sc-higiene', 'Higiene personal y lavado de manos', 'Esencial', 'persona', 'Reduce la transmisión de enfermedades durante comida, cocina y uso de sanitarios.', 'Incluye cepillo, pasta, jabón, papel y artículos personales compatibles con los servicios del sitio. Instala un punto de lavado con agua, jabón y secado antes de cocinar o comer y después de ir al baño.', 'Mantén productos cerrados y lejos de fuentes naturales de agua. Retira papel y productos de higiene cuando el lugar lo indique.'],
    ['sc-residuos', 'Bolsas para residuos y reciclaje', 'Esencial', 'patrulla', 'Permiten contener restos, evitar fauna y dejar el lugar sin residuos.', 'Reduce envases antes de salir y separa reciclables, basura y restos conforme al sistema del destino. Usa bolsas resistentes dentro de un contenedor cerrado y fuera del área de descanso.', 'Asigna responsable, revisa cierres después de cada comida y retira todo si no existe recolección. Haz una inspección final del rincón y rutas de acceso.'],
    ['sc-mapa', 'Mapa, itinerario y contactos', 'Esencial', 'patrulla', 'Permite orientarse, comunicar el plan y activar ayuda ante retraso o cambio de ruta.', 'Prepara mapa impreso, ruta principal y alternativa, puntos de reunión, horarios, coordenadas del campamento y contactos del sitio y servicios de emergencia. Descarga el mapa digital para uso sin conexión.', 'Entrega una copia a una persona externa con hora de retorno y criterio de alerta. Confirma cobertura, batería y que la Patrulla puede ubicar el campamento sin depender de un solo teléfono.']
  ]],
  ['Empacado y control final', [
    ['sc-mochila-campamento', 'Mochila de campamento y bolsa interior', 'Esencial', 'persona', 'Transporta el equipo personal de forma estable y mantiene secos los artículos críticos.', 'Elige la capacidad por duración y volumen real. Ajusta el largo de torso; el cinturón lumbar debe apoyar sobre la cadera. Coloca lo pesado cerca de la espalda y usa una bolsa interior resistente para saco, ropa seca y electrónica.', 'Carga todo dentro, sin objetos colgando. Camina al menos diez minutos con la carga real y corrige puntos de presión, balance, cierres y acceso al impermeable y al agua.'],
    ['sc-bazar', 'Bazar personal antes y después del campamento', 'Esencial', 'persona', 'Permite detectar faltantes, daños, duplicados y artículos que no corresponden al programa.', 'Extiende el equipo por categorías y compáralo con esta lista. Identifica cada pieza y asigna una ubicación fija dentro de la mochila. Al volver, repite el inventario antes de guardar.', 'Prueba cierres, luces y recipientes; separa de inmediato lo húmedo o dañado para limpiar, secar, reparar o reponer.'],
    ['sc-lista', 'Lista de participantes y control de grupo', 'Esencial', 'patrulla', 'Permite cerrar la preparación sabiendo quién participa y conservar un control confiable durante toda la salida.', 'Usa la lista oficial con nombres, patrullas, responsables y contactos autorizados. La dirigencia conserva documentos médicos y permisos con acceso restringido y protegidos de humedad.', 'Confirma la lista definitiva antes de partir y realiza conteos al salir, subir o bajar del transporte, cambiar de zona y regresar. Registra cualquier cambio y evita exhibir datos personales.']
  ]]
];

const MANADA_EQUIPMENT = [
  ['Revisión antes de salir', [
    ['mn-carga', 'Práctica de carga con manos libres', 'Esencial', 'persona', 'Comprueba que puede llevar mochila de campamento, mochila de ataque y cangurera con seguridad.', 'Ajusta tallas y peso a la edad, condición y recorrido. No añadas una carga fija por cumplir una lista.', 'Caminen unos minutos en casa y corrijan tirantes, bultos sueltos y objetos que golpeen.'],
    ['mn-uniforme', 'Uniforme completo', 'Según el programa', 'persona', 'Permite llegar con la indumentaria que solicita la actividad Scout.', 'Confirma con la jefatura qué piezas se usarán y cuándo se cambia de ropa.', 'Marca No aplica si el programa no lo requiere.'],
    ['mn-marcado', 'Todo el equipo marcado con el nombre de Manada', 'Esencial', 'persona', 'Permite reconocer a quién pertenece cada artículo y reduce pérdidas o confusiones durante la salida.', 'Cada Lobato o Lobezna adopta un nombre de Manada. Madres, padres o tutores deben usar ese nombre para marcar ropa, calzado, cangurera, ambas mochilas, vajilla y equipo de descanso con plumón indeleble o con una etiqueta resistente y bien fijada.', 'Comprueba que el nombre de Manada individual sea legible, que la marca no se desprenda y que aparezca también en artículos similares a los de otros integrantes.'],
    ['mn-bazar', 'Bazar personal antes y después del campamento', 'Esencial', 'persona', 'Permite comprobar que el equipo está completo y que nada inadecuado viaja en la mochila.', 'Extiendan el equipo con calma antes de empacar y repitan la revisión antes de regresar.', 'El lobato nombra sus artículos mientras los guarda; así aprende a reconocerlos y cuidarlos.'],
    ['mn-empacado-final', 'Empacado final de la mochila', 'Esencial', 'persona', 'Comprueba que el Lobato o Lobezna puede guardar, localizar y transportar su equipo de manera segura.', 'Guarden primero el equipo que se utilizará al final y dejen accesibles impermeable, abrigo y artículos de uso inmediato. Distribuyan el peso cerca de la espalda y eviten bultos duros contra el cuerpo.', 'Todo debe quedar dentro, sin piezas colgando. La mochila debe cerrar sin quedar forzada y el Lobato o Lobezna debe poder caminar, agacharse y mantener las manos libres.'],
  ]],
  ['Mochila y organización', [
    ['mn-mochila-propia', 'Mochila de campismo de aproximadamente 40 litros', 'Esencial', 'persona', 'Transporta todo el equipo de campamento dejando las manos libres.', 'Elige una mochila de talla chica o extra chica, preferentemente diseñada para niña o niño, de aproximadamente 40 litros y con cinturón lumbar. Debe ajustarse al torso sin quedar demasiado grande.', 'Guarda todo dentro: nada debe ir colgando. Comprueba que cierre sin quedar apretada y que el Lobato o Lobezna pueda sacar sus cosas sin vaciarla por completo.'],
    ['mn-fondo', 'Bolsa de basura como fondo de mochila', 'Esencial', 'persona', 'Aporta una barrera sencilla contra humedad dentro de la mochila de campamento.', 'Colócala abierta antes de organizar el equipo; no reemplaza bolsas individuales estancas.', 'Incluye una bolsa extra para residuos o ropa húmeda.'],
    ['mn-bolsas', 'Bolsas resellables o estancas', 'Esencial', 'persona', 'Protegen de humedad y ayudan a ordenar ropa y artículos pequeños.', 'Agrupa por función: dormir, aseo, cambio de ropa y documentos.', 'Saca el aire, cierra y etiqueta cada bolsa para que el lobato la reconozca.']
  ]],
  ['Equipo de bolsillo · cangurera', [
    ['mn-paliacates', 'Dos paliacates', 'Esencial', 'persona', 'Sirven para las actividades que marque el programa.', 'Guárdalos limpios y secos dentro de la cangurera.', 'Comprueba que el lobato pueda encontrarlos y guardarlos.'],
    ['mn-piola', 'Piola de máximo 2 metros', 'Esencial', 'persona', 'Cubre usos sencillos de programa sin llevar cordaje excesivo.', 'Mantén la longitud máxima indicada y enróllala para que no se enrede.', 'No la uses para trepar, cargar peso ni sustituir equipo de seguridad.'],
    ['mn-escritura', 'Lápiz o pluma y libreta pequeña', 'Esencial', 'persona', 'Permiten registrar actividades, notas o indicaciones.', 'Protege la libreta dentro de una bolsa resellable.', 'Revisa que el lápiz tenga punta o la pluma tenga tinta.'],
    ['mn-costurero', 'Costurero pequeño', 'Según el programa', 'persona', 'Atiende una reparación menor de ropa o distintivos.', 'Incluye solo lo que el lobato pueda usar bajo supervisión.', 'Guárdalo cerrado y marca No aplica si la jefatura no lo solicita.'],
    ['mn-credencial', 'Credencial Scout vigente', 'Esencial', 'persona', 'Identifica al participante cuando la actividad la solicita.', 'Resguárdala de humedad junto con la agenda Scout.', 'Verifica vigencia antes del campamento.'],
    ['mn-dinero', 'Dinero para imprevistos', 'Según indicación', 'persona', 'Permite atender un gasto autorizado por la familia o jefatura.', 'La familia define monto, resguardo y uso; no debe quedar suelto.', 'Guárdalo de forma discreta y marca No aplica si no se solicita.'],
    ['mn-agenda', 'Agenda Scout', 'Según el programa', 'persona', 'Conserva información de actividades y progresión.', 'Protégela en una bolsa resellable.', 'Llévala solo si está solicitada para la salida.']
  ]],
  ['Mochila de ataque', [
    ['mn-mochila-ataque', 'Mochila de ataque de 15 a 20 litros', 'Esencial', 'persona', 'Transporta el equipo necesario para una actividad, excursión o recorrido corto dejando las manos libres.', 'Elige una mochila de capacidad adecuada, aproximadamente de 15 a 20 litros, que ajuste bien al cuerpo del Lobato o Lobezna y permita guardar todo el equipo dentro.', 'Carga los artículos reales y comprueba que nada quede colgado por fuera. La mochila debe cerrar sin quedar apretada y permitir sacar agua, impermeable o abrigo sin vaciarla por completo.'],
    ['mn-snack', 'Almuerzo o snack nutritivo', 'Esencial', 'persona', 'Aporta energía durante actividades de día.', 'Elige alimentos que pueda abrir, comer y guardar sin ayuda, considerando alergias y residuos.', 'Evita depender de productos que requieran refrigeración si no está disponible.'],
    ['mn-agua', 'Botella de agua reutilizable', 'Esencial', 'persona', 'Mantiene hidratación durante el programa.', 'Debe cerrar bien, tener capacidad adecuada y estar marcada con nombre.', 'Llénala antes de salir y comprueba que no gotee.'],
    ['mn-sol', 'Repelente y bloqueador solar', 'Según las condiciones', 'persona', 'Ayudan a reducir picaduras y exposición solar cuando la actividad lo requiere.', 'Un adulto elige productos apropiados para la edad y verifica su uso conforme a la etiqueta y las indicaciones de la familia o jefatura.', 'Llévalos cerrados en una bolsa resellable y accesibles para que un adulto supervise la aplicación.'],
    ['mn-gorra', 'Gorra o sombrero', 'Esencial', 'persona', 'Aporta sombra y protege cabeza, rostro y parte del cuello durante actividades al aire libre.', 'Elige una pieza ventilada, de talla correcta y que permanezca puesta al caminar; un sombrero de ala ofrece mayor cobertura que una gorra.', 'Márcala con el nombre de Manada individual y colócala antes de iniciar la actividad, no al fondo de la mochila.'],
    ['mn-impermeable', 'Impermeable reutilizable', 'Esencial', 'persona', 'Protege durante lluvia o viento.', 'Revisa talla, capucha y que pueda ponérselo sin ayuda.', 'No uses uno desechable como protección principal.'],
    ['mn-sueter', 'Suéter o capa de abrigo', 'Esencial', 'persona', 'Permite responder a cambios de temperatura.', 'Usa una prenda que ya conozca y pueda guardar en su mochila.', 'Comprueba que quede seca al iniciar.']
  ]],
  ['Sistema de descanso', [
    ['mn-aislante', 'Aislante térmico', 'Esencial', 'persona', 'Aísla el cuerpo del frío y la humedad del suelo durante la noche.', 'Prefiere un aislante de espuma de celda cerrada. También puede utilizarse una colchoneta de yoga resistente; evita modelos inflables o delicados que puedan perforarse o que el niño no pueda manejar.', 'Pruébenlo extendido en casa y comprueben que cubra el cuerpo, sea fácil de enrollar y pueda guardarse dentro de la mochila.'],
    ['mn-dormir', 'Sleeping bag o bolsa de dormir', 'Esencial', 'persona', 'Conserva el calor corporal y permite descansar durante el campamento.', 'Elige talla chica o infantil, con temperatura de confort adecuada a la noche prevista. Una bolsa demasiado grande deja espacio que el cuerpo debe calentar y ocupa volumen innecesario.', 'Practiquen abrirlo, acomodarlo y guardarlo. Debe viajar seco y completamente dentro de la mochila.'],
    ['mn-pijama', 'Pijama calientita y calcetines para dormir', 'Esencial', 'persona', 'Mantiene una capa limpia, seca y abrigadora reservada exclusivamente para la noche.', 'Empaca una pijama cómoda y calientita junto con un par de calcetines limpios que no se utilicen durante las actividades del día.', 'Guárdalos juntos en una bolsa resellable y comprueba que permanezcan secos hasta la hora de dormir.'],
    ['mn-cobija', 'Cobija pequeña', 'Según el clima', 'persona', 'Aporta abrigo adicional cuando las condiciones y el sistema de descanso lo requieren.', 'Elige una cobija compacta de fleece o material sintético que seque rápido; no debe sustituir una bolsa de dormir adecuada.', 'Inclúyela solo si cabe dentro de la mochila sin comprimir excesivamente el resto del equipo.']
  ]],
  ['Ropa y calzado', [
    ['mn-ropa', 'Cambio de ropa completo', 'Esencial', 'persona', 'Permite cambiar prendas húmedas o sucias y conservar un conjunto seco.', 'Incluye playera, pantalón o leggins, ropa interior y calcetines adecuados al clima. Organiza cada cambio en una bolsa resellable.', 'Comprueba talla y cantidad según la duración; separa siempre la ropa limpia de la usada o húmeda.'],
    ['mn-calzado-seco', 'Calzado extra', 'Esencial', 'persona', 'Permite cambiarse si el calzado principal se moja y mantener los pies secos.', 'Incluye un par ligero, cerrado, de talla correcta y previamente usado. Guárdalo limpio dentro de una bolsa para que no ensucie la ropa.', 'No estrenes botas o tenis en el campamento y comprueba que el par extra quede completamente dentro de la mochila.'],
    ['mn-frio', 'Chamarra, gorro y guantes', 'Según el clima', 'persona', 'Aportan abrigo durante noches frías, viento o periodos de poca actividad.', 'Ajusta el sistema a la temperatura mínima prevista y prefiere materiales que conserven aislamiento y sequen con rapidez.', 'Comprueba la talla y guarda las piezas juntas en una bolsa que el Lobato o Lobezna pueda reconocer.']
  ]],
  ['Aseo personal', [
    ['mn-aseo', 'Kit de aseo personal', 'Esencial', 'persona', 'Reúne en un solo lugar lo necesario para la higiene diaria del Lobato o Lobezna.', 'Incluye cepillo dental, pasta dental, cepillo para cabello, ligas para el cabello si las usa, crema facial, desodorante en caso de ya usarlo y un paquete pequeño de toallas húmedas.', 'Guarda todo en una bolsa identificada, con envases pequeños y bien cerrados. Practica que saque, use y vuelva a guardar cada artículo.']
  ]],
  ['Iluminación, comida y orden', [
    ['mn-frontal', 'Linterna frontal en bolsa resellable', 'Esencial', 'persona', 'Permite desplazarse con manos libres cuando baja la luz durante el campamento.', 'Elige una frontal sencilla, de ajuste adecuado y autonomía suficiente. Revisa batería, operación y resistencia a humedad antes de salir.', 'Guárdala protegida en una bolsa resellable, bloquea el encendido accidental si el modelo lo permite y no la sustituyas por una luz de mano.'],
    ['mn-vajilla', 'Plato, vaso y cuchara reutilizables', 'Esencial', 'persona', 'Permiten comer sin usar desechables.', 'Deben estar marcados con nombre y ser fáciles de lavar.', 'Guárdalos limpios tras cada comida y en una bolsa propia.'],
    ['mn-bolsa-extra', 'Bolsa de basura extra', 'Esencial', 'persona', 'Separa residuos, ropa húmeda o artículos sucios.', 'Es adicional a la bolsa que protege el fondo de la mochila.', 'No dejes residuos en el campamento.']
  ]],
  ['Documentos de salida Scout', [
    ['mn-salud', 'Ficha de salud Scout actualizada', 'Esencial', 'persona', 'Reúne el historial médico y los datos necesarios para que los responsables actúen ante una emergencia.', 'Es un formato oficial entregado por la dirigencia del grupo. Debe estar vigente, completo y entregarse conforme al protocolo del Grupo Scout.', 'Comprueba que madre, padre o tutor la actualizó y que la jefatura confirmó su recepción y resguardo.'],
    ['mn-autorizacion', 'Ficha de autorización de salida Scout', 'Esencial', 'persona', 'Deja constancia de que madre, padre o tutor autoriza la participación en la salida.', 'Usa el formato oficial entregado por la dirigencia del grupo; completa los datos de la salida y las firmas que solicite.', 'Entrégala dentro del plazo indicado y confirma con la jefatura que fue recibida antes de partir.']
  ]]
];

const MODE_CHECKS = {
  coche: checks,
  senderismo: {
    'Antes de caminar': ['Confirmar permisos, campamentos, cierres y reglas de la ruta.', 'Revisar pronóstico, desnivel, distancia y horas de luz.', 'Confirmar fuentes de agua y capacidad necesaria entre ellas.', 'Pesar mochila y probar calzado, refugio y sistema de descanso.', 'Descargar mapa sin conexión y compartir itinerario y hora límite de aviso.', 'Revisar transporte de llegada, regreso y alternativa de abandono.'],
    'En la ruta': ['Controlar agua, ritmo y condición de todo el grupo.', 'Comprobar navegación en cada cruce importante.', 'Ajustar capas antes de enfriarse o sobrecalentarse.', 'Elegir solo campamentos permitidos y proteger alimentos y residuos.'],
    'Al regresar': ['Avisar que el grupo terminó la ruta.', 'Secar y revisar refugio, saco, filtro y calzado.', 'Registrar peso, consumos, molestias y equipo que faltó o sobró.']
  },
  bushcraft: {
    'Antes de salir': ['Confirmar las reglas del terreno y las actividades previstas.', 'Verificar restricciones actuales de fuego, herramientas y recolección de madera.', 'Revisar clima, viento, acceso, agua y salida alternativa.', 'Probar refugio y practicar las técnicas previstas en un entorno controlado.', 'Compartir ubicación, plan y hora de regreso con una persona de confianza.', 'Retirar del equipo cualquier herramienta que no sepa usar el grupo.'],
    'En el sitio': ['Delimitar un área segura para herramientas y mantener alejadas a otras personas.', 'Usar únicamente material y superficies acordes al plan.', 'Mantener agua y medio de extinción listos si habrá fuego.', 'Separar cocina, residuos y sistema sanitario de la fuente de agua.', 'Detener la práctica si cambian viento, clima, visibilidad o condición del grupo.'],
    'Antes de retirarse': ['Extinguir y comprobar en frío cualquier fuego.', 'Retirar basura, cordajes, residuos y material de práctica.', 'Revisar herramientas, registrar daños y avisar que el grupo regresó.']
  },
  ultraligera: {
    'Antes de salir': ['Confirmar ruta, pernocta, cierres, pronóstico y alternativa de salida.', 'Pesar peso base y peso total con agua, comida y combustible; retirar solo artículos sin función clara.', 'Probar mochila, calzado, refugio, aislante y sistema de dormir con condiciones semejantes a la salida.', 'Calcular agua entre fuentes y comprobar el tratamiento y el respaldo.', 'Revisar menú, combustible compatible, alergias y una alternativa sin cocción.', 'Compartir ruta, ubicación de inicio, horarios y contacto de aviso; descargar navegación sin conexión.'],
    'En la ruta': ['Controlar agua, abrigo, energía y condición de cada integrante antes de que haya molestias.', 'Ajustar ritmo, distancia y carga al integrante con menor margen; volver o acortar si cambia el plan.', 'Mantener secos el sistema de dormir y la ropa de noche.', 'Revisar navegación en cruces y acampar solo donde esté permitido.', 'Retirar todos los residuos, incluido papel y productos de higiene, según las reglas del sitio.'],
    'Al regresar': ['Avisar al contacto que el grupo concluyó la salida.', 'Secar, limpiar y reparar refugio, aislante, calzado y tratamiento de agua.', 'Registrar peso, comida, agua, combustible y equipo que faltó, sobró o no se usó para mejorar la siguiente salida.']
  },
  tropa: {
    'Antes de salir': ['Confirmar lugar, transporte, pronóstico, sanitarios y reglas del campamento.', 'Verificar lista de participantes, responsables, contactos, fichas de salud actualizadas y autorizaciones de salida Scout recibidas por la jefatura.', 'Revisar menú, alergias, agua, combustible y responsables de cocina.', 'Realizar bazar personal y probar mochila, estufa, tiendas, lonas, estacas y material de actividades.', 'Asignar responsables para cocina, campamento, botiquín, residuos y cierre.', 'Compartir horario de salida, regreso y punto de encuentro.'],
    'Al instalarse': ['Contar participantes y delimitar cocina, descanso, actividades, residuos y sanitarios.', 'Montar refugios y tensar lonas antes de organizar la cocina.', 'Explicar rutas de paso, uso de herramientas, higiene y protocolo de atención.', 'Guardar alimentos, combustible y botiquín en lugares definidos y accesibles para responsables.'],
    'Al cerrar el campamento': ['Contar participantes, equipo y estacas antes de dejar el sitio.', 'Apagar, enfriar y guardar la estufa conforme a sus instrucciones.', 'Airear, sacudir y revisar tiendas antes de empacarlas; confirmar varillas, cierres, estacas y fundas.', 'Retirar residuos, cordajes y material de actividades; revisar que el lugar quede limpio.', 'Registrar faltantes, daños, consumos y aprendizajes para la siguiente salida.']
  },
  manada: {
    'Antes de salir': ['Practicar que cada lobato arme, cargue y reconozca su mochila, mochila de ataque y cangurera.', 'Hacer un bazar personal: verificar equipo completo, nombre visible y artículos adecuados para la salida.', 'Confirmar uniforme, ficha de salud actualizada, autorización de salida Scout y datos de contacto.', 'Revisar pronóstico, agua, sanitarios, alimentación, hora de salida y regreso.', 'Comprobar que el equipo de dormir, impermeable y calzado estén secos, completos y ya probados.', 'Acordar con familias y responsables qué debe llevar cada participante y qué lleva el equipo adulto.'],
    'Durante el campamento': ['Contar a los lobatos al salir, llegar, cambiar de actividad y regresar.', 'Revisar agua, abrigo, gorra, bloqueador, higiene y estado general de cada lobato.', 'Mantener libres las rutas de paso y explicar dónde se ubican responsables, sanitarios y punto de encuentro.', 'Practicar el cuidado de la tienda: mantenerla limpia, sacudir residuos y no forzar cierres, varillas ni estacas.', 'Pedir que cada lobato guarde sus artículos después de usarlos y mantenga sus residuos en la bolsa indicada.'],
    'Al regresar': ['Hacer un bazar final para verificar que cada lobato regrese con su equipo, ropa marcada y objetos de bolsillo.', 'Secar sleeping bag, aislante, impermeable, calzado y bolsas antes de guardarlos.', 'Airear y limpiar la tienda antes de guardarla si el equipo se utilizó.', 'Registrar artículos perdidos, equipo que faltó y aprendizajes para la siguiente salida.']
  }
};

const MODE_CONFIGS = {
  coche: {
    key: 'coche', hash: 'coche', storageKey: KEY, title: 'Camping con coche', eyebrow: 'Car camping · Frontcountry',
    description: 'Descansa, cocina y convive con tu campamento cerca del vehículo. Prepara lo que tu familia necesita para disfrutar la estancia.',
    pills: ['Acceso en vehículo', 'Confort alto', 'Habilidad inicial'], art: 'assets/interior-camping-coche.jpeg', equipment,
    services: [['water', 'Agua potable'], ['toilets', 'Sanitarios'], ['electricity', 'Electricidad']],
    footerChecks: '□ Reserva y acceso  □ Pronóstico  □ Agua y alimentos  □ Avisar regreso  □ Vehículo'
  },
  senderismo: {
    key: 'senderismo', hash: 'senderismo', storageKey: 'aef-backpacking-trips-v1', title: 'Mochilero o Backpacking', eyebrow: 'Mochilero · Backpacking',
    description: 'El backpacking, o viajar como mochilero, recorre rutas de larga distancia llevando equipo, refugio y alimento en una mochila, priorizando movilidad, autonomía y ligereza.',
    pills: ['Autonomía itinerante', 'Equipo técnico ligero', 'Movilidad alta'], art: 'assets/interior-mochilero.jpeg', equipment: BACKPACKING_EQUIPMENT,
    services: [['water', 'Fuentes de agua confirmadas'], ['permit', 'Permisos o reservas'], ['coverage', 'Cobertura móvil prevista']],
    footerChecks: '□ Permisos  □ Pronóstico  □ Agua  □ Mapa sin conexión  □ Avisar itinerario'
  },
  bushcraft: {
    key: 'bushcraft', hash: 'bushcraft', storageKey: 'aef-bushcraft-trips-v1', title: 'Bushcraft', eyebrow: 'Bushcraft · Habilidades de campo',
    description: 'El bushcraft es el arte de prosperar en la naturaleza con autosuficiencia, usando habilidades tradicionales de fuego, refugio y trabajo de madera.',
    pills: ['Habilidades tradicionales', 'Habilidad alta', 'Práctica responsable'], art: 'assets/interior-bushcraft.jpeg', equipment: BUSHCRAFT_EQUIPMENT,
    services: [['permit', 'Reglas del terreno confirmadas'], ['fire', 'Fuego posible según reglas vigentes'], ['wood', 'Uso o recolección de madera']],
    footerChecks: '□ Reglas del sitio  □ Restricción de fuego  □ Clima  □ Plan de emergencia  □ Retirar residuos'
  },
  ultraligera: {
    key: 'ultraligera', hash: 'ultraligera', storageKey: 'aef-ultralight-trips-v1', title: 'Acampada ultraligera', eyebrow: 'Senderismo ultraligero · Ultralight',
    description: 'Diseña un sistema ligero, completo y probado para caminar con más libertad, sin recortar seguridad, descanso, agua ni alimentación.',
    pills: ['Sistema ligero y completo', 'Cada artículo tiene función', 'Habilidad intermedia'], art: 'assets/interior-ultraligera.jpeg', equipment: ULTRALIGHT_EQUIPMENT,
    services: [['water', 'Fuentes de agua confirmadas'], ['permit', 'Pernocta y reglas confirmadas'], ['coverage', 'Navegación y comunicación previstas']],
    footerChecks: '□ Ruta y reglas  □ Pronóstico  □ Peso total  □ Agua y tratamiento  □ Avisar itinerario'
  },
  tropa: {
    key: 'tropa', hash: 'scout/tropa', storageKey: 'aef-scout-tropa-trips-v1', title: 'Campamento Scout', eyebrow: 'Zona Scout · Campamento de Tropa',
    description: 'Organiza el equipo de patrulla, las responsabilidades y la seguridad del campamento en una sola salida editable.',
    pills: ['Equipo de patrulla', 'Responsables definidos', 'Plan de campamento'], art: 'assets/interior-tropa.jpeg', equipment: SCOUT_EQUIPMENT,
    services: [['water', 'Agua potable'], ['toilets', 'Sanitarios'], ['permit', 'Permiso o reglas confirmadas']],
    footerChecks: '□ Salud y autorizaciones  □ Menú y agua  □ Botiquín  □ Equipo de patrulla  □ Avisar regreso', identityLabel: 'Grupo / tropa', numberLabel: 'Número de grupo / tropa'
  },
  manada: {
    key: 'manada', hash: 'scout/manada', storageKey: 'aef-scout-manada-trips-v1', title: 'Campamento de Manada', eyebrow: 'Zona Scout · Lobatos',
    description: 'Prepara un campamento donde cada lobato conoce, arma y cuida su propio equipo con acompañamiento adulto.',
    pills: ['Autonomía progresiva', 'Mochila propia', 'Acompañamiento adulto'], art: 'assets/interior-manada.jpeg', equipment: MANADA_EQUIPMENT,
    services: [['water', 'Agua potable'], ['toilets', 'Sanitarios'], ['permit', 'Permiso o reglas confirmadas']],
    footerChecks: '□ Salud y autorización  □ Agua y alimentación  □ Equipo de descanso  □ Ropa marcada  □ Avisar regreso', identityLabel: 'Nombre de Manada', numberLabel: 'Número de grupo'
  }
};

/* Catálogo editorial compartido con el panel de administración. Mantiene una
   sola fuente para los elementos técnicos que aparecen en cada checklist. */
window.LOBATOS_ADMIN_CATALOG = {
  coche: MODE_CONFIGS.coche.equipment,
  senderismo: BACKPACKING_EQUIPMENT,
  bushcraft: BUSHCRAFT_EQUIPMENT,
  ultraligera: ULTRALIGHT_EQUIPMENT,
  'manada-campamento': MANADA_EQUIPMENT,
  'manada-bolsillo': [
    ['Cangurera o equipo de bolsillo', [['admin-mn-cangurera', 'Cangurera o equipo de bolsillo', 'Esencial', 'persona', 'Mantiene reunidos y accesibles los objetos pequeños que acompañan cada actividad.', 'Elige una cangurera ligera, de talla adecuada y con cierres que el Lobato o Lobezna pueda manejar.', 'Comprueba que cierre, que no limite el movimiento y que todo lleve el nombre de Manada.']]],
    ['Contenido del equipo de bolsillo', MANADA_EQUIPMENT.find(([name]) => name === 'Equipo de bolsillo · cangurera')?.[1] || []],
    ['Revisión antes de salir', (MANADA_EQUIPMENT.find(([name]) => name === 'Revisión antes de salir')?.[1] || []).filter(item => ['mn-marcado', 'mn-bazar'].includes(item[0]))]
  ],
  'manada-ataque': [
    ['Mochila de ataque', (MANADA_EQUIPMENT.find(([name]) => name === 'Mochila de ataque')?.[1] || []).filter(item => item[0] === 'mn-mochila-ataque')],
    ['Protección personal', (MANADA_EQUIPMENT.find(([name]) => name === 'Mochila de ataque')?.[1] || []).filter(item => ['mn-sol', 'mn-gorra', 'mn-impermeable', 'mn-sueter'].includes(item[0]))],
    ['Agua y alimento', (MANADA_EQUIPMENT.find(([name]) => name === 'Mochila de ataque')?.[1] || []).filter(item => ['mn-snack', 'mn-agua'].includes(item[0]))],
    ['Documentos de salida Scout', (MANADA_EQUIPMENT.find(([name]) => name === 'Documentos de salida Scout')?.[1] || []).filter(item => item[0] === 'mn-salud')],
    ['Revisión antes de salir', (MANADA_EQUIPMENT.find(([name]) => name === 'Revisión antes de salir')?.[1] || []).filter(item => ['mn-carga', 'mn-marcado'].includes(item[0]))]
  ],
  'tropa-campamento': SCOUT_EQUIPMENT,
  'tropa-bolsillo': [
    ['Cangurera o bolsillos', TROPA_POCKET_EQUIPMENT.filter(item => item[0] === 'tr-bolsillo-contenedor')],
    ['Contenido del equipo de bolsillo', TROPA_POCKET_EQUIPMENT.filter(item => item[0] !== 'tr-bolsillo-contenedor')],
    ['Control final', [['admin-tr-bolsillo-control', 'Control final del equipo de bolsillo', 'Esencial', 'persona', 'Confirma que cada objeto está completo, protegido y siempre en el mismo lugar.', 'Extiende el equipo, revisa su estado y vuelve a guardarlo en el orden de uso.', 'Colócate la cangurera o el uniforme, camina, agáchate y confirma que nada se pierde o limita el movimiento.']]]
  ],
  'tropa-ataque': [
    ['Mochila de excursión', TROPA_ATTACK_EQUIPMENT.filter(item => item[0] === 'tr-mochila-ataque')],
    ['Protección y capas', TROPA_ATTACK_EQUIPMENT.filter(item => ['tr-impermeable', 'tr-abrigo', 'tr-sombrero', 'tr-bloqueador', 'tr-repelente'].includes(item[0]))],
    ['Agua y alimento', TROPA_ATTACK_EQUIPMENT.filter(item => ['tr-agua', 'tr-alimento'].includes(item[0]))],
    ['Orientación y emergencia', TROPA_ATTACK_EQUIPMENT.filter(item => ['tr-frontal', 'tr-orientacion', 'tr-botiquin', 'tr-residuos', 'tr-herramientas'].includes(item[0]))],
    ['Control final', [['admin-tr-ataque-control', 'Control final de la mochila de ataque', 'Esencial', 'persona', 'Comprueba que la mochila está completa y lista para caminar con autonomía.', 'Revisa el checklist con el programa y el clima de la actividad.', 'Carga la mochila, ajusta tirantes y confirma que todo esté dentro, accesible y sin piezas colgantes.']]]
  ]
};

const MODE_VIDEOS = {
  coche: [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Descanso familiar'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Reparación de refugio'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Mantenimiento de tienda'],
    ['lkyYT_IhsDk', 'Sellador de pintura vs. impermeabilizante para tiendas de campaña', 'Cuidado del refugio'],
    ['rPBMD8Nfabs', '¿Arpenaz Family 4.1 F&B o Instant Tent 8P?', 'Comparativa de tienda familiar']
  ],
  senderismo: [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Sistema de descanso'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Reparación en ruta'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Protección frente a lluvia']
  ],
  bushcraft: [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Descanso y abrigo'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Mantenimiento del refugio'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Protección de equipo']
  ],
  ultraligera: [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Sistema de sueño ligero'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Kit de reparación'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Refugio ante lluvia']
  ],
  tropa: [
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Sistema de descanso'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Mantenimiento de tiendas'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Cuidado del refugio']
  ],
  manada: [
    ['search:mochila', 'Armado de mochila para Manada y Tropa', 'Buscar en nuestro canal'],
    ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Sistema de descanso'],
    ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Cuidado de la tienda'],
    ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Protección ante lluvia']
  ]
};

/* Estas dos bibliotecas solo presentan equipo que ya aparece en un video del canal.
   Las futuras publicaciones se agregan como una nueva ficha y video, sin inventar reseñas. */
const RESOURCE_SECTIONS = {
  tecnicas: {
    title: 'Técnicas de campismo',
    art: 'assets/interior-tecnicas.jpeg',
    eyebrow: 'Biblioteca práctica · Acampando en Familia',
    description: 'Aprende a cuidar, reparar y elegir el refugio y el sistema de descanso a partir de los videos que ya publicamos.',
    pills: ['Aprendizaje en video', 'Refugio y descanso', 'Práctica en familia'],
    intro: `<p><strong>Esta biblioteca reúne técnicas demostradas en el canal de Acampando en Familia.</strong> Por ahora se concentra en el refugio y el descanso: elegir una bolsa de dormir, reparar postes y cuidar la impermeabilidad de una tienda.</p><p>No es un checklist ni un catálogo de equipo. Cada ficha parte de un video publicado; cuando haya un video nuevo, añadiremos su técnica aquí con el mismo criterio.</p>`,
    sections: [
      ['Cuidar la tienda antes de que falle', `<p>La tienda protege al grupo cuando está limpia, seca y en condiciones de montaje. Revisa la tela, costuras, piso, cierres, postes y vientos después de cada salida. Deja que se seque por completo antes de guardarla; guardar humedad puede deteriorar materiales y volver difícil identificar un problema real.</p><p>Cuando notes filtración o pérdida de desempeño, empieza por identificar qué superficie presenta el problema y consulta las instrucciones de la tienda y del producto. Los dos videos siguientes muestran mantenimiento e invitan a comparar alternativas antes de aplicar un tratamiento.</p>`, [
        ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Mantenimiento del refugio'],
        ['lkyYT_IhsDk', 'Sellador de pintura vs. impermeabilizante para tiendas de campaña', 'Decisión de mantenimiento']
      ]],
      ['Resolver un poste dañado con calma', `<p>Un poste o varilla en mal estado puede impedir que el refugio conserve su forma y tensión. Antes de una salida, arma la tienda completa y revisa piezas, elásticos, uniones y fundas. Si aparece un daño, evita forzar el montaje: identifica la pieza afectada, conserva los componentes y revisa el método de reparación adecuado para ese sistema.</p><p>El video de esta ficha documenta una reparación de postes. Úsalo como referencia práctica y confirma siempre que el arreglo sea compatible con tu tienda antes de depender de ella en una noche de lluvia o viento.</p>`, [
        ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Reparación del refugio']
      ]],
      ['Elegir la bolsa de dormir como sistema', `<p>La bolsa de dormir forma parte del descanso junto con el aislante, la ropa de dormir y las condiciones reales de la noche. Antes de elegirla, define quién la usará, en qué temperaturas se dormirá y qué sistema de aislamiento la acompañará. Una buena elección no se basa solo en volumen o apariencia.</p><p>La guía de este video ayuda a comenzar la comparación. Prueben el sistema completo en casa y mantengan seco el equipo de dormir durante la salida.</p>`, [
        ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Sistema de descanso']
      ]],
      ['Cómo practicar una técnica en familia', `<p>Vean el video antes de manipular el equipo, preparen un espacio seguro y prueben con calma en casa. Al terminar, anoten qué pieza usaron, qué duda apareció y qué conviene revisar antes de la siguiente salida. Así cada video se convierte en una habilidad que toda la familia puede reconocer y aplicar.</p><p>Cuando publiquemos una nueva técnica, esta sección crecerá con su video, tema y contexto de uso. La biblioteca no presentará herramientas o productos que todavía no estén explicados en el canal.</p>`, []]
    ]
  },
  reviews: {
    title: 'Review de equipo',
    art: 'assets/interior-review-equipo.jpeg',
    eyebrow: 'Experiencia en video · Acampando en Familia',
    description: 'Compara el equipo que ya hemos mostrado en el canal y descubre qué video responde a cada decisión de compra o mantenimiento.',
    pills: ['Experiencia familiar', 'Videos publicados', 'Comparar antes de elegir'],
    intro: `<p><strong>Las reseñas parten de la experiencia que compartimos en video.</strong> Aquí solo aparecerán piezas de equipo, comparativas o productos que ya tengan una publicación en el canal.</p><p>La intención no es dar una calificación universal. Cada familia debe valorar espacio, clima, integrantes, presupuesto, garantía y el uso que realmente dará al equipo. Los videos muestran el punto de partida; la ficha explica qué decisión ayuda a responder.</p>`,
    sections: [
      ['Cómo leer nuestras reviews', `<p>Revisa el título del video, identifica el equipo que se compara o se explica y anota cuál es tu necesidad concreta. Para una tienda familiar, por ejemplo, importa el número de personas, el espacio para equipaje, el tipo de salida y el tiempo de montaje; para una bolsa de dormir, importan el usuario y las noches previstas.</p><p>Una review no sustituye el manual, la garantía ni las especificaciones vigentes del fabricante. Por eso evitamos asignar puntajes generales o recomendar productos que aún no hayan sido mostrados en el canal.</p>`, []],
      ['Comparativa de tiendas familiares', `<p>Esta ficha concentra la comparativa de dos tiendas familiares que ya está publicada. Mírala antes de decidir, y contrasta lo observado con el espacio de su vehículo, el tamaño del grupo y las condiciones de campamento que viven como familia.</p><p>Cuando haya nuevas pruebas de refugios, se agregarán como fichas separadas para que cada comparación conserve su contexto.</p>`, [
        ['rPBMD8Nfabs', '¿Arpenaz Family 4.1 F&B o Instant Tent 8P?', 'Comparativa de tienda familiar']
      ]],
      ['Sistema de descanso: elegir con criterio', `<p>La elección de una bolsa de dormir se entiende mejor cuando se relaciona con la persona que la usará y las condiciones nocturnas que enfrentará. Este video reúne ese punto de partida y pertenece aquí porque ayuda a comparar una decisión de equipo antes de comprar o actualizar el sistema de descanso.</p>`, [
        ['CIrwbFW72fk', 'Cómo elegir tu sleeping bag o bolsa de dormir', 'Selección de sistema de descanso']
      ]],
      ['Mantenimiento también es una decisión de equipo', `<p>Una tienda no siempre requiere reemplazo cuando pierde impermeabilidad o una pieza se daña. Los siguientes videos documentan opciones de cuidado, comparación de productos y reparación. Consulta primero el manual de tu modelo y evalúa el estado general del refugio antes de aplicar una solución.</p>`, [
        ['klq_hwdJd4c', 'Reimpermeabiliza tu tienda de campaña', 'Cuidado de tienda'],
        ['lkyYT_IhsDk', 'Sellador de pintura vs. impermeabilizante para tiendas de campaña', 'Comparación de tratamientos'],
        ['JdF0FJ0bi0s', 'Reparación de postes de tienda o casa de campaña', 'Vida útil y reparación']
      ]],
      ['Próximas reseñas', `<p>Esta sección se alimentará con videos nuevos. Cuando suban uno, añadiremos aquí una ficha con su equipo, el tipo de decisión que apoya y el enlace al video. Así el sitio seguirá siendo honesto: mostrará experiencia documentada, no fichas vacías ni equipo que no hemos presentado.</p>`, []]
    ]
  }
};

function driveModeKey(value) {
  const label = String(value || '').trim().toLocaleLowerCase('es');
  return ({
    'coche': 'coche', 'camping con coche': 'coche',
    'mochilero o backpacking': 'senderismo', 'backpacking': 'senderismo',
    'bushcraft': 'bushcraft', 'acampada ultraligera': 'ultraligera',
    'campamento scout · tropa': 'tropa', 'campamento scout': 'tropa',
    'campamento scout · manada': 'manada', 'campamento de manada': 'manada'
  })[label] || '';
}

function driveSlug(value) {
  return String(value || 'articulo').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'articulo';
}

function applyDriveContent() {
  const source = typeof DRIVE_SITE_CONTENT === 'undefined' ? null : DRIVE_SITE_CONTENT;
  if (!source) return;
  const menuIndex = { coche: 0, senderismo: 1, bushcraft: 2, ultraligera: 3, tecnicas: 4, reviews: 5 };
  for (const row of source.menu || []) {
    const [id, title, , description] = row;
    if (Object.hasOwn(menuIndex, id)) {
      names[menuIndex[id]] = title || names[menuIndex[id]];
      descriptions[menuIndex[id]] = description || descriptions[menuIndex[id]];
    }
  }

  const byMode = new Map();
  for (const row of source.checklist || []) {
    const mode = driveModeKey(row[0]);
    if (!mode || !row[1] || !row[2]) continue;
    if (!byMode.has(mode)) byMode.set(mode, []);
    byMode.get(mode).push(row);
  }
  for (const [mode, rows] of byMode) {
    const cfg = MODE_CONFIGS[mode];
    if (!cfg) continue;
    const previousIds = new Map(cfg.equipment.flatMap(([category, items]) => items.map(item => [`${category}\u0000${item[1]}`, item[0]])));
    const groups = new Map();
    rows.forEach((row, position) => {
      const [ , category, item, priority, unit, purpose, important, advice] = row;
      if (!groups.has(category)) groups.set(category, []);
      const id = previousIds.get(`${category}\u0000${item}`) || `drive-${mode}-${driveSlug(category)}-${driveSlug(item)}-${position + 1}`;
      groups.get(category).push([id, item, priority || 'Por definir', unit || 'grupo', purpose || 'Artículo del checklist.', important || 'Revisa este artículo antes de salir.', advice || 'Confirma si aplica a tu salida.']);
    });
    cfg.equipment = [...groups];
  }

  const videoLists = new Map();
  for (const row of source.videos || []) {
    const [modeName, id, title, topic] = row;
    if (!id || String(id).startsWith('search:')) continue;
    const video = [String(id), title || 'Video de Acampando en Familia', topic || 'Video relacionado'];
    const mode = driveModeKey(modeName);
    if (mode) {
      if (!videoLists.has(mode)) videoLists.set(mode, []);
      videoLists.get(mode).push(video);
    }
  }
  for (const [mode, videos] of videoLists) MODE_VIDEOS[mode] = videos;
  applyChannelReviewVideos();
}

function applyChannelReviewVideos() {
  if (typeof CHANNEL_REVIEW_VIDEOS === 'undefined') return;
  const rows = typeof DRIVE_SITE_CONTENT === 'undefined' ? [] : DRIVE_SITE_CONTENT.videos || [];
  if (rows.length) {
    const grouped = new Map(), seen = new Set();
    for (const row of rows) {
      const id = String(row[1] || '').trim(), title = row[2] || 'Video de Acampando en Familia', topic = row[3] || 'Otros temas';
      if (!id || id.startsWith('search:') || seen.has(id)) continue;
      seen.add(id);
      if (!grouped.has(topic)) grouped.set(topic, []);
      grouped.get(topic).push([id, title, topic]);
    }
    Object.keys(CHANNEL_REVIEW_VIDEOS).forEach(key => delete CHANNEL_REVIEW_VIDEOS[key]);
    Object.assign(CHANNEL_REVIEW_VIDEOS, Object.fromEntries(grouped));
  }
  const context = {
    'Tiendas, refugio y mantenimiento': `<p>Antes de comprar, montar o reparar un refugio, revisa el tamaño del grupo, el clima y las piezas que realmente incluye tu modelo. Aquí reunimos comparativas, montajes, reparaciones, condensación e impermeabilización para que cada decisión tenga contexto.</p>`,
    'Descanso y sistema de dormir': `<p>El descanso se decide como sistema: persona, temperatura nocturna, aislante y bolsa de dormir trabajan juntos. Estos videos ayudan a comparar rango térmico, talla, uso infantil y cuidado del equipo.</p>`,
    'Mochilas, transporte y organización': `<p>La mochila debe ajustarse a quien la carga y a la salida que harán. Encuentra armado de mochila de campamento y de ataque, impermeabilización, organización de ropa y reseñas de modelos que ya hemos usado.</p>`,
    'Cocina, agua y fuego': `<p>Planea el menú, el agua y el método de cocina antes de empacar. Los videos muestran fogata, encendido, estufas y recipientes; revisa siempre las reglas del sitio y usa cada equipo según su manual.</p>`,
    'Equipo de campo, Scout y salidas': `<p>Estas experiencias conectan el equipo con su uso real: actividades Scout, excursiones familiares y herramientas que requieren práctica, supervisión y decisiones adecuadas para cada integrante.</p>`,
    'Comunidad y archivo del canal': `<p>También conservamos las publicaciones históricas y de comunidad que aparecen en el archivo del canal. Se presentan en su propio tema para mantener las reseñas y técnicas de campismo fáciles de encontrar.</p>`
  };
  RESOURCE_SECTIONS.reviews.sections = [
    ['Cómo usar estas reviews', `<p>Elige primero una necesidad concreta y luego abre los videos de ese tema. Las reseñas muestran experiencias reales de uso, pero no sustituyen el manual, la garantía ni las especificaciones vigentes del fabricante.</p><p>Cada publicación permanece dentro del tema y la decisión de equipo que ayuda a resolver, para que puedas interpretarla con su contexto.</p>`, []],
    ...Object.entries(CHANNEL_REVIEW_VIDEOS).map(([title, videos]) => [title, context[title] || `<p>Estos videos del canal están agrupados por <strong>${title}</strong>. Úsalos para identificar la necesidad, observar el equipo en contexto y contrastar lo visto con las instrucciones y especificaciones vigentes del fabricante.</p>`, videos])
  ];
}

applyDriveContent();
if (typeof applyCarExperienceContent === 'function') applyCarExperienceContent();

let currentMode = location.hash.startsWith('#senderismo') ? 'senderismo' : location.hash.startsWith('#bushcraft') ? 'bushcraft' : location.hash.startsWith('#ultraligera') ? 'ultraligera' : location.hash.startsWith('#scout/tropa') ? 'tropa' : location.hash.startsWith('#scout/manada') ? 'manada' : 'coche';
const modeStates = { coche: storeState };

function makeModeTrip(mode) {
  const base = newTrip();
  base.name = mode === 'senderismo' ? 'Mi primera ruta' : mode === 'bushcraft' ? 'Mi primera práctica' : mode === 'ultraligera' ? 'Mi salida ultraligera' : mode === 'tropa' ? 'Campamento de Tropa' : mode === 'manada' ? 'Campamento de Manada' : base.name;
  for (const key of ['permit', 'coverage', 'fire', 'wood']) base[key] = 'Por confirmar';
  base.mode = mode;
  return base;
}

function loadModeState(mode) {
  if (modeStates[mode]) return modeStates[mode];
  let state = null;
  try {
    state = JSON.parse(localStorage.getItem(MODE_CONFIGS[mode].storageKey));
    if (!state?.trips?.length || !state.trips.every(t => t.id && t.items && Array.isArray(t.custom) && t.checks)) state = null;
  } catch {}
  if (!state) {
    const t = makeModeTrip(mode);
    state = { active: t.id, trips: [t] };
  }
  for (const t of state.trips) {
    for (const key of ['childName', 'familyName', 'groupNumber', 'address', 'mapsUrl', 'departureTime', 'returnTime']) if (typeof t[key] !== 'string') t[key] = '';
    for (const key of ['water', 'toilets', 'electricity', 'permit', 'coverage', 'fire', 'wood']) if (typeof t[key] !== 'string') t[key] = 'Por confirmar';
    t.mode = mode;
  }
  modeStates[mode] = state;
  return state;
}

function switchMode(mode) {
  currentMode = mode;
  storeState = loadModeState(mode);
  opened = new Set([MODE_CONFIGS[mode].equipment[0][0]]);
  search = '';
  filterPending = false;
}

save = function () {
  try {
    localStorage.setItem(MODE_CONFIGS[currentMode].storageKey, JSON.stringify(storeState));
    document.querySelectorAll('.save-state').forEach(e => e.textContent = 'Guardado en este navegador');
  } catch {
    document.querySelectorAll('.save-state').forEach(e => e.textContent = 'No se pudo guardar');
    toast('El navegador no permite guardar. Exporta un respaldo o conserva una copia impresa.');
  }
};

groups = function () {
  return [...MODE_CONFIGS[currentMode].equipment, ...(trip().custom.length ? [['Mi equipo adicional', trip().custom]] : [])];
};

function contactFooter(menuVariant = false) {
  const instagram = `<a href="https://www.instagram.com/acampando_en_familia" target="_blank" rel="noopener noreferrer"><svg class="social-icon instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.35" cy="6.65" r="1.2" fill="currentColor"/></svg><span>Instagram</span></a>`;
  const mail = `<a href="mailto:lobatos.acampando@gmail.com"><svg class="social-icon mail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m3.8 6 8.2 6.4L20.2 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Correo</span></a>`;
  const youtube = `<a href="https://www.youtube.com/@acampandoenfamilia" target="_blank" rel="noopener noreferrer"><svg class="social-icon youtube-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.8 6.2-3.8-6.2-3.8v7.6Z"/></svg><span>YouTube</span></a>`;
  return `<footer class="site-contact${menuVariant ? ' menu-contact' : ''}" aria-label="Contacto de Lobatos Acampando"><a class="contact-crest" href="#inicio" aria-label="Lobatos Acampando, ir al inicio"><img src="assets/logo.png" alt="Logo de Lobatos Acampando"></a><div class="contact-identity"><p class="contact-kicker">Familia al aire libre</p><strong>Lobatos Acampando</strong><p>Entre senderos, fogatas y noches de tienda, la familia Lobato comparte la aventura de aprender a vivir al aire libre en familia.</p></div><aside class="contact-invitation"><a class="contact-kicker contact-story-link" href="mailto:lobatos.acampando@gmail.com">Tu historia nos inspira</a><p><a class="contact-story-link" href="https://www.instagram.com/acampando_en_familia" target="_blank" rel="noopener noreferrer">¿Tienes una duda, una sugerencia o una experiencia que quieras compartir? Mándanos un mensaje con tu nombre para nombrarte en nuestro próximo video.</a></p>${menuVariant ? '' : `<nav class="contact-links contact-invitation-links" aria-label="Redes y contacto">${instagram}${mail}${youtube}</nav>`}</aside></footer>`;
}

/* Portada aprobada: la composición visual vive en una sola imagen y las zonas siguen siendo accesibles. */
function playApprovedClick() {
  try {
    const sound = document.querySelector('#approved-click-sound');
    if (!sound) return;
    sound.currentTime = 0;
    sound.volume = .28;
    const playback = sound.play();
    if (playback?.catch) playback.catch(() => {});
  } catch { /* El menú sigue funcionando si el dispositivo bloquea el audio. */ }
}
menu = function (scout = false) {
  if (scout) { scoutMenu(); return; }
  const routes = { '0': 'coche/salida', '1': 'senderismo', '2': 'bushcraft', '3': 'ultraligera', '4': 'tecnicas', '5': 'reviews' };
  const editable = (key, fallback) => window.LOBATOS_ADMIN?.text(key, fallback) || fallback;
  const menuTitles = [
    editable('home.coche.title', names[0]), editable('home.senderismo.title', names[1]),
    editable('home.bushcraft.title', names[2]), editable('home.ultraligera.title', names[3]),
    editable('home.tecnicas.title', names[4]), editable('home.reviews.title', names[5])
  ];
  const menuDescriptions = [
    editable('home.coche.description', 'Acampa cerca del auto, con espacio y comodidad.'),
    editable('home.senderismo.description', 'Recorre rutas largas con total autonomía llevando todo tu equipo técnico en una sola mochila.'),
    editable('home.bushcraft.description', 'Practica técnicas tradicionales de refugio, fuego y herramientas con planificación, permiso y mínimo impacto.'),
    editable('home.ultraligera.description', 'Reduce el peso base con un sistema completo, probado y adecuado para la ruta, el clima y cada integrante.'),
    editable('home.tecnicas.description', 'Aprende a cuidar, reparar y elegir refugio y descanso desde los videos del canal.'),
    editable('home.reviews.description', 'Compara el equipo que ya mostramos en el canal y decide con información documentada.')
  ];
  const illustrations = ['camping-coche.webp', 'mochilero.webp', 'bushcraft.webp', 'ultraligera.webp', 'tecnicas.webp', 'reviews-v2.webp'];
  const card = (n, compact = false) => `<button class="layered-card${compact ? ' layered-card-compact' : ''} layered-route" data-camp="${n}" aria-label="${menuTitles[n]}: ${menuDescriptions[n]}"><span class="layered-card-art"><img src="assets/menu-icons/${illustrations[n]}" alt="" loading="eager"></span><span class="layered-card-copy"><strong>${menuTitles[n]}</strong><small>${menuDescriptions[n]}</small></span><span class="layered-arrow" aria-hidden="true">→</span></button>`;
  const scoutTitle = editable('home.scout.title', 'Zona Scout');
  app.innerHTML = `<main id="main" class="layered-menu"><audio id="approved-click-sound" src="assets/click-madera.wav" preload="auto" aria-hidden="true"></audio><div class="layered-menu-stage"><header class="layered-header"><img src="assets/logo.png" alt="Logotipo de Acampando en Familia"><div class="layered-heading"><h1>Elige tu forma de acampar</h1><p>Te ayudamos a mejorar tu experiencia de camping con guías prácticas, videos y listas para preparar cada aventura en familia o en la vida Scout.</p></div></header><nav class="layered-social" aria-label="Redes y contacto"><a href="https://www.instagram.com/acampando_en_familia" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><defs><radialGradient id="instagram-gradient" cx="30%" cy="105%" r="125%"><stop offset="0" stop-color="#ffd600"/><stop offset=".32" stop-color="#ff7a00"/><stop offset=".62" stop-color="#ff0169"/><stop offset="1" stop-color="#7638fa"/></radialGradient></defs><rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagram-gradient)"/><rect x="5.3" y="5.3" width="13.4" height="13.4" rx="4" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="17" cy="7" r="1.1" fill="#fff"/></svg><span>Instagram</span></a><a href="mailto:lobatos.acampando@gmail.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="#fff" stroke="#43230f" stroke-width="1.6"/><path d="m3.8 6 8.2 6.4L20.2 6" fill="none" stroke="#43230f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Correo</span></a><a href="https://www.youtube.com/@acampandoenfamilia" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f00" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.8 6.2-3.8-6.2-3.8v7.6Z"/></svg><span>YouTube</span></a></nav><div class="layered-content"><section class="layered-primary" aria-label="Formas de acampar">${[0,1,2,3].map(n => card(n)).join('')}</section><div class="layered-lower"><section class="layered-resources" aria-label="Técnicas y reseñas">${[4,5].map(n => card(n, true)).join('')}</section><a class="layered-scout" href="#scout"><span aria-hidden="true">⚜</span><strong>${scoutTitle}</strong><b aria-hidden="true">→</b></a></div></div><footer class="layered-footer"><div class="layered-footer-brand"><strong>Lobatos Acampando</strong><a class="site-version" href="#administrador" aria-label="Abrir panel de administración, versión ${window.LOBATOS_ADMIN?.VERSION || '0.98'}">Versión ${window.LOBATOS_ADMIN?.VERSION || '0.98'}</a></div><p>Entre senderos, fogatas y noches de tienda, la familia Lobato comparte la aventura de aprender a vivir al aire libre en familia.</p><a class="layered-footer-title" href="mailto:lobatos.acampando@gmail.com">Tu historia nos inspira</a><p><a href="https://www.instagram.com/acampando_en_familia" target="_blank" rel="noopener noreferrer">¿Tienes una duda, una sugerencia o una experiencia que quieras compartir? Mándanos un mensaje con tu nombre para nombrarte en nuestro próximo video.</a></p></footer></div></main>`;
  document.querySelectorAll('.layered-social a,.layered-scout').forEach(sign => sign.insertAdjacentHTML('beforeend', '<i class="wood-detail" aria-hidden="true"></i>'));
  document.querySelectorAll('.layered-route,.layered-social a,.layered-scout,.layered-footer a').forEach(link => link.addEventListener('click', event => {
    playApprovedClick();
    link.classList.remove('is-clicked');
    void link.offsetWidth;
    link.classList.add('is-clicked');
    if (link.dataset.camp && routes[link.dataset.camp]) { event.preventDefault(); setTimeout(() => { location.hash = routes[link.dataset.camp]; }, 340); }
    else if (link.classList.contains('layered-scout')) { event.preventDefault(); setTimeout(() => { location.hash = 'scout'; }, 340); }
  }));
};

function scoutMenu() {
  const sectionTitle = window.LOBATOS_ADMIN?.sectionText('scout', 'title', 'Zona Scout') || 'Zona Scout';
  const sectionDescription = window.LOBATOS_ADMIN?.sectionText('scout', 'description', 'Puerta de entrada a las herramientas y progresiones de Manada y Tropa.') || 'Puerta de entrada a las herramientas y progresiones de Manada y Tropa.';
  app.innerHTML = `<main id="main" class="scout-menu" style="background-image:linear-gradient(#1c160aa6,#1c160ab8),url('assets/zona-scout.webp')"><header class="scout-head"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="secondary" href="#inicio">← Menú principal</a></header><section class="scout-content scout-home"><div class="scout-home-intro"><div><p class="eyebrow">Acampando en Familia</p><h1>${esc(sectionTitle)}</h1></div><p>${esc(sectionDescription)}</p></div><div class="scout-branches"><section class="scout-branch scout-branch-manada"><figure class="scout-branch-visual"><img src="assets/insignias-aventuras-naturaleza.png" alt="Insignias completas de las cuatro Aventuras en la Naturaleza de Manada"></figure><div class="scout-branch-body"><p class="scout-branch-kicker">Manada</p><h2>Lobatos y Lobeznas</h2><p>Listas sencillas para cada salida, preparación de campamento y seguimiento de progresiones.</p><nav class="scout-branch-actions" aria-label="Opciones de Manada"><a href="#scout/manada"><span>Equipo, hábitos y aprendizaje</span><strong>Abrir herramientas de Manada</strong><b aria-hidden="true">→</b></a><a href="#scout/aventuras"><span>Aventuras en la Naturaleza</span><strong>Abrir las progresiones de Manada</strong><b aria-hidden="true">→</b></a></nav></div></section><section class="scout-branch scout-branch-tropa"><figure class="scout-branch-visual"><img src="assets/tropa-aventuras-completa.png" alt="Insignias completas de las cuatro Aventuras en la Naturaleza de Tropa"></figure><div class="scout-branch-body"><p class="scout-branch-kicker">Scout · Tropa</p><h2>Vida de patrulla</h2><p>Preparación para cada actividad y una bitácora personal para recorrer los territorios con mayor autonomía.</p><nav class="scout-branch-actions" aria-label="Opciones de Tropa"><a href="#scout/tropa"><span>Equipo, autonomía y progresiones</span><strong>Abrir herramientas de Tropa</strong><b aria-hidden="true">→</b></a><a href="#scout/tropa/aventuras"><span>Aventuras en la Naturaleza</span><strong>Lleva tu proceso de insignias</strong><b aria-hidden="true">→</b></a></nav></div></section></div></section></main>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const scoutBack = document.querySelector('.scout-head .secondary');
  if (scoutBack) { scoutBack.classList.add('menu-back'); scoutBack.textContent = 'Menú principal'; }
}

route = function () {
  if (location.hash.startsWith('#administrador')) window.LOBATOS_ADMIN?.renderAdmin();
  else if (window.LOBATOS_ADMIN && !window.LOBATOS_ADMIN.canNavigate(location.hash)) window.LOBATOS_ADMIN.renderLocked(location.hash);
  else if (location.hash.startsWith('#scout/aventuras')) manadaProgressPage();
  else if (location.hash === '#scout/manada' || location.hash === '#scout/manada/') manadaHomePage();
  else if (location.hash.startsWith('#scout/manada/bolsillo')) manadaQuickPage('bolsillo');
  else if (location.hash.startsWith('#scout/manada/ataque')) manadaQuickPage('ataque');
  else if (location.hash.startsWith('#scout/manada/salida')) manadaCampPage();
  else if (location.hash === '#senderismo' || location.hash === '#senderismo/' || location.hash.startsWith('#senderismo/guia') || location.hash.startsWith('#senderismo/videos') || location.hash.startsWith('#senderismo/verificar')) { history.replaceState(null, '', '#senderismo/salida'); stylePage('senderismo'); }
  else if (location.hash.startsWith('#senderismo')) stylePage('senderismo');
  else if (location.hash === '#bushcraft' || location.hash === '#bushcraft/' || location.hash.startsWith('#bushcraft/guia') || location.hash.startsWith('#bushcraft/videos') || location.hash.startsWith('#bushcraft/verificar')) { history.replaceState(null, '', '#bushcraft/salida'); stylePage('bushcraft'); }
  else if (location.hash.startsWith('#bushcraft')) stylePage('bushcraft');
  else if (location.hash === '#ultraligera' || location.hash === '#ultraligera/' || location.hash.startsWith('#ultraligera/guia') || location.hash.startsWith('#ultraligera/videos') || location.hash.startsWith('#ultraligera/verificar')) { history.replaceState(null, '', '#ultraligera/salida'); stylePage('ultraligera'); }
  else if (location.hash.startsWith('#ultraligera')) stylePage('ultraligera');
  else if (location.hash.startsWith('#scout/tropa/aventuras')) tropaProgressPage();
  else if (location.hash.startsWith('#scout/tropa/bolsillo')) tropaQuickPage('bolsillo');
  else if (location.hash.startsWith('#scout/tropa/ataque')) tropaQuickPage('ataque');
  else if (location.hash.startsWith('#scout/tropa/campamento') || location.hash.startsWith('#scout/tropa/salida')) tropaCampPage();
  else if (location.hash === '#scout/tropa' || location.hash === '#scout/tropa/' || location.hash.startsWith('#scout/tropa')) tropaHomePage();
  else if (location.hash.startsWith('#scout/manada')) stylePage('manada');
  else if (location.hash === '#coche' || location.hash === '#coche/' || location.hash.startsWith('#coche/guia') || location.hash.startsWith('#coche/videos') || location.hash.startsWith('#coche/verificar')) { history.replaceState(null, '', '#coche/salida'); stylePage('coche'); }
  else if (location.hash.startsWith('#coche')) stylePage('coche');
  else if (location.hash.startsWith('#tecnicas')) resourcePage('tecnicas');
  else if (location.hash.startsWith('#reviews')) resourcePage('reviews');
  else menu(location.hash === '#scout');
  window.scrollTo(0, 0);
};

car = function () { stylePage('coche'); };

function stylePage(mode) {
  switchMode(mode);
  const cfg = MODE_CONFIGS[mode];
  const parts = location.hash.slice(1).split('/');
  const isScoutMode = ['tropa', 'manada'].includes(mode);
  const requestedTab = isScoutMode ? parts[2] || 'guia' : parts[1] || 'guia';
  const isUnifiedMode = ['coche', 'senderismo', 'bushcraft', 'ultraligera'].includes(mode);
  const tab = isUnifiedMode ? 'salida' : requestedTab;
  const backHref = isScoutMode ? '#scout' : '#inicio', backLabel = isScoutMode ? '← Volver a Zona Scout' : '← Volver a las formas de acampar';
  const tabs = [['guia', 'Conocer esta modalidad'], ['salida', 'Preparar mi salida'], ['verificar', 'Antes, durante y después']];
  const tabbar = isUnifiedMode ? '' : `<nav class="tabbar" aria-label="Secciones de ${cfg.title}">${tabs.map(([id, label]) => `<a href="#${cfg.hash}/${id}" ${tab === id ? 'class="active" aria-current="page"' : ''}>${label}</a>`).join('')}${mode === 'manada' ? '<a href="#scout/aventuras">Mi Camino de Aventuras</a>' : ''}${mode === 'tropa' ? '<a href="#scout/tropa/aventuras">Mi ruta de territorios</a>' : ''}</nav>`;
  app.innerHTML = `<div class="shell mode-${mode}"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><span class="save-state">Tus salidas se guardan en este navegador</span><button class="secondary" id="compare-top">⇄ Comparar modalidades</button></header><main id="main" class="container"><section class="intro"><div><a href="${backHref}">${backLabel}</a><p class="eyebrow">${cfg.eyebrow}</p><h1>${cfg.title}</h1><p>${cfg.description}</p><div class="pills">${cfg.pills.map(x => `<span class="pill">${x}</span>`).join('')}</div></div><div class="intro-art" style="background-image:url('${cfg.art}');background-position:center;background-size:cover" role="img" aria-label="Fotografía de ${cfg.title}"></div></section>${tabbar}<div id="trip-context"></div><div id="content"></div><p class="muted">Los datos se guardan solo en este navegador y por modalidad. Exporta un respaldo si quieres conservar o trasladar una salida.</p><p class="offline-state" id="offline-state"></p></main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const channel = document.createElement('a');
  channel.className = 'youtube-brand section-youtube';
  channel.href = 'https://www.youtube.com/@acampandoenfamilia';
  channel.target = '_blank';
  channel.rel = 'noopener noreferrer';
  channel.textContent = '▶ YouTube · Acampando en Familia ↗';
  document.querySelector('#compare-top').before(channel);
  document.querySelector('#compare-top').onclick = compare;
  renderTripContext();
  if (tab === 'salida') preparation(); else guide();
}

compare = function () {
  dialog.classList.add('wide-dialog');
  const activeExtra = comparisonExtra || (currentMode === 'ultraligera' ? 'Ultraligera' : currentMode === 'tropa' ? 'Campamento Scout' : currentMode === 'manada' ? 'Campamento de Manada' : '');
  const extra = compareData.find(x => x[0] === activeExtra);
  const cols = [...compareData.slice(0, 3), ...(extra ? [extra] : [])];
  const selectedName = currentMode === 'senderismo' ? 'Backpacking' : currentMode === 'bushcraft' ? 'Bushcraft' : currentMode === 'ultraligera' ? 'Ultraligera' : currentMode === 'tropa' ? 'Campamento Scout' : currentMode === 'manada' ? 'Campamento de Manada' : 'Camping con coche';
  const selected = cols.findIndex(x => x[0] === selectedName);
  const displayName = name => name === 'Backpacking' ? 'Mochilero o Backpacking' : name === 'Ultraligera' ? 'Acampada ultraligera' : name;
  modal(`<p class="eyebrow">Referencia de la guía principal</p><h2>Matriz de comparación</h2><label class="field">Agregar otra modalidad<select id="compare-extra"><option value="">Solo las tres referencias</option>${compareData.slice(3).map(x => `<option ${activeExtra === x[0] ? 'selected' : ''}>${x[0]}</option>`).join('')}</select></label><div class="table-wrap"><table><thead><tr><th>Atributo</th>${cols.map((x, i) => `<th ${i === selected ? 'class="selected"' : ''}>${displayName(x[0])}</th>`).join('')}</tr></thead><tbody>${['Ligereza', 'Habilidad requerida', 'Confort en campamento', 'Movilidad diaria', 'Peso base típico'].map((label, i) => `<tr><th scope="row">${label}</th>${cols.map((x, n) => `<td ${n === selected ? 'class="selected"' : ''}>${i < 4 ? `${x[i + 1]} / 5` : x[i + 1]}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p><strong>Cómo leerla:</strong> 1 = bajo y 5 = alto. Más ligereza favorece un kit ligero; más habilidad indica mayor exigencia. Un nivel alto no significa que una modalidad sea mejor.</p><p class="muted">Peso base: equipo sin comida, agua ni combustible. Son rangos orientativos para comparar estilos y no límites personales de carga.</p>`);
  document.querySelector('#compare-extra').onchange = e => { comparisonExtra = e.target.value; dialog.close(); compare(); };
};

tripPicker = function () {
  return `<div class="toolbar"><label for="trip-select"><strong>Salida actual</strong></label><select id="trip-select" aria-label="Salida actual">${storeState.trips.map(t => `<option value="${t.id}" ${t.id === trip().id ? 'selected' : ''}>${esc(t.name || 'Salida sin nombre')}</option>`).join('')}</select><span class="spacer"></span><button class="secondary" id="new-trip">Nueva salida</button><button class="secondary" id="duplicate-trip">Duplicar</button><button class="secondary" id="print-trip">Imprimir</button><button class="secondary" id="export-backup">Exportar respaldo</button><button class="secondary" id="import-backup">Importar / recuperar</button><input id="backup-file" type="file" accept=".json,.csv,application/json,text/csv" hidden></div>`;
};

bindTripPicker = function () {
  const cfg = MODE_CONFIGS[currentMode];
  document.querySelector('#trip-select').onchange = e => { storeState.active = e.target.value; save(); stylePage(currentMode); };
  document.querySelector('#new-trip').onclick = () => { const t = makeModeTrip(currentMode); t.name = `Salida ${storeState.trips.length + 1}`; storeState.trips.push(t); storeState.active = t.id; save(); stylePage(currentMode); toast('Nueva salida creada'); };
  document.querySelector('#duplicate-trip').onclick = () => { const t = structuredClone(trip()); t.id = crypto.randomUUID(); t.name = `${t.name} · copia`; t.start = ''; t.end = ''; t.checks = {}; Object.values(t.items).forEach(i => { if (i.status === 'packed') i.status = 'pending'; }); storeState.trips.push(t); storeState.active = t.id; save(); stylePage(currentMode); toast('Copia creada con las casillas pendientes'); };
  document.querySelector('#print-trip').onclick = previewPrint;
  document.querySelector('#export-backup').onclick = exportBackup;
  document.querySelector('#import-backup').onclick = () => document.querySelector('#backup-file').click();
  document.querySelector('#backup-file').onchange = e => { const file = e.target.files?.[0]; if (file) importBackup(file); e.target.value = ''; };
};

preparation = function () {
  const t = trip(), cfg = MODE_CONFIGS[currentMode];
  const isScout = ['tropa', 'manada'].includes(currentMode);
  const fields = [['name', isScout ? 'Nombre del campamento' : 'Nombre de la salida', 'text'], ['familyName', isScout ? cfg.identityLabel : 'Nombre de tu familia', 'text'], ...(isScout ? [['groupNumber', cfg.numberLabel, 'text']] : []), ['destination', currentMode === 'senderismo' || currentMode === 'ultraligera' ? 'Ruta / zona de campamento' : currentMode === 'bushcraft' ? 'Terreno / zona de práctica' : isScout ? 'Lugar del campamento' : 'Destino / nombre del camping', 'text'], ['address', 'Ubicación / dirección o coordenadas', 'text'], ['mapsUrl', 'Enlace de Google Maps', 'url'], ['start', 'Fecha de salida', 'date'], ['departureTime', 'Hora de salida', 'time'], ['end', 'Fecha de regreso', 'date'], ['returnTime', 'Hora estimada de regreso', 'time'], ['adults', isScout ? 'Responsables adultos' : 'Adultos', 'number'], ['children', isScout ? 'Participantes menores' : 'Menores', 'number'], ['ages', isScout ? 'Edades de participantes menores' : 'Edades de los menores', 'text'], ['weather', 'Condiciones previstas', 'text']];
  document.querySelector('#content').innerHTML = tripPicker() + `<section class="panel"><h2>Los datos de tu viaje</h2><div class="form-grid">${fields.map(([key, label, type]) => `<label class="field">${label}<input data-field="${key}" type="${type}" value="${esc(t[key])}" ${type === 'number' ? `min="${key === 'adults' ? 1 : 0}" max="50"` : ''} ${key === 'end' && t.start ? `min="${t.start}"` : ''}></label>`).join('')}${cfg.services.map(([key, label]) => `<label class="field">${label}<select data-field="${key}">${['Por confirmar', 'Sí', 'No'].map(v => `<option ${t[key] === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label>`).join('')}</div><p class="muted">Las cantidades personales consideran adultos y menores. Ajusta cada artículo, peso y responsable según la ruta, el lugar y la experiencia real del grupo.</p><div id="trip-advice"></div></section><section aria-labelledby="equipment-title"><div class="toolbar"><h2 id="equipment-title">Checklist de equipo</h2><span class="spacer"></span><button class="secondary" id="reset-items">Reiniciar casillas</button></div><div id="progress"></div><div class="toolbar"><input id="search-equipment" type="search" placeholder="Buscar equipo…" aria-label="Buscar equipo" value="${esc(search)}"><label><input id="pending-filter" type="checkbox" ${filterPending ? 'checked' : ''}> Solo pendientes</label></div><div id="equipment-list"></div><section class="panel"><h3>Añadir equipo propio</h3><form id="custom-form" class="item-custom-form"><input name="name" maxlength="100" required placeholder="Nombre del artículo" aria-label="Nombre del artículo propio"><button class="primary">Añadir artículo</button></form></section></section><section class="panel"><label class="field">Notas de esta salida<textarea id="trip-notes" placeholder="Ruta, litros de agua, menú, permisos, pendientes, aprendizajes…">${esc(t.notes)}</textarea></label></section>`;
  bindTripPicker();
  document.querySelectorAll('[data-field]').forEach(el => el.onchange = () => {
    let v = el.value;
    if (el.dataset.field === 'mapsUrl' && v && !validMapsUrl(v)) { el.value = t.mapsUrl; toast('Usa un enlace HTTPS de Google Maps, maps.app.goo.gl o maps.google.com'); return; }
    if (el.type === 'number') { v = Number(v); if (!Number.isInteger(v) || v < Number(el.min) || v > 50) { el.reportValidity(); el.value = t[el.dataset.field]; return; } }
    if (el.dataset.field === 'end' && t.start && v && v < t.start) { el.value = t.end; toast('El regreso debe ser igual o posterior a la salida'); return; }
    const proposed = { ...t, [el.dataset.field]: v };
    if (['departureTime', 'returnTime', 'end'].includes(el.dataset.field) && proposed.start && proposed.end && proposed.start === proposed.end && proposed.departureTime && proposed.returnTime && proposed.returnTime < proposed.departureTime) { el.value = t[el.dataset.field]; toast('El regreso debe ser posterior a la salida'); return; }
    t[el.dataset.field] = v;
    if (el.dataset.field === 'start') { const end = document.querySelector('[data-field=end]'); end.min = v; if (t.end && t.end < v) { t.end = ''; end.value = ''; toast('Revisa la fecha de regreso'); } }
    save();
    if (el.dataset.field === 'name') document.querySelector('#trip-select option:checked').textContent = v || 'Salida sin nombre';
    renderTripContext(); renderAdvice(); renderChecklist();
  });
  document.querySelectorAll('[data-field]').forEach(el => { if (['text', 'url'].includes(el.type)) el.addEventListener('input', () => { t[el.dataset.field] = el.value; save(); renderTripContext(); if (el.dataset.field === 'name') document.querySelector('#trip-select option:checked').textContent = el.value || 'Salida sin nombre'; }); });
  document.querySelector('#trip-notes').oninput = e => { t.notes = e.target.value; save(); };
  document.querySelector('#search-equipment').oninput = e => { search = e.target.value; renderChecklist(); };
  document.querySelector('#pending-filter').onchange = e => { filterPending = e.target.checked; renderChecklist(); };
  document.querySelector('#reset-items').onclick = confirmReset;
  document.querySelector('#custom-form').onsubmit = e => { e.preventDefault(); const input = e.target.elements.name, name = input.value.trim(); if (!name) return; trip().custom.push(['custom-' + crypto.randomUUID(), name, 'Personalizado', 'grupo', 'Artículo añadido por ti.', 'Define cantidad, responsable y notas.', 'Comprueba que sea adecuado y permitido.']); save(); opened.add('Mi equipo adicional'); input.value = ''; renderChecklist(); toast('Artículo añadido'); };
  renderAdvice(); renderChecklist();
};

const prepareModeChecklist = preparation;
preparation = function () {
  prepareModeChecklist();
  const isCar = currentMode === 'coche';
  const isBackpacking = currentMode === 'senderismo';
  const isBushcraft = currentMode === 'bushcraft';
  const isUltralight = currentMode === 'ultraligera';
  if (!isCar && !isBackpacking && !isBushcraft && !isUltralight) return;
  const experienceGroups = isBackpacking ? BACKPACKING_EXPERIENCE_GROUPS : isBushcraft ? BUSHCRAFT_EXPERIENCE_GROUPS : isUltralight ? ULTRALIGHT_EXPERIENCE_GROUPS : CAR_EXPERIENCE_GROUPS;
  const prefix = isBackpacking ? 'backpacking-prep' : isBushcraft ? 'bushcraft-prep' : isUltralight ? 'ultralight-prep' : 'car-prep';
  const intro = document.createElement('section');
  intro.className = 'panel car-checklist-intro';
  intro.innerHTML = isBackpacking
    ? `<p class="eyebrow">Una sola guía · ocho módulos</p><h2>Prepara tu ruta con ayuda de nuestros videos</h2><p>Cada artículo reúne su checklist, los criterios para elegirlo y el video que lo acompaña. Busca la llamada <strong>“Consulta la guía y el video”</strong>; cuando el tutorial todavía no esté publicado verás claramente <strong>“Video próximamente”</strong>.</p><nav class="car-module-index" aria-label="Módulos de preparación de Backpacking">${experienceGroups.map(group => `<a href="#${prefix}-${group.id}" data-car-module="${prefix}-${group.id}"><span>${group.number}</span>${group.title}</a>`).join('')}</nav>`
    : isBushcraft
    ? `<p class="eyebrow">Una sola guía · ocho módulos</p><h2>Prepara tu práctica Bushcraft con ayuda de nuestros videos</h2><p>Cada artículo reúne su checklist, los criterios técnicos y el video que lo acompaña. Los módulos separan permiso, refugio, herramientas, fuego, agua y respuesta de emergencia para que ninguna práctica dependa de improvisaciones.</p><nav class="car-module-index" aria-label="Módulos de preparación de Bushcraft">${experienceGroups.map(group => `<a href="#${prefix}-${group.id}" data-car-module="${prefix}-${group.id}"><span>${group.number}</span>${group.title}</a>`).join('')}</nav>`
    : isUltralight
    ? `<p class="eyebrow">Una sola guía · seis módulos</p><h2>Diseña tu sistema ultraligero con ayuda de nuestros videos</h2><p>Cada artículo reúne su checklist, criterios técnicos y un espacio para su tutorial. Reduce peso por función, prueba el sistema completo y conserva agua, abrigo, descanso, navegación y emergencia; cuando el video aún no exista verás <strong>“Video próximamente”</strong>.</p><nav class="car-module-index" aria-label="Módulos de preparación de Acampada ultraligera">${experienceGroups.map(group => `<a href="#${prefix}-${group.id}" data-car-module="${prefix}-${group.id}"><span>${group.number}</span>${group.title}</a>`).join('')}</nav>`
    : `<p class="eyebrow">Una sola guía · nueve módulos</p><h2>Prepara tu campamento con ayuda de nuestros videos</h2><p>Cada artículo reúne su checklist, la explicación para elegirlo y el video que lo acompaña. Busca la llamada <strong>“Consulta la guía y el video”</strong>; cuando el tutorial todavía no esté publicado verás claramente <strong>“Video próximamente”</strong>.</p><nav class="car-module-index" aria-label="Módulos de preparación">${experienceGroups.map(group => `<a href="#${prefix}-${group.id}" data-car-module="${prefix}-${group.id}"><span>${group.number}</span>${group.title}</a>`).join('')}</nav>`;
  const toolbar = document.querySelector('#content > .toolbar');
  document.querySelector('#content').insertBefore(intro, toolbar?.nextSibling || document.querySelector('#content').firstChild);
  document.querySelector('#equipment-title').textContent = isBackpacking ? 'Prepara tu ruta' : isBushcraft ? 'Prepara tu práctica' : isUltralight ? 'Prepara tu sistema' : 'Prepara tu campamento';
  intro.querySelectorAll('[data-car-module]').forEach(link => link.onclick = event => { event.preventDefault(); document.getElementById(link.dataset.carModule)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
};

function carVideosForItem(i) {
  const videos = typeof CAR_ITEM_VIDEOS === 'undefined' ? null : CAR_ITEM_VIDEOS[i[0]];
  const fallback = videos?.length ? videos : [[null, `Cómo elegir y comprobar ${i[1].toLocaleLowerCase('es')}`, 'Próximamente']];
  return window.LOBATOS_ADMIN?.itemVideoTuples('coche', i[0], fallback) || fallback;
}

function backpackingVideosForItem(i) {
  const byName = typeof BACKPACKING_PLANNED_VIDEOS === 'undefined' ? {} : {
    'Tienda ligera o tarp.': [BACKPACKING_PLANNED_VIDEOS.shelter],
    'Rompeviento y protección para lluvia': [BACKPACKING_PLANNED_VIDEOS.rain]
  };
  const videos = typeof BACKPACKING_ITEM_VIDEOS === 'undefined' ? null : BACKPACKING_ITEM_VIDEOS[i[0]] || byName[i[1]];
  const fallback = videos?.length ? videos : [[null, `Cómo elegir y comprobar ${i[1].toLocaleLowerCase('es')}`, 'Próximamente']];
  return window.LOBATOS_ADMIN?.itemVideoTuples('senderismo', i[0], fallback) || fallback;
}

function bushcraftVideosForItem(i) {
  const byName = typeof BUSHCRAFT_PLANNED_VIDEOS === 'undefined' ? {} : {
    'Mochila': [BUSHCRAFT_VIDEO_LIBRARY.packLoad, BUSHCRAFT_VIDEO_LIBRARY.backpack, BUSHCRAFT_PLANNED_VIDEOS.pack],
    'Mochila de ataque': [BUSHCRAFT_VIDEO_LIBRARY.packLoad, BUSHCRAFT_PLANNED_VIDEOS.assaultPack]
  };
  const videos = typeof BUSHCRAFT_ITEM_VIDEOS === 'undefined' ? null : BUSHCRAFT_ITEM_VIDEOS[i[0]] || byName[i[1].trim()];
  const fallback = videos?.length ? videos : [[null, `Cómo elegir y comprobar ${i[1].trim().toLocaleLowerCase('es')}`, 'Próximamente']];
  return window.LOBATOS_ADMIN?.itemVideoTuples('bushcraft', i[0], fallback) || fallback;
}

function ultralightVideosForItem(i) {
  const videos = typeof ULTRALIGHT_ITEM_VIDEOS === 'undefined' ? null : ULTRALIGHT_ITEM_VIDEOS[i[0]];
  const fallback = videos?.length ? videos : [[null, `Cómo elegir y comprobar ${i[1].trim().toLocaleLowerCase('es')}`, 'Próximamente']];
  return window.LOBATOS_ADMIN?.itemVideoTuples('ultraligera', i[0], fallback) || fallback;
}

function experienceChecklistItem(i, videos) {
  const state = itemState(i[0]);
  const published = videos.filter(video => video[0]).length;
  const videoLabel = published ? `▶ ${published === 1 ? 'Video disponible' : `${published} videos disponibles`}` : '▶ Video próximamente';
  return `<div class="item ${state.status === 'packed' ? 'done' : ''} ${state.status === 'na' ? 'na' : ''}"><input type="checkbox" data-check="${i[0]}" aria-label="Empacado: ${esc(i[1])}" ${state.status === 'packed' ? 'checked' : ''} ${state.status === 'na' ? 'disabled' : ''}><button class="item-button" data-detail="${i[0]}"><strong>${esc(i[1])}</strong><small>${i[2]} · Cantidad: ${qty(i)}${state.owner ? ' · ' + esc(state.owner) : ''}${state.status === 'na' ? ' · No aplica' : ''}${state.note ? ' · ' + esc(state.note) : ''}</small><span class="item-guidance-cta"><b class="item-video-status ${published ? 'is-published' : 'is-coming'}">${videoLabel}</b><span>ⓘ Consulta la guía y el video</span></span></button><select data-status="${i[0]}" aria-label="Estado de ${esc(i[1])}">${[['pending', 'Pendiente'], ['packed', 'Empacado'], ['na', 'No aplica']].map(([v, l]) => `<option value="${v}" ${state.status === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>`;
}

function carChecklistItem(i) { return experienceChecklistItem(i, carVideosForItem(i)); }
function backpackingChecklistItem(i) { return experienceChecklistItem(i, backpackingVideosForItem(i)); }
function bushcraftChecklistItem(i) { return experienceChecklistItem(i, bushcraftVideosForItem(i)); }
function ultralightChecklistItem(i) { return experienceChecklistItem(i, ultralightVideosForItem(i)); }

function renderCarUnifiedChecklist() {
  const equipmentGroups = groups();
  let count = 0;
  const modules = CAR_EXPERIENCE_GROUPS.map((group, index) => {
    const [category, items = []] = equipmentGroups[index] || [group.title, []];
    const visible = items.filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es')));
    if (!visible.length && (search || filterPending)) return '';
    count += visible.length;
    const moduleStats = stats(items);
    const details = group.sections.map(([title, body], sectionIndex) => `<details class="car-learning-details" ${sectionIndex === 0 ? 'open' : ''}><summary><span>${String(sectionIndex + 1).padStart(2, '0')}</span>${title}</summary><div class="car-learning-body">${body}</div></details>`).join('');
    const assigned = new Set(items.flatMap(item => carVideosForItem(item)).map(video => video[0] || video[1]));
    const complementary = group.videos.filter(video => !assigned.has(video[0] || video[1]));
    const complementaryBlock = complementary.length ? `<details class="car-module-videos"><summary><span>Videos complementarios</span><small>Contenido adicional del módulo</small></summary><div class="car-video-grid">${complementary.map(carVideoCard).join('')}</div></details>` : '';
    return `<section class="panel car-prep-module" id="car-prep-${group.id}"><header class="car-prep-head"><span class="car-prep-number">${group.number}</span><span class="car-learning-icon" aria-hidden="true">${group.icon}</span><div><p class="eyebrow">Módulo ${group.number}</p><h2>${group.title}</h2><p>${group.summary}</p></div><div class="car-module-progress"><strong>${moduleStats.done}/${moduleStats.total}</strong><small>empacados</small><progress value="${moduleStats.done}" max="${moduleStats.total || 1}" aria-label="Progreso de ${esc(group.title)}"></progress></div></header><div class="car-decision"><strong>Decisión práctica</strong><p>${group.decision}</p></div><section class="car-module-checklist" aria-labelledby="car-check-${group.id}"><div class="car-module-title"><h3 id="car-check-${group.id}">Checklist del módulo</h3><small>Abre cada artículo para consultar su guía y su video.</small></div>${visible.length ? visible.map(carChecklistItem).join('') : '<p class="muted">No hay artículos que coincidan con este filtro.</p>'}</section><details class="car-module-learning"><summary><span>Guía general del módulo</span><small>Criterios técnicos complementarios</small></summary><div class="car-learning-sections">${details}</div></details>${complementaryBlock}</section>`;
  }).join('');
  const customGroup = equipmentGroups.find(([category]) => category === 'Mi equipo adicional');
  const customItems = customGroup ? customGroup[1].filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es'))) : [];
  count += customItems.length;
  const custom = customItems.length ? `<section class="panel car-custom-module"><h2>Mi equipo adicional</h2><p class="muted">Artículos que agregaste para esta salida.</p>${customItems.map(carChecklistItem).join('')}</section>` : '';
  const stories = `<section class="panel car-family-stories"><div><p class="eyebrow">Experiencias en familia</p><h2>El campamento también se aprende viviéndolo</h2><p>Estas historias muestran el contexto familiar de la modalidad. Complementan la guía técnica y ayudan a imaginar la experiencia completa.</p></div><div class="car-video-grid">${CAR_FAMILY_STORIES.map(carVideoCard).join('')}</div></section>`;
  document.querySelector('#equipment-list').innerHTML = (modules + custom) || '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  if (!search && !filterPending) document.querySelector('#equipment-list').insertAdjacentHTML('beforeend', stories);
  if (!count && (search || filterPending)) document.querySelector('#equipment-list').innerHTML = '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  bindCarVideos(document.querySelector('#equipment-list'));
}

function renderBackpackingUnifiedChecklist() {
  const equipmentGroups = groups();
  let count = 0;
  const modules = BACKPACKING_EXPERIENCE_GROUPS.map((group, index) => {
    const [category, items = []] = equipmentGroups[index] || [group.title, []];
    const visible = items.filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es')));
    if (!visible.length && (search || filterPending)) return '';
    count += visible.length;
    const moduleStats = stats(items);
    const details = group.sections.map(([title, body], sectionIndex) => `<details class="car-learning-details" ${sectionIndex === 0 ? 'open' : ''}><summary><span>${String(sectionIndex + 1).padStart(2, '0')}</span>${title}</summary><div class="car-learning-body">${body}</div></details>`).join('');
    const assigned = new Set(items.flatMap(item => backpackingVideosForItem(item)).map(video => video[0] || video[1]));
    const complementary = group.videos.filter(video => !assigned.has(video[0] || video[1]));
    const complementaryBlock = complementary.length ? `<details class="car-module-videos"><summary><span>Videos complementarios</span><small>Contenido adicional del módulo</small></summary><div class="car-video-grid">${complementary.map(carVideoCard).join('')}</div></details>` : '';
    return `<section class="panel car-prep-module" id="backpacking-prep-${group.id}"><header class="car-prep-head"><span class="car-prep-number">${group.number}</span><span class="car-learning-icon" aria-hidden="true">${group.icon}</span><div><p class="eyebrow">Módulo ${group.number}</p><h2>${group.title}</h2><p>${group.summary}</p></div><div class="car-module-progress"><strong>${moduleStats.done}/${moduleStats.total}</strong><small>empacados</small><progress value="${moduleStats.done}" max="${moduleStats.total || 1}" aria-label="Progreso de ${esc(group.title)}"></progress></div></header><div class="car-decision"><strong>Decisión práctica</strong><p>${group.decision}</p></div><section class="car-module-checklist" aria-labelledby="backpacking-check-${group.id}"><div class="car-module-title"><h3 id="backpacking-check-${group.id}">Checklist del módulo</h3><small>Abre cada artículo para consultar su guía y su video.</small></div>${visible.length ? visible.map(backpackingChecklistItem).join('') : '<p class="muted">No hay artículos que coincidan con este filtro.</p>'}</section><details class="car-module-learning"><summary><span>Guía general del módulo</span><small>Criterios técnicos complementarios</small></summary><div class="car-learning-sections">${details}</div></details>${complementaryBlock}</section>`;
  }).join('');
  const customGroup = equipmentGroups.find(([category]) => category === 'Mi equipo adicional');
  const customItems = customGroup ? customGroup[1].filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es'))) : [];
  count += customItems.length;
  const custom = customItems.length ? `<section class="panel car-custom-module"><h2>Mi equipo adicional</h2><p class="muted">Artículos que agregaste para esta ruta.</p>${customItems.map(backpackingChecklistItem).join('')}</section>` : '';
  document.querySelector('#equipment-list').innerHTML = (modules + custom) || '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  if (!count && (search || filterPending)) document.querySelector('#equipment-list').innerHTML = '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  bindCarVideos(document.querySelector('#equipment-list'));
}

function renderBushcraftUnifiedChecklist() {
  const equipmentGroups = groups();
  let count = 0;
  const modules = BUSHCRAFT_EXPERIENCE_GROUPS.map((group, index) => {
    const [category, items = []] = equipmentGroups[index] || [group.title, []];
    const visible = items.filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es')));
    if (!visible.length && (search || filterPending)) return '';
    count += visible.length;
    const moduleStats = stats(items);
    const details = group.sections.map(([title, body], sectionIndex) => `<details class="car-learning-details" ${sectionIndex === 0 ? 'open' : ''}><summary><span>${String(sectionIndex + 1).padStart(2, '0')}</span>${title}</summary><div class="car-learning-body">${body}</div></details>`).join('');
    const assigned = new Set(items.flatMap(item => bushcraftVideosForItem(item)).map(video => video[0] || video[1]));
    const complementary = group.videos.filter(video => !assigned.has(video[0] || video[1]));
    const complementaryBlock = complementary.length ? `<details class="car-module-videos"><summary><span>Videos complementarios</span><small>Contenido adicional del módulo</small></summary><div class="car-video-grid">${complementary.map(carVideoCard).join('')}</div></details>` : '';
    return `<section class="panel car-prep-module" id="bushcraft-prep-${group.id}"><header class="car-prep-head"><span class="car-prep-number">${group.number}</span><span class="car-learning-icon" aria-hidden="true">${group.icon}</span><div><p class="eyebrow">Módulo ${group.number}</p><h2>${group.title}</h2><p>${group.summary}</p></div><div class="car-module-progress"><strong>${moduleStats.done}/${moduleStats.total}</strong><small>empacados</small><progress value="${moduleStats.done}" max="${moduleStats.total || 1}" aria-label="Progreso de ${esc(group.title)}"></progress></div></header><div class="car-decision"><strong>Decisión práctica</strong><p>${group.decision}</p></div><section class="car-module-checklist" aria-labelledby="bushcraft-check-${group.id}"><div class="car-module-title"><h3 id="bushcraft-check-${group.id}">Checklist del módulo</h3><small>Abre cada artículo para consultar su guía y su video.</small></div>${visible.length ? visible.map(bushcraftChecklistItem).join('') : '<p class="muted">No hay artículos que coincidan con este filtro.</p>'}</section><details class="car-module-learning"><summary><span>Guía general del módulo</span><small>Criterios técnicos complementarios</small></summary><div class="car-learning-sections">${details}</div></details>${complementaryBlock}</section>`;
  }).join('');
  const customGroup = equipmentGroups.find(([category]) => category === 'Mi equipo adicional');
  const customItems = customGroup ? customGroup[1].filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es'))) : [];
  count += customItems.length;
  const custom = customItems.length ? `<section class="panel car-custom-module"><h2>Mi equipo adicional</h2><p class="muted">Artículos que agregaste para esta práctica.</p>${customItems.map(bushcraftChecklistItem).join('')}</section>` : '';
  document.querySelector('#equipment-list').innerHTML = (modules + custom) || '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  if (!count && (search || filterPending)) document.querySelector('#equipment-list').innerHTML = '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  bindCarVideos(document.querySelector('#equipment-list'));
}

function renderUltralightUnifiedChecklist() {
  const equipmentGroups = groups();
  let count = 0;
  const modules = ULTRALIGHT_EXPERIENCE_GROUPS.map((group, index) => {
    const [category, items = []] = equipmentGroups[index] || [group.title, []];
    const visible = items.filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es')));
    if (!visible.length && (search || filterPending)) return '';
    count += visible.length;
    const moduleStats = stats(items);
    const details = group.sections.map(([title, body], sectionIndex) => `<details class="car-learning-details" ${sectionIndex === 0 ? 'open' : ''}><summary><span>${String(sectionIndex + 1).padStart(2, '0')}</span>${title}</summary><div class="car-learning-body">${body}</div></details>`).join('');
    const assigned = new Set(items.flatMap(item => ultralightVideosForItem(item)).map(video => video[0] || video[1]));
    const complementary = group.videos.filter(video => !assigned.has(video[0] || video[1]));
    const complementaryBlock = complementary.length ? `<details class="car-module-videos"><summary><span>Videos complementarios</span><small>Contenido adicional del módulo</small></summary><div class="car-video-grid">${complementary.map(carVideoCard).join('')}</div></details>` : '';
    return `<section class="panel car-prep-module" id="ultralight-prep-${group.id}"><header class="car-prep-head"><span class="car-prep-number">${group.number}</span><span class="car-learning-icon" aria-hidden="true">${group.icon}</span><div><p class="eyebrow">Módulo ${group.number}</p><h2>${group.title}</h2><p>${group.summary}</p></div><div class="car-module-progress"><strong>${moduleStats.done}/${moduleStats.total}</strong><small>empacados</small><progress value="${moduleStats.done}" max="${moduleStats.total || 1}" aria-label="Progreso de ${esc(group.title)}"></progress></div></header><div class="car-decision"><strong>Decisión práctica</strong><p>${group.decision}</p></div><section class="car-module-checklist" aria-labelledby="ultralight-check-${group.id}"><div class="car-module-title"><h3 id="ultralight-check-${group.id}">Checklist del módulo</h3><small>Abre cada artículo para consultar su guía y su video.</small></div>${visible.length ? visible.map(ultralightChecklistItem).join('') : '<p class="muted">No hay artículos que coincidan con este filtro.</p>'}</section><details class="car-module-learning"><summary><span>Guía general del módulo</span><small>Criterios técnicos complementarios</small></summary><div class="car-learning-sections">${details}</div></details>${complementaryBlock}</section>`;
  }).join('');
  const customGroup = equipmentGroups.find(([category]) => category === 'Mi equipo adicional');
  const customItems = customGroup ? customGroup[1].filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es'))) : [];
  count += customItems.length;
  const custom = customItems.length ? `<section class="panel car-custom-module"><h2>Mi equipo adicional</h2><p class="muted">Artículos que agregaste para este sistema.</p>${customItems.map(ultralightChecklistItem).join('')}</section>` : '';
  document.querySelector('#equipment-list').innerHTML = (modules + custom) || '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  if (!count && (search || filterPending)) document.querySelector('#equipment-list').innerHTML = '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  bindCarVideos(document.querySelector('#equipment-list'));
}

renderChecklist = function () {
  if (!document.querySelector('#equipment-list')) return;
  const st = stats();
  const complete = ['coche', 'senderismo', 'bushcraft', 'ultraligera'].includes(currentMode) && st.total > 0 && st.done === st.total;
  const readyMessage = currentMode === 'senderismo'
    ? `<section class="car-ready-message"><img src="assets/interior-mochilero.jpeg" alt="Familia caminando con mochilas de travesía"><div><p class="eyebrow">Mochilas preparadas</p><h3>¡El equipo de la ruta está listo!</h3><p>Antes de partir, confirmen pronóstico, permisos, fuentes de agua, peso total, itinerario compartido y condiciones reales de cada integrante.</p></div></section>`
    : currentMode === 'bushcraft'
    ? `<section class="car-ready-message"><img src="assets/interior-bushcraft.jpeg" alt="Familia en un campamento Bushcraft"><div><p class="eyebrow">Práctica preparada</p><h3>¡El equipo Bushcraft está listo!</h3><p>Antes de comenzar, confirmen permiso, clima, límites de la práctica, plan de comunicación y que fuego, herramientas y residuos cumplen las reglas vigentes del lugar.</p></div></section>`
    : currentMode === 'ultraligera'
    ? `<section class="car-ready-message"><img src="assets/interior-ultraligera.jpeg" alt="Sistema ligero de campamento en familia"><div><p class="eyebrow">Sistema preparado</p><h3>¡El equipo ultraligero está listo!</h3><p>Antes de partir, confirmen ruta, clima, permisos, fuentes de agua, peso total, límites individuales, itinerario compartido y que cada persona conserva abrigo y equipo crítico accesible.</p></div></section>`
    : `<section class="car-ready-message"><img src="assets/interior-camping-coche.jpeg" alt="Campamento familiar junto al vehículo"><div><p class="eyebrow">Campamento preparado</p><h3>¡El equipo de esta salida está listo!</h3><p>Revisaron refugio, descanso, cocina, iluminación y equipo personal. Antes de cargar, confirmen clima, acceso, reserva y reglas vigentes del destino.</p></div></section>`;
  document.querySelector('#progress').innerHTML = `<div class="summary-strip"><div class="progress-copy"><strong>${st.done} de ${st.total} empacados</strong><div class="muted">${st.na} no aplican</div></div><div class="progress-track"><progress value="${st.done}" max="${st.total || 1}" aria-label="Progreso de equipo"></progress></div></div>${complete ? readyMessage : ''}`;
  if (currentMode === 'coche') {
    renderCarUnifiedChecklist();
  } else if (currentMode === 'senderismo') {
    renderBackpackingUnifiedChecklist();
  } else if (currentMode === 'bushcraft') {
    renderBushcraftUnifiedChecklist();
  } else if (currentMode === 'ultraligera') {
    renderUltralightUnifiedChecklist();
  } else {
    let count = 0;
    document.querySelector('#equipment-list').innerHTML = groups().map(([cat, items]) => {
    const visible = items.filter(i => (!filterPending || itemState(i[0]).status === 'pending') && i[1].toLocaleLowerCase('es').includes(search.toLocaleLowerCase('es')));
    if (!visible.length) return '';
    count += visible.length;
    const s = stats(items);
    return `<details class="category" data-category="${esc(cat)}" ${opened.has(cat) || search || filterPending ? 'open' : ''}><summary>${cat}<span class="cat-count">${s.done}/${s.total}</span></summary><div>${visible.map(i => {
      const state = itemState(i[0]);
      return `<div class="item ${state.status === 'packed' ? 'done' : ''} ${state.status === 'na' ? 'na' : ''}"><input type="checkbox" data-check="${i[0]}" aria-label="Empacado: ${esc(i[1])}" ${state.status === 'packed' ? 'checked' : ''} ${state.status === 'na' ? 'disabled' : ''}><button class="item-button" data-detail="${i[0]}"><strong>${esc(i[1])}</strong><span class="info">ⓘ</span><small>${i[2]} · Cantidad: ${qty(i)}${state.owner ? ' · ' + esc(state.owner) : ''}${state.status === 'na' ? ' · No aplica' : ''}${state.note ? ' · ' + esc(state.note) : ''}</small></button><select data-status="${i[0]}" aria-label="Estado de ${esc(i[1])}">${[['pending', 'Pendiente'], ['packed', 'Empacado'], ['na', 'No aplica']].map(([v, l]) => `<option value="${v}" ${state.status === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>`;
    }).join('')}</div></details>`;
    }).join('');
    if (!count) document.querySelector('#equipment-list').innerHTML = '<div class="panel empty">No hay artículos que coincidan con este filtro.</div>';
  }
  document.querySelectorAll('[data-category]').forEach(d => d.ontoggle = () => { d.open ? opened.add(d.dataset.category) : opened.delete(d.dataset.category); });
  document.querySelectorAll('[data-check]').forEach(e => e.onchange = () => setItemStatus(e.dataset.check, e.checked ? 'packed' : 'pending'));
  document.querySelectorAll('[data-status]').forEach(e => e.onchange = () => setItemStatus(e.dataset.status, e.value));
  document.querySelectorAll('[data-detail]').forEach(e => e.onclick = () => itemDetail(e.dataset.detail));
};

itemDetail = function (id) {
  const i = allItems().find(x => x[0] === id), st = itemState(id);
  const videos = currentMode === 'coche' ? carVideosForItem(i) : currentMode === 'senderismo' ? backpackingVideosForItem(i) : currentMode === 'bushcraft' ? bushcraftVideosForItem(i) : currentMode === 'ultraligera' ? ultralightVideosForItem(i) : [];
  const videoBlock = videos.length ? `<section class="item-detail-videos"><p class="eyebrow">Apréndelo en video</p><h3>${videos.some(video => video[0]) ? 'Mira el tutorial antes de elegir o empacar' : 'Tutorial considerado para este artículo'}</h3><div class="car-video-grid">${videos.map(carVideoCard).join('')}</div></section>` : '';
  modal(`<p class="eyebrow">${i[2]}</p><h2>${esc(i[1])}</h2>${videoBlock}<div class="item-criteria"><section><h3>Para qué sirve</h3><p>${esc(i[4])}</p></section><section><h3>Cómo elegirlo</h3><p>${esc(i[5])}</p></section><section><h3>Cómo comprobarlo antes de salir</h3><p>${esc(i[6])}</p></section></div><div class="grid2"><label class="field">Cantidad<input id="item-qty" type="number" min="1" max="999" value="${qty(i)}"></label><label class="field">Responsable<input id="item-owner" maxlength="80" value="${esc(st.owner || '')}" placeholder="¿Quién lo lleva?"></label></div><label class="field">Notas<textarea id="item-note">${esc(st.note || '')}</textarea></label><button class="primary" id="save-item">Guardar detalles</button>`);
  if (videos.length) bindCarVideos(dialog);
  document.querySelector('#save-item').onclick = () => {
    const q = document.querySelector('#item-qty');
    if (!q.reportValidity()) return;
    trip().items[id] = { ...itemState(id), qty: Number(q.value), owner: document.querySelector('#item-owner').value, note: document.querySelector('#item-note').value };
    save(); dialog.close(); renderChecklist(); toast('Detalles guardados');
  };
};

renderAdvice = function () {
  const t = trip();
  let text;
  if (currentMode === 'senderismo') text = `${t.water !== 'Sí' ? 'Fuentes de agua sin confirmar: calcula capacidad y tratamiento antes de caminar. ' : 'Fuentes indicadas: confirma caudal, acceso y tratamiento. '}${t.permit !== 'Sí' ? 'Permisos o reservas pendientes. ' : ''}${t.coverage !== 'Sí' ? 'No dependas de cobertura móvil; lleva navegación sin conexión y un plan de aviso. ' : ''}${t.children > 0 ? 'Ajusta distancia, peso, abrigo y descansos a los menores. ' : ''}`;
  else if (currentMode === 'tropa') text = `${t.water !== 'Sí' ? 'Agua potable sin confirmar: define abastecimiento, recipientes y tratamiento antes de cerrar el menú. ' : 'Agua potable indicada: confirma acceso, horarios y cantidad para cocina. '}${t.toilets !== 'Sí' ? 'Sanitarios sin confirmar: incluye higiene, papel y el sistema de residuos autorizado. ' : ''}${t.permit !== 'Sí' ? 'Permiso o reglas del campamento pendientes. ' : ''}${!t.familyName ? 'Agrega el nombre del grupo o tropa y su número antes de imprimir. ' : !t.groupNumber ? 'Agrega el número del grupo o tropa antes de imprimir. ' : ''}`;
  else if (currentMode === 'manada') text = `${t.water !== 'Sí' ? 'Agua potable sin confirmar: define recipientes y responsables de hidratación antes de salir. ' : 'Agua potable indicada: confirma acceso y la cantidad necesaria para el grupo. '}${t.toilets !== 'Sí' ? 'Sanitarios sin confirmar: prepara higiene, papel y el sistema de residuos autorizado. ' : ''}${t.permit !== 'Sí' ? 'Permiso o reglas del campamento pendientes. ' : ''}${!t.familyName ? 'Agrega el nombre de la manada y el número de grupo antes de imprimir. ' : !t.groupNumber ? 'Agrega el número de grupo antes de imprimir. ' : ''}`;
  else if (currentMode === 'ultraligera') text = `${t.water !== 'Sí' ? 'Fuentes de agua sin confirmar: define capacidad, tratamiento y respaldo antes de reducir peso. ' : 'Fuentes indicadas: confirma acceso, caudal y tratamiento. '}${t.permit !== 'Sí' ? 'Pernocta o reglas pendientes. ' : ''}${t.coverage !== 'Sí' ? 'No dependas de cobertura móvil; descarga la ruta y comparte un plan de aviso. ' : ''}${t.children > 0 ? 'La carga de cada menor se ajusta a su condición; no uses metas de peso de adulto. ' : ''}`;
  else if (currentMode === 'bushcraft') text = `${t.permit !== 'Sí' ? 'Revisa las reglas del terreno antes de practicar. ' : ''}${t.fire !== 'Sí' ? 'Fuego no confirmado: planea cocinar sin fogata y marca No aplica en esos artículos. ' : ''}${t.wood !== 'Sí' ? 'No cortes ni recolectes madera hasta tener claridad sobre las reglas del sitio. ' : ''}${t.children > 0 ? 'Define un perímetro sin acceso a herramientas, fuego ni combustible. ' : ''}`;
  else text = `${t.water !== 'Sí' ? 'Agua potable sin confirmar: revisa abastecimiento y tratamiento. ' : 'Confirma acceso y horarios del agua potable. '}${t.toilets !== 'Sí' ? 'Revisa baño portátil y desechos: privacidad, excusado, consumibles y disposición autorizada. ' : ''}${t.children > 0 ? 'Revisa tallas, descanso y necesidades de los menores. ' : ''}${t.electricity !== 'Sí' ? 'Prepara iluminación y carga autónomas. ' : ''}${t.fire !== 'Sí' ? 'La fogata no está confirmada: conserva la alternativa de cocina y marca ese módulo No aplica si el sitio no la permite.' : 'Confirma nuevamente las restricciones de fuego el día de la salida.'}`;
  document.querySelector('#trip-advice').innerHTML = `<div class="alert">${text}</div>`;
};

verification = function () {
  const cfg = MODE_CONFIGS[currentMode], modeChecks = MODE_CHECKS[currentMode];
  document.querySelector('#content').innerHTML = tripPicker() + `<p class="alert">Estas verificaciones complementan el equipo. Marca cada una solo después de comprobarla para esta salida.</p>${Object.entries(modeChecks).map(([cat, list], c) => `<section class="panel"><h2>${cat}</h2>${list.map((text, i) => `<label class="check-line"><input type="checkbox" data-verify="${c}-${i}" ${trip().checks[c + '-' + i] ? 'checked' : ''}>${text}</label>`).join('')}</section>`).join('')}<a class="primary" href="#${cfg.hash}/salida">Volver a mi equipo →</a>`;
  bindTripPicker();
  document.querySelectorAll('[data-verify]').forEach(e => e.onchange = () => { trip().checks[e.dataset.verify] = e.checked; save(); });
};

renderTripContext = function () {
  const box = document.querySelector('#trip-context'); if (!box) return;
  const t = trip(), cfg = MODE_CONFIGS[currentMode];
  const identity = ['tropa', 'manada'].includes(currentMode) ? (t.familyName ? `<span>${esc(cfg.identityLabel)}: ${esc(t.familyName)}${t.groupNumber ? ` · Núm. ${esc(t.groupNumber)}` : ''}</span>` : '') : (t.familyName ? `<span>Familia: ${esc(t.familyName)}</span>` : '');
  box.innerHTML = `<section class="trip-context" aria-label="Ubicación y horarios de la salida"><div><strong>${esc(t.name || 'Mi salida')}</strong>${identity}<span>${esc(t.destination || 'Destino por definir')}</span>${t.address ? `<small>${esc(t.address)}</small>` : ''}</div><div><small>Salida</small><strong>${dateLabel(t.start)} · ${esc(t.departureTime || 'Hora por definir')}</strong></div><div><small>Regreso estimado</small><strong>${dateLabel(t.end)} · ${esc(t.returnTime || 'Hora por definir')}</strong></div><div class="actions">${validMapsUrl(t.mapsUrl) ? `<a class="secondary" href="${esc(t.mapsUrl)}" target="_blank" rel="noopener noreferrer">Abrir Google Maps ↗</a>` : ''}<a href="#${cfg.hash}/salida" class="trip-edit">Editar ubicación y horarios</a></div></section>`;
};

buildPrintSheet = function () {
  if (!['#coche', '#senderismo', '#bushcraft', '#ultraligera', '#scout/tropa', '#scout/manada'].some(x => location.hash.startsWith(x))) return;
  let root = document.querySelector('#print-sheet');
  if (!root) { root = document.createElement('section'); root.id = 'print-sheet'; document.body.appendChild(root); }
  const t = trip(), st = stats(), cfg = MODE_CONFIGS[currentMode], isScout = ['tropa', 'manada'].includes(currentMode);
  const identityLabel = isScout ? 'Grupo / tropa' : 'Familia';
  const number = isScout ? `<div><b>Núm. de grupo:</b> ${esc(t.groupNumber || '________')}</div>` : '';
  const participants = isScout ? `${t.adults} responsables · ${t.children} participantes` : `${t.adults} adultos · ${t.children} menores`;
  root.innerHTML = `<header class="print-head"><div><strong>ACAMPANDO EN FAMILIA</strong><h1>${cfg.title} · Checklist</h1></div><div>${st.done}/${st.total} empacados</div></header><div class="print-meta"><div class="print-wide"><b>${identityLabel}:</b> ${esc(t.familyName || '________________')}</div>${number}<div><b>Salida:</b> ${esc(t.name)}</div><div><b>Grupo:</b> ${participants}</div><div class="print-wide"><b>Destino:</b> ${esc(t.destination || '________________')}</div><div class="print-wide"><b>Ubicación:</b> ${esc(t.address || '________________')}</div><div><b>Partida:</b> ${dateLabel(t.start)} · ${esc(t.departureTime || '____:____')}</div><div><b>Regreso:</b> ${dateLabel(t.end)} · ${esc(t.returnTime || '____:____')}</div>${validMapsUrl(t.mapsUrl) ? `<div class="print-wide print-map"><b>Mapa:</b> ${esc(t.mapsUrl)}</div>` : ''}</div><p class="print-legend">□ Pendiente · ✓ Empacado · Cant. = personas o juegos · Se omiten los artículos marcados No aplica.</p><div class="print-columns">${groups().map(([cat, items]) => { const active = items.filter(i => itemState(i[0]).status !== 'na'); return active.length ? `<section class="print-group"><h2>${esc(cat)}</h2>${active.map(i => `<div class="print-row"><span class="print-box">${itemState(i[0]).status === 'packed' ? '✓' : ''}</span><span>${esc(i[1])}${itemState(i[0]).owner ? ` <em>(${esc(itemState(i[0]).owner)})</em>` : ''}</span><b>×${qty(i)}</b></div>`).join('')}</section>` : ''; }).join('')}</div><footer class="print-footer"><b>Antes de salir</b><span>${cfg.footerChecks}</span><div><b>Pendiente importante:</b> ________________________________________________________</div></footer>`;
};

exportBackup = function () {
  const t = trip(), cfg = MODE_CONFIGS[currentMode];
  const rows = [['modalidad', 'familia', 'numero_grupo', 'salida', 'destino', 'ubicacion', 'fecha_salida', 'hora_salida', 'fecha_regreso', 'hora_regreso', 'categoria', 'articulo', 'estado', 'cantidad', 'responsable', 'notas']];
  for (const [cat, items] of groups()) for (const i of items) { const st = itemState(i[0]); rows.push([currentMode, t.familyName, t.groupNumber || '', t.name, t.destination, t.address, t.start, t.departureTime, t.end, t.returnTime, cat, i[1], st.status, qty(i), st.owner || '', st.note || '']); }
  const csv = rows.map(r => r.map(csvCell).join(',')).join('\n');
  const payload = { format: 'acampando-en-familia-backup', version: 2, style: currentMode, styleName: cfg.title, exportedAt: new Date().toISOString(), trip: t, csv };
  const slug = (t.name || 'salida').replace(/[^a-z0-9áéíóúñ ]/gi, '').trim().replace(/\s+/g, '-') || 'salida';
  downloadFile(`acampando-${currentMode}-${slug}.json`, JSON.stringify(payload, null, 2), 'application/json');
  setTimeout(() => downloadFile(`acampando-${currentMode}-${slug}.csv`, csv, 'text/csv;charset=utf-8'), 150);
  toast('Se descargaron los respaldos JSON y CSV');
};

function parseModeCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean), parse = line => { const out = []; let cur = '', quoted = false; for (let i = 0; i < line.length; i++) { const c = line[i]; if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') quoted = !quoted; else if (c === ',' && !quoted) { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; };
  if (lines.length < 2) throw Error('CSV vacío');
  const h = parse(lines[0]), idx = key => h.indexOf(key), rows = lines.slice(1).map(parse);
  const rawMode = idx('modalidad') >= 0 ? rows[0][idx('modalidad')] : 'coche';
  const mode = MODE_CONFIGS[rawMode] ? rawMode : 'coche';
  const base = makeModeTrip(mode);
  base.name = rows[0][idx('salida')] || 'Salida recuperada'; base.familyName = rows[0][idx('familia')] || ''; base.groupNumber = idx('numero_grupo') >= 0 ? rows[0][idx('numero_grupo')] || '' : ''; base.destination = rows[0][idx('destino')] || ''; base.address = rows[0][idx('ubicacion')] || ''; base.start = rows[0][idx('fecha_salida')] || ''; base.departureTime = rows[0][idx('hora_salida')] || ''; base.end = rows[0][idx('fecha_regreso')] || ''; base.returnTime = rows[0][idx('hora_regreso')] || '';
  for (const r of rows) { const id = `import-${crypto.randomUUID()}`; base.custom.push([id, r[idx('articulo')] || 'Artículo importado', 'Importado', 'grupo', 'Artículo recuperado desde CSV.', 'Revisa cantidad y responsable.', 'Confirma estado, compatibilidad y permiso.']); base.items[id] = { status: ['pending', 'packed', 'na'].includes(r[idx('estado')]) ? r[idx('estado')] : 'pending', qty: Number(r[idx('cantidad')]) || 1, owner: r[idx('responsable')] || '', note: r[idx('notas')] || '' }; }
  return { style: mode, trip: base };
}

importBackup = function (file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const raw = String(reader.result), data = file.name.toLowerCase().endsWith('.csv') ? parseModeCsv(raw) : JSON.parse(raw);
      const incoming = data.trip || data, mode = MODE_CONFIGS[data.style] ? data.style : MODE_CONFIGS[incoming.mode] ? incoming.mode : currentMode;
      if (!incoming || typeof incoming !== 'object' || !incoming.name || !incoming.items || !Array.isArray(incoming.custom)) throw Error('Formato no reconocido');
      switchMode(mode);
      const restored = { ...makeModeTrip(mode), ...incoming, id: crypto.randomUUID(), mode, name: `${incoming.name} · recuperada`, items: incoming.items || {}, custom: incoming.custom || [], checks: incoming.checks || {} };
      storeState.trips.push(restored); storeState.active = restored.id; save();
      location.hash = `${MODE_CONFIGS[mode].hash}/salida`; stylePage(mode); toast(`Salida recuperada en ${MODE_CONFIGS[mode].title}`);
    } catch { toast('No se pudo leer el respaldo: usa un JSON o CSV exportado por esta app.'); }
  };
  reader.readAsText(file);
};

const MODE_GUIDES = {
  senderismo: {
    heading: 'Mochilero: autonomía y movilidad en la ruta',
    intro: `<p><strong>El backpacking, o viajar como mochilero, es la práctica de recorrer rutas de larga distancia llevando todo el equipamiento, refugio y alimento dentro de una mochila, priorizando la movilidad, la autonomía y la ligereza.</strong></p><p>El <em>backpacking</em> es una modalidad donde el mochilero recorre rutas, generalmente de varios días, transportando consigo todo lo necesario para subsistir. A diferencia del bushcraft, que aprovecha los recursos del entorno para fabricar herramientas y refugios, el mochilero confía en el uso de equipo técnico moderno y ligero para desplazarse continuamente y con el mínimo impacto posible sobre el terreno.</p><p>Entre sus pilares principales destacan:</p><ul><li><strong>Autonomía itinerante:</strong> capacidad de acampar y alimentarse en la ruta sin depender de instalaciones fijas, transportando tienda de campaña, saco de dormir y estufa portátil.</li><li><strong>Equipo ligero y técnico:</strong> uso de materiales modernos, compactos y de bajo peso para optimizar el esfuerzo físico durante largas caminatas.</li><li><strong>Planificación y orientación:</strong> navegación por mapas, GPS o senderos marcados, gestionando raciones de comida, agua y puntos de reabastecimiento.</li><li><strong>Filosofía “Sin Dejar Rastro”:</strong> enfoque estricto en no alterar el entorno natural, acampando en zonas permitidas y regresando con todos los residuos generados.</li></ul>`,
    sections: [
      ['Diseñar una ruta realista', `<p>Empieza por la distancia y el desnivel de cada etapa, la superficie, la altitud, las horas de luz y las salidas alternativas. Una cifra de kilómetros no describe por sí sola el esfuerzo. Considera el ritmo de la persona menos experimentada, las pausas, el peso, la alimentación disponible y el tiempo de montar el campamento.</p><ul><li>Confirma permisos, cierres, campamentos autorizados y horarios.</li><li>Marca fuentes de agua, cruces, puntos sin sombra y rutas de abandono.</li><li>Define una hora límite para continuar o regresar.</li><li>Para una salida inicial, limita el plan a condiciones de tres estaciones; invierno exige formación y equipo específicos.</li><li>Comparte itinerario, vehículo, integrantes y momento para activar ayuda.</li></ul>`],
      ['Peso, ajuste y organización de la mochila', `<p>El peso base excluye comida, agua y combustible, pero el cuerpo carga el peso total. Pesa todo el conjunto y revisa cuánto añade el agua en el tramo más seco. Reparte equipo compartido según capacidad, no solo por número de personas.</p><p>Coloca cerca de la espalda los objetos densos, protege el equipo de dormir con una bolsa interior y deja accesibles lluvia, agua, mapa, alimento, botiquín y frontal. Ajusta torso, cinturón y tirantes con carga real. Una mochila bien ajustada no corrige una carga excesiva.</p>`],
      ['Refugio y sueño en movimiento', `<p>El refugio debe responder a clima, exposición, insectos, espacio y habilidad de montaje. Una tienda ofrece un sistema definido; un tarp puede reducir peso, pero exige seleccionar mejor el sitio y dominar configuraciones. Practica antes de depender de cualquiera.</p><p>El saco o quilt aporta abrigo y el aislante reduce la pérdida de calor hacia el suelo. Evalúa ambos como un sistema. Mantén seco el equipo de dormir, repara colchonetas y evita montar en depresiones, cauces o vegetación frágil.</p>`],
      ['Agua, alimentación y cocina por etapas', `<p>Calcula la capacidad entre fuentes confirmadas y añade el agua necesaria para cocinar. Una fuente dibujada en el mapa puede ser estacional o inaccesible. Contrasta información reciente y lleva un método de tratamiento cuyo alcance comprendas.</p><p>Organiza alimentación, colaciones y reserva por día. El menú debe aportar energía suficiente para el esfuerzo y considerar peso, tiempo de preparación, combustible, residuos y restricciones del grupo. No se trata de llevar menos comida: se trata de llevar la cantidad adecuada, nutritiva y que realmente puedas preparar.</p><p>Protege comida y basura con el sistema exigido por la zona; la disponibilidad de árboles no significa que una suspensión sea legal o adecuada. Planea cómo retirarás los empaques y restos desde el primer día.</p>`],
      ['Navegación, clima y comunicación', `<p>Lleva mapa de la ruta y una forma de orientación que puedas usar sin señal. Descarga cartografía y registra desvíos y salidas. El teléfono es útil, pero necesita protección y gestión de batería.</p><p>Revisa el pronóstico y los peligros propios del terreno. Ajusta capas antes de enfriarte o sudar en exceso. En rutas sin cobertura, valora un comunicador satelital y acuerda con tu contacto qué significa un retraso y cuándo debe pedir ayuda.</p>`],
      ['Pies, ritmo y grupo familiar', `<p>Usa calzado probado y atiende puntos de roce temprano. Alterna calcetines y protege un juego seco para dormir. Ajusta la ruta a la experiencia y condición del grupo; con menores, acorta etapas, aumenta márgenes y revisa con frecuencia agua, abrigo y energía.</p><p>Cada persona debe saber dónde está el frontal, el silbato, el abrigo y el agua. Acuerden qué hacer si alguien se separa y no permitan que el grupo se divida sin un plan claro.</p>`],
      ['Residuos y cierre de la salida', `<p>Confirma la regla para residuos humanos: algunas zonas permiten un hoyo sanitario bajo condiciones precisas y otras exigen retirar todo. Empaca papel y productos de higiene; no los entierres. Mantén lavado y jabón lejos de fuentes de agua.</p><p>Al regresar, avisa a tu contacto, seca refugio y equipo de dormir, limpia el filtro y registra consumo de agua, comida, combustible y batería. Usa esa información para ajustar la siguiente salida.</p>`]
    ]
  },
  bushcraft: {
    heading: 'Autosuficiencia, técnica y conexión con la naturaleza',
    intro: `<p><strong>El bushcraft es el arte de prosperar en la naturaleza con autosuficiencia, utilizando habilidades tradicionales como el encendido de fuego, la construcción de refugios y la talla de madera con recursos del entorno.</strong></p><p>A diferencia de la supervivencia de emergencia, que busca salir rápido de una crisis, o del campismo moderno, que depende de equipamiento tecnológico, el bushcraft busca autonomía, comodidad a largo plazo y una conexión profunda con la naturaleza.</p><p>Entre sus prácticas clave destacan:</p><ul><li><strong>Creación de fuego:</strong> uso de métodos manuales como pedernal, eslabón o fricción de maderas.</li><li><strong>Construcción de refugios:</strong> elaboración de estructuras temporales con equipo propio y materiales permitidos.</li><li><strong>Trabajo de madera:</strong> talla de utensilios o elementos de práctica con cuchillo, hacha y sierra, cuando la técnica y el sitio lo permiten.</li><li><strong>Conocimiento del entorno:</strong> observación de huellas, plantas y fuentes de agua. Identificar no equivale a recolectar, consumir o usar como medicina sin conocimiento experto y reglas locales claras.</li></ul><p class="alert"><strong>Antes de salir, consulta las reglas del terreno.</strong> Define qué actividades, materiales y fuego admite el sitio; esa decisión rige toda la salida.</p><p>Una salida bien preparada practica pocas habilidades con objetivos claros, alimentación suficiente, equipo de respaldo y un plan para restaurar el sitio. La autosuficiencia responsable incluye saber cuándo no cortar, no encender y no improvisar.</p>`,
    sections: [
      ['Plan de práctica y mínimo impacto', `<p>Define qué practicarás, qué equipo propio usarás y cómo retirarás todo al terminar. Marca como No aplica el material que no forme parte de esas dos o tres habilidades elegidas.</p><p>Practicar con intención evita convertir una salida en una colección de herramientas: lleva un respaldo moderno, fija un objetivo observable y registra lo que aprendiste.</p>`],
      ['Refugio con mínimo impacto', `<p>Practica primero con tarp, cordaje, estacas y equipo propio. Usa cintas que distribuyan la presión sobre árboles y retira cada cuerda al salir. Evita cortar ramas vivas, descortezar o construir estructuras permanentes.</p><p>Conserva saco o manta y aislante adecuados como sistema de respaldo. Los materiales naturales no sustituyen automáticamente el aislamiento ni deben extraerse de forma que deteriore el lugar.</p>`],
      ['Herramientas y zona de trabajo', `<p>Cada herramienta exige una razón y técnica. Una sierra puede ser más controlable para ciertas tareas que un hacha; un cuchillo pequeño puede cubrir lo previsto sin añadir una herramienta mayor. Selecciona según la práctica, no por apariencia.</p><p>Define un perímetro despejado, trabaja lejos de otras personas y guarda filos con funda. Con menores, la supervisión y la distancia de seguridad son permanentes. Detén la actividad con cansancio, poca luz o suelo inestable.</p>`],
      ['Fuego: una opción condicionada', `<p>Revisa la restricción vigente el mismo día: puede cambiar por viento, sequía o calidad del aire. Si no es posible encender, usa la alternativa de cocina ya prevista y no prepares material para fogata.</p><p>Cuando el fuego forme parte del plan, utiliza la instalación indicada, mantén agua y medio de extinción listos, controla chispas y no lo abandones. Apaga hasta poder comprobar en frío. Saber encender también incluye decidir no hacerlo.</p>`],
      ['Agua, alimentación y cocina', `<p>Lleva agua o identifica fuentes antes de depender de ellas. Trata el agua con un sistema cuyo alcance y mantenimiento conozcas. No asumas que hervir o filtrar resuelve cualquier contaminación.</p><p>Planifica alimentación, colaciones y una reserva por día. Deben cubrir el esfuerzo y poder prepararse con el método de cocina previsto. No dependas de recolectar recursos del lugar ni consumas plantas, hongos o fauna sin identificación experta y conocimiento local verificable.</p><p>Cocina con estufa o con el sistema que ya definiste. Mantén el equipo estable y ventilado, retira restos sólidos y maneja el agua usada conforme a las reglas. No viertas jabón ni comida en ríos o lagos.</p>`],
      ['Navegación y emergencias', `<p>Registra acceso, coordenadas del campamento, vehículo y rutas de salida. Lleva mapa, brújula y cartografía sin conexión. Determina cobertura y si la distancia justifica comunicación satelital.</p><p>El botiquín debe contemplar cortes y quemaduras, pero no sustituye formación. Comparte itinerario y hora de regreso. Mantén una alternativa simple de refugio, cocina y abrigo si la práctica principal falla.</p>`],
      ['Progresión y cuidado del lugar', `<p>Aprende de forma progresiva: primero nudos y tarp, después mantenimiento de herramientas, cocina controlada y técnicas más complejas. Practica una variable a la vez para distinguir qué funcionó.</p><p>Antes de irte, retira cordajes, virutas, basura y residuos. Revisa el suelo, apaga en frío cualquier fuego y anota daños o consumos. El sitio debe quedar listo para que la siguiente persona no encuentre rastros de tu práctica.</p>`]
    ]
  },
  ultraligera: {
    heading: 'Acampada ultraligera: menos carga, sistema completo',
    intro: `<p><strong>La acampada ultraligera organiza el equipo para que cada artículo aporte una función clara: protección, descanso, agua, alimentación, navegación o respuesta a una emergencia.</strong> Su propósito es caminar con más libertad y menos carga innecesaria, no competir por el número más bajo de la báscula.</p><p>La referencia de menos de 5 kg corresponde al <strong>peso base</strong>: equipo sin comida, agua ni combustible. El cuerpo carga el peso total, y para una familia el abrigo, la alimentación, el agua y los márgenes de seguridad de cada integrante no se recortan para cumplir una cifra.</p><p>Antes de sustituir algo, pregúntate: ¿qué función cumple?, ¿cuándo se necesita?, ¿qué pasa si falla?, ¿puede servir también para otra tarea sin perder seguridad?</p>`,
    sections: [
      ['Principio central: quitar duplicados, no márgenes de seguridad', `<p>Aligerar empieza con una auditoría, no con una compra. Extiende todo el equipo, pésalo y clasifica cada objeto: esencial, condicional u opcional. Conserva lo que protege contra las condiciones reales, permite dormir, beber, comer, orientarse y responder a un cambio de plan. Revisa con más rigor duplicados, recipientes redundantes, ropa sin función y accesorios que no usarás.</p><p>Registra por separado el peso base y los consumibles. Prueba el peso total que caminará cada persona; las referencias de la guía orientan la selección de equipo, pero no son cuotas familiares ni límites personales.</p><ul><li><strong>Multifunción:</strong> un artículo puede ahorrar piezas si se usa con seguridad y ya dominas su función.</li><li><strong>Durabilidad:</strong> el artículo más liviano no siempre es adecuado para el terreno, el clima o el uso familiar.</li><li><strong>Prueba:</strong> reduce una variable a la vez y registra qué funcionó antes de aplicarlo a una ruta larga.</li></ul>`],
      ['El gran trío: mochila, refugio y descanso', `<p>El mayor cambio de peso suele venir de mochila, refugio y sistema de dormir. Ajusta primero esos tres elementos; los accesorios pequeños no compensan un sistema mal elegido.</p><p>Una mochila ligera debe quedar bien en el torso, sostener el peso real y tener el volumen suficiente para el equipo, agua y comida. Una capacidad menor ayuda a evitar extras, pero no debe obligar a comprimir o dejar fuera capas esenciales. Protege dentro de la mochila el descanso y la ropa seca.</p><p>El refugio responde a lluvia, viento, insectos, privacidad, suelo y habilidad. Los tarps ofrecen versatilidad y buena relación espacio-peso, pero requieren una selección cuidadosa de sitio y práctica de montaje. Una tienda puede ser más directa para un grupo familiar. Mantén el refugio tenso y ventilado para gestionar condensación; no permitas que el equipo de dormir toque una pared húmeda.</p><p>El saco o quilt y el aislante forman un solo sistema. El abrigo alrededor del cuerpo no reemplaza el aislamiento frente al suelo. Prueba la colchoneta, válvulas y reparación antes de depender de ellas.</p>`],
      ['Capas, lluvia y pies: eficiencia que se lleva puesta', `<p>La ropa eficiente funciona por capas y por momentos: caminar, detenerse, lluvia, viento y dormir. Una capa que gestione humedad, abrigo para las paradas y una barrera exterior deben responder al pronóstico y a la persona. Llevar varias prendas similares suele añadir peso sin ampliar el sistema.</p><p>Reserva ropa seca para dormir, especialmente calcetines. La guía destaca el valor de llevar pares de repuesto y de no pasar la noche con calcetines húmedos. Un poncho puede combinar protección personal, cobertura de mochila y, en algunos sistemas, un uso auxiliar; su ventilación puede ser útil, pero el viento exige valorar sus límites.</p><p>El calzado se elige con espacio para los dedos, la carga, el terreno y la experiencia. Los zapatos ligeros pueden permitir un paso más ágil, pero no sustituyen una progresión gradual. Estrena el sistema en casa, luego en caminatas cortas y finalmente en una salida de un día antes de una ruta con pernocta.</p>`],
      ['Agua: capacidad, tratamiento y decisión en ruta', `<p>El ahorro de peso no cambia una necesidad básica: llegar a la siguiente fuente con suficiente agua. Dibuja cada tramo, confirma si las fuentes son estacionales o accesibles y define cuánta capacidad necesitas para beber, cocinar y tener un margen razonable. Un mapa o reseña no garantiza caudal ni potabilidad.</p><p>Un filtro es una herramienta mecánica con límites y mantenimiento; otros tratamientos tienen alcances y tiempos diferentes. Elige un método que cubra los riesgos previsibles, aprende sus límites y sigue las instrucciones del fabricante. Si la ruta depende de fuentes, un respaldo compacto puede ser más valioso que otro accesorio.</p><p>Para higiene y lavado, mantén jabón, aguas usadas y residuos lejos de ríos, lagos y manantiales. La guía propone alejarlos al menos 60 metros; las normas locales pueden ser más estrictas y siempre prevalecen.</p>`],
      ['Alimentación y cocina mínima que sí sostiene la marcha', `<p>Reducir utensilios no significa reducir raciones. Planea cada día con comida, colaciones y una reserva que puedas preparar con el agua, combustible y tiempo reales. Los alimentos que solo requieren añadir agua caliente pueden simplificar cocina, limpieza y combustible, pero el menú debe considerar energía, nutrición, alergias, preferencias y residuos.</p><p>Un recipiente versátil, una cuchara y un sistema de cocción compatible pueden cubrir muchas salidas. Comprueba estabilidad, combustible, autonomía y restricciones del destino. Nunca enciendas una estufa dentro de una tienda o vestíbulo: el riesgo de incendio y emisiones es grave. Incluye una comida que no dependa de cocción si el clima, combustible o reglas cambian.</p><p>Protege alimentos y residuos con el método exigido por el lugar. Al salir, todos los empaques y restos viajan de vuelta contigo.</p>`],
      ['Pequeñas necesidades que no se recortan', `<p>Los artículos pequeños no pesan mucho, pero pueden decidir una salida: frontal, navegación sin conexión, silbato, botiquín adaptado, protección solar, higiene, reparación y un medio de resguardo de emergencia. Cada persona debe saber dónde están el agua, abrigo, frontal y señalización.</p><p>Evita llevar un botiquín genérico sin conocerlo. Adáptalo al grupo, ruta y tiempo de ayuda, e incluye medicamentos personales. Revisa baterías, mapa, cables y el plan para cuando no haya señal móvil. Si el aislamiento de la ruta lo justifica, valora un medio de comunicación apropiado y acuerda con el contacto qué retraso activa una búsqueda.</p>`],
      ['Familia ultraligera: repartir, adaptar y detenerse a tiempo', `<p>La carga compartida se reparte por capacidad, talla, experiencia y condición de cada integrante. No dividas simplemente por cuatro ni apliques una meta de peso de adulto a niñas, niños o personas con menor margen. Un adulto puede llevar parte del refugio, tratamiento, reparación y contingencias; cada integrante lleva lo que necesita tener disponible.</p><p>Para empezar, elige una ruta corta, con salida clara y condiciones moderadas. Haz una caminata de prueba con el peso real, observa ritmo, hambre, agua, calor, frío y puntos de roce, y ajusta antes de la salida larga. Cambiar de plan, volver o detenerse es parte de una buena decisión de campo.</p>`],
      ['Dejar el sitio y el equipo listos para la siguiente salida', `<p>Acampa solamente donde está permitido, protege vegetación y suelo, y retira todos los residuos. Confirma el sistema sanitario: algunas zonas exigen retirar todos los residuos humanos; no entierres papel ni productos de higiene cuando no está permitido. Mantén los alimentos y la basura según las reglas de fauna.</p><p>Al regresar, seca y limpia el refugio, saco o quilt, aislante, calzado y tratamiento de agua antes de guardarlos. Registra peso base, peso total, comida, agua, combustible, molestias y artículos sin uso. Esa libreta convierte cada salida en información útil y permite aligerar con criterio en la siguiente.</p>`]
    ]
  },
  tropa: {
    heading: 'Checklist Campamento Tropa: organización de patrulla',
    intro: `<p><strong>Un Campamento Scout se prepara como un trabajo de patrulla: cada pieza compartida tiene una función, una cantidad y una persona responsable.</strong> Esta sección reúne cocina, refugio, higiene, seguridad y equipo personal para convertir la lista en un plan de salida.</p><p>Antes de empacar, anoten el grupo o tropa, su número, los participantes, el menú y el lugar. Así la hoja impresa, el respaldo y el equipo físico hablan del mismo campamento.</p>`,
    sections: [
      ['Plan de patrulla y responsables', `<p>Empiecen con un plan breve: quién asiste, quiénes son responsables adultos, dónde será el campamento, a qué hora salen y regresan, y cómo se dará aviso. Después asignen responsables de cocina, campamento, botiquín, residuos y cierre. Una persona puede apoyar varias tareas, pero cada tarea debe tener un nombre.</p><p>Usen el campo de grupo o tropa y su número para identificar la salida. En el checklist, ajusten cantidades y responsables según la patrulla real; las cantidades propuestas son un punto de partida, no una regla fija.</p><p>Antes de salir, realicen un <strong>bazar</strong>: cada integrante extiende su equipo, identifica faltantes o artículos inadecuados y vuelve a guardarlo en su mochila. Este hábito facilita el cuidado del material y el cierre de la salida.</p>`],
      ['Cocina y alimentación', `<p>El equipo de cocina de patrulla incluye estufa portátil, combustible compatible, ollas, sartén, utensilios, recipiente de agua, despensa y el sistema para lavado. El menú define las cantidades: consideren participantes, alergias, tiempo disponible, refrigeración, residuos y una comida que pueda servirse sin cocción si el plan cambia.</p><p>La estufa se utiliza al aire libre, sobre una superficie estable y por una persona que conozca sus instrucciones. Nunca se cocina dentro de una tienda. Separen agua potable, agua de cocina y agua usada, y retiren los sólidos antes de usar el sistema de disposición que indique el sitio.</p>`],
      ['Campamento, lonas y construcciones', `<p>Las casas de campaña, protectores de suelo, lona, estacas y vientos se revisan antes de salir y se cuentan al desmontar. Definan zonas claras para descanso, cocina, actividades, residuos y sanitarios; así evitan cuerdas en los pasos y mantienen la cocina fuera de los refugios.</p><p>Los bordones, cuerdas y el banderín se usan solo cuando forman parte del programa. Las construcciones temporales requieren material autorizado, una técnica que la patrulla domine y supervisión adecuada. Al cerrar, se retiran por completo cuerdas, estacas y todo material de actividad.</p>`],
      ['Mochila, tienda y clima', `<p>La mochila de campamento debe corresponder a duración, equipo y capacidad de quien la lleva. Protejan el equipo de dormir y la ropa con bolsas internas y practiquen el ajuste con carga real. Una mochila mayor de lo necesario suele terminar con objetos sin función.</p><p>Practiquen el armado de la tienda antes de salir y revisen varillas, estacas, vientos, cierres y funda. Para instalarse, busquen una superficie adecuada y orienten puertas, lonas y actividades conforme a lluvia, viento y sombra. Al volver, sacudan, aireen y sequen la tienda antes de guardarla.</p>`],
      ['Equipo personal, higiene y seguridad', `<p>Cada participante revisa por separado ropa base, segunda capa de abrigo, chamarra o rompevientos, impermeable con capucha, calzado extra y uniforme Scout cuando lo solicite el programa. También lleva sistema de descanso, vajilla, agua personal, higiene y frontal. Una mochila de día se añade cuando el programa incluya recorridos o actividades fuera del área de campamento.</p><p>El botiquín grupal acompaña el protocolo y la formación del grupo; no reemplaza la atención profesional. Mantengan accesible el itinerario, los contactos y la lista de participantes. Cuenten al grupo al salir, al llegar, antes de una actividad y antes del regreso.</p>`],
      ['Cierre y aprendizaje', `<p>Antes de retirarse, apaguen, enfríen y guarden la estufa según sus instrucciones; retiren todos los residuos, cordajes, estacas y materiales. Revisen el área con calma para que el sitio quede limpio y el equipo regrese completo.</p><p>Al regresar, anoten consumos, faltantes, reparaciones y aprendizajes. Guarden el respaldo JSON o CSV junto con la lista impresa si necesitan recuperar el campamento en otro navegador o preparar la siguiente salida con el mismo equipo.</p>`]
    ]
  },
  manada: {
    heading: 'Campamento de Manada: autonomía con acompañamiento',
    intro: `<p><strong>El Campamento de Manada enseña a los lobatos a conocer, preparar y cuidar su propio equipo.</strong> La autonomía se desarrolla paso a paso: el lobato arma su mochila, aprende dónde va cada artículo y puede encontrar lo necesario sin que un adulto tenga que buscar por él.</p><p>Esta lista separa el equipo de bolsillo, la mochila de ataque y la mochila de campamento. Antes de salir, practiquen en casa con el equipo real y ajusten la carga para que pueda caminar con las manos libres.</p>`,
    sections: [
      ['Preparar la mochila juntos', `<p>El adulto puede explicar, revisar y ayudar con cierres o peso, pero el lobato debe participar en cada paso: extender sus cosas, agruparlas, guardarlas, cerrar bolsas y ubicar lo importante. Al final, pídele que muestre dónde están el agua, el impermeable, el frontal y la ropa para dormir.</p><p>Antes de empacar hagan un <strong>bazar personal</strong>: revisen que el equipo esté completo, que no lleve artículos inadecuados y que todo tenga nombre. Repítanlo al volver. Practiquen enrollar el sleeping bag y colocarlo dentro de su bolsa; la práctica reduce pérdidas y permite que el lobato cuide su equipo durante el campamento.</p>`],
      ['Orden, humedad y nombre visible', `<p>Coloca una bolsa de basura limpia como fondo de la mochila de campamento. Después organiza ropa, aseo, documentos y descanso en bolsas resellables o estancas. Esto protege de humedad y evita tener que vaciar toda la mochila para encontrar una sola prenda.</p><p>Marca con el nombre de Manada individual el calzado, las dos mochilas, cangurera, sleeping bag, aislante, vajilla y prendas. Las etiquetas visibles hacen más fácil recuperar objetos cuando varias personas llevan equipo similar.</p>`],
      ['Equipo de bolsillo y mochila de ataque', `<p>La cangurera reúne paliacates, piola corta, libreta, agenda, credencial y otros artículos pequeños autorizados. Debe quedar cerrada y ordenada, sin objetos que limiten el movimiento.</p><p>La mochila de ataque debe tener capacidad suficiente para guardar todo dentro; una referencia práctica es de 15 a 20 litros. Lleva agua reutilizable, snack, gorra o sombrero, protección solar, repelente, impermeable, abrigo y ficha de salud Scout. Nada debe ir colgado y la carga no debe quedar tan apretada que impida encontrar o sacar un artículo.</p>`],
      ['Mochila de campamento y descanso', `<p>La mochila de campamento reúne la linterna frontal protegida, el cambio de ropa, abrigo de clima frío, pijama, calcetines secos para dormir, aislante y sleeping bag. El sistema de descanso se prueba en casa para confirmar talla, abrigo y que el lobato pueda guardarlo. El calzado debe estar probado; después de lluvia o actividad intensa, los pies secos y calcetines limpios hacen una diferencia importante.</p><p>El kit de aseo y la vajilla reutilizable viajan marcados y protegidos. Añade una bolsa extra para residuos, ropa húmeda o artículos sucios. Al finalizar cada actividad, el lobato vuelve a guardar sus cosas en el mismo lugar.</p>`],
      ['Rol de familias y responsables', `<p>Las familias confirman ficha de salud, ropa adecuada, alergias y artículos personales. Los responsables del campamento organizan el plan, el equipo adulto, la ubicación, horarios y el conteo de participantes. También revisan el pronóstico para adaptar abrigo, lluvia, sombra y actividades. La lista no sustituye las indicaciones específicas de la jefatura.</p><p>Al regresar, sequen el equipo, aireen y limpien la tienda si se utilizó, revisen lo que faltó y anoten qué artículo fue difícil de usar o guardar. Esa conversación prepara al lobato para una siguiente salida con más seguridad y autonomía.</p>`]
    ]
  }
};

if (typeof PROFESSIONAL_GUIDE_TOPICS !== 'undefined') {
  for (const [mode, sections] of Object.entries(PROFESSIONAL_GUIDE_TOPICS)) {
    if (MODE_GUIDES[mode]) MODE_GUIDES[mode].sections.push(...sections);
  }
}
if (typeof PROFESSIONAL_RESOURCE_TOPICS !== 'undefined') {
  for (const [kind, sections] of Object.entries(PROFESSIONAL_RESOURCE_TOPICS)) {
    if (RESOURCE_SECTIONS[kind]) RESOURCE_SECTIONS[kind].sections.push(...sections);
  }
}

function carVideoCard(video) {
  const [id, title, status] = video;
  if (!id) return `<article class="car-video-card car-video-coming"><span class="car-video-state">Próximamente</span><div class="car-coming-mark" aria-hidden="true">▶</div><strong>${esc(title)}</strong><p>Estamos preparando este tutorial práctico de la familia Lobato.</p></article>`;
  return `<button class="car-video-card car-video-play" type="button" data-car-video-id="${esc(id)}" data-car-video-title="${esc(title)}"><span class="car-video-state">${esc(status || 'Video publicado')}</span><img src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="Miniatura del video: ${esc(title)}"><strong>${esc(title)}</strong><b>Reproducir aquí ▶</b></button>`;
}

function bindCarVideos(scope = document) {
  scope.querySelectorAll('[data-car-video-id]').forEach(button => button.onclick = () => {
    const id = button.dataset.carVideoId, title = button.dataset.carVideoTitle;
    modal(`<p class="eyebrow">Acampando en Familia · Video</p><h2>${esc(title)}</h2><div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a class="secondary" href="https://youtu.be/${esc(id)}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></p>`);
  });
}

function renderProfessionalCarGuide() {
  const content = typeof PROFESSIONAL_CAR_GUIDE === 'undefined' ? null : PROFESSIONAL_CAR_GUIDE;
  const groups = typeof CAR_EXPERIENCE_GROUPS === 'undefined' ? null : CAR_EXPERIENCE_GROUPS;
  if (!content || !groups) { originalCarGuide(); appendModeVideos(); return; }
  const groupCards = groups.map(group => `<a class="car-path-card" href="#car-${group.id}" data-car-topic="car-${group.id}"><span class="car-path-number">${group.number}</span><span class="car-path-icon" aria-hidden="true">${group.icon}</span><strong>${group.title}</strong><small>${group.summary}</small><b aria-hidden="true">→</b></a>`).join('');
  const groupSections = groups.map((group, groupIndex) => {
    const details = group.sections.map(([title, body], sectionIndex) => `<details class="car-learning-details" ${sectionIndex === 0 ? 'open' : ''}><summary><span>${String(sectionIndex + 1).padStart(2, '0')}</span>${title}</summary><div class="car-learning-body">${body}</div></details>`).join('');
    const videos = group.videos.length ? group.videos.map(carVideoCard).join('') : carVideoCard([null, `Tutoriales de ${group.title.toLocaleLowerCase('es')}`, 'Próximamente']);
    return `<section class="panel car-learning-block" id="car-${group.id}"><header class="car-learning-head"><span class="car-learning-icon" aria-hidden="true">${group.icon}</span><div><p class="eyebrow">Ruta ${group.number}</p><h2>${group.title}</h2><p>${group.summary}</p></div></header><div class="car-decision"><strong>Decisión práctica</strong><p>${group.decision}</p></div><div class="car-learning-sections">${details}</div><div class="car-topic-videos"><div><p class="eyebrow">Apréndelo en video</p><h3>Videos de este bloque</h3></div><div class="car-video-grid">${videos}</div></div></section>`;
  }).join('');
  document.querySelector('#content').innerHTML = `<section class="panel car-guide-overview"><div class="car-guide-lead"><div><p class="eyebrow">Guía técnica y práctica</p><h2>Construye tu campamento base paso a paso</h2><p>Empieza por el lugar y las necesidades reales de tu familia. Después revisa refugio, descanso, cocina, iluminación, organización y preparación personal. Cada ruta relaciona una decisión con la forma de comprobarla.</p></div><aside><strong>Cómo usar esta guía</strong><ol><li>Abre una ruta.</li><li>Revisa la decisión práctica.</li><li>Despliega solo el detalle que necesites.</li><li>Mira el video publicado o identifica el próximo tutorial.</li></ol></aside></div><div class="car-guide-actions"><button class="secondary" id="print-guide-checklist">Imprimir checklist</button></div><nav class="car-path-grid" aria-label="Rutas de aprendizaje de Camping con coche">${groupCards}</nav></section>${groupSections}<section class="panel technical-guide-sources"><h2>Fuentes y alcance</h2>${content.sources}<p class="muted">Las cifras permiten comparar y planear. Confirma siempre las condiciones del destino, las normas locales y las instrucciones del fabricante antes de depender del equipo.</p></section>`;
  document.querySelector('#print-guide-checklist').onclick = previewPrint;
  document.querySelectorAll('[data-car-topic]').forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.carTopic).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  bindCarVideos(document.querySelector('#content'));
}

guide = function () {
  if (currentMode === 'coche') { renderProfessionalCarGuide(); return; }
  const cfg = MODE_CONFIGS[currentMode], content = MODE_GUIDES[currentMode];
  const source = currentMode === 'ultraligera' ? '<p>Base principal: <em>¡Aligera! Guía completa de senderismo ultraligero</em>, de Don Ladigin, adaptada a una preparación familiar actual. Como apoyo se conserva la <em>Guía analítica de estilos de camping, equipo y perfiles de uso</em>.</p><a href="assets/guia-analitica.pdf" target="_blank" rel="noopener">Consultar la guía analítica de apoyo (PDF) ↗</a>' : currentMode === 'tropa' ? '<p>Base: <em>Checklist Campamento Tropa</em> proporcionado por Acampando en Familia y ampliado para organizar equipo, responsabilidades y el cierre de una salida de patrulla.</p>' : currentMode === 'manada' ? '<p>Base: <em>Checklist de Campamento para Lobatos</em> proporcionado por Acampando en Familia y adaptado a una organización editable por mochila.</p>' : '<p>Base principal: <em>Guía analítica de estilos de camping, equipo y perfiles de uso</em>, con adaptación práctica para planear salidas familiares y organizar el checklist.</p><a href="assets/guia-analitica.pdf" target="_blank" rel="noopener">Consultar la guía principal (PDF) ↗</a>';
  document.querySelector('#content').innerHTML = `<section class="panel"><p class="eyebrow">Guía práctica</p><h2>${content.heading}</h2>${content.intro}<div class="toolbar"><a class="primary" href="#${cfg.hash}/salida">Preparar mi salida →</a><button class="secondary" id="compare-inline">Comparar modalidades</button><button class="secondary" id="print-guide-checklist">Imprimir checklist</button></div><nav class="guide-index" aria-label="Temas de la guía">${content.sections.map(([title], i) => `<a href="#topic-${i}" data-topic="topic-${i}">${String(i + 1).padStart(2, '0')} · ${title}</a>`).join('')}</nav></section>${content.sections.map(([title, body], i) => `<section class="panel guide-section" id="topic-${i}"><p class="eyebrow">${String(i + 1).padStart(2, '0')}</p><h2>${title}</h2>${body}</section>`).join('')}<section class="panel"><h2>Fuentes y alcance</h2>${source}<p class="muted">Cumple las reglas del destino, revisa clima y agua antes de salir. La guía no reemplaza formación presencial ni instrucciones del equipo.</p></section>`;
  document.querySelector('#compare-inline').onclick = compare;
  document.querySelector('#print-guide-checklist').onclick = previewPrint;
  document.querySelectorAll('[data-topic]').forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.topic).scrollIntoView({ behavior: 'smooth' }); });
  appendModeVideos();
};

function resourceVideoGrid(videos) {
  return `<div class="video-grid">${videos.map(([id, title, topic]) => `<button class="video-card video-card-play" type="button" data-resource-video-id="${esc(id)}" data-resource-video-title="${esc(title)}"><img class="video-thumb" src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="Miniatura del video: ${esc(title)}"><span>${topic}</span><strong>${title}</strong><b>Reproducir aquí ▶</b></button>`).join('')}</div>`;
}

function bindResourceVideos(scope) {
  scope.querySelectorAll('[data-resource-video-id]').forEach(button => button.onclick = () => {
    const id = button.dataset.resourceVideoId, title = button.dataset.resourceVideoTitle;
    modal(`<p class="eyebrow">Acampando en Familia · Video</p><h2>${esc(title)}</h2><div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a class="secondary" href="https://youtu.be/${esc(id)}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></p>`);
  });
}

function resourcePage(kind) {
  const resource = RESOURCE_SECTIONS[kind];
  if (!resource) { location.hash = '#inicio'; return; }
  const sections = resource.sections.map(([title, body, videos], i) => `<section class="panel guide-section resource-section" id="resource-topic-${i}"><p class="eyebrow">${String(i + 1).padStart(2, '0')}</p><h2>${title}</h2>${body}${videos.length ? `<div class="resource-videos"><p class="resource-video-label">Videos de esta sección</p>${resourceVideoGrid(videos)}</div>` : ''}</section>`).join('');
  const catalogLink = '', catalogSection = '';
  app.innerHTML = `<div class="shell resource-shell resource-${kind}"><header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><a class="youtube-brand section-youtube" href="https://www.youtube.com/@acampandoenfamilia" target="_blank" rel="noopener noreferrer">▶ Ver nuestro canal ↗</a></header><main id="main" class="container"><section class="intro resource-intro"><div><a href="#inicio">← Volver a las formas de acampar</a><p class="eyebrow">${resource.eyebrow}</p><h1>${resource.title}</h1><p>${resource.description}</p><div class="pills">${resource.pills.map(p => `<span class="pill">${p}</span>`).join('')}</div></div><div class="resource-mark photo-mark" aria-hidden="true"><img src="${resource.art}" alt=""></div></section><section class="panel resource-overview"><p class="eyebrow">Cómo usar esta sección</p>${resource.intro}<nav class="guide-index" aria-label="Temas de ${resource.title}">${resource.sections.map(([title], i) => `<a href="#resource-topic-${i}" data-resource-topic="resource-topic-${i}">${String(i + 1).padStart(2, '0')} · ${title}</a>`).join('')}${catalogLink}</nav></section>${sections}${catalogSection}<section class="panel resource-footer"><div><p class="eyebrow">La comunidad también enseña</p><h2>Tu experiencia también deja huella</h2><p>¿Tienes una sugerencia, una duda o una experiencia que quieras compartir? Mándanos un mensaje con tu nombre; queremos nombrarte en nuestro próximo video y seguir aprendiendo juntos al aire libre.</p></div><div class="resource-footer-actions"><a class="primary" href="mailto:lobatos.acampando@gmail.com">✉ Compartir mi experiencia</a><a class="youtube-brand" href="https://www.youtube.com/@acampandoenfamilia" target="_blank" rel="noopener noreferrer">▶ Acampando en Familia ↗</a></div></section></main></div>`;
  app.insertAdjacentHTML('beforeend', contactFooter());
  const root = document.querySelector('#app');
  root.querySelectorAll('[data-resource-topic]').forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById(a.dataset.resourceTopic).scrollIntoView({ behavior: 'smooth' }); });
  bindResourceVideos(root);
}

function appendModeVideos() {
  const videos = MODE_VIDEOS[currentMode] || [];
  if (!videos.length) return;
  const section = document.createElement('section');
  section.className = 'panel video-panel';
  section.innerHTML = `<p class="eyebrow">Acampando en Familia · Videos relacionados</p><h2>Míralo en nuestro canal</h2><p>Toca una miniatura para reproducir el video sin salir de la guía.</p><div class="video-grid">${videos.map(([id, title, topic]) => id.startsWith('search:') ? `<a class="video-card video-search" href="https://www.youtube.com/@acampandoenfamilia/search?query=${encodeURIComponent(id.slice(7))}" target="_blank" rel="noopener noreferrer"><span>${topic}</span><strong>${title}</strong><b>Buscar en YouTube ↗</b></a>` : `<button class="video-card video-card-play" type="button" data-youtube-id="${esc(id)}" data-youtube-title="${esc(title)}"><img class="video-thumb" src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="Miniatura del video: ${esc(title)}"><span>${topic}</span><strong>${title}</strong><b>Reproducir aquí ▶</b></button>`).join('')}</div></section>`;
  document.querySelector('#content').appendChild(section);
  section.querySelectorAll('[data-youtube-id]').forEach(button => button.onclick = () => {
    const id = button.dataset.youtubeId, title = button.dataset.youtubeTitle;
    modal(`<p class="eyebrow">Acampando en Familia · Video</p><h2>${esc(title)}</h2><div class="video-player"><iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><p><a class="secondary" href="https://youtu.be/${esc(id)}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></p>`);
  });
}

/* El primer render de app.js ocurre antes de cargar este módulo; reemplázalo con la ruta completa. */
window.addEventListener('hashchange', route);
window.addEventListener('beforeprint', buildPrintSheet);
route();
