import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { SnowySeoView } from "@/views/SnowySeoView";

const locale = "es" as const;
const copy = getCopy(locale).pages.snowySeo;

export const metadata: Metadata = createMetadata({
  locale,
  route: "snowySeo",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <SnowySeoView locale={locale} />;
}
