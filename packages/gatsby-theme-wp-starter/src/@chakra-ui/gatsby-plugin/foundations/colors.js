import { theme } from '@chakra-ui/react'

const { red, teal, purple, gray } = theme.colors

//Palette

const light = gray[100],
  ultraLight = gray[50],
  dark = gray[800],
  ultraDark = gray[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = gray[200]

const colors = {
  light,
  ultraLight,
  dark,
  ultraDark,
  primary,
  secondary,
  highlight,
  mutted,
  bg: ultraLight,
  text: ultraDark,
  headerBg: 'white',
  headerColor: ultraDark,
  footerBg: 'white',
  footerColor: ultraDark,
  searchBg: 'white',
  mobileMenuBg: 'black',
  mobileMenuColor: light,
  subMenuBg: 'black',
  subMenucolor: 'white',
  nlButtonBg: 'black',
  nlButtonColor: 'white',
  nlInputBg: light,
  archiveTitleBg: 'black',
  infoBg: light,
  archiveTitleBg: gray[100],
  cardBg: 'white',

  modes: {
    dark: {
      headerBg: ultraDark,
      headerColor: ultraLight,
      footerBg: ultraDark,
      footerColor: ultraLight,
      searchBg: ultraDark,
      bg: dark,
      text: ultraLight,
      mobileMenuBg: 'black',
      mobileMenuColor: light,
      subMenuBg: primary,
      subMenucolor: 'white',
      nlButtonBg: primary,
      nlButtonColor: 'white',
      nlInputBg: gray[700],
      archiveTitleBg: primary,
      infoBg: primary,
      cardBg: ultraDark,
    },
  },
}

export default colors
