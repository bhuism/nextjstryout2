const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  disable: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {import('next').NextConfig} */
module.exports = withPWA(
  {
    swcMinify: true,
    reactStrictMode: true,
    eslint: {
      dirs: ['src'],
    },
    output: 'standalone',
  },
  nextConfig
);

