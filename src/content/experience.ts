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
      "Colaboro con la Foundation for Value Creation, la fundacion suiza que publica el Elite Quality Index bajo direccion academica de tres institutos de la Universidad de St. Gallen. Es un indice de economia politica, publicado desde 2020, que mide en 151 paises hasta que punto las elites de cada pais crean valor para la sociedad o lo extraen de ella. Asumo el relevo tecnico de sus productos digitales: la web publica del indice y la consola privada que lo acompana.",
    highlights: [
      "Traspaso del desarrollador anterior y continuidad del producto sin parar la operativa.",
      "Responsabilidad de punta a punta sobre la experiencia de usuario de ambos productos.",
      "Interlocucion directa con direccion del indice, diseno y responsables del modelo de valoracion.",
      "Priorizacion con criterio de producto: que entra en cada entrega segun los hitos del cliente.",
      "Trabajo en remoto con un equipo internacional sobre un proyecto de investigacion aplicada.",
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
