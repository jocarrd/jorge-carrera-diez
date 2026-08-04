import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { ContactView } from "@/views/ContactView";

const locale = "es" as const;
const copy = getCopy(locale).pages.contact;

export const metadata: Metadata = createMetadata({
  locale,
  route: "contact",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <ContactView locale={locale} />;
}
