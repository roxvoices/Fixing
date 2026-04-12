import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Generates static HTML for every page - perfect for Google indexing
  // Deploy to Vercel, Netlify, or any static host
  // Remove this line if you want server-side rendering instead
  // output: 'export',

  // Allow images from external sources if needed
  images: {
    unoptimized: true,
  },
}

export default nextConfig
