import { en } from "@/content/copy/en";
import { es } from "@/content/copy/es";
import type { Locale } from "@/i18n/config";
import type { Copy } from "@/types/content";

const copies: Record<Locale, Copy> = { es, en };

export function getCopy(locale: Locale): Copy {
  return copies[locale];
}

export { site } from "@/content/site";
