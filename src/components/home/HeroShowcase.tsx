import Image from "next/image";
import { BrowserFrame, Container, DeviceFrame } from "@/components/ui";

export function HeroShowcase() {
  return (
    <section className="hero-show" aria-hidden>
      <Container>
        <div className="hero-show-stage">
          <BrowserFrame
            label="www.valuecreation.org"
            tone="dark"
            className="hero-show-browser"
          >
            <Image
              src="/images/vcr/vcr-scorecard.webp"
              alt=""
              width={2000}
              height={1408}
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
