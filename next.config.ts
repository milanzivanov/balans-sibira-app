import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

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
  reactCompiler: false,
  compress: true,
  poweredByHeader: false
};

export default withNextIntl(nextConfig);
