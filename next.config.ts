import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensure static export optimization is enabled for V1 if deploying statically
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
