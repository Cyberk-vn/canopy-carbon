import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // If you use next/image, disable optimization for static export
  images: { unoptimized: true },
};

export default nextConfig;
