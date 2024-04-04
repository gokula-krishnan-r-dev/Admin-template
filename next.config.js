/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  serverRuntimeConfig: {
    secure: true,
  },
};

module.exports = nextConfig;
