import Image from "next/image";
import { Reveal, Section, SectionHeader } from "@/components/ui";
import type { TitledText } from "@/types/content";

type CaseDetailsProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  items: (TitledText & { image: string; alt: string })[];
};

/* Recortes grandes de la interfaz, no capturas de pantalla completas. Una
   captura entera enseña que existe; un recorte a este tamaño enseña cómo está
   resuelto, que es lo que mira quien va a contratarte. */
export function CaseDetails({ eyebrow, title, text, items }: CaseDetailsProps) {
  return (
    <Section className="border-t border-[var(--line)]">
      <SectionHeader eyebrow={eyebrow} title={title} text={text} />
      <div className="mt-12 flex flex-col gap-14 sm:mt-16 sm:gap-20">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <figure className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14">
              <figcaption className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-[1.5rem] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1.0625rem] leading-[1.55] text-[var(--muted)]">
                  {item.text}
                </p>
              </figcaption>
              <div className="overflow-hidden rounded-[var(--radius-card-lg)] border border-[var(--line)] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1400}
                  height={430}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
