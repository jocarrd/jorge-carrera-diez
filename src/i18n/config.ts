export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const htmlLang: Record<Locale, string> = {
  es: "es",
  en: "en",
};

export const openGraphLocale: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
};

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
