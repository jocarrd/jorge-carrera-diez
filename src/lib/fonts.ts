import localFont from "next/font/local";

// Geist 1.4.2 (paquete npm `geist`) en el repo: el build no depende de Google Fonts.
// El rango de pesos es el que se cargaba de Google; más allá, el navegador se queda en 700
export const sans = localFont({
  src: "../assets/fonts/Geist-Variable.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-sans-geist",
});

export const mono = localFont({
  src: "../assets/fonts/GeistMono-Variable.woff2",
  weight: "400 500",
  display: "swap",
  variable: "--font-mono-geist",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
