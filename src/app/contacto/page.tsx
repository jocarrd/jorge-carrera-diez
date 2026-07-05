import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Section } from "@/components/ui";
import { site } from "@/content/profile";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contacto",
  description:
    "Contacto profesional de Jorge Carrera Diez para oportunidades tecnicas, producto, arquitectura, frontend, backend, SEO y meteorologia.",
  path: "/contacto",
});

const links = [
  { href: site.github, label: "GitHub" },
  { href: "/cv", label: "CV web" },
  { href: "/proyectos/snowy", label: "Snowy" },
] as const;

export default function ContactPage() {
  return (
    <main>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Contacto
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
              Estoy abierto a oportunidades donde mi perfil pueda aportar en producto,
              arquitectura, sistemas web o IA aplicada.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              Si crees que puede encajar, puedes escribirme por correo y lo hablamos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              email
            </p>
            <a
              className="mt-4 block break-all text-xl font-semibold tracking-tight text-cyan-200 transition hover:text-cyan-100 sm:text-3xl"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              La forma mas sencilla de contactarme es por correo. Si te apetece escribirme,
              cuentame brevemente el contexto y seguimos la conversacion desde ahi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${site.email}`}>Enviar correo</ButtonLink>
              <ButtonLink href="/cv" variant="secondary">
                Ver CV
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10 bg-white/[0.02]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Tambien puedes revisar antes
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Si quieres tener mas contexto antes de escribir, estos enlaces resumen la
                parte mas relevante de mi perfil.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
