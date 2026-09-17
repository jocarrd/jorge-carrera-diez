import type { Metadata } from "next";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { allPathsFor } from "@/i18n/routes";
import { createPageMetadata } from "@/lib/seo";
import { CourseView } from "@/views/CourseView";

const locale = "en" as const;
const copy = grokBotCourse.copy[locale];

const base = createPageMetadata({
  locale,
  paths: allPathsFor("grokBotCourse"),
  title: copy.seoTitle,
  description: copy.description,
  image: grokBotCourse.cover[locale],
  type: "website",
});

export const metadata: Metadata = {
  ...base,
  alternates: { ...base.alternates, types: { "application/rss+xml": `${allPathsFor("grokBotCourse")[locale]}/feed.xml` } },
};

export default function Page() {
  return <CourseView locale={locale} />;
}
