const config = require("./themeConfig")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
