import baseConfig from './base.mjs';

export default [
    ...baseConfig,
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            // Next.js specific rules
        },
    },
];