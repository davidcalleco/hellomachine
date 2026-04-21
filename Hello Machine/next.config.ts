import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath only needed for Webflow Cloud deployment
  basePath: process.env.VERCEL ? undefined : "/app",
};

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
