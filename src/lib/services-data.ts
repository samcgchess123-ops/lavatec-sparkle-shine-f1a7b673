import { Sofa, BedDouble, Blinds, PawPrint, Layers, Wind } from "lucide-react";

export type ServiceDetail = {
  id: string;
  icon: typeof Sofa;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  process: string[];
  duration: string;
  surfaces: string[];
  steamAdvantages: string[];
  recommendations: string[];
  faqs: { q: string; a: string }[];
  priceFrom: string;
};

export const services: ServiceDetail[] = [
  {
    id: "muebles",
    icon: Sofa,
    title: "Limpieza de Muebles",
    shortDesc:
      "Higienización profunda con vapor para salas, comedores y poltronas. Elimina alérgenos y cuida las fibras.",
    description:
      "Limpieza profunda con vapor profesional para todo tipo de muebles tapizados. Penetramos las fibras para remover manchas, suciedad acumulada, malos olores y alérgenos, mientras sanitizamos cada superficie sin dañar el textil.",
    benefits: [
      "Elimina manchas difíciles y suciedad acumulada",
      "Neutraliza malos olores",
      "Remueve ácaros, bacterias y alérgenos",
      "Cuida y revitaliza las fibras textiles",
      "Secado rápido sin residuos",
    ],
    process: [
      "Inspección del material y manchas",
      "Aspirado profundo de partículas",
      "Aplicación de vapor a alta temperatura",
      "Extracción con tecnología profesional",
      "Sanitización final y secado acelerado",
    ],
    duration: "Entre 2 y 3 horas según tamaño y nivel de suciedad",
    surfaces: ["Sofás", "Poltronas", "Sillas", "Sillones reclinables", "Muebles de comedor"],
    steamAdvantages: [
      "Penetra fibras a profundidad sin químicos agresivos",
      "Sanitiza eliminando microorganismos",
      "Seguro para hogares con niños y mascotas",
    ],
    recommendations: [
      "Programa la limpieza cada 6 meses",
      "Ventila el área después del servicio",
      "Evita usar el mueble durante el secado (2–3 h)",
    ],
    faqs: [
      { q: "¿Sirve para todo tipo de tela?", a: "Sí, evaluamos cada material previamente para aplicar la técnica adecuada." },
      { q: "¿Quedan olores químicos?", a: "No. Nuestro proceso con vapor no deja residuos ni olores químicos." },
    ],
    priceFrom: "Desde $80.000",
  },
  {
    id: "colchones",
    icon: BedDouble,
    title: "Higienización de Colchones",
    shortDesc:
      "Vapor de alta temperatura para eliminar ácaros, bacterias y alérgenos. Descanso más saludable.",
    description:
      "Higienización profunda de colchones con vapor profesional. Eliminamos ácaros, células muertas, residuos orgánicos y alérgenos que se acumulan con el tiempo, mejorando la calidad de tu descanso.",
    benefits: [
      "Elimina ácaros y bacterias",
      "Remueve manchas y malos olores",
      "Reduce alérgenos respiratorios",
      "Mejora la higiene del sueño",
    ],
    process: [
      "Aspirado profundo de superficie",
      "Aplicación de vapor sanitizante",
      "Tratamiento de manchas específicas",
      "Extracción y secado acelerado",
    ],
    duration: "Entre 1 y 2 horas por colchón",
    surfaces: ["Sencillo", "Doble", "Queen", "King", "Pillow Top"],
    steamAdvantages: [
      "Mata ácaros y bacterias con calor seguro",
      "Sin químicos agresivos",
      "Ideal para personas con alergias",
    ],
    recommendations: [
      "Higienización recomendada cada 6 meses",
      "Voltea el colchón periódicamente",
      "Usa protector de colchón lavable",
    ],
    faqs: [
      { q: "¿Cuánto tarda en secar?", a: "Entre 2 y 3 horas gracias al sistema de extracción profesional." },
      { q: "¿Es seguro para bebés?", a: "Sí, no quedan residuos químicos en la superficie." },
    ],
    priceFrom: "Desde $90.000",
  },
  {
    id: "alfombras",
    icon: Layers,
    title: "Alfombras",
    shortDesc:
      "Lavado profundo con vapor que renueva fibras, elimina olores y devuelve el color original.",
    description:
      "Limpieza profesional de alfombras y todo tipo de tapizados. El vapor remueve la suciedad incrustada, polvo, ácaros y olores acumulados, prolongando la vida útil del tejido.",
    benefits: [
      "Recupera color y textura original",
      "Elimina polvo y alérgenos",
      "Neutraliza olores persistentes",
      "Prolonga la vida útil del tejido",
    ],
    process: [
      "Inspección del tipo de fibra",
      "Pre-tratamiento de manchas",
      "Vapor profundo con extracción",
      "Cepillado y secado controlado",
    ],
    duration: "1 a 3 horas según área",
    surfaces: ["Alfombras de sala", "Tapetes orientales", "Alfombras de oficina"],
    steamAdvantages: [
      "Penetra fibras sin saturar",
      "Sin residuos pegajosos",
      "Sanitiza al mismo tiempo",
    ],
    recommendations: [
      "Limpieza cada 6 a 12 meses",
      "Aspirado semanal entre servicios",
      "Trata manchas frescas con paño absorbente",
    ],
    faqs: [
      { q: "¿Se puede encoger la alfombra?", a: "No. Controlamos temperatura y humedad para proteger el tejido." },
    ],
    priceFrom: "Desde $60.000",
  },
  {
    id: "cortinas",
    icon: Blinds,
    title: "Cortinas",
    shortDesc:
      "Lavado de cortinas sin desmontar. Elimina polvo, ácaros y olores conservando la caída original.",
    description:
      "Limpieza de cortinas con vapor directamente donde están instaladas, sin necesidad de desmontarlas. Remueve polvo acumulado, ácaros y olores manteniendo la forma y caída original del textil.",
    benefits: [
      "Conserva la forma original",
      "Elimina polvo y ácaros",
      "Refresca el ambiente",
    ],
    process: [
      "Aspirado de polvo superficial",
      "Aplicación de vapor profesional",
      "Tratamiento de manchas puntuales",
      "Secado natural acelerado",
    ],
    duration: "1 a 2 horas según cantidad",
    surfaces: ["Cortinas de lino", "Algodón", "Poliéster", "Black-out"],
    steamAdvantages: [
      "Sanitiza sin agua excesiva",
      "Evita manchas de humedad",
      "Respeta colores y texturas",
    ],
    recommendations: [
      "Limpieza cada 6 meses",
      "Ventilación recomendada post-servicio",
    ],
    faqs: [],
    priceFrom: "Desde $40.000",
  },
  {
    id: "mascotas",
    icon: PawPrint,
    title: "Camas para Mascotas",
    shortDesc:
      "Higienización especializada que elimina pelo, olores, bacterias y alérgenos. Hogar más saludable.",
    description:
      "Servicio especializado para camas, cojines y accesorios de mascotas. Eliminamos pelo, suciedad, olores, bacterias y alérgenos, creando un entorno más higiénico para tu mascota y tu familia.",
    benefits: [
      "Elimina olores característicos",
      "Remueve pelo y suciedad",
      "Sanitiza eliminando bacterias",
      "Reduce alérgenos en el hogar",
      "Ideal para mascotas con piel sensible",
    ],
    process: [
      "Aspirado profundo de pelo",
      "Vapor sanitizante de alta temperatura",
      "Tratamiento desodorizante",
      "Extracción y secado controlado",
    ],
    duration: "1 a 2 horas",
    surfaces: ["Camas pequeñas", "Camas grandes", "Cojines", "Accesorios textiles"],
    steamAdvantages: [
      "Mata bacterias sin químicos tóxicos",
      "Seguro para la mascota",
      "Elimina olores en profundidad",
    ],
    recommendations: [
      "Higienización cada 2 a 3 meses",
      "Cepillar mascota regularmente",
    ],
    faqs: [
      { q: "¿Es seguro para mascotas con alergias?", a: "Sí, no usamos químicos agresivos y eliminamos los alérgenos." },
    ],
    priceFrom: "Desde $50.000",
  },
  {
    id: "sanitizacion",
    icon: Wind,
    title: "Sanitización Premium",
    shortDesc:
      "Limpieza completa de varios muebles y espacios en una sola visita. Ideal para mudanzas, muebles nuevos o renovar tu hogar.",
    description:
      "¿Acabas de mudarte? ¿Compraste muebles nuevos? ¿O quieres limpiar a profundidad los muebles de tu hogar? Este servicio está pensado para quienes desean realizar una limpieza completa de varios muebles y espacios en una sola visita. Podemos incluir salas, comedores, colchones, sillas, cabeceros, alfombras y más dentro de un paquete personalizado según las necesidades de tu hogar. Solo envíanos fotos o videos de los artículos que deseas limpiar, o agenda una visita de evaluación. Te prepararemos una propuesta integral para dejar tus muebles frescos, limpios y listos para disfrutar.",
    benefits: [
      "Higienización integral del hogar",
      "Reduce alérgenos respiratorios",
      "Ambiente más fresco y saludable",
      "Ideal para hogares con niños y mascotas",
    ],
    process: [
      "Evaluación completa de superficies",
      "Plan personalizado de tratamiento",
      "Vapor sanitizante por zonas",
      "Reporte final del servicio",
    ],
    duration: "Variable según alcance",
    surfaces: ["Múltiples áreas y textiles del hogar"],
    steamAdvantages: [
      "Acción 100% térmica",
      "Sin residuos ni olores químicos",
      "Resultados visibles y duraderos",
    ],
    recommendations: [
      "Programa semestral recomendado",
      "Combina con limpieza profunda regular",
    ],
    faqs: [
      { q: "¿Cuánto dura el efecto?", a: "Con mantenimiento adecuado, los beneficios se conservan entre 4 y 6 meses." },
    ],
    priceFrom: "Cotización personalizada",
  },
];

export const whatsappLink = (text: string) =>
  `https://wa.me/573046571420?text=${encodeURIComponent(text)}`;
