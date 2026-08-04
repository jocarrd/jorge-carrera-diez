import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { ProjectsView } from "@/views/ProjectsView";

const locale = "en" as const;
const copy = getCopy(locale).pages.projects;

export const metadata: Metadata = createMetadata({
  locale,
  route: "projects",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <ProjectsView locale={locale} />;
}
