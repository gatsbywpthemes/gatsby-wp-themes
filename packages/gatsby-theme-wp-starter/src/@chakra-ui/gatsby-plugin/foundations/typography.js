const rem = (px) => px / 16 + 'rem'
export const fontSizes = {
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  '2xl': rem(24),
  '3xl': rem(28),
  '4xl': rem(36),
  '5xl': rem(48),
  '6xl': rem(64),
  '7xl': rem(72),
  '8xl': rem(96),
  '9xl': rem(128),
}

// export const fonts = {
//   body: 'IBM Plex Mono',
//   heading: 'Roboto Slab',
// }

export const fontWeights = {
  body: 400,
  heading: 'bold',
  bold: 700,
}

export const lineHeights = {
  body: 1.8,
  heading: 1.4,
  loose: 2,
}

export const p = {
  fontSize: ['md'],
  lineHeight: 'body',
  mb: 5,
}
export const a = {
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

export const h1 = {
  ...heading,
  fontSize: ['3xl', '4xl'],
  // mt: 1,
}
export const h2 = {
  ...heading,
  fontSize: ['2xl', '3xl'],
  // mt: 1,
}

export const h3 = {
  ...heading,
  fontSize: ['xl', '2xl'],
  // mt: 2,
}
export const h4 = {
  ...heading,
  fontSize: ['lg', 'xl'],
}

export const h5 = {
  ...heading,
  fontSize: 'xm',
}
export const h6 = {
  ...heading,
  fontSize: 'xs',
}
export const blockquote = {
  fontStyle: 'italic',
  px: [5, 12],
  py: 8,
  borderLeft: '5px solid',
  borderColor: 'primary',
  maxWidth: '800px !important',
  mx: 'auto',
  my: 10,
}

export const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
}
