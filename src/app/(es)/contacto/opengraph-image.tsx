import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.contact.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Contacto",
    tagline: getCopy(locale).pages.contact.lead,
    stats: [
      ["Experiencia", "5 años en producción"],
      ["Alcance", "14,7 M de impresiones"],
      ["Dónde", "Remoto · España"],
    ],
  });
}
