import { darken } from "polished"
/* Palette */

const dark = `#260D27`
const dark2 = darken(0.04, "#260D27")
const dark3 = darken(0.1, "#260D27")
const light = `#eceff1`
const primary = `#F01469`
const secondary = `#260D27`
const lightGrey = `#cfd8dc`
const grey = `#90a4ae`
const accentDark = `#F01469`
const accentLight = `#F01469`

const colorSettings = {
  /* basic colors */
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  accent: accentLight,
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
  /* header */
  headerBg: `black`,
  headerColor: light,
  headerColorHover: accentDark,
  /* footer */
  footerBg: `black`,
  footerColor: light,
  /* post */
  infoBg: light,
  cardBg: `white`,
  archiveTitleBg: grey,
  /* search */
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: `white`,
  highlightColor: accentDark,
  searchColor: grey,
  modes: {
    dark: {
      text: `#F5E7F4`,
      secondary: `#F01469`,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      infoBg: dark3,
      archiveTitleBg: secondary,
      searchColor: `#fff`,
      accent: accentDark,
    },
  },
}

export default colorSettings
