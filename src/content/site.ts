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

  snowyMapa: "https://snowy.es/map",

  snowyDomain: "snowy.es",
  eqx: "https://elitequality.org/",
  lariojameteo: "https://lariojameteo.es",
  eqxIndex:
    "https://www.unisg.ch/en/research/research-in-focus/elite-quality-index/",
  openData: "https://datos.gob.es/es/aplicaciones/snowy",
};

export const organizations = {
  capgemini: { name: "Capgemini", url: "https://www.capgemini.com/es-es/" },
  eqx: {
    name: "Foundation for Value Creation",
    url: "https://elitequality.org/",
  },
} as const;

export function domainOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
