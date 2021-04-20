const defaultTheme = require('tailwindcss/defaultTheme')
// export * from './colors'
const colors = require('./colors')

module.exports = {
  colors,
  screens: {
    ...defaultTheme.screens,
  },
  spacing: {
    ...defaultTheme.spacing,
  },
  borderRadius: {
    ...defaultTheme.borderRadius,
  },

  borderWidth: {
    ...defaultTheme.borderWidth,
  },
  boxShadow: {
    ...defaultTheme.boxShadow,
  },

  //Typography
  letterSpacing: {
    ...defaultTheme.letterSpacing,
  },
  lineHeight: {
    ...defaultTheme.lineHeight,
    body: 1.8,
    heading: 1.1,
    loose: 2,
    none: 1,
  },
  fontWeight: {
    ...defaultTheme.fontWeight,
    body: 400,
    heading: `bold`,
    bold: 700,
  },
  fontFamily: {
    ...defaultTheme.fontFamily,
  },
  fontSize: {
    ...defaultTheme.fontSize,
  },
}
