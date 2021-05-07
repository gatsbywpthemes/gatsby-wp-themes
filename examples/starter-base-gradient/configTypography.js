// eslint-disable-next-line no-unused-vars
const rem = (px) => px / 16 + "rem"
const typographySettings = {
  fonts: {
    body: "Coda, sans-serif",
    heading: "Baumans, sans-serif",
    // mono: 'SFMono-Regular, Menlo,Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontWeights: {
    // body: 400,
    heading: 400,
    // bold: 700,
  },
  lineHeights: {
    // body: 1.8,
    // heading: 1.1,
    // loose: 2,
  },
  fontSizes: {
    // xs: rem(12),
    // sm: rem(14),
    // md: rem(16),
    // lg: rem(18),
    // xl: rem(20),
    // "2xl": rem(24),
    // "3xl": rem(28),
    // "4xl": rem(36),
    // "5xl": rem(48),
    // "6xl": rem(64),
    // "7xl": rem(72),
    // "8xl": rem(96),
    // "9xl": rem(128),
  },
  base: {
    a: {
      //transition: "all .2s",
      //fontWeight: "bold",
      //textDecoration: "none",
      _hover: {
        //textDecoration: "none",
      },
    },
    body: {
      //fontSize: ["md"],
    },
    p: {
      //mb: 5,
    },
    h1: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ["3xl", "4xl"],
    },
    h2: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ['2xl', '3xl',],
    },
    h3: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ['xl', '2xl'],
    },
    h4: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ['lg', 'xl'],
    },
    h5: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ['sm'],
    },
    h6: {
      // fontFamily: 'heading',
      // lineHeight: 'heading',
      // fontWeight: 'heading',
      // fontSize: ['xs'],
    },
  },
}

module.exports = typographySettings
