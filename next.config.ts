import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during Netlify build
  },
};

export default nextConfig;
