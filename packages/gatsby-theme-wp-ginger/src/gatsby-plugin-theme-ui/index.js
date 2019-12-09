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
  baseFontSize: '16px',
  breakpoints: ['40em', '64em'],
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  sizes: {
    header: ['4.5rem', '6rem', '6rem'],
    content: '52.5rem',
    sidebar: '29.25rem',
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
