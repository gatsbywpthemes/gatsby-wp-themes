const rem = (px) => px / 16 + 'rem'
export const fontSizes = {
  xs: rem(13),
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

export const fonts = {
  body: 'Trebuchet MS, sans-serif',
  heading: 'Trebuchet MS, sans-serif',
}

export const fontWeights = {
  body: 400,
  heading: 'bold',
  bold: 700,
}

export const lineHeights = {
  body: 1.8,
  heading: 1.2,
  loose: 2,
}

export const letterSpacings = {
  loose: '2px',
}

export const p = {
  mb: 5,
}
export const a = {
  color: 'inherit',
  textDecoration: 'underline',
  _hover: {
    textDecoration: 'none',
  },
}
const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

export const h1 = {
  ...heading,
  fontSize: ['4xl', '5xl', '7xl'],
}
export const h2 = {
  ...heading,
  fontSize: ['3xl', '4xl', '5xl'],
  mb: [4],
}

export const h3 = {
  ...heading,
  fontSize: ['2xl', '3xl', '4xl'],
  mb: 4,
}
export const h4 = {
  ...heading,
  fontSize: ['xl', '2xl', '3xl'],
  mb: 4,
}

export const h5 = {
  ...heading,
  fontSize: ['lg', 'xl', '2xl'],
  mb: 4,
}
export const h6 = {
  ...heading,
  fontSize: ['md', 'lg', 'xl'],
  mb: 4,
}
export const blockquote = {
  fontStyle: 'italic',
  mx: 4,
  mb: 6,
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
