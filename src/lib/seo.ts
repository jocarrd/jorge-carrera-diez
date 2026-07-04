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
  const image = new URL("/opengraph-image", site.url).toString();

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
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.name} - Ingeniero de software`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
    icons: {
      icon: "/icon.svg",
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
    jobTitle: "Ingeniero de software",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Logroño",
      addressRegion: "La Rioja",
      addressCountry: "ES",
    },
    sameAs: [site.github, "https://snowy.es", "https://lariojameteo.es"],
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

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-ES",
  };
}
