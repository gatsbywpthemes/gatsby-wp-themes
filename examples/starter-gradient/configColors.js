const Color = require("color")

const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

//Palette

const light = "#FBEED9",
  ultraLight = lighten("#FBEED9", 0.04),
  dark = "#082737",
  dark0 = lighten("#082737", 0.08),
  dark2 = darken("#082737", 0.3),
  ultraDark = darken("#082737", 0.6),
  primary = "tomato",
  secondary = "#4C959B",
  yellow = "#FCB458",
  purple = "#c725A3",
  bg = ultraLight,
  text = ultraDark

module.exports = {
  /* basic colors*/
  light,
  ultraLight,
  dark,
  primary,
  secondary,
  ultraDark,
  highlight: purple,
  yellow,
  purple,
  bg: light,
  text: dark0,
  /* header */
  headerBg: dark,
  headerColor: ultraLight,
  /* footer */
  footerBg: dark,
  footerColor: ultraLight,
  /* search*/
  searchBg: light,
  searchResultsHeaderBg: ultraDark,
  searchResultsHeaderColor: primary,
  searchResultsBg: bg,
  searchResultsColor: text,
  /* menu */
  mobileMenuBg: "black",
  mobileMenuColor: light,
  subMenuBg: "black",
  subMenucolor: "white",
  /* newsletter */
  nlButtonBg: primary,
  nlButtonColor: "white",
  nlInputBg: light,
  /* post */
  archiveTitleBg: "black",
  infoBg: darken(light, 0.02),
  archiveTitleBg: primary,
  cardBg: ultraLight,

  modes: {
    dark: {
      /* basic colors */
      bg: dark,
      text: light,
      /* header */
      headerBg: ultraDark,
      headerColor: ultraLight,
      /* footer */
      footerBg: ultraDark,
      footerColor: ultraLight,
      /* search */
      searchBg: dark2,
      searchResultsHeaderBg: primary,
      searchResultsHeaderColor: light,
      searchResultsBg: bg,
      searchResultsColor: text,
      /* menu */
      mobileMenuBg: dark,
      mobileMenuColor: light,
      subMenuBg: secondary,
      subMenucolor: "white",
      /* newsletter */
      nlButtonBg: secondary,
      nlButtonColor: light,
      nlInputBg: lighten(0.05, dark),
      /* post*/
      archiveTitleBg: primary,
      infoBg: ultraDark,
      archiveTitleBg: primary,
      highlight: yellow,
      cardBg: dark2,
    },
  },
}
