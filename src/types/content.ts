import type { RouteKey } from "@/i18n/routes";

export type ExperienceItem = {
  company: string;
  role: string;
  context: string;
  headline?: string;
  client?: string;
  period: string;
  summary: string;
  highlights: string[];
  logo?: {
    src?: string;
    alt: string;
    fallback: string;
    containerClassName?: string;
    className?: string;
  };
};

export type Project = {
  slug: string;
  name: string;
  url?: string;
  label: string;
  description: string;
  impact: string;
  stack: string[];
  metrics?: Metric[];
  logo?: string;
  image?: string;
};

export type Capability = {
  title: string;
  text: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Metric = {
  label: string;
  value: string;
  detail?: string;
};

export type MediaMention = {
  outlet: string;
  date: string;
  title: string;
  url?: string;
};

/** Texto con enlaces embebidos: un segmento con `href` se renderiza como <a>. */
export type RichSegment = {
  text: string;
  href?: string;
  external?: boolean;
};

export type SectionCopy = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export type TitledText = {
  title: string;
  text: string;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type Copy = {
  meta: {
    siteTitle: string;
    description: string;
    location: string;
    jobTitle: string;
    universityLabel: string;
    collegeLabel: string;
    ogAlt: string;
    ogTagline: string;
    ogStats: [string, string][];
    ogEyebrow: string;
  };
  nav: {
    brandRole: string;
    contact: string;
    homeAriaLabel: string;
    mainNavLabel: string;
    mobileNavLabel: string;
    openMenu: string;
    closeMenu: string;
    sectionsLabel: string;
    pagesLabel: string;
    items: { key: RouteKey; label: string }[];
    sections: { anchor: string; label: string }[];
  };
  profile: {
    headline: string;
    positioning: string;
    focus: string[];
    summary: RichSegment[];
    visualStats: [string, string][];
  };
  hero: {
    ctaPrimary: string;
    ctaSecondary: string;
  };
  currentRole: SectionCopy & {
    paragraphs: RichSegment[][];
    signals: TitledText[];
  };
  ai: {
    title: string;
    lead: string;
    detail: string;
    rows: [string, string][];
    flow: { title: string; caption: string; metric: string }[];
    consoleLines: [string, string][];
    principlesTitle: string;
    principles: TitledText[];
  };
  snowyShowcase: {
    title: string;
    lead: string;
    detail: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  experiencePreview: SectionCopy & { cta: string };
  projectsPreview: SectionCopy;
  contactCta: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    tagline: string;
    contact: string;
  };
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: Project[];
  featuredProjects: {
    snowyCta: string;
    lariojaCta: string;
    snowyImageAlt: string;
    lariojaImageAlt: string;
  };
  pages: {
    projects: PageMeta & { eyebrow: string; heading: string; text: string };
    experience: PageMeta & { eyebrow: string; heading: string; text: string };
    cv: PageMeta & {
      eyebrow: string;
      experienceTitle: string;
      experienceEyebrow: string;
      stackTitle: string;
      stackEyebrow: string;
      stackText: string;
      downloadCta: string;
      printHint: string;
    };
    contact: PageMeta & {
      title: string;
      lead: string;
      detail: string;
      emailLabel: string;
      emailHint: string;
      ctaPrimary: string;
      ctaSecondary: string;
      linksTitle: string;
      linksText: string;
      links: { key: "linkedin" | "github" | "cv" | "snowy"; label: string }[];
    };
    snowy: PageMeta & {
      heading: string;
      lead: string;
      detail: string;
      ctaPrimary: string;
      ctaSecondary: string;
      product: SectionCopy;
      features: TitledText[];
      modules: {
        eyebrow: string;
        title: string;
        text: string;
        items: { title: string; text: string; image: string; alt: string }[];
      };
      traction: SectionCopy;
      build: SectionCopy;
      capabilities: Capability[];
      seo: SectionCopy & { sourcesTitle: string; sourcesText: string };
      b2b: SectionCopy & { lines: TitledText[] };
      press: SectionCopy & {
        openDataLabel: string;
        openDataTag: string;
        openDataTitle: string;
        proof: { title: string; text: string; image: string; alt: string; url?: string }[];
      };
      metrics: Metric[];
      tractionMetrics: Metric[];
      mediaMentions: MediaMention[];
      imageAlts: { home: string; stations: string; radar: string };
    };
    lariojameteo: PageMeta & {
      heading: string;
      lead: string;
      cta: string;
      imageAlt: string;
      timeline: SectionCopy;
      metrics: Metric[];
      responsibility: SectionCopy & { items: string[] };
      content: SectionCopy & { items: string[] };
    };
  };
};
