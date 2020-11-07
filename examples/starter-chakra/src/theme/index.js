import { extendTheme, theme } from '@chakra-ui/core'

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

export const customTheme = extendTheme({
  colors: {
    background: blue[800],
    text: blue[50],
    primary: teal[400],
    secondary: red[500],
    accent: yellow[300],
    highlight: orange[500],
    mutted: gray[100],
    bgHeader: blue[900],
    blue,
    // modes: {
    //   light: {
    //     background: blue[50],
    //     text: blue[900],
    //     bgHeader: blue[800],
    //   },
    // },
  },
  // fonts: {
  //   body: 'Roboto',
  //   heading: 'Baumans',
  // },
  gradients: {
    primary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary},${t.colors.yellow})`,
    },
    secondary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.purple} )`,
    },
    cardGradient: {
      backgroundImage: (t) =>
        `linear-gradient(120deg,${t.colors.gradientColor1}, ${t.colors.gradientColor2}   )`,
    },
  },
  transitions: {
    s: { transition: `all .2s ease-in-out` },
    m: { transition: `all .4s ease-in-out` },
    l: { transition: `all .8s ease-in-out` },
    xl: { transition: `all 1s ease-in-out` },
  },
})
