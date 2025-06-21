/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [], // Ajoutez ici les domaines d'images externes si nécessaire
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Désactivez optimizeCss temporairement
  experimental: {
    // optimizeCss: false, // Commentez cette ligne si elle existe
  },
  // Ou utilisez cette configuration plus stable
  swcMinify: true,
}

module.exports = nextConfig
