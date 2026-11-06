export const site = {
  name: "Jorge Carrera Diez",
  domain: "jorge-carrera-diez.com",
  url: "https://www.jorge-carrera-diez.com",
  email: "jorgecarrera98d@gmail.com",
  photo: "/images/jorge-carrera-diez-claro.webp",
  github: "https://github.com/jocarrd",
  malt: "https://www.malt.es/profile/jorgecarreradiez",
  linkedin: "https://es.linkedin.com/in/jorge-carrera-diez",
  x: "https://x.com/jorgecarrera_es",
  college: "Colegio Profesional de Ingenieros en Informática de La Rioja",
  collegeUrl: "https://ingenierosinformaticarioja.com/",
  university: "Universidad de La Rioja",
  universityUrl: "https://www.unirioja.es/",
  snowy: "https://snowy.es",
  snowyAuthor: "https://snowy.es/noticias/autor/jorge-carrera-diez",

  snowyMapa: "https://snowy.es/map",

  snowyDomain: "snowy.es",
  eqx: "https://elitequality.org/",
  eqxReports: "https://elitequality.org/downloads/",
  lariojameteo: "https://lariojameteo.es",
  lumyna: "https://lumyna.es",
  vcr: "https://www.valuecreation.org",
  vcrReports: "https://www.valuecreation.org/downloads/",
  vcr2026Report: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7677438",
  unisg: "https://www.unisg.ch/en/",
  mutuDesign: "https://mutudesign.com",
  eqxIndex:
    "https://www.unisg.ch/en/research/research-in-focus/elite-quality-index/",
  openData: "https://datos.gob.es/es/aplicaciones/snowy",
};

export const organizations = {
  lumyna: { name: "Lumyna", url: "https://lumyna.es" },
  capgemini: { name: "Capgemini", url: "https://www.capgemini.com/es-es/" },
  eqx: {
    name: "Foundation for Value Creation",
    url: "https://elitequality.org/",
  },
} as const;

export function domainOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
