export const overlayStyles = {}
export const slideMenuStyles = {
  ul: {
    variant: 'listRaw',
  },

  '.close': {
    cursor: `pointer`,
    position: 'fixed',
    top: '0.75rem',
    right: '0.75rem',
  },
  '.menu': {
    mb: '3rem',
    li: {
      mb: 0,
    },
    ul: {
      m: 0,
      p: 0,
      listStyle: 'none',
      'a, span': {
        display: 'block',
        py: '0.75rem',
        position: 'relative',
        transition: 'opacity .6s',
      },
      'a:hover': {
        opacity: 0.6,
      },
      'a:after, span:after': {
        content: '""',
        borderBottom: '1px solid',
        opacity: 0.2,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      'ul a, ul span': {
        pl: '1.5rem',
      },
      'ul ul a, ul ul span': {
        pl: '3rem',
      },
    },
    'a[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
    '.collapse': {
      position: 'absolute',
      height: '2.5rem',
      top: '0',
      right: 0,
      svg: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
  },
}
