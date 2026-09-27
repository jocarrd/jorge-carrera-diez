import type { MetadataRoute } from "next";
import { site } from "@/content";
import { allPathsFor, allRoutes, blogPostPath } from "@/i18n/routes";
import { getPosts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allRoutes.map(({ key, path }) => {
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

  const posts = getPosts("es").map((post) =>
    (["es", "en"] as const).map((locale) => ({
      url: new URL(blogPostPath(locale, post.slug), site.url).toString(),
      lastModified: new Date(post.date),
      alternates: {
        languages: {
          es: new URL(blogPostPath("es", post.slug), site.url).toString(),
          en: new URL(blogPostPath("en", post.slug), site.url).toString(),
        },
      },
    })),
  );

  return [...pages, ...posts.flat()];
}
