import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { courseOgSize, renderLessonOg } from "@/lib/courses/og";

const locale = "en" as const;

export const size = courseOgSize;
export const contentType = "image/png";
export const alt = grokBotCourse.copy[locale].title;

export function generateStaticParams() {
  return grokBotCourse.lessons.map((lesson) => ({ slug: lesson.slug[locale] }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderLessonOg(locale, slug);
}
