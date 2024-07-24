/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "products-images-default.jpeg"],
  },
};
// config.resolve.alias["@"] = path.resolve(".");

export default nextConfig;
