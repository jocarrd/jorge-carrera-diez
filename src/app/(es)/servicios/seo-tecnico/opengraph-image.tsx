import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.seoService.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Consultor SEO técnico",
    tagline:
      "Auditoría SEO técnica e implementación, lista para Google y para los buscadores con IA.",
    stats: [
      ["en Snowy", "16,8 M impresiones"],
      ["clics", "257.346 en 90 días"],
      ["especialidad", "React · Next.js"],
    ],
  });
}
