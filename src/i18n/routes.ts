import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";

export const routeKeys = [
  "home",
  "projects",
  "snowy",
  "lariojameteo",
  "eqx",
  "experience",
  "cv",
  "contact",
  "courses",
  "grokBotCourse",
  "grokBotDiary",
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
    courses: "/cursos",
    grokBotCourse: "/cursos/grok-bot",
    grokBotDiary: "/cursos/grok-bot/diario",
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
    courses: "/en/courses",
    grokBotCourse: "/en/courses/grok-bot",
    grokBotDiary: "/en/courses/grok-bot/diary",
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

/** Ruta de una lección del curso de Grok Bot en un idioma. */
export function lessonPath(locale: Locale, slug: string): string {
  return `${paths[locale].grokBotCourse}/${slug}`;
}

export function allPathsFor(key: RouteKey): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, paths[locale][key]]),
  ) as Record<Locale, string>;
}

/** Ruta equivalente en el otro idioma; cae a la home si no hay correspondencia. */
export function translatePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";

  // Las lecciones tienen slug propio en cada idioma: se traduce por su id.
  for (const locale of locales) {
    const base = `${paths[locale].grokBotCourse}/`;
    if (clean.startsWith(base)) {
      const lesson = grokBotCourse.lessons.find((l) => l.slug[locale] === clean.slice(base.length));
      if (lesson) return lessonPath(target, lesson.slug[target]);
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
