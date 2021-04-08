import { galleryStyles } from '@gatsbywpthemes/gatsby-plugin-wordpress-lightbox'
export default function (theme) {
  return {
    '& > *': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)': {
      maxWidth: theme.sizes.content,
      width: [`calc(100% - 3rem)`, `calc(100% - 4rem)`],
    },

    '[class*="__inner-container"] > [style*="width: 100vw"], [class*="__inner-container"] > [style*="width:100vw"]': {
      maxWidth: '100%!important',
    },

    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)': {
      maxWidth: theme.sizes.content,
      width: '100%',
    },

    '.alignnone,.aligncenter,.alignleft,.alignright,.alignwide': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.aligncenter > .gatsby-image-wrapper': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    /* Full */
    '.alignfull': {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '3rem', //, '5rem'],
      marginBottom: '3rem',
      position: 'relative',
      width: '100%',
      '@media (min-width: 600px)': {
        marginTop: '5rem', //, '5rem'],
        marginBottom: '5rem',
      },
    },
    '.alignfull:first-of-type': {
      marginTop: 0,
    },

    '[class*="__inner-container"] > .alignfull': {
      maxWidth: '100%',
    },
    '&> .wp-block-group.alignfull.has-background': {
      p: ['2rem', '4rem', '6rem'],
    },
    '& > .wp-block-cover.alignfull:last-of-type': {
      marginBottom: 0,
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
      padding: '1.5rem',
    },
    '.wp-block-media-text .wp-block-media-text__content': {
      pt: ['1.5rem', 0, 0],
      px: [0, '8%'],
    },
    '.wp-block-media-text__media > .gatsby-image-wrapper': {
      width: 'auto!important',
    },
    ...galleryStyles,
  }
}
