import { ButtonLink, Section, Surface } from "@/components/ui";
import { site } from "@/content/profile";

export function ContactCta() {
  return (
    <Section id="contacto">
      <Surface className="grid gap-8 border-white/10 bg-white/[0.025] lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Si mi perfil encaja, hablamos.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Me interesa construir en equipos donde haya producto, criterio tecnico y problemas
            reales que resolver. La mejor forma de verlo es una conversacion tranquila.
          </p>
        </div>
        <ButtonLink href={`mailto:${site.email}`}>Escribirme</ButtonLink>
      </Surface>
    </Section>
  );
}
