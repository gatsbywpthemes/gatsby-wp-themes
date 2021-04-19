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
        transition: 'none',
      },
      '*::placeholder': {
        color: 'currentColor',
        opacity: 0.6,
      },
      '*, *::before, &::after': {
        borderColor: 'currentColor',
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
      'textarea:nth-of-type(n)': {
        borderRadius: 0,
      },
      iframe: {
        maxWidth: '100%',
      },
      'ol, ul': {
        marginBottom: 6,
        paddingLeft: 6,
      },
      'ul ul, ul ol, ol ul, ol ol': {
        marginBottom: 0,
      },
      dl: {
        marginBottom: 6,
      },
      dt: {
        fontWeight: 'bold',
      },
      dd: {
        marginBottom: 3,
      },
      'table td, table th': {
        borderWidth: '1px',
        padding: 2,
      },
      figcaption: {
        textAlign: 'center',
        opacity: 0.7,
        fontSize: 'sm',
      },
      ...base,
    }
  },
}
