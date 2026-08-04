import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, MetricCard, Section, SectionHeader, Surface } from "@/components/ui";
import { lariojaMeteoSections } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

const responsibilities = [
  "Arquitectura y mantenimiento técnico del sitio web.",
  "Optimización SEO para mejorar posicionamiento y tráfico orgánico.",
  "Gestión de contenido multimedia, rendimiento y adaptación móvil.",
  "Análisis de tráfico y mejora continua de experiencia de usuario.",
] as const;

const lariojaMetrics = [
  { value: "2012", label: "origen", detail: "inicio del proyecto meteorológico original" },
  { value: "2020", label: "La Rioja Meteo", detail: "evolución hacia la marca actual" },
  { value: "2024", label: "Jorge se une", detail: "aportación técnica y visión de producto" },
  { value: "2025", label: "Snowy", detail: "lanzamiento del producto meteorológico avanzado" },
] as const;

export const metadata: Metadata = createMetadata({
  title: "LaRiojaMeteo",
  description:
    "Caso de proyecto LaRiojaMeteo, blog meteorológico con más de 500.000 visitas mensuales donde Jorge Carrera Diez colabora como webmaster.",
  path: "/proyectos/lariojameteo",
});

export default function LariojaMeteoPage() {
  return (
    <main>
      <Section>
        <h1 className="max-w-5xl text-3xl font-semibold tracking-tight text-white sm:text-6xl">
          LaRiojaMeteo: meteorología regional, comunidad, SEO y base editorial para Snowy.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:mt-6 sm:text-xl sm:leading-9">
          Colaboro activamente como socio y perfil técnico en LaRiojaMeteo, portal de referencia
          meteorológico para La Rioja y Logroño con predicciones, análisis, datos en directo,
          noticias, guías y comunidad.
        </p>
        <div className="mt-9">
          <ButtonLink href="https://lariojameteo.es">Visitar LaRiojaMeteo</ButtonLink>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black sm:mt-12">
          <Image
            src="/images/lariojameteo-home.png"
            alt="Home de LaRiojaMeteo con portada, categorías y último artículo"
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
          title="De blog meteorológico regional a ecosistema con Snowy."
          text="LaRiojaMeteo aporta historia, comunidad, conocimiento local y distribución editorial. Snowy aporta producto, datos, IA e infraestructura."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 lg:grid-cols-4">
          {lariojaMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Responsabilidad"
          title="Un proyecto donde el SEO y la experiencia móvil tienen impacto directo."
          text="LaRiojaMeteo combina tráfico, contenido, visibilidad orgánica y mantenimiento continuo."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {responsibilities.map((item) => (
            <Surface key={item}>
              <p className="text-base leading-7 text-slate-300 sm:leading-8">{item}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Contenido"
            title="Un portal con profundidad editorial y datos en tiempo real."
            text="El portal funciona como archivo meteorológico local: análisis, episodios, fenómenos, guías, webcams, estaciones y comunidad."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {lariojaMeteoSections.map((section) => (
              <Surface key={section}>
                <p className="text-base leading-7 text-slate-300 sm:leading-8">{section}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
