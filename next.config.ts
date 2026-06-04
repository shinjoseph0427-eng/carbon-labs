import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist in parent dirs).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

// Enable Cloudflare bindings (env, R2, KV, etc.) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
