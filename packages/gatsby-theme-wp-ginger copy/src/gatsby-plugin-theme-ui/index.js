import typo from './components/typo'
import form from './components/form'
import buttons from './components/buttons'
import header from './components/header'
import footer from './components/footer'
import container from './components/container'
import layout from './components/layout'
import main from './components/main'
import { colors } from './components/colors'

const {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  special,
  baseTypo,
} = typo

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
  layout,
  main,
  container,
  footer,
  header,
  styles: {
    root: {
      ...baseTypo,
    },
  },
  special,
  form,
  buttons,
  //search
  list: {
    raw: {
      listStyle: 'none',
      m: 0,
      p: 0,
    },
  },
}

export default theme
