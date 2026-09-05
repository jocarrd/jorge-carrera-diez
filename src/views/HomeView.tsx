import { JsonLd } from "@/components/JsonLd";
import { AboutSection } from "@/components/home/AboutSection";
import { AiPreview } from "@/components/home/AiPreview";
import { ContactCta } from "@/components/home/ContactCta";
import { CurrentRoleSection } from "@/components/home/CurrentRoleSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { SnowyShowcase } from "@/components/home/SnowyShowcase";
import type { Locale } from "@/i18n/config";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

// El orden es el argumento: qué hago por ti, dónde estoy, el producto que lo
// demuestra, en qué me diferencio, de dónde vengo, con qué trabajo y cómo
// contactar. Cada sección responde a una duda y sólo a una.
export function HomeView({ locale }: { locale: Locale }) {
  return (
    <main>
      <JsonLd data={personJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale)} />
      <HeroSection locale={locale} />
      <CurrentRoleSection locale={locale} />
      <SnowyShowcase locale={locale} />
      <AiPreview locale={locale} />
      <ExperiencePreview locale={locale} />
      <SkillsPreview locale={locale} />
      <ProjectsPreview locale={locale} />
      <AboutSection locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}
