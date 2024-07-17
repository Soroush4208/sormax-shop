/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};
// config.resolve.alias["@"] = path.resolve(".");

export default nextConfig;
