import { extendTheme } from '@chakra-ui/react'

import { colors, breakpoints } from './foundations'
import {
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
} from './foundations/typography'
import components from './components'
import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'

import { styles } from './styles'
console.log(components)
const theme = extendTheme({
  colors,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
  breakpoints,
  sizes: {
    header: ['4.5rem', '6rem', '6rem'],
    content: '60rem',
    sidebar: '29.25rem',
  },
  components,
  textStyles: {
    ...textStyles,
    // ...base,
  },
  layerStyles: {
    ...layerStyles,
  },

  gradients: {
    primary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary},${t.colors.yellow})`,
    },
    secondary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.purple} )`,
    },
  },
  styles,
})

export default theme
