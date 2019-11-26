import { darken } from 'polished'

const dark = `#263238`
const dark2 = darken(0.04, '#263238')
const dark3 = darken(0.1, '#263238')
const light = `#eceff1`
const primary = `#607d8b`
const secondary = `#455a64`
const lightGrey = `#cfd8dc`
const grey = `#90a4ae`
const accent = `#ffab91`

export const colors = {
  primary: primary,
  secondary: secondary,
  accent: accent,
  light: light,
  dark: dark,
  lightGrey: lightGrey,
  background: light,
  bgInverse: dark,
  text: dark,
  textInverse: light,
  white: `white`,
  black: `black`,
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark,
  headerColor: light,
  headerColorHover: accent,
  footerBg: dark,
  footerColor: light,
  infoBg: light,
  cardBg: `white`,
  archiveTitleBg: grey,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: `white`,
  highlightColor: accent,
  searchColor: grey,
  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      infoBg: dark3,
      archiveTitleBg: secondary,
      searchColor: primary,
    },
  },
}
