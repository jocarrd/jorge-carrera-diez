import type { MetadataRoute } from "next";
import { site } from "@/content";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { allPathsFor, allRoutes, lessonPath } from "@/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allRoutes
    .filter(({ key }) => key !== "courses")
    .map(({ key, path }) => {
      const translations = allPathsFor(key);

      return {
        url: new URL(path, site.url).toString(),
        lastModified: new Date(),
        alternates: {
          languages: {
            es: new URL(translations.es, site.url).toString(),
            en: new URL(translations.en, site.url).toString(),
          },
        },
      };
    });

  const lessons = grokBotCourse.lessons.flatMap((lesson) =>
    (["es", "en"] as const).map((locale) => ({
      url: new URL(
        lessonPath(locale, lesson.slug[locale]),
        site.url,
      ).toString(),
      lastModified: new Date(grokBotCourse.updated),
      alternates: {
        languages: {
          es: new URL(lessonPath("es", lesson.slug.es), site.url).toString(),
          en: new URL(lessonPath("en", lesson.slug.en), site.url).toString(),
        },
      },
    })),
  );

  return [...pages, ...lessons];
}
