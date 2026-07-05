import { site } from "@/content/profile";

type ProfileSummaryProps = {
  className?: string;
};

export function ProfileSummary({ className = "" }: ProfileSummaryProps) {
  return (
    <p className={className}>
      Soy Ingeniero Informático por la{" "}
      <a
        href={site.universityUrl}
        target="_blank"
        rel="noreferrer"
        className="text-cyan-300 underline-offset-4 hover:text-cyan-100 hover:underline"
      >
        {site.university}
      </a>
      {" "}y colegiado en el{" "}
      <a
        href={site.collegeUrl}
        target="_blank"
        rel="noreferrer"
        className="text-cyan-300 underline-offset-4 hover:text-cyan-100 hover:underline"
      >
        {site.college}
      </a>
      . Trabajo en entornos enterprise liderando decisiones técnicas y desarrollo Snowy
      para trabajar producto, frontend, backend, datos, infraestructura, SEO y agentes
      sobre un sistema real.
    </p>
  );
}
