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

export async function renderOpenGraphImage(
  locale: Locale,
  overrides: OpenGraphOverrides = {},
) {
  const base = getCopy(locale).meta;
  const copy = {
    ...base,
    ogEyebrow: overrides.eyebrow ?? base.ogEyebrow,
    ogTagline: overrides.tagline ?? base.ogTagline,
    ogStats: overrides.stats ?? base.ogStats,
  };

  const [regular, semibold, bold, retrato] = await Promise.all([
    readFile(new URL("../assets/fonts/Geist-Regular.woff", import.meta.url)),
    readFile(new URL("../assets/fonts/Geist-SemiBold.woff", import.meta.url)),
    readFile(new URL("../assets/fonts/Geist-Bold.woff", import.meta.url)),
    readFile(new URL("../assets/jorge-og.jpg", import.meta.url)),
  ]);
  const foto = `data:image/jpeg;base64,${retrato.toString("base64")}`;

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
          right: 0,
          top: 0,
          width: 452,
          height: "100%",
          background: "#101010",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 748,
            padding: "44px 56px 52px 68px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: 34,
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="none"
              style={{ marginBottom: 22 }}
            >
              <path
                d="M31.4 13.4a13.4 13.4 0 1 0 0 13.2"
                stroke="#f2f2f2"
                strokeWidth="4.6"
                strokeLinecap="round"
              />
              <path
                d="M22.6 12.6v9.2a4.7 4.7 0 0 1-8.8 2.3"
                stroke="#fb923c"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2.4,
                textTransform: "uppercase",
                color: "#fb923c",
              }}
            >
              {copy.ogEyebrow}
            </div>
            <div
              style={{
                marginTop: 22,
                fontSize: 74,
                lineHeight: 1.02,
                fontWeight: 600,
                letterSpacing: -3.4,
                color: "#f2f2f2",
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                marginTop: 24,
                maxWidth: 600,
                fontSize: 27,
                lineHeight: 1.42,
                color: "#a0a0a0",
              }}
            >
              {copy.ogTagline}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 46 }}>
              {copy.ogStats.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 196,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#6e6e6e",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 9,
                      fontSize: 20,
                      color: "#f2f2f2",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 34,
                paddingTop: 24,
                borderTop: "1px solid #222222",
                fontSize: 22,
                fontWeight: 600,
                color: "#f2f2f2",
              }}
            >
              {site.domain}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 452,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={foto}
            alt=""
            width={452}
            height={630}
            style={{
              width: 452,
              height: 630,
              objectFit: "cover",
              objectPosition: "50% 22%",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 150,
              height: 630,
              background:
                "linear-gradient(to right, #0a0a0a, rgba(10,10,10,0))",
            }}
          />
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
