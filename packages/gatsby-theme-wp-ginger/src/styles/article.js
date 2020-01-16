import gutenberg from './theme-gutenberg'

export const article = {
  full: {
    content: {
      ...gutenberg,
      py: ['2rem', '2rem', '4rem'],
    },
    splash: {
      position: 'relative',
      zIndex: 1,
      height: ['auto', 'auto', '100vh'],
      minHeight: theme => [
        `none`,
        `calc(100vh - ${theme.sizes.header[1]})`,
        '100vh',
      ],
      py: ['6rem', 0],
      backgroundColor: 'splashBg',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: ['none', 'none', '0 20px 60px -10px rgba(0,0,0,0.2)'],
    },
  },
  button: {
    scrolldown: {
      display: ['none', 'block'],
      variant: 'buttons.icon',
      position: 'absolute',
      bottom: '1.5rem',
      right: 0,
      left: 0,
      margin: 'auto',
      color: 'scrollDownColor',
      bg: 'scrollDownBg',
      ':hover svg': {
        color: 'scrollDownBg',
      },
    },
  },
}

export const tags = {
  mb: '3rem',
  ul: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    p: 0,
    ml: '-0.25rem',
    mb: '0.25rem',
  },
  li: { px: 1, m: 0 },
  a: {
    variant: 'special.underlineOnHover',
    fontSize: 'xxs',
  },
}
