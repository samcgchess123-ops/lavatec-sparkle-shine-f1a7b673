import { BedDouble, Sofa, Layers, PawPrint, Droplets, Wind, Sparkles, Home, ShieldCheck, Bug, CloudRain, Brush } from "lucide-react";
import mattressImg from "@/assets/blog-mattress-new.jpg.asset.json";
import sofaImg from "@/assets/blog-sofa-new.jpg.asset.json";
import chairsImg from "@/assets/blog-carpet-new.jpg.asset.json";
import benchImg from "@/assets/blog-pet-new.jpg.asset.json";
import acarosImg from "@/assets/blog-acaros.jpg";
import sudorImg from "@/assets/blog-sudor.jpg";
import derrameImg from "@/assets/blog-derrame.jpg";
import mohoImg from "@/assets/blog-moho.jpg";
import oloresImg from "@/assets/blog-olores.jpg";
import mascotasSofaImg from "@/assets/blog-mascotas-sofa.jpg";
import superficialImg from "@/assets/blog-superficial.jpg";
import pielImg from "@/assets/blog-piel.jpg";
import sofaProfundaImg from "@/assets/blog-sofa-profunda.jpg";
import dormitorioImg from "@/assets/blog-dormitorio.jpg";

export type BlogSection = { heading: string; body: string; bullets?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  icon: typeof BedDouble;
  image: string;
  date: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  related: string[];
};

export const categories = [
  "Colchones",
  "Muebles",
  "Tapizados",
  "Higiene",
  "Mascotas",
  "Mantenimiento",
  "Hogar",
];

