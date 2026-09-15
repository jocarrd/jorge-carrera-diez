import { Geist, Geist_Mono } from "next/font/google";

// Geist es la cara de la casa y va primero en la pila, no de respaldo. Con
// `-apple-system` delante, en macOS e iOS la web se renderizaba con San
// Francisco: la letra de Apple, que es la mayor parte de la identidad de una
// pagina.
//
// La pareja es deliberada: una grotesca neutra de caja alta para la prosa y
// una monoespaciada como voz secundaria para todo lo que es metadato
// —etiquetas, numeros de seccion, dominios, tiempos—. El contraste entre las
// dos es lo que sostiene el tono tecnico sin recurrir al color.
export const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans-geist",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-geist",
});

export const fontClass = `${sans.variable} ${mono.variable}`;
