import type { Metadata } from "next";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { allPathsFor } from "@/i18n/routes";
import { createPageMetadata } from "@/lib/seo";
import { DiaryView } from "@/views/DiaryView";

const locale = "en" as const;
const copy = grokBotCourse.copy[locale];

export const metadata: Metadata = createPageMetadata({
  locale,
  paths: allPathsFor("grokBotDiary"),
  title: `${copy.diaryTitle} · Grok Bot`,
  description: copy.diaryDescription,
  image: grokBotCourse.cover[locale],
  type: "article",
});

export default function Page() {
  return <DiaryView locale={locale} />;
}
