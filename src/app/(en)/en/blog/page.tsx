import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { BlogView } from "@/views/BlogView";

const locale = "en" as const;
const copy = getCopy(locale).pages.blog;

export const metadata: Metadata = createMetadata({
  locale,
  route: "blog",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <BlogView locale={locale} />;
}
