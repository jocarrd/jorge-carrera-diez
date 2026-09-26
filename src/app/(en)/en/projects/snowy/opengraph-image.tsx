import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.snowy.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Snowy",
    tagline:
      "Weather intelligence platform: multi-model forecast, radar and an AI assistant.",
    stats: [
      ["impressions", "16.8 M in 90 days"],
      ["clicks", "257,346"],
      ["stack", "Next.js · NestJS"],
    ],
  });
}
