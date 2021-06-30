const rem = (px) => px / 16 + 'rem'

const typography = {
  fontSizes: {
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
  },
  fontWeights: {
    body: 400,
    heading: 'bold',
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.4,
    loose: 2,
  },
}
export default typography
