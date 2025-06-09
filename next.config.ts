import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, //30 dias
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
