import { title } from './typo'

const sharedSizes = {
  gutenberg: {
    '& > *': {
      mx: 'auto',
    },
    '& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)': {
      maxWidth: theme => theme.sizes.content,
      width: `calc(100% - 4rem)`,
    },

    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)': {
      maxWidth: theme => theme.sizes.content,
      width: '100%',
    },

    '.alignnone,.aligncenter,.alignleft,.alignright,.alignwide': {
      my: '4rem',
      mx: 'auto',
    },

    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)': {
      mx: 'auto',
    },
    /* Full */
    '.alignfull': {
      mx: 'auto',
      my: '5rem',
      position: 'relative',
      width: '100%',
    },

    '[class*="__inner-container"] > .alignfull': {
      maxWidth: '100%',
    },
    '&> .wp-block-group.alignfull.has-background': {
      p: ['2rem', '4rem', '6rem'],
    },
    '& > .wp-block-cover.alignfull:last-of-type': {
      mb: 0,
    },
    /* Wide */
    '.alignwide': {
      maxWidth: '75rem',
      position: 'relative',
      width: 'calc(100% - 4rem)',
    },
    '[class*="__inner-container"] > .alignwide': {
      width: '100%',
    },
    '.wp-block-cover h1, .wp-block-cover h2': {
      variant: 'title.page',
      my: '2rem',
    },
    '.has-background': {
      p: '1.5rem',
    },
  },
  content: {
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
  },
}

export const article = {
  page: {
    ...sharedSizes.gutenberg,
  },
  full: {
    content: {
      ...sharedSizes.gutenberg,
      py: ['2rem', '2rem', '4rem'],
      dark: {
        ...sharedSizes.content,
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
