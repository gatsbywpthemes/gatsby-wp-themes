import { theme } from '@chakra-ui/react'
import { lighten } from 'polished'

const { red, teal, purple, gray } = theme.colors

//Palette

const light = gray[100],
  ultraLight = gray[50],
  dark = lighten(0.02, gray[800]),
  ultraDark = gray[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = gray[200]

const colors = {
  /* basic colors */
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
  /* header */
  headerBg: 'white',
  headerColor: ultraDark,
  /* footer */
  footerBg: 'white',
  footerColor: ultraDark,
  /* search */
  searchBg: 'white',
  /* menu */
  mobileMenuBg: 'black',
  mobileMenuColor: light,
  subMenuBg: 'black',
  subMenucolor: 'white',
  /* newsletter */
  nlButtonBg: 'black',
  nlButtonColor: 'white',
  nlInputBg: light,
  /* post */
  archiveTitleBg: 'black',
  infoBg: light,
  archiveTitleBg: gray[100],
  cardBg: 'white',

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
      /* menu*/
      mobileMenuBg: 'black',
      mobileMenuColor: light,
      subMenuBg: primary,
      subMenucolor: 'white',
      /* newsletter */
      nlButtonBg: primary,
      nlButtonColor: 'white',
      nlInputBg: gray[700],
      /* post*/
      archiveTitleBg: primary,
      infoBg: primary,
      cardBg: ultraDark,
    },
  },
}

export default colors
