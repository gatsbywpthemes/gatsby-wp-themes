const sharedStyles = {
  mb: 7,
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
      ml: 3,
    },
    ':before': {
      mr: 3,
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
      px: 2,
      '&:first-of-type': {
        pl: 0,
      },
    },
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
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
        ...sharedStylesA[':hover'],
      },
    },

    li: {
      display: 'flex',
      alignItems: 'center',
      mb: 4,
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
      ml: 4,
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
