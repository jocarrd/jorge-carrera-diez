import { CapabilityLayers } from "@/components/home/CapabilityLayers";
import { Container } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CapabilityCards({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section id="que-hago" className="caps py-16 sm:py-24">
      <Container>
        <CapabilityLayers
          heading={<h2 className="t-section">{copy.sectionLabels.work}</h2>}
          items={copy.profile.capabilities}
        />
      </Container>
    </section>
  );
}
