/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Lint runs from root
  },
  transpilePackages: ['@fantasy/ui', '@fantasy/utils', '@fantasy/types', '@fantasy/api-client', '@fantasy/database'],
  webpack: (config) => {
    // Handle .js -> .ts resolution for ESM TypeScript packages
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
      '.mjs': ['.mts', '.mjs'],
    };
    return config;
  },
};

export default nextConfig;
