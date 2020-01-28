import { lighten } from '@theme-ui/color'
export default {
  section: {
    maxWidth: 'l',
    m: '0 auto',
  },

  form: {
    bg: lighten('background', 0.03),
    variant: 'form',
    boxShadow: 'large',
    borderRadius: 's',
    color: 'text',
    '.comment &': {
      boxShadow: 'none',
      p: 'm',
    },
    '.comment-notes': {
      variant: 'text.special',
      textAlign: 'center',
    },
  },
  replyButton: {
    display: 'flex',
    mt: 'xs',
    ml: 'auto',
    variant: 'text.special.link',
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

    mb: 'xl',
  },
  comment: {
    position: 'relative',
    py: ['xxs', 's'],
    px: ['xs', 'm'],
    zIndex: 0,
    mb: 's',
    boxShadow: 'small',
    color: 'text',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      bg: lighten('background', 0.03),

      zIndex: -1,
    },
    '.comment-author': {
      //fontFamily: 'heading',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    '.entry-date': {
      display: 'block',
      fontSize: 'xxs',
      mb: 'xxs',
      fontStyle: 'italic',
    },
    '.comment-nesting-info': {
      fontSize: 'xxs',
      textAlign: 'right',
      opacity: '.6',
    },
  },
  title: {
    variant: 'text.special.title',
    textAlign: 'center',
    mb: 'm',
    color: 'text',
  },
}
