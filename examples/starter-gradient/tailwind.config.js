// const config = require("@gatsbywpthemes/gatsby-theme-wp-starter/themeConfig")
const config = require("./themeConfig")
// const colorsSettings = require("./configColors")
// const typographySettings = require("./configTypography")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    ...config,

    extend: {
      colors: {
        // ...colorsSettings,
      },
      // fontFamily: {
      //   ...typographySettings.fonts,
      // },
      // fontWeights: {
      //   ...typographySettings.fontWeights,
      // },
      // fontSize: {
      //   ...typographySettings.fontSizes,
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
