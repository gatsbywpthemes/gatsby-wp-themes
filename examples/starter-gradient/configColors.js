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
  headerBg: dark,
  headerColor: ultraLight,
  footerBg: dark,
  footerColor: ultraLight,
  searchBg: light,
  mobileMenuBg: "black",
  mobileMenuColor: light,
  subMenuBg: "black",
  subMenucolor: "white",
  nlButtonBg: primary,
  nlButtonColor: "white",
  nlInputBg: light,
  archiveTitleBg: "black",
  infoBg: darken(0.02, light),
  archiveTitleBg: gray[100],
  cardBg: ultraLight,

  modes: {
    dark: {
      headerBg: ultraDark,
      searchBg: dark2,
      bg: dark,
      text: light,
      mobileMenuBg: dark,
      mobileMenuColor: light,
      subMenuBg: secondary,
      subMenucolor: "white",
      nlButtonBg: secondary,
      nlButtonColor: light,
      nlInputBg: lighten(0.05, dark),
      archiveTitleBg: primary,
      infoBg: ultraDark,
      archiveTitleBg: primary,
      highlight: yellow,
      cardBg: dark2,
    },
  },
}

export default colors
