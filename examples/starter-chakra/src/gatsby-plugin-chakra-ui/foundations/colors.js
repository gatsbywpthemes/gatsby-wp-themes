import { theme } from '@chakra-ui/core'

const {
  gray,
  red,
  orange,
  yellow,
  green,
  teal,
  cyan,
  purple,
  pink,
} = theme.colors

const blue = {
  50: '#e2ffff',
  100: '#baf2f7',
  200: '#90e5f0',
  300: '#67d6ea',
  400: '#43c4e3',
  500: '#30a4ca',
  600: '#237c9e',
  700: '#175671',
  800: '#083245',
  900: '#00141a',
}

export const colors = {
  background: blue[800],
  text: blue[50],
  primary: teal[400],
  secondary: red[500],
  accent: yellow[300],
  highlight: orange[500],
  mutted: gray[100],
  bgHeader: blue[900],
  blue,
}
