import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Remove i18n config as it's not supported in App Router
  // i18n will be handled manually in our app
  reactStrictMode: true,
};

export default nextConfig;