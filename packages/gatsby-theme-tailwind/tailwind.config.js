const config = require('starterThemeConfig')

module.exports = {
  purge: [],
  darkMode: 'class',

  theme: {
    ...config,

    extend: {
      colors: {
        test: '#345679',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
