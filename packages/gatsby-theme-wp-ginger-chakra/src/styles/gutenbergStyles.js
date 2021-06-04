export const gutenbergStyles = {
  '& > *': {
    mx: 'auto',
  },

  '& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)': {
    maxWidth: (theme) => `min(${theme.sizes.content}, calc(100% - 3rem))`,
  },

  '[class*="__inner-container"] > [style*="width: 100vw"], [class*="__inner-container"] > [style*="width:100vw"]':
    {
      maxWidth: '100%!important',
    },

  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright) ':
    {
      maxWidth: (theme) => theme.sizes.content,
    },

  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)':
    {
      maxWidth: (theme) => theme.sizes.content,
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
}
