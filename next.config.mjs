import childProcess from 'child_process';

const commitHash = childProcess
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  output: 'standalone',
  env: {
    COMMIT_HASH: commitHash,
  },
};

export default config;
