import Image from "next/image";
import Link from "next/link";
import { BrowserFrame, RevealChildren } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { routePath } from "@/i18n/routes";

type ProductionItem = {
  name: string;
  text: string;
  domain: string;
  image: string;
  alt: string;
  route: "snowy" | "eqx" | "lariojameteo";
};

export function ProductionStrip({
  locale,
  items,
  linkLabel,
}: {
  locale: Locale;
  items: ProductionItem[];
  linkLabel: string;
}) {
  return (
    <RevealChildren className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-3 lg:gap-6">
      {items.map((item) => (
        <Link
          key={item.name}
          href={routePath(locale, item.route)}
          className="production-card"
        >
          <BrowserFrame label={item.domain}>
            <Image
              src={item.image}
              alt={item.alt}
              width={1200}
              height={750}
              className="aspect-[16/10] h-auto w-full object-cover object-top"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </BrowserFrame>
          <span className="mt-5 block">
            <span className="t-card block">{item.name}</span>
            <span className="area-text block">{item.text}</span>
            <span className="area-link">
              {linkLabel}
              <span aria-hidden className="ml-1">
                &rsaquo;
              </span>
            </span>
          </span>
        </Link>
      ))}
    </RevealChildren>
  );
}
