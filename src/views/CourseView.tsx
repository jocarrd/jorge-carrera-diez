import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui";
import { CourseStatus } from "@/components/course/CourseStatus";
import { CourseStart, Syllabus, type ClientLesson, type ClientModule } from "@/components/course/CourseClient";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { site } from "@/content";
import type { Locale } from "@/i18n/config";
import { lessonPath, routePath } from "@/i18n/routes";
import { getCourse } from "@/lib/courses/load";

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
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso),
  );
}

export function CourseView({ locale }: { locale: Locale }) {
  const { copy, lessons, clientLessons, clientModules, totalMinutes } = courseClientData(locale);
  const hours = Math.round((totalMinutes / 60) * 10) / 10;
  const courseUrl = new URL(routePath(locale, "grokBotCourse"), site.url).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: copy.title,
    description: copy.description,
    url: courseUrl,
    inLanguage: locale,
    isAccessibleForFree: true,
    provider: { "@type": "Person", name: site.name, url: site.url },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `PT${totalMinutes}M` },
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
          <p className="t-eyebrow">{copy.courseBreadcrumb}</p>
          <h1 className="course-title">{copy.title}</h1>
          <p className="course-intro">{copy.intro}</p>
          <ul className="course-meta">
            <li>
              {lessons.length} {copy.lessonsLabel}
            </li>
            <li>
              {new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(hours)} h {copy.readingTime}
            </li>
            <li>
              {copy.updatedLabel} {formatDate(locale, grokBotCourse.updated)}
            </li>
          </ul>
          <CourseStart courseId={grokBotCourse.id} lessons={clientLessons} copy={copy} />
        </header>

        <CourseStatus locale={locale} parts={grokBotCourse.parts} copy={copy} />

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

        <section className="course-syllabus" aria-labelledby="temario">
          <h2 id="temario" className="t-block">
            {copy.syllabus}
          </h2>
          <Syllabus courseId={grokBotCourse.id} modules={clientModules} lessons={clientLessons} copy={copy} />
        </section>

        <p className="course-unofficial">
          {copy.unofficial}{" "}
          <a href={grokBotCourse.docsUrl} target="_blank" rel="noopener noreferrer">
            docs.x.ai
          </a>
        </p>
      </Container>
    </main>
  );
}
