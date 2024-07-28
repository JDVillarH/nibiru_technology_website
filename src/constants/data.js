import ChartBar from "../icons/ChartBar.astro";
import EditIcon from "../icons/EditIcon.astro";
import FoldersIcon from "../icons/FoldersIcon.astro";
import ToolsIcon from "../icons/ToolsIcon.astro";
import UserQuestion from "../icons/UserQuestion.astro";
import WorldIcon from "../icons/WorldIcon.astro";

export const navbarList = [
  {
    label: "Inicio",
    link: "#hero",
  },
  {
    label: "Servicios",
    link: "#services",
  },
  {
    label: "Carácteristicas",
    link: "#features",
  },
  {
    label: "Blog",
    link: "#blog",
  },
  {
    label: "Contacto",
    link: "#contact",
  },
];

export const services = [
  {
    icon: EditIcon,
    title: "Gestor de contenidos (CMS)",
    description:
      "Actualización de contenidos de tu sitio web de forma sencilla y rápida para mantenerlo siempre al día.",
  },
  {
    icon: ChartBar,
    title: "Encuestas",
    description:
      "Recolección y almacenamiento de datos en tiempo real para conocer las opiniones y necesidades de tus usuarios.",
  },
  {
    icon: FoldersIcon,
    title: "Gestor de documentos",
    description:
      "Creación, clasificación, almacenamiento y eliminación de documentos y/o archivos multimedia en un solo lugar.",
  },
  {
    icon: WorldIcon,
    title: "Landing Pages",
    description:
      "Diseño y desarrollo de páginas de aterrizaje para destacar tus productos, eventos o servicios.",
  },
  {
    icon: UserQuestion,
    title: "PQRS y Turnos",
    description:
      "Sistematización del proceso de solicitudes, quejas, reclamos, sugerencias y gestión de turnos en línea."
  },
  {
    icon: ToolsIcon,
    title: "Plataforma personalizada",
    description:
      "Desarrollo de plataformas web a la medida de tus necesidades y objetivos. Establece tus propias reglas y funcionalidades.",
  },
];

export const advantages = [
  {
    image: "/images/highlights-1.png",
    tag: "Nibiru",
    title: "Responsive Template",
    description:
      "This creative and modern mobile responsive website template helps you create any kind of marketing websites or landing pages.",
  },
  {
    image: "/images/highlights-1.png",
    tag: "Creative",
    title: "Next Level Template",
    description:
      "This new kind of website template integrates your favorite tools and workflows.",
  },
  {
    image: "/images/highlights-2.png",
    tag: "Template",
    title: "Modern Design",
    description:
      "Feeling old? Try this template and be a part of the modern design.",
  },
  {
    image: "/images/highlights-1.png",
    tag: "Product",
    title: "Highlight Features",
    description:
      "You can highlight your services in a trendy grid like this one.",
  },
  {
    image: "/images/highlights-3.png",
    tag: "Webhooks",
    title: "100+ Integrations",
    description:
      "This template can be integrated with hundreds of tools using Zapier.",
  },
];

export const featuresData = [
  {
    image: "/images/development.svg",
    subtitle: "Planificamos y desarrollamos",
    title:
      "Aumenta tu alcance en línea y potencia la experiencia móvil",
    featuresList: [
      "Dominio y alojamiento",
      "Diseño adaptable y moderno",
      "Multi-idioma",
      "Formulario de contacto",
      "Google Maps y Recaptcha",
    ],
  },
  {
    image: "/images/seo.svg",
    subtitle: "Optimizamos",
    title: "Mejora el rendimiento de tu web y aumenta tu visibilidad",
    featuresList: [
      "Contenido autogestionable",
      "Rediseño de sitios web",
      "Imágenes y media",
      "SEO y metadatos",
      "Accesibilidad y velocidad",
    ],
  },
];

export const postsList = [
  {
    image: "/images/blog-1.jpg",
    title: "¿Por qué es importante tener un sitio web?",
    tags: {
      author: "Nibiru Technology",
      category: "Technology",
      date: "20 Feb, 2024",
    },
    link: "https://nibirutechnology.cl",
  },
  {
    image: "/images/blog-2.jpg",
    title: "Top 10 consejos importantes sobre servicios y diseño de IT",
    tags: {
      author: "Nibiru Technology",
      category: "Design",
      date: "23 Feb, 2024",
    },
    link: "https://nibirutechnology.cl",
  },
  {
    image: "/images/blog-3.jpg",
    title: "La IA vino para quedarse ¿Cómo usarla para tu día a día?",
    tags: {
      author: "Nibiru Technology",
      category: "Startup",
      date: "25 Feb, 2024",
    },
    link: "https://nibirutechnology.cl",
  },
];