import { mode } from '@chakra-ui/theme-tools'

const Button = {
  variants: {
    square: (props) => ({
      borderRadius: 0,
      border: '2px solid',
      borderColor: mode('black', 'primary')(props),
      color: mode('black', 'primary')(props),
      textTransform: 'uppercase',
      fontSize: 'xs',
      transition: 'all .4s',
      boxShadow: 'md',
      px: 6,
      _hover: {
        bg: mode('black', 'primary')(props),
        color: mode('white', 'white')(props),
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      },
    }),
  },
  defaultProps: {
    variant: 'square',
  },
}

export default Button
