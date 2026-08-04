import type { Capability, MediaMention, Metric, Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "snowy",
    name: "Snowy",
    url: "https://snowy.es",
    label: "Caso de ingenieria",
    logo: "/images/snowy-logo.png",
    image: "/images/snowy-home.png",
    description:
      "Plataforma meteorológica con datos en tiempo real, mapas, radar, estaciones, SEO, backend propio, infraestructura e IA.",
    impact:
      "Producto construido sobre frontend SSR, backend propio, caché, radar, CMS, despliegues, observabilidad y decisiones de arquitectura.",
    metrics: [
      { value: "16", label: "modelos meteorológicos" },
      { value: "1.000+", label: "estaciones en vivo" },
      { value: "370+", label: "embalses monitorizados" },
      { value: "20+", label: "herramientas IA" },
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
    slug: "lariojameteo",
    name: "LaRiojaMeteo",
    url: "https://lariojameteo.es",
    label: "Webmaster",
    logo: "/images/lariojameteo-logo-white.png",
    image: "/images/lariojameteo-home.png",
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
    stack: ["SEO", "WordPress", "Rendimiento", "UX", "Analitica"],
  },
];

export const snowyCapabilities: Capability[] = [
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
];

export const engineeringSignals = [
  {
    title: "Arquitectura de sistema",
    text: "Separación de responsabilidades entre BFF, backend central, CMS, radar, jobs y documentación transversal.",
  },
  {
    title: "Criterio pragmático",
    text: "Los servicios se separan cuando mejora escalabilidad, despliegue, rendimiento o mantenimiento.",
  },
  {
    title: "Operabilidad",
    text: "Runbooks, deploy flow, smoke tests, fallback local, Caddy, Cloudflare, Redis, healthchecks y rollback.",
  },
  {
    title: "Producto y SEO",
    text: "Páginas indexables, rendimiento, contenido meteorológico, audiencia y experiencia final trabajados desde arquitectura.",
  },
  {
    title: "IA aplicada",
    text: "IA generativa como capa funcional: agentes, herramientas, análisis, automatización y nuevas capacidades de producto.",
  },
  {
    title: "Calidad técnica",
    text: "TypeScript strict, convenciones comunes, Clean Architecture, fronteras claras y documentación de decisiones.",
  },
] as const;

export const snowyMetrics: Metric[] = [
  { value: "16", label: "modelos", detail: "ECMWF, GFS, ICON, ARPEGE, GEM y mas" },
  { value: "1.000+", label: "estaciones", detail: "red oficial y comunidad Snowy" },
  { value: "370+", label: "embalses", detail: "estado y evolución en España" },
  { value: "1.000+", label: "terminos", detail: "WikiMeteo en español" },
  { value: "20+", label: "herramientas IA", detail: "asistente, voz y decisiones diarias" },
  { value: "10+", label: "capas de mapa", detail: "radar, estaciones, riesgos y aire" },
];

export const snowyTractionMetrics: Metric[] = [
  {
    value: "7,5M",
    label: "impresiones",
    detail: "últimos 3 meses en busqueda orgánica",
  },
  {
    value: "51k",
    label: "clics",
    detail: "tráfico captado desde Google en 3 meses",
  },
  {
    value: "1.200+",
    label: "usuarios registrados",
    detail: "base propia para comunidad y nuevas funcionalidades",
  },
];

export const snowyMediaMentions: MediaMention[] = [
  {
    outlet: "El Confidencial",
    date: "18 enero 2026",
    title: "La Rioja Meteo lanza Snowy como web con IA para decisiones cotidianas sobre el tiempo.",
    url: "https://www.elconfidencial.com/tecnologia/2026-01-18/web-ia-la-rioja-prevision-tiempo-1tna-1qrt_4282037/",
  },
  {
    outlet: "larioja.com",
    date: "22 enero 2026",
    title: "Nace Snowy, asistente riojano para paraguas, lavadora y recomendaciones diarias.",
    url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
  },
  {
    outlet: "eldiario.es",
    date: "12 enero 2026",
    title: "La Rioja Meteo crea Snowy, una plataforma meteorológica con recomendaciones prácticas.",
    url: "https://www.eldiario.es/la-rioja/rioja-meteo-crea-snowy-nueva-plataforma-meteorologia-dice-poner-lavadora-ropa-ponerte_1_12898410.html",
  },
  {
    outlet: "nuevecuatrouno",
    date: "12 enero 2026",
    title: "Snowy se presenta como nueva plataforma meteorológica de La Rioja Meteo.",
    url: "https://nuevecuatrouno.com/2026/01/12/nace-snowy-la-plataforma-meteorologica-de-la-rioja-meteo/",
  },
  {
    outlet: "Diario de Leon",
    date: "14 abril 2026",
    title: "Snowy como apoyo para planificar la observación del eclipse en Leon.",
    url: "https://www.diariodeleon.es/sociedad/260414/2081770/mejor-alia-leon-eclipse.html",
  },
  {
    outlet: "Actualidad Rioja Baja",
    date: "12 enero 2026",
    title: "La Rioja Meteo lanza Snowy como plataforma meteorológica avanzada y accesible.",
    url: "https://actualidadriojabaja.com/la-rioja-meteo-lanza-snowy-una-nueva-plataforma-meteorologica-avanzada-y-accesible/",
  },
  {
    outlet: "nuevecuatrouno",
    date: "11 abril 2026",
    title: "Snowy y La Rioja Meteo en la planificación del eclipse de agosto.",
    url: "https://nuevecuatrouno.com/2026/04/11/cielo-rioja-apunta-despejado-gran-eclipse-de-agosto/",
  },
];

export const lariojaMeteoSections = [
  "Predicciones para La Rioja y Logroño",
  "Meteoanalisis, nevadas, pluviometría y embalses",
  "Tiempo real, estaciones Snowy y webcams",
  "Noticias, astronomía, guías y comunidad meteoaficionada",
] as const;
