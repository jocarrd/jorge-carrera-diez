import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { blogPostPath, routePath } from "@/i18n/routes";
import { getPosts } from "@/lib/blog/posts";

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function blogFeed(locale: Locale): Response {
  const copy = getCopy(locale).pages.blog;
  const abs = (path: string) => new URL(path, site.url).toString();
  const posts = getPosts(locale);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(`${copy.title} · ${site.name}`)}</title>
<link>${abs(routePath(locale, "blog"))}</link>
<atom:link href="${abs(`${routePath(locale, "blog")}/feed.xml`)}" rel="self" type="application/rss+xml"/>
<description>${escapeXml(copy.description)}</description>
<language>${locale}</language>
${posts
  .map(
    (p) =>
      `<item><title>${escapeXml(p.title)}</title><link>${abs(blogPostPath(locale, p.slug))}</link><guid>${abs(blogPostPath(locale, p.slug))}</guid><pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(p.description)}</description></item>`,
  )
  .join("\n")}
</channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
