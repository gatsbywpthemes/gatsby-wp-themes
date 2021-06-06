const dark0 = '#3a3a3a'
const dark1 = '#303030'
const dark2 = '#262626'
const dark3 = '#1f1f1f'
const dark4 = '#161616'
const light = '#f5f5f5'
const primary = '#076666'
const white = '#ffffff'

export const colors = {
  /* basic colors */
  text: dark1,
  bg: white,
  /* header */
  headerColor: dark1,
  headerBg: light,
  /* footer */
  footerColor: dark1,
  footerBg: light,
  /* sidebar */
  sidebarColor: white,
  sidebarBg: primary,
  menuButtonColor: white,
  menuButtonBg: dark1,
  /* post */
  splashBg: primary,
  scrollDownColor: dark1,
  scrollDownBg: white,
  cardColor: dark1,
  cardBg: light,
  cardBorder: white,
  commentsColor: white,
  commentsBg: dark1,
  overlay: 'transparent',

  modes: {
    dark: {
      /* basic colors */
      text: light,
      bg: dark1,
      /* header */
      headerColor: light,
      headerBg: dark2,
      /* footer */
      footerColor: light,
      footerBg: dark4,
      /* sidebar */
      sidebarColor: light,
      sidebarBg: dark4,
      menuButtonColor: dark1,
      menuButtonBg: light,
      /* post */
      splashBg: dark3,
      scrollDownColor: white,
      scrollDownBg: dark1,
      cardColor: light,
      cardBg: dark1,
      cardBorder: dark0,
      commentsColor: light,
      commentsBg: dark3,
      overlay: 'rgba(0,0,0,.6)',
    },
  },
}
