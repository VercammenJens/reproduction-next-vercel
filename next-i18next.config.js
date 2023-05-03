const path = require('path')

module.exports = {
  i18n: {
    locales: ['default', 'nl', 'fr'],
    defaultLocale: 'default'
  },
  localeDetection: false,
  trailingSlash: true,
  localePath: path.resolve('./public/translations')
}
