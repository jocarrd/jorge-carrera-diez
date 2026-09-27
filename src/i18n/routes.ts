import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

export const routeKeys = [
  "home",
  "projects",
  "blog",
  "snowy",
  "snowySeo",
  "lariojameteo",
  "eqx",
  "experience",
  "cv",
  "contact",
  "services",
  "seoService",
] as const;

export type RouteKey = (typeof routeKeys)[number];

const paths: Record<Locale, Record<RouteKey, string>> = {
  es: {
    home: "/",
    projects: "/proyectos",
    blog: "/blog",
    snowy: "/proyectos/snowy",
    snowySeo: "/proyectos/snowy/seo",
    lariojameteo: "/proyectos/lariojameteo",
    eqx: "/proyectos/eqx",
    experience: "/experiencia",
    cv: "/cv",
    contact: "/contacto",
    services: "/servicios",
    seoService: "/servicios/seo-tecnico",
  },
  en: {
    home: "/en",
    projects: "/en/projects",
    blog: "/en/blog",
    snowy: "/en/projects/snowy",
    snowySeo: "/en/projects/snowy/seo",
    lariojameteo: "/en/projects/lariojameteo",
    eqx: "/en/projects/eqx",
    experience: "/en/experience",
    cv: "/en/cv",
    contact: "/en/contact",
    services: "/en/services",
    seoService: "/en/services/technical-seo",
  },
};

export function routePath(locale: Locale, key: RouteKey): string {
  return paths[locale][key];
}

export function sectionPath(locale: Locale, anchor: string): string {
  const home = paths[locale].home;
  return `${home === "/" ? "" : home}/#${anchor}`.replace("//#", "/#");
}

export function blogPostPath(locale: Locale, slug: string): string {
  return `${paths[locale].blog}/${slug}`;
}

export function allPathsFor(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, paths[locale][key]]),
  ) as Record<Locale, string>;
}

export function translatePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";

  for (const locale of locales) {
    const base = `${paths[locale].blog}/`;
    if (clean.startsWith(base)) {
      return blogPostPath(target, clean.slice(base.length));
    }
  }

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
