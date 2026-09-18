import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
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
