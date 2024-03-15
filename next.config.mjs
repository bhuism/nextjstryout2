// @ts-check

import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: 'app/sw.ts', // where the service worker src is
  swDest: 'public/sw.js', // where the service worker code will end up
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'lib'],
  },
  output: 'standalone',
  headers: async () => [
    {
      source: '/',
      headers: [
        {
          key: 'mysha',
          value: process.env.NEXT_PUBLIC_GIT_SHA,
        },
        {
          key: 'myversion',
          value: process.env.NEXT_PUBLIC_RELEASE,
        },
      ],
    },
  ],
};

export default withSerwist(nextConfig);
