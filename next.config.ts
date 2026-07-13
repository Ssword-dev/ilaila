import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  watchOptions: {
    pollIntervalMs: 20
  }
};

export default nextConfig;