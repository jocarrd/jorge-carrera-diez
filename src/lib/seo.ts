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

export function createMetadata({
  locale,
  route,
  title,
  description,
}: SeoInput): Metadata {
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

export function createPageMetadata({
  locale,
  paths,
  title,
  description,
  image,
  type = "article",
}: {
  locale: Locale;
  paths: Record<Locale, string>;
  title: string;
  description: string;
  image?: string;
  type?: "article" | "website";
}): Metadata {
  const url = absolute(paths[locale]);
  const resolvedTitle = `${title} | ${site.name}`;
  return {
    metadataBase: new URL(site.url),
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: absolute(paths.es),
        en: absolute(paths.en),
        "x-default": absolute(paths[defaultLocale]),
      },
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: openGraphLocale[locale],
      type,
      ...(image
        ? { images: [{ url: absolute(image), width: 1600, height: 900 }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      ...(image ? { images: [absolute(image)] } : {}),
    },
    icons: { icon: "/icon.svg" },
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
    worksFor: [organizations.capgemini, organizations.eqx].map(
      (organization) => ({
        "@type": "Organization",
        name: organization.name,
        url: organization.url,
      }),
    ),
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
    sameAs: [
      site.linkedin,
      site.github,
      site.x,
      site.malt,
      site.snowyAuthor,
      site.lariojameteo,
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    makesOffer: freelanceOffers(locale),
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

function freelanceOffers(locale: Locale) {
  const es = locale === "es";

  const services = [
    {
      name: es
        ? "Relevo técnico de productos digitales"
        : "Technical handover of digital products",
      description: es
        ? "Asumir el desarrollo de un producto que ya está en producción cuando su desarrollador anterior lo deja, sin interrumpir la operativa."
        : "Taking over a product already in production when its previous developer leaves, without interrupting operations.",
    },
    {
      name: es
        ? "Desarrollo de producto web con React y Next.js"
        : "Web product development with React and Next.js",
      description: es
        ? "Aplicaciones con React, Next.js, TypeScript y NestJS, del frontend al backend y la infraestructura."
        : "Applications with React, Next.js, TypeScript and NestJS, from frontend to backend and infrastructure.",
    },
    {
      name: es
        ? "Arquitectura frontend y acompañamiento técnico"
        : "Frontend architecture and technical advisory",
      description: es
        ? "Decisiones de arquitectura, estándares de desarrollo y revisión de código para equipos que ya están construyendo."
        : "Architecture decisions, development standards and code review for teams already building.",
    },
    {
      name: es
        ? "Automatización con agentes e IA generativa"
        : "Automation with agents and generative AI",
      description: es
        ? "Agentes y modelos integrados en flujos que ya están en producción, con sus límites, su coste y su mantenimiento."
        : "Agents and models integrated into flows already in production, with their limits, cost and maintenance.",
    },
  ];

  return services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${site.url}/#person` },
      areaServed: {
        "@type": "Place",
        name: es ? "Remoto, horario europeo" : "Remote, European hours",
      },
    },
  }));
}

export function servicesPageJsonLd(locale: Locale) {
  const copy = getCopy(locale);
  const page = copy.pages.services;
  const url = absolute(routePath(locale, "services"));

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#page`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: htmlLang[locale],
    about: { "@id": `${site.url}/#person` },
    mainEntity: {
      "@type": "OfferCatalog",
      name: page.title,
      itemListElement: freelanceOffers(locale),
      provider: { "@id": `${site.url}/#person` },
    },
  };
}

export function faqJsonLd(locale: Locale) {
  const page = getCopy(locale).pages.services;
  const url = absolute(routePath(locale, "services"));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: htmlLang[locale],
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function contactPageJsonLd(locale: Locale) {
  const copy = getCopy(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absolute(routePath(locale, "contact"))}#contact`,
    url: absolute(routePath(locale, "contact")),
    name: copy.pages.contact.title,
    description: copy.pages.contact.description,
    inLanguage: htmlLang[locale],
    about: { "@id": `${site.url}/#person` },
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      email: site.email,
      makesOffer: freelanceOffers(locale),
    },
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
