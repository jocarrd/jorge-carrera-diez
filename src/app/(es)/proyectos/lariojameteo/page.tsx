import type { Metadata } from "next";
import { getCopy } from "@/content";
import { createMetadata } from "@/lib/seo";
import { LariojaMeteoView } from "@/views/LariojaMeteoView";

const locale = "es" as const;
const copy = getCopy(locale).pages.lariojameteo;

export const metadata: Metadata = createMetadata({
  locale,
  route: "lariojameteo",
  title: copy.title,
  description: copy.description,
});

export default function Page() {
  return <LariojaMeteoView locale={locale} />;
}
