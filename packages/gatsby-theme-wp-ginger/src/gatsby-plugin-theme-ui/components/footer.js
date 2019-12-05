export default {
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
}