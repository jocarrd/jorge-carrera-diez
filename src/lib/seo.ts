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
    sameAs: [site.linkedin, site.github, site.malt, site.snowy, site.lariojameteo],
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

/** Servicios que se pueden contratar. Sin esto un agente lee el perfil como una
 *  biografía y no como alguien a quien se le puede proponer un proyecto. */
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
      name: es ? "Arquitectura frontend y acompañamiento técnico" : "Frontend architecture and technical advisory",
      description: es
        ? "Decisiones de arquitectura, estándares de desarrollo y revisión de código para equipos que ya están construyendo."
        : "Architecture decisions, development standards and code review for teams already building.",
    },
  ];

  return services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${site.url}/#person` },
      areaServed: { "@type": "Place", name: es ? "Remoto, horario europeo" : "Remote, European hours" },
    },
  }));
}

/** La página de contacto es donde se cierra el trato: se declara como tal y se
 *  repiten los servicios para que web y datos estructurados digan lo mismo. */
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
