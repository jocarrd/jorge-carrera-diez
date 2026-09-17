import { site } from "@/content";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getCourse } from "@/lib/courses/load";

const escapeXml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS de novedades del curso: cada día del directo que entra y cada lección con su fecha. */
export function courseFeed(locale: Locale): Response {
  const copy = grokBotCourse.copy[locale];
  const abs = (path: string) => new URL(path, site.url).toString();
  const items = [
    ...grokBotCourse.parts
      .filter((p) => p.status === "done")
      .map((p) => ({
        title: `${copy.diaryTitle} · ${copy.dayLabel} ${p.number}: ${p.topics[locale].join(" · ")}`,
        link: abs(`${routePath(locale, "grokBotDiary")}#${locale === "es" ? "dia" : "day"}-${p.number}`),
        description: copy.diaryDescription,
        date: p.date,
      })),
    ...getCourse(locale).lessons.map((l) => ({
      title: `${copy.lessonLabel} ${l.id} · ${l.title}`,
      link: abs(lessonPath(locale, l.slug)),
      description: l.description,
      date: l.updated,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(copy.title)}</title>
<link>${abs(routePath(locale, "grokBotCourse"))}</link>
<atom:link href="${abs(`${routePath(locale, "grokBotCourse")}/feed.xml`)}" rel="self" type="application/rss+xml"/>
<description>${escapeXml(copy.description)}</description>
<language>${locale}</language>
<lastBuildDate>${new Date(grokBotCourse.updated).toUTCString()}</lastBuildDate>
${items
  .map(
    (i) => `<item><title>${escapeXml(i.title)}</title><link>${i.link}</link><guid isPermaLink="false">${escapeXml(`${i.link}@${i.date}`)}</guid><pubDate>${new Date(i.date).toUTCString()}</pubDate><description>${escapeXml(i.description)}</description></item>`,
  )
  .join("\n")}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
