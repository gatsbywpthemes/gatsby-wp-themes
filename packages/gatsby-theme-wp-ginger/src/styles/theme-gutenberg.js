export default {
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
  '.wp-block-media-text .wp-block-media-text__content': {
    pt: ['1.5rem', 0, 0],
    px: [0, '8%'],
  },
}
