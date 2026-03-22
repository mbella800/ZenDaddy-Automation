/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    '0.0.0.0',
    '.replit.dev',
    '.repl.co',
    '.kirk.replit.dev',
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.zendaddy.pro',
          },
        ],
        destination: 'https://zendaddy.pro/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
