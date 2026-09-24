import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { ServicesView } from "@/views/ServicesView";

const locale = "en" as const;
const copy = getCopy(locale).pages.services;

export const metadata: Metadata = createMetadata({
  locale,
  route: "services",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <ServicesView locale={locale} />;
}
