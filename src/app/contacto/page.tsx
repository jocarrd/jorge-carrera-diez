import type { Metadata } from "next";
import { ButtonLink, Section, SectionHeader, Surface } from "@/components/ui";
import { site } from "@/content/profile";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacto profesional de Jorge Carrera Diez para oportunidades tecnicas, producto, arquitectura, full stack, SEO, meteorologia e IA.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos si hay un reto tecnico serio detras."
          text="Me interesan conversaciones sobre producto, arquitectura, full stack, SEO tecnico, plataformas de datos, meteorologia, IA aplicada y sistemas web escalables."
        />
        <Surface className="mt-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Email</p>
          <a className="mt-3 block text-xl font-semibold text-cyan-300" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="mt-8">
            <ButtonLink href={`mailto:${site.email}`}>Contactar</ButtonLink>
          </div>
        </Surface>
      </Section>
    </main>
  );
}
