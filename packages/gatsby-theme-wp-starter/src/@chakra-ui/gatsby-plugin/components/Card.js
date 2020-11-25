import { mode } from '@chakra-ui/theme-tools'
const Card = (props) => {
  return {
    baseStyle: {
      borderRadius: 'lg',
      boxShadow: 'lg',
      p: [5, 12],
    },
    variants: {
      base: {
        bg: mode('white', 'ultraDark')(props),
      },
      primary: {
        bg: 'primary',
        color: 'text',
      },
      secondary: {
        bg: 'seconadry',
        color: 'text',
      },
    },
    defaultProps: {
      variants: 'base',
    },
  }
}

export default Card
