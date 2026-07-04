import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/home/ContactCta";
import { CurrentRoleSection } from "@/components/home/CurrentRoleSection";
import { EngineeringSnapshot } from "@/components/home/EngineeringSnapshot";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { GenerativeAiSection } from "@/components/home/GenerativeAiSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SnowyShowcase } from "@/components/home/SnowyShowcase";
import { StackSection } from "@/components/home/StackSection";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <HeroSection />
      <EngineeringSnapshot />
      <CurrentRoleSection />
      <GenerativeAiSection />
      <SnowyShowcase />
      <ExperiencePreview />
      <ProjectsPreview />
      <StackSection />
      <ContactCta />
    </main>
  );
}
