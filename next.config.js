/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig



  module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["image.tmdb.org"],
        formats: ["image/webp"],
    },
};