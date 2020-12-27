const config = require("@gatsbywpthemes/gatsby-theme-wp-starter/themeConfig")

module.exports = {
  ppurge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    ...config,

    extend: {
      colors: {
        // test: "#345679",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
