/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iad3-1.xx.fbcdn.net',
        port: '',
        pathname: '/v/**',
      },
    ]
  }
};

export default nextConfig;
