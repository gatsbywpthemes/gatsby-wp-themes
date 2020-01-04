export const commentStyles = {
  form: {
    variant: 'form',
    mb: '2rem',
    py: '3rem',
    px: '2rem',
    '.comment &': {
      boxShadow: 'none',
      p: '1.5rem',
    },
    '.comment-notes': {
      variant: 'special',
      textAlign: 'center',
    },
  },

  list: {
    '&, ul': {
      listStyle: 'none',
    },
    ul: {
      mb: 0,
    },
    mb: '3rem',
    ml: 0,
  },
  title: {
    textAlign: 'center',
    mb: '2rem',
  },
}

export const comment = {
  position: 'relative',
  py: ['0.5rem', '1rem'],
  px: ['0.75rem', '1.5rem'],
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
    mb: '0.5rem',
    fontStyle: 'italic',
  },
  '.comment-nesting-info': {
    fontSize: 'xxs',
    textAlign: 'right',
    opacity: '.6',
  },
  '.comment-content a': {
    textDecoration: 'underline',
  },
}

export const replyButton = {
  display: 'flex',
  mt: '0.75rem',
  ml: 'auto',
  color: 'inherit',
  cursor: 'pointer',
  p: 0,
  fontWeight: 'bold',
  variant: 'buttons.raw',
  span: {
    variant: 'special.underlineOnHover',
    '&:after': theme => {
      return {
        ...theme.special.underlineOnHover['&:after'],
        bg: 'currentColor',
      }
    },
  },
}

export const commentsSection = {
  p: theme => [
    `1.5rem`,
    '4rem',
    `4rem calc(50% - ${parseInt(theme.sizes.content) / 2}rem)`,
  ],
  minWidth: theme => ['100%', '100%', `calc(100% - ${theme.sizes.header[2]})`],
  bg: 'commentsBg',
  color: 'commentsColor',
}
