/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "products-images-default.jpeg",
      "cloudflare-ipfs.com",
    ],
  },
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
// config.resolve.alias["@"] = path.resolve(".");

export default nextConfig;
