export default {
  ml: theme => [0, 0, theme.sizes.header[2]],
  '.entry-content a': {
    textDecoration: 'underline',
    transition: 'color .5s',
    '&:hover': {
      color: 'linkHover',
      textDecoration: 'none',
    },
  },
  '.entry-content .wp-block-button': {
    borderRadius: 0,
    fontSize: 'xs',
    variant: 'special',

    mb: '1.5rem',
    a: {
      variant: 'special.a',

      fontSize: 'xs',
      transition: 'color .3s, background .3s',
    },
    '&:not(.is-style-outline) a:hover': {
      bg: theme => `${theme.colors.linkHover}!important`,
      color: 'inherit',
    },
    '&.is-style-outline a:hover': {
      bg: 'inherit',
      color: theme => `${theme.colors.linkHover}!important`,
    },
  },
}
