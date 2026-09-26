import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { SeoServiceView } from "@/views/SeoServiceView";

const locale = "en" as const;
const copy = getCopy(locale).pages.seoService;

export const metadata: Metadata = createMetadata({
  locale,
  route: "seoService",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <SeoServiceView locale={locale} />;
}
