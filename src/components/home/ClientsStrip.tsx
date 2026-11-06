import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  w: number;
  h: number;
  alto: string;
};

type Stop = Logo & {
  from: number;
  to: number | null;
  clients?: Logo[];
};

const LOGOS: Stop[] = [
  {
    src: "/images/logos/lumyna.png",
    alt: "Lumyna",
    w: 634,
    h: 120,
    alto: "h-5",
    from: 2026,
    to: null,
  },
  {
    src: "/images/logos/eqx.png",
    alt: "Elite Quality Index",
    w: 419,
    h: 120,
    alto: "h-9",
    from: 2026,
    to: null,
  },
  {
    src: "/images/logos/capgemini.png",
    alt: "Capgemini",
    w: 537,
    h: 120,
    alto: "h-6",
    from: 2025,
    to: 2026,
    clients: [
      {
        src: "/images/logos/vidacaixa.png",
        alt: "VidaCaixa",
        w: 140,
        h: 120,
        alto: "h-6",
      },
      {
        src: "/images/logos/openbank.png",
        alt: "Openbank",
        w: 539,
        h: 120,
        alto: "h-4",
      },
    ],
  },
  {
    src: "/images/logos/minsait.png",
    alt: "Minsait",
    w: 239,
    h: 120,
    alto: "h-9",
    from: 2023,
    to: 2025,
    clients: [
      {
        src: "/images/logos/inditex.png",
        alt: "Inditex",
        w: 579,
        h: 120,
        alto: "h-2.5",
      },
    ],
  },
];

export function ClientsStrip({
  label,
  now,
  clientsLabel,
}: {
  label: string;
  now: string;
  clientsLabel: string;
}) {
  return (
    <section className="clients-ed">
      <div className="contenedor mx-auto w-full max-w-[1120px] px-[22px] sm:px-8">
        <p className="sh-label">
          {label}
          <span aria-hidden className="sh-line" />
        </p>
        <ol className="career-strip">
          {LOGOS.map((logo) => {
            const current = logo.to === null;
            const range = current
              ? `${logo.from} — ${now}`
              : logo.from === logo.to
                ? `${logo.from}`
                : `${logo.from} — ${logo.to}`;
            return (
              <li
                key={logo.alt}
                className="career-stop"
                data-current={current || undefined}
              >
                <span aria-hidden className="career-year">
                  {logo.from}
                </span>
                <div className="career-logo">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                    className={`client-logo client-logo--ed ${logo.alto} w-auto`}
                  />
                </div>
                <span aria-hidden className="career-dot" />
                <span className="career-range">{range}</span>
                {logo.clients ? (
                  <ul
                    className="career-clients"
                    aria-label={`${clientsLabel} ${logo.clients.map((client) => client.alt).join(", ")}`}
                  >
                    {logo.clients.map((client) => (
                      <li key={client.alt}>
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={client.w}
                          height={client.h}
                          className={`client-logo ${client.alto} w-auto`}
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
