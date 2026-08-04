import type { ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "EQx",
    role: "Ingeniero de software freelance",
    context: "Universidad de St. Gallen, Suiza",
    headline: "Ingeniero de software - EQx (Suiza)",
    client: "Foundation for Value Creation",
    period: "Julio 2026 - Actualidad",
    summary:
      "Colaboro con la Foundation for Value Creation, la fundación suiza que publica el Elite Quality Index bajo dirección académica de tres institutos de la Universidad de St. Gallen. Es un índice de economía política, publicado desde 2020, que mide en 151 países hasta qué punto las élites de cada país crean valor para la sociedad o lo extraen de ella. Asumo el relevo técnico de sus productos digitales: la web pública del índice y la consola privada que lo acompaña.",
    highlights: [
      "Traspaso del desarrollador anterior y continuidad del producto sin parar la operativa.",
      "Responsabilidad de punta a punta sobre la experiencia de usuario de ambos productos.",
      "Interlocución directa con dirección del índice, diseño y responsables del modelo de valoración.",
      "Priorización con criterio de producto: qué entra en cada entrega según los hitos del cliente.",
      "Trabajo en remoto con un equipo internacional sobre un proyecto de investigación aplicada.",
    ],
    logo: {
      src: "/logos/eqx.svg",
      alt: "EQx - Elite Quality Index",
      fallback: "EQx",
    },
  },
  {
    company: "Capgemini",
    role: "Tech Lead",
    context: "Capgemini",
    headline: "Tech Lead - VidaCaixa",
    client: "VidaCaixa",
    period: "Octubre 2025 - Actualidad",
    summary:
      "Liderazgo técnico frontend en un proyecto estratégico del sector asegurador, definiendo arquitectura, estándares de desarrollo, buenas prácticas e integración de Inteligencia Artificial generativa en flujos enterprise.",
    highlights: [
      "Definición de arquitectura frontend y decisiones técnicas clave.",
      "Liderazgo de la integración de IA generativa en proyectos de Caixa.",
      "Orquestación de agentes, evaluación de casos de uso y aterrizaje técnico de flujos con IA.",
      "Code reviews, estándares de calidad y mentoring.",
      "Coordinación con backend, QA y negocio.",
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
      "Construcción de interfaces bancarias escalables.",
      "Mentorización de perfiles junior en React y arquitectura.",
      "Aplicación de buenas prácticas en un proyecto financiero de alto alcance.",
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
      "Desarrollo y mantenimiento del terminal de gestión de tiendas de Inditex, desplegado en miles de puntos de venta a nivel global.",
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
      "Desarrollo de aplicaciones web en producción, componentes reutilizables y proyectos como la web corporativa de Hiberus y SivasDescalzo.",
    highlights: [
      "React, Next.js, Node.js, Jest y React Testing Library.",
      "Componentes para libreria interna OnlyUI.",
      "Sistema de gestión de estaciones meteorológicas como TFG.",
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
      "Prácticas frontend con Vue, CSS, HTML, Docker y Git, desarrollando una web para usuarios de transporte y un panel de administración.",
    highlights: [
      "Interfaz para usuarios de líneas de autobús.",
      "Panel de control para monitorización de componentes de flota.",
      "Primer contacto profesional con producto web y operativa real.",
    ],
    logo: {
      src: "/logos/jig.png",
      alt: "JIG",
      fallback: "JIG",
    },
  },
];
