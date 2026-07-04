import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, MetricCard, Section, SectionHeader, Surface } from "@/components/ui";
import { lariojaMeteoSections } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

const responsibilities = [
  "Arquitectura y mantenimiento tecnico del sitio web.",
  "Optimizacion SEO para mejorar posicionamiento y trafico organico.",
  "Gestion de contenido multimedia, rendimiento y adaptacion movil.",
  "Analisis de trafico y mejora continua de experiencia de usuario.",
] as const;

const lariojaMetrics = [
  { value: "2012", label: "origen", detail: "inicio del proyecto meteorologico original" },
  { value: "2020", label: "La Rioja Meteo", detail: "evolucion hacia la marca actual" },
  { value: "2024", label: "Jorge se une", detail: "aportacion tecnica y vision de producto" },
  { value: "2025", label: "Snowy", detail: "lanzamiento del producto meteorologico avanzado" },
] as const;

export const metadata: Metadata = createMetadata({
  title: "LaRiojaMeteo",
  description:
    "Caso de proyecto LaRiojaMeteo, blog meteorologico con mas de 500.000 visitas mensuales donde Jorge Carrera Diez colabora como webmaster.",
  path: "/proyectos/lariojameteo",
});

export default function LariojaMeteoPage() {
  return (
    <main>
      <Section>
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          LaRiojaMeteo: meteorologia regional, comunidad, SEO y base editorial para Snowy.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
          Colaboro activamente como socio y perfil tecnico en LaRiojaMeteo, portal de referencia
          meteorologico para La Rioja y Logroño con predicciones, analisis, datos en directo,
          noticias, guias y comunidad.
        </p>
        <div className="mt-9">
          <ButtonLink href="https://lariojameteo.es">Visitar LaRiojaMeteo</ButtonLink>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image
            src="/images/lariojameteo-home.png"
            alt="Home de LaRiojaMeteo con portada, categorias y ultimo articulo"
            width={1230}
            height={923}
            className="w-full object-cover object-left-top"
            priority
          />
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow="Trayectoria"
          title="De blog meteorologico regional a ecosistema con Snowy."
          text="LaRiojaMeteo aporta historia, comunidad, conocimiento local y distribucion editorial. Snowy aporta producto, datos, IA e infraestructura."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lariojaMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Responsabilidad"
          title="Un proyecto donde el SEO y la experiencia movil tienen impacto directo."
          text="LaRiojaMeteo combina trafico, contenido, visibilidad organica y mantenimiento continuo."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {responsibilities.map((item) => (
            <Surface key={item}>
              <p className="text-base leading-8 text-slate-300">{item}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Contenido"
            title="Un portal con profundidad editorial y datos en tiempo real."
            text="El portal funciona como archivo meteorologico local: analisis, episodios, fenomenos, guias, webcams, estaciones y comunidad."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {lariojaMeteoSections.map((section) => (
              <Surface key={section}>
                <p className="text-base leading-8 text-slate-300">{section}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
