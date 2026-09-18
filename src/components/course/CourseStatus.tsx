import type { CourseCopy, LivePart } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";

function formatDay(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

function StatusIcon({ status }: { status: LivePart["status"] }) {
  if (status === "done") {
    return (
      <span className="course-status-icon is-done" aria-hidden="true">
        <svg viewBox="0 0 12 12" width="11" height="11">
          <path
            d="M2.5 6.2l2.3 2.3 4.7-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (status === "processing")
    return (
      <span className="course-status-icon is-processing" aria-hidden="true" />
    );
  return <span className="course-status-icon is-upcoming" aria-hidden="true" />;
}

export function CourseStatus({
  locale,
  parts,
  copy,
  diaryHref,
}: {
  locale: Locale;
  parts: LivePart[];
  copy: CourseCopy;
  diaryHref: string;
}) {
  const label = {
    done: copy.statusDone,
    processing: copy.statusProcessing,
    upcoming: copy.statusUpcoming,
  };
  return (
    <section
      id="estado"
      className="course-status"
      aria-labelledby="estado-titulo"
    >
      <h2 id="estado-titulo" className="course-status-title">
        {copy.statusTitle}
      </h2>
      <p className="course-status-intro">{copy.statusIntro}</p>
      <ol className="course-status-parts">
        {parts.map((part) => (
          <li
            key={part.number}
            className={`course-status-part is-${part.status}`}
          >
            <div className="course-status-head">
              <StatusIcon status={part.status} />
              <span className="course-status-number">
                {copy.partLabel} {part.number}
              </span>
              <span className="course-status-date">
                {formatDay(locale, part.date)}
              </span>
            </div>
            <p className="course-status-label">{label[part.status]}</p>
            {part.status === "processing" ? (
              <span className="course-status-loader" aria-hidden="true" />
            ) : null}
            <p className="course-status-topics">
              {part.topics[locale].join(" · ")}
            </p>
            {part.status === "done" ? (
              <a
                href={`${diaryHref}#${locale === "es" ? "dia" : "day"}-${part.number}`}
                className="course-status-story"
              >
                {copy.partStoryLink} →
              </a>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function LessonSource({
  parts,
  copy,
  href,
}: {
  parts: LivePart[];
  copy: CourseCopy;
  href: string;
}) {
  const done = parts.filter((p) => p.status === "done").length;
  const pending = parts.some((p) => p.status !== "done");
  if (!pending) return null;
  const text = copy.lessonSource
    .replace("{done}", String(done))
    .replace("{total}", String(parts.length));
  return (
    <a href={href} className="lesson-source">
      <span className="lesson-source-dot" aria-hidden="true" />
      {text}
      <span className="lesson-source-more">{copy.lessonSourceMore} →</span>
    </a>
  );
}
