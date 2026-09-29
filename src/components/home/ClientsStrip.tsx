import Image from "next/image";

const LOGOS = [
  {
    src: "/images/logos/vidacaixa.png",
    alt: "VidaCaixa",
    w: 140,
    h: 120,
    alto: "h-10",
  },
  {
    src: "/images/logos/capgemini.png",
    alt: "Capgemini",
    w: 537,
    h: 120,
    alto: "h-6",
  },
  {
    src: "/images/logos/openbank.png",
    alt: "Openbank",
    w: 539,
    h: 120,
    alto: "h-7",
  },
  {
    src: "/images/logos/minsait.png",
    alt: "Minsait",
    w: 239,
    h: 120,
    alto: "h-9",
  },
  {
    src: "/images/logos/eqx.png",
    alt: "Elite Quality Index",
    w: 419,
    h: 120,
    alto: "h-9",
  },
];

export function ClientsStrip({ label }: { label: string }) {
  return (
    <section className="clients-ed">
      <div className="contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8">
        <p className="sh-label">
          {label}
          <span aria-hidden className="sh-line" />
        </p>
        <ul className="clients-grid">
          {LOGOS.map((logo) => (
            <li key={logo.alt} className="clients-cell">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className={`client-logo client-logo--ed ${logo.alto} w-auto`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
