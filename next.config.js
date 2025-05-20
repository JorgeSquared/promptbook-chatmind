/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath for GitHub Pages deployment if needed
  // basePath: '/promptbook-chatmind',
}

module.exports = nextConfig 