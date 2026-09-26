import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.seoService.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Technical SEO consultant",
    tagline:
      "Technical SEO audit and implementation, ready for Google and for AI search.",
    stats: [
      ["on Snowy", "16.8 M impressions"],
      ["clicks", "257,346 in 90 days"],
      ["speciality", "React · Next.js"],
    ],
  });
}
