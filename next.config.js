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
  images: {
    domains: ['https://furiums-portfolio.s3.us-west-1.amazonaws.com', 'cdn.jumpit.co.kr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'furiums-portfolio.s3.us-west-1.amazonaws.com',
        pathname: '/v3/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jumpit.co.kr',
        pathname: '/images/stacks/**',
      },
    ],
  },
  compiler: {
    removeConsole: isProdRemoveConsoleOption,
    styledComponents: {
      displayName: false,
    },
  },
};

module.exports = nextConfig;
