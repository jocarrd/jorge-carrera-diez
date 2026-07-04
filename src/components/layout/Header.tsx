import Link from "next/link";
import { navigationItems } from "@/constants/navigation";
import { site } from "@/content/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040a]/75 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-white">
          JCD<span className="text-cyan-300">.dev</span>
        </Link>
        <nav aria-label="Navegacion principal" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          Email
        </a>
      </div>
    </header>
  );
}
