import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { LessonSource } from "@/components/course/CourseStatus";
import { LessonTracker, ReadingProgress, Syllabus } from "@/components/course/CourseClient";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getLesson, neighbours } from "@/lib/courses/load";
import { courseClientData } from "./CourseView";

export function LessonView({ locale, slug }: { locale: Locale; slug: string }) {
  const lesson = getLesson(locale, slug);
  if (!lesson) notFound();

  const { copy, clientLessons, clientModules } = courseClientData(locale);
  const { previous, next, index, total } = neighbours(locale, lesson.id);
  const lessonModule = grokBotCourse.modules.find((m) => m.number === lesson.ref.module)!;
  const courseHref = routePath(locale, "grokBotCourse");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.description,
    inLanguage: locale,
    isAccessibleForFree: true,
    educationalLevel: copy.levels[lesson.level],
    timeRequired: `PT${lesson.minutes}M`,
    dateModified: lesson.updated,
    url: new URL(lessonPath(locale, slug), site.url).toString(),
    isPartOf: { "@type": "Course", name: copy.title, url: new URL(courseHref, site.url).toString() },
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <main className="lesson-page">
      <JsonLd data={jsonLd} />
      <ReadingProgress />
      <Container>
        <div className="lesson-layout">
          <aside className="lesson-aside">
            <details className="lesson-aside-details">
              <summary>
                {copy.openSyllabus}
                <span>
                  {index + 1}/{total}
                </span>
              </summary>
              <Syllabus
                courseId={grokBotCourse.id}
                modules={clientModules}
                lessons={clientLessons}
                copy={copy}
                currentId={lesson.id}
                compact
              />
            </details>
            <div className="lesson-aside-desktop">
              <Link href={courseHref} className="lesson-aside-course">
                ← {copy.title}
              </Link>
              <Syllabus
                courseId={grokBotCourse.id}
                modules={clientModules}
                lessons={clientLessons}
                copy={copy}
                currentId={lesson.id}
                compact
              />
            </div>
          </aside>

          <article className="lesson-article">
            <nav className="lesson-breadcrumb" aria-label="breadcrumb">
              <Link href={courseHref}>{copy.title}</Link>
              <span aria-hidden="true">/</span>
              <span>
                {copy.moduleLabel} {lessonModule.number} · {lessonModule.title[locale]}
              </span>
            </nav>

            <header className="lesson-header">
              <p className="t-eyebrow">
                {copy.lessonLabel} {lesson.id}
              </p>
              <h1 className="lesson-title">{lesson.title}</h1>
              <p className="lesson-description">{lesson.description}</p>
              <ul className="lesson-meta">
                <li>
                  {lesson.minutes} {copy.minutesLabel}
                </li>
                <li>{copy.levels[lesson.level]}</li>
              </ul>
              <LessonSource parts={grokBotCourse.parts} copy={copy} href={`${courseHref}#estado`} />
            </header>

            <section className="lesson-objectives" aria-label={copy.objectives}>
              <p className="lesson-objectives-title">{copy.objectives}</p>
              <ul>
                {lesson.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>

            {lesson.toc.length > 2 ? (
              <nav className="lesson-toc" aria-label="toc">
                <ol>
                  {lesson.toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`}>{t.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="lesson-body" dangerouslySetInnerHTML={{ __html: lesson.html }} />

            <footer className="lesson-footer">
              <LessonTracker courseId={grokBotCourse.id} lessonId={lesson.id} copy={copy} />
              <div className="lesson-pager">
                {previous ? (
                  <Link href={lessonPath(locale, previous.slug)} className="lesson-pager-link">
                    <span className="lesson-pager-label">← {copy.previous}</span>
                    <span className="lesson-pager-title">{previous.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={lessonPath(locale, next.slug)} className="lesson-pager-link lesson-pager-link--next">
                    <span className="lesson-pager-label">{copy.next} →</span>
                    <span className="lesson-pager-title">{next.title}</span>
                  </Link>
                ) : (
                  <Link href={courseHref} className="lesson-pager-link lesson-pager-link--next">
                    <span className="lesson-pager-label">{copy.finish}</span>
                    <span className="lesson-pager-title">{copy.backToCourse}</span>
                  </Link>
                )}
              </div>
            </footer>
          </article>
        </div>
      </Container>
    </main>
  );
}
