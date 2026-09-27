import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/cursos", destination: "/", permanent: true },
      { source: "/cursos/:path*", destination: "/", permanent: true },
      { source: "/en/courses", destination: "/en", permanent: true },
      { source: "/en/courses/:path*", destination: "/en", permanent: true },
    ];
  },
  outputFileTracingExcludes: {
    "**/*": [
      "./node_modules/sharp/**",
      "./node_modules/@img/**",
      "./node_modules/.pnpm/**/sharp/**",
      "./node_modules/.pnpm/**/@img/**",
    ],
  },
};

export default nextConfig;
