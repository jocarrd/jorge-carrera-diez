import { site } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>{site.name} - Ingeniero de software e Ingeniero Informatico.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="hover:text-white" href={site.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="hover:text-white" href="https://snowy.es" rel="noreferrer" target="_blank">
            Snowy
          </a>
          <a className="hover:text-white" href={`mailto:${site.email}`}>
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
