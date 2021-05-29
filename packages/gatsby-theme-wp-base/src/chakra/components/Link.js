import { mode } from '@chakra-ui/theme-tools'
const Link = {
  baseStyle: (props) => ({
    _hover: {
      textDecoration: 'none',
      color: mode('accent', 'modes.dark.accent')(props),
      transition: 'all .2s eas-out',
    },
  }),
}

export default Link
