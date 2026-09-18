import Link from "next/link";
import { Container } from "@/components/ui";
import { glossary } from "@/content/courses/grok-bot/glossary";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { AuthorSignature } from "@/components/courses/AuthorSignature";

export function GlossaryView({ locale }: { locale: Locale }) {
  const copy = grokBotCourse.copy[locale];
  const courseHref = routePath(locale, "grokBotCourse");
  const entries = [...glossary].sort((a, b) =>
    a.term[locale].localeCompare(b.term[locale], locale),
  );

  return (
    <main className="diary-page">
      <Container>
        <article className="diary-article">
          <header className="diary-hero">
            <p className="t-eyebrow">
              <Link href={courseHref}>{copy.title}</Link>
            </p>
            <h1 className="lesson-title">{copy.glossaryTitle}</h1>
            <p className="lesson-description">{copy.glossaryIntro}</p>
          </header>
          <dl className="glossary-list">
            {entries.map((entry) => {
              const ref = grokBotCourse.lessons.find(
                (l) => l.id === entry.lesson,
              )!;
              return (
                <div key={entry.id} id={entry.id} className="glossary-entry">
                  <dt>{entry.term[locale]}</dt>
                  <dd>
                    <p>{entry.definition[locale]}</p>
                    <Link
                      href={lessonPath(locale, ref.slug[locale])}
                      className="glossary-lesson"
                    >
                      {copy.glossaryLearn} {entry.lesson} →
                    </Link>
                  </dd>
                </div>
              );
            })}
          </dl>
          <p className="diary-actions">
            <Link href={courseHref} className="diary-secondary">
              ← {copy.backToCourse}
            </Link>
          </p>

          <AuthorSignature locale={locale} />
        </article>
      </Container>
    </main>
  );
}
