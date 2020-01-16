import { keyframes } from '@emotion/core'
const pehaafadein = keyframes`
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }
`
export default {
  fontFamily: 'body',
  borderRadius: 0,
  bg: 'slideSidebarBg',
  width: ['100%', '468px'],
  display: 'flex',
  overflowY: 'scroll',
  boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
  animationDuration: '1s',

  p: 'xl',
  '&.menu-closing': {
    animation: `${pehaafadein} 1 .6s 0s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    boxShadow: ['none', '-10px 0 0 rgba(0,0,0,0)'],
  },
  '.close': {
    cursor: 'pointer',
    position: 'fixed',
    top: 3,
    right: 3,
  },
  '.menu': {
    a: {
      textDecoration: 'none',
    },
    mb: 'xxl',
    li: {
      mb: 0,
    },
    ul: {
      m: 0,
      p: 0,

      listStyle: 'none',
      '.menu-item': {
        display: 'block',
        py: 'xs',
        borderBottom: '1px solid rgba(255,255,255,.15)',
        color: 'light',
        a: {
          color: 'light',
        },
        '&:last-of-type': {
          border: 'none',
        },
      },
      'ul a': {
        pl: 'm',
      },
      'ul ul a': {
        pl: 'xl',
      },
    },
    'nav > ul': { mt: 'xl' },
    '[aria-current]': {
      fontStyle: 'italic',
      fontWeight: 'body',
    },
    button: {
      top: -4,
    },
  },
}
