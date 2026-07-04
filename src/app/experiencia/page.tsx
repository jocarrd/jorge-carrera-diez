import type { Metadata } from "next";
import { CompanyMark } from "@/components/experience/CompanyMark";
import { Section, SectionHeader } from "@/components/ui";
import { experience } from "@/content/experience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experiencia",
  description:
    "Experiencia profesional de Jorge Carrera Diez como ingeniero de software, Tech Lead, Lead Software Engineer y Full Stack Developer.",
  path: "/experiencia",
});

export default function ExperiencePage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Experiencia"
          title="Ingeniero de software con trayectoria en banca, seguros, retail y producto web."
          text="Esta pagina recoge el recorrido profesional con foco en liderazgo tecnico, arquitectura, React, Next.js, backend, calidad, CI/CD, agentes y colaboracion con equipos multidisciplinares."
        />
        <div className="mt-12">
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/10 to-transparent md:block" />
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative grid gap-6 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[12rem_1fr]"
              >
                <div className="hidden md:block">
                  <div className="absolute left-3 top-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f]">
                    <div className="h-2 w-2 rounded-full bg-cyan-300" />
                  </div>
                </div>

                <div className="md:col-start-2">
                  <div className="grid gap-6 lg:grid-cols-[13rem_1fr]">
                    <div>
                      <CompanyMark logo={item.logo} />
                      <p className="mt-5 font-mono text-sm text-cyan-300">{item.period}</p>
                      <p className="mt-2 text-sm text-slate-500">{item.context}</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        {item.headline ?? `${item.role} - ${item.company}`}
                      </h2>
                      {item.client ? (
                        <p className="mt-2 text-sm font-medium text-slate-400">
                          {item.client} · {item.company}
                        </p>
                      ) : null}
                      <p className="mt-4 text-base leading-8 text-slate-300">{item.summary}</p>
                      <ul className="mt-5 grid gap-2 text-sm text-slate-400">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>- {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
