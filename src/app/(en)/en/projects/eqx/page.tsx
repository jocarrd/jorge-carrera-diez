import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { EqxView } from "@/views/EqxView";

const locale = "en" as const;
const copy = getCopy(locale).pages.eqx;

export const metadata: Metadata = createMetadata({
  locale,
  route: "eqx",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <EqxView locale={locale} />;
}
