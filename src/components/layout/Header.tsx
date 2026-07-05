"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/constants/navigation";
import { site } from "@/content/profile";

const sectionItems = [
  { href: "/#rol-actual", label: "Rol actual" },
  { href: "/#ia-generativa", label: "Agentes" },
  { href: "/#snowy-showcase", label: "Snowy" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#stack", label: "Stack" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040a]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Inicio" onClick={closeMenu}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-white shadow-[0_0_32px_rgba(103,232,249,0.18)]">
            <span className="absolute inset-1 rounded-full border border-white/10" />
            <span className="absolute -right-1 top-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            JC
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">Jorge Carrera</span>
            <span className="block text-xs text-slate-500">Ingeniero de software</span>
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
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15"
          >
            Contacto
          </a>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Cerrar navegacion" : "Abrir navegacion"}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition hover:border-cyan-300/40 md:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Navegacion movil"
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="mx-5 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#050814]/95 shadow-2xl sm:mx-6">
          <div className="border-b border-white/10 p-4">
            <p className="font-mono text-xs text-slate-500">Secciones</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {sectionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/[0.05]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4">
            <p className="font-mono text-xs text-slate-500">Paginas</p>
            <div className="mt-3 grid gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-600">/</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
