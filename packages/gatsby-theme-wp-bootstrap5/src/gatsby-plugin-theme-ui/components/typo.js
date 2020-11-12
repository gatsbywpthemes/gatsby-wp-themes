const fonts = {
  body: 'Fira Sans, sans-serif',
  heading: 'Abril Fatface, serif',
  monospace: 'monospace',
}

const lineHeights = {
  body: 1.5,
}

const letterSpacings = {
  loose: '2px',
}

const fontWeights = {
  body: 300,
  heading: 400,
  bold: 700,
}

const fontSizes = {
  xxs: '.75rem',
  xs: '.875rem',
  s: '1rem',
  m: '1.125rem',
  l: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  Big: '4rem',
  Bigger: '4.5rem',
}

const special = {
  letterSpacing: 'loose',
  textTransform: 'uppercase',

  fontSize: 'xxs',
  a: {
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  underlineOnHover: {
    letterSpacing: 'loose',
    textTransform: 'uppercase',
    position: 'relative',
    textDecoration: 'none',
    fontSize: 'xxs',
    transition: 'color .6s',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-1px',
      height: '1px',
      bg: 'linkHover',
      transition: '.6s',
      opacity: 0,
      transform: 'scaleX(0)',
    },
    '&:hover:after': {
      opacity: 1,
      transform: 'scaleX(1)',
    },
  },
}

const baseTypo = {
  h1: {
    fontSize: ['xxl', 'xxl', 'Big'],
  },
  h2: {
    fontSize: ['xl', 'xxl', 'xxl'],
  },
  h3: {
    fontSize: ['m', 'x', 'xl'],
  },
  h4: {
    fontSize: ['s', 'm', 'l'],
  },
  h5: {
    fontSize: ['xs', 's', 'm'],
  },
  h6: {
    fontSize: ['xxs', 'xs', 's'],
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.6s, transform 0.6s, opacity .6s',
  },
  'a:hover': {
    color: 'linkHover',
  },
}

export default {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  special,
  baseTypo,
}
