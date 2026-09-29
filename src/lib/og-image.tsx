import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { getCopy, site } from "@/content";
import type { Locale } from "@/i18n/config";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OpenGraphOverrides = {
  eyebrow?: string;
  tagline?: string;
  stats?: [string, string][];
};

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](\s|$)/);
  const sentence = (match ? match[0] : text).trim();
  return sentence.length > 150 ? `${sentence.slice(0, 147).trimEnd()}…` : sentence;
}

export async function renderOpenGraphImage(
  locale: Locale,
  overrides: OpenGraphOverrides = {},
) {
  const base = getCopy(locale).meta;
  const inner = Boolean(overrides.eyebrow);
  const label = inner ? site.name : base.ogEyebrow;
  const title = overrides.eyebrow ?? site.name;
  const tagline = firstSentence(overrides.tagline ?? base.ogTagline);
  const stats = overrides.stats ?? base.ogStats;

  const [regular, semibold, bold, retrato] = await Promise.all([
    readFile(new URL("../assets/fonts/Geist-Regular.woff", import.meta.url)),
    readFile(new URL("../assets/fonts/Geist-SemiBold.woff", import.meta.url)),
    readFile(new URL("../assets/fonts/Geist-Bold.woff", import.meta.url)),
    readFile(new URL("../assets/jorge-og-recorte.png", import.meta.url)),
  ]);
  const foto = `data:image/png;base64,${retrato.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
        color: "#f2f2f2",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          bottom: -160,
          width: 620,
          height: 620,
          borderRadius: 620,
          background:
            "radial-gradient(circle, rgba(212,255,58,0.16) 0%, rgba(212,255,58,0) 65%)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={foto}
        alt=""
        style={{
          position: "absolute",
          right: 18,
          bottom: 0,
          height: 560,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 760,
          height: "100%",
          padding: "52px 40px 50px 68px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M31.4 13.4a13.4 13.4 0 1 0 0 13.2"
              stroke="#f2f2f2"
              strokeWidth="4.6"
              strokeLinecap="round"
            />
            <path
              d="M22.6 12.6v9.2a4.7 4.7 0 0 1-8.8 2.3"
              stroke="#d4ff3a"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              color: "#f2f2f2",
            }}
          >
            {label}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 18 ? 68 : 84,
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: -3.6,
              color: "#ffffff",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              width: 72,
              height: 6,
              borderRadius: 6,
              background: "#d4ff3a",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 620,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#b5b5b5",
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 40 }}>
          {stats.map(([statLabel, value]) => (
            <div
              key={statLabel}
              style={{
                display: "flex",
                flexDirection: "column",
                width: 190,
                borderTop: "1px solid #2a2a2a",
                paddingTop: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#8a8a8a",
                }}
              >
                {statLabel.charAt(0).toUpperCase() + statLabel.slice(1)}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 6,
                  fontSize: 21,
                  color: "#f2f2f2",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
