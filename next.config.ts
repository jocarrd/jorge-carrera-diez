import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Con una raíz por idioma no hay un layout único del que colgar la 404:
    // la página de error de toda la web vive en app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
