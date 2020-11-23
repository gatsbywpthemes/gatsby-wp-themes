import { theme } from '@chakra-ui/react'

const {
  red,
  orange,
  yellow,
  green,
  teal,
  cyan,
  purple,
  pink,
  gray,
  blue,
} = theme.colors

const hotPink = {
  100: '#fffafc',
  200: '#ffdbe8',
  300: '#ffb8d2',
  400: '#ff85b4',
  500: '#ff1472',
  600: '#f0005c',
  700: '#d6004f',
  800: '#bd0042',
  900: '#990033',
}

//Palette

const light = gray[100],
  ultraLight = gray[50],
  dark = gray[800],
  ultraDark = gray[900],
  primary = red[600],
  secondary = teal[500],
  highlight = red[500],
  mutted = gray[200]

export const colors = {
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
  modes: {
    dark: {
      headerBg: ultraDark,
      searchBg: ultraDark,
      bg: dark,
      text: ultraLight,
      mobileMenuBg: 'black',
      mobileMenuColor: light,
    },
  },
}
