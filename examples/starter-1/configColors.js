import { darken, lighten } from "polished"
/* Palette */

const dark = `#2B2336`
const dark2 = darken(0.08, "#2B2336")
const dark3 = darken(0.15, "#2B2336")
const light = `#F4F2EF`
const light2 = lighten(0.05, "#F4F2EF")
const primary = `#8799AE`
const secondary = `#8799AE`
const lightGrey = `#cfd8dc`
const grey = `#8799AE`
const accentDark = `#9A7458`
const accentLight = `#9A7458`

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
  slideSidebarBg: dark,
  /*Newsletter*/
  nlButtonBg: accentLight,
  nlButtonBgHover: darken(0.1, accentLight),

  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      infoBg: dark3,
      archiveTitleBg: accentDark,
      accent: accentDark,
      primary: accentDark,
      secondary: accentDark,
      slideSidebarBg: accentDark,
      nlInputBg: light,
      nlInputColor: dark,
      nlButtonBg: primary,
      nlButtonBgHover: darken(0.05, primary),
    },
  },
}

export default colorSettings