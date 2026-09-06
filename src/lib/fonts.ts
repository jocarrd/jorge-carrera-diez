import { IBM_Plex_Mono, Onest } from "next/font/google";

// Onest es la cara de la casa y va primero en la pila, no de respaldo. Antes
// mandaba `-apple-system`, así que en macOS e iOS la web se renderizaba con San
// Francisco: la letra de Apple, que es el 70 % de la identidad de una página.
//
// Y había un motivo práctico además del de marca: todo el ajuste fino —el
// interlineado de los titulares, los altos de tarjeta, las dos páginas exactas
// del PDF del CV— está medido sobre Onest. Con la pila anterior, quien entraba
// desde un Mac veía una composición que nadie había verificado.
export const sans = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-onest",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-plex",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
