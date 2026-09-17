import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";
import { CourseStart } from "@/components/course/CourseClient";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";
import { courseClientData } from "@/views/CourseView";

// El curso cuelga de la sección de agentes como prueba de cómo trabajo, sin
// número propio: la home sigue siendo el currículum. Si quien vuelve ya empezó,
// el botón le lleva a su lección.
export function CoursePreview({ locale }: { locale: Locale }) {
  const { copy, clientLessons } = courseClientData(locale);
  return (
    <Section id="curso">
      <div className="home-course">
        <Link href={routePath(locale, "grokBotCourse")} className="home-course-cover" tabIndex={-1} aria-hidden="true">
          <Image src={grokBotCourse.cover[locale]} alt="" width={1600} height={900} sizes="(min-width: 768px) 420px, 100vw" />
        </Link>
        <div className="home-course-body">
          <p className="t-eyebrow">{copy.eyebrow}</p>
          <h2 className="home-course-title">
            <Link href={routePath(locale, "grokBotCourse")}>{copy.title}</Link>
          </h2>
          <p className="home-course-text">{copy.subtitle}</p>
          <CourseStart courseId={grokBotCourse.id} lessons={clientLessons} copy={copy} />
          <p className="course-diary-link">
            <Link href={routePath(locale, "grokBotDiary")}>{copy.diaryLink} →</Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
