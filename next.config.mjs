// @ts-check

import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts', // where the service worker src is
  swDest: 'public/sw.js', // where the service worker code will end up
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  headers: () =>
    new Promise(() => {
      return [
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
      ];
    }),
};

export default withSerwist(nextConfig);
