import { extendTheme } from '@chakra-ui/react'

import { colors } from './foundations'
import {
  fontSizes,
  // fonts,
  lineHeights,
  fontWeights,
} from './foundations/typography'
import components from './components'
import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'

import { styles } from './styles'

const theme = extendTheme({
  colors,
  fontSizes,
  // fonts,
  lineHeights,
  fontWeights,
  // breakpoints,

  components,
  textStyles: {
    ...textStyles,
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
