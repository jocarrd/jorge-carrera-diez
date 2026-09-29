import Image from "next/image";
import Link from "next/link";
import {
  ButtonLink,
  LightOnScroll,
  Reveal,
  Section,
  SectionHeader,
} from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

const LOGOS: { match: string; src: string; w: number }[] = [
  { match: "VidaCaixa", src: "/images/logos/vidacaixa.png", w: 140 },
  { match: "Openbank", src: "/images/logos/openbank.png", w: 539 },
  { match: "EQx", src: "/images/logos/eqx.png", w: 419 },
  { match: "Minsait", src: "/images/logos/minsait.png", w: 239 },
  { match: "Hiberus", src: "/images/logos/hiberus.png", w: 494 },
  { match: "JIG", src: "/images/logos/jig.png", w: 218 },
];

function logoFor(names: string[]) {
  return LOGOS.find((logo) =>
    names.some((name) => name.includes(logo.match)),
  );
}

export function ExperiencePreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const preview = copy.experiencePreview;
  const href = routePath(locale, "experience");

  return (
    <Section id="experiencia">
      <Reveal>
        <SectionHeader
          label={copy.sectionLabels.experience}
          title={copy.cvTimeline.label}
          text={copy.cvTimeline.note}
        />
      </Reveal>

      <LightOnScroll className="tl-ed mt-12 sm:mt-14">
        {copy.experience.map((role) => {
          const logo = logoFor([role.client ?? "", role.company]);
          const current = role.end === null;
          return (
            <li key={`${role.company}-${role.period}`}>
              <Link
                href={href}
                className="tl-ed-row"
                data-current={current || undefined}
              >
                <p className="tl-ed-year">{role.start.slice(0, 4)}</p>
                <div className="tl-ed-main">
                  <p className="tl-ed-period">
                    {current ? <span aria-hidden className="tl-ed-dot" /> : null}
                    {role.period}
                  </p>
                  <h3 className="tl-ed-role">{role.role}</h3>
                  <p className="tl-ed-company">
                    {role.client ?? role.company}
                    {role.client ? <span> · {role.company}</span> : null}
                  </p>
                  <p className="tl-ed-summary">{role.summary}</p>
                </div>
                {logo ? (
                  <span className="tl-ed-logo">
                    <Image
                      src={logo.src}
                      alt=""
                      width={logo.w}
                      height={120}
                      className="client-logo h-7 w-auto"
                    />
                  </span>
                ) : null}
                <span aria-hidden className="boton-circulo tl-ed-arrow">
                  <svg viewBox="0 0 16 10">
                    <path
                      d="M10.5 1 15 5l-4.5 4M15 5H1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          );
        })}
      </LightOnScroll>

      <div className="mt-10">
        <ButtonLink href={href} variant="secondary">
          {preview.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
