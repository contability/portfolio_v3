/** @type {import('next').NextConfig} */
const isProdRemoveConsoleOption =
  process.env.NODE_ENV === 'production'
    ? {
        exclude: ['error'],
      }
    : false;

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
  swcMinify: true,
  distDir: 'build',
  images: {
    domains: ['https://furiums-portfolio.s3.us-west-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'furiums-portfolio.s3.us-west-1.amazonaws.com',
        pathname: '/v3/**',
      },
    ],
  },
  compiler: {
    removeConsole: isProdRemoveConsoleOption,
  },
};

module.exports = nextConfig;
