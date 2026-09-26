import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.snowySeo.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Case study · SEO",
    tagline:
      "Snowy's technical SEO: 257,000 clicks from Google in 90 days, with no advertising.",
    stats: [
      ["impressions", "16.8 M"],
      ["clicks", "257,346"],
      ["source", "Search Console"],
    ],
  });
}
