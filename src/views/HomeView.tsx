import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/home/ContactCta";
import { CurrentRoleSection } from "@/components/home/CurrentRoleSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SnowyShowcase } from "@/components/home/SnowyShowcase";
import type { Locale } from "@/i18n/config";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <main>
      <JsonLd data={personJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale)} />
      <HeroSection locale={locale} />
      <CurrentRoleSection locale={locale} />
      <SnowyShowcase locale={locale} />
      <ExperiencePreview locale={locale} />
      <ProjectsPreview locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}
