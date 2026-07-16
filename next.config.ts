import type { NextConfig } from 'next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Ensure static export optimization is enabled for V1 if deploying statically
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: frontendRoot,
  },
};

export default nextConfig;
