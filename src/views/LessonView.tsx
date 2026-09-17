import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { LessonSource } from "@/components/course/CourseStatus";
import { LessonTracker, ReadingProgress, Syllabus } from "@/components/course/CourseClient";
import { LessonDock } from "@/components/course/LessonDock";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getCourse, getLesson, neighbours, storyForModule } from "@/lib/courses/load";
import { dayAnchor } from "./DiaryView";
import { courseClientData } from "./CourseView";

export function LessonView({ locale, slug }: { locale: Locale; slug: string }) {
  const lesson = getLesson(locale, slug);
  if (!lesson) notFound();

  const { copy, clientLessons, clientModules } = courseClientData(locale);
  const { previous, next, index, total } = neighbours(locale, lesson.id);
  const lessonModule = grokBotCourse.modules.find((m) => m.number === lesson.ref.module)!;
  const courseHref = routePath(locale, "grokBotCourse");
  // El tramo de la historia se cuenta al abrir el módulo, en su primera lección.
  const firstOfModule = getCourse(locale).lessons.find((l) => l.ref.module === lesson.ref.module)?.id === lesson.id;
  const story = firstOfModule && lesson.ref.module > 0 ? storyForModule(locale, lesson.ref.module) : [];
  const diaryHref = routePath(locale, "grokBotDiary");

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
                {lessonModule.number === 0 ? copy.introModule : `${copy.moduleLabel} ${lessonModule.number}`} ·{" "}
                {lessonModule.title[locale]}
              </span>
            </nav>

            <header className="lesson-header">
              <p className="t-eyebrow">
                <span className="lesson-eyebrow-module">
                  {lessonModule.number === 0 ? copy.introModule : `${copy.moduleLabel} ${lessonModule.number}`} ·{" "}
                </span>
                {copy.lessonLabel} {lesson.id}
              </p>
              <h1 className="lesson-title">{lesson.title}</h1>
              <p className="lesson-description">{lesson.description}</p>
              <div className="lesson-meta-row">
                <ul className="lesson-meta">
                  <li>
                    {lesson.minutes} {copy.minutesLabel}
                  </li>
                  <li>{copy.levels[lesson.level]}</li>
                </ul>
                <LessonSource parts={grokBotCourse.parts} copy={copy} href={`${courseHref}#estado`} />
              </div>
            </header>

            {story.length > 0 ? (
              <section className="lesson-story" aria-label={copy.storyLabel}>
                <p className="lesson-story-eyebrow">{copy.storyLabel}</p>
                {story.map((segment) => {
                  // Se ve el primer párrafo de cada día y el resto se despliega: con dos
                  // días la historia empujaba la lección varias pantallas hacia abajo.
                  const cut = segment.html.indexOf("</p>") + 4;
                  return (
                    <div key={segment.day} className="lesson-story-day">
                      <p className="lesson-story-day-label">
                        {copy.dayLabel} {segment.day}
                      </p>
                      <div className="lesson-story-body" dangerouslySetInnerHTML={{ __html: segment.html.slice(0, cut) }} />
                      <details className="lesson-story-more">
                        <summary>{copy.storyMore}</summary>
                        <div className="lesson-story-body" dangerouslySetInnerHTML={{ __html: segment.html.slice(cut) }} />
                        <Link href={`${diaryHref}#${dayAnchor(locale, segment.day)}`} className="lesson-story-link">
                          {copy.diaryDayLink} →
                        </Link>
                      </details>
                    </div>
                  );
                })}
              </section>
            ) : null}

            {/* Los objetivos van plegados: en el móvil empujaban la primera línea de la lección fuera de la pantalla. */}
            <details className="lesson-objectives">
              <summary className="lesson-objectives-title">
                {copy.objectives}
                <span className="lesson-objectives-count">{lesson.objectives.length}</span>
              </summary>
              <ul>
                {lesson.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </details>

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

            <LessonDock
              courseId={grokBotCourse.id}
              lessonId={lesson.id}
              toc={lesson.toc}
              minutes={lesson.minutes}
              labels={{ contents: copy.lessonContents, minutesLeft: copy.minutesLeft, resume: copy.resumeText, resumeButton: copy.resumeButton, close: copy.close }}
            />

            <footer className="lesson-footer">
              <LessonTracker courseId={grokBotCourse.id} lessonId={lesson.id} copy={copy} />
              <aside className="lesson-follow" aria-label={copy.followTitle}>
                <div>
                  <p className="lesson-follow-title">{copy.followTitle}</p>
                  <p className="lesson-follow-text">{copy.followText}</p>
                </div>
                <a
                  href={`https://x.com/intent/follow?screen_name=${site.x.split("/").pop()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lesson-follow-button"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                  {copy.followButton}
                </a>
              </aside>
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
