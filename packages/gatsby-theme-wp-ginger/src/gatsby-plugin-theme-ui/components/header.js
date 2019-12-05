export default {
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
}