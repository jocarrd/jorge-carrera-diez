import type { Metadata } from "next";
import { getCopy, organizations, site } from "@/content";
import type { Locale } from "@/i18n/config";
import { defaultLocale, htmlLang, openGraphLocale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";
import { allPathsFor, routePath } from "@/i18n/routes";

type SeoInput = {
  locale: Locale;
  route: RouteKey;
  title?: string;
  description?: string;
};

function absolute(path: string) {
  return new URL(path, site.url).toString();
}

export function createMetadata({ locale, route, title, description }: SeoInput): Metadata {
  const copy = getCopy(locale);
  const url = absolute(routePath(locale, route));
  const resolvedTitle = title ? `${title} | ${site.name}` : copy.meta.siteTitle;
  const resolvedDescription = description ?? copy.meta.description;
  const translations = allPathsFor(route);

  return {
    metadataBase: new URL(site.url),
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url,
      languages: {
        es: absolute(translations.es),
        en: absolute(translations.en),
        "x-default": absolute(translations[defaultLocale]),
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: site.name,
      locale: openGraphLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
    },
    icons: {
      icon: "/icon.svg",
    },
  };
}

export function personJsonLd(locale: Locale) {
  const copy = getCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    url: absolute(routePath(locale, "home")),
    image: absolute(site.photo),
    email: site.email,
    jobTitle: copy.meta.jobTitle,
    description: copy.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Logroño",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    worksFor: [organizations.capgemini, organizations.eqx].map((organization) => ({
      "@type": "Organization",
      name: organization.name,
      url: organization.url,
    })),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.university,
      url: site.universityUrl,
    },
    memberOf: {
      "@type": "Organization",
      name: site.college,
      url: site.collegeUrl,
    },
    sameAs: [site.linkedin, site.github, site.snowy, site.lariojameteo],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "Full Stack Development",
      "Product Engineering",
      "SEO",
      "Generative AI",
      "Meteorological platforms",
      "Artificial Intelligence",
    ],
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: absolute(routePath(locale, "home")),
    inLanguage: htmlLang[locale],
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#person` },
  };
}
