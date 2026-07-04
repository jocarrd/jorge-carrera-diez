import Link from "next/link";
import { navigationItems } from "@/constants/navigation";
import { site } from "@/content/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040a]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Inicio">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-white shadow-[0_0_32px_rgba(103,232,249,0.18)]">
            <span className="absolute inset-1 rounded-full border border-white/10" />
            <span className="absolute -right-1 top-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            JC
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">Jorge Carrera</span>
            <span className="block text-xs text-slate-500">Product Software Engineer</span>
          </span>
        </Link>
        <nav
          aria-label="Navegacion principal"
          className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
