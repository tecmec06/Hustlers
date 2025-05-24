/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://cyware.vercel.app/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.cyware.vercel.app',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 