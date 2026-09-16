import type { Metadata } from "next";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { lessonPath } from "@/i18n/routes";
import { getLesson } from "@/lib/courses/load";
import { createPageMetadata } from "@/lib/seo";
import { LessonView } from "@/views/LessonView";

const locale = "es" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return grokBotCourse.lessons.map((lesson) => ({ slug: lesson.slug[locale] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(locale, slug);
  if (!lesson) return {};
  return createPageMetadata({
    locale,
    paths: { es: lessonPath("es", lesson.ref.slug.es), en: lessonPath("en", lesson.ref.slug.en) },
    title: `${lesson.title} · ${grokBotCourse.copy[locale].title}`,
    description: lesson.description,
    image: grokBotCourse.cover[locale],
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LessonView locale={locale} slug={slug} />;
}
