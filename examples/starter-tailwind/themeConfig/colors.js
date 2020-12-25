const colors = require("tailwindcss/colors")

const {
  blueGray,
  coolGray,
  trueGray,
  warmGray,
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
  emerald,
  teal,
  cyan,
  lightBlue,
  blue,
  indigo,
  violet,
  purple,
  fuchsia,
  pink,
  rose,
  gray,
} = colors

//palette
const light = gray[100],
  ultraLight = gray[50],
  dark = gray[700],
  ultraDark = gray[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = gray[200],
  bg = ultraLight,
  text = ultraDark

module.exports = {
  /* header */
  ...colors,
  light,
  ultraLight,
  ultraDark,
  primary,
  secondary,
  highlight,
  mutted,
  bg,
  text,
  /* header */
  headerBg: "white",
  headerColor: ultraDark,
  /* footer */
  footerBg: "white",
  footerColor: ultraDark,
  /* search */
  searchBg: "white",
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
  nlButtonBg: "black",
  nlButtonColor: "white",
  nlInputBg: light,
  /* post */
  archiveTitleBg: "black",
  infoBg: light,
  archiveTitleBg: gray[100],
  cardBg: "white",

  modes: {
    dark: {
      /* basic colors*/
      bg: dark,
      text: ultraLight,
      /* header*/
      headerBg: ultraDark,
      headerColor: ultraLight,
      /* footer*/
      footerBg: ultraDark,
      footerColor: ultraLight,
      /* search */
      searchBg: ultraDark,
      searchResultsHeaderBg: primary,
      searchResultsHeaderColor: light,
      searchResultsBg: bg,
      searchResultsColor: text,
      /* menu*/
      mobileMenuBg: "black",
      mobileMenuColor: light,
      subMenuBg: primary,
      subMenucolor: "white",
      /* newsletter */
      nlButtonBg: primary,
      nlButtonColor: "white",
      nlInputBg: gray[700],
      /* post*/
      archiveTitleBg: primary,
      infoBg: primary,
      cardBg: ultraDark,
    },
  },
}
