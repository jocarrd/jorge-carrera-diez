import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { CvView } from "@/views/CvView";

const locale = "es" as const;
const copy = getCopy(locale).pages.cv;

export const metadata: Metadata = createMetadata({
  locale,
  route: "cv",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <CvView locale={locale} />;
}
