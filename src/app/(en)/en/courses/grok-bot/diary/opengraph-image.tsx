import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { courseOgSize, renderDiaryOg } from "@/lib/courses/og";

const locale = "en" as const;

export const size = courseOgSize;
export const contentType = "image/png";
export const alt = grokBotCourse.copy[locale].diaryTitle;

export default async function Image() {
  return renderDiaryOg(locale);
}