export const posts: BlogPost[] = [
  {
    slug: "limpiar-colchon",
    title: "¿Por qué es importante limpiar un colchón?",
    excerpt:
      "Con el tiempo el colchón acumula células muertas, ácaros y alérgenos que afectan tu descanso y salud.",
    category: "Colchones",
    tags: ["colchón", "ácaros", "alérgenos", "sueño", "higienización", "vapor", "polvo"],
    readTime: "4 min",
    icon: BedDouble,
    image: mattressImg.url,
    date: "Junio 2026",
    intro:
      "El colchón es el textil que más horas de contacto directo tiene con tu piel y, sin embargo, suele ser el que menos atención recibe. Entender qué se acumula dentro de él explica por qué una higienización periódica cambia por completo la calidad del descanso.",
    sections: [
      {
        heading: "Qué se acumula realmente en tu colchón",
        body:
          "Pasamos cerca de un tercio de nuestra vida sobre el colchón. Esa convivencia diaria deja residuos invisibles que se acumulan capa tras capa en el textil, más allá de lo que una sábana limpia puede contener.",
        bullets: [
          "Células de piel muerta",
          "Caspa y residuos del cabello",
          "Suciedad y polvo ambiental",
          "Ácaros y sus desechos",
          "Residuos orgánicos como sudor",
        ],
      },
      {
        heading: "Cómo ayuda el vapor profesional",
        body:
          "La limpieza con vapor utiliza calor y presión controlada para penetrar las fibras del colchón. Esto facilita la remoción de suciedad, ayuda a neutralizar olores y contribuye a reducir alérgenos acumulados, sin saturar el colchón con químicos ni dejarlo empapado.",
      },
      {
        heading: "Cada cuánto higienizarlo",
        body:
          "Recomendamos una higienización profunda cada 6 meses. Si en casa hay niños, mascotas o personas con alergias respiratorias, una frecuencia mayor mejora notablemente la calidad del sueño y del aire interior.",
      },
    ],
    conclusion:
      "Higienizar el colchón no es un lujo estético: es mantenimiento básico del lugar donde descansas todos los días. Con una rutina simple y una limpieza profunda periódica, el colchón se conserva mejor y el descanso se nota más fresco.",
    related: ["acaros-colchon", "celulas-piel-cama", "higiene-dormitorio-10-lugares"],
  },
  {
    slug: "vapor-muebles",
    title: "Beneficios de limpiar muebles con vapor",
    excerpt:
      "El vapor remueve manchas, olores y alérgenos mientras sanitiza las superficies textiles.",
    category: "Muebles",
    tags: ["muebles", "sofá", "vapor", "manchas", "olores", "tapizados", "alérgenos"],
    readTime: "5 min",
    icon: Sofa,
    image: sofaImg.url,
    date: "Junio 2026",
    intro:
      "El sofá concentra el uso diario de toda la familia. El vapor profesional se ha convertido en el método preferido para limpiarlo a fondo porque combina eficacia con un trato respetuoso hacia el textil.",
    sections: [
      {
        heading: "Qué logra el vapor en un mueble tapizado",
        body:
          "El vapor profesional alcanza temperaturas que ayudan a soltar la suciedad incrustada en las fibras textiles, permitiendo una extracción más eficiente y una superficie visiblemente más limpia.",
        bullets: [
          "Remoción de manchas difíciles",
          "Neutralización de malos olores",
          "Reducción de microorganismos",
          "Eliminación de suciedad acumulada",
          "Reducción de alérgenos",
        ],
      },
      {
        heading: "Sanitización sin químicos agresivos",
        body:
          "A diferencia de los métodos tradicionales, el vapor sanitiza la superficie tratada usando principalmente acción térmica. Esto lo convierte en una alternativa segura para hogares con niños, mascotas o personas sensibles a fragancias y químicos.",
      },
      {
        heading: "Cuida la inversión de tus muebles",
        body:
          "Una higienización periódica con vapor ayuda a conservar el color, la textura y la elasticidad de las fibras, prolongando la vida útil de tus muebles y manteniéndolos como nuevos por más tiempo.",
      },
    ],
    conclusion:
      "Limpiar con vapor no solo devuelve el aspecto original al mueble: también protege la inversión que hiciste en él y mejora el ambiente de la casa.",
    related: ["olores-sofas", "cuando-limpieza-profunda-sofa", "limpieza-superficial-insuficiente"],
  },
  {
    slug: "limpiar-alfombras",
    title: "¿Cada cuánto limpiar alfombras y tapizados?",
    excerpt:
      "Una rutina de limpieza periódica mantiene tus alfombras y tapizados más higiénicos, frescos y duraderos.",
    category: "Tapizados",
    tags: ["alfombras", "tapizados", "polvo", "frecuencia", "mantenimiento", "aire interior"],
    readTime: "4 min",
    icon: Layers,
    image: chairsImg.url,
    date: "Junio 2026",
    intro:
      "Las alfombras y los tapizados son el filtro silencioso de la casa: retienen todo lo que flota o entra desde la calle. Saber cada cuánto limpiarlos es la diferencia entre un textil que dura años y uno que envejece antes de tiempo.",
    sections: [
      {
        heading: "Por qué la frecuencia importa",
        body:
          "Alfombras y tapizados actúan como un filtro doméstico: atrapan polvo, polen, pelo, ácaros y partículas del calzado. Sin una limpieza profunda regular, esa carga termina afectando la calidad del aire interior.",
      },
      {
        heading: "Frecuencia recomendada",
        body:
          "Una limpieza profesional cada 6 a 12 meses suele ser suficiente para uso residencial. En hogares con mascotas, niños pequeños o tráfico intenso, una frecuencia más corta marca una diferencia clara en la higiene del espacio.",
        bullets: [
          "Aspirado semanal en zonas de paso",
          "Tratamiento inmediato de manchas frescas",
          "Limpieza profunda profesional cada 6–12 meses",
        ],
      },
      {
        heading: "Beneficios de mantenerla limpia",
        body:
          "Además de un ambiente más saludable, la limpieza periódica prolonga la vida útil del tejido, conserva los colores originales y reduce la acumulación de polvo y alérgenos en el hogar.",
      },
    ],
    conclusion:
      "Una alfombra limpia se siente distinta bajo los pies y cambia la percepción de todo el espacio. La clave está en no esperar a que la suciedad sea visible.",
    related: ["limpieza-superficial-insuficiente", "higiene-dormitorio-10-lugares", "vapor-muebles"],
  },
  {
    slug: "cama-mascotas",
    title: "¿Por qué limpiar las camas de las mascotas?",
    excerpt:
      "Las camas de las mascotas acumulan pelo, olores y bacterias que afectan a toda la familia.",
    category: "Mascotas",
    tags: ["mascotas", "perro", "gato", "olores", "pelo", "bacterias", "higiene"],
    readTime: "4 min",
    icon: PawPrint,
    image: benchImg.url,
    date: "Junio 2026",
    intro:
      "La cama de la mascota es uno de los textiles con más uso del hogar y, casi siempre, uno de los últimos en limpiarse a fondo. Ese desbalance tiene consecuencias directas en el olor y la higiene de la casa.",
    sections: [
      {
        heading: "Lo que se acumula con el uso diario",
        body:
          "La cama de tu mascota concentra residuos que terminan afectando tanto al animal como al ambiente que comparten todos en casa.",
        bullets: ["Pelo", "Suciedad", "Olores", "Ácaros", "Bacterias", "Alérgenos"],
      },
      {
        heading: "Beneficios de una higienización periódica",
        body:
          "Una limpieza periódica con vapor profesional contribuye a un entorno más higiénico para la mascota y para la familia, reduciendo olores característicos y la presencia de microorganismos en la superficie tratada.",
      },
      {
        heading: "Frecuencia ideal",
        body:
          "Recomendamos higienizar las camas cada 2 o 3 meses, combinado con un lavado semanal de mantas y cobertores. Tu mascota lo nota: descansa mejor en un espacio limpio.",
      },
    ],
    conclusion:
      "Cuidar la cama de tu mascota es cuidar el aire que respiran todos en casa. Es un gesto pequeño con un efecto inmediato sobre el ambiente.",
    related: ["limpieza-despues-mascota", "olores-sofas", "limpiar-colchon"],
  },

  /* ---------- Nuevos artículos ---------- */

  {
    slug: "acaros-colchon",
    title: "Ácaros en el colchón: qué son, dónde se encuentran y cómo reducir su presencia",
    excerpt:
      "Son microscópicos, viven de nuestra piel y encuentran en el colchón el ambiente perfecto. Así puedes reducir su presencia de forma realista.",
    category: "Colchones",
    tags: ["ácaros", "colchón", "alergias", "polvo", "humedad", "higienización", "dormitorio"],
    readTime: "7 min",
    icon: Bug,
    image: acarosImg,
    date: "Septiembre 2026",
    intro:
      "Cuando alguien escucha la palabra ácaros suele imaginar suciedad visible o descuido. La realidad es distinta: los ácaros del polvo doméstico viven en prácticamente todos los hogares del mundo, incluso en los más ordenados. Son microscópicos, no se ven a simple vista y su presencia no depende de lo limpia que parezca una casa, sino de las condiciones del ambiente y de la disponibilidad de alimento. Y el colchón, por su temperatura, humedad y contacto directo con la piel, es uno de los lugares donde encuentran todo lo que necesitan.",
    sections: [
      {
        heading: "Qué son exactamente los ácaros del polvo",
        body:
          "Los ácaros del polvo doméstico son organismos diminutos emparentados con las arañas. Miden fracciones de milímetro, no pican y no se alimentan de sangre. Su dieta principal son las células de piel muerta que las personas y las mascotas desprenden de forma natural cada día. Como cada persona pierde una cantidad considerable de piel mientras duerme, la cama se convierte en una fuente de alimento constante y renovada.",
      },
      {
        heading: "Por qué el colchón es su lugar favorito",
        body:
          "Los ácaros necesitan tres condiciones para prosperar y el dormitorio se las ofrece todas al mismo tiempo. Cuanto más cerrado, húmedo y cálido sea el ambiente, más favorable resulta el escenario.",
        bullets: [
          "Temperatura templada, mantenida por el calor corporal durante la noche",
          "Humedad relativa alta, alimentada por el sudor y la transpiración",
          "Alimento abundante en forma de células de piel",
          "Superficies textiles porosas donde refugiarse en profundidad",
          "Poca ventilación y poca exposición a la luz directa",
        ],
      },
      {
        heading: "Dónde se concentran dentro del dormitorio",
        body:
          "No están solo en el colchón. Se distribuyen por todo el conjunto textil de la habitación, con mayor densidad en las zonas que combinan calor, humedad y fibras profundas.",
        bullets: [
          "Colchón, especialmente en la zona de la cabeza y el torso",
          "Almohadas y protectores",
          "Base o box tapizado",
          "Cabeceros de tela",
          "Alfombras y tapetes del dormitorio",
          "Cortinas y cojines decorativos",
        ],
      },
      {
        heading: "Por qué se relacionan con molestias respiratorias",
        body:
          "El problema no es el ácaro en sí, sino los residuos que deja. Sus desechos y fragmentos contienen proteínas que actúan como alérgenos comunes en interiores. Al mover la ropa de cama o sentarse en la cama, esas partículas se dispersan en el aire y pueden inhalarse. Muchas personas notan congestión al despertar, estornudos matutinos, picor de ojos o tos nocturna sin relacionarlo con el colchón.",
      },
      {
        heading: "Qué funciona realmente para reducir su presencia",
        body:
          "No existe un método que elimine los ácaros para siempre, porque volverán mientras haya piel, calor y humedad. Lo que sí funciona es reducir su población y, sobre todo, retirar los residuos acumulados. Una rutina constante combinada con limpieza profunda periódica da resultados visibles en el confort al dormir.",
        bullets: [
          "Ventilar el dormitorio a diario, aunque sea unos minutos",
          "Lavar la ropa de cama con agua caliente cada semana",
          "Usar fundas de colchón y almohada lavables",
          "Aspirar el colchón y la base con boquilla textil",
          "Evitar acumular cojines y peluches sobre la cama",
          "Mantener la humedad del ambiente lo más controlada posible",
          "Programar una higienización profesional con vapor de forma periódica",
        ],
      },
      {
        heading: "El papel del vapor profesional",
        body:
          "El vapor actúa por temperatura y penetra en las capas donde una aspiradora doméstica no llega. Ayuda a desprender residuos incrustados, facilita su extracción y trata la superficie sin empapar el colchón ni recurrir a productos agresivos. En hogares con personas alérgicas, la diferencia suele notarse en las primeras noches.",
      },
    ],
    conclusion:
      "Los ácaros no son señal de descuido: son parte del ecosistema doméstico. Lo que sí está en tus manos es controlar sus condiciones de vida y retirar periódicamente lo que se acumula en el colchón. Con ventilación, rutina semanal y una higienización profunda cada cierto tiempo, el dormitorio se convierte en un espacio mucho más amable para respirar y descansar.",
    related: ["celulas-piel-cama", "limpiar-colchon", "higiene-dormitorio-10-lugares"],
  },
  {
    slug: "sudor-colchon",
    title: "Sudor en el colchón: por qué se acumula y cómo afecta al tejido",
    excerpt:
      "Transpiramos todas las noches, incluso sin notarlo. Ese líquido no desaparece: se queda en las fibras del colchón.",
    category: "Colchones",
    tags: ["sudor", "colchón", "humedad", "manchas amarillas", "olores", "clima cálido"],
    readTime: "6 min",
    icon: Droplets,
    image: sudorImg,
    date: "Septiembre 2026",
    intro:
      "Sudar mientras dormimos es un proceso fisiológico normal: el cuerpo regula su temperatura durante toda la noche. Lo que muchas personas no consideran es a dónde va ese líquido. La sábana absorbe una parte, pero el resto atraviesa el tejido y termina en el colchón, noche tras noche, durante años. En climas cálidos y húmedos el fenómeno se multiplica.",
    sections: [
      {
        heading: "Cuánta humedad recibe realmente un colchón",
        body:
          "Una persona adulta puede perder una cantidad apreciable de líquido durante el sueño, entre transpiración y respiración. Multiplicado por dos personas y por cientos de noches al año, el colchón recibe un aporte constante de humedad que no siempre alcanza a evaporarse por completo, sobre todo si la cama se tiende inmediatamente al levantarse.",
      },
      {
        heading: "Qué contiene el sudor además de agua",
        body:
          "El sudor no es solo agua. Arrastra componentes que quedan retenidos en las fibras cuando el agua se evapora, y son esos residuos los que cambian el color y el olor del tejido con el tiempo.",
        bullets: [
          "Sales minerales",
          "Urea y otros compuestos orgánicos",
          "Grasa natural de la piel",
          "Restos de cosméticos y cremas corporales",
          "Células de piel desprendidas",
        ],
      },
      {
        heading: "Por qué aparecen las manchas amarillas",
        body:
          "Las manchas amarillentas típicas de un colchón usado son la huella de esos residuos oxidándose dentro del tejido. No son suciedad superficial: se forman en profundidad y por eso no se resuelven frotando por encima. Cuanto más tiempo pasan sin tratarse, más se fijan a la fibra y más difícil resulta atenuarlas.",
      },
      {
        heading: "Cómo afecta a la estructura del colchón",
        body:
          "La humedad recurrente no solo mancha. También afecta la manera en que el colchón se comporta y envejece, especialmente en materiales como la espuma viscoelástica, que retiene más humedad que un núcleo de muelles ventilado.",
        bullets: [
          "Olor persistente que reaparece con el calor corporal",
          "Ambiente favorable para ácaros y microorganismos",
          "Pérdida de frescura y sensación de tejido apelmazado",
          "Riesgo de manchas permanentes y degradación de la fibra",
        ],
      },
      {
        heading: "Hábitos que reducen el impacto",
        body:
          "Antes de pensar en una limpieza profunda, hay medidas diarias que reducen mucho la carga de humedad que recibe el colchón.",
        bullets: [
          "Airear la cama sin tender durante 20 o 30 minutos al levantarse",
          "Usar un protector de colchón transpirable y lavable",
          "Cambiar la ropa de cama al menos una vez por semana",
          "Ventilar el dormitorio a diario",
          "Evitar acostarse inmediatamente después de hacer ejercicio o ducharse sin secarse bien",
        ],
      },
      {
        heading: "Cuándo conviene una higienización profesional",
        body:
          "Si el colchón ya presenta manchas amarillas, olor a humedad o una sensación general de tejido cargado, la limpieza doméstica difícilmente resolverá el problema. Un tratamiento con vapor y extracción trabaja en profundidad, retira residuos acumulados y deja el colchón con un nivel de humedad controlado para que seque en pocas horas.",
      },
    ],
    conclusion:
      "El sudor es inevitable, pero su acumulación no. Con hábitos simples de ventilación y una higienización profunda periódica, el colchón conserva su frescura y evita llegar al punto en que las manchas y el olor se vuelven permanentes.",
    related: ["limpiar-colchon", "moho-colchones", "acaros-colchon"],
  },
  {
    slug: "derrame-liquido-colchon",
    title: "¿Qué hacer cuando se derrama un líquido sobre el colchón?",
    excerpt:
      "Los primeros minutos determinan si el derrame será un mal recuerdo o una mancha permanente. Esta es la forma correcta de actuar.",
    category: "Mantenimiento",
    tags: ["derrame", "colchón", "manchas", "líquido", "emergencia", "humedad", "secado"],
    readTime: "6 min",
    icon: CloudRain,
    image: derrameImg,
    date: "Septiembre 2026",
    intro:
      "Un vaso de agua, un café en la cama, un accidente de un niño o de una mascota. Los derrames sobre el colchón son más frecuentes de lo que parece y casi siempre se manejan mal por instinto: frotando fuerte y echando más líquido encima. Lo que ocurre en los primeros minutos define el resultado final.",
    sections: [
      {
        heading: "Lo primero: absorber, nunca frotar",
        body:
          "Frotar empuja el líquido hacia el interior del colchón y expande la mancha hacia los lados. El objetivo inicial es el contrario: retirar la mayor cantidad posible de líquido antes de que penetre. Se hace presionando con toallas limpias y secas, de forma vertical, cambiándolas por otras secas cada vez que se saturen.",
      },
      {
        heading: "Paso a paso en los primeros minutos",
        body:
          "Actuar con orden evita empeorar la situación y ahorra trabajo posterior.",
        bullets: [
          "Retirar de inmediato sábanas, protector y almohadas afectadas",
          "Presionar con toallas secas desde el borde de la mancha hacia el centro",
          "Repetir con toallas limpias hasta que salgan casi secas",
          "Evitar verter agua adicional sobre la zona",
          "No aplicar calor directo con secador ni plancha sobre la mancha",
          "Ventilar la habitación y favorecer la circulación de aire",
        ],
      },
      {
        heading: "Por qué el secado importa tanto como la limpieza",
        body:
          "El error más costoso no es la mancha: es dejar humedad atrapada dentro del colchón. Un núcleo húmedo y sin ventilación es el punto de partida de olores persistentes y de la aparición de moho en el interior, un problema mucho más difícil de resolver que la mancha original.",
      },
      {
        heading: "Qué hacer según el tipo de líquido",
        body:
          "No todos los derrames se comportan igual y algunos requieren atención profesional más pronto que tarde.",
        bullets: [
          "Agua: absorber y secar bien; suele resolverse sin dejar marca si se actúa rápido",
          "Café, jugo o refresco: absorber y tratar pronto, porque los azúcares y pigmentos se fijan",
          "Líquidos corporales: además de la mancha, requieren tratamiento higiénico de la zona",
          "Derrames de mascotas: el olor puede persistir aunque la mancha desaparezca",
        ],
      },
      {
        heading: "Cuándo llamar a un profesional",
        body:
          "Si el derrame fue abundante, si el líquido llegó al núcleo, si pasaron varias horas antes de tratarlo o si aparece olor después de secar, la intervención profesional es la vía razonable. Un equipo de vapor con extracción permite tratar la zona en profundidad y retirar la humedad residual, algo que con toallas y ventilación natural rara vez se consigue por completo.",
      },
    ],
    conclusion:
      "Ante un derrame, la prioridad es absorber rápido y secar bien. Si el líquido alcanzó el interior del colchón o el olor reaparece días después, no conviene esperar: cuanto antes se trate, mayores son las probabilidades de recuperar el colchón por completo.",
    related: ["moho-colchones", "sudor-colchon", "limpiar-colchon"],
  },
  {
    slug: "moho-colchones",
    title: "Moho en colchones: por qué aparece y qué hacer cuando se presenta",
    excerpt:
      "Humedad, poca ventilación y temperatura cálida son la combinación exacta que el moho necesita para instalarse en un textil.",
    category: "Higiene",
    tags: ["moho", "humedad", "colchón", "hongos", "ventilación", "olor", "clima húmedo"],
    readTime: "7 min",
    icon: Wind,
    image: mohoImg,
    date: "Septiembre 2026",
    intro:
      "El moho no aparece por casualidad. Necesita humedad sostenida, materia orgánica y un ambiente con poca circulación de aire. En ciudades cálidas y húmedas esas condiciones se dan con facilidad, y el colchón, que recibe humedad corporal cada noche, es un candidato natural cuando la ventilación falla.",
    sections: [
      {
        heading: "Las condiciones que lo hacen posible",
        body:
          "Entender el origen es la única forma de evitar que vuelva. El moho es la consecuencia visible de un problema de humedad que suele llevar semanas o meses desarrollándose.",
        bullets: [
          "Humedad ambiental alta de forma constante",
          "Colchón apoyado directamente sobre el suelo o sobre una base sin ventilación",
          "Habitaciones cerradas durante largos periodos",
          "Derrames mal secados o filtraciones cercanas",
          "Aire acondicionado que genera condensación sin renovación de aire",
        ],
      },
      {
        heading: "Cómo detectarlo a tiempo",
        body:
          "El moho casi siempre se anuncia antes de verse. El olor es la primera señal y suele describirse como a humedad, a sótano o a ropa guardada mojada.",
        bullets: [
          "Olor húmedo persistente en la habitación",
          "Manchas oscuras, grises o verdosas en la base o los laterales",
          "Sensación de tejido frío o húmedo al tacto",
          "Molestias respiratorias que mejoran al salir del dormitorio",
        ],
      },
      {
        heading: "Qué hacer cuando ya apareció",
        body:
          "Lo primero es cortar la fuente de humedad; sin eso, cualquier limpieza es temporal. Después se puede evaluar el estado real del colchón.",
        bullets: [
          "Ventilar de inmediato y aumentar la circulación de aire",
          "Separar el colchón del suelo y revisar la base",
          "Retirar y lavar toda la ropa de cama afectada",
          "Evitar mezclar productos de limpieza por cuenta propia",
          "Solicitar una valoración profesional antes de intentar tratarlo a fondo",
        ],
      },
      {
        heading: "Por qué la limpieza casera suele quedarse corta",
        body:
          "Los remedios caseros actúan en la superficie, pero el moho crece hacia el interior del material. Además, muchos de esos métodos añaden más humedad al colchón, que es justamente lo que alimenta el problema. Si el crecimiento es profundo o extenso, un técnico debe evaluar si el colchón es recuperable o si conviene reemplazarlo.",
      },
      {
        heading: "Prevención a largo plazo",
        body:
          "Una vez resuelto el episodio, mantener el colchón libre de moho depende sobre todo de la ventilación y del control de humedad del dormitorio.",
        bullets: [
          "Ventilar la habitación todos los días",
          "Usar bases con listones o estructuras que permitan el flujo de aire",
          "Secar por completo cualquier derrame",
          "Evitar cubrir el colchón con plásticos impermeables no transpirables",
          "Programar higienizaciones periódicas, especialmente en temporada húmeda",
        ],
      },
    ],
    conclusion:
      "El moho es un síntoma, no la enfermedad. Resolverlo implica tratar la humedad que lo originó y, en paralelo, higienizar el textil afectado. Cuanto antes se detecte, mayores son las opciones de salvar el colchón.",
    related: ["derrame-liquido-colchon", "sudor-colchon", "higiene-dormitorio-10-lugares"],
  },
  {
    slug: "olores-sofas",
    title: "Malos olores en sofás: de dónde vienen y por qué no basta con perfumarlos",
    excerpt:
      "El ambientador cubre el olor unas horas; el origen sigue dentro de la fibra. Así se identifica y se resuelve de verdad.",
    category: "Muebles",
    tags: ["olores", "sofá", "muebles", "ambientador", "humedad", "mascotas", "comida"],
    readTime: "6 min",
    icon: Sparkles,
    image: oloresImg,
    date: "Septiembre 2026",
    intro:
      "Hay casas donde el olor aparece al sentarse. No es un olor fuerte ni evidente al entrar, pero está ahí, en el sofá, y regresa siempre. La reacción habitual es aplicar ambientador o un textil perfumado. El resultado dura unas horas y el olor vuelve, porque el origen nunca se retiró.",
    sections: [
      {
        heading: "De dónde viene realmente el olor",
        body:
          "Un sofá acumula residuos orgánicos por su uso diario. Esos residuos se descomponen lentamente dentro de la fibra y liberan compuestos volátiles: eso es lo que percibimos como olor.",
        bullets: [
          "Sudor y grasa corporal transferidos por la piel y el cabello",
          "Migas y restos de comida en las uniones y bajo los cojines",
          "Líquidos derramados que se secaron sin limpiarse",
          "Humedad ambiental retenida en el relleno",
          "Pelo, saliva y grasa natural de las mascotas",
          "Humo de cocina o de tabaco absorbido por el textil",
        ],
      },
      {
        heading: "Por qué el ambientador no resuelve nada",
        body:
          "Los ambientadores funcionan por superposición: añaden una fragancia más intensa que enmascara la anterior. No retiran el residuo que genera el olor, y en muchos casos aportan más carga al tejido. Cuando la fragancia se disipa, el olor original reaparece exactamente igual, a veces mezclado con el perfume añadido.",
      },
      {
        heading: "Las zonas que más concentran olor",
        body:
          "Cuando busques el origen, revisa primero los puntos donde se acumula la materia orgánica y donde el aire circula menos.",
        bullets: [
          "Uniones entre asiento y respaldo",
          "Interior y base de los cojines",
          "Reposabrazos, por el contacto con manos y cabeza",
          "Parte inferior y trasera del mueble",
          "Zona habitual de descanso de la mascota",
        ],
      },
      {
        heading: "Qué sí funciona",
        body:
          "Eliminar un olor implica retirar físicamente lo que lo produce y tratar la fibra en profundidad. El vapor profesional actúa por temperatura, ayuda a descomponer los residuos adheridos y permite extraerlos junto con la humedad utilizada, sin dejar el mueble empapado.",
        bullets: [
          "Aspirado profundo previo, incluidas uniones y base",
          "Tratamiento térmico con vapor sobre toda la superficie",
          "Extracción de residuos y humedad",
          "Secado controlado y ventilación posterior",
        ],
      },
      {
        heading: "Cómo mantener el resultado",
        body:
          "Después de una limpieza profunda, mantener el sofá sin olores es cuestión de hábitos: aspirar semanalmente, evitar comer sobre el mueble con frecuencia, ventilar la sala y tratar de inmediato cualquier derrame.",
      },
    ],
    conclusion:
      "Un sofá que huele bien de forma natural no necesita perfume. Cuando el olor persiste pese a la limpieza superficial, la señal es clara: el residuo está dentro de la fibra y solo una limpieza profunda lo va a retirar.",
    related: ["limpieza-despues-mascota", "cuando-limpieza-profunda-sofa", "vapor-muebles"],
  },
  {
    slug: "limpieza-despues-mascota",
    title: "Limpieza después de una mascota: qué queda realmente en un sofá o colchón",
    excerpt:
      "El pelo es solo la parte visible. Debajo quedan saliva, grasa natural y partículas que el aspirado no alcanza.",
    category: "Mascotas",
    tags: ["mascotas", "perro", "gato", "pelo", "saliva", "alérgenos", "sofá", "colchón"],
    readTime: "7 min",
    icon: PawPrint,
    image: mascotasSofaImg,
    date: "Septiembre 2026",
    intro:
      "Convivir con animales en casa es una decisión afectiva, no un problema de higiene. Pero sí implica una carga textil distinta. Cuando una mascota duerme en el sofá o sube a la cama, deja mucho más que pelo, y esa diferencia explica por qué el aspirado semanal a veces no es suficiente.",
    sections: [
      {
        heading: "Lo que deja una mascota en el textil",
        body:
          "El pelo es lo único que vemos, pero representa una fracción de lo que realmente se transfiere al mueble o al colchón durante el uso diario.",
        bullets: [
          "Pelo suelto, que se entrelaza con las fibras del tejido",
          "Caspa animal, uno de los alérgenos domésticos más frecuentes",
          "Saliva depositada al lamerse o al descansar",
          "Grasa natural de la piel y el pelaje",
          "Tierra y partículas traídas desde la calle en las patas",
          "Humedad de la respiración y del cuerpo",
        ],
      },
      {
        heading: "Por qué el olor de mascota es tan persistente",
        body:
          "La combinación de grasa, saliva y humedad crea una película que se adhiere a la fibra. A diferencia del polvo, no se desprende con succión: hay que actuar sobre ella con temperatura y extracción. Esa es la razón por la que un sofá aspirado a conciencia puede seguir oliendo a perro al final del día, cuando el calor corporal reactiva los compuestos retenidos.",
      },
      {
        heading: "Los límites del aspirado doméstico",
        body:
          "Aspirar es indispensable y debe hacerse con frecuencia, pero tiene un alcance definido. Retira lo suelto de la superficie y de los primeros milímetros; no llega al relleno ni disuelve residuos adheridos.",
      },
      {
        heading: "Una rutina realista para hogares con mascotas",
        body:
          "El objetivo no es tener una casa estéril, sino evitar la acumulación. Con constancia, la limpieza profunda se necesita menos veces y da mejores resultados.",
        bullets: [
          "Aspirar sofá y zonas de descanso dos o tres veces por semana",
          "Cepillar a la mascota con regularidad para reducir la caída de pelo",
          "Limpiar las patas al regresar de la calle",
          "Usar fundas o mantas lavables en su lugar habitual",
          "Lavar su cama y sus textiles cada semana",
          "Programar una higienización profunda cada 3 a 6 meses",
        ],
      },
      {
        heading: "Qué aporta la limpieza con vapor",
        body:
          "El vapor trabaja por temperatura y ayuda a soltar la grasa y los residuos adheridos a la fibra, permitiendo su extracción. Al no depender de químicos agresivos, resulta una opción coherente para hogares donde el animal volverá a usar el mismo mueble poco después.",
      },
    ],
    conclusion:
      "Tener mascotas y una casa higiénica no son objetivos incompatibles. Requieren una rutina algo más constante y una limpieza profunda periódica que retire lo que el aspirado no alcanza.",
    related: ["cama-mascotas", "olores-sofas", "limpieza-superficial-insuficiente"],
  },
  {
    slug: "limpieza-superficial-insuficiente",
    title: "¿Por qué una limpieza superficial no siempre es suficiente?",
    excerpt:
      "Aspirar y quitar manchas visibles mantiene el orden, pero no retira lo que se acumula en el interior del textil.",
    category: "Higiene",
    tags: ["limpieza profunda", "aspirado", "textiles", "fibras", "mantenimiento", "vapor"],
    readTime: "6 min",
    icon: ShieldCheck,
    image: superficialImg,
    date: "Septiembre 2026",
    intro:
      "Hay una diferencia importante entre una casa ordenada y una casa higienizada. La limpieza superficial resuelve lo visible: polvo en las superficies, migas en el sofá, una mancha reciente. La limpieza profunda actúa sobre lo que no se ve y que, precisamente por eso, se acumula sin que nadie lo note.",
    sections: [
      {
        heading: "Cómo funciona un textil por dentro",
        body:
          "Un tejido tapizado no es una superficie plana: es una estructura tridimensional con miles de fibras entrelazadas y un relleno debajo. Las partículas que caen sobre él descienden por gravedad y por el movimiento del uso diario hasta alojarse entre las fibras, donde ni la vista ni la succión doméstica llegan con facilidad.",
      },
      {
        heading: "Qué alcanza cada tipo de limpieza",
        body:
          "Ambas son necesarias y cumplen funciones distintas. El error es asumir que una reemplaza a la otra.",
        bullets: [
          "Limpieza superficial: polvo suelto, migas, pelo visible, manchas recientes",
          "Limpieza profunda: residuos incrustados, grasa corporal, olores, alérgenos acumulados",
        ],
      },
      {
        heading: "Señales de que hace falta ir más a fondo",
        body:
          "El textil suele avisar antes de que el problema sea evidente. Estas son las señales más frecuentes.",
        bullets: [
          "El mueble huele aunque se vea limpio",
          "El color se ve apagado en las zonas de más uso",
          "Aparecen brillos o zonas endurecidas al tacto",
          "Alguien en casa presenta molestias respiratorias en interiores",
          "Han pasado más de doce meses desde la última limpieza profunda",
        ],
      },
      {
        heading: "Por qué el vapor cambia el resultado",
        body:
          "La limpieza profunda con vapor combina temperatura, humedad controlada y extracción. El calor ayuda a soltar lo que está adherido a la fibra, y la extracción retira ese residuo junto con el agua utilizada. Es un proceso distinto al de frotar con un producto en la superficie, donde buena parte de la suciedad simplemente se redistribuye.",
      },
      {
        heading: "Un equilibrio razonable",
        body:
          "Ninguna casa necesita limpieza profunda cada semana. Lo eficiente es mantener una rutina superficial constante y reservar la intervención profunda para intervalos definidos: cada 6 a 12 meses en uso residencial normal, y con mayor frecuencia si hay mascotas, niños o alergias.",
      },
    ],
    conclusion:
      "Una limpieza superficial constante mantiene la casa presentable; una limpieza profunda periódica la mantiene saludable. Combinar ambas es lo que realmente conserva los textiles en buen estado a lo largo de los años.",
    related: ["vapor-muebles", "cuando-limpieza-profunda-sofa", "limpiar-alfombras"],
  },
  {
    slug: "celulas-piel-cama",
    title: "¿Qué ocurre con las células de piel que dejamos en la cama?",
    excerpt:
      "Renovamos la piel constantemente y buena parte de ese proceso ocurre mientras dormimos. Ese material no desaparece solo.",
    category: "Colchones",
    tags: ["piel", "cama", "colchón", "polvo", "ácaros", "almohada", "dormitorio"],
    readTime: "5 min",
    icon: BedDouble,
    image: pielImg,
    date: "Septiembre 2026",
    intro:
      "La piel se renueva de forma continua: las capas más externas se desprenden y son reemplazadas. Es un proceso invisible, silencioso y permanente. Como pasamos varias horas seguidas en contacto con la cama, una parte considerable de ese material termina depositada en las sábanas, la almohada y el colchón.",
    sections: [
      {
        heading: "Un proceso natural con una consecuencia acumulativa",
        body:
          "Cada noche, el roce con el textil favorece el desprendimiento de células muertas. Individualmente son partículas microscópicas e inofensivas. El punto relevante es la acumulación: lo que se deposita cada noche, durante años, sobre la misma superficie.",
      },
      {
        heading: "Dónde termina ese material",
        body:
          "No todo queda en la sábana. La ropa de cama retiene una parte, pero el tejido es permeable y el resto continúa su recorrido hacia abajo.",
        bullets: [
          "Sábanas y fundas, que se lavan con frecuencia",
          "Almohada, donde la concentración es especialmente alta",
          "Superficie del colchón",
          "Capas internas del acolchado",
          "Base o box tapizado",
        ],
      },
      {
        heading: "Por qué esto alimenta a los ácaros",
        body:
          "Las células de piel son la fuente de alimento principal de los ácaros del polvo. Una cama con acumulación sostenida ofrece alimento continuo en un ambiente cálido y húmedo. Reducir esa acumulación es la forma más directa de limitar su población, más eficaz que cualquier producto aplicado ocasionalmente.",
      },
      {
        heading: "Qué hacer en la práctica",
        body:
          "No se trata de evitar un proceso biológico, sino de gestionar lo que deja atrás con una rutina sencilla.",
        bullets: [
          "Lavar sábanas y fundas cada semana con agua caliente",
          "Usar protector de colchón y de almohada, y lavarlos con regularidad",
          "Airear la cama antes de tenderla",
          "Aspirar la superficie del colchón cada cierto tiempo",
          "Reemplazar las almohadas cuando pierden forma y firmeza",
          "Higienizar el colchón en profundidad cada 6 meses",
        ],
      },
    ],
    conclusion:
      "Las células de piel son el ingrediente invisible que explica buena parte del polvo doméstico y de la actividad de los ácaros en el dormitorio. Gestionarlas es sencillo: rutina semanal de lavado y una higienización profunda dos veces al año.",
    related: ["acaros-colchon", "limpiar-colchon", "higiene-dormitorio-10-lugares"],
  },
  {
    slug: "cuando-limpieza-profunda-sofa",
    title: "¿Cuándo deberías hacer una limpieza profunda de tu sofá?",
    excerpt:
      "No hay que esperar a que se vea sucio. Estas son las señales concretas que indican que llegó el momento.",
    category: "Muebles",
    tags: ["sofá", "limpieza profunda", "frecuencia", "señales", "tapicería", "vapor", "manchas"],
    readTime: "6 min",
    icon: Brush,
    image: sofaProfundaImg,
    date: "Septiembre 2026",
    intro:
      "El sofá es probablemente el mueble más usado de la casa y, a la vez, el que menos mantenimiento planificado recibe. La mayoría de las personas lo limpia a fondo cuando ya se ve deteriorado, es decir, cuando la suciedad lleva mucho tiempo trabajando sobre la fibra. Anticiparse cambia por completo el resultado.",
    sections: [
      {
        heading: "Señales claras de que llegó el momento",
        body:
          "Antes de que la suciedad sea evidente, el mueble da avisos que conviene aprender a leer.",
        bullets: [
          "El tejido se ve más oscuro o brillante en los asientos más usados",
          "Aparece olor al sentarse o al presionar los cojines",
          "La tela se siente rígida, áspera o pegajosa",
          "Hay manchas antiguas que ya no salen con limpieza puntual",
          "Alguien en casa estornuda o se congestiona al usar el sofá",
          "No recuerdas cuándo fue la última limpieza profunda",
        ],
      },
      {
        heading: "Frecuencia recomendada según el uso",
        body:
          "No todos los hogares necesitan la misma periodicidad. El uso real del mueble es el mejor criterio.",
        bullets: [
          "Uso ligero, sin niños ni mascotas: cada 12 meses",
          "Uso familiar habitual: cada 6 a 12 meses",
          "Hogares con mascotas o niños pequeños: cada 4 a 6 meses",
          "Alojamientos turísticos y espacios comerciales: según rotación, con revisiones frecuentes",
        ],
      },
      {
        heading: "Momentos que justifican adelantar la limpieza",
        body:
          "Además del calendario, hay situaciones puntuales en las que conviene programarla sin esperar.",
        bullets: [
          "Después de una mudanza o al recibir un mueble de segunda mano",
          "Tras una enfermedad respiratoria o gastrointestinal en casa",
          "Después de una reunión o evento con comida y bebida",
          "Cuando se incorpora una nueva mascota al hogar",
          "Antes de una visita prolongada o de una temporada de alquiler",
        ],
      },
      {
        heading: "Qué esperar del proceso",
        body:
          "Una limpieza profunda profesional comienza con la inspección del tipo de tejido y el estado de las manchas, sigue con un aspirado detallado, el tratamiento con vapor y la extracción de residuos, y termina con un secado controlado. El mueble queda utilizable en pocas horas, no en días.",
      },
    ],
    conclusion:
      "Programar la limpieza del sofá en lugar de reaccionar al deterioro alarga su vida útil y mantiene la sala más agradable durante todo el año. Si al leer las señales reconociste dos o más, probablemente ya es momento.",
    related: ["olores-sofas", "vapor-muebles", "limpieza-superficial-insuficiente"],
  },
  {
    slug: "higiene-dormitorio-10-lugares",
    title: "Higiene del dormitorio: 10 lugares que solemos olvidar al limpiar",
    excerpt:
      "Tender la cama y pasar el trapo no alcanza. Estos diez puntos acumulan polvo durante meses sin que nadie los revise.",
    category: "Hogar",
    tags: ["dormitorio", "hogar", "polvo", "rutina", "limpieza", "cortinas", "alfombras", "almohadas"],
    readTime: "7 min",
    icon: Home,
    image: dormitorioImg,
    date: "Septiembre 2026",
    intro:
      "El dormitorio es la habitación donde más horas seguidas pasamos y donde el aire que respiramos importa más. Aun así, la limpieza suele concentrarse en lo visible: la cama tendida, el piso barrido, las superficies despejadas. Hay una segunda capa de puntos que rara vez entra en la rutina y que concentra buena parte del polvo del cuarto.",
    sections: [
      {
        heading: "1. El colchón, por debajo de las sábanas",
        body:
          "Cambiar la ropa de cama no limpia el colchón. La superficie que está debajo acumula piel, sudor y polvo de forma continua y necesita aspirado periódico y una higienización profunda cada seis meses.",
      },
      {
        heading: "2. La base o el box de la cama",
        body:
          "La base tapizada recibe la misma carga de polvo que el colchón, pero casi nunca se limpia. En bases con cajones, además, el interior acumula pelusa y humedad.",
      },
      {
        heading: "3. Debajo de la cama",
        body:
          "Es la zona con menos circulación de aire del dormitorio. El polvo se deposita en capas y se levanta con cada movimiento. Debería aspirarse al menos una vez al mes.",
      },
      {
        heading: "4. El cabecero, sobre todo si es de tela",
        body:
          "Está en contacto directo con la cabeza y el cabello, lo que significa grasa capilar, productos de peinado y piel acumulados en un textil que rara vez se trata.",
      },
      {
        heading: "5. Las almohadas, no solo sus fundas",
        body:
          "La almohada absorbe sudor, saliva y grasa cada noche. Conviene lavarla según las indicaciones del fabricante y reemplazarla cuando pierde firmeza y ya no recupera su forma.",
      },
      {
        heading: "6. Las cortinas",
        body:
          "Funcionan como filtro entre el exterior y la habitación: retienen polvo, polen y humedad. Al abrirlas y cerrarlas, parte de esas partículas vuelve al aire del cuarto.",
      },
      {
        heading: "7. La alfombra o el tapete",
        body:
          "Aspirar por encima retira lo suelto, pero la base de la alfombra concentra partículas finas. Necesita limpieza profunda periódica, especialmente en dormitorios con mascotas.",
      },
      {
        heading: "8. Ventiladores de techo y rejillas de aire",
        body:
          "Acumulan polvo en las aspas y en las rejillas, y lo redistribuyen por toda la habitación cada vez que se encienden. Es uno de los puntos con mayor impacto sobre el aire interior.",
      },
      {
        heading: "9. El interior del clóset",
        body:
          "Un espacio cerrado, con poca ventilación y textiles guardados: la combinación habitual para el olor a encierro y para la humedad retenida en climas cálidos.",
      },
      {
        heading: "10. Cojines decorativos y sillones del cuarto",
        body:
          "Los textiles decorativos se lavan poco porque no se perciben como de uso. Sin embargo, acumulan polvo constantemente y forman parte del aire que se respira al dormir.",
      },
      {
        heading: "Una rutina que hace la diferencia",
        body:
          "No hace falta abordarlo todo el mismo día. Repartir estos puntos a lo largo del mes mantiene el dormitorio en buen estado sin convertirlo en una tarea agotadora.",
        bullets: [
          "Semanal: ropa de cama, aspirado de piso y ventilación diaria",
          "Mensual: debajo de la cama, cortinas, ventiladores y rejillas",
          "Trimestral: almohadas, cabecero, cojines y clóset",
          "Semestral: higienización profunda de colchón, base y alfombra",
        ],
      },
    ],
    conclusion:
      "La higiene del dormitorio se juega en los detalles que nadie mira. Incorporar estos diez puntos a la rutina mejora de forma notable la calidad del aire y la sensación de descanso, sin necesidad de dedicarle más tiempo del que ya inviertes.",
    related: ["acaros-colchon", "celulas-piel-cama", "limpiar-alfombras"],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(post: BlogPost) {
  const list = post.related
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
  if (list.length >= 3) return list.slice(0, 3);
  const fallback = posts.filter(
    (p) => p.slug !== post.slug && !list.includes(p) && p.category === post.category
  );
  return [...list, ...fallback].slice(0, 3);
}

export function searchPosts(query: string, category: string) {
  const q = query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return posts.filter((p) => {
    if (category !== "Todos" && p.category !== category) return false;
    if (!q) return true;
    const haystack = [
      p.title,
      p.excerpt,
      p.category,
      p.intro,
      p.conclusion,
      p.tags.join(" "),
      p.sections.map((s) => `${s.heading} ${s.body} ${(s.bullets ?? []).join(" ")}`).join(" "),
    ]
      .join(" ")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
}
