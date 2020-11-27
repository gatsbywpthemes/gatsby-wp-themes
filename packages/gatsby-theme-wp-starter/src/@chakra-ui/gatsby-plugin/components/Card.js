import { mode } from '@chakra-ui/theme-tools'
const Card = {
  baseStyle: {
    borderRadius: 'lg',
    boxShadow: 'lg',
    p: [5, 12],
  },
  variants: {
    base: (props) => ({
      bg: mode('cardBg', 'modes.dark.cardBg')(props),
    }),
    primary: {
      bg: 'primary',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'base',
  },
}

export default Card
