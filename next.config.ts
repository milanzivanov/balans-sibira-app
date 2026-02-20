import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
  reactCompiler: true,
  compress: true,
  poweredByHeader: false
};

export default nextConfig;
