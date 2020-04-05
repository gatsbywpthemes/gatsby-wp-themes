export const overlay = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 99,
  border: 'none',
  boxShadow: 'none',
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,.2)',
  '.menu-closing + &': {
    display: 'none',
  },
}
export const slideMenu = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
  transform: 'translate3d(100%, 0, 0)',
  transition: 'transform 1s, visibility 0s 1s',
  '&:nth-child(n)': {
    borderRadius: 0,
    bg: 'sidebarBg',
    color: 'sidebarColor',
    fontFamily: 'body',
    width: (theme) => ['100%', theme.sizes.sidebar],
    display: `flex`,
    overflowY: 'scroll',
    boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
    a: (theme) => theme.styles.root.a,
  },

  px: ['2rem', '3rem'],
  py: '3rem',

  ul: {
    variant: 'list.raw',
  },
  '&.menu-closing': {
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden',
  },
  '&.menu-opened': {
    //opacity: 0,
    transition: 'transform 1s, visibility 0s 0s',
    transform: 'translate3d(0, 0, 0)',
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
      a: {
        display: 'block',
        py: '0.75rem',
        position: 'relative',
        transition: 'opacity .6s',
      },
      'a:hover': {
        opacity: 0.6,
      },
      'a:after': {
        content: '""',
        borderBottom: '1px solid',
        opacity: 0.2,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      },
      'ul a': {
        pl: '1.5rem',
      },
      'ul ul a': {
        pl: '3rem',
      },
    },
    'a[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
    '.collapse': {
      position: 'absolute',
      height: '3rem',
      top: '0',
      right: 0,
      svg: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
  },
}
