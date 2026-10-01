import { site } from "@/content/site";
import type { Copy } from "@/types/content";

export const es: Copy = {
  meta: {
    siteTitle:
      "Tech Lead e ingeniero full stack: arquitectura de software, IA generativa y SEO",
    description:
      "Ingeniero Informático por la Universidad de La Rioja. Lidero arquitectura y nuevas capacidades en proyectos enterprise, colaboro con EQx (Elite Quality Index, Universidad de St. Gallen) y desarrollo Snowy, una plataforma meteorológica en producción con Next.js, NestJS, Redis, MySQL y Docker.",
    location: "Logroño, La Rioja, España",
    jobTitle: "Tech Lead e ingeniero full stack",
    universityLabel: site.university,
    collegeLabel: site.college,
    ogAlt: `${site.name} - Ingeniero de software`,
    ogEyebrow: "Tech Lead · Full stack",
    ogTagline:
      "Arquitectura de software, desarrollo full stack e IA generativa en sistemas en producción.",
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
    menuButton: "Menú",
    closeButton: "Cerrar",
    openMenu: "Abrir navegación",
    closeMenu: "Cerrar navegación",
    sectionsLabel: "Secciones",
    pagesLabel: "Páginas",
    localeLabel: "Idioma",
    items: [
      { key: "home", label: "Inicio" },
      { key: "experience", label: "Experiencia" },
      { key: "projects", label: "Proyectos" },
      { key: "blog", label: "Blog" },
      { key: "snowy", label: "Snowy" },
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
    positioning: "Tech Lead · Full stack · Arquitectura de software",
    positioningLong:
      "Tech Lead e ingeniero full stack, de la arquitectura a producción.",

    aboutTitle: "Ingeniero informático colegiado, desde Logroño.",
    aboutStatement: [
      { text: "Ingeniero de software en Logroño. " },
      { text: "Tech Lead en banca y seguros", strong: true },
      { text: ", " },
      { text: "relevo técnico del Elite Quality Index", strong: true },
      { text: " en Suiza y, en paralelo, " },
      { text: "desarrollo Snowy", strong: true },
      { text: "." },
    ],

    tagline: ["Tech Lead e", "ingeniero", "full stack."],
    taglineSub:
      "Ingeniero en proyectos de banca y seguros en España, en un índice académico suizo y en una plataforma meteorológica que usa gente cada día.",

    availability: "Disponible para proyectos y equipos",
    clientsLabel: "Dónde he trabajado",
    capabilities: [
      {
        title: "Arquitectura de software",
        text: "Cómo se reparte un sistema en frontend, backend, datos y despliegue, y qué decisión va en cada capa.",
      },
      {
        title: "Desarrollo full stack",
        text: "React, Next.js y TypeScript en el frontend; Node, NestJS y Java con Spring Boot en el backend.",
      },
      {
        title: "IA generativa y agentes",
        text: "Agentes y modelos integrados en sistemas reales, con sus límites, su coste y su mantenimiento.",
      },
      {
        title: "Datos e infraestructura",
        text: "Bases de datos, caché, despliegues y el servidor donde corre todo.",
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
      { text: "Ingeniero Informático por la " },
      { text: site.university, href: site.universityUrl, external: true },
      { text: " y colegiado en el " },
      { text: site.college, href: site.collegeUrl, external: true },
      {
        text: ". Más de cinco años en el sector: ahora como Tech Lead en banca y seguros, y como freelance para la fundación suiza que publica el ",
      },
      { text: "Elite Quality Index", href: site.eqxIndex, external: true },
      {
        text: " de la Universidad de St. Gallen. En paralelo desarrollo Snowy, una plataforma meteorológica con usuarios reales que uso para trabajar producto, datos e infraestructura de punta a punta.",
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
    paths: {
      team: { question: "¿Buscas a alguien para tu equipo?", label: "Ver CV" },
      product: {
        question: "¿Necesitas ayuda con tu producto?",
        label: "Ver servicios",
      },
    },
    ctaPrimary: "Ver experiencia",
    ctaSecondary: "CV",
    ctaContact: "Hablemos",

    cycle: {
      label: "Ciclo de entrega",
      state: "en curso",
      steps: [
        {
          title: "Arquitectura",
          caption: "la decisión queda escrita",
          tag: "ADR",
        },
        {
          title: "Implementación",
          caption: "en un espacio aislado",
          tag: "rama",
        },
        {
          title: "Revisión y pruebas",
          caption: "nada entra sin verificar",
          tag: "tests",
        },
        {
          title: "Build y despliegue",
          caption: "contenedor y caché",
          tag: "CI",
        },
        { title: "En producción", caption: "con usuarios reales", tag: "live" },
      ],
      foot: "snowy.es · eqx",
      badge: "3 en producción",
    },
  },
  currentRole: {
    homeTitle: "Tech Lead en banca y seguros.",
    homeText:
      "Llevo la arquitectura frontend de un producto de banca y seguros que tiene que pasar auditorías y mantenerse durante años. Decido cómo se construye para que el equipo pueda sostenerlo.",
    fronts: [
      {
        label: "01",
        title: "Arquitectura y estándares",
        text: "Cómo se estructura el frontend, qué entra en cada entrega y qué convenciones se mantienen entre equipos.",
      },
      {
        label: "02",
        title: "Revisiones y equipo",
        text: "Revisiones de código, acompañamiento técnico y alineamiento con backend, QA y negocio.",
      },
      {
        label: "03",
        title: "IA generativa en producción",
        text: "Casos de uso y agentes dentro de flujos enterprise, con sus límites, su coste y su mantenimiento.",
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
        {
          text: "En paralelo colaboro como freelance con la fundación suiza que publica el ",
        },
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
    titleAccent: "agentes de IA",
    title: "Crux, mi framework para trabajar con agentes de IA",
    lead: "Crux controla el ciclo de vida de cada tarea que hace un agente, desde que entiende el proyecto hasta que propone el cambio. Así el código que produce sigue los estándares de cada proyecto y no llega nada a producción sin haberse comprobado.",
    detailTitle: "La memoria del agente vive en git",
    detail:
      "Cada proyecto tiene un repositorio solo para su documentación, con sus convenciones y sus decisiones, versionado y en la nube. El agente lo lee antes de tocar nada, y lo que aprende en una sesión no se pierde en la siguiente.",
    rows: [
      [
        "estándar",
        "Las reglas y las herramientas que comparten todos los proyectos.",
      ],
      [
        "proyecto",
        "Documentación y procedimientos propios de cada uno, declarados en un contrato.",
      ],
      ["repositorio", "Punteros de contexto generados, nunca escritos a mano."],
    ],
    journey: {
      label: "Una tarea, de principio a fin",
      commandsLabel: "Ver los comandos (para desarrolladores)",
      steps: [
        {
          kicker: "Espacios aislados",
          title: "Cada tarea, en su propio espacio",
          text: "Varias tareas avanzan a la vez sin pisarse entre ellas.",
          command: "crux workspace new mapa-3d",
          output: "espacio 'mapa-3d' listo · rama, copia y puertos propios",
        },
        {
          kicker: "Procedimientos",
          title: "El agente sigue un procedimiento escrito",
          text: "Los pasos están documentados. Nada se improvisa.",
          command: "/ship",
          output: "el agente abre el procedimiento escrito antes de commitear",
        },
        {
          kicker: "Puerta de calidad",
          title: "Nada avanza sin pasar las pruebas",
          text: "Si algo falla, se para antes de llegar a producción.",
          command: "crux ship run -- npm test",
          output: "tests en verde, resultado anotado en el recibo",
        },
        {
          kicker: "Recibo",
          title: "Cada entrega llega con su prueba",
          text: "Queda escrito qué se comprobó y sobre qué versión.",
          command: "crux workspace finish mapa-3d",
          output: "propuesta abierta, con el recibo como prueba",
        },
        {
          kicker: "Medición",
          title: "Lo que no se usa, se retira",
          text: "Se mide qué procedimientos sirven y cuáles sobran.",
          command: "crux usage",
          output: "qué procedimientos se usan y cuáles sobran",
        },
      ],
    },
    diagram: {
      eyebrow: "Cada tarea, en cualquier proyecto",
      inLabel: "Entra",
      systemLabel: "El sistema aporta",
      outLabel: "Queda en git",
      inTitle: "Una tarea",
      inCaption: "de cualquier proyecto",
      projects: [
        "una funcionalidad nueva",
        "un fallo en producción",
        "un cambio de infraestructura",
      ],
      system: [
        "El procedimiento a seguir",
        "Un espacio de trabajo aislado",
        "Las puertas que hay que pasar",
        "El contexto del proyecto",
      ],
      output: [
        "El código",
        "La decisión y su porqué",
        "El procedimiento aprendido",
        "Lo medido",
      ],
      note: "Sin un sistema detrás, de una sesión de trabajo solo sobrevive el código.",
    },
    principlesTitle: "Los principios que lo sostienen",
    principles: [
      {
        title: "El razonamiento pesa tanto como el código",
        text: "El conocimiento de un proyecto no está solo en lo que se programa: está en las decisiones que se tomaron, en el razonamiento que llevó a ellas y en lo que se habló con quien define el producto. Eso condiciona todo el desarrollo posterior y es lo primero que se pierde, así que construí la arquitectura para conservarlo.",
      },
      {
        title: "El estándar se verifica",
        text: "Las reglas que sostienen el trabajo tienen comprobaciones automáticas enganchadas al ciclo. Una norma que hay que recordar se cumple a veces.",
      },
      {
        title: "Lo que no se usa, se retira",
        text: "Se mide qué procedimientos se invocan de verdad. Un catálogo que crece sin podarse deja de servir para encontrar nada.",
      },
    ],
  },
  snowyShowcase: {
    title: "Una plataforma meteorológica en producción.",
    lead: "Snowy es un producto complejo que abarca previsión con varios modelos, radar, estaciones, avisos, clima histórico y un asistente con IA. En los últimos tres meses ha tenido 16,8 millones de impresiones en Google y 257.000 clics, y tiene más de 1.400 usuarios registrados.",
    ctaPrimary: "Ver caso técnico",
    ctaSecondary: "Abrir Snowy",
    gallery: [
      {
        image: "/images/snowy-clima-crestas.webp",
        imageMobile: "/images/snowy-clima-crestas-movil.webp",
        title: "El clima desde 1950",
        caption:
          "Cada cresta es un año: cómo se repartieron sus días entre más fríos y más cálidos de lo normal.",
        alt: "Gráfico de crestas de Snowy con los días cálidos de cada año en España desde 1950, que pasan del azul al rojo",
      },
      {
        image: "/images/snowy-red-estaciones-movil.webp",
        imageMobile: "/images/snowy-red-estaciones-movil.webp",
        title: "Red de estaciones",
        caption:
          "1.863 estaciones de AEMET, redes regionales y aficionados, con las que reportan ahora mismo.",
        alt: "Listado de la red de estaciones meteorológicas de Snowy en el móvil",
      },
      {
        image: "/images/snowy-estacion-ficha-movil.webp",
        imageMobile: "/images/snowy-estacion-ficha-movil.webp",
        title: "Tu estación, con dueño",
        caption:
          "Cada estación tiene su propietario: conecta la tuya a la red, síguelas y guárdalas en favoritos.",
        alt: "Ficha de una estación en Snowy con su propietario y los botones de seguir y favorito",
      },
      {
        image: "/images/snowy-reportes-movil.webp",
        imageMobile: "/images/snowy-reportes-movil.webp",
        title: "Reportes en vivo",
        caption:
          "Lluvia, granizo, nieve o niebla, reportados por la comunidad y al instante sobre el mapa.",
        alt: "Pantalla de reportes en vivo de Snowy con el botón para reportar el tiempo",
      },
      {
        image: "/images/snowy-nieve-3d.webp",
        imageMobile: "/images/snowy-nieve-3d-movil.webp",
        title: "Pistas de esquí en 3D",
        caption:
          "Relieve y pistas de cada estación, en 3D sobre el terreno real.",
        alt: "Mapa 3D de Snowy con las pistas de Formigal sobre el relieve del Pirineo",
      },
      {
        image: "/images/snowy-home.webp",
        imageMobile: "/images/snowy-tiempo-movil.webp",
        title: "El tiempo, con confianza",
        caption:
          "Tres modelos cruzados, indicador de confianza y 1.171 estaciones en directo.",
        alt: "Portada de El Tiempo en Snowy, con los modelos cruzados y el indicador de confianza",
      },
      {
        image: "/images/snowy-stations-map.webp",
        imageMobile: "/images/snowy-perfil-movil.webp",
        title: "Perfil de usuario",
        caption:
          "Estaciones, reportes, racha y consultas: la parte de comunidad del producto.",
        alt: "Perfil de un usuario de Snowy con sus estadísticas de actividad y su estación destacada",
      },
    ],
    imageAlt:
      "Home de Snowy con buscador meteorológico, asistente IA y planificador",
  },
  experiencePreview: {
    eyebrow: "Experiencia",
    title: "Liderazgo técnico en proyectos enterprise.",
    text: "Ocho años decidiendo cómo se construye, revisando lo que escriben otros y respondiendo cuando algo se rompe.",
    cta: "Ver trayectoria completa",
  },
  projectsPreview: {
    eyebrow: "Productos",
    title: "Snowy, EQx y La Rioja Meteo.",
    text: "Tres proyectos en producción en los que llevo la arquitectura, la infraestructura y el desarrollo.",
  },
  sectionLabels: {
    work: "Qué hago",
    role: "Ahora",
    method: "Método",
    projects: "Proyectos",
    snowy: "Snowy",
    experience: "Experiencia",
    about: "Sobre mí",
    blog: "Blog",
    contact: "Contacto",
  },
  contactCta: {
    terminalCommand: "contactar --con jorge",
    terminalHint: "Pulsa para abrir tu correo",
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
      imageAlt:
        "Portada del Elite Quality Index, el índice que publica la fundación",
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
        src: "/images/logos/eqx.png",
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
        src: "/images/logos/vidacaixa.png",
        alt: "VidaCaixa",
        fallback: "VidaCaixa",
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
        src: "/images/logos/openbank.png",
        alt: "Openbank Grupo Santander",
        fallback: "Openbank",
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
        "CI/CD con GitHub Actions y tests automatizados.",
        "Trabajo en equipos Scrum y despliegues sobre entornos cloud.",
      ],
      logo: {
        src: "/images/logos/minsait.png",
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
        src: "/images/logos/hiberus.png",
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
        src: "/images/logos/jig.png",
        alt: "JIG",
        fallback: "JIG",
      },
    },
  ],
  aboutFacts: {
    location: "Base",
    languages: "Idiomas",
    education: "Formación",
  },
  education: [
    {
      title: "Ingeniería Informática",
      org: site.university,
      url: site.universityUrl,
      note: "Colegiado en el " + site.college,
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Competencia profesional" },
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
      imageMobile: "/images/snowy-movil.webp",
      pitch: "Pronóstico multi-modelo, radar y asistente para toda España.",
      name: "Snowy",
      url: site.snowy,
      label: "Plataforma meteorológica",
      logo: "/images/snowy-logo.webp",
      image: "/images/snowy-home.webp",
      description:
        "Plataforma meteorológica con datos en tiempo real, mapas, radar, estaciones, SEO, backend propio, infraestructura e IA.",
      impact:
        "Desarrollo de punta a punta, del render en servidor al radar y los despliegues, con el mantenimiento en marcha desde que salió a producción.",
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
      imageMobile: "/images/eqx-movil.webp",
      pitch: "El índice que ordena 151 países por la calidad de sus élites.",
      name: "EQx",
      url: "https://elitequality.org/",
      label: "Cliente · Suiza",
      image: "/images/eqx-home.webp",
      description:
        "Elite Quality Index: el índice de la Foundation for Value Creation que ordena 151 países por la calidad de sus élites, con web pública y panel de evaluación.",
      impact:
        "Rehice elitequality.org con un design system, hice desde cero la web del Value Creation Rating y mantengo el panel donde las empresas hacen su evaluación.",
      metrics: [
        { value: "151", label: "países en el ranking" },
        { value: "148", label: "indicadores" },
        { value: "12", label: "pilares en 4 áreas" },
        { value: "7ª", label: "edición anual" },
      ],
      stack: [
        "Astro",
        "React",
        "Next.js",
        "PostgreSQL",
        "D3",
        "GitHub Actions",
      ],
    },
    {
      slug: "lariojameteo",
      imageMobile: "/images/lariojameteo-movil.webp",
      pitch: "El portal meteorológico de referencia en La Rioja desde 2012.",
      name: "LaRiojaMeteo",
      url: site.lariojameteo,
      label: "Portal regional",
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
  sideProjects: [
    {
      slug: "mac-o-menos",
      name: "Mac o menos",
      url: "https://macs.jorge-carrera-diez.com/",
      host: "macs.jorge-carrera-diez.com",
      description:
        "Compara cada mañana el precio de 110 configuraciones de Mac en nueve tiendas españolas y en Apple, y marca dónde está más barata cada una.",
      stack: ["Python", "Astro", "TypeScript", "GitHub Actions"],
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
      heading:
        "Una plataforma en producción, un cliente internacional y un portal con audiencia.",
      text: "Snowy es donde pruebo las decisiones de arquitectura en real. EQx es cómo trabajo con un cliente. LaRiojaMeteo es audiencia, contenido y SEO sostenido en el tiempo.",
      sideTitle: "Proyectos personales",
      sideText:
        "Herramientas que construyo por mi cuenta, para resolver un problema propio o probar una idea.",
    },
    experience: {
      title: "Experiencia",
      description:
        "Experiencia profesional de Jorge Carrera Diez como ingeniero de software, Tech Lead, Lead Software Engineer y Full Stack Developer, y cómo aplica IA generativa y agentes dentro de flujos enterprise.",
      eyebrow: "Experiencia",
      heading:
        "Ingeniero de software con trayectoria en banca, seguros, retail y producto web.",
      text: "El recorrido completo, por orden. Dónde he liderado las decisiones técnicas, qué he construido en cada sitio y cómo he ido metiendo agentes de IA en flujos que ya estaban en producción.",
      spanLegend: "En marcha ahora mismo",
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
      educationTitle: "Formación",
      languagesTitle: "Idiomas",
      downloadCta: "Descargar en PDF",
      printHint: "Dos páginas, actualizado a septiembre de 2026.",
    },
    contact: {
      title: "Trabajemos juntos",
      description:
        "Jorge Carrera Diez, ingeniero de software freelance. Relevo técnico de productos en producción, desarrollo con React y Next.js y acompañamiento de arquitectura frontend.",
      lead: "Entro en productos que ya existen y sigo construyéndolos, o los levanto de cero hasta producción.",
      detail:
        "Arquitectura de software, decisiones de producto y agentes metidos donde ahorran horas de verdad. Escríbeme y te contesto yo, sin formularios de por medio.",
      availabilityLabel: "cómo empezamos",
      availabilityText:
        "Hablamos media hora, acotamos qué entra y qué se queda fuera, y te paso presupuesto y ritmo de trabajo por escrito antes de tocar nada.",
      stepsTitle: "Cómo empezamos",
      stepsText:
        "Sin propuestas de veinte páginas ni reuniones para preparar otra reunión.",
      steps: [
        {
          title: "Una llamada de media hora",
          text: "Me cuentas qué producto es, en qué estado está y qué necesitas.",
        },
        {
          title: "Acotamos el encargo",
          text: "Qué entra, qué se queda fuera y en cuánto tiempo. Si no encaja, te lo digo ahí.",
        },
        {
          title: "Presupuesto y ritmo por escrito",
          text: "Precio cerrado y cada cuánto vas a ver algo funcionando, antes de empezar.",
        },
      ],
      servicesTitle: "En qué puedo ayudarte",
      servicesText:
        "Cuatro formas de trabajo, cada una con un proyecto real detrás.",
      services: [
        {
          title: "Producto de cero a producción",
          text: "Paso la idea de un fundador a un producto funcionando, con React, Next.js, TypeScript y NestJS. El despliegue y el SEO van desde el primer día, no al final.",
        },
        {
          title: "Arquitectura y acompañamiento del equipo",
          text: "Para equipos que ya están construyendo. Decido la arquitectura y reviso el código, para que lo que hagan hoy se pueda seguir manteniendo dentro de un año.",
        },
        {
          title: "Automatización con agentes de IA",
          text: "Busco las tareas que tu equipo hace a mano y las paso a agentes de IA. Yo trabajo así cada día con Crux, el framework que construí para eso.",
        },
        {
          title: "SEO técnico y búsqueda con IA",
          route: "seoService",
          text: "Reviso el SEO técnico de tu web para que aparezca en Google y en asistentes como ChatGPT o Perplexity. Es el trabajo que hay detrás del tráfico orgánico de Snowy.",
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
      servicesCtaTitle: "Qué puedes encargarme",
      servicesCtaText:
        "Las formas de trabajo y la dedicación semanal están en la página de servicios.",
      servicesCtaButton: "Ver servicios",
      linksTitle: "Antes de escribir",
      linksText:
        "Si prefieres tener más contexto, aquí está lo relevante de mi perfil y dónde ver mi trabajo.",
      links: [
        { key: "malt", label: "Malt" },
        { key: "linkedin", label: "LinkedIn" },
        { key: "github", label: "GitHub" },
        { key: "cv", label: "CV web" },
        { key: "snowy", label: "Snowy" },
      ],
    },
    services: {
      title: "Desarrollo de producto digital, de la idea a producción",
      description:
        "Jorge Carrera Diez, ingeniero de producto freelance: llevo productos digitales de la idea a producción, entro en equipos que ya están construyendo y hago SEO técnico. React, Next.js, TypeScript, NestJS y AWS.",
      eyebrow: "Qué puedes encargarme",
      heading: "Producto digital, de la idea a producción",
      lead: "Llevo la idea de un fundador hasta un producto en producción, o entro en un equipo que ya está construyendo y mejoro lo que hay. De la infraestructura al frontend, con criterio de producto.",
      detail:
        "Cinco años sobre sistemas en producción en banca, seguros y retail, en equipos que no podían detener la entrega mientras se reconstruía por debajo. En paralelo desarrollo Snowy, una plataforma meteorológica que en los últimos tres meses sumó 16,8 millones de impresiones orgánicas y 257.000 clics desde Google.",
      ctaCall: "Pedir una llamada",
      ctaCase: "Ver el caso SEO de Snowy",
      caseLink: "Ver el servicio de SEO técnico",
      chart: {
        title: "Clics diarios desde Google en Snowy",
        ariaLabel:
          "Clics diarios desde Google en Snowy entre el 26 de junio y el 24 de septiembre de 2026, con un máximo de 27.351 el 12 de agosto, día del eclipse.",
        peakLabel: "27.351 clics el día del eclipse",
        startLabel: "26 jun",
        endLabel: "24 sep",
        caption: "Fuente: Google Search Console, 91 días.",
      },
      productionTitle: "En producción",
      productionText:
        "Productos que llevo o he llevado, con usuarios reales dentro.",
      productionLink: "Ver el caso",
      production: [
        {
          name: "Snowy",
          text: "Plataforma de inteligencia meteorológica: pronóstico multimodelo, radar y asistente con IA.",
          domain: "snowy.es",
          image: "/images/snowy-home.webp",
          alt: "Portada de Snowy con el mapa de estaciones y el pronóstico",
          route: "snowy",
        },
        {
          name: "EQx",
          text: "El índice que ordena 151 países por la calidad de sus élites, para una fundación suiza.",
          domain: "elitequality.org",
          image: "/images/eqx-home.webp",
          alt: "Portada del Elite Quality Index con el mapa mundial",
          route: "eqx",
        },
        {
          name: "La Rioja Meteo",
          text: "El portal meteorológico de referencia en La Rioja desde 2012.",
          domain: "lariojameteo.es",
          image: "/images/lariojameteo-home.webp",
          alt: "Portada de La Rioja Meteo",
          route: "lariojameteo",
        },
      ],
      stackTitle: "Con qué trabajo",
      stackText:
        "Lo que uso a diario en proyectos con usuarios reales, no una lista de todo lo que he tocado alguna vez.",
      stack: [
        {
          group: "Frontend",
          items: "React · Next.js · TypeScript · Tailwind · SSR · SEO técnico",
        },
        {
          group: "Backend",
          items: "Node · NestJS · Java · Spring Boot · APIs · autenticación",
        },
        {
          group: "Datos e infraestructura",
          items: "MySQL · PostgreSQL · Redis · Prisma · Docker · AWS · Vercel",
        },
        {
          group: "Agentes e IA",
          items: "Vercel AI SDK · RAG · MCP · herramientas · evaluaciones",
        },
      ],
      metrics: [
        {
          value: 16830175,
          label: "impresiones orgánicas",
          detail: "en Snowy, los últimos 90 días",
        },
        {
          value: 257346,
          label: "clics desde búsqueda",
          detail: "en ese mismo periodo",
        },
        {
          value: 1400,
          suffix: "+",
          label: "usuarios registrados",
          detail: "en Snowy",
        },
      ],
      formTitle: "Primero, una llamada de media hora",
      formText:
        "Me cuentas qué producto es y qué necesitas. Después te mando una propuesta cerrada por escrito, con el precio incluido. Rellena estos campos y se abre tu correo con la petición ya escrita.",
      form: {
        name: "Nombre",
        email: "Correo",
        product: "Producto",
        productHint: "Nombre o dirección web, si ya existe",
        need: "Qué necesitas",
        needHint: "En qué estado está y qué te hace falta",
        formSubject: "Llamada de 30 minutos",
        submit: "Pedir la llamada",
        note: "No se guarda nada aquí. El mensaje sale de tu cuenta.",
        emailAlt: "¿Prefieres escribir sin formulario?",
      },
    },
    seoService: {
      title: "Consultor SEO técnico: auditoría e implementación",
      description:
        "Consultor SEO técnico freelance: auditoría SEO técnica de tu web e implementación de los cambios. Indexación, Core Web Vitals, renderizado de JavaScript y búsqueda con IA, con especialidad en React y Next.js.",
      eyebrow: "Servicios · SEO técnico",
      heading: "Consultor SEO técnico",
      lead: "Reviso el SEO técnico de tu web y la dejo lista para Google y para los buscadores con IA. Como además soy desarrollador, los cambios los puedo implementar yo en tu repositorio.",
      detail:
        "Es el trabajo que hay detrás de Snowy, una plataforma de inteligencia meteorológica que sumó 16,8 millones de impresiones y 257.000 clics orgánicos en 90 días. Sirve para cualquier web, y donde más aporto es en productos hechos con React o Next.js.",
      facts: [
        { label: "Impresiones en Snowy", value: "16,8 M" },
        { label: "Clics en 90 días", value: "257.346" },
        { label: "Posición media", value: "8,1" },
        { label: "Especialidad", value: "React y Next.js" },
      ],
      ctaPrimary: "Pedir una llamada",
      ctaSecondary: "Ver el caso de Snowy",
      forWhomTitle: "Cuándo tiene sentido",
      forWhomText: "Situaciones en las que el problema suele ser técnico.",
      forWhom: [
        {
          title: "Google no enseña tu web",
          text: "El producto es bueno, pero las páginas no se indexan o salen por debajo de la competencia.",
        },
        {
          title: "Vas a migrar",
          text: "Cambio de dominio, de CMS o de framework. Un mapa de redirecciones bien hecho evita perder el tráfico que ya tienes.",
        },
        {
          title: "Tu web está hecha en React o Next.js",
          text: "Si el contenido depende de JavaScript, Google y los bots de IA pueden no ver lo mismo que tus usuarios.",
        },
        {
          title: "Quieres salir en las respuestas de la IA",
          text: "ChatGPT, Perplexity y los resúmenes de Google citan páginas que pueden leer y que aportan datos propios.",
        },
      ],
      auditTitle: "Qué incluye la auditoría SEO técnica",
      auditText:
        "Las áreas que reviso, con los términos que vas a encontrar en el informe.",
      audit: [
        {
          title: "Rastreo e indexación",
          text: "robots.txt, meta robots, estado de indexación en Search Console, páginas descubiertas sin indexar, soft 404 y códigos de estado.",
        },
        {
          title: "Arquitectura y enlazado interno",
          text: "Profundidad de clics, páginas huérfanas, parámetros de URL y paginación.",
        },
        {
          title: "Renderizado de JavaScript",
          text: "Qué ve Googlebot en el HTML inicial y qué ve después de renderizar, y si el canonical y el noindex llegan desde el servidor.",
        },
        {
          title: "Core Web Vitals",
          text: "LCP, INP y CLS con datos de campo de usuarios reales, además de las pruebas de laboratorio.",
        },
        {
          title: "Duplicados, canonicals y hreflang",
          text: "Qué versión de cada página cuenta para Google y si las versiones por idioma o país están bien enlazadas.",
        },
        {
          title: "Redirecciones y sitemaps",
          text: "Cadenas, bucles y 302 que deberían ser 301. Sitemaps XML que solo incluyan URLs indexables y canónicas.",
        },
        {
          title: "Datos estructurados",
          text: "Que el marcado sea válido y diga lo mismo que la página.",
        },
        {
          title: "Análisis de logs",
          text: "Qué rastrean de verdad Googlebot, Bingbot y los bots de IA, y con qué frecuencia.",
        },
        {
          title: "Búsqueda con IA",
          text: "Acceso de los bots de ChatGPT y Perplexity en el robots.txt y en el CDN, contenido disponible sin JavaScript y datos propios que se puedan citar.",
        },
        {
          title: "Migraciones",
          text: "Mapa de redirecciones URL a URL antes del cambio y seguimiento en Search Console después.",
        },
      ],
      deliverablesTitle: "Qué recibes",
      deliverablesText:
        "Un diagnóstico con la causa de cada problema y el orden en que conviene arreglarlo.",
      deliverables: [
        {
          title: "Informe",
          text: "Cada problema con su causa, dónde aparece y cómo se arregla.",
        },
        {
          title: "Backlog priorizado",
          text: "Las tareas ordenadas por impacto y esfuerzo, listas para meterlas en el sprint.",
        },
        {
          title: "Sesión de presentación",
          text: "Repasamos el informe juntos, con tu equipo si lo tienes.",
        },
        {
          title: "Implementación, si la quieres",
          text: "La hago yo en tu repositorio, con cambios que tu equipo puede revisar, y después lo valido en Search Console y en Bing Webmaster Tools.",
        },
      ],
      jsTitle: "SEO para React y Next.js",
      jsText: "Donde más se nota que quien revisa también programa.",
      js: [
        {
          title: "Renderizado en servidor",
          text: "SSR, SSG o ISR según lo que tarda en caducar cada página, para que Google y los bots de IA reciban el contenido en el primer HTML.",
        },
        {
          title: "Rendimiento",
          text: "Hidratación, peso del JavaScript e imágenes. Es lo primero que miro cuando el LCP o el INP salen mal.",
        },
        {
          title: "Metadatos y enlazado desde el código",
          text: "Títulos, canonical, hreflang y enlaces con href real generados por el propio producto, sin depender de que alguien los rellene a mano.",
        },
      ],
      search: {
        title: "Donde Google no tiene respuesta propia",
        text: "Una página para cada búsqueda concreta. Esta es la que mejor funciona en Snowy.",
        query: "bandera playa guardamar del segura hoy",
        domain: "snowy.es",
        path: "playas › guardamar-centro",
        resultTitle:
          "Playa Centro de Guardamar hoy: estado del mar, oleaje y banderas",
        resultSnippet:
          "Hoy en Playa Centro de Guardamar (Guardamar del Segura, Alicante): mar marejadilla, bandera verde prevista por oleaje, olas de 0,5 m, agua a 26°.",
        badge: "Posición 1,8 · entra el 41 %",
        caption:
          "Título y descripción reales de la página. Posición y porcentaje de clics de Search Console, 90 días.",
      },
      chart: {
        title: "Clics diarios desde Google en Snowy",
        ariaLabel:
          "Clics diarios desde Google en Snowy entre el 26 de junio y el 24 de septiembre de 2026, con un máximo de 27.351 el 12 de agosto, día del eclipse.",
        peakLabel: "27.351 clics el día del eclipse",
        startLabel: "26 jun",
        endLabel: "24 sep",
        caption: "Fuente: Google Search Console, 91 días.",
      },
      render: {
        before: {
          label: "Web que depende de JavaScript",
          caption:
            "El bot recibe una página vacía. El contenido aparece al ejecutar el JavaScript, y los bots de IA no lo ejecutan.",
        },
        after: {
          label: "Snowy, renderizada en el servidor",
          caption:
            "Lo que recibió OAI-SearchBot, el bot de búsqueda de ChatGPT, el 26 de septiembre de 2026.",
        },
      },
      vitalsTitle: "Core Web Vitals",
      vitalsText:
        "Las tres métricas con las que Google mide la experiencia de carga, con los umbrales que publica.",
      vitals: [
        {
          name: "LCP",
          full: "Largest Contentful Paint",
          good: "≤ 2,5 s",
          poor: "> 4 s",
          text: "Cuánto tarda en pintarse lo principal de la página.",
        },
        {
          name: "INP",
          full: "Interaction to Next Paint",
          good: "≤ 200 ms",
          poor: "> 500 ms",
          text: "Cuánto tarda la página en responder cuando tocas algo.",
        },
        {
          name: "CLS",
          full: "Cumulative Layout Shift",
          good: "≤ 0,1",
          poor: "> 0,25",
          text: "Cuánto se mueve el contenido mientras carga.",
        },
      ],
      vitalsScale: { good: "Bueno", improve: "Mejorable", poor: "Malo" },
      faqTitle: "Preguntas frecuentes",
      faqText: "Lo que se suele preguntar antes de encargar una auditoría.",
      faq: [
        {
          question: "¿En qué se diferencia de una agencia de SEO?",
          answer:
            "Me centro en la parte técnica y, como soy desarrollador, puedo implementar los cambios en tu código en lugar de dejarte una lista para tu equipo. No hago campañas ni redacción de contenidos.",
        },
        {
          question: "¿Qué es el SEO para IA, o GEO?",
          answer:
            "Es preparar tu web para que los buscadores con IA la entiendan y la citen, como los resúmenes de Google o ChatGPT. La base es la misma que la del SEO técnico, con dos añadidos: dejar pasar a sus bots y servir el contenido sin depender de JavaScript.",
        },
        {
          question: "¿Hace falta un llms.txt?",
          answer:
            "Google ha dicho que no lo usa y que no hacen falta ficheros especiales para la IA. Se puede publicar, pero no es lo que te va a hacer aparecer. Lo que cuenta es que el contenido sea accesible y aporte datos propios.",
        },
        {
          question: "¿Implementas tú los cambios?",
          answer:
            "Si quieres, sí. La auditoría y la implementación se presupuestan por separado, así que puedes encargar solo el diagnóstico.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer:
            "Depende del tamaño de la web y de si incluye implementación. Después de una llamada de media hora te mando una propuesta cerrada por escrito.",
        },
        {
          question: "¿Trabajas solo con Next.js?",
          answer:
            "No. Reviso cualquier web. React y Next.js son donde más aporto porque es el stack con el que desarrollo a diario.",
        },
      ],
      closingTitle: "¿Revisamos el SEO de tu web?",
      closingText:
        "Media hora de llamada para ver tu caso. Después te mando por escrito qué haría y cuánto costaría.",
      closingCta: "Pedir una llamada",
      closingSecondary: "Ver servicios",
    },
    snowySeo: {
      title: "Caso técnico: SEO de Snowy",
      description:
        "El SEO técnico que llevó a Snowy a 16,8 millones de impresiones y 257.000 clics orgánicos en 90 días, medidos en Search Console, y cómo lo aplico a otras webs, también de cara a los buscadores con IA.",
      eyebrow: "Caso técnico · Snowy",
      heading: "SEO técnico de Snowy: 257.000 clics en 90 días",
      lead: "16,8 millones de impresiones en Google en tres meses, sin un euro en publicidad. Este es el trabajo técnico que hay detrás, y es el mismo que aplico cuando reviso otra web.",
      detail:
        "Snowy es una plataforma meteorológica en Next.js. Llevo su desarrollo, y el SEO técnico va dentro. Las cifras son de Search Console, del 26 de junio al 24 de septiembre de 2026.",
      facts: [
        { label: "Impresiones", value: "16,8 M" },
        { label: "Clics", value: "257.346" },
        { label: "Posición media", value: "8,1" },
        { label: "URLs en el sitemap", value: "7.538" },
      ],
      ctaPrimary: "Revisar el SEO de mi web",
      ctaSecondary: "Ver el caso de Snowy",
      workTitle: "Qué se hizo",
      workText:
        "El trabajo técnico, de lo que más pesa en el resultado a lo que menos.",
      work: [
        {
          title: "Una página por búsqueda concreta",
          text: "Cada playa tiene su página con la bandera del día, cada punto de observación del eclipse la suya y cada terremoto su ficha. Son más de 200 playas y unos 300 puntos del eclipse de 2026, y ya hay más de 500 páginas preparadas para el de 2027. Quien busca «bandera playa Gandía hoy» llega a una página que responde exactamente a eso.",
        },
        {
          title: "Caché al ritmo de cada dato",
          text: "Cada tipo de página se regenera según lo que tarda en caducar lo que enseña: el sitemap una vez al día, las fichas del eclipse una vez por semana, las de un evento ya pasado una vez al mes. Google encuentra contenido fresco y el servidor no rehace todo en cada visita.",
        },
        {
          title: "Sitemaps y datos estructurados",
          text: "Un sitemap de 7.538 direcciones, otro de noticias con fechas de modificación coherentes, y datos estructurados en las páginas, incluidas las preguntas frecuentes de los artículos.",
        },
        {
          title: "Menos páginas compitiendo entre sí",
          text: "Varias páginas de terremotos se disputaban las mismas búsquedas. Se declaró una página central, se consolidaron las demás y las direcciones retiradas redirigen con un 301 para conservar lo ganado.",
        },
        {
          title: "Legible para los buscadores con IA",
          text: "Los bots de ChatGPT o Perplexity no ejecutan JavaScript. Snowy sirve cada página ya renderizada desde el servidor, así que el bot de búsqueda de ChatGPT recibe la bandera del día de cada playa en el primer HTML. El robots.txt les deja pasar y los datos estructurados les dicen qué es cada página.",
        },
        {
          title: "Decidir con Search Console",
          text: "El tráfico se mide por sección cada pocas semanas, y con eso se decide dónde invertir y qué se deja quieto. En el repositorio hay 138 cambios etiquetados como SEO.",
        },
      ],
      resultTitle: "De dónde salió el tráfico",
      resultText: "Clics de los 90 días, agrupados por sección.",
      shares: [
        {
          label: "Playas",
          value: "35,8 %",
          detail: "92.288 clics, casi todos buscando la bandera del día",
        },
        {
          label: "Eclipse",
          value: "32,6 %",
          detail: "83.988 clics, 27.351 solo el 12 de agosto",
        },
        {
          label: "Terremotos",
          value: "15,7 %",
          detail: "40.461 clics, la sección que más aguanta fuera de temporada",
        },
        {
          label: "WikiMeteo",
          value: "7,2 %",
          detail: "18.468 clics en el glosario meteorológico",
        },
      ],
      resultNote:
        "La consulta que mejor funciona es «bandera playa Guardamar del Segura hoy»: posición 1,8, y entra el 41 % de quien la ve.",
      lessonsTitle: "Qué aplico al revisar tu web",
      lessonsText:
        "Lo que enseñan estos números antes de tocar una sola página.",
      lessons: [
        {
          title: "Ir a las búsquedas que se pueden ganar",
          text: "Para «el tiempo en…» Google pone su propio panel arriba y esas páginas de Snowy convierten un 0,1 %. Para «bandera playa Guardamar hoy» no lo tiene, y entra el 41 % de quien la ve. Antes de crear páginas miro qué búsquedas tienen hueco de verdad.",
        },
        {
          title: "Llegar antes que el pico",
          text: "El eclipse trajo 27.351 clics en un solo día porque las páginas de cada ciudad llevaban semanas indexadas cuando llegó la fecha. Lo que tu negocio sabe que va a pasar se prepara con tiempo.",
        },
      ],
      closingTitle:
        "¿Tu web no aparece en Google ni en las respuestas de la IA?",
      closingText:
        "Lo vemos en una llamada de media hora y después te mando por escrito qué cambiaría y cuánto costaría.",
      closingCta: "Pedir una llamada",
      closingSecondary: "Ver servicios",
      source:
        "Fuente: Google Search Console, propiedad snowy.es, del 26-06-2026 al 24-09-2026. Clics por sección agrupados por URL.",
      chart: {
        title: "Clics diarios desde Google",
        ariaLabel:
          "Clics diarios desde Google en Snowy entre el 26 de junio y el 24 de septiembre de 2026, con un máximo de 27.351 el 12 de agosto, día del eclipse.",
        peakLabel: "27.351 clics el 12 de agosto",
        startLabel: "26 jun",
        endLabel: "24 sep",
        caption: "Fuente: Google Search Console, 91 días.",
      },
      phoneAlt:
        "Página de la playa Centro de Guardamar en Snowy, con bandera verde y olas de 0,5 metros",
    },
    snowy: {
      title: "Snowy",
      description:
        "Cómo está construida Snowy, plataforma meteorológica en producción: arquitectura, datos en tiempo real, radar, SEO e IA, contado por dentro.",
      eyebrow: "En producción",
      heading:
        "Snowy: plataforma meteorológica con mapas, datos en tiempo real e IA.",
      facts: [
        { label: "Rol", value: "Diseño, desarrollo e infraestructura" },
        { label: "Periodo", value: "Desde 2025, en activo" },
        {
          label: "Ámbito",
          value: "Producto completo, de la base de datos al SEO",
        },
        { label: "Alcance", value: "16,8 M de impresiones en 90 días" },
      ],
      stack: {
        eyebrow: "Stack",
        title: "Qué hay debajo.",
        text: "Mantengo todo lo que se ve en Snowy: el render, el backend, los datos, el radar y los despliegues.",
        groups: [
          {
            label: "Front",
            items: ["Next.js", "React", "TypeScript", "Tailwind", "MapLibre"],
          },
          { label: "Backend", items: ["NestJS", "Prisma", "MySQL", "Redis"] },
          {
            label: "Infraestructura",
            items: ["Docker", "Coolify", "Cloudflare", "VPS propio"],
          },
          {
            label: "IA y datos",
            items: ["AI SDK", "RAG", "Procesos batch", "GRIB2"],
          },
        ],
      },
      lead: "Snowy es una plataforma meteorológica con previsión, mapas, estaciones, avisos, embalses, calidad del aire y terremotos.",
      detail:
        "La diferencia está en unir producto, datos, SEO, mapas interactivos y agentes sobre una arquitectura propia: frontend SSR, backend como autoridad, caché por dominio y servicios especializados para radar, CMS y procesos batch. En los últimos 3 meses, Snowy ha superado los 16,8 millones de impresiones, 257.000 clics orgánicos y 1.400 usuarios registrados.",
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
            text: "La ficha da la temperatura y cuánta confianza merece esa previsión. Si dieciséis modelos no se ponen de acuerdo, se dice.",
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
            text: "374 embalses del MITECO, con su volumen, su variación semanal y la comparación con el año pasado, actualizados de forma automática.",
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
      convergence: {
        eyebrow: "El problema de fondo",
        title: "Dieciséis modelos que no coinciden.",
        text: "Cada fuente da un pronóstico distinto para el mismo punto, y cuanto más lejos se mira, más se separan entre sí. Snowy da una sola respuesta y dice cuánto se puede uno fiar de ella.",
        ticks: [
          { at: 0.02, label: "Ahora" },
          { at: 0.42, label: "+3 días" },
          { at: 0.98, label: "+10 días" },
        ],
        spreadLabel: "Dispersión entre modelos",
        answerLabel: "La respuesta",
        note: "Esquema del comportamiento, no una medición: lo que se representa es que la incertidumbre crece con el alcance.",
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
          text: "Red de estaciones con datos en vivo e históricos, a la que cualquier usuario puede conectar la suya.",
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
          text: "Energy, widgets embebibles, producto de eclipses y nuevas verticales sobre la misma base técnica.",
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
            text: "Series históricas para ver cómo ha cambiado la temperatura en cada zona.",
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
        title: "Lo que se ve en el uso.",
        text: "En los últimos tres meses: 16,8 millones de impresiones en búsqueda orgánica, 257.000 clics y una posición media de 8.",
      },
      build: {
        eyebrow: "Construcción",
        title: "Cómo está hecho.",
        text: "Snowy se apoya en una arquitectura desacoplada: Next.js para SSR, SEO y UI; NestJS para negocio y datos; Redis para caché; MySQL para persistencia; y servicios separados cuando radar, CMS o jobs tienen cargas distintas.",
      },
      architecture: {
        layers: [
          {
            tag: "Front",
            name: "Next.js",
            role: "Render en servidor, SEO e interfaz",
          },
          {
            tag: "Engine",
            name: "NestJS",
            role: "Negocio, integraciones y modelo de datos",
          },
        ],
        stores: [
          {
            tag: "Caché",
            name: "Redis",
            role: "Lo que se pide mucho y cambia poco",
          },
          {
            tag: "Persistencia",
            name: "MySQL",
            role: "El estado que tiene que sobrevivir",
          },
        ],
        servicesLabel: "Aparte",
        services: ["Radar", "CMS", "Jobs"],
        servicesNote:
          "Se separan cuando su carga no se parece a la del resto: el radar pinta tiles, los jobs corren a horas fijas.",
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
          text: "Unificación de modelos profesionales, estaciones, embalses, terremotos, calidad del aire, polen y fuentes oficiales, unificados en un mismo modelo de datos.",
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
        sources: [
          {
            sigla: "AEMET",
            nombre: "Agencia Estatal de Meteorología",
            aporta: "Estaciones y avisos",
            campo: "tiempo",
          },
          {
            sigla: "Euskalmet",
            nombre: "Agencia Vasca de Meteorología",
            aporta: "Estaciones del País Vasco",
            campo: "tiempo",
          },
          {
            sigla: "MeteoGalicia",
            nombre: "Meteorología de la Xunta",
            aporta: "Estaciones de Galicia",
            campo: "tiempo",
          },
          {
            sigla: "MITECO",
            nombre: "Ministerio para la Transición Ecológica",
            aporta: "Embalses y reserva hídrica",
            campo: "agua",
          },
          {
            sigla: "IGN",
            nombre: "Instituto Geográfico Nacional",
            aporta: "Sismos en España",
            campo: "sismo",
          },
          {
            sigla: "USGS",
            nombre: "United States Geological Survey",
            aporta: "Sismos en el mundo",
            campo: "sismo",
          },
          {
            sigla: "CAMS",
            nombre: "Copernicus Atmosphere Monitoring",
            aporta: "Calidad del aire y polen",
            campo: "aire",
          },
        ],
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
            url: "https://snowy.es/productos/energia",
            text: "Forecasting renovable, simulador y dashboard para energía solar como vertical B2B dentro del ecosistema Snowy.",
          },
          {
            title: "Widgets B2B",
            url: "https://snowy.es/productos/widgets",
            text: "SDK embebible para integrar datos meteorológicos, mapas, herramientas o asistente IA en webs de terceros.",
          },
          {
            title: "Eclipses",
            url: "https://snowy.es/eclipse-2027",
            text: "Producto de contenido y planificación: se estrenó con el eclipse total de agosto de 2026 y ya corre para el de 2027.",
          },
        ],
      },
      press: {
        eyebrow: "Prensa",
        title: "Snowy también ha tenido recorrido público.",
        text: "El proyecto nació desde LaRiojaMeteo y ha tenido presencia en prensa, radio y portales públicos.",
        openDataLabel: "datos.gob.es",
        openDataTag: "Ficha pública",
        openDataTitle:
          "Snowy aparece recogido en el portal nacional de datos abiertos.",
        proof: [
          {
            source: "RNE",
            title: "Una entrevista de radio para explicarlo",
            text: "Participación en radio para explicar Snowy y la evolución del proyecto meteorológico.",
            image: "/images/snowy-rne.png",
            alt: "Jorge Carrera y Daniel Benito en una entrevista de RNE sobre Snowy",
          },
          {
            source: "larioja.com",
            title: "Cobertura en la prensa regional",
            text: "Cobertura en prensa regional sobre el lanzamiento de Snowy desde LaRiojaMeteo.",
            image: "/images/snowy-larioja-foto.webp",
            alt: "Artículo de larioja.com sobre el lanzamiento de Snowy",
            url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
          },
        ],
      },
      metrics: [
        {
          value: "16",
          label: "modelos",
          detail: "ECMWF, GFS, ICON, ARPEGE, GEM y más",
        },
        {
          value: "1.000+",
          label: "estaciones",
          detail: "red oficial y comunidad Snowy",
        },
        {
          value: "370+",
          label: "embalses",
          detail: "estado y evolución en España",
        },
        { value: "1.000+", label: "términos", detail: "WikiMeteo en español" },
        {
          value: "20+",
          label: "herramientas IA",
          detail: "asistente, voz y decisiones diarias",
        },
        {
          value: "10+",
          label: "capas de mapa",
          detail: "radar, estaciones, riesgos y aire",
        },
      ],
      tractionMetrics: [
        {
          value: "16,8M",
          label: "impresiones",
          detail: "últimos 3 meses en búsqueda orgánica",
        },
        {
          value: "242k",
          label: "clics",
          detail: "tráfico captado desde Google en 3 meses",
        },
        {
          value: "1.400+",
          label: "usuarios registrados",
          detail: "base propia para comunidad y nuevas funcionalidades",
        },
      ],
      mediaMentions: [
        {
          outlet: "El Confidencial",
          cover: "/images/prensa/el-confidencial.webp",
          date: "18 enero 2026",
          title:
            "La Rioja Meteo lanza Snowy como web con IA para decisiones cotidianas sobre el tiempo.",
          url: "https://www.elconfidencial.com/tecnologia/2026-01-18/web-ia-la-rioja-prevision-tiempo-1tna-1qrt_4282037/",
        },
        {
          outlet: "larioja.com",
          cover: "/images/prensa/larioja-com.webp",
          date: "22 enero 2026",
          title:
            "Nace Snowy, asistente riojano para paraguas, lavadora y recomendaciones diarias.",
          url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
        },
        {
          outlet: "eldiario.es",
          cover: "/images/prensa/eldiario-es.webp",
          date: "12 enero 2026",
          title:
            "La Rioja Meteo crea Snowy, una plataforma meteorológica con recomendaciones prácticas.",
          url: "https://www.eldiario.es/la-rioja/rioja-meteo-crea-snowy-nueva-plataforma-meteorologia-dice-poner-lavadora-ropa-ponerte_1_12898410.html",
        },
        {
          outlet: "nuevecuatrouno",
          cover: "/images/prensa/nuevecuatrouno.webp",
          date: "12 enero 2026",
          title:
            "Snowy se presenta como nueva plataforma meteorológica de La Rioja Meteo.",
          url: "https://nuevecuatrouno.com/2026/01/12/nace-snowy-la-plataforma-meteorologica-de-la-rioja-meteo/",
        },
        {
          outlet: "Diario de León",
          cover: "/images/prensa/diario-de-leon.webp",
          date: "14 abril 2026",
          title:
            "Snowy como apoyo para planificar la observación del eclipse en León.",
          url: "https://www.diariodeleon.es/sociedad/260414/2081770/mejor-alia-leon-eclipse.html",
        },
        {
          outlet: "Actualidad Rioja Baja",
          cover: "/images/prensa/actualidad-rioja-baja.webp",
          date: "12 enero 2026",
          title:
            "La Rioja Meteo lanza Snowy como plataforma meteorológica avanzada y accesible.",
          url: "https://actualidadriojabaja.com/la-rioja-meteo-lanza-snowy-una-nueva-plataforma-meteorologica-avanzada-y-accesible/",
        },
        {
          outlet: "nuevecuatrouno",
          cover: "/images/prensa/nuevecuatrouno-2.webp",
          date: "11 abril 2026",
          title:
            "Snowy y La Rioja Meteo en la planificación del eclipse de agosto.",
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
        text: "Sobre WordPress, con un plugin propio para los datos de Snowy y el resto del trabajo puesto en que lo que ya hay cargue rápido, se vea bien en móvil y lo encuentre Google.",
        groups: [
          { label: "Plataforma", items: ["WordPress", "PHP", "MySQL"] },
          {
            label: "Visibilidad",
            items: ["SEO técnico", "Datos estructurados", "Core Web Vitals"],
          },
          {
            label: "Datos",
            items: ["Estaciones Snowy", "Webcams", "Embalses"],
          },
          { label: "Medición", items: ["Search Console", "Analítica"] },
        ],
      },
      lead: "Colaboro activamente como socio y perfil técnico en LaRiojaMeteo, portal de referencia meteorológico para La Rioja y Logroño con predicciones, análisis, datos en directo, noticias, guías y comunidad.",
      cta: "Visitar LaRiojaMeteo",
      imageAlt:
        "Home de LaRiojaMeteo con portada, categorías y último artículo",
      timeline: {
        eyebrow: "Trayectoria",
        title: "De blog meteorológico regional a ecosistema con Snowy.",
        text: "LaRiojaMeteo aporta historia, comunidad, conocimiento local y distribución editorial. Snowy aporta producto, datos, IA e infraestructura.",
      },
      product: {
        eyebrow: "El trabajo",
        title: "Modernizar sin romper lo que ya funcionaba.",
        text: "El portal llevaba doce años publicando y tenía audiencia, archivo y posicionamiento. El encargo fue ponerlo al día por dentro y por fuera, y conectarlo con los datos de Snowy.",
        items: [
          {
            title: "Rediseño y modernización",
            text: "Puesta al día del portal entero: aspecto, navegación y estructura, sin perder el archivo ni las posiciones que ya tenía en búsqueda.",
          },
          {
            title: "Plugin a medida",
            text: "Un plugin propio de WordPress que trae los datos de Snowy al portal —estaciones, embalses, webcams— en vez de pegarlos a mano en cada entrada.",
          },
          {
            title: "Rendimiento y móvil",
            text: "Core Web Vitals, imágenes, caché y una lectura cómoda en el teléfono, que es desde donde entra casi todo el tráfico.",
          },
        ],
        shots: [
          {
            image: "/images/lrm/portada.webp",
            title: "Portada",
            alt: "Portada de LaRiojaMeteo en un móvil, con el aviso activo y los datos del día",
          },
          {
            image: "/images/lrm/predicciones.webp",
            title: "Predicciones",
            alt: "Sección de predicciones de LaRiojaMeteo en un móvil",
          },
          {
            image: "/images/lrm/embalses.webp",
            title: "Embalses, con datos de Snowy",
            alt: "Categoría de embalses de LaRiojaMeteo en un móvil, con los datos integrados desde Snowy",
          },
        ],
      },
      history: {
        eyebrow: "El recorrido",
        title: "Doce años publicando antes de tocar una línea de código.",
        text: "Cuando entré, el portal ya tenía lectores y buenas posiciones en Google. Cualquier cambio se hacía sobre algo que funcionaba.",
        milestones: [
          {
            at: 0,
            year: "2012",
            title: "Arranca el proyecto",
            text: "Portal meteorológico de La Rioja, con publicación continua.",
          },
          {
            at: 0.55,
            year: "2024",
            title: "Me incorporo",
            text: "Con 130+ páginas de archivo y medio millón de visitas ya acumuladas.",
            own: true,
          },
          {
            at: 1,
            year: "Hoy",
            title: "Rendimiento, SEO y UX",
            text: "El trabajo es sostener y mejorar lo que ya tiene audiencia.",
          },
        ],
      },
      metrics: [
        {
          value: "2012",
          label: "origen",
          detail: "inicio del proyecto meteorológico original",
        },
        {
          value: "2020",
          label: "La Rioja Meteo",
          detail: "evolución hacia la marca actual",
        },
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
        title:
          "Un proyecto donde el SEO y la experiencia móvil tienen impacto directo.",
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
    blog: {
      title: "Blog",
      description:
        "Artículos de Jorge Carrera Diez sobre desarrollo de software, agentes de IA y los proyectos que tiene en producción.",
      eyebrow: "Artículos",
      heading: "Blog",
      lead: "Cómo trabajo con agentes de IA, decisiones de arquitectura y lo que sale de los proyectos que tengo en producción.",
      latestLabel: "Último artículo",
      moreLabel: "Todos los artículos",
      readLabel: "Leer el artículo",
      minutesLabel: "min de lectura",
      backLabel: "Todos los artículos",
      tocLabel: "En este artículo",
      shareLabel: "Compartir en X",
      commentLabel: "Comentar en X",
      copyLinkLabel: "Copiar enlace",
      copyCodeLabel: "Copiar",
      codeCopiedLabel: "Copiado",
      copiedLabel: "Enlace copiado",
      closeLabel: "Cerrar",
      authorRole: "Ingeniero de software",
      endTitle: "¿Te ha servido?",
      endText:
        "En X cuento lo que voy construyendo. Si trabajas con agentes o estás montando algo parecido, me encantará saber cómo lo haces.",
      endCta: "Seguir en X",
      feedLabel: "RSS",
    },
    eqx: {
      title: "EQx y VCr",
      description:
        "Jorge Carrera Diez desarrolla las webs del Elite Quality Index y del Value Creation Rating, y el panel donde las empresas hacen su evaluación, para la Foundation for Value Creation de St. Gallen (Suiza).",
      eyebrow: "Cliente · Suiza",
      heading:
        "Las webs y el panel de evaluación de la Foundation for Value Creation",
      lead: "La fundación, con sede en St. Gallen, publica dos índices: el Elite Quality Index (EQx), que puntúa a 151 países, y el Value Creation Rating (VCr), que puntúa a empresas. Desde julio de 2026 soy el desarrollador del proyecto y llevo sus tres piezas: la web de cada índice y el panel donde las empresas hacen su evaluación.",
      detail:
        "Trabajo en remoto y en inglés con los equipos de negocio y de diseño de la fundación. Recojo lo que piden, lo paso a requisitos por escrito y lo llevo hasta producción.",
      ctaPrimary: "Ver elitequality.org",
      ctaSecondary: "Hablemos",
      facts: [
        { label: "Cliente", value: "Foundation for Value Creation" },
        { label: "Rol", value: "Desarrollo y requisitos" },
        { label: "Desde", value: "Julio de 2026" },
        { label: "Piezas", value: "Dos webs y un panel de evaluación" },
      ],
      imageAlts: {
        home: "Portada de elitequality.org con el mapa mundial del Elite Quality Index",
      },
      products: {
        title: "Qué he hecho",
        items: [
          {
            name: "elitequality.org",
            tech: "Astro · React · D3",
            text: "La web pública del EQx. Definí con el equipo de diseño el design system y rehice con él las diez páginas, entre ellas el mapa mundial interactivo, la tabla de rankings y el comparador de países.",
            href: "https://elitequality.org/",
          },
          {
            name: "Web del VCr",
            tech: "Astro · React",
            text: "La web del rating de empresas, que estoy construyendo desde cero sobre el mismo design system. Incluye la ficha de cada empresa, el directorio y el comparador, con los datos oficiales del VCr2026.",
          },
          {
            name: "self-VCr",
            tech: "Next.js · Prisma · PostgreSQL",
            text: "El panel donde las empresas hacen su evaluación. Responden la encuesta, obtienen su rating y descargan el informe oficial en PDF. Lo mantengo y le estoy llevando el nuevo design system.",
          },
        ],
      },
      partners: {
        title: "Con la Universidad de St. Gallen",
        text: "El EQx lo dirigen Tomas Casas y Guido Cozzi, de la Universidad de St. Gallen, con tres de sus institutos y una red de socios académicos de otros países, como la Facultad de Economía de la Universidad de Oporto. Parte de la teoría de élites del desarrollo económico y mide, con 148 indicadores, si las élites de cada país crean valor o lo extraen. La de 2026 es su séptima edición.",
      },
      stack: {
        eyebrow: "Tecnologías",
        title: "Tecnologías",
        groups: [
          {
            label: "Webs del EQx y del VCr",
            items: ["Astro", "React", "Tailwind", "TypeScript", "D3"],
          },
          {
            label: "Panel self-VCr",
            items: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
          },
          {
            label: "Entrega",
            items: ["GitHub Actions", "Vitest", "Playwright"],
          },
        ],
      },
    },
  },
  radarScrub: {
    eyebrow: "Datos en vivo",
    title: "Precipitación, en directo.",
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
        title: "Descartar es la mitad del trabajo",
        text: "Cada función que entra hay que mantenerla durante años, así que la decisión que más pesa suele ser qué se queda fuera.",
        image: "/images/snowy-home.webp",
        imageAlt:
          "Portada de Snowy con buscador, asistente y accesos a los mapas",
      },
      {
        title: "Dieciséis modelos que no coinciden",
        text: "Dieciséis fuentes meteorológicas con pronósticos distintos para el mismo punto, y una interfaz que tiene que dar una sola respuesta.",
        image: "/images/snowy-station-detail.webp",
        imageAlt:
          "Ficha del tiempo en Madrid con fiabilidad del pronóstico al 51 %",
      },
      {
        title: "Mantener, no solo entregar",
        text: "Si el radar deja de pintar un domingo por la noche hay que arreglarlo, y eso condiciona cómo se construye desde el primer día.",
        image: "/images/snowy-radar-map.webp",
        imageAlt: "Radar de precipitación de Snowy sobre España",
      },
    ],
  },
  bigStat: {
    eyebrow: "Snowy, últimos 90 días",
    value: 16830175,
    label: "impresiones en búsqueda orgánica, sin inversión en publicidad.",
    support: [
      { value: "257.000", label: "visitas desde búsqueda" },
      { value: "8,1", label: "posición media en Google" },
      { value: "1.400+", label: "usuarios registrados" },
    ],
  },
  enVivo: {
    eyebrow: "Ahora mismo",
    reportando: "estaciones reportando ahora mismo, repartidas en",
    redesLabel: "redes distintas",
    minimaLabel: "mínima",
    maximaLabel: "máxima",
    leidoLabel: "leído",
    texto:
      "Estos números no están escritos en la página: los acaba de servir la API de Snowy, la misma que se explica más abajo.",
    enlace: "Abrir el mapa",
  },
  caseCta: {
    title: "¿Te encaja algo de esto?",
    text: "Trabajo en remoto y horario europeo. Si tienes algo entre manos, cuéntamelo y te digo con franqueza si soy la persona.",
    cta: "Escribirme",
    ctaSecondary: "Ver todos los proyectos",
  },
};
