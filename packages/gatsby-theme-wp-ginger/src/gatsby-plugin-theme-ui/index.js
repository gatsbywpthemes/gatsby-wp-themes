import {
  form,
  search,
  layer,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  special,
  baseTypo,
} from './components'
import buttons from './components/buttons'
import Header from './components/header'
import Footer from './components/footer'
import Container from './components/container'
import Layout from './components/layout'
import Main from './components/main'
import { colors } from './components/colors'

const theme = {
  breakpoints: ['40em', '64em', '80em'],
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 512],
  sizes: {
    header: ['72px', '96px', '96px'],
    content: '840px',
    menuIcon: '48px',
  },
  styles: {
    Layout,
    Main,
    Container,
    Header,
    Footer,
    root: {
      ...baseTypo,
    },
  },
  layer,
  global: {
    anchor: {
      ...baseTypo.a,
    },
  },
  special,
  form,
  search,
  buttons,
  list: {
    raw: {
      listStyle: 'none',
      m: 0,
      p: 0,
    },
  },
}

export default theme
