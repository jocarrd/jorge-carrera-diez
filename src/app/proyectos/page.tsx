import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Section, SectionHeader } from "@/components/ui";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Proyectos",
  description:
    "Proyectos de Jorge Carrera Diez: Snowy, LaRiojaMeteo y plataformas de producto con SEO, datos, arquitectura web e infraestructura.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Proyectos"
          title="Snowy como producto principal, LaRiojaMeteo como contexto meteorologico."
          text="Dos proyectos conectados por la meteorologia, el contenido, el SEO y la construccion de producto web con datos reales."
        />
        <div className="mt-12">
          <FeaturedProjects />
        </div>
      </Section>
    </main>
  );
}
