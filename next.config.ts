import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "bucket1.glanacion.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "club.lanacion.com.ar",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "backwebclub-media.glanacion.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
