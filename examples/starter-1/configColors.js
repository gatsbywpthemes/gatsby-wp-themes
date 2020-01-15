import { darken, lighten } from "polished"
/* Palette */

const dark = `#2B2336`
const dark2 = darken(0.08, "#2B2336")
const dark3 = darken(0.15, "#2B2336")
const light = `#F4F2EF`
const light2 = lighten(0.05, "#F4F2EF")
const primary = `#8799AE`
const secondary = `#9A7458`
const lightGrey = `#cfd8dc`
const grey = `#8799AE`
const accentDark = `#994A41`
const accentLight = `#994A41`

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
  white: lighten(0.1, light),
  black: `black`,
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  /* header */
  headerBg: dark,
  headerColor: light,
  headerColorHover: accentDark,
  /* footer */
  footerBg: dark,
  footerColor: light,
  /* post */
  infoBg: light,
  cardBg: `white`,
  archiveTitleBg: secondary,
  /* search */
  searchResultsHeaderBg: secondary,
  searchResultsHeaderColor: light,
  highlightColor: accentDark,
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
      accent: accentDark,
    },
  },
}

export default colorSettings
