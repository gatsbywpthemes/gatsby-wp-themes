import { extendTheme } from '@chakra-ui/core'
import { colors } from './foundations'
import { CenterContainer } from './components'

const theme = extendTheme({
  colors,
  components: {
    CenterContainer,
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
})

export default theme
