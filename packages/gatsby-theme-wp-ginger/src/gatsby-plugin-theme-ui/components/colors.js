import { darken, lighten } from 'polished'

const dark = `#303030`
const dark0 = lighten(0.04, '#303030')
const dark2 = darken(0.04, '#303030')
const dark3 = darken(0.065, '#303030')
const dark4 = darken(0.1, '#303030')
const light = `#f5f5f5`
const primary = '#076666'
const primaryForDark = `#79b2b2`
const white = '#ffffff'
const accentDark = '#6d00ff'
const accentLight = '#c98afa'

export const colors = {
  /* basic colors */
  text: dark,
  background: white,
  linkHover: primary,
  focusOutline: accentDark,
  /* header */
  headerColor: dark,
  headerBg: light,
  /* footer */
  footerColor: dark,
  footerBg: light,
  /* sidebar */
  sidebarColor: white,
  sidebarBg: primary,
  menuButtonColor: white,
  menuButtonBg: dark,
  /* post */
  splashBg: primary,
  scrollDownColor: dark,
  scrollDownBg: white,
  cardColor: dark,
  cardBg: white,
  cardBorder: white,
  commentsColor: white,
  commentsBg: dark,
  overlay: 'transparent',

  modes: {
    dark: {
      /* basic colors */
      text: light,
      background: dark,
      linkHover: primaryForDark,
      focusOutline: accentLight,
      /* header */
      headerColor: light,
      headerBg: dark2,
      /* footer */
      footerColor: light,
      footerBg: dark4,
      /* sidebar */
      sidebarColor: light,
      sidebarBg: dark4,
      menuButtonColor: dark,
      menuButtonBg: light,
      /* post */
      splashBg: dark3,
      scrollDownColor: white,
      scrollDownBg: dark,
      cardColor: light,
      cardBg: dark,
      cardBorder: dark0,
      commentsColor: light,
      commentsBg: dark3,
      overlay: 'rgba(0,0,0,.6)',
    },
  },
}
