export const fonts = {
  body: 'Fira Sans, sans-serif',
  heading: 'Abril Fatface, serif',
  monospace: 'monospace',
}

export const lineHeights = {
  body: 1.5,
}

export const fontWeights = {
  body: 300,
  heading: 400,
  bold: 700,
}

export const fontSizes = {
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

export const a = {
  //transition: 'color .5s',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    //color: 'primary',
  },
}

const specialSharedStyles = {
  textTransform: 'uppercase',
  letterSpacing: '2px',

  a: {
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    '&:hover': {
      color: 'inherit',
    },
  },
}
export const special = {
  ...specialSharedStyles,
  fontSize: 'xxs',
  a: {
    ...specialSharedStyles.a,
    fontWeight: 'bold',
  },
  link: {
    ...specialSharedStyles,
    fontSize: 'xxs',
    ...specialSharedStyles.a,
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: 'currentColor',
      transition: '.6s',
      opacity: 0,
      transform: 'scaleX(0)',
    },
    '&:hover:after': {
      opacity: 1,
      transform: 'scaleX(1)',
    },
  },
  title: {
    a: {
      ...specialSharedStyles.a,
      transition: '0.6s',
    },
    'a:hover': {
      color: 'primary',
    },
  },
  Title: {
    textAlign: 'center',
    mb: 8,
    '&:after': {
      content: '""',
      width: '4rem',
      display: 'block',
      borderBottom: '1px solid',
      mx: 'auto',
      mt: 4,
    },
    '.page-title-pre': {
      fontFamily: 'body',
      fontWeight: 'body',
      display: 'block',
      fontSize: 'xs',
      ...specialSharedStyles,
    },
    '.page-title-value': {
      fontSize: ['xl', 'Big', 'Big'],
    },
  },
}

export const baseTypo = {
  a,
  h1: {
    fontSize: ['xl', 'xl', 'xxl'],
  },
  h2: {
    fontSize: ['l', 'l', 'xl'],
  },
  h3: {
    fontSize: ['m', 'm', 'l'],
  },
  h4: {
    fontSize: ['s', 's', 'm'],
  },
  h5: {
    fontSize: ['xs', 'xs', 's'],
  },
  h6: {
    fontSize: ['xxs', 'xxs', 'xs'],
  },
}
