const sharedCardStyles = {
  bg: 'backgrounds.card',
  color: 'cardColor',
  textAlign: 'center',
  boxShadow: `0 20px 40px -10px rgba(0,0,0,0.1)`,
  px: [4, 5],
  py: [4, 5],

  width: ['calc(100% - 2rem)', '75%'],
  p: {
    fontSize: 'xs',
    letterSpacing: '.6px',
  },
}

export const card = {
  blog: {
    ...sharedCardStyles,
    '.dark-color-mode &': {
      boxShadow: `0 20px 40px -10px rgba(0,0,0,0.3)`,
    },
    h2: {
      fontSize: ['l', 'xl', 'xl'],
    },
    m: [`0 auto 3rem`, `0 auto 6rem`],
    '* + &': {
      mb: 0,
      transform: [`translate3d(0, -1.5rem, 0)`, `translate3d(0, -4rem, 0)`],
    },
  },
  full: {
    ...sharedCardStyles,
    width: '40rem',
    maxWidth: 'calc(100% - 4rem)',
    bg: 'transparent',
    boxShadow: '0 40px 60px rgba(0,0,0,0.4)',
    position: 'relative',
    '.dark-color-mode &': {
      boxShadow: '0 40px 60px rgba(0,0,0,0.8)',
    },
    h1: {
      fontSize: ['l', 'xl', 'xxl'],
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    '&:before': {
      bg: 'backgrounds.card',
      opacity: 0.85,
      zIndex: -2,
    },
    '.dark-color-mode &:before': {
      opacity: 0.98,
    },
    '&:after': {
      borderStyle: 'solid',
      borderColor: 'cardBorder',
      borderWidth: `0.75rem`,
      opacity: 0.75,
      zIndex: -1,
    },
  },
}

export const media = {
  overflow: 'hidden',
  '& img': {
    transition: 'transform 1.6s 0.2s!important',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}
