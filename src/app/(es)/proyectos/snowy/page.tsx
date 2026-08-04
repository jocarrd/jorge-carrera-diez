import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { SnowyView } from "@/views/SnowyView";

const locale = "es" as const;
const copy = getCopy(locale).pages.snowy;

export const metadata: Metadata = createMetadata({
  locale,
  route: "snowy",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <SnowyView locale={locale} />;
}
