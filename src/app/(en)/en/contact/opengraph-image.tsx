import { getCopy } from "@/content";
import { ogContentType, ogSize, renderOpenGraphImage } from "@/lib/og-image";

const locale = "en" as const;

export const alt = getCopy(locale).pages.contact.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOpenGraphImage(locale, {
    eyebrow: "Contact",
    tagline: getCopy(locale).pages.contact.lead,
    stats: [
      ["Experience", "5 years in production"],
      ["Reach", "14.7 M impressions"],
      ["Where", "Remote · Spain"],
    ],
  });
}
