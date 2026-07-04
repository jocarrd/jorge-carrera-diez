import type { Metadata } from "next";
import Image from "next/image";
import { Badge, ButtonLink, MetricCard, Section, SectionHeader, Surface, TechTag } from "@/components/ui";
import {
  snowyCapabilities,
  snowyMediaMentions,
  snowyMetrics,
} from "@/content/projects";
import { createMetadata } from "@/lib/seo";

const architectureBlocks = [
  {
    title: "snowy.es",
    label: "Frontend BFF",
    text: "Next.js renderiza paginas, SEO y UI. Consume el engine y mantiene la logica de negocio fuera del frontend.",
  },
  {
    title: "api.snowy.es",
    label: "Backend autoridad",
    text: "NestJS centraliza negocio, autenticacion, cache, proveedores, BD, S3 y contratos HTTP.",
  },
  {
    title: "Redis + MySQL",
    label: "Datos",
    text: "MySQL guarda persistencia; Redis cachea datos por dominio y TTL para responder rapido.",
  },
  {
    title: "CMS + Radar + Jobs",
    label: "Servicios",
    text: "CMS editorial, motor radar, snapshots, jobs y documentacion transversal para operar el ecosistema.",
  },
] as const;

const dataSources = [
  "AEMET",
  "Wunderground",
  "Euskalmet",
  "MeteoGalicia",
  "MITECO",
  "USGS",
  "IGN",
  "CAMS",
] as const;

const productLines = [
  {
    title: "Snowy Energy",
    text: "Forecasting renovable, simulador y dashboard para energia solar como vertical B2B dentro del ecosistema Snowy.",
  },
  {
    title: "Widgets B2B",
    text: "SDK embebible para integrar datos meteorologicos, mapas, herramientas o asistente IA en webs de terceros.",
  },
  {
    title: "Eclipse 2026",
    text: "Producto de contenido y planificacion alrededor del eclipse solar total del 12 de agosto de 2026.",
  },
] as const;

const productFeatures = [
  {
    title: "Prediccion multi-modelo",
    text: "Comparacion de modelos meteorologicos, prediccion por localidades y herramientas para entender incertidumbre.",
  },
  {
    title: "Mapa meteorologico",
    text: "Radar, estaciones, avisos, terremotos, calidad del aire y capas ambientales en una interfaz interactiva.",
  },
  {
    title: "Estaciones en vivo",
    text: "Red de estaciones con datos actuales, historicos y flujo de integracion para usuarios.",
  },
  {
    title: "Contenido SEO",
    text: "Paginas indexables para localidades, fenomenos, polen, calidad del aire, embalses y WikiMeteo.",
  },
  {
    title: "Asistente IA",
    text: "Conversacion, voz, herramientas especializadas y respuestas apoyadas en datos meteorologicos.",
  },
  {
    title: "Productos derivados",
    text: "Energy, widgets embebibles, eclipse 2026 y nuevas verticales sobre la misma base tecnica.",
  },
] as const;

const productModules = [
  {
    title: "Asistente IA",
    text: "Consultas conversacionales con herramientas meteorologicas: ropa, avisos, prediccion, ubicacion y respuestas accionables.",
    image: "/images/snowy-ai-assistant.png",
    alt: "Asistente de IA de Snowy con recomendacion meteorologica de ropa",
  },
  {
    title: "Embalses",
    text: "Datos oficiales, evolucion semanal, mapas y comparativas por comunidades, provincias y cuencas.",
    image: "/images/snowy-reservoirs.png",
    alt: "Modulo de embalses de Snowy con reserva hidrica y mapa por comunidades",
  },
  {
    title: "Clima historico",
    text: "Procesamiento de series historicas para analizar tendencias, anomalias y cambios de temperatura por zona.",
    image: "/images/snowy-climate.png",
    alt: "Modulo de clima historico de Snowy con mapa de calentamiento en Espana",
  },
  {
    title: "Terremotos",
    text: "Monitor en tiempo real con fuentes oficiales, magnitud, ubicacion, detalle del evento y reporte comunitario.",
    image: "/images/snowy-earthquakes.png",
    alt: "Monitor de terremotos de Snowy con evento sismico reciente",
  },
  {
    title: "Estaciones",
    text: "Detalle de estacion con metricas actuales, historicos, favoritos, propietario y datos meteorologicos en vivo.",
    image: "/images/snowy-station-detail.png",
    alt: "Detalle de estacion meteorologica en Snowy con metricas en vivo",
  },
] as const;

export const metadata: Metadata = createMetadata({
  title: "Snowy",
  description:
    "Snowy, plataforma meteorologica creada por Jorge Carrera Diez con Next.js, NestJS, Redis, MySQL, Docker, SEO, radar, datos meteorologicos e IA.",
  path: "/proyectos/snowy",
});

