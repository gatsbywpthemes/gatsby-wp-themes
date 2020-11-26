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

  modes: {
    dark: {
      headerBg: ultraDark,
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
      archiveTitleBg: primary,
    },
  },
}

export default colors
