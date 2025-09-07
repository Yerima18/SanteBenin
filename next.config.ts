/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ['fr', 'fon', 'yoruba'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig