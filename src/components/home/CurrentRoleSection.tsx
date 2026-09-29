import { Reveal, RevealGroup, Section, SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function CurrentRoleSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const role = copy.currentRole;

  return (
    <Section id="rol-actual" className="section-band">
      <Reveal>
        <SectionHeader
          label={copy.sectionLabels.role}
          title={role.homeTitle}
          text={role.homeText}
        />
      </Reveal>

      <RevealGroup
        delay={80}
        className="mt-14 hidden gap-5 md:grid md:grid-cols-3"
      >
        {role.fronts.map((front) => (
          <FrontCard key={front.label} front={front} />
        ))}
      </RevealGroup>

      <Reveal delay={80} className="mt-10 md:hidden">
        <ol className="card-ed divide-y divide-[var(--line)] overflow-hidden">
          {role.fronts.map((front) => (
            <li
              key={front.label}
              className="grid grid-cols-[1.25rem_1fr] gap-x-2 px-5 py-4"
            >
              <span
                aria-hidden
                className="mt-2 size-2 rounded-full bg-[var(--accent)]"
              />
              <div>
                <h3 className="text-[1.0625rem] font-semibold leading-[1.3] tracking-[-0.015em]">
                  {front.title}
                </h3>
                <p className="mt-1 text-[15px] leading-[1.5] text-[var(--muted)]">
                  {front.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

function FrontCard({
  front,
  className = "",
}: {
  front: { label: string; title: string; text: string };
  className?: string;
}) {
  return (
    <article className={`card-ed p-8 sm:p-9 ${className}`}>
      <span
        aria-hidden
        className="block size-2.5 rounded-full bg-[var(--accent)]"
      />
      <h3 className="t-card mt-5">{front.title}</h3>
      <p className="mt-3.5 text-[17px] leading-[1.55] text-[var(--muted)]">
        {front.text}
      </p>
    </article>
  );
}
