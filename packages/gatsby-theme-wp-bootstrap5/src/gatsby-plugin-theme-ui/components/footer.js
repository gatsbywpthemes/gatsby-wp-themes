export default {
  display: ['block', 'block', 'flex'],
  position: ['static', 'static', 'fixed'],
  zIndex: 11,
  bottom: 0,
  height: theme => ['auto', 'auto', theme.sizes.header[2]],
  fontSize: ['xs', 'xs', 'xxs'],
  transformOrigin: '0 0',
  transform: theme => [
    '',
    '',
    `translate3d(0, ${parseInt(theme.sizes.header[2]) -
      1}rem, 0) rotate(-90deg)`,
  ],
  alignItems: 'center',
  textAlign: ['center', 'center', 'left'],
  p: ['1rem', '1rem', 0],
  bg: ['footerBg', 'footerBg', 'transparent'],
  color: ['footerColor', 'footerColor', 'headerColor'],
  a: {
    color: 'inherit',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  'a:hover': {
    opacity: 0.6,
    color: 'inherit',
  },
}
