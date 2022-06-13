const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false, // Be careful, google font may be not fetched if `true`
  reactStrictMode: true, // This will make page re-render

  pwa: {
    dest: 'public',
  }
}

module.exports = withPWA(nextConfig)
