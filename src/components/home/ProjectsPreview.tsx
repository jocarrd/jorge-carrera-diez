import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Section, SectionHeader } from "@/components/ui";

export function ProjectsPreview() {
  return (
    <Section id="proyectos">
      <SectionHeader
        eyebrow="Proyectos"
        title="Proyectos con producto, tráfico y decisiones técnicas reales."
        text="Snowy concentra la parte mas profunda: arquitectura, datos, SEO, IA e infraestructura. LaRiojaMeteo aporta audiencia, contenido y contexto meteorológico regional."
      />
      <div className="mt-10">
        <FeaturedProjects />
      </div>
    </Section>
  );
}
