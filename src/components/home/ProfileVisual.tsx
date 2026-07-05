import Image from "next/image";
import { Surface } from "@/components/ui";
import { ArchitectureField } from "@/components/visual/ArchitectureField";
import { profile } from "@/content/profile";

const profileStats = [
  ["Actual", "Tech Lead"],
  ["Producto", "Snowy"],
  ["Base", "Logroño"],
  ["Stack", "Full stack"],
] as const;

export function ProfileVisual() {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <ArchitectureField />
      </div>
      <Surface className="space-border relative overflow-hidden bg-[#050814]/75 p-3 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
          <Image
            src="/images/jorge-carrera-diez.png"
            alt="Retrato profesional de Jorge Carrera Diez"
            width={1168}
            height={1408}
            priority
            className="aspect-[4/5] h-auto w-full object-cover object-[50%_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(2,4,10,0.72)_100%)]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
              Jorge Carrera Diez
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Ingeniero de software · Producto · Arquitectura
            </p>
          </div>
        </div>

        <div className="mt-3 hidden grid-cols-2 gap-3 sm:grid">
          {profileStats.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white/[0.05] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 font-mono text-sm text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 hidden gap-3 lg:grid">
          {profile.focus.slice(0, 3).map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
