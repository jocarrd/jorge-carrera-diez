import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { DiaryNav } from "@/components/course/CourseClient";
import { ShareButton } from "@/components/course/ShareButton";
import { getCourse, getLesson, getStory } from "@/lib/courses/load";

type Moment = { lessonId: string; lessonTitle: string; href: string; section: string };

// Un momento del directo que sale en la historia y también en una lección se
// enlaza a la sección exacta de esa lección: se reconoce por el mismo enlace al vídeo.
function momentsByVideoLink(locale: Locale): Map<string, Moment> {
  const map = new Map<string, Moment>();
  for (const summary of getCourse(locale).lessons) {
    const lesson = getLesson(locale, summary.slug)!;
    let section = { id: "", text: "" };
    for (const match of lesson.html.matchAll(/<h2 id="([^"]+)">[\s\S]*?<\/h2>|<a class="live-chip" href="([^"]+)"/g)) {
      if (match[1]) section = { id: match[1], text: lesson.toc.find((t) => t.id === match[1])?.text ?? "" };
      else if (match[2] && section.id && !map.has(match[2]))
        map.set(match[2], { lessonId: lesson.id, lessonTitle: lesson.title, href: `${lessonPath(locale, summary.slug)}#${section.id}`, section: section.text });
    }
  }
  return map;
}

export function dayAnchor(locale: Locale, day: number) {
  return `${locale === "es" ? "dia" : "day"}-${day}`;
}

function formatDay(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", { day: "numeric", month: "long" }).format(new Date(iso));
}

export function DiaryView({ locale }: { locale: Locale }) {
  const copy = grokBotCourse.copy[locale];
  const story = getStory(locale);
  const { lessons } = getCourse(locale);
  const courseHref = routePath(locale, "grokBotCourse");
  const syllabusHref = `${courseHref}#temario`;
  const firstLessonHref = lessonPath(locale, lessons[0].slug);
  const moments = momentsByVideoLink(locale);
  const moduleAnchor = (n: number) => `${courseHref}#${copy.moduleLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${n}`;
  const shownParts = grokBotCourse.parts.filter((part) => story.some((d) => d.day === part.number) || part.status === "processing");
  const url = new URL(routePath(locale, "grokBotDiary"), site.url).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.diaryTitle,
    description: copy.diaryDescription,
    inLanguage: locale,
    url,
    dateModified: grokBotCourse.updated,
    author: { "@type": "Person", name: site.name, url: site.url },
    isPartOf: { "@type": "Course", name: copy.title, url: new URL(courseHref, site.url).toString() },
  };

  return (
    <main className="diary-page">
      <JsonLd data={jsonLd} />
      <Container>
        <article className="diary-article">
          <header className="diary-hero">
            <p className="t-eyebrow">
              <Link href={courseHref}>{copy.title}</Link>
            </p>
            <h1 className="lesson-title">{copy.diaryTitle}</h1>
            <p className="lesson-description">{copy.diaryIntro}</p>
            <div className="diary-actions">
              <Link href={firstLessonHref} className="course-start-button">
                {copy.diaryStartCourse} <span aria-hidden="true">→</span>
              </Link>
              <Link href={syllabusHref} className="diary-secondary">
                {copy.diarySeeSyllabus}
              </Link>
            </div>
          </header>

          <DiaryNav
            label={copy.diaryDaysNav}
            syllabusHref={syllabusHref}
            syllabusLabel={copy.diarySeeSyllabus}
            shortSyllabusLabel={copy.syllabus}
            items={shownParts.map((part) => ({
              anchor: dayAnchor(locale, part.number),
              label: `${copy.dayLabel} ${part.number}`,
              note: part.status === "processing" ? copy.diaryLive : formatDay(locale, part.date),
              live: part.status === "processing",
            }))}
          />

          {shownParts.map((part) => {
            const day = story.find((d) => d.day === part.number);
            return (
              <section key={part.number} id={dayAnchor(locale, part.number)} className="diary-day">
                <p className="diary-day-eyebrow">
                  {copy.dayLabel} {part.number} · {formatDay(locale, part.date)}
                </p>
                <h2 className="diary-day-title">{part.topics[locale].join(" · ")}</h2>
                {day ? (
                  <>
                    <div className="lesson-body diary-summary" dangerouslySetInnerHTML={{ __html: day.html }} />
                    {day.segments.map((segment) => {
                      const storyModule = grokBotCourse.modules.find((m) => m.number === segment.module)!;
                      const related = lessons.filter((l) => l.ref.module === segment.module);
                      return (
                        <div key={segment.module} id={`${dayAnchor(locale, part.number)}-${copy.moduleLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${segment.module}`} className="diary-segment">
                          <h3 className="diary-segment-title">
                            <Link href={moduleAnchor(storyModule.number)}>
                              {copy.moduleLabel} {storyModule.number} · {storyModule.title[locale]}
                            </Link>
                          </h3>
                          <div className="lesson-body" dangerouslySetInnerHTML={{ __html: segment.html }} />
                          <ShareButton
                            url={`${routePath(locale, "grokBotDiary")}#${dayAnchor(locale, part.number)}-${copy.moduleLabel.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${segment.module}`}
                            title={`${copy.diaryTitle} · ${copy.dayLabel} ${part.number}`}
                            label={copy.share}
                            copiedLabel={copy.linkCopied}
                            className="diary-share"
                          />
                          {related.length > 0 ? (
                            <aside className="diary-module-card" aria-label={copy.diaryLearnTitle}>
                              <p className="diary-module-eyebrow">{copy.diaryLearnTitle}</p>
                              <p className="diary-module-name">
                                {copy.moduleLabel} {storyModule.number} · {storyModule.title[locale]}
                              </p>
                              {(() => {
                                const seen = [...segment.html.matchAll(/<a class="live-chip" href="([^"]+)"/g)]
                                  .map((m) => moments.get(m[1]))
                                  .filter((m): m is Moment => !!m);
                                if (seen.length === 0) return null;
                                return (
                                  <ul className="diary-moments">
                                    {seen.map((moment) => (
                                      <li key={moment.href}>
                                        <Link href={moment.href}>
                                          <span className="diary-moments-label">{copy.momentIn}</span> {moment.lessonId} · {moment.section}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                );
                              })()}
                              <ol className="diary-module-lessons">
                                {related.map((lesson) => (
                                  <li key={lesson.id}>
                                    <Link href={lessonPath(locale, lesson.slug)}>
                                      <span className="diary-module-lesson-number">{lesson.id}</span>
                                      <span className="diary-module-lesson-title">{lesson.title}</span>
                                      <span className="diary-module-lesson-minutes">
                                        {lesson.minutes} {copy.minutesLabel}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ol>
                              <Link href={lessonPath(locale, related[0].slug)} className="diary-module-start">
                                {copy.moduleStart} {storyModule.number} <span aria-hidden="true">→</span>
                              </Link>
                            </aside>
                          ) : null}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <p className="diary-pending">
                    <span className="lesson-source-dot" aria-hidden="true" />
                    {copy.diaryPending}
                  </p>
                )}
              </section>
            );
          })}

          <section className="diary-end" aria-labelledby="del-diario-al-curso">
            <h2 id="del-diario-al-curso" className="diary-end-title">
              {copy.diaryEndTitle}
            </h2>
            <p className="diary-end-text">{copy.diaryEndText}</p>
            <div className="diary-actions">
              <Link href={firstLessonHref} className="course-start-button">
                {copy.diaryStartCourse} <span aria-hidden="true">→</span>
              </Link>
              <Link href={syllabusHref} className="diary-secondary">
                {copy.diarySeeSyllabus}
              </Link>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}
