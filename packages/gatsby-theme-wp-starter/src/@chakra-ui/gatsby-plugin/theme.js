import { extendTheme } from '@chakra-ui/react'

import foundations from './foundations'

import components from './components'
import layerStyles from './layerStyles'
import textStyles from './textStyles'

import styles from './styles'

const theme = extendTheme({
  ...foundations,
  components,
  ...textStyles,
  ...layerStyles,

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
