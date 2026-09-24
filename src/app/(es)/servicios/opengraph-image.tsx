import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.services.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Servicios",
    tagline: getCopy(locale).pages.services.lead,
    stats: [
      ["Experiencia", "5 años en producción"],
      ["Alcance", "14,7 M de impresiones"],
      ["Dónde", "Remoto · España"],
    ],
  });
}
