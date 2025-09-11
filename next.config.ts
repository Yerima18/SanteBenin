/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  // Optimisations pour la production
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Configuration pour Vercel
  output: 'standalone'
}

module.exports = nextConfig