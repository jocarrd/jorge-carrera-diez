import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.vcr.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "VCr · Switzerland",
    tagline:
      "The official website of the Value Creation Rating, which scores 1,000 listed firms.",
  });
}
