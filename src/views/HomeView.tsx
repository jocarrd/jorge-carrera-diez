import { JsonLd } from "@/components/JsonLd";
import { AboutSection } from "@/components/home/AboutSection";
import { BigStat } from "@/components/home/BigStat";
import { AiPreview } from "@/components/home/AiPreview";
import { ContactCta } from "@/components/home/ContactCta";
import { CoursePreview } from "@/components/home/CoursePreview";
import { CurrentRoleSection } from "@/components/home/CurrentRoleSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SnowyShowcase } from "@/components/home/SnowyShowcase";
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
      {/* El recorrido responde a las preguntas en el orden en que se hacen:
          qué hago, dónde trabajo ahora, en qué proyectos se ve, la prueba de
          que uno es mío y está en producción, cómo trabajo con agentes, de
          dónde vengo, quién soy y cómo escribirme.

          El rol actual iba después de los proyectos y eso dejaba el trabajo
          principal en segundo plano. Y había cuatro secciones seguidas de
          Snowy —galería, radar, dato y cómo se construye—: cuatro pantallas
          del mismo producto hacen que la web parezca de Snowy y no de quien lo
          hace. El radar y el desglose de construcción se han ido a la página
          del caso, que es donde alguien los va a buscar. */}
      <HeroSection locale={locale} />
      <CurrentRoleSection locale={locale} />
      <ProjectsPreview locale={locale} />
      <SnowyShowcase locale={locale} />
      <BigStat locale={locale} />
      <AiPreview locale={locale} />
      <CoursePreview locale={locale} />
      <ExperiencePreview locale={locale} />
      <AboutSection locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}
