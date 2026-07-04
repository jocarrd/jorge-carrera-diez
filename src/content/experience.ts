import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Capgemini",
    role: "Tech Lead",
    context: "Capgemini",
    headline: "Tech Lead - VidaCaixa",
    client: "VidaCaixa",
    period: "Octubre 2025 - Actualidad",
    summary:
      "Liderazgo tecnico frontend en un proyecto estrategico del sector asegurador, definiendo arquitectura, estandares de desarrollo, buenas practicas e integracion de Inteligencia Artificial generativa en flujos enterprise.",
    highlights: [
      "Definicion de arquitectura frontend y decisiones tecnicas clave.",
      "Liderazgo de la integracion de IA generativa en proyectos de Caixa.",
      "Orquestacion de agentes, evaluacion de casos de uso y aterrizaje tecnico de flujos con IA.",
      "Code reviews, estandares de calidad y mentoring.",
      "Coordinacion con backend, QA y negocio.",
    ],
    logo: {
      src: "/logos/vidacaixa.png",
      alt: "VidaCaixa",
      fallback: "VidaCaixa",
      containerClassName: "p-2",
      className: "scale-[1.45]",
    },
  },
  {
    company: "Capgemini",
    role: "Lead Software Engineer",
    context: "Capgemini",
    headline: "Lead Software Engineer - Openbank",
    client: "Openbank, Grupo Santander",
    period: "Marzo 2025 - Octubre 2025",
    summary:
      "Desarrollo de la UI de un sistema de operativa bancaria para sucursales, con foco en React, escalabilidad, mantenibilidad y patrones de arquitectura hexagonal.",
    highlights: [
      "Construccion de interfaces bancarias escalables.",
      "Mentorizacion de perfiles junior en React y arquitectura.",
      "Aplicacion de buenas practicas en un proyecto financiero de alto alcance.",
    ],
    logo: {
      src: "/logos/openbank.jpg",
      alt: "Openbank Grupo Santander",
      fallback: "Openbank",
      containerClassName: "p-2",
      className: "scale-[2.7]",
    },
  },
  {
    company: "Minsait (Indra)",
    role: "Full Stack Developer y Front-end",
    context: "Inditex",
    period: "Junio 2023 - Marzo 2025",
    summary:
      "Desarrollo y mantenimiento del terminal de gestion de tiendas de Inditex, desplegado en miles de puntos de venta a nivel global.",
    highlights: [
      "Frontend con React y TypeScript; backend con Java y Spring Boot.",
      "CI/CD con GitHub Actions, testing y mejora de calidad.",
      "Trabajo en equipos Scrum y despliegues sobre entornos cloud.",
    ],
    logo: {
      src: "/logos/minsait.webp",
      alt: "Minsait",
      fallback: "Minsait",
    },
  },
  {
    company: "Hiberus Digital",
    role: "Full Stack Developer y Front-end Developer React",
    context: "React, Next.js, Node.js",
    period: "Febrero 2022 - Junio 2023",
    summary:
      "Desarrollo de aplicaciones web en produccion, componentes reutilizables y proyectos como la web corporativa de Hiberus y SivasDescalzo.",
    highlights: [
      "React, Next.js, Node.js, Jest y React Testing Library.",
      "Componentes para libreria interna OnlyUI.",
      "Sistema de gestion de estaciones meteorologicas como TFG.",
    ],
    logo: {
      src: "/logos/hiberus.png",
      alt: "Hiberus",
      fallback: "Hiberus",
    },
  },
  {
    company: "JIG",
    role: "Intern Front-end Developer Vue",
    context: "Wolfsburg mobility",
    period: "Septiembre 2021 - Diciembre 2021",
    summary:
      "Practicas frontend con Vue, CSS, HTML, Docker y Git, desarrollando una web para usuarios de transporte y un panel de administracion.",
    highlights: [
      "Interfaz para usuarios de lineas de autobus.",
      "Panel de control para monitorizacion de componentes de flota.",
      "Primer contacto profesional con producto web y operativa real.",
    ],
    logo: {
      src: "/logos/jig.png",
      alt: "JIG",
      fallback: "JIG",
    },
  },
];
