import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { LessonSource } from "@/components/course/CourseStatus";
import {
  LessonTracker,
  NextUp,
  ReadingProgress,
  Syllabus,
} from "@/components/course/CourseClient";
import { LessonDock } from "@/components/course/LessonDock";
import { AuthorSignature } from "@/components/courses/AuthorSignature";
import { ShareButton } from "@/components/course/ShareButton";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import {
  getCourse,
  getLesson,
  neighbours,
  storyForModule,
} from "@/lib/courses/load";
import { dayAnchor } from "./DiaryView";
import { courseClientData } from "./CourseView";

export function LessonView({ locale, slug }: { locale: Locale; slug: string }) {
  const lesson = getLesson(locale, slug);
  if (!lesson) notFound();

  const { copy, clientLessons, clientModules } = courseClientData(locale);
  const { previous, next, index, total } = neighbours(locale, lesson.id);
  const lessonModule = grokBotCourse.modules.find(
    (m) => m.number === lesson.ref.module,
  )!;
  const courseHref = routePath(locale, "grokBotCourse");

  const firstOfModule =
    getCourse(locale).lessons.find((l) => l.ref.module === lesson.ref.module)
      ?.id === lesson.id;
  const story =
    firstOfModule && lesson.ref.module > 0
      ? storyForModule(locale, lesson.ref.module)
      : [];
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
    isPartOf: {
      "@type": "Course",
      name: copy.title,
      url: new URL(courseHref, site.url).toString(),
    },
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
                {lessonModule.number === 0
                  ? copy.introModule
                  : `${copy.moduleLabel} ${lessonModule.number}`}{" "}
                · {lessonModule.title[locale]}
              </span>
            </nav>

            <header className="lesson-header">
              <p className="t-eyebrow">
                <span className="lesson-eyebrow-module">
                  {lessonModule.number === 0
                    ? copy.introModule
                    : `${copy.moduleLabel} ${lessonModule.number}`}{" "}
                  ·{" "}
                </span>
                {copy.lessonLabel} {lesson.id}
              </p>
              <div className="lesson-title-row">
                <h1 className="lesson-title">{lesson.title}</h1>
                <ShareButton
                  url={lessonPath(locale, slug)}
                  title={lesson.title}
                  label={copy.share}
                  copiedLabel={copy.linkCopied}
                  iconOnly
                />
              </div>
              <p className="lesson-description">{lesson.description}</p>
              <div className="lesson-meta-row">
                <ul className="lesson-meta">
                  <li>
                    {lesson.minutes} {copy.minutesLabel}
                  </li>
                  <li>{copy.levels[lesson.level]}</li>
                </ul>
                <LessonSource
                  parts={grokBotCourse.parts}
                  copy={copy}
                  href={`${courseHref}#estado`}
                />
              </div>
            </header>

            {story.length > 0 ? (
              <section className="lesson-story" aria-label={copy.storyLabel}>
                <p className="lesson-story-eyebrow">{copy.storyLabel}</p>
                {story.map((segment, i) => {
                  const first = segment.html.indexOf("</p>") + 4;
                  const second = segment.html.indexOf("</p>", first);
                  const cut = second === -1 ? first : second + 4;
                  const latest = i === story.length - 1;
                  return (
                    <details
                      key={segment.day}
                      name={`historia-${lesson.id}`}
                      open={latest}
                      className="lesson-story-day"
                    >
                      <summary className="lesson-story-day-label">
                        {copy.dayLabel} {segment.day}
                      </summary>
                      <div
                        className="lesson-story-body"
                        dangerouslySetInnerHTML={{
                          __html: segment.html.slice(0, cut),
                        }}
                      />
                      <details className="lesson-story-more">
                        <summary>{copy.storyMore}</summary>
                        <div
                          className="lesson-story-body"
                          dangerouslySetInnerHTML={{
                            __html: segment.html.slice(cut),
                          }}
                        />
                        <Link
                          href={`${diaryHref}#${dayAnchor(locale, segment.day)}`}
                          className="lesson-story-link"
                        >
                          {copy.diaryDayLink} →
                        </Link>
                      </details>
                    </details>
                  );
                })}
              </section>
            ) : null}

            <details className="lesson-objectives">
              <summary className="lesson-objectives-title">
                {copy.objectives}
                <span className="lesson-objectives-count">
                  {lesson.objectives.length}
                </span>
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

            <div
              className="lesson-body"
              dangerouslySetInnerHTML={{ __html: lesson.html }}
            />

            <LessonDock
              courseId={grokBotCourse.id}
              lessonId={lesson.id}
              toc={lesson.toc}
              minutes={lesson.minutes}
              labels={{
                contents: copy.lessonContents,
                minutesLeft: copy.minutesLeft,
                resume: copy.resumeText,
                resumeButton: copy.resumeButton,
                close: copy.close,
                search: copy.searchInCourse,
                searchHref: `${courseHref}#temario`,
              }}
            />

            <footer className="lesson-footer">
              <NextUp
                courseId={grokBotCourse.id}
                lessonId={lesson.id}
                lessonModule={lesson.ref.module}
                courseHref={courseHref}
                copy={copy}
                next={
                  next
                    ? {
                        href: lessonPath(locale, next.slug),
                        title: next.title,
                        description: next.description,
                        minutes: next.minutes,
                        id: next.id,
                        module: next.ref.module,
                        moduleTitle: `${copy.moduleLabel} ${next.ref.module} · ${grokBotCourse.modules.find((m) => m.number === next.ref.module)!.title[locale]}`,
                      }
                    : null
                }
              />
              <div className="lesson-footer-row">
                <LessonTracker
                  courseId={grokBotCourse.id}
                  lessonId={lesson.id}
                  copy={copy}
                />
                {previous ? (
                  <Link
                    href={lessonPath(locale, previous.slug)}
                    className="lesson-previous"
                  >
                    ← {copy.previous}: {previous.title}
                  </Link>
                ) : null}
              </div>
              <aside className="lesson-ask" aria-label={copy.askTitle}>
                <div>
                  <p className="lesson-follow-title">{copy.askTitle}</p>
                  <p className="lesson-follow-text">{copy.askText}</p>
                </div>
                <div className="lesson-ask-actions">
                  <a
                    href={`https://x.com/intent/post?text=${encodeURIComponent(copy.askTweet.replace("{title}", lesson.title))}&url=${encodeURIComponent(new URL(lessonPath(locale, slug), site.url).toString())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-follow-button"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      />
                    </svg>
                    {copy.askButton}
                  </a>
                  <a
                    href={`https://x.com/intent/follow?screen_name=${site.x.split("/").pop()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lesson-follow-secondary"
                  >
                    {copy.followButton}
                  </a>
                </div>
              </aside>
              <AuthorSignature locale={locale} />
            </footer>
          </article>
        </div>
      </Container>
    </main>
  );
}
