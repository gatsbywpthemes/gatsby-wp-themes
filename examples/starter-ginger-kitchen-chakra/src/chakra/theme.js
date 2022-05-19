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
    header: ['6.75rem', '6.75rem', '5rem'],
    content: '60rem',
  },
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  styles,
  components,
})

export default theme
