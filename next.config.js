const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
const {i18n} = require('./next-i18next.config')

module.exports = withSass(withFonts({i18n}))
