import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { CoursesView } from "@/views/CoursesView";

const locale = "en" as const;
const copy = getCopy(locale).pages.courses;

export const metadata: Metadata = createMetadata({
  locale,
  route: "courses",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <CoursesView locale={locale} />;
}
