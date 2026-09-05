import { site } from "@/content/site";
import type { Copy } from "@/types/content";

export const es: Copy = {
  meta: {
    siteTitle:
      "Ingeniero de software especializado en producto, arquitectura, SEO y diseño de sistemas",
    description:
      "Ingeniero Informático por la Universidad de La Rioja. Lidero arquitectura y nuevas capacidades en proyectos enterprise, colaboro con EQx (Elite Quality Index, Universidad de St. Gallen) y desarrollo Snowy, una plataforma meteorológica en producción con Next.js, NestJS, Redis, MySQL y Docker.",
    location: "Logroño, La Rioja, España",
    jobTitle: "Ingeniero de software",
    universityLabel: site.university,
    collegeLabel: site.college,
    ogAlt: `${site.name} - Ingeniero de software`,
    ogEyebrow: "Ingeniero de software",
    ogTagline: "Producto, arquitectura, datos e IA generativa. Del primer commit al despliegue.",
    ogStats: [
      ["ahora", "VidaCaixa · EQx"],
      ["en producción", "Snowy"],
      ["dónde", "Remoto · España"],
    ],
  },
  nav: {
    brandRole: "Ingeniero de software",
    contact: "Contacto",
    writeToMe: "Escríbeme",
    homeAriaLabel: "Inicio",
    mainNavLabel: "Navegación principal",
    mobileNavLabel: "Navegación móvil",
    openMenu: "Abrir navegación",
    closeMenu: "Cerrar navegación",
    sectionsLabel: "Secciones",
    pagesLabel: "Páginas",
    localeLabel: "Idioma",
    items: [
      { key: "home", label: "Inicio" },
      { key: "snowy", label: "Snowy" },
      { key: "projects", label: "Proyectos" },
      { key: "experience", label: "Experiencia" },
      { key: "cv", label: "CV" },
      { key: "contact", label: "Contacto" },
    ],
    sections: [
      { anchor: "rol-actual", label: "Rol actual" },
      { anchor: "snowy-showcase", label: "Snowy" },
      { anchor: "proyectos", label: "Proyectos" },
      { anchor: "experiencia", label: "Experiencia" },
    ],
  },
  profile: {
    headline:
      "Ingeniero de software. Soy Tech Lead en proyectos de VidaCaixa, llevo el relevo técnico de EQx en Suiza y desarrollo Snowy, que hoy recibe millones de impresiones al mes.",
    positioning: "Ingeniero de software · Producto · Arquitectura",
    positioningLong:
      "Ingeniero de software. Diseño sistemas y luego me quedo a mantenerlos.",
    // Tres verbos y punto. Lo que separa este perfil del de alguien que sólo
    // ejecuta tareas no es la lista de tecnologías: es quedarse con lo que
    // construye. En tres golpes se lee antes de que nadie decida irse.
    tagline: ["Lo diseño.", "Lo construyo.", "Lo mantengo."],
    taglineSub:
      "Ahora mismo: banca y seguros en España, un índice académico suizo y una plataforma meteorológica que usa gente cada día.",
    // Sin esto, quien entra no sabe si molesta escribiendo. Es la frase que
    // convierte una página de portfolio en una a la que se puede responder.
    availability: "Disponible para un proyecto más",
    availabilityNote:
      "En remoto y horario europeo, en español o en inglés. Por encargos acotados de pocas horas a la semana.",
    capabilities: [
      {
        title: "Arquitectura de producto",
        text: "Decido cómo se estructura, qué se descarta y por qué. Y lo defiendo en la revisión.",
      },
      {
        title: "IA generativa y agentes",
        text: "Agentes que hacen algo útil dentro del producto. La demo bonita la sabe hacer cualquiera.",
      },
      {
        title: "Datos e infraestructura",
        text: "Mi servidor, mis despliegues y una factura que reviso yo cada mes.",
      },
    ],
    focus: [
      "Producto web con React, Next.js, TypeScript y NestJS",
      "Orquestación de agentes e integración de IA generativa",
      "Productos SEO-first con SSR y contenido indexable",
      "Backend desacoplado, Redis, MySQL, Docker y VPS",
      "UX, rendimiento, datos meteorológicos e Inteligencia Artificial",
    ],
    summary: [
      { text: "Soy Ingeniero Informático por la " },
      { text: site.university, href: site.universityUrl, external: true },
      { text: " y colegiado en el " },
      { text: site.college, href: site.collegeUrl, external: true },
      {
        text: ". Trabajo en entornos enterprise liderando decisiones técnicas, colaboro como freelance con la fundación suiza que publica el ",
      },
      { text: "Elite Quality Index", href: site.eqxIndex, external: true },
      {
        text: " de la Universidad de St. Gallen, y desarrollo Snowy para trabajar producto, frontend, backend, datos, infraestructura, SEO y agentes sobre un sistema real.",
      },
    ],
    visualStats: [
      ["Actual", "Tech Lead"],
      ["Producto", "Snowy"],
      ["Base", "Logroño"],
      ["Stack", "Full stack"],
    ],
  },
  hero: {
    ctaPrimary: "Ver Snowy",
    ctaSecondary: "CV",
    ctaContact: "Hablemos",
  },
  currentRole: {
    homeTitle: "Ahora mismo, tres frentes.",
    homeText:
      "Criterio técnico y coordinación en un entorno enterprise, el relevo completo de un producto internacional, y uno propio en producción.",
    fronts: [
      {
        label: "Tech Lead · VidaCaixa",
        title: "Liderazgo técnico en un entorno crítico",
        text: "Arquitectura frontend, estándares, revisiones de código y alineamiento con backend, QA y negocio en el sector financiero y asegurador.",
      },
      {
        label: "Freelance · EQx, Suiza",
        title: "El relevo técnico de un índice global",
        text: "El Elite Quality Index mide en 151 países si las élites crean valor o lo extraen, con dirección académica de la Universidad de St. Gallen.",
      },
      {
        label: "En producción · Snowy",
        title: "Donde descubro si tenía razón",
        text: "Llevo el desarrollo de punta a punta, del render en servidor al radar y los despliegues. Está en producción y no para de crecer.",
      },
    ],
    eyebrow: "Rol actual",
    title: "Tech Lead en VidaCaixa y colaborador técnico de EQx en Suiza.",
    text: "Mi trabajo actual combina criterio técnico, coordinación con equipos y aterrizaje de nuevas capacidades, tanto en un entorno enterprise como en un producto internacional donde llevo el relevo técnico completo.",
    paragraphs: [
      [
        {
          text: "En VidaCaixa trabajo como Tech Lead en un entorno financiero/asegurador, participando en decisiones de arquitectura frontend, coordinación técnica, revisiones de código y alineamiento con backend, QA y negocio.",
        },
      ],
      [
        {
          text: "También estoy involucrado en la integración de capacidades de IA generativa, aterrizando casos de uso, agentes y herramientas dentro de flujos enterprise con requisitos de seguridad, trazabilidad y mantenimiento.",
        },
      ],
      [
        { text: "En paralelo colaboro como freelance con la fundación suiza que publica el " },
        { text: "Elite Quality Index", href: site.eqxIndex, external: true },
        {
          text: ", un índice de economía política dirigido académicamente por la Universidad de St. Gallen. He asumido el relevo técnico de sus productos digitales y trabajo directamente con dirección y diseño para decidir qué se entrega y cuándo.",
        },
      ],
    ],
    signals: [
      {
        title: "Liderazgo técnico",
        text: "Arquitectura, estándares, code reviews, coordinación técnica y acompañamiento del equipo.",
      },
      {
        title: "Integración de IA",
        text: "Definición e incorporación de capacidades de IA generativa y agentes en flujos enterprise de Caixa.",
      },
      {
        title: "Entorno crítico",
        text: "Trabajo sobre producto financiero/asegurador con dependencias de negocio, QA, backend y equipos transversales.",
      },
    ],
  },
  ai: {
    title: "IA que hace trabajo, no que lo aparenta.",
    lead: "Trabajo la parte de agentes, RAG, tools, MCP y LLMs desde una idea sencilla: que la IA resuelva tareas concretas dentro del producto y se pueda mantener como cualquier otra pieza del sistema.",
    detail:
      "Me interesa especialmente la parte de diseño del flujo: qué contexto necesita el modelo, qué herramientas puede usar, cómo se controlan las respuestas y qué experiencia recibe el usuario.",
    rows: [
      ["VidaCaixa", "integración de capacidades generativas en entorno enterprise"],
      ["Snowy", "asistente y herramientas sobre datos meteorológicos reales"],
      ["criterio", "contexto, límites, trazabilidad, coste y experiencia final"],
    ],
    flow: [
      { title: "Interfaz", caption: "UX, streaming y feedback", metric: "input" },
      { title: "Agente", caption: "plan, memoria corta y tool choice", metric: "reason" },
      { title: "Herramientas", caption: "MCP, APIs y contratos", metric: "tools" },
      { title: "Datos", caption: "RAG, fuentes y permisos", metric: "context" },
      { title: "Control", caption: "logs, límites y evaluación", metric: "guard" },
    ],
    consoleLines: [
      ["intent", "consulta meteorológica con contexto de usuario"],
      ["tool", "getForecast(), getAlerts(), searchDocs()"],
      ["context", "fuentes internas + datos en tiempo real"],
      ["policy", "límites, trazabilidad y respuesta verificable"],
    ],
    principlesTitle: "Cómo lo enfoco",
    principles: [
      {
        title: "Contexto antes que prompt",
        text: "El valor está en que el modelo reciba la información correcta: datos propios, permisos, recuperación, herramientas y límites del caso de uso.",
      },
      {
        title: "Agentes con responsabilidad clara",
        text: "Me interesa diseñar flujos donde el agente sabe qué puede hacer, qué herramienta usar y cómo dejar trazabilidad para depurar el sistema.",
      },
      {
        title: "Producto, coste y operación",
        text: "Una funcionalidad con IA también necesita latencia razonable, fallback, observabilidad, evaluaciones y una UX que no obligue al usuario a entender el sistema.",
      },
    ],
  },
  snowyShowcase: {
    title: "Snowy: lo llevé a producción y hoy lo usa gente todos los días.",
    lead: "El proyecto ya funciona como producto: en los últimos tres meses ha generado 14,7 millones de impresiones orgánicas y 242.000 clics, con más de 1.400 usuarios registrados sobre los que seguir construyendo.",
    detail:
      "Su desarrollo combina decisiones de frontend, backend, caché, datos, SEO, infraestructura e IA con restricciones reales de coste, rendimiento y mantenimiento.",
    ctaPrimary: "Ver caso técnico",
    ctaSecondary: "Abrir Snowy",
    imageAlt: "Home de Snowy con buscador meteorológico, asistente IA y planificador",
  },
  experiencePreview: {
    eyebrow: "Experiencia",
    title: "Liderazgo técnico en proyectos enterprise.",
    text: "Ocho años decidiendo cómo se construye, revisando lo que escriben otros y respondiendo cuando algo se rompe.",
    cta: "Ver trayectoria completa",
  },
  projectsPreview: {
    eyebrow: "Proyectos",
    title: "Tres proyectos que sí puedes abrir y mirar.",
    text: "Uno lo desarrollo yo de punta a punta. Otro es un cliente en Suiza. El tercero lleva doce años publicando. Los tres están en marcha ahora mismo.",
  },
  contactCta: {
    title: "Si mi perfil encaja, hablamos.",
    text: "Si tienes algo entre manos y no sabes si encaja, escríbeme y te lo digo sin rodeos. Si no soy la persona, también te lo diré.",
    cta: "Escribirme",
  },
  footer: {
    tagline: "Ingeniero de software e Ingeniero Informático.",
    contact: "Contacto",
  },
  cvTimeline: {
    label: "Trayectoria",
    note: "Consultoría enterprise y producto internacional a la vez: banca y seguros por un lado, una fundación suiza y una plataforma en producción por otro.",
  },
  experience: [
    {
      company: "EQx",
      role: "Ingeniero de software freelance",
      context: "Universidad de St. Gallen, Suiza",
      headline: "Ingeniero de software - EQx (Suiza)",
      client: "Foundation for Value Creation",
      image: "/images/eqx-home.webp",
      imageAlt: "Portada del Elite Quality Index, el índice que publica la fundación",
      period: "Julio 2026 - Actualidad",
      start: "2026-07",
      end: null,
      summary:
        "Relevo técnico de los productos digitales de la Foundation for Value Creation: la web pública del Elite Quality Index y la consola privada que lo acompaña. El índice mide en 151 países si las élites crean valor o lo extraen, con dirección académica de la Universidad de St. Gallen.",
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
      start: "2025-10",
      end: null,
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
      start: "2025-03",
      end: "2025-10",
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
      client: "Inditex",
      period: "Junio 2023 - Marzo 2025",
      start: "2023-06",
      end: "2025-03",
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
      start: "2022-02",
      end: "2023-06",
      summary:
        "Desarrollo de aplicaciones web en producción, componentes reutilizables y proyectos como la web corporativa de Hiberus y SivasDescalzo.",
      highlights: [
        "React, Next.js, Node.js, Jest y React Testing Library.",
        "Componentes para librería interna OnlyUI.",
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
      start: "2021-09",
      end: "2021-12",
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
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "SSR", "SEO", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["NestJS", "Node.js", "Java", "Spring Boot", "APIs", "Auth"],
    },
    {
      title: "Datos e infraestructura",
      items: ["MySQL", "Redis", "Prisma", "Docker", "Coolify", "AWS"],
    },
    {
      title: "IA y agentes",
      items: ["Vercel AI SDK", "RAG", "LLMs", "MCP", "Tools", "Evals"],
    },
    {
      title: "Producto",
      items: ["UX", "Roadmap", "Automatizaciones", "Analítica", "CI/CD"],
    },
  ],
  projects: [
    {
      slug: "snowy",
      name: "Snowy",
      url: site.snowy,
      label: "Caso de ingeniería",
      logo: "/images/snowy-logo.webp",
      image: "/images/snowy-home.webp",
      description:
        "Plataforma meteorológica con datos en tiempo real, mapas, radar, estaciones, SEO, backend propio, infraestructura e IA.",
      impact:
        "Llevo el desarrollo de punta a punta, del render en servidor al radar y los despliegues. Y cuando algo se cae de madrugada, lo arreglo yo.",
      metrics: [
        { value: "16", label: "modelos meteorológicos" },
        { value: "1.800+", label: "estaciones en vivo" },
        { value: "374", label: "embalses monitorizados" },
        { value: "1.400+", label: "usuarios registrados" },
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "MySQL",
        "Redis",
        "Docker",
        "Coolify",
        "AI SDK",
      ],
    },
    {
      slug: "eqx",
      name: "EQx",
      url: "https://elitequality.org/",
      label: "Cliente",
      image: "/images/eqx-home.webp",
      description:
        "Elite Quality Index: el índice de la Foundation for Value Creation que ordena 151 países por la calidad de sus élites, con web pública y plataforma privada de evaluación.",
      impact:
        "Recogí un proyecto ya en producción y hoy lo sostengo yo: la web del índice, la plataforma de rating y la documentación que antes no existía.",
      metrics: [
        { value: "151", label: "países en el ranking" },
        { value: "148", label: "indicadores" },
        { value: "12", label: "pilares en 4 áreas" },
        { value: "7ª", label: "edición anual" },
      ],
      stack: ["Astro", "React", "Next.js", "PostgreSQL", "D3", "GitHub Actions"],
    },
    {
      slug: "lariojameteo",
      name: "LaRiojaMeteo",
      url: site.lariojameteo,
      label: "Webmaster",
      logo: "/images/lariojameteo-logo-white.png",
      image: "/images/lariojameteo-home.webp",
      description:
        "Portal meteorológico regional que combina audiencia, contenido, SEO, comunidad y distribución editorial para La Rioja y Logroño.",
      impact:
        "Proyecto meteorológico regional con trayectoria desde 2012, foco editorial, SEO, comunidad y datos en directo.",
      metrics: [
        { value: "2012", label: "origen del proyecto" },
        { value: "2024", label: "incorporación de Jorge" },
        { value: "130+", label: "páginas de archivo" },
        { value: "500k", label: "visitas históricas iniciales" },
      ],
      stack: ["SEO", "WordPress", "Rendimiento", "UX", "Analítica"],
    },
  ],
  featuredProjects: {
    leadCta: "Ver el caso",
    secondaryCta: "Ver el caso",
    leadImageAlt: "Interfaz del proyecto principal",
    secondaryImageAlt: "Portada del proyecto",
  },
  pages: {
    projects: {
      title: "Proyectos",
      description:
        "Proyectos de Jorge Carrera Diez: Snowy, el Elite Quality Index de EQx y LaRiojaMeteo. Producto, arquitectura, datos, SEO e infraestructura.",
      eyebrow: "Proyectos",
      heading: "Una plataforma en producción, un cliente internacional y un portal con audiencia.",
      text: "Snowy es donde pruebo las decisiones de arquitectura en real. EQx es cómo trabajo con un cliente. LaRiojaMeteo es audiencia, contenido y SEO sostenido en el tiempo.",
    },
    experience: {
      title: "Experiencia",
      description:
        "Experiencia profesional de Jorge Carrera Diez como ingeniero de software, Tech Lead, Lead Software Engineer y Full Stack Developer, y cómo aplica IA generativa y agentes dentro de flujos enterprise.",
      eyebrow: "Experiencia",
      heading:
        "Ingeniero de software con trayectoria en banca, seguros, retail y producto web.",
      text: "El recorrido completo, por orden. Dónde he liderado las decisiones técnicas, qué he construido en cada sitio y cómo he ido metiendo agentes de IA en flujos que ya estaban en producción.",
    },
    cv: {
      title: "CV",
      description:
        "CV de Jorge Carrera Diez, ingeniero de software e Ingeniero Informático especializado en producto digital, arquitectura, frontend, backend y SEO.",
      eyebrow: "CV",
      experienceEyebrow: "Experiencia",
      experienceTitle: "Trayectoria profesional",
      stackEyebrow: "Stack",
      stackTitle: "Competencias técnicas",
      stackText:
        "Elijo herramientas por rendimiento, mantenibilidad, SEO, costes y experiencia de usuario.",
      downloadCta: "Descargar en PDF",
      printHint: "Se abre el diálogo de impresión: elige «Guardar como PDF».",
    },
    contact: {
      title: "Trabajemos juntos",
      description:
        "Jorge Carrera Diez, ingeniero de software freelance. Relevo técnico de productos en producción, desarrollo con React y Next.js y acompañamiento de arquitectura frontend.",
      lead: "Entro en productos que ya existen, los entiendo y sigo construyéndolos sin que se pare nada.",
      detail:
        "Es lo que hago ahora mismo para una fundación suiza: asumí el relevo de su desarrollador anterior y me hice cargo de sus dos productos digitales sin interrumpir la operativa.",
      availabilityLabel: "disponibilidad",
      availabilityText:
        "En remoto y horario europeo, en español o en inglés. Trabajo por encargos acotados de pocas horas a la semana: es el formato que me permite comprometerme de verdad con lo que acepto.",
      servicesTitle: "En qué puedo ayudarte",
      servicesText:
        "Tres formas de trabajo que ya están funcionando con clientes reales, no una lista de tecnologías.",
      services: [
        {
          title: "Relevo técnico de un producto en marcha",
          text: "Se va quien lo construyó y hay que seguir. Cojo el código, la infraestructura y el criterio de producto, y mantengo la operativa mientras tanto.",
        },
        {
          title: "Desarrollo de producto web",
          text: "React, Next.js, TypeScript y NestJS, del frontend al backend y la infraestructura. Con la parte aburrida incluida: despliegue, rendimiento y posicionamiento.",
        },
        {
          title: "Arquitectura y acompañamiento del equipo",
          text: "Decisiones de arquitectura, estándares y revisión de código para equipos que ya están construyendo y quieren no arrepentirse dentro de un año.",
        },
      ],
      clientsTitle: "Dónde he trabajado",
      clientsText:
        "Producto en producción, con usuarios reales y consecuencias si algo se rompe.",
      clients: [
        {
          title: "Universidad de St. Gallen",
          text: "Productos digitales del Elite Quality Index, para la fundación suiza que lo publica.",
        },
        {
          title: "Inditex",
          text: "Terminal de gestión de tiendas, desplegado en miles de puntos de venta.",
        },
        {
          title: "Openbank · Grupo Santander",
          text: "Interfaz de un sistema de operativa bancaria para sucursales.",
        },
        {
          title: "VidaCaixa",
          text: "Liderazgo técnico frontend: arquitectura, estándares y revisión de código.",
        },
      ],
      emailLabel: "escríbeme",
      emailHint:
        "Cuéntame el contexto en cuatro líneas: qué producto es, en qué estado está y qué necesitas. Te respondo si encaja, y también si no.",
      ctaPrimary: "Enviar correo",
      ctaSecondary: "Ver CV",
      linksTitle: "Antes de escribir",
      linksText:
        "Si prefieres tener más contexto, aquí está lo relevante de mi perfil y el sitio donde se puede contratar mi trabajo.",
      links: [
        { key: "malt", label: "Malt" },
        { key: "linkedin", label: "LinkedIn" },
        { key: "github", label: "GitHub" },
        { key: "cv", label: "CV web" },
        { key: "snowy", label: "Snowy" },
      ],
    },
    snowy: {
      title: "Snowy",
      description:
        "Snowy, plataforma meteorológica creada por Jorge Carrera Diez con Next.js, NestJS, Redis, MySQL, Docker, SEO, radar, datos meteorológicos e IA.",
      eyebrow: "En producción",
      heading: "Snowy: plataforma meteorológica con mapas, datos en tiempo real e IA.",
      facts: [
        { label: "Rol", value: "Diseño, desarrollo e infraestructura" },
        { label: "Periodo", value: "Desde 2025, en activo" },
        { label: "Ámbito", value: "Producto completo, de la base de datos al SEO" },
        { label: "Alcance", value: "14,7 M de impresiones en 90 días" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "Qué hay debajo.",
        text: "Mantengo todo lo que se ve en Snowy: el render, el backend, los datos, el radar y los despliegues.",
        groups: [
          { label: "Front", items: ["Next.js", "React", "TypeScript", "Tailwind", "MapLibre"] },
          { label: "Backend", items: ["NestJS", "Prisma", "MySQL", "Redis"] },
          { label: "Infraestructura", items: ["Docker", "Coolify", "Cloudflare", "VPS propio"] },
          { label: "IA y datos", items: ["AI SDK", "RAG", "Procesos batch", "GRIB2"] },
        ],
      },
      lead: "Snowy es una plataforma meteorológica para consultar predicciones, mapas, estaciones, avisos, embalses, calidad del aire, terremotos y herramientas inteligentes desde una experiencia rápida y orientada a decisiones reales.",
      detail:
        "La diferencia está en unir producto, datos, SEO, mapas interactivos y agentes sobre una arquitectura propia: frontend SSR, backend como autoridad, caché por dominio y servicios especializados para radar, CMS y procesos batch. En los últimos 3 meses, Snowy ha superado los 14,7 millones de impresiones, 242.000 clics orgánicos y 1.400 usuarios registrados.",
      ctaPrimary: "Abrir Snowy",
      ctaSecondary: "Ver CV",
      imageAlts: {
        home: "Interfaz principal de Snowy con asistente IA, buscador y planificador meteorológico",
        stations: "Mapa de estaciones meteorológicas en Snowy",
        radar: "Mapa meteorológico de Snowy con radar, avisos y estaciones",
      },
      details: {
        eyebrow: "Detalles",
        title: "Tres sitios donde se nota el trabajo.",
        text: "Un pantallazo entero demuestra que la web existe. Estos recortes enseñan cómo está resuelta por dentro.",
        items: [
          {
            title: "Cada dato dice de qué se fía",
            text: "La ficha no solo da la temperatura: dice cuánta confianza merece esa previsión. Cuando dieciséis modelos no se ponen de acuerdo, ocultarlo es mentir por omisión.",
            image: "/images/detalle/ficha.webp",
            alt: "Ficha de estación con temperatura, humedad, viento, índice UV y fiabilidad",
          },
          {
            title: "Series de setenta años, en una frase",
            text: "«Madrid es hoy 1,4 °C más cálido que en 1950-1979». Detrás hay un procesamiento propio de las series históricas; delante, una frase que se entiende sin ser meteorólogo.",
            image: "/images/detalle/clima.webp",
            alt: "Tendencia de temperatura por décadas con el mapa de calentamiento de España",
          },
          {
            title: "Datos oficiales, actualizados solos",
            text: "374 embalses del MITECO, con su volumen, su variación semanal y la comparación con el año pasado. Se refresca sin que nadie toque nada.",
            image: "/images/detalle/embalses.webp",
            alt: "Reserva hídrica nacional al 64 % con volumen, variación y comparación anual",
          },
        ],
      },
      product: {
        eyebrow: "Producto",
        title: "Qué es Snowy",
        text: "Una plataforma meteorológica para España: predicción multi-modelo sobre datos en vivo, con mapas interactivos y un asistente que responde en lenguaje normal.",
      },
      features: [
        {
          title: "Predicción multi-modelo",
          text: "Comparación de modelos meteorológicos, predicción por localidades y herramientas para entender incertidumbre.",
        },
        {
          title: "Mapa meteorológico",
          text: "Radar, estaciones, avisos, terremotos, calidad del aire y capas ambientales en una interfaz interactiva.",
        },
        {
          title: "Estaciones en vivo",
          text: "Red de estaciones con datos actuales, históricos y flujo de integración para usuarios.",
        },
        {
          title: "Contenido SEO",
          text: "Páginas indexables para localidades, fenómenos, polen, calidad del aire, embalses y WikiMeteo.",
        },
        {
          title: "Asistente IA",
          text: "Conversación, voz, herramientas especializadas y respuestas apoyadas en datos meteorológicos.",
        },
        {
          title: "Productos derivados",
          text: "Energy, widgets embebibles, eclipse 2026 y nuevas verticales sobre la misma base técnica.",
        },
      ],
      modules: {
        eyebrow: "Módulos",
        title: "Distintas superficies, una misma arquitectura.",
        text: "Cada módulo tiene requisitos distintos: datos externos, caché, visualización, SEO, estado en tiempo real y modelos internos comunes.",
        items: [
          {
            title: "Asistente IA",
            text: "Consultas conversacionales con herramientas meteorológicas: ropa, avisos, predicción, ubicación y respuestas accionables.",
            image: "/images/snowy-ai-assistant.webp",
            alt: "Asistente de IA de Snowy con recomendación meteorológica de ropa",
          },
          {
            title: "Embalses",
            text: "Datos oficiales, evolución semanal, mapas y comparativas por comunidades, provincias y cuencas.",
            image: "/images/snowy-reservoirs.webp",
            alt: "Módulo de embalses de Snowy con reserva hídrica y mapa por comunidades",
          },
          {
            title: "Clima histórico",
            text: "Procesamiento de series históricas para analizar tendencias, anomalías y cambios de temperatura por zona.",
            image: "/images/snowy-climate.webp",
            alt: "Módulo de clima histórico de Snowy con mapa de calentamiento en España",
          },
          {
            title: "Terremotos",
            text: "Monitor en tiempo real con fuentes oficiales, magnitud, ubicación, detalle del evento y reporte comunitario.",
            image: "/images/snowy-earthquakes.webp",
            alt: "Monitor de terremotos de Snowy con evento sísmico reciente",
          },
          {
            title: "Estaciones",
            text: "Detalle de estación con métricas actuales, históricos, favoritos, propietario y datos meteorológicos en vivo.",
            image: "/images/snowy-station-detail.webp",
            alt: "Detalle de estación meteorológica en Snowy con métricas en vivo",
          },
        ],
      },
      traction: {
        title: "Tracción real, no solo arquitectura.",
        text: "En los últimos tres meses: 14,7 millones de impresiones en búsqueda orgánica, 242.000 clics y una posición media de 8. Sin equipo de marketing detrás.",
      },
      build: {
        eyebrow: "Construcción",
        title: "Cómo está hecho.",
        text: "Snowy se apoya en una arquitectura desacoplada: Next.js para SSR, SEO y UI; NestJS para negocio y datos; Redis para caché; MySQL para persistencia; y servicios separados cuando radar, CMS o jobs tienen cargas distintas.",
      },
      capabilities: [
        {
          title: "Arquitectura",
          text: "Ecosistema multi-repo con front Next.js, engine NestJS, CMS Vite, radar Node.js, batch jobs y documentación transversal.",
        },
        {
          title: "SEO técnico",
          text: "Páginas indexables para ciudades, modelos, herramientas, estaciones, embalses, terremotos, calidad del aire, polen, avisos, WikiMeteo y contenidos especiales.",
        },
        {
          title: "Datos",
          text: "Unificación de modelos profesionales, estaciones, embalses, terremotos, calidad del aire, polen y fuentes oficiales bajo un modelo interno consistente.",
        },
        {
          title: "Infraestructura",
          text: "Producción sobre VPS, Docker, Caddy, Cloudflare, GHCR, GitHub Actions, healthchecks, rollback y runbooks operativos.",
        },
        {
          title: "Radar",
          text: "Mapa interactivo con radar, estaciones, terremotos, calidad del aire, zonas de riesgo y capas ambientales en tiempo real.",
        },
        {
          title: "IA",
          text: "MeteoAsistente con lenguaje natural, modo voz y herramientas especializadas para convertir datos meteorológicos en decisiones prácticas.",
        },
        {
          title: "B2B",
          text: "Snowy Energy, widgets embebibles y verticales sectoriales como extensión natural del producto meteorológico principal.",
        },
      ],
      seo: {
        eyebrow: "SEO y datos",
        title: "SEO, datos y rendimiento como decisiones de arquitectura.",
        text: "El usuario y Google necesitan respuestas rápidas. Por eso el proyecto trabaja con SSR, caché por dominio, modelo interno de datos, IndexNow, revalidación y abstracción de proveedores.",
        sourcesTitle: "Fuentes integradas",
        sourcesText:
          "El objetivo es unificar proveedores heterogéneos en un modelo consistente, precalcular lo costoso y responder muy rápido al usuario final.",
      },
      b2b: {
        eyebrow: "B2B dentro de Snowy",
        title: "Energy, widgets y verticales sectoriales.",
        text: "La misma base de datos, mapas, predicciones e IA permite construir productos derivados: forecasting energético, widgets embebibles y herramientas para casos concretos.",
        lines: [
          {
            title: "Snowy Energy",
            text: "Forecasting renovable, simulador y dashboard para energía solar como vertical B2B dentro del ecosistema Snowy.",
          },
          {
            title: "Widgets B2B",
            text: "SDK embebible para integrar datos meteorológicos, mapas, herramientas o asistente IA en webs de terceros.",
          },
          {
            title: "Eclipse 2026",
            text: "Producto de contenido y planificación alrededor del eclipse solar total del 12 de agosto de 2026.",
          },
        ],
      },
      press: {
        eyebrow: "Prensa",
        title: "Snowy también ha tenido recorrido público.",
        text: "El proyecto nació desde LaRiojaMeteo y ha tenido presencia en prensa, radio y portales públicos. Es una señal de producto real, comunidad y continuidad.",
        openDataLabel: "datos.gob.es",
        openDataTag: "Ficha pública",
        openDataTitle: "Snowy aparece recogido en el portal nacional de datos abiertos.",
        proof: [
          {
            title: "Entrevista en RNE",
            text: "Participación en radio para explicar Snowy y la evolución del proyecto meteorológico.",
            image: "/images/snowy-rne.png",
            alt: "Jorge Carrera y Daniel Benito en una entrevista de RNE sobre Snowy",
          },
          {
            title: "Artículo en larioja.com",
            text: "Cobertura en prensa regional sobre el lanzamiento de Snowy desde LaRiojaMeteo.",
            image: "/images/snowy-larioja-article.jpeg",
            alt: "Artículo de larioja.com sobre el lanzamiento de Snowy",
            url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
          },
        ],
      },
      metrics: [
        { value: "16", label: "modelos", detail: "ECMWF, GFS, ICON, ARPEGE, GEM y más" },
        { value: "1.000+", label: "estaciones", detail: "red oficial y comunidad Snowy" },
        { value: "370+", label: "embalses", detail: "estado y evolución en España" },
        { value: "1.000+", label: "términos", detail: "WikiMeteo en español" },
        { value: "20+", label: "herramientas IA", detail: "asistente, voz y decisiones diarias" },
        { value: "10+", label: "capas de mapa", detail: "radar, estaciones, riesgos y aire" },
      ],
      tractionMetrics: [
        {
          value: "14,7M",
          label: "impresiones",
          detail: "últimos 3 meses en búsqueda orgánica",
        },
        { value: "242k", label: "clics", detail: "tráfico captado desde Google en 3 meses" },
        {
          value: "1.400+",
          label: "usuarios registrados",
          detail: "base propia para comunidad y nuevas funcionalidades",
        },
      ],
      mediaMentions: [
        {
          outlet: "El Confidencial",
          date: "18 enero 2026",
          title:
            "La Rioja Meteo lanza Snowy como web con IA para decisiones cotidianas sobre el tiempo.",
          url: "https://www.elconfidencial.com/tecnologia/2026-01-18/web-ia-la-rioja-prevision-tiempo-1tna-1qrt_4282037/",
        },
        {
          outlet: "larioja.com",
          date: "22 enero 2026",
          title:
            "Nace Snowy, asistente riojano para paraguas, lavadora y recomendaciones diarias.",
          url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
        },
        {
          outlet: "eldiario.es",
          date: "12 enero 2026",
          title:
            "La Rioja Meteo crea Snowy, una plataforma meteorológica con recomendaciones prácticas.",
          url: "https://www.eldiario.es/la-rioja/rioja-meteo-crea-snowy-nueva-plataforma-meteorologia-dice-poner-lavadora-ropa-ponerte_1_12898410.html",
        },
        {
          outlet: "nuevecuatrouno",
          date: "12 enero 2026",
          title: "Snowy se presenta como nueva plataforma meteorológica de La Rioja Meteo.",
          url: "https://nuevecuatrouno.com/2026/01/12/nace-snowy-la-plataforma-meteorologica-de-la-rioja-meteo/",
        },
        {
          outlet: "Diario de León",
          date: "14 abril 2026",
          title: "Snowy como apoyo para planificar la observación del eclipse en León.",
          url: "https://www.diariodeleon.es/sociedad/260414/2081770/mejor-alia-leon-eclipse.html",
        },
        {
          outlet: "Actualidad Rioja Baja",
          date: "12 enero 2026",
          title:
            "La Rioja Meteo lanza Snowy como plataforma meteorológica avanzada y accesible.",
          url: "https://actualidadriojabaja.com/la-rioja-meteo-lanza-snowy-una-nueva-plataforma-meteorologica-avanzada-y-accesible/",
        },
        {
          outlet: "nuevecuatrouno",
          date: "11 abril 2026",
          title: "Snowy y La Rioja Meteo en la planificación del eclipse de agosto.",
          url: "https://nuevecuatrouno.com/2026/04/11/cielo-rioja-apunta-despejado-gran-eclipse-de-agosto/",
        },
      ],
    },
    lariojameteo: {
      title: "LaRiojaMeteo",
      description:
        "Caso de proyecto LaRiojaMeteo, blog meteorológico con más de 500.000 visitas mensuales donde Jorge Carrera Diez colabora como webmaster.",
      eyebrow: "Colaboración",
      heading:
        "LaRiojaMeteo: meteorología regional, comunidad, SEO y base editorial para Snowy.",
      facts: [
        { label: "Rol", value: "Socio y responsable técnico" },
        { label: "Periodo", value: "Desde 2024" },
        { label: "Ámbito", value: "Web, SEO, rendimiento y datos en directo" },
        { label: "Origen", value: "Proyecto en marcha desde 2012" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "Un portal de contenido que tiene que ir rápido.",
        text: "La mayor parte del trabajo no es funcionalidad nueva, sino que lo que ya hay cargue rápido, se vea bien en móvil y lo encuentre Google.",
        groups: [
          { label: "Plataforma", items: ["WordPress", "PHP", "MySQL"] },
          { label: "Visibilidad", items: ["SEO técnico", "Datos estructurados", "Core Web Vitals"] },
          { label: "Datos", items: ["Estaciones Snowy", "Webcams", "Embalses"] },
          { label: "Medición", items: ["Search Console", "Analítica"] },
        ],
      },
      lead: "Colaboro activamente como socio y perfil técnico en LaRiojaMeteo, portal de referencia meteorológico para La Rioja y Logroño con predicciones, análisis, datos en directo, noticias, guías y comunidad.",
      cta: "Visitar LaRiojaMeteo",
      imageAlt: "Home de LaRiojaMeteo con portada, categorías y último artículo",
      timeline: {
        eyebrow: "Trayectoria",
        title: "De blog meteorológico regional a ecosistema con Snowy.",
        text: "LaRiojaMeteo aporta historia, comunidad, conocimiento local y distribución editorial. Snowy aporta producto, datos, IA e infraestructura.",
      },
      metrics: [
        {
          value: "2012",
          label: "origen",
          detail: "inicio del proyecto meteorológico original",
        },
        { value: "2020", label: "La Rioja Meteo", detail: "evolución hacia la marca actual" },
        {
          value: "2024",
          label: "Jorge se une",
          detail: "aportación técnica y visión de producto",
        },
        {
          value: "2025",
          label: "Snowy",
          detail: "lanzamiento del producto meteorológico avanzado",
        },
      ],
      responsibility: {
        eyebrow: "Responsabilidad",
        title: "Un proyecto donde el SEO y la experiencia móvil tienen impacto directo.",
        text: "LaRiojaMeteo combina tráfico, contenido, visibilidad orgánica y mantenimiento continuo.",
        items: [
          "Arquitectura y mantenimiento técnico del sitio web.",
          "Optimización SEO para mejorar posicionamiento y tráfico orgánico.",
          "Gestión de contenido multimedia, rendimiento y adaptación móvil.",
          "Análisis de tráfico y mejora continua de experiencia de usuario.",
        ],
      },
      content: {
        eyebrow: "Contenido",
        title: "Un portal con profundidad editorial y datos en tiempo real.",
        text: "El portal funciona como archivo meteorológico local: análisis, episodios, fenómenos, guías, webcams, estaciones y comunidad.",
        items: [
          "Predicciones para La Rioja y Logroño",
          "Meteoanálisis, nevadas, pluviometría y embalses",
          "Tiempo real, estaciones Snowy y webcams",
          "Noticias, astronomía, guías y comunidad meteoaficionada",
        ],
      },
    },
    eqx: {
      title: "EQx",
      description:
        "Caso de proyecto EQx: Jorge Carrera Diez lleva el relevo técnico del Elite Quality Index de la Foundation for Value Creation, en St. Gallen (Suiza).",
      eyebrow: "Cliente · Suiza",
      heading: "EQx: el índice que mide la calidad de las élites de 151 países.",
      lead: "Llevo el relevo técnico del Elite Quality Index, el proyecto de la Foundation for Value Creation con dirección académica de tres institutos de la Universidad de St. Gallen. Entré para recoger un proyecto ya en producción y sostenerlo yo solo.",
      detail:
        "Es el encargo que mejor explica cómo trabajo con un cliente: nadie me pasó el contexto, había que reconstruirlo leyendo el código y midiendo lo que había levantado. Hoy mantengo tanto la web pública del índice como la plataforma privada de evaluación, y el cliente tiene por escrito lo que antes solo estaba en la cabeza de una persona.",
      ctaPrimary: "Ver elitequality.org",
      ctaSecondary: "Hablemos",
      facts: [
        { label: "Cliente", value: "Foundation for Value Creation" },
        { label: "Rol", value: "Relevo técnico y desarrollo" },
        { label: "Periodo", value: "Desde julio de 2026" },
        { label: "Ámbito", value: "Web pública y plataforma de evaluación" },
      ],
      imageAlts: {
        home: "Portada de elitequality.org con el mapa mundial del Elite Quality Index",
        rankings: "Tabla y mapa interactivo del ranking de países del EQx",
      },
      client: {
        eyebrow: "El cliente",
        title: "Una fundación suiza que publica un índice académico anual.",
        text: "La Foundation for Value Creation es una fundación sin ánimo de lucro con sede en St. Gallen, supervisada por la autoridad federal suiza de fundaciones. Publica el Elite Quality Index, que mide en qué medida las élites de un país crean valor en vez de extraerlo.",
        items: [
          {
            title: "Dirección académica",
            text: "Tres institutos de la Universidad de St. Gallen —IIDM, ERP y SBF— más una red internacional de socios académicos.",
          },
          {
            title: "Dos productos",
            text: "El índice de países, público en elitequality.org, y las Value Creation Ratings de empresas, que se calculan en una plataforma privada.",
          },
          {
            title: "Trabajo en inglés",
            text: "Toda la coordinación es en inglés y en remoto, con horario europeo. La plataforma de evaluación está en inglés, español y chino.",
          },
        ],
      },
      metrics: [
        { value: "151", label: "países en el ranking" },
        { value: "148", label: "indicadores" },
        { value: "12", label: "pilares en 4 áreas" },
        { value: "7ª", label: "edición anual" },
      ],
      index: {
        eyebrow: "El índice",
        title: "Cuatro niveles, de un número a 148 indicadores.",
        text: "La estructura del EQx es lo que condiciona toda la interfaz: cualquier vista de la web —el mapa, la tabla, el comparador— es una forma de entrar y salir de esta jerarquía.",
        levels: [
          {
            level: "Nivel 1",
            title: "El índice",
            text: "Una puntuación y un puesto global por país, más los subíndices de Poder y Valor.",
          },
          {
            level: "Nivel 2",
            title: "Cuatro áreas",
            text: "El primer desglose, el que se usa para comparar países entre sí sin bajar al detalle.",
          },
          {
            level: "Nivel 3",
            title: "Doce pilares",
            text: "El nivel donde se ve de qué le viene a un país su puntuación.",
          },
          {
            level: "Nivel 4",
            title: "148 indicadores",
            text: "El dato de origen. Es lo que hay que poder auditar cuando alguien discute un resultado.",
          },
        ],
      },
      work: {
        eyebrow: "Qué hago",
        title: "Recoger un proyecto en marcha y dejarlo sostenible.",
        text: "El encargo no era construir de cero, sino hacerse cargo: entender lo que había, ponerlo por escrito y seguir sacando versiones sin romper lo que ya estaba publicado.",
        items: [
          {
            title: "Levantar el mapa del terreno",
            text: "Medir lo que hay levantado en vez de creerme la documentación heredada. Buena parte de lo que describía el repo ya no era lo que estaba en producción.",
          },
          {
            title: "Web pública del índice",
            text: "Sitio estático con islas interactivas: mapa mundial, tabla de rankings, comparador de países y visualización de la evolución de puestos.",
          },
          {
            title: "Plataforma de evaluación",
            text: "Aplicación privada donde una empresa responde la encuesta, se calcula su rating y se genera el informe oficial de cuatro páginas.",
          },
          {
            title: "Datos que tienen que cuadrar",
            text: "Los rankings salen de los libros oficiales de la fundación. La importación se valida contra el origen: si no cuadra, se arregla el importador, no el resultado.",
          },
          {
            title: "Despliegue continuo",
            text: "Cada cambio se publica solo al integrarse, y el proyecto pasó a vivir en la organización del cliente, no en la mía.",
          },
          {
            title: "Documentación de traspaso",
            text: "Lo que aprendí queda escrito. Si mañana entra otra persona, no repite la arqueología que tuve que hacer yo.",
          },
        ],
      },
      vcr: {
        eyebrow: "self-VCr",
        title: "La otra mitad: el rating de empresas.",
        text: "Junto al índice de países, la fundación calcula el Value Creation Rating de empresas. La herramienta es privada y solo se entra por invitación, así que aquí no hay capturas: lo que sí puedo contar es de qué se compone.",
        items: [
          "Encuesta multilingüe con el progreso guardado, para poder responder en varias sesiones.",
          "Motor de cálculo que convierte las respuestas en la puntuación de creación de valor.",
          "Informe oficial de cuatro páginas, generado en servidor y siempre idéntico a su diseño.",
          "Consola de administración para gestionar clientes, equipos y enlaces de acceso.",
        ],
        note: "Es trabajo bajo acuerdo con el cliente. Los detalles concretos los cuento en una conversación, no en una página web.",
      },
      stack: {
        eyebrow: "Stack",
        title: "Dos aplicaciones distintas, un mismo responsable.",
        text: "La web del índice y la plataforma de evaluación no comparten código ni tecnología. Comparten que las mantengo yo.",
        groups: [
          { label: "Web del índice", items: ["Astro", "React", "Tailwind", "TypeScript"] },
          { label: "Visualización", items: ["D3", "TopoJSON", "TanStack Table"] },
          { label: "Plataforma", items: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"] },
          { label: "Entrega", items: ["GitHub Actions", "Despliegue continuo", "Vitest", "Playwright"] },
        ],
      },
    },
  },
  radarScrub: {
    eyebrow: "Datos en vivo",
    title: "Baja y verás llover.",
    caption:
      "Radar de precipitación de Snowy, media hora por paso, sobre las 1.862 estaciones que reportan en directo.",
    imageAlt:
      "Secuencia del radar de lluvia de Snowy sobre la península, con las estaciones meteorológicas en vivo",
  },
  stickyShowcase: {
    eyebrow: "Cómo trabajo",
    title: "Lo que hay detrás de una pantalla que carga rápido.",
    imageAlt: "Portada de Snowy con buscador, asistente y datos en vivo",
    steps: [
      {
        title: "Decido qué no se hace",
        text: "La mitad del trabajo es descartar. Cada función que entra hay que mantenerla los próximos cinco años, y eso se paga en velocidad y en madrugadas.",
      },
      {
        title: "Los datos mandan sobre la opinión",
        text: "Dieciséis modelos meteorológicos que no coinciden entre sí, y una interfaz que tiene que dar una respuesta. Ahí es donde se decide si un producto sirve o solo se ve bonito.",
      },
      {
        title: "Me quedo cuando se rompe",
        text: "Está en mi servidor, con mis despliegues. Si el radar deja de pintar un domingo por la noche, no hay a quién escalarlo.",
      },
    ],
  },
  bigStat: {
    eyebrow: "Snowy, últimos 90 días",
    value: 14687005,
    label: "impresiones en búsqueda orgánica, sin un euro en publicidad ni equipo de marketing detrás.",
    support: [
      { value: "242.000", label: "visitas desde búsqueda" },
      { value: "8,1", label: "posición media en Google" },
      { value: "1.400+", label: "usuarios registrados" },
    ],
  },
  caseCta: {
    title: "¿Te encaja algo de esto?",
    text: "Trabajo por encargos acotados, en remoto y horario europeo. Si tienes algo entre manos, cuéntamelo y te digo con franqueza si soy la persona.",
    cta: "Escribirme",
    ctaSecondary: "Ver todos los proyectos",
  },
};
