/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  async headers() {
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
  },
};

export default config;
