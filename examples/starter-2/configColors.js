import { darken, lighten } from "polished"

const dark = "#082737"
const dark0 = lighten(0.08, "#082737")
const dark2 = darken(0.04, "#082737")
const dark3 = darken(0.1, "#082737")
const light = "#FBEED9"
const light2 = lighten(0.04, "#FBEED9")
const primary = "tomato"
const secondary = "#4C959B"
const lightGrey = "#cfd8dc"
const grey = "#90a4ae"
const yellow = "#FCB458"
const purple = "#9725A3"
const accentDark = "#FCB458"
const accentLight = "tomato"

const colorSettings = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  yellow,
  purple,
  accent: accentDark,
  background: dark,
  bgInverse: dark,
  text: light,
  textInverse: light,
  white: "white",
  black: "black",
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark3,
  headerColor: light,
  headerColorHover: accentDark,
  footerBg: dark3,
  footerColor: light,
  infoBg: dark3,
  cardBg: dark2,
  archiveTitleBg: secondary,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: "white",
  highlightColor: accentDark,
  searchColor: primary,
  slideSidebarBg: dark,
  focusOutline: grey,
  nlInputBg: lighten(0.05, dark),
  nlInputColor: light,
  nlButtonBg: secondary,
  nlButtonBgHover: darken(0.05, secondary),
  nlButtonColor: light,
  gradientColor1: dark,
  gradientColor2: darken(0.08, dark),
  // gradientColor1: lighten(0.1, secondary),
  // gradientColor2: secondary,

  modes: {
    light: {
      text: dark0,
      background: light,
      cardBg: light2,
      headerBg: dark,
      footerBg: dark,
      infoBg: darken(0.02, light),
      archiveTitleBg: grey,
      searchColor: grey,
      accent: accentLight,
      nlInputBg: light,
      nlInputColor: dark,
      nlButtonBg: primary,
      nlButtonBgHover: darken(0.1, primary),
      gradientColor1: lighten(0.2, dark),
      gradientColor2: dark,
    },
  },
}

export default colorSettings
