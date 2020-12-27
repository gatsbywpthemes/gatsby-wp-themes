import { mode } from '@chakra-ui/theme-tools'

const p = {
  fontSize: ['base'],
  lineHeight: 'body',
  mb: 5,
}
const a = {
  transition: 'all .2s',
  color: 'accent',
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
}
const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  a: {
    borderBottom: 'none',
  },
}

const h1 = {
  ...heading,
  fontSize: ['3xl', '4xl'],
  // mt: 1,
}
const h2 = {
  ...heading,
  fontSize: ['2xl', '3xl'],
  // mt: 1,
}

const h3 = {
  ...heading,
  fontSize: ['xl', '2xl'],
  // mt: 2,
}
const h4 = {
  ...heading,
  fontSize: ['lg', 'xl'],
}

const h5 = {
  ...heading,
  fontSize: 'xm',
}
const h6 = {
  ...heading,
  fontSize: 'xs',
}

const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

const styles = {
  global: (props) => {
    return {
      body: {
        fontFamily: 'body',
        color: mode('text', 'modes.dark.text')(props),
        bg: mode('bg', 'modes.dark.bg')(props),
        transition: 'all .4s ease-in-out',
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
        fontStyle: 'italic',
        px: [5, 12],
        py: 8,
        borderLeft: '5px solid',
        borderColor: 'primary',
        maxWidth: '800px !important',
        mx: 'auto',
        my: 10,
        bg: mode('light', 'dark')(props),
      },
      '::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
      '*:focus:not(:focus-visible), [class]:focus:not(:focus-visible)': {
        outline: 'none',
        boxShadow: 'none',
      },
      ...base,
    }
  },
}

export default styles
