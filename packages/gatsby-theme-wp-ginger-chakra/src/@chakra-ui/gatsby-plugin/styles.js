import { mode } from '@chakra-ui/theme-tools'

import { base } from './foundations/typography'

export const styles = {
  global: (props) => {
    return {
      body: {
        fontFamily: 'body',
        color: mode('text', 'modes.dark.text')(props),
        bg: mode('bg', 'modes.dark.bg')(props),
        lineHeight: 'body',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      '*:focus': {
        outlineStyle: 'dashed',
        outlineWidth: '0.5px',
      },
      blockquote: {
        bg: mode('light', 'dark'),
      },

      '::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
      ...base,
    }
  },
}