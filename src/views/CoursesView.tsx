import Link from "next/link";
import {
  ButtonLink,
  MetricCard,
  RevealChildren,
  Section,
  SectionHeader,
} from "@/components/ui";
import { AuthorSignature } from "@/components/courses/AuthorSignature";
import { CourseFlight } from "@/components/courses/CourseFlight";
import { getCopy, site } from "@/content";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { getCourse } from "@/lib/courses/load";

export function CoursesView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).pages.courses;
  const { lessons, modules } = getCourse(locale);
  const courseCopy = grokBotCourse.copy[locale];
  const cursoHref = routePath(locale, "grokBotCourse");

  const fill = (text: string) =>
    text
      .replace("{courses}", "1")
      .replace("{lessons}", String(lessons.length))
      .replace("{modules}", String(modules.length));

  return (
    <main>
      <Section>
        <div className="courses-hero">
          <h1 className="t-section">{copy.heading}</h1>
          <p className="course-lead">{copy.collectionLead}</p>
          <p className="courses-hero-meta">{fill(copy.collectionMeta)}</p>
        </div>

        <article className="course-featured">
          <p className="course-featured-eyebrow">{copy.featuredEyebrow}</p>
          <h2 className="course-featured-title">
            <Link href={cursoHref}>{courseCopy.title}</Link>
          </h2>
          <p className="course-featured-text">{courseCopy.subtitle}</p>

          <p className="course-featured-syllabus">{copy.featuredSyllabus}</p>
          <RevealChildren as="ol" className="course-featured-modules" step={55}>
            {modules.map((module) => (
              <li key={module.number}>
                <span className="course-featured-module-number">
                  {String(module.number).padStart(2, "0")}
                </span>
                <span className="course-featured-module-title">
                  {module.title[locale]}
                </span>
                <span className="course-featured-module-count">
                  {module.lessons.length}
                </span>
              </li>
            ))}
          </RevealChildren>

          <div className="course-featured-cta">
            <ButtonLink href={cursoHref}>{copy.featuredCta}</ButtonLink>
          </div>
        </article>
      </Section>

      <CourseFlight title={copy.pipelineTitle} steps={copy.pipeline} />

      <Section>
        <SectionHeader title={copy.resultTitle} text={copy.resultText} />
        <RevealChildren className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-3">
          {copy.resultMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              metric={{
                ...metric,
                value: fill(metric.value),
                detail: metric.detail ? fill(metric.detail) : undefined,
              }}
            />
          ))}
        </RevealChildren>
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.whyTitle} />
        <div className="course-why mt-10">
          {copy.text.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-9">
          <ButtonLink href={site.x}>{copy.nextButton}</ButtonLink>
        </div>

        <AuthorSignature locale={locale} />
      </Section>
    </main>
  );
}
