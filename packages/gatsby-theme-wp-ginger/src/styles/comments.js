export const commentStyles = {
  form: {
    variant: 'form',
    mb: 6,
    py: 7,
    px: 6,
    boxShadow: '0 20px 40px rgba(0,0,0,.15)',
    '.comment &': {
      boxShadow: 'none',
      p: 5,
    },
    '.comment-notes': {
      variant: 'special',
      textAlign: 'center',
    },
  },
  replyButton: {
    display: 'flex',
    mt: 3,
    ml: 'auto',
    variant: 'special.link',
    bg: 'transparent',
    border: 'none',
    boxShadow: 'none',
    p: 0,
    fontWeight: 'bold',
  },
  list: {
    '&, ul': {
      listStyle: 'none',
    },
    ul: {
      mb: 0,
    },
    mb: 7,
    ml: 0,
  },
  comment: {
    position: 'relative',
    py: [2, 4],
    px: [3, 5],
    zIndex: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      bg: 'currentColor',
      opacity: 0.03,
      zIndex: -1,
    },
    '.comment-author': {
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    '.entry-date': {
      display: 'block',
      fontSize: 'xxs',
      mb: 2,
      fontStyle: 'italic',
    },
    '.comment-nesting-info': {
      fontSize: 'xxs',
      textAlign: 'right',
      opacity: '.6',
    },
  },
  title: {
    variant: 'special.title',
    textAlign: 'center',
    mb: 6,
  },
}
