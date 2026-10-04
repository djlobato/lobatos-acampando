/* Campamento de Tropa · checklist autónomo por Scout y Patrulla. */
(function () {
  const ORDER = ['Documentos de salida Scout','Equipo personal','Campamento y construcciones','Cocina de patrulla','Seguridad, higiene y organización','Empacado y control final'];
  const CATEGORY = {
    'Documentos de salida Scout': {number:'01',icon:'documents',label:'Antes de participar',description:'Confirma con tu familia y tus Scouters que los formatos oficiales estén completos, entregados y recibidos.'},
    'Equipo personal': {number:'02',icon:'backpack',label:'Mi responsabilidad',description:'Cada Scout revisa, prueba, organiza y carga su propio equipo.'},
    'Campamento y construcciones': {number:'03',icon:'tent',label:'Equipo de Patrulla',description:'Distribuyan refugios, piezas y material según el programa; nada viaja sin una función y una persona responsable.'},
    'Cocina de patrulla': {number:'04',icon:'cookset',label:'Menú y agua',description:'El menú define recipientes, combustible, agua, conservación y limpieza.'},
    'Seguridad, higiene y organización': {number:'05',icon:'firstaid',label:'Preparados para responder',description:'Revisen orientación, botiquín, iluminación, higiene y manejo de residuos.'},
    'Empacado y control final': {number:'06',icon:'gearcheck',label:'Antes de cerrar la mochila',description:'Hagan el bazar, distribuyan la carga y confirmen la lista definitiva de participantes.'}
  };
  const ITEM_ICONS = {
    'sc-estufa':'stove','sc-gas':'canister','sc-ollas':'cookset','sc-utensilios':'utensils','sc-agua-cocina':'waterjug','sc-despensa':'foodbox','sc-lavado':'washbasin',
    'sc-tienda':'tent','sc-huella':'footprint','sc-lona-tienda':'tentfly','sc-lona-comun':'commontarp','sc-estacas':'stakes','sc-bordones':'poles','sc-cuerdas':'rope','sc-banderin':'flag','sc-actividades':'activities',
    'sc-botiquin':'firstaid','sc-frontal':'headlamp','sc-higiene':'toiletry','sc-residuos':'waste','sc-mapa':'map','sc-lista':'roster',
    'sc-ficha-salud':'healthform','sc-autorizacion':'authorization','sc-mochila-campamento':'backpack','sc-bazar':'gearcheck','sc-saco-dormir':'sleepingbag','sc-aislante':'sleepingpad','sc-ropa-base':'baselayer','sc-segunda-capa':'fleece','sc-tercera-capa':'windjacket','sc-impermeable':'rainshell','sc-calzado-extra':'boots','sc-uniforme':'uniform','sc-vajilla':'messkit','sc-agua-personal':'bottle','sc-mochila-personal':'daypack',
    'tr-bolsillo-contenedor':'waistpack','tr-credencial':'idcard','tr-libreta':'notebook','tr-lapiz':'pencil','tr-silbato':'whistle','tr-costurero':'sewing','tr-paliacates':'scarf','tr-transporte':'wallet','tr-gis':'chalk','tr-piola':'rope','tr-salud':'healthform',
    'tr-mochila-ataque':'daypack','tr-agua':'bottle','tr-alimento':'snack','tr-impermeable':'rainshell','tr-abrigo':'fleece','tr-sombrero':'hat','tr-bloqueador':'sunscreen','tr-repelente':'repellent','tr-frontal':'headlamp','tr-orientacion':'compass','tr-botiquin':'firstaid','tr-residuos':'wastebag','tr-herramientas':'multitool'
  };
  /* Una ilustración propia por artículo mantiene el formato y representa
     los detalles funcionales del equipo personal y de Patrulla. */
  const ITEM_ART_ROOT = 'assets/tropa-item-icons/';
  const TOOL_ART = {
    waistpack:'assets/manada-cangurera.png',
    daypack:'assets/manada-mochila-ataque.png',
    backpack:'assets/manada-mochila-campamento.png',
    compass:'assets/tropa-aventuras-completa.png'
  };
  const ICON_PALETTES = {
    documents:['#dcecf3','#27647a'],healthform:['#dcecf3','#27647a'],authorization:['#dcecf3','#27647a'],roster:['#dcecf3','#27647a'],
    tent:['#dfe9cf','#416b43'],footprint:['#dfe9cf','#416b43'],tentfly:['#dfe9cf','#416b43'],commontarp:['#dfe9cf','#416b43'],stakes:['#dfe9cf','#416b43'],poles:['#dfe9cf','#416b43'],rope:['#dfe9cf','#416b43'],flag:['#dfe9cf','#416b43'],activities:['#dfe9cf','#416b43'],
    stove:['#f6dfbf','#98511f'],canister:['#f6dfbf','#98511f'],cookset:['#f6dfbf','#98511f'],utensils:['#f6dfbf','#98511f'],waterjug:['#dcebf0','#27647a'],foodbox:['#f6dfbf','#98511f'],washbasin:['#dcebf0','#27647a'],messkit:['#f6dfbf','#98511f'],
    firstaid:['#f4dddd','#9e352d'],toiletry:['#e5e5ef','#5f567c'],waste:['#e5e5ef','#5f567c'],wastebag:['#e5e5ef','#5f567c'],map:['#eee6c9','#77602d'],compass:['#eee6c9','#77602d'],headlamp:['#eee6c9','#77602d'],
    sleepingbag:['#dce8d7','#416b43'],sleepingpad:['#dce8d7','#416b43'],baselayer:['#e2e5ef','#5f567c'],fleece:['#e2e5ef','#5f567c'],windjacket:['#e2e5ef','#5f567c'],rainshell:['#dcebf0','#27647a'],boots:['#eadfcd','#76512f'],uniform:['#eadfcd','#76512f'],
    bottle:['#dcebf0','#27647a'],waistpack:['#eadfcd','#76512f'],idcard:['#dcecf3','#27647a'],notebook:['#eee6c9','#77602d'],pencil:['#eee6c9','#77602d'],whistle:['#eee6c9','#77602d'],sewing:['#e2e5ef','#5f567c'],scarf:['#e2e5ef','#5f567c'],wallet:['#eadfcd','#76512f'],chalk:['#e2e5ef','#5f567c'],hat:['#eadfcd','#76512f'],sunscreen:['#f5e6bc','#96731d'],repellent:['#dfe9cf','#416b43'],snack:['#f6dfbf','#98511f'],multitool:['#e2e5ef','#5f567c'],gearcheck:['#eadfcd','#76512f']
  };
  const ICON_DRAWINGS = {
    backpack:'<path d="M18 17v-2c0-4 2-7 6-7s6 3 6 7v2"/><rect x="13" y="16" width="22" height="25" rx="6"/><path d="M13 24H9v10h4m22-10h4v10h-4M18 29h12M20 20h8"/>',
    daypack:'<path d="M19 15v-2c0-3 2-5 5-5s5 2 5 5v2"/><rect x="15" y="14" width="18" height="27" rx="6"/><path d="M15 23h-4v10h4m18-10h4v10h-4M19 30h10"/>',
    documents:'<path d="M13 8h17l6 6v26H13z"/><path d="M30 8v7h6M18 22h13M18 28h13M18 34h9"/>',
    tent:'<path d="M5 39 23 10l20 29zM23 10v29M13 39l10-16 10 16M4 42h40"/>',
    footprint:'<path d="M7 28 20 12l22 9-13 16zM7 28v7l22 8 13-15v-7M14 29l15 5 8-10"/><path d="M18 17 9 13m24 4 8-8"/>',
    tentfly:'<path d="M5 39 23 12l20 27zM23 12v27M12 39l11-15 11 15"/><path d="M6 18h36L31 29H15zM6 18l-3-5m39 5 3-5"/>',
    commontarp:'<path d="M5 14h38L31 29H15zM15 29v13m16-13v13M5 14l-3 7m41-7 3 7M11 42h8m8 0h8"/><path d="M19 34h8m-10 4h12"/>',
    cookset:'<path d="M12 20h24v15c0 4-3 7-7 7H19c-4 0-7-3-7-7zM9 20h30M17 14h14M20 10h8"/><path d="M8 25H5m35 0h3"/>',
    stove:'<path d="M13 27h22v10H13zM16 37l-3 6m19-6 3 6M17 27l2-8h10l2 8M16 15h16"/><path d="M24 7c5 5-2 7 2 12-7-2-7-7-2-12z"/>',
    canister:'<path d="M18 13h12l4 6v20H14V19zM21 9h6v4M14 22h20"/><path d="M24 27c4 4-1 6 1 9-5-1-5-5-1-9z"/>',
    utensils:'<path d="M12 7v13m-4-13v9c0 3 2 5 4 5s4-2 4-5V7M12 21v21M27 8v34M27 8c7 4 7 13 0 17M38 7v35"/>',
    waterjug:'<path d="M14 15h19l4 7v18H11V20zM19 11h9v4M33 19h6l4 6v9h-6M16 25h16"/><path d="M24 28c4 5 5 7 5 9a5 5 0 0 1-10 0c0-2 1-4 5-9z"/>',
    foodbox:'<path d="M8 16h32v25H8zM6 11h36v7H6zM17 23h14M24 23v12"/><path d="M20 31c2-4 6-4 8 0-1 5-7 5-8 0zM24 27c0-2 2-3 4-3"/>',
    washbasin:'<path d="M7 27h34l-4 12H11zM13 23c3-3 5-3 8 0m6 0c3-3 5-3 8 0"/><path d="M17 8c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8zm14 2c2 3 3 4 3 6a3 3 0 0 1-6 0c0-2 1-3 3-6z"/>',
    stakes:'<path d="M13 8v29l-4 6m4-20 7-5M27 6v31l-4 6m4-21 7-5M40 13v24l-4 6"/>',
    poles:'<path d="M10 42 34 7M38 42 14 7M6 42h10m16 0h10M19 20l10 8"/>',
    rope:'<circle cx="22" cy="25" r="14"/><circle cx="22" cy="25" r="9"/><circle cx="22" cy="25" r="4"/><path d="M34 31c8 0 10 5 7 11M35 15l7-6"/>',
    flag:'<path d="M13 43V7M14 9h23l-6 8 6 8H14M8 43h12"/>',
    activities:'<path d="M9 31h17v11H9zM12 26h11l3 5M29 12h11v16H29zM32 16h5M32 21h5"/><circle cx="17" cy="15" r="7"/><path d="M10 15h14m-7-7c3 3 3 11 0 14"/>',
    firstaid:'<rect x="8" y="14" width="32" height="26" rx="4"/><path d="M18 14v-4h12v4M21 21h6v5h5v6h-5v5h-6v-5h-5v-6h5z"/>',
    headlamp:'<path d="M7 24c7-9 27-9 34 0M8 27c8 8 24 8 32 0"/><rect x="18" y="18" width="12" height="13" rx="4"/><circle cx="24" cy="24" r="3"/><path d="M33 20l9-5m-9 11 10 1"/>',
    toiletry:'<path d="M9 18h30v23H9zM16 18v-5h16v5M15 25h18M19 31h10"/><path d="M35 7v8M32 10h6"/>',
    waste:'<path d="M13 16h22l-3 26H16zM10 16h28M18 16l2-6h8l2 6M20 22v14m8-14v14"/><path d="M7 37c3-4 5-4 8 0m18 0c3-4 5-4 8 0"/>',
    map:'<path d="M7 12l11-4 12 4 11-4v30l-11 4-12-4-11 4zM18 8v30m12-26v30"/><path d="M11 30c7-3 8-9 14-8s5 8 12 6"/><circle cx="12" cy="30" r="2"/><circle cx="37" cy="28" r="2"/>',
    roster:'<path d="M13 8h22v34H13zM19 8v6h10V8"/><circle cx="19" cy="22" r="2"/><path d="M24 22h7M17 31h14M17 36h10"/>',
    healthform:'<path d="M13 8h22v34H13zM19 8v6h10V8M21 21h6v4h4v6h-4v4h-6v-4h-4v-6h4z"/>',
    authorization:'<path d="M11 7h22l5 5v29H11zM33 7v6h5M16 19h16M16 24h12"/><path d="M18 36l2-6 13-13 4 4-13 13zM18 36l6-2"/>',
    gearcheck:'<path d="M7 34h34M11 29l4-9 5 9m7 0 4-13 7 13"/><circle cx="13" cy="12" r="5"/><path d="M32 8h9v9M34 13l3 3 6-7"/>',
    sleepingbag:'<path d="M13 42V15c0-5 4-9 9-9h4c5 0 9 4 9 9v27zM19 13h10M18 20h12M18 28h12M18 36h12"/><path d="M35 17c4 2 6 6 6 10v15h-6"/>',
    sleepingpad:'<rect x="7" y="13" width="30" height="27" rx="4"/><path d="M13 13v27m6-27v27m6-27v27m6-27v27"/><path d="M37 18c5 0 7 3 7 7s-2 7-7 7M10 9h24"/>',
    baselayer:'<path d="M17 9l7 4 7-4 8 8-5 6-3-3v22H17V20l-3 3-5-6zM24 13v29M19 34h10"/><path d="M12 17l5 5m19-5-5 5"/>',
    fleece:'<path d="M18 9h12l3 5 7 5-5 7-4-3v19H17V23l-4 3-5-7 7-5zM24 9v33M20 18h8M20 29h8"/>',
    windjacket:'<path d="M18 11c1-5 11-5 12 0l4 3 7 7-6 6-4-4v19H17V23l-4 4-6-6 7-7zM24 11v31M18 31h12"/><path d="M4 10h8M2 15h10M36 8h8"/>',
    rainshell:'<path d="M18 13c1-8 11-8 12 0l5 3 6 7-6 6-4-5v18H17V24l-4 5-6-6 6-7zM24 13v29M19 31h10"/><path d="M8 5c0 3-3 4-3 7m34-7c0 3-3 4-3 7M14 4c0 3-3 4-3 7"/>',
    boots:'<path d="M8 12h12v15l7 5v8H8zM28 10h10v16l5 4v10H27v-8l4-5zM9 34h17M28 34h14"/><path d="M12 17h8m-8 5h8m19-7h-8m8 5h-8"/>',
    uniform:'<path d="M17 9l7 4 7-4 8 8-5 6-3-3v22H17V20l-3 3-5-6zM24 13v29M18 27h12"/><path d="M20 12l4 8 4-8M24 20l-4 7m4-7 4 7"/><circle cx="21" cy="32" r="1"/><circle cx="27" cy="32" r="1"/>',
    messkit:'<circle cx="19" cy="27" r="12"/><circle cx="19" cy="27" r="7"/><path d="M36 11v31M32 11v10c0 3 2 5 4 5s4-2 4-5V11"/><path d="M11 40h16"/>',
    bottle:'<path d="M19 9h10v6l4 5v21H15V20l4-5zM19 15h10M18 25h12"/><path d="M24 28c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8z"/>',
    waistpack:'<path d="M6 19c8-5 28-5 36 0l-3 18H9zM15 21h18v12H15zM15 25h18M9 23H4m35 0h5"/><path d="M20 29h8"/>',
    idcard:'<rect x="7" y="11" width="34" height="27" rx="4"/><circle cx="17" cy="22" r="5"/><path d="M11 33c2-5 10-5 12 0M27 19h9M27 25h9M27 31h6"/>',
    notebook:'<path d="M12 7h26v35H12zM18 7v35M8 13h8M8 21h8M8 29h8M8 37h8M23 15h10M23 22h10M23 29h8"/>',
    pencil:'<path d="m9 37 3-10L34 5l9 9-22 22zM12 27l9 9M31 8l9 9M9 37l7-1"/>',
    whistle:'<path d="M8 22h18v14H8zM26 25h8c6 0 9 4 9 9M17 22v-7h11l5 5-7 5"/><circle cx="17" cy="29" r="3"/>',
    sewing:'<path d="M11 28c5-10 18-10 24 0-6 10-19 10-24 0zM23 18V7m0 0 4 4m-4-4-4 4"/><path d="M15 34v7m16-7v7M10 41h26"/><circle cx="23" cy="28" r="5"/>',
    scarf:'<path d="M11 9h26L28 27l8 14-12-7-12 7 8-14zM20 27h8M18 14h12"/>',
    wallet:'<rect x="7" y="14" width="34" height="25" rx="4"/><path d="M7 20h34M27 25h14v9H27z"/><circle cx="32" cy="29" r="1"/>',
    chalk:'<path d="m11 35 20-24 7 6-20 24H9zM31 11l7 6M13 34l6 5"/><path d="M8 42h20"/>',
    hat:'<path d="M13 28c1-13 5-19 11-19s10 6 11 19M13 28h22M5 31c9 7 29 7 38 0-10-5-28-5-38 0z"/>',
    sunscreen:'<path d="M17 15h14l3 6v20H14V21zM20 9h8v6M19 26h10M24 23v6"/><path d="M39 9v5m-3-2h6M8 12l3 3m-3 5h5"/>',
    repellent:'<path d="M18 14h13l4 7v20H14V21zM20 9h10l2 5H18zM22 25h6M25 22v6"/><path d="M7 12c5 0 7 4 7 8m27-9c-5 1-7 5-6 9M8 28c4-2 7-1 9 2"/>',
    compass:'<circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="3"/><path d="m29 12-3 10-10 3 3-10zM24 6v4m0 28v4M6 24h4m28 0h4"/>',
    snack:'<path d="M13 12h22l3 29H10zM15 18h20M17 28c4-5 10-5 14 0-2 7-12 7-14 0z"/><path d="M22 25c0-3 2-5 5-5"/>',
    wastebag:'<path d="M14 13h20l5 27H9zM17 13l3-6h8l3 6M16 22c4 3 12 3 16 0M19 29h10"/>',
    multitool:'<path d="M15 9h18v30H15zM20 15h8M20 22h8M20 29h8"/><path d="M15 13 7 7m26 6 8-6M15 35l-8 6m26-6 8 6"/>'
  };
  function outdoorIcon(name) {
    const palette=ICON_PALETTES[name] || ['#e4eadc','#315f45'];
    return `<svg class="tropa-outdoor-svg tropa-icon-${esc(name)}" style="--tropa-icon-fill:${palette[0]};--tropa-icon-accent:${palette[1]}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><rect class="tropa-icon-field" x="1.5" y="1.5" width="45" height="45" rx="10"/><path class="tropa-icon-contour" d="M5 37c8-5 12 4 19-1s12-1 19-5M6 11c7 3 12-2 18 1s11 1 18-2"/><g class="tropa-icon-object">${ICON_DRAWINGS[name] || '<path d="m12 25 8 8 17-19"/>'}</g></svg>`;
  }
  function itemIcon(item) {
    return `<img class="tropa-item-art" src="${ITEM_ART_ROOT}${item[0]}.png" alt="" aria-hidden="true">`;
  }
  function itemIconClass() { return 'has-item-art'; }
  function toolArtwork(icon) {
    const art=TOOL_ART[icon];
    return art ? `<img class="tropa-tool-image" src="${art}" alt="" aria-hidden="true">` : outdoorIcon(icon);
  }
  const VIDEO_TITLES = {
    'sc-estufa':'Cómo revisar y usar una estufa de Patrulla','sc-gas':'Cómo calcular y transportar el combustible','sc-ollas':'Cómo elegir ollas según el menú y la Patrulla','sc-utensilios':'Cómo organizar utensilios y filos para el traslado','sc-agua-cocina':'Cómo separar el agua potable y las aguas usadas','sc-despensa':'Cómo dividir el menú y las raciones por día','sc-lavado':'Cómo lavar y disponer aguas usadas en campamento',
    'sc-tienda':'Cómo revisar y montar una casa de campaña','sc-huella':'Cómo colocar la huella sin atrapar lluvia','sc-lona-tienda':'Cómo proteger una tienda con una lona independiente','sc-lona-comun':'Cómo montar un tarp seguro para el área común','sc-estacas':'Cómo revisar estacas, vientos y tensores','sc-bordones':'Cómo seleccionar bordones para una construcción','sc-cuerdas':'Cómo preparar las cuerdas y evitar riesgos de paso','sc-banderin':'Cómo transportar e instalar el banderín de Patrulla','sc-actividades':'Cómo inventariar el material del programa',
    'sc-botiquin':'Cómo revisar el botiquín de Patrulla','sc-frontal':'Cómo revisar una linterna frontal y sus baterías','sc-higiene':'Cómo preparar la higiene personal para campamento','sc-residuos':'Cómo organizar residuos y restos de comida','sc-mapa':'Cómo preparar mapa, itinerario y contactos','sc-lista':'Cómo comprobar participantes y permisos',
    'sc-ficha-salud':'Qué revisar antes de entregar la ficha de salud Scout','sc-autorizacion':'Qué revisar en la autorización de salida Scout','sc-mochila-campamento':'Cómo elegir, ajustar y cargar la mochila de campamento','sc-bazar':'Cómo hacer el bazar personal antes y después','sc-saco-dormir':'Cómo elegir, proteger y guardar el saco de dormir','sc-aislante':'Cómo elegir y comprobar el aislante para dormir','sc-ropa-base':'Cómo elegir y empacar la ropa base','sc-segunda-capa':'Cómo elegir la segunda capa de abrigo','sc-tercera-capa':'Cómo elegir una chamarra o rompevientos','sc-impermeable':'Cómo comprobar y empacar el impermeable','sc-calzado-extra':'Cómo elegir y guardar el calzado extra','sc-uniforme':'Cómo revisar y proteger el uniforme Scout','sc-vajilla':'Cómo identificar, lavar y guardar la vajilla personal','sc-agua-personal':'Cómo calcular y revisar el agua personal','sc-mochila-personal':'Cómo preparar una mochila de día',
    'tr-bolsillo-contenedor':'Cómo elegir y organizar la cangurera o los bolsillos','tr-credencial':'Cómo proteger y comprobar la credencial Scout','tr-libreta':'Cómo preparar la libreta y los contactos de emergencia','tr-lapiz':'Cómo elegir y guardar el material de escritura','tr-silbato':'Cuándo y cómo utilizar el silbato','tr-costurero':'Cómo preparar un costurero seguro y compacto','tr-paliacates':'Cómo doblar y conservar los paliacates','tr-transporte':'Cómo guardar dinero y tarjeta de transporte','tr-gis':'Cómo transportar gis sin manchar el equipo','tr-piola':'Cómo revisar, rematar y enrollar la piola','tr-salud':'Cómo confirmar la ficha de salud con la dirigencia',
    'tr-mochila-ataque':'Cómo elegir, ajustar y organizar una mochila de ataque','tr-agua':'Cómo calcular y transportar el agua de la actividad','tr-alimento':'Cómo elegir y empacar la ración de marcha','tr-impermeable':'Cómo elegir y dejar accesible la protección de lluvia','tr-abrigo':'Cómo elegir una capa de abrigo para la ruta','tr-sombrero':'Cómo elegir protección para cabeza y rostro','tr-bloqueador':'Cómo transportar y reaplicar bloqueador solar','tr-repelente':'Cómo utilizar repelente de forma segura','tr-frontal':'Cómo revisar la linterna frontal y su energía','tr-orientacion':'Cómo preparar mapa, croquis y brújula','tr-botiquin':'Cómo preparar el botiquín personal autorizado','tr-residuos':'Cómo retirar residuos y aislar equipo mojado','tr-herramientas':'Cómo transportar herramientas autorizadas'
  };

  function groups() {
    return ORDER.map(name => [name, (SCOUT_EQUIPMENT.find(([group]) => group === name) || [name,[]])[1]]);
  }
  function allItems() { return groups().flatMap(([,items]) => items); }
  function pocketItems() { return Array.isArray(TROPA_POCKET_EQUIPMENT) ? TROPA_POCKET_EQUIPMENT : []; }
  function attackItems() { return Array.isArray(TROPA_ATTACK_EQUIPMENT) ? TROPA_ATTACK_EQUIPMENT : []; }
  function stats(items) {
    const active=items.filter(item => itemState(item[0]).status !== 'na');
    return {done:active.filter(item => itemState(item[0]).status === 'packed').length,total:active.length,na:items.length-active.length};
  }
  function progress(items,label) {
    const value=stats(items);
    return `<div class="tropa-camp-progress"><div><strong>${value.done} de ${value.total}</strong><span>${label}</span></div><progress value="${value.done}" max="${value.total || 1}" aria-label="${esc(label)}"></progress></div>`;
  }
  function video(item) {
    const title=VIDEO_TITLES[item[0]] || `Cómo preparar ${item[1].toLocaleLowerCase('es')}`;
    return `<div class="tropa-camp-video"><span aria-hidden="true">▶</span><div><small>Video tutorial · Próximamente</small><strong>${esc(title)}</strong><p>Cuando publiquemos este tutorial podrás verlo aquí, sin salir de la guía.</p></div></div>`;
  }
  function itemCard(item) {
    const state=itemState(item[0]),done=state.status==='packed',omitted=state.status==='na',scope=item[3]==='persona'?'Personal':'Patrulla';
    return `<article class="tropa-camp-item ${done?'is-done':''} ${omitted?'is-omitted':''}" data-tropa-camp-card="${item[0]}">
      <label class="tropa-camp-check"><input type="checkbox" data-tropa-camp-check="${item[0]}" ${done?'checked':''} ${omitted?'disabled':''}><span class="tropa-camp-box" aria-hidden="true">${done?'✓':''}</span><span class="tropa-camp-icon ${itemIconClass(item)}" aria-hidden="true">${itemIcon(item)}</span><span><strong>${esc(item[1])}</strong><small>${omitted?'No se necesita en esta salida':done?'Listo y comprobado':`${scope} · ${item[2]}`}</small></span></label>
      <details class="tropa-camp-help"><summary>Nosotros te enseñamos cómo (Video)</summary><div class="tropa-camp-help-body"><section><h3>¿Para qué sirve?</h3><p>${esc(item[4])}</p><h3>¿Cómo prepararlo?</h3><p>${esc(item[5])}</p><h3>Antes de marcarlo</h3><p>${esc(item[6])}</p></section>${video(item)}<div class="tropa-camp-assignment"><label class="field">${item[3]==='persona'?'Quién lo revisó':'Responsable de llevarlo'}<input data-tropa-camp-owner="${item[0]}" maxlength="80" value="${esc(state.owner||'')}" placeholder="Nombre o cargo de Patrulla"></label><label class="field">Nota breve<textarea data-tropa-camp-note="${item[0]}" placeholder="Cantidad, ubicación, condición o pendiente…">${esc(state.note||'')}</textarea></label></div><button class="text-button" type="button" data-tropa-camp-na="${item[0]}">${omitted?'Incluirlo nuevamente':'No se necesita en esta salida'}</button></div></details>
    </article>`;
  }
  function dataForm() {
    const t=trip();
    const input=(key,label,type='text')=>`<label class="field">${label}<input data-tropa-camp-field="${key}" type="${type}" value="${esc(t[key]||'')}"></label>`;
    return `<section class="panel tropa-camp-data"><div><p class="eyebrow">Datos del campamento</p><h2>Identifiquen la salida</h2><p>Solo se guardan en este navegador y pueden modificarse en cualquier momento.</p></div><div class="tropa-camp-fields">${input('name','Nombre del campamento')}${input('familyName','Tropa')}${input('patrolName','Patrulla')}${input('groupNumber','Grupo Scout')}${input('destination','Lugar del campamento')}${input('start','Salida','date')}${input('end','Regreso','date')}</div></section>`;
  }
  function categorySection(name,items) {
    const cfg=CATEGORY[name];
    return `<section class="panel tropa-camp-category" id="tropa-camp-${cfg.number}"><header><span>${cfg.number}</span><b aria-hidden="true">${outdoorIcon(cfg.icon)}</b><div><p class="eyebrow">${cfg.label}</p><h2>${name}</h2><p>${cfg.description}</p></div>${progress(items,'comprobados')}</header><div class="tropa-camp-list">${items.map(itemCard).join('')}</div></section>`;
  }
  function completion(items) {
    const value=stats(items); if (!value.total || value.done!==value.total) return '';
    return `<section class="tropa-camp-complete" role="status" aria-live="polite"><span aria-hidden="true">⚜</span><div><p class="eyebrow">Siempre listo</p><h2>¡El checklist está completo!</h2><p>Comparte la revisión con tu Guía de Patrulla y tus Scouters. Confirmen juntos responsables, documentos y cualquier cambio antes de salir.</p><a class="primary" href="#scout/tropa/aventuras">Continuar con mis progresiones →</a></div></section>`;
  }
  function quickCompletion(kind,items) {
    const value=stats(items); if (!value.total || value.done!==value.total) return '';
    const attack=kind==='ataque';
    return `<section class="tropa-camp-complete" role="status" aria-live="polite"><span aria-hidden="true">✓</span><div><p class="eyebrow">Comprobación terminada</p><h2>${attack?'¡La mochila de ataque está lista!':'¡El equipo de bolsillo está listo!'}</h2><p>${attack?'Puedes salir con las manos libres y localizar cada artículo sin vaciar la mochila.':'Cada objeto está protegido, ordenado y en el mismo lugar para convertir su revisión en un hábito.'}</p><a class="primary" href="${attack?'#scout/tropa/campamento':'#scout/tropa/ataque'}">${attack?'Revisar el equipo de campamento':'Continuar con la mochila de ataque'} →</a></div></section>`;
  }
  function bind(items,render=tropaCampPage) {
    document.querySelectorAll('[data-tropa-camp-field]').forEach(input => input.onchange=input.oninput=()=>{trip()[input.dataset.tropaCampField]=input.value;save();});
    document.querySelectorAll('[data-tropa-camp-check]').forEach(input => input.onchange=()=>{const id=input.dataset.tropaCampCheck;trip().items[id]={...itemState(id),status:input.checked?'packed':'pending'};save();render();});
    document.querySelectorAll('[data-tropa-camp-na]').forEach(button => button.onclick=()=>{const id=button.dataset.tropaCampNa;trip().items[id]={...itemState(id),status:itemState(id).status==='na'?'pending':'na'};save();render();});
    document.querySelectorAll('[data-tropa-camp-owner]').forEach(input => input.oninput=()=>{const id=input.dataset.tropaCampOwner;trip().items[id]={...itemState(id),owner:input.value};save();});
    document.querySelectorAll('[data-tropa-camp-note]').forEach(input => input.oninput=()=>{const id=input.dataset.tropaCampNote;trip().items[id]={...itemState(id),note:input.value};save();});
    document.querySelectorAll('[data-tropa-camp-jump]').forEach(link => link.onclick=event=>{event.preventDefault();document.getElementById(link.dataset.tropaCampJump)?.scrollIntoView({behavior:'smooth',block:'start'});});
    document.querySelector('[data-tropa-reset]')?.addEventListener('click',()=>{
      modal(`<h2>¿Preparar esta lista para una nueva actividad?</h2><p>Los artículos comprobados volverán a pendientes. Se conservarán responsables, notas y artículos marcados como “No se necesita”.</p><div class="actions"><button class="secondary" id="cancel-tropa-reset">Cancelar</button><button class="primary" id="confirm-tropa-reset">Reiniciar lista</button></div>`);
      document.querySelector('#cancel-tropa-reset').onclick=()=>dialog.close();
      document.querySelector('#confirm-tropa-reset').onclick=()=>{items.forEach(item=>{if(itemState(item[0]).status==='packed')trip().items[item[0]]={...itemState(item[0]),status:'pending'};});save();dialog.close();render();toast('Lista preparada para una nueva actividad');};
    });
    document.querySelectorAll('[data-tropa-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
  }

  function pageHeader(backHref,backLabel) {
    return `<header class="topbar"><a class="brand" href="#inicio"><img src="assets/logo.png" alt="Lobatos Acampando"><span>Lobatos Acampando</span></a><span class="save-state">Guardado en este navegador</span><a class="secondary menu-back" href="${backHref}">${backLabel}</a></header>`;
  }
  function toolProgress(items) {
    const value=stats(items);
    return `<span class="tropa-tool-progress"><b>${value.done}/${value.total}</b><small>comprobados</small></span>`;
  }
  function toolCard(href,icon,kicker,title,description,items) {
    return `<a class="tropa-tool-card" href="${href}"><span class="tropa-tool-art" aria-hidden="true">${toolArtwork(icon)}</span><span class="tropa-tool-copy"><small>${kicker}</small><strong>${title}</strong><span>${description}</span></span>${items?toolProgress(items):'<span class="tropa-tool-progress"><b>4</b><small>territorios</small></span>'}<i aria-hidden="true">→</i></a>`;
  }

  window.tropaHomePage = function () {
    switchMode('tropa');
    const pocket=pocketItems(),attack=attackItems(),camp=allItems();
    app.innerHTML=`<div class="shell tropa-camp-shell">${pageHeader('#scout','Zona Scout')}<main id="main" class="container tropa-camp-container">
      <section class="tropa-camp-hero tropa-home-hero"><div><a href="#scout">← Volver a Zona Scout</a><p class="eyebrow">Scout · Tropa</p><h1>Equipo, autonomía y progresiones</h1><p>Elige la herramienta que necesitas para la próxima actividad. Cada lista tiene una función distinta para evitar duplicados: lo que te acompaña siempre, lo que llevas durante la ruta y lo que utilizas al establecer el campamento.</p><div class="pills"><span class="pill">Equipo sin repeticiones</span><span class="pill">Descripción técnica</span><span class="pill">Tutorial por artículo</span></div></div><figure><img src="assets/interior-tropa.jpeg" alt="Scouts con mochilas preparadas para una salida"><figcaption>Autonomía personal y vida de Patrulla</figcaption></figure></section>
      <aside class="tropa-camp-rule"><span aria-hidden="true">⚜</span><div><p class="eyebrow">Una herramienta para cada momento</p><h2>Revisa solo la lista que corresponde a tu actividad</h2><p>Equipo de bolsillo para toda actividad; mochila de ataque para excursiones y recorridos; mochila de campamento para dormir y trabajar con la Patrulla.</p></div></aside>
      <section class="tropa-tool-grid" aria-label="Herramientas de Tropa">
        ${toolCard('#scout/tropa/bolsillo','waistpack','Uso habitual','Equipo de bolsillo','Cangurera o bolsillos con el material pequeño que un Scout mantiene localizado.',pocket)}
        ${toolCard('#scout/tropa/ataque','daypack','Excursiones y actividades','Mochila de ataque','Agua, alimento, clima, orientación y seguridad para la actividad del día.',attack)}
        ${toolCard('#scout/tropa/campamento','backpack','Campamentos','Prepárate para el Campamento Scout','Equipo personal, campamento, cocina, seguridad y control final de la Patrulla.',camp)}
        ${toolCard('#scout/tropa/aventuras','compass','Aventuras en la Naturaleza','Proceso de insignias','Registra evidencias y prepara la conversación con tus Scouters.')}
      </section>
    </main></div>`;
    app.insertAdjacentHTML('beforeend',contactFooter());
  };

  const QUICK_CONFIG = {
    bolsillo:{eyebrow:'Scout · Equipo habitual',title:'Equipo de bolsillo',description:'Una lista breve para comprobar el material pequeño que acompaña al Scout en reuniones, excursiones y campamentos.',icon:'waistpack',label:'Cangurera o bolsillos',rule:'Cada objeto debe tener una ubicación fija, cierre seguro y una función conocida. La cangurera también forma parte del checklist: no basta con revisar solamente su contenido.',items:pocketItems},
    ataque:{eyebrow:'Scout · Excursiones y actividades',title:'Mochila de ataque',description:'Lo necesario para la ruta o actividad del día, preparado según duración, clima, esfuerzo y programa.',icon:'daypack',label:'Mochila de excursión',rule:'Todo viaja dentro de una mochila estable y bien ajustada. Nada debe colgar, rebotar o impedir que el Scout camine con las manos libres y localice agua, impermeable o botiquín sin vaciarla.',items:attackItems}
  };
  window.tropaQuickPage = function (kind) {
    const cfg=QUICK_CONFIG[kind] || QUICK_CONFIG.ataque,items=cfg.items();
    switchMode('tropa');
    app.innerHTML=`<div class="shell tropa-camp-shell">${pageHeader('#scout/tropa','Menú de Tropa')}<main id="main" class="container tropa-camp-container">
      <section class="tropa-quick-hero"><div><a href="#scout/tropa">← Volver a herramientas de Tropa</a><p class="eyebrow">${cfg.eyebrow}</p><h1>${cfg.title}</h1><p>${cfg.description}</p><div class="pills"><span class="pill">Uso autónomo</span><span class="pill">Información práctica</span><span class="pill">Videos próximamente</span></div></div><figure aria-label="Ilustración de ${cfg.label}">${toolArtwork(cfg.icon)}<figcaption>${cfg.label}</figcaption></figure></section>
      <aside class="tropa-camp-rule"><span aria-hidden="true">✓</span><div><p class="eyebrow">Regla de comprobación</p><h2>El contenedor y su contenido se revisan juntos</h2><p>${cfg.rule}</p></div></aside>
      <section class="tropa-camp-overview"><div><p class="eyebrow">Antes de cada actividad</p><h2>Marca solo lo que ya comprobaste</h2><p>Abre “Nosotros te enseñamos cómo (Video)” para leer la guía técnica. El tutorial aparecerá en el mismo lugar cuando sea publicado.</p></div>${progress(items,'elementos comprobados')}<div class="tropa-list-actions"><button class="secondary" data-tropa-reset type="button">Reiniciar esta lista</button><button class="primary" data-tropa-print type="button">Imprimir checklist</button></div></section>
      <section class="panel tropa-camp-category tropa-quick-list"><header><span>01</span><b aria-hidden="true">${outdoorIcon(cfg.icon)}</b><div><p class="eyebrow">${cfg.label}</p><h2>${cfg.title}</h2><p>Revisa estado, ajuste, ubicación y uso antes de marcar cada elemento.</p></div>${progress(items,'comprobados')}</header><div class="tropa-camp-list">${items.map(itemCard).join('')}</div></section>
      ${quickCompletion(kind,items)}
      <section class="tropa-related-tools"><h2>Continúa tu preparación</h2><div>${kind==='bolsillo'?toolCard('#scout/tropa/ataque','daypack','Siguiente herramienta','Mochila de ataque','Prepara lo necesario para la actividad del día.',attackItems()):toolCard('#scout/tropa/bolsillo','waistpack','Lista complementaria','Equipo de bolsillo','Confirma el material pequeño que te acompaña.',pocketItems())}${toolCard('#scout/tropa/campamento','backpack','Si vas a dormir fuera','Equipo de campamento','Revisa descanso y material de Patrulla sin repetir lo ya comprobado.',allItems())}</div></section>
    </main></div>`;
    app.insertAdjacentHTML('beforeend',contactFooter());
    bind(items,()=>tropaQuickPage(kind));
  };

  window.tropaCampPage = function () {
    switchMode('tropa');
    const grouped=groups(),items=allItems();
    app.innerHTML=`<div class="shell tropa-camp-shell">${pageHeader('#scout/tropa','Menú de Tropa')}<main id="main" class="container tropa-camp-container">
      <section class="tropa-camp-hero"><div><a href="#scout/tropa">← Volver a herramientas de Tropa</a><p class="eyebrow">Scout · Campamento de Tropa</p><h1>Prepárate para el Campamento Scout</h1><p>Cada Scout revisa su equipo personal. La Patrulla reparte el material compartido, asigna responsables y comprueba que todo tenga una función antes de salir.</p><div class="pills"><span class="pill">Autonomía personal</span><span class="pill">Responsabilidad de Patrulla</span><span class="pill">Información y video por artículo</span></div></div><figure><img src="assets/interior-tropa.jpeg" alt="Scouts con sus mochilas listas para una salida"><figcaption>Siempre listos para la próxima aventura</figcaption></figure></section>
      <aside class="tropa-camp-rule"><span aria-hidden="true">⚜</span><div><p class="eyebrow">Regla de preparación</p><h2>Cada artículo tiene función, ubicación y responsable</h2><p>Marca un elemento solo después de revisarlo. Si es de Patrulla, anota quién lo lleva; si es personal, cada Scout comprueba el suyo. Nada compartido debe depender de que “alguien más” lo haya empacado.</p></div></aside>
      ${dataForm()}
      <section class="tropa-camp-overview"><div><p class="eyebrow">Revisión de la salida</p><h2>Trabajen módulo por módulo</h2><p>Abre “Nosotros te enseñamos cómo (Video)” para consultar la explicación técnica, asignar quién lo lleva y dejar una nota.</p></div>${progress(items,'elementos comprobados')}<div class="tropa-list-actions"><button class="secondary" data-tropa-reset type="button">Preparar un nuevo campamento</button><button class="primary" data-tropa-print type="button">Imprimir checklist</button></div></section>
      <nav class="tropa-camp-index" aria-label="Módulos del checklist">${grouped.map(([name])=>{const cfg=CATEGORY[name];return `<a href="#tropa-camp-${cfg.number}" data-tropa-camp-jump="tropa-camp-${cfg.number}"><span>${cfg.number}</span><b aria-hidden="true">${outdoorIcon(cfg.icon)}</b><strong>${name}</strong></a>`;}).join('')}</nav>
      <section class="tropa-camp-categories">${grouped.map(([name,categoryItems])=>categorySection(name,categoryItems)).join('')}</section>
      ${completion(items)}
      <section class="panel tropa-camp-final"><div><p class="eyebrow">Consejo de Patrulla</p><h2>Última comprobación</h2></div><ol><li>Cada Scout reconoce, carga y puede encontrar su equipo personal.</li><li>Cada artículo de Patrulla tiene responsable y ubicación.</li><li>El menú coincide con alimentos, agua, ollas y combustible.</li><li>Tiendas, lonas, estacas, herramientas y botiquín fueron probados o revisados.</li><li>La ficha de salud y la autorización son los formatos oficiales entregados por la dirigencia.</li><li>La Patrulla conoce lugar, horarios, pronóstico, punto de reunión y plan de emergencia.</li></ol></section>
      <section class="panel tropa-camp-link"><div><p class="eyebrow">Aventuras en la Naturaleza</p><h2>El campamento también es una oportunidad de progresión</h2><p>Registra las habilidades que practicaste y prepara la conversación con tus Scouters.</p></div><a class="secondary" href="#scout/tropa/aventuras">Abrir mi ruta de territorios →</a></section>
    </main></div>`;
    app.insertAdjacentHTML('beforeend',contactFooter());
    bind(items,tropaCampPage);
  };
})();
