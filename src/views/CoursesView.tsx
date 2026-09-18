import Link from "next/link";
import {
  ButtonLink,
  DeviceFrame,
  MetricCard,
  Section,
  SectionHeader,
} from "@/components/ui";
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

  const fill = (text: string) =>
    text
      .replace("{lessons}", String(lessons.length))
      .replace("{modules}", String(modules.length));

  const meta = fill(copy.listMeta);

  return (
    <main>
      <Section>
        <div className="course-intro">
          <div className="course-intro-head">
            <h1 className="t-section">{copy.heading}</h1>
            <p className="course-lead">{copy.text[0]}</p>
          </div>
          <div className="course-intro-rest">
            {copy.text.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="course-support">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="course-devices">
            <DeviceFrame
              src="/images/cursos/curso-modulos-movil.webp"
              alt={copy.deviceAlts[0]}
              priority
            />
            <DeviceFrame
              src="/images/cursos/curso-leccion-movil.webp"
              alt={copy.deviceAlts[1]}
            />
          </div>
        </div>
      </Section>

      <CourseFlight title={copy.pipelineTitle} steps={copy.pipeline} />

      <Section>
        <SectionHeader title={copy.resultTitle} text={copy.resultText} />
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-3">
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
        </div>
      </Section>

      <Section className="section-band">
        <SectionHeader title={copy.listTitle} />
        <ul className="course-list mt-10">
          <li>
            <Link
              href={routePath(locale, "grokBotCourse")}
              className="course-row"
            >
              <span className="course-row-main">
                <span className="course-row-title">{courseCopy.title}</span>
                <span className="course-row-text">{courseCopy.subtitle}</span>
              </span>
              <span className="course-row-meta">{meta}</span>
            </Link>
          </li>
        </ul>
        <div className="mt-10 max-w-[46rem]">
          <h3 className="t-block">{copy.nextTitle}</h3>
          <p className="mt-3 text-[1.0625rem] leading-[1.6] text-[var(--muted)]">
            {copy.nextText}
          </p>
          <div className="mt-7">
            <ButtonLink href={site.x}>{copy.nextButton}</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
