import Image from "next/image";
import { Container, Rail } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

const SHOTS = [
  { src: "/images/eqx-home.webp", w: 2400, h: 1080 },
  { src: "/images/eqx-rankings.webp", w: 2268, h: 1060 },
  { src: "/images/snowy-ai-assistant.webp", w: 1600, h: 1000 },
  { src: "/images/snowy-clima-calentamiento.webp", w: 2320, h: 1160 },
];

export function CapabilityCards({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <p className="sh-label">
          {copy.sectionLabels.work}
          <span aria-hidden className="sh-line" />
        </p>
        <Rail label={copy.sectionLabels.work}>
          {copy.profile.capabilities.map((item, index) => {
            const shot = SHOTS[index % SHOTS.length];
            return (
              <article key={item.title} className="rail-item cap-card">
                <div className="cap-card-shot">
                  <Image
                    src={shot.src}
                    alt=""
                    width={shot.w}
                    height={shot.h}
                    sizes="(max-width: 639px) 80vw, 240px"
                  />
                </div>
                <div className="cap-card-copy">
                  <h2 className="cap-card-title">{item.title}</h2>
                  <p className="cap-card-text">{item.text}</p>
                </div>
              </article>
            );
          })}
        </Rail>
      </Container>
    </section>
  );
}
