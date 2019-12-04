export default {
  variant: 'buttons.icon.inverse',
  position: 'fixed',
  top: theme => [
    `${0.5 *
      (parseInt(theme.sizes.header[0]) - parseInt(theme.sizes.menuIcon))}px`,
    `${0.5 *
      (parseInt(theme.sizes.header[1]) - parseInt(theme.sizes.menuIcon))}px`,
    4,
  ],
  right: 4,
  zIndex: 11,
  '&.btn-menu-opened': {
    transform: 'translate3d(4rem, 0, 0)',
  },
}
