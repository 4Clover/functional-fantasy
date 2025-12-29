/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Lint runs from root
  },
  transpilePackages: ['@fantasy/ui', '@fantasy/utils', '@fantasy/types', '@fantasy/api-client'],
};

export default nextConfig;
