import { ButtonLink, Section, Surface } from "@/components/ui";
import { site } from "@/content/profile";

export function ContactCta() {
  return (
    <Section id="contacto">
      <Surface className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-500">
            Contacto
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Hablemos si hay producto, arquitectura o IA aplicada de verdad.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Me interesan equipos donde pueda aportar construyendo producto, tomando decisiones
            tecnicas y conectando frontend, backend, datos, SEO e IA con impacto real.
          </p>
        </div>
        <ButtonLink href={`mailto:${site.email}`}>Contactar</ButtonLink>
      </Surface>
    </Section>
  );
}
