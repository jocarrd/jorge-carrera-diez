import Image from "next/image";

const LOGOS = [
  {
    src: "/images/logos/vidacaixa.png",
    alt: "VidaCaixa",
    w: 140,
    h: 120,
    alto: "h-7",
  },
  {
    src: "/images/logos/capgemini.png",
    alt: "Capgemini",
    w: 537,
    h: 120,
    alto: "h-4",
  },
  {
    src: "/images/logos/openbank.png",
    alt: "Openbank",
    w: 539,
    h: 120,
    alto: "h-[1.15rem]",
  },
  {
    src: "/images/logos/minsait.png",
    alt: "Minsait",
    w: 239,
    h: 120,
    alto: "h-6",
  },
  {
    src: "/images/logos/eqx.png",
    alt: "Elite Quality Index",
    w: 419,
    h: 120,
    alto: "h-6",
  },
];

export function ClientsStrip({ label }: { label: string }) {
  return (
    <div className="border-y border-[var(--line)] bg-[var(--panel)]">
      <div className="contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 py-6 sm:justify-start sm:gap-x-12 sm:py-5">
          <p className="w-full text-center font-mono text-[11.5px] uppercase tracking-[0.05em] text-[var(--muted-strong)] sm:w-auto sm:text-left">
            {label}
          </p>
          {LOGOS.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className={`client-logo ${logo.alto} w-auto`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
