import type { ReactNode } from "react";
import { Reveal, Section } from "@/components/ui";
import type { CaseFact } from "@/types/content";

type CaseHeroProps = {
  eyebrow: string;
  heading: string;
  lead: string;
  detail?: string;
  facts: CaseFact[];
  actions?: ReactNode;
};

/* Cabecera común a las tres páginas de caso. Antes cada una abría a su manera
   —una con dos botones, otra con uno y ninguna decía en qué papel entro— y
   leídas seguidas no parecían el mismo sitio. La fila de datos es lo que
   contesta de un vistazo lo que un cliente pregunta: qué eres aquí, cuándo, y
   sobre qué. */
export function CaseHero({ eyebrow, heading, lead, detail, facts, actions }: CaseHeroProps) {
  return (
    <Section className="pb-8 sm:pb-12 lg:pb-14">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent-text)]">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--foreground)] sm:text-[3.5rem]">
        {heading}
      </h1>
      <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.55] text-[var(--muted)] sm:mt-6 sm:text-[1.3125rem] sm:leading-[1.5]">
        {lead}
      </p>
      {detail ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:mt-5 sm:leading-7">
          {detail}
        </p>
      ) : null}

      {actions ? <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}

      <Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--line)] pt-7 sm:mt-12 sm:grid-cols-4 sm:gap-x-8">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                {fact.label}
              </dt>
              <dd className="mt-2 text-[15px] font-medium leading-6 text-[var(--foreground)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
