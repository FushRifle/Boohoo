import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  transpilePackages: ["@next/font", "@next/react-dev-overlay"],
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["example.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com", // Wildcard for subdomains
      },
    ],
  },
};

export default nextConfig;
