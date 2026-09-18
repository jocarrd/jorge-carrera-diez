import Image from "next/image";
import { site } from "@/content";

export function HeroStage() {
  return (
    <div className="hero-stage rise rise-3" aria-hidden>
      <div className="hero-win hero-win--back">
        <div className="hero-bar">
          <span />
          <span />
          <span />
          <p>{site.snowyDomain}/radar</p>
        </div>
        <Image
          src="/images/snowy-radar-map.webp"
          alt=""
          width={1600}
          height={1000}
          sizes="760px"
        />
      </div>

      <div className="hero-win hero-win--front">
        <div className="hero-bar">
          <span />
          <span />
          <span />
          <p>elitequality.org</p>
        </div>
        <Image
          src="/images/eqx-index.webp"
          alt=""
          width={1600}
          height={1000}
          priority
          sizes="(max-width: 1023px) 92vw, 820px"
        />
      </div>

      <div className="hero-device">
        <Image
          src="/images/snowy-home-movil.webp"
          alt=""
          width={780}
          height={1865}
          sizes="220px"
        />
      </div>
    </div>
  );
}
