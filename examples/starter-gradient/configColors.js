import { theme } from "@chakra-ui/react"
import { darken, lighten } from "polished"

const { gray } = theme.colors

//Palette

const light = "#FBEED9",
  ultraLight = lighten(0.04, "#FBEED9"),
  dark = "#082737",
  dark0 = lighten(0.08, "#082737"),
  dark2 = darken(0.04, "#082737"),
  ultraDark = darken(0.1, "#082737"),
  primary = "tomato",
  secondary = "#4C959B",
  yellow = "#FCB458",
  purple = "#c725A3"

const colors = {
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
  infoBg: darken(0.02, light),
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

export default colors
