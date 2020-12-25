const config = require("./themeConfig")

module.exports = {
  purge: [],
  darkMode: "class",

  theme: {
    ...config,

    extend: {
      colors: {
        primary: "#345679",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
