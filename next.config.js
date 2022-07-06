/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://example.com/myaccount/'
  }
}

module.exports = nextConfig
