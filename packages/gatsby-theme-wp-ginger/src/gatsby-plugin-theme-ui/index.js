import {
  pagination,
  paginationLink,
  card,
  icon,
  form,
  search,
  //widget,
  //article,
  buttons,
  share,
  social,
  //page404,
  layer,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  a,
  special,
  title,
} from './components'

const theme = {
  breakpoints: ['40em', '64em', '80em'],
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors: {
    white: '#ffffff',
    text: '#303030',
    background: {
      body: '#ffffff',
      header: '#f5f5f5',
      sidebar: 'crimson',
      footer: '#f5f5f5',
      card: '#ffffff',
      splash: 'crimson',
    },
    primary: 'teal',
    secondary: 'magenta',
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 128, 256, 512],
  sizes: {
    header: ['72px', '96px', '96px'],
    content: '840px',
    menuIcon: '48px',
  },
  styles: {
    Layout: {
      display: 'block',
      color: 'text',
      '.entry-content a': {
        ...a,
      },
    },
    Main: { ml: theme => [0, 0, theme.sizes.header[2]] },
    Container: {
      margin: '0 auto',
      width: 'content',
      maxWidth: '100%',
      px: [4],
      py: [5, 6],
    },
    Header: {
      position: ['sticky', 'sticky', 'fixed'],
      zIndex: 10,
      top: 0,
      height: theme => [theme.sizes.header[0], theme.sizes.header[1], '100vh'],
      alignItems: ['center', 'center', 'initial'],
      px: [3, 3, 0],
      bg: 'background.header',
      width: theme => ['auto', 'auto', theme.sizes.header[2]],
      '& > a': {
        height: theme => ['auto', 'auto', theme.sizes.header[2]],
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        color: 'inherit',
        textDecoration: 'none',
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: 5,
        position: 'absolute',
        transformOrigin: '0 0',
        transform: [
          '',
          '',
          'translate3d(0, 1rem, 0) rotate(-90deg) translate3d(-100%,0,0)',
        ],
      },
    },
    Footer: {
      display: ['block', 'block', 'flex'],
      position: ['static', 'static', 'fixed'],
      zIndex: 11,
      bottom: 0,
      height: theme => ['auto', 'auto', theme.sizes.header[2]],
      fontSize: [1, 1, 0],
      transformOrigin: '0 0',
      transform: theme => [
        '',
        '',
        `translate3d(0, ${parseInt(theme.sizes.header[2]) -
          16}px, 0) rotate(-90deg)`,
      ],
      alignItems: 'center',
      textAlign: ['center', 'center', 'left'],
      p: [4, 4, 0],
      bg: ['background.footer', 'background.footer', 'transparent'],
      a: {
        color: 'inherit',
        fontWeight: 'bold',
        textDecoration: 'none',
      },
    },
  },
  layer,
  global: {
    fontFamily: 'body',
  },
  special,
  title,
  card,
  pagination,
  paginationLink,
  icon,
  form,
  search,
  //widget,
  //article,
  buttons,
  share,
  social,
  //page404,
  list: {
    raw: {
      listStyle: 'none',
      m: 0,
      p: 0,
    },
  },
}

export default theme
