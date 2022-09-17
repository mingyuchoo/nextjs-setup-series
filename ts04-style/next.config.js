/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const API_KEY = process.env.API_KEY

module.exports = nextConfig
