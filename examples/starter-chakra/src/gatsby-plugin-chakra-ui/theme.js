import { extendTheme } from '@chakra-ui/core'
import { colors } from './foundations'
import { Container } from './components'
import { branding } from './textStyles'

const theme = extendTheme({
  colors,
  components: {
    CenterContainer: {
      baseStyle: {
        px: [5, 5, 6, 10],
        mx: 'auto',
      },
      sizes: {
        sm: {
          maxW: 'container.sm',
        },
        md: {
          maxW: 'container.md',
        },
        lg: {
          maxW: 'container.lg',
        },
        xl: {
          maxW: 'container.xl',
        },
        defaultProps: {
          size: 'xl',
        },
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it's "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: 'blue.400',
        }),
        defaultProps: {
          size: 'xs',
          variant: 'outline',
        },
      },
    },
  },
  textStyles: {
    branding,
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
