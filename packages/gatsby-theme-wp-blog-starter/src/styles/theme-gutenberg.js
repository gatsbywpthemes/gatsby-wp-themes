export default {
  '& > *': {
    mx: 'auto',
  },
  '& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide):not(.entry-content)': {
    maxWidth: theme => `l`,
    width: [`calc(100% - 3rem)`, `calc(100% - 4rem)`],
  },

  '[class*="__inner-container"] > [style*="width: 100vw"], [class*="__inner-container"] > [style*="width:100vw"]': {
    maxWidth: '100%!important',
  },

  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)': {
    maxWidth: theme => `l`,
    width: '100%',
  },

  '.alignnone,.aligncenter,.alignleft,.alignright,.alignwide': {
    mx: 'auto',
  },
  '.aligncenter > .gatsby-image-wrapper': {
    mx: 'auto',
  },
  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)': {
    mx: 'auto',
  },
  /* Full */
  '.alignfull': {
    mx: 'auto',
    my: ['3rem', '5rem'],
    position: 'relative',
    width: '100%',
  },
  '.alignfull:first-of-type': {
    mt: 0,
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
  '.dark-color-mode & .has-background:not(.has-text-color),.dark-color-mode & .wp-block-media-text[style*="background"],.dark-color-mode & .wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)': {
    backgroundImage: theme => {
      return `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay})`
    },
    backgroundBlendMode: 'multiply',
  },
  '[class^="wp-block"]': {
    '.gatsby-image-wrapper': {
      maxHeight: 400,
      boxShadow: `none`,
      borderRadius: 0,
    },
  },
  '&.entry-content': {
    borderBottom: `1px solid transparent`,
  },
}
