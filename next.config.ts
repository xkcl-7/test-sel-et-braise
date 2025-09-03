import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
