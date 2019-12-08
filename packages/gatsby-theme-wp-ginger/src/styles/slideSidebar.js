import { keyframes } from '@emotion/core'
const pehaafadein = keyframes`
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }
`
export const slideMenu = {
  fontFamily: 'body',
  borderRadius: 0,
  bg: 'backgrounds.sidebar',
  color: 'sidebarColor',
  width: ['100%', '468px'],
  display: `flex`,
  overflowY: 'scroll',
  boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
  animationDuration: '1s',
  p: 7,
  a: theme => theme.styles.root.a,
  ul: {
    variant: 'list.raw',
  },
  '&.menu-closing': {
    animation: `${pehaafadein} 1 .6s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ['none', '-10px 0 0 rgba(0,0,0,0)'],
  },
  '.close': {
    cursor: `pointer`,
    position: 'fixed',
    top: 3,
    right: 3,
  },
  '.menu': {
    mb: 7,
    li: {
      mb: 0,
    },
    ul: {
      m: 0,
      p: 0,
      listStyle: 'none',
      a: {
        display: 'block',
        py: 3,
        position: 'relative',
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
        pl: 5,
      },
      'ul ul a': {
        pl: 7,
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
