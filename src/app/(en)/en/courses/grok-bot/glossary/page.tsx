import type { Metadata } from "next";
import { grokBotCourse } from "@/content/courses/grok-bot/meta";
import { allPathsFor } from "@/i18n/routes";
import { createPageMetadata } from "@/lib/seo";
import { GlossaryView } from "@/views/GlossaryView";

const locale = "en" as const;
const copy = grokBotCourse.copy[locale];

export const metadata: Metadata = createPageMetadata({
  locale,
  paths: allPathsFor("grokBotGlossary"),
  title: `${copy.glossaryTitle} · Grok Bot`,
  description: copy.glossaryDescription,
  image: grokBotCourse.cover[locale],
});

export default function Page() {
  return <GlossaryView locale={locale} />;
}
