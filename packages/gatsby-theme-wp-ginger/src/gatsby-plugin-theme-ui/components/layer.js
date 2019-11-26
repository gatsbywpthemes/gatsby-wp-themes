import { keyframes } from '@emotion/core'
const pehaafadein = keyframes`
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0)
  }
`
export const layer = {
  overlay: {
    background: 'rgba(255,255,255, 0)',
  },
  slideMenu: {
    fontFamily: 'body',
    borderRadius: 0,
    bg: 'background.sidebar',
    width: ['100%', '468px'],
    display: `flex`,
    overflowY: 'scroll',
    boxShadow: ['none', '-10px 0 40px rgba(0,0,0,0.3)'],
    animationDuration: '1s',
    //animation: `${pehaafadein} 1s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    p: 7,
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
          borderBottom: '1px solid rgba(255,255,255,.15)',
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
        top: '4px',
        right: 0,
        svg: {
          width: '1.25rem',
          height: '1.25rem',
        },
      },
    },
  },
  extend: {},
}
