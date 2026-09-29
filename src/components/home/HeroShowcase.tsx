import Image from "next/image";
import { BrowserFrame, Container, DeviceFrame } from "@/components/ui";

export function HeroShowcase() {
  return (
    <section className="hero-show" aria-hidden>
      <Container>
        <div className="hero-show-stage">
          <BrowserFrame
            label="elitequality.org"
            tone="dark"
            className="hero-show-browser"
          >
            <Image
              src="/images/eqx-index.webp"
              alt=""
              width={1600}
              height={1000}
              sizes="(max-width: 1023px) 92vw, 900px"
              className="block h-auto w-full"
            />
          </BrowserFrame>
          <DeviceFrame
            src="/images/snowy-home-movil.webp"
            alt=""
            className="hero-show-device"
          />
        </div>
      </Container>
    </section>
  );
}
