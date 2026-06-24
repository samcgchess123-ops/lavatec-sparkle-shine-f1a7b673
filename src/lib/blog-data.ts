import { BedDouble, Sofa, Layers, PawPrint } from "lucide-react";
import mattressImg from "@/assets/blog-mattress-new.jpg.asset.json";
import sofaImg from "@/assets/blog-sofa-new.jpg.asset.json";
import chairsImg from "@/assets/blog-carpet-new.jpg.asset.json";
import benchImg from "@/assets/blog-pet-new.jpg.asset.json";

export type BlogPost = {
  slug: "limpiar-colchon" | "vapor-muebles" | "limpiar-alfombras" | "cama-mascotas";
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  icon: typeof BedDouble;
  image: string;
  date: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "limpiar-colchon",
    title: "¿Por qué es importante limpiar un colchón?",
    excerpt:
      "Con el tiempo el colchón acumula células muertas, ácaros y alérgenos que afectan tu descanso y salud.",
    category: "Colchones",
    readTime: "4 min",
    icon: BedDouble,
    image: mattressImg.url,
    date: "Junio 2026",
    sections: [
      {
        heading: "Qué se acumula realmente en tu colchón",
        body:
          "Pasamos cerca de un tercio de nuestra vida sobre el colchón. Esa convivencia diaria deja residuos invisibles que se acumulan capa tras capa en el textil.",
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
          "La limpieza con vapor utiliza calor y presión controlada para penetrar las fibras del colchón. Esto facilita la remoción de suciedad, ayuda a neutralizar olores y contribuye a reducir alérgenos acumulados, sin saturar el colchón con químicos.",
      },
      {
        heading: "Cada cuánto higienizarlo",
        body:
          "Recomendamos una higienización profunda cada 6 meses. Si en casa hay niños, mascotas o personas con alergias respiratorias, una frecuencia mayor mejora notablemente la calidad del sueño y del aire interior.",
      },
    ],
  },
  {
    slug: "vapor-muebles",
    title: "Beneficios de limpiar muebles con vapor",
    excerpt:
      "El vapor remueve manchas, olores y alérgenos mientras sanitiza las superficies textiles.",
    category: "Muebles",
    readTime: "5 min",
    icon: Sofa,
    image: sofaImg.url,
    date: "Junio 2026",
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
  },
  {
    slug: "limpiar-alfombras",
    title: "¿Cada cuánto limpiar alfombras y tapizados?",
    excerpt:
      "Una rutina de limpieza periódica mantiene tus alfombras y tapizados más higiénicos, frescos y duraderos.",
    category: "Tapizados",
    readTime: "4 min",
    icon: Layers,
    image: chairsImg.url,
    date: "Junio 2026",
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
  },
  {
    slug: "cama-mascotas",
    title: "¿Por qué limpiar las camas de las mascotas?",
    excerpt:
      "Las camas de las mascotas acumulan pelo, olores y bacterias que afectan a toda la familia.",
    category: "Mascotas",
    readTime: "4 min",
    icon: PawPrint,
    image: benchImg.url,
    date: "Junio 2026",
    sections: [
      {
        heading: "Lo que se acumula con el uso diario",
        body:
          "La cama de tu mascota es uno de los textiles más utilizados del hogar. Con el tiempo, concentra residuos que terminan afectando tanto a la mascota como al ambiente que comparten todos.",
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
  },
];
