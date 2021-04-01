const config = require("./themeConfig")

module.exports = {
  purge: [
    "./node_modules/@gatsbywpthemes/gatsby-theme-wp-base/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",

  theme: {
    ...config,

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
}
