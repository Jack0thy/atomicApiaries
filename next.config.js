/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/atomicApiaries', // This should match your repository name exactly
  assetPrefix: '/atomicApiaries/', // Add this line
}

module.exports = nextConfig 