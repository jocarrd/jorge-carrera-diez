import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, MetricCard, Section, SectionHeader, Surface, TechTag } from "@/components/ui";
import {
  snowyCapabilities,
  snowyMediaMentions,
  snowyMetrics,
  snowyTractionMetrics,
} from "@/content/projects";
import { createMetadata } from "@/lib/seo";

const dataSources = [
  "AEMET",
  "Euskalmet",
  "MeteoGalicia",
  "MITECO",
  "USGS",
  "IGN",
  "CAMS",
] as const;

const publicProof = [
  {
    title: "Entrevista en RNE",
    text: "Participacion en radio para explicar Snowy y la evolucion del proyecto meteorologico.",
    image: "/images/snowy-rne.png",
    alt: "Jorge Carrera y Daniel Benito en una entrevista de RNE sobre Snowy",
  },
  {
    title: "Articulo en larioja.com",
    text: "Cobertura en prensa regional sobre el lanzamiento de Snowy desde LaRiojaMeteo.",
    image: "/images/snowy-larioja-article.jpeg",
    alt: "Articulo de larioja.com sobre el lanzamiento de Snowy",
    url: "https://www.larioja.com/la-rioja/snowy-asistente-rioja-meteo-20260122182611-nt.html",
  },
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
    alt: "Modulo de clima historico de Snowy con mapa de calentamiento en España",
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
        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Snowy: plataforma meteorologica con mapas, datos en tiempo real e IA.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
          Snowy es una plataforma meteorologica para consultar predicciones, mapas,
          estaciones, avisos, embalses, calidad del aire, terremotos y herramientas
          inteligentes desde una experiencia rapida y orientada a decisiones reales.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
          La diferencia esta en unir producto, datos, SEO, mapas interactivos y agentes
          sobre una arquitectura propia: frontend SSR, backend como autoridad, cache por
          dominio y servicios especializados para radar, CMS y procesos batch. En los
          ultimos 3 meses, Snowy ha superado los 7,5 millones de impresiones, 51k clics
          organicos y 1.200 usuarios registrados.
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
          text="Una plataforma meteorologica para España con prediccion multi-modelo, estaciones en vivo, embalses, terremotos, calidad del aire, polen, avisos, mapas interactivos, WikiMeteo y asistente IA."
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
          title="Traccion real, no solo arquitectura."
          text="El SEO, el rendimiento y la utilidad del producto ya se reflejan en uso: busqueda organica, clics y usuarios registrados sobre una plataforma propia."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {snowyTractionMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {snowyMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <SectionHeader
          eyebrow="Construccion"
          title="Como esta hecho."
          text="Snowy se apoya en una arquitectura desacoplada: Next.js para SSR, SEO y UI; NestJS para negocio y datos; Redis para cache; MySQL para persistencia; y servicios separados cuando radar, CMS o jobs tienen cargas distintas."
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
          text="El proyecto nacio desde LaRiojaMeteo y ha tenido presencia en prensa, radio y portales publicos. Es una señal de producto real, comunidad y continuidad."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {publicProof.map((item) => {
            const content = (
              <>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={600}
                  className="h-72 w-full border-b border-white/10 object-cover object-center"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              </>
            );

            if ("url" in item) {
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                {content}
              </article>
            );
          })}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <a
            href="https://datos.gob.es/es/aplicaciones/snowy"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
          >
            <p className="font-mono text-sm text-cyan-200">datos.gob.es</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              Ficha publica
            </p>
            <h2 className="mt-4 text-lg font-semibold leading-7 text-white">
              Snowy aparece recogido en el portal nacional de datos abiertos.
            </h2>
          </a>
          {snowyMediaMentions.map((mention) => (
            <a
              key={`${mention.outlet}-${mention.date}-${mention.title}`}
              href={mention.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_90px_rgba(0,0,0,0.24)] transition hover:border-cyan-300/25 hover:bg-white/[0.045]"
            >
              <p className="font-mono text-sm text-cyan-300">{mention.outlet}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                {mention.date}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-7 text-white">
                {mention.title}
              </h2>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}
