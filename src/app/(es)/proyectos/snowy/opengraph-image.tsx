import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "es" as const;

export const alt = getCopy(locale).pages.snowy.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Snowy",
    tagline:
      "Plataforma de inteligencia meteorológica: pronóstico multimodelo, radar y asistente con IA.",
    stats: [
      ["impresiones", "16,8 M en 90 días"],
      ["clics", "257.346"],
      ["stack", "Next.js · NestJS"],
    ],
  });
}
