export default {
  variant: 'buttons.icon',
  color: 'menuButtonColor',
  bg: 'menuButtonBg',
  ':hover svg': {
    color: 'menuButtonBg',
  },
  position: 'fixed',
  top: theme => {
    const header0 = theme.sizes.header[0].split('rem')
    const header1 = theme.sizes.header[1].split('rem')
    return [
      `${0.5 * (Number(header0[0]) - 3)}rem`,
      `${0.5 * (Number(header1[0]) - 3)}rem`,
      '1rem',
    ]
  },
  right: '1rem',
  zIndex: 11,
  '&.btn-menu-opened': {
    transform: 'translate3d(6rem, 0, 0)',
  },
}
