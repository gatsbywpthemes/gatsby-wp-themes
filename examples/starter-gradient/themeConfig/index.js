const merge = require("deepmerge")
const defaultConfig = require("@gatsbywpthemes/gatsby-theme-wp-starter/themeConfig")
const colorSettings = require("../configColors")
const typoSettings = require("../configTypography")

const { fonts, lineHeights, fontWeights, fontSizes } = typoSettings

module.exports = merge(defaultConfig, {
  colors: colorSettings,
  fontFamily: fonts,
  fontEeight: fontWeights,
  lineHeight: lineHeights,
  fontSize: fontSizes,
})
