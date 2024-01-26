const { i18n } = require('./next-i18next.config')

/** @type {import("next").NextConfig} */
module.exports = {
  i18n,
  reactStrictMode: true,
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/nl/verhuizen',
          destination: '/nl/move',
          locale: false
        },
        {
          source: '/fr/deplacer',
          destination: '/fr/move',
          locale: false
        },
        {
          source: '/nl/verhuizen/:slug',
          destination: '/nl/move/:slug',
          locale: false
        },
        {
          source: '/fr/deplacer/:slug',
          destination: '/fr/move/:slug',
          locale: false
        }
      ]
    }
  }
}
