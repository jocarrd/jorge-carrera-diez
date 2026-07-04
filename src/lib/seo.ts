import type { Metadata } from "next";
import { site } from "@/content/profile";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path = "/",
}: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  const resolvedTitle = title ? `${title} | ${site.name}` : site.title;

  return {
    metadataBase: new URL(site.url),
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Frontend Tech Lead",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Logrono",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    sameAs: [site.github, "https://snowy.es", "https://lariojameteo.es"],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "SEO",
      "Meteorological platforms",
      "Artificial Intelligence",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-ES",
  };
}
