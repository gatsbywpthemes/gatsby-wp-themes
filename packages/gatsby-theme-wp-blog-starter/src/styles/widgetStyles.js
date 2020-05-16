const sharedStyles = {
  color: 'text',
  '.inverse &': {
    color: 'textInverse',
  },
  a: {
    color: 'text',
    '.inverse &': {
      color: 'textInverse',
    },
    textDecoration: 'none',
    variant: 'text.special',
    fontFamily: 'body',
    fontWeight: 'bold',
    transition: '0.6s',
    ':hover': {
      opacity: 0.6,
    },
  },
  ul: {
    variant: 'list.raw',
  },

  '.widget-title': {
    fontSize: 's',
    textAlign: 'center',
    color: 'text',
    '.inverse &': {
      color: 'textInverse',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textTransform: 'uppercase',
    alignItems: 'center',
    letterSpacing: '2px',
    ':after, :before': {
      content: '""',
      height: '1px',
      borderTop: '1px solid',
      flex: '1 0',
    },
    ':after': {
      ml: 'xs',
    },
    ':before': {
      mr: 'xs',
    },
  },
  '.widget-recent-posts': {},
}

export const widgetStyles = {
  categories: {
    ...sharedStyles,
    li: {
      // pb: 3,
    },

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
      justifyContent: 'center',
    },
    li: {
      pr: 'xxs',
      mb: 'xxs',
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
      color: 'text',
      '.inverse &': {
        color: 'textInverse',
      },
      textDecoration: 'none',
      fontFamily: 'body',
      fontSize: 'xxs',
      transition: '.6s',
      ':hover': {
        ...sharedStyles.a[':hover'],
      },
    },

    li: {
      display: 'flex',
      alignItems: 'center',
      mb: 'm',
    },
    '.gatsby-image-wrapper': {
      display: 'block!important',
    },
    '.textual': {
      ml: 's',
      a: {
        display: 'block',
      },
    },
    '.widget-post-title': {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 's',
    },
    '.widget-post-date': {
      variant: 'text.special',
    },
  },
  newsletter: {
    ...sharedStyles,
    input: {
      px: 20,
      py: 10,
      border: 'none',
      bg: 'nlInputBg',
      color: 'nlInputColor',
    },
    button: {
      border: 'none',
      px: 20,
      borderRadius: '0 5px 5px 0',
      textTransform: 'uppercase',
      fontSize: 'xxs',
      bg: 'nlButtonBg',
      color: 'nlButtonColor',
      fontWeight: 'bold',
      letterSpacing: 1.2,
      cursor: 'pointer',
      variant: 'transitions.m',
      '&:hover': {
        bg: 'nlButtonBgHover',
      },
    },
  },
}
