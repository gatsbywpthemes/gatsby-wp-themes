const sharedStyles = {
  mb: '3rem',
  '.widget-title': {
    fontSize: 'l',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ':after, :before': {
      content: '""',
      height: '1px',
      borderTop: '1px solid',
      flex: '1 0',
    },
    ':after': {
      ml: '0.75rem',
    },
    ':before': {
      mr: '0.75rem',
    },
  },
}

const sharedStylesA = {
  a: {
    variant: 'special',
    fontWeight: 'bold',
    transition: 'opacity 0.6s',
    ':hover': {
      opacity: 0.6,
    },
  },
}
const widget = {
  categories: {
    ...sharedStyles,
    ...sharedStylesA,
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
  },
  tags: {
    ...sharedStyles,
    ...sharedStylesA,
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    li: {
      px: '0.5rem',
      '&:first-of-type': {
        pl: 0,
      },
    },
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
  },
  newsletter: {
    p: {
      fontSize: 'xs',
    },
    ...sharedStyles,
    'a:nth-child(n)': {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    form: {
      variant: 'form',
      flexWrap: 'nowrap',
      padding: 0,
      boxShadow: 0,
      'input[type="email"]': {
        minWidth: 'auto',
      },
      'button[type="submit"]': {
        m: 0,
        mb: '1rem',
        ml: '.5rem',
      },
    },
  },
  recentPosts: {
    ...sharedStyles,
    img: {
      m: 0,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      ':hover': {
        opacity: 0.6,
      },
    },
    li: {
      display: 'flex',
      alignItems: 'center',
      mb: '1rem',
    },
    '.gatsby-image-wrapper': {
      display: 'block!important',
    },
    '.textual': {
      a: {
        display: 'block',
      },
    },
    'a:not(:empty) + .textual': {
      ml: '1rem',
    },
    '.widget-post-title': {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 's',
    },
    '.widget-post-date': {
      variant: 'special',
    },
  },
}

export const widgetCategories = widget.categories
export const widgetTags = widget.tags
export const widgetRecentPosts = widget.recentPosts
export const widgetNewsletter = widget.newsletter
