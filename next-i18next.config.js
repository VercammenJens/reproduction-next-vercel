const path = require('path')

module.exports = {
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl'
  },
  localeDetection: false,
  trailingSlash: true,
  localePath: path.resolve('./public/translations')
}
