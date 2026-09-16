import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getCourse, getStory } from "@/lib/courses/load";

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
          </header>

          {grokBotCourse.parts.map((part) => {
            const day = story.find((d) => d.day === part.number);
            if (!day && part.status !== "processing") return null;
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
                        <div key={segment.module} className="diary-segment">
                          <h3 className="diary-segment-title">
                            {copy.moduleLabel} {storyModule.number} · {storyModule.title[locale]}
                          </h3>
                          <div className="lesson-body" dangerouslySetInnerHTML={{ __html: segment.html }} />
                          <p className="diary-learn">
                            {copy.learnIn}{" "}
                            {related.map((lesson, i) => (
                              <span key={lesson.id}>
                                <Link href={lessonPath(locale, lesson.slug)}>
                                  {lesson.id} {lesson.title}
                                </Link>
                                {i < related.length - 1 ? " · " : ""}
                              </span>
                            ))}
                          </p>
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

          <p className="diary-back">
            <Link href={courseHref} className="course-start-button">
              {copy.start} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </article>
      </Container>
    </main>
  );
}
