"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BrowserFrame, DeviceFrame } from "@/components/ui";

type Tool = {
  key: string;
  name: string;
  text: string;
  alt: string;
  mobileAlt?: string;
  src: string;
  width: number;
  height: number;
  mobile: string | null;
};

export function VcrTools({ tools, label }: { tools: Tool[]; label: string }) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="vcr-tour">
      <ol className="vcr-tour-steps">
        {tools.map((tool, index) => (
          <li
            key={tool.key}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            data-index={index}
            data-on={index === active || undefined}
            className="vcr-tour-step"
          >
            <span aria-hidden className="vcr-tour-dot" />
            <h3 className="vcr-tool-title">{tool.name}</h3>
            <p className="vcr-tool-text">{tool.text}</p>
            <div className="vcr-tour-inline">
              <BrowserFrame label={label}>
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  width={tool.width}
                  height={tool.height}
                  className="h-auto w-full"
                  sizes="92vw"
                />
              </BrowserFrame>
            </div>
          </li>
        ))}
      </ol>

      <div className="vcr-tour-stage" aria-hidden>
        <div className="vcr-tour-sticky">
          <BrowserFrame label={label}>
            <div
              className="vcr-tour-screens"
              style={{
                aspectRatio: `${tools[active].width} / ${tools[active].height}`,
              }}
            >
              {tools.map((tool, index) => (
                <Image
                  key={tool.key}
                  src={tool.src}
                  alt=""
                  width={tool.width}
                  height={tool.height}
                  data-on={index === active || undefined}
                  className="vcr-tour-screen"
                  sizes="(max-width: 1279px) 56vw, 720px"
                />
              ))}
            </div>
          </BrowserFrame>
          {tools.map((tool, index) =>
            tool.mobile ? (
              <DeviceFrame
                key={tool.key}
                src={tool.mobile}
                alt=""
                className={`vcr-tour-phone${index === active ? " is-on" : ""}`}
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
