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
