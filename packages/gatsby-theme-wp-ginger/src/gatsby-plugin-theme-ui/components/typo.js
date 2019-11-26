export const fonts = {
  body: 'Fira Sans, sans-serif',
  heading: 'Abril Fatface, serif',
  monospace: 'monospace',
}

export const lineHeights = {
  body: 1.5,
  heading: 1.1,
  loose: 2,
  none: 1,
}

export const fontWeights = {
  body: 300,
  heading: 400,
  bold: 700,
}

export const fontSizes = [
  '.75rem',
  '.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem',
  '4.5rem',
]

export const a = {
  transition: 'color .5s',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    color: 'primary',
  },
}

const specialSharedStyles = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: 0,
  a: {
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
  },
}
export const special = {
  ...specialSharedStyles,
  a: {
    ...specialSharedStyles.a,
    fontWeight: 'bold',
  },
  link: {
    ...specialSharedStyles,
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
  archiveTitle: {
    textAlign: 'center',
    mb: 6,
    '.page-title-taxonomy-type': {
      fontFamily: 'body',
      fontWeight: 'body',
      display: 'block',
      fontSize: 2,
    },
    '.page-title-taxonomy-value': {
      fontSize: 7,
    },
  },
}

export const title = {
  page: {
    textAlign: 'center',
    fontSize: [6, 8],
    mb: 8,
    '&:after': {
      content: '""',
      width: '4rem',
      display: 'block',
      borderBottom: '1px solid',
      mx: 'auto',
      mt: 4,
    },
  },
}
