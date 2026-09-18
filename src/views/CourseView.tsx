import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Container, Reveal, RevealGroup } from "@/components/ui";
import { CourseStatus } from "@/components/course/CourseStatus";
import { GrokBotMark } from "@/components/course/GrokBotMark";
import {
  CourseStart,
  Syllabus,
  type ClientLesson,
  type ClientModule,
} from "@/components/course/CourseClient";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getCourse, getLesson } from "@/lib/courses/load";
import {
  CourseSearch,
  type SearchEntry,
} from "@/components/course/CourseSearch";
import { glossary } from "@/content/courses/grok-bot/glossary";
import { WhatsNew } from "@/components/course/WhatsNew";

function searchEntries(locale: Locale): SearchEntry[] {
  const copy = grokBotCourse.copy[locale];
  const entries: SearchEntry[] = [];
  for (const summary of getCourse(locale).lessons) {
    const lesson = getLesson(locale, summary.slug)!;
    const href = lessonPath(locale, summary.slug);
    const label = `${copy.lessonLabel} ${lesson.id}`;
    entries.push({
      kind: "lesson",
      title: lesson.title,
      context: label,
      href,
      text: lesson.description,
    });

    for (const t of lesson.toc)
      entries.push({
        kind: "section",
        title: t.text,
        context: `${label} · ${lesson.title}`,
        href: `${href}#${t.id}`,
        text: `${lesson.title} ${lesson.description}`,
      });
  }
  for (const g of glossary)
    entries.push({
      kind: "term",
      title: g.term[locale],
      context: copy.glossaryTitle,
      href: `${routePath(locale, "grokBotGlossary")}#${g.id}`,
      text: g.definition[locale],
    });
  return entries;
}

export function courseClientData(locale: Locale) {
  const copy = grokBotCourse.copy[locale];
  const { lessons, modules, totalMinutes } = getCourse(locale);
  const clientLessons: ClientLesson[] = lessons.map((l) => ({
    id: l.id,
    title: l.title,
    href: lessonPath(locale, l.slug),
    minutes: l.minutes,
    module: l.ref.module,
  }));
  const clientModules: ClientModule[] = modules.map((m) => ({
    number: m.number,
    title: m.title[locale],
    level: copy.levels[m.level],
  }));
  return { copy, lessons, clientLessons, clientModules, totalMinutes };
}

function formatDate(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function CourseView({ locale }: { locale: Locale }) {
  const { copy, lessons, clientLessons, clientModules, totalMinutes } =
    courseClientData(locale);
  const hours = Math.round((totalMinutes / 60) * 10) / 10;
  const courseUrl = new URL(
    routePath(locale, "grokBotCourse"),
    site.url,
  ).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: copy.title,
    description: copy.description,
    url: courseUrl,
    inLanguage: locale,
    isAccessibleForFree: true,
    provider: { "@type": "Person", name: site.name, url: site.url },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${totalMinutes}M`,
    },
    hasPart: lessons.map((l) => ({
      "@type": "LearningResource",
      name: l.title,
      url: new URL(lessonPath(locale, l.slug), site.url).toString(),
      educationalLevel: copy.levels[l.level],
      timeRequired: `PT${l.minutes}M`,
    })),
  };

  return (
    <main className="course-page">
      <JsonLd data={jsonLd} />
      <Container>
        <header className="course-hero">
          <p className="course-brand">
            <GrokBotMark
              shape="circle"
              className="course-brand-mark"
              title="Grok Bot"
            />
            <span className="course-brand-text">{copy.aboutProduct}</span>
          </p>
          <p className="t-eyebrow">{copy.eyebrow}</p>
          <h1 className="course-title">{copy.title}</h1>
          <p className="course-subtitle">{copy.subtitle}</p>
          <p className="course-intro">{copy.intro}</p>
          <ul className="course-meta">
            <li>
              {lessons.length} {copy.lessonsLabel}
            </li>
            <li>
              {new Intl.NumberFormat(locale, {
                maximumFractionDigits: 1,
              }).format(hours)}{" "}
              h {copy.readingTime}
            </li>
            <li>
              {copy.updatedLabel} {formatDate(locale, grokBotCourse.updated)}
            </li>
          </ul>
          <CourseStart
            courseId={grokBotCourse.id}
            lessons={clientLessons}
            copy={copy}
          />
          <WhatsNew
            courseId={grokBotCourse.id}
            lessons={lessons.map((l) => ({
              id: l.id,
              title: l.title,
              href: lessonPath(locale, l.slug),
              updated: l.updated,
            }))}
            labels={{
              title: copy.whatsNewTitle,
              added: copy.whatsNewAdded,
              updated: copy.whatsNewUpdated,
            }}
          />
          <p className="course-diary-link">
            <Link href={routePath(locale, "grokBotDiary")}>
              {copy.diaryLink} →
            </Link>
            <Link href={routePath(locale, "grokBotGlossary")}>
              {copy.glossaryLink} →
            </Link>
          </p>
        </header>

        <figure className="course-cover">
          <Image
            src={grokBotCourse.cover[locale]}
            alt={copy.title}
            width={1600}
            height={900}
            priority
            sizes="(min-width: 1120px) 1056px, 100vw"
          />
        </figure>

        <Reveal>
          <section className="course-syllabus" aria-labelledby="temario">
            <h2 id="temario" className="t-block">
              {copy.syllabus}
            </h2>
            <CourseSearch
              entries={searchEntries(locale)}
              labels={{
                placeholder: copy.searchPlaceholder,
                empty: copy.searchEmpty,
                kinds: {
                  lesson: copy.lessonLabel,
                  section: copy.searchSection,
                  term: copy.searchTerm,
                },
              }}
            />
            <Syllabus
              courseId={grokBotCourse.id}
              modules={clientModules}
              lessons={clientLessons}
              copy={copy}
            />
          </section>
        </Reveal>

        <CourseStatus
          locale={locale}
          parts={grokBotCourse.parts}
          copy={copy}
          diaryHref={routePath(locale, "grokBotDiary")}
        />

        <section className="course-features" aria-labelledby="como-funciona">
          <Reveal>
            <h2 id="como-funciona" className="t-block">
              {copy.featuresTitle}
            </h2>
          </Reveal>
          <RevealGroup
            as="ul"
            itemAs="li"
            className="course-features-list"
            step={60}
            delay={60}
          >
            {copy.features.map((feature) => (
              <div key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <Reveal>
          <section className="course-author" aria-labelledby="autor">
            <Image
              src={site.photo}
              alt={site.name}
              width={96}
              height={96}
              className="course-author-photo"
            />
            <div>
              <h2 id="autor" className="course-author-title">
                {copy.authorTitle}
              </h2>
              <p className="course-author-text">{copy.authorText}</p>
              <p className="course-author-links">
                <a href={site.x} target="_blank" rel="noopener noreferrer">
                  {copy.authorX} →
                </a>
                <Link href={routePath(locale, "experience")}>
                  {copy.authorWeb} →
                </Link>
                <Link href={routePath(locale, "contact")}>
                  {copy.authorContact} →
                </Link>
              </p>
            </div>
          </section>
        </Reveal>

        <p className="course-unofficial">
          {copy.unofficial}{" "}
          <a
            href={grokBotCourse.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.x.ai
          </a>
        </p>
      </Container>
    </main>
  );
}
