import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.vcr.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "VCr · Suiza",
    tagline:
      "La web oficial del Value Creation Rating, que evalúa a 1.000 empresas cotizadas.",
  });
}
