import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

export const routeKeys = [
  "home",
  "projects",
  "snowy",
  "lariojameteo",
  "eqx",
  "experience",
  "cv",
  "contact",
] as const;

export type RouteKey = (typeof routeKeys)[number];

/** El español vive en la raíz para no romper las URLs ya indexadas. */
const paths: Record<Locale, Record<RouteKey, string>> = {
  es: {
    home: "/",
    projects: "/proyectos",
    snowy: "/proyectos/snowy",
    lariojameteo: "/proyectos/lariojameteo",
    eqx: "/proyectos/eqx",
    experience: "/experiencia",
    cv: "/cv",
    contact: "/contacto",
  },
  en: {
    home: "/en",
    projects: "/en/projects",
    snowy: "/en/projects/snowy",
    lariojameteo: "/en/projects/lariojameteo",
    eqx: "/en/projects/eqx",
    experience: "/en/experience",
    cv: "/en/cv",
    contact: "/en/contact",
  },
};

export function routePath(locale: Locale, key: RouteKey): string {
  return paths[locale][key];
}

/** Ancla dentro de la home del idioma, p. ej. `/en#stack`. */
export function sectionPath(locale: Locale, anchor: string): string {
  const home = paths[locale].home;
  return `${home === "/" ? "" : home}/#${anchor}`.replace("//#", "/#");
}

export function allPathsFor(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, paths[locale][key]]),
  ) as Record<Locale, string>;
}

/** Ruta equivalente en el otro idioma; cae a la home si no hay correspondencia. */
export function translatePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";

  for (const locale of locales) {
    for (const key of routeKeys) {
      if (paths[locale][key] === clean) {
        return paths[target][key];
      }
    }
  }

  return paths[target].home;
}

export const allRoutes = locales.flatMap((locale) =>
  routeKeys.map((key) => ({ locale, key, path: paths[locale][key] })),
);
