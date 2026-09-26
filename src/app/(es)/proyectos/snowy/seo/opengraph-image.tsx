import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.snowySeo.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Caso técnico · SEO",
    tagline:
      "SEO técnico de Snowy: 257.000 clics desde Google en 90 días, sin publicidad.",
    stats: [
      ["impresiones", "16,8 M"],
      ["clics", "257.346"],
      ["fuente", "Search Console"],
    ],
  });
}
