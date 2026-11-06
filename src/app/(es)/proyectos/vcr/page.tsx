import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { VcrView } from "@/views/VcrView";

const locale = "es" as const;
const copy = getCopy(locale).pages.vcr;

export const metadata: Metadata = createMetadata({
  locale,
  route: "vcr",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <VcrView locale={locale} />;
}
