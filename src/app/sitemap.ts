import type { MetadataRoute } from "next";
import { site } from "@/content";
import { allPathsFor, allRoutes } from "@/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map(({ key, path }) => {
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
}
