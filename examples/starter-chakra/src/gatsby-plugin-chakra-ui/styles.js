import { mode } from '@chakra-ui/theme-tools'
import { base } from './foundations/typography'

export const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('dark', 'ultraLight')(props),
      bg: mode('ultraLight', 'dark')(props),
      transition: 'transition.md',
      lineHeight: 'body',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    ...base,
  }),
}
