// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: false
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
