import type { NextConfig } from "next";

// Rebuild: 1776796059
const nextConfig: NextConfig = {};

export default nextConfig;

// Cloudflare initialization only for local development
if (process.env.NODE_ENV === "development" && !process.env.VERCEL) {
  try {
    const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
    initOpenNextCloudflareForDev();
  } catch (e) {
    // Cloudflare not available
  }
}
