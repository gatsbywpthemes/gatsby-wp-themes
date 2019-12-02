import gutenberg from './theme-gutenberg'

export const article = {
  full: {
    content: {
      ...gutenberg,
      py: ['2rem', '2rem', '4rem'],
      dark: {
        p: theme => [
          `2rem`,
          '4rem',
          `4rem calc(50% - ${parseInt(theme.sizes.content) / 2}px)`,
        ],
        minWidth: theme => [
          '100%',
          '100%',
          `calc(100% - ${theme.sizes.header[2]})`,
        ],
        bg: `text`,
        color: 'white',
      },
    },
    splash: {
      position: 'relative',
      zIndex: 1,
      height: ['auto', 'auto', '100vh'],
      minHeight: theme => [
        `calc(100vh - ${theme.sizes.header[0]})`,
        `calc(100vh - ${theme.sizes.header[1]})`,
        '100vh',
      ],
      backgroundColor: 'background.splash',
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
      variant: 'buttons.icon',
      position: 'absolute',
      bottom: '1.5rem',
      right: 0,
      left: 0,
      margin: 'auto',
    },
  },
  media: {
    overflow: 'hidden',
    '& img': {
      transition: 'transform 1.6s 0.2s!important',
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
}
