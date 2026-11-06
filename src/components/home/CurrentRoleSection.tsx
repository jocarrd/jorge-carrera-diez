import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const role = copy.currentRole;

  return (
    <Section id="rol-actual" className="section-band">
      <Reveal>
        <SectionHeader
          title={role.homeTitle}
          text={role.homeText}
          accent="Lumyna"
          accentHref={site.lumyna}
        />
      </Reveal>

      <Reveal delay={80}>
        <div
          className="fde-loop"
          style={{ "--stops": role.fronts.length } as CSSProperties}
        >
          <div aria-hidden className="fde-orbit">
            <span className="fde-stars" />
            <span className="fde-ring fde-ring--outer" />
            <span className="fde-ring" />
            <span className="fde-sweep" />
            <span className="fde-sat" />
            {role.fronts.map((front, index) => (
              <span
                key={front.title}
                className="fde-node"
                style={{ "--n": index } as CSSProperties}
              />
            ))}
            <span className="fde-core">
              <Image
                src="/images/logos/lumyna-mark.svg"
                alt=""
                width={64}
                height={64}
                className="fde-moon"
              />
            </span>
          </div>
          <ol className="fde-stops">
            {role.fronts.map((front, index) => (
              <li
                key={front.title}
                className="fde-stop"
                style={{ "--n": index } as CSSProperties}
              >
                <span aria-hidden className="fde-dot" />
                <h3 className="fde-title">{front.title}</h3>
                <p className="fde-text">{front.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
