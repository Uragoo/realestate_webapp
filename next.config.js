/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['kontio.studio.crasman.fi', 'q-xx.bstatic.com', "bayut-production.s3.eu-central-1.amazonaws.com"]
  },
}

module.exports = nextConfig
