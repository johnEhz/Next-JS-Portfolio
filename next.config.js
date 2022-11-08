/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['w7.pngwing.com']
  },
  env: {
    SERVICE_ID: "service_y9de4ig",
    TEMPLATE_ID: "template_vgujkob",
    API_KEY_ID: "r7e6I_TnljlLgCTtO"
  }
}

module.exports = nextConfig
