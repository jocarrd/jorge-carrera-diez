import { JsonLd } from "@/components/JsonLd";
import { AboutSection } from "@/components/home/AboutSection";
import { BigStat } from "@/components/home/BigStat";
import { AiPreview } from "@/components/home/AiPreview";
import { ContactCta } from "@/components/home/ContactCta";
import { CurrentRoleSection } from "@/components/home/CurrentRoleSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { RadarScrub } from "@/components/home/RadarScrub";
import { SnowyShowcase } from "@/components/home/SnowyShowcase";
import { StickyShowcase } from "@/components/home/StickyShowcase";
import type { Locale } from "@/i18n/config";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

// El orden es el argumento: qué hago por ti, dónde estoy, el producto que lo
// demuestra, en qué me diferencio, de dónde vengo y cómo contactar. Cada
// sección responde a una duda y sólo a una.
//
// La matriz de competencias vivía aquí y se ha quitado: cinco columnas de
// nombres de herramientas no convencen a nadie que ya ha visto el producto
// funcionando, y costaba una pantalla entera. Sigue en el CV, que es donde
// alguien la va a buscar de verdad.
export function HomeView({ locale }: { locale: Locale }) {
  return (
    <main>
      <JsonLd data={personJsonLd(locale)} />
      <JsonLd data={websiteJsonLd(locale)} />
      {/* El orden cuenta una historia y antes no la contaba: se entraba en tres
          secciones seguidas de Snowy antes de saber que hay tres proyectos, y
          "qué ha construido" no se respondía hasta la novena pantalla.
          Ahora: qué ha construido -> qué hace ahora -> el caso insignia con su
          prueba -> cómo trabaja -> quién es -> hablamos. */}
      <HeroSection locale={locale} />
      <ProjectsPreview locale={locale} />
      <CurrentRoleSection locale={locale} />
      <SnowyShowcase locale={locale} />
      <RadarScrub locale={locale} />
      <BigStat locale={locale} />
      <StickyShowcase locale={locale} />
      <AiPreview locale={locale} />
      <ExperiencePreview locale={locale} />
      <AboutSection locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}
