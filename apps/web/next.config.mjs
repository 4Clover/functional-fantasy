/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    eslint: {
        ignoreDuringBuilds: false,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;