export default function SnowyPage() {
  return (
    <main>
      <Section>
        <Badge>Caso de ingenieria</Badge>
        <h1 className="mt-8 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Snowy: plataforma meteorologica con mapas, datos en tiempo real e IA.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
          La desarrollo como unico ingeniero. El proyecto combina producto, frontend,
          backend, infraestructura, SEO, radar, estaciones, datos ambientales y agentes
          de IA sobre informacion meteorologica real.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="https://snowy.es">Abrir Snowy</ButtonLink>
          <ButtonLink href="/cv" variant="secondary">
            Ver CV
          </ButtonLink>
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#030712] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <Image
              src="/images/snowy-home.png"
              alt="Interfaz principal de Snowy con asistente IA, buscador y planificador meteorologico"
              width={1365}
              height={1049}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/snowy-stations-map.png"
                alt="Mapa de estaciones meteorologicas en Snowy"
                width={1280}
                height={862}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src="/images/snowy-radar-map.png"
                alt="Mapa meteorologico de Snowy con radar, avisos y estaciones"
                width={1210}
                height={872}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow="Producto"
          title="Que es Snowy"
          text="Una plataforma meteorologica para Espana con prediccion multi-modelo, estaciones en vivo, embalses, terremotos, calidad del aire, polen, avisos, mapas interactivos, WikiMeteo y asistente IA."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productFeatures.map((feature) => (
            <Surface key={feature.title}>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{feature.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-500">
              Modulos
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Distintas superficies, una misma arquitectura.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Cada modulo tiene requisitos distintos: datos externos, cache,
              visualizacion, SEO, estado en tiempo real y modelos internos comunes.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {productModules.map((module) => (
              <article
                key={module.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <Image
                  src={module.image}
                  alt={module.alt}
                  width={1200}
                  height={1000}
                  className="h-auto w-full border-b border-white/10"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{module.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Superficie"
          title="Datos, mapas y contenido indexable."
          text="Snowy combina buscador, mapas, estaciones, radar, herramientas, contenidos SEO, IA y productos B2B sobre una misma base tecnica."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {snowyMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow="Mi papel"
          title="Desarrollo end-to-end."
          text="Defino el roadmap y construyo la plataforma completa: arquitectura, frontend, backend, base de datos, cache, infraestructura, UX, SEO, integraciones, automatizaciones, IA y operativa."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snowyCapabilities.map((item) => (
            <Surface key={item.title}>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Arquitectura"
          title="Front ligero, backend autoridad y servicios separados cuando aportan."
          text="La arquitectura mantiene el frontend centrado en SSR, SEO y UI. El engine concentra negocio, datos, cache e integraciones. Radar, CMS y jobs viven separados porque tienen ciclos y cargas distintas."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {architectureBlocks.map((block) => (
            <div
              key={block.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                {block.label}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{block.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-7 text-slate-300">
          El resultado practico: el front no toca base de datos ni proveedores
          externos directamente. Consume contratos del engine, y cada pieza
          especializada se despliega y opera con su propia responsabilidad.
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="SEO y datos"
            title="SEO, datos y rendimiento como decisiones de arquitectura."
            text="El usuario y Google necesitan respuestas rapidas. Por eso el proyecto trabaja con SSR, cache por dominio, modelo interno de datos, IndexNow, revalidacion y abstraccion de proveedores."
          />
          <Surface>
            <h2 className="text-xl font-semibold text-white">Fuentes integradas</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {dataSources.map((source) => (
                <TechTag key={source}>{source}</TechTag>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-400">
              El objetivo es unificar proveedores heterogeneos en un modelo consistente,
              precalcular lo costoso y responder muy rapido al usuario final.
            </p>
          </Surface>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="B2B dentro de Snowy"
            title="Energy, widgets y verticales sectoriales."
            text="La misma base de datos, mapas, predicciones e IA permite construir productos derivados: forecasting energetico, widgets embebibles y herramientas para casos concretos."
          />
          <div className="grid gap-4">
            {productLines.map((line) => (
              <Surface key={line.title}>
                <h2 className="text-xl font-semibold text-white">{line.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">{line.text}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Prensa"
          title="Snowy tambien ha tenido recorrido publico."
          text="El lanzamiento tuvo cobertura en medios regionales y nacionales, algo relevante para un producto que combina meteorologia, comunidad e IA aplicada."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {snowyMediaMentions.map((mention) => (
            <Surface key={`${mention.outlet}-${mention.date}`}>
              <p className="font-mono text-sm text-cyan-300">{mention.outlet}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                {mention.date}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-7 text-white">
                {mention.title}
              </h2>
            </Surface>
          ))}
        </div>
      </Section>
    </main>
  );
}
