import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { HomeView } from "@/views/HomeView";

const locale = "en" as const;

export const metadata: Metadata = createMetadata({ locale, route: "home" });

export default function Page() {
  return <HomeView locale={locale} />;
}
