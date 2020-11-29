import { extendTheme } from '@chakra-ui/react'

import foundations from './foundations'

import components from './components'
import layerStyles from './layerStyles'
import textStyles from './textStyles'

import styles from './styles'

const theme = extendTheme({
  ...foundations,
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
