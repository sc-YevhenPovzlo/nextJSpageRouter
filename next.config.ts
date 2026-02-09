import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  i18n: {
    locales: ["en-us", "en"],
    defaultLocale: "en-us",
  },
};

export default nextConfig;
