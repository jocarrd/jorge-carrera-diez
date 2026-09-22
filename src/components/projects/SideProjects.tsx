import { SectionHeader } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/i18n/config";

export function SideProjects({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.pages.projects;

  return (
    <div>
      <SectionHeader title={page.sideTitle} text={page.sideText} level={2} />
      <ul className="mt-10 border-t border-[var(--line)]">
        {copy.sideProjects.map((project) => (
          <li key={project.slug} className="border-b border-[var(--line)]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className="group grid gap-2 py-7 no-underline sm:grid-cols-[14rem_1fr] sm:gap-10"
            >
              <span className="text-[1.3125rem] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                {project.name}
              </span>
              <span className="grid gap-3">
                <span className="max-w-[40rem] text-[1.0625rem] leading-[1.5] text-[var(--muted)]">
                  {project.description}
                </span>
                <span className="font-mono text-[12px] leading-[1.6] text-[var(--muted)]">
                  {project.stack.join(" · ")}
                </span>
                <span className="text-[15px] font-medium text-[var(--accent-text)] group-hover:underline">
                  {project.host} ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
