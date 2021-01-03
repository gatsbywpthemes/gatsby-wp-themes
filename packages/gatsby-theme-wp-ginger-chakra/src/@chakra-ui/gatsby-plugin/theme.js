import { extendTheme } from '@chakra-ui/react'
import {
  colors,
  breakpoints,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
  letterSpacings,
} from './foundations'
import components from './components'
import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'
import { styles } from './styles'

const theme = extendTheme({
  colors,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
  breakpoints,
  letterSpacings,
  sizes: {
    header: ['4.5rem', '6rem', '6rem'],
    content: '60rem',
  },
  components,
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  styles,
})

export default theme
