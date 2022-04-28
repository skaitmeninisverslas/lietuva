/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
  // ssr and displayName are configured by default
  experimental: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
