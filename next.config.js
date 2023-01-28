const ESLintPlugin = require('eslint-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ['ts', 'tsx'],
        })
      )
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false
      },
    ];
  }
}

module.exports = nextConfig
