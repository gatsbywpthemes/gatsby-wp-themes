import { transparentize } from '@chakra-ui/theme-tools'
export const gutenbergStyles = ({ colorMode }) => {
  return {
    '& > *': {
      mx: 'auto',
    },

    '& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.entry-content)':
      {
        maxWidth: (theme) => `min(${theme.sizes['4xl']}, calc(100% - 3rem))`,
      },

    '[class*="__inner-container"] > [style*="width: 100vw"], [class*="__inner-container"] > [style*="width:100vw"]':
      {
        maxWidth: '100%!important',
      },

    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright) ':
      {
        maxWidth: '4xl',
        mx: 'auto',
      },

    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)':
      {
        mx: 'auto',
      },

    /* Full */
    '.alignfull': {
      position: 'relative',
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
      mx: 'auto',
    },
    '.has-background': {
      p: 6,
    },
    '.wp-block-media-text .wp-block-media-text__content': {
      pt: [6, 0, 0],
      px: [0, '8%'],
    },

    '.wp-block-media-text__media > .gatsby-image-wrapper': {
      display: 'block',
    },

    hr: {
      marginBottom: 6,
    },
    '.wp-block-cover h1, .wp-block-cover h2': {
      variant: 'title.page',
      my: '2rem',
    },

    '.wp-block-gallery a': {
      transition: '1s',
    },
    '.wp-block-gallery a:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.3)',
      pointerEvents: 'none',
      opacity: 0,
      transition: '0.5s',
    },
    '.wp-block-gallery a:hover:after, .wp-block-gallery a:focus:after': {
      opacity: 1,
    },

    '.has-background:not(.has-text-color),.wp-block-media-text[style*="background"],.wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)':
      {
        bgGradient: (theme) => {
          return colorMode === 'dark'
            ? `linear-gradient(${transparentize(
                'modes.dark.bg',
                0.8
              )(theme)}, ${transparentize('modes.dark.bg', 0.8)(theme)})`
            : `linear-gradient(transparent, transparent)`
        },
        backgroundBlendMode: 'multiply',
      },
  }
}
