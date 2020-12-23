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
        fontSize: ['md', 'lg'],
      },
      '*::placeholder': {
        color: 'currentColor',
        opacity: 0.6,
      },
      '*, *::before, &::after': {
        wordWrap: 'break-word',
      },
      '*:focus:not(:focus-visible), [class]:focus:not(:focus-visible), input:focus': {
        outline: 'none',
        boxShadow: 'none',
      },
      '*:focus': {
        borderColor: 'currentColor!important',
      },
      '::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
      ...base,
    }
  },
}
