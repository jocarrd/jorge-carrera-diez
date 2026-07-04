import Link from "next/link";
import { Badge, MetricCard, Surface, TechTag } from "@/components/ui";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

const internalProjectSlugs = new Set(["snowy", "lariojameteo"]);

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Surface className="flex h-full flex-col">
      <Badge>{project.label}</Badge>
      <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
      <p className="mt-5 text-sm leading-6 text-slate-300">{project.impact}</p>

      {project.metrics ? (
        <div className="mt-6 grid grid-cols-2 gap-3">
          {project.metrics.slice(0, 4).map((metric) => (
            <MetricCard key={`${project.slug}-${metric.label}`} metric={metric} />
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>

      {internalProjectSlugs.has(project.slug) ? (
        <Link
          href={`/proyectos/${project.slug}`}
          className="mt-6 text-sm font-medium text-cyan-300 hover:text-cyan-100"
        >
          Ver detalle
        </Link>
      ) : null}
    </Surface>
  );
}
