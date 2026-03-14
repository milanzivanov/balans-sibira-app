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
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/sr/posts",
        permanent: true
      },
      {
        source: "/posts/:slug",
        destination: "/sr/posts/:slug",
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
