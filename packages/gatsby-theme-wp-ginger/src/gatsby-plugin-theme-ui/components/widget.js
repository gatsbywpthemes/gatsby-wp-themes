const sharedStyles = {
  a: {
    color: 'inherit',
    textDecoration: 'none',
    variant: 'special',
    fontWeight: 'bold',
    transition: '0.6s',
    ':hover': {
      opacity: 0.6,
    },
  },
  ul: {
    variant: 'list.raw',
  },
  mb: 7,
  '.widget-title': {
    fontSize: 4,
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
  '.widget-recent-posts': {},
}
export const widget = {
  categories: {
    ...sharedStyles,
    a: {
      ...sharedStyles.a,
    },
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
  },
  tags: {
    ...sharedStyles,
    ul: {
      ...sharedStyles.ul,
      display: 'flex',
      flexWrap: 'wrap',
    },
    li: {
      px: 2,
      '&:first-of-type': {
        pl: 0,
      },
    },
    a: {
      ...sharedStyles.a,
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
      transition: '.6s',
      ':hover': {
        ...sharedStyles.a[':hover'],
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
      ml: 4,
      a: {
        display: 'block',
      },
    },
    '.widget-post-title': {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    '.widget-post-date': {
      variant: 'special',
    },
  },
}
