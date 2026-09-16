import Image from "next/image";

// Los logotipos van en blanco y con la altura óptica igualada a mano: el peso
// de un logo no lo da su alto en píxeles sino cuánta tinta ocupa, y con la
// misma altura para todos, los de texto largo se comían la fila.
const LOGOS = [
  { src: "/images/logos/vidacaixa.png", alt: "VidaCaixa", w: 140, h: 120, alto: "h-7" },
  { src: "/images/logos/capgemini.png", alt: "Capgemini", w: 537, h: 120, alto: "h-4" },
  { src: "/images/logos/openbank.png", alt: "Openbank", w: 539, h: 120, alto: "h-[1.15rem]" },
  { src: "/images/logos/minsait.png", alt: "Minsait", w: 239, h: 120, alto: "h-6" },
  { src: "/images/logos/eqx.png", alt: "Elite Quality Index", w: 419, h: 120, alto: "h-6" },
];

export function ClientsStrip({ label }: { label: string }) {
  return (
    <div className="border-y border-[var(--line)] bg-[var(--panel)]">
      <div className="contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8">
        {/* En móvil la etiqueta ocupaba media fila y los logos se repartían en dos
            filas descuadradas. Ahí la etiqueta va arriba sola y los logos se
            centran: tres arriba y dos abajo, alineados. */}
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
              className={`${logo.alto} w-auto opacity-70`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
