import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { ExperienceView } from "@/views/ExperienceView";

const locale = "es" as const;
const copy = getCopy(locale).pages.experience;

export const metadata: Metadata = createMetadata({
  locale,
  route: "experience",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <ExperienceView locale={locale} />;
}
