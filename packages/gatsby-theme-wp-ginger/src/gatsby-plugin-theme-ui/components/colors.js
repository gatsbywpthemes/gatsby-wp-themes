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
  dark,
  dark0,
  dark2,
  dark3,
  dark4,
  light,
  white,
  primary,
  primaryForDark,
  text: dark,
  inverseText: white,
  background: white,
  headerBg: light,
  cardBorder: white,
  focusOutline: accentDark,
  linkHover: primary,
  headerColor: dark,
  footerColor: dark,
  sidebarColor: white,
  commentsColor: white,
  cardColor: dark,
  backgrounds: {
    header: light,
    sidebar: primary,
    footer: light,
    card: white,
    splash: primary,
    comments: dark,
  },
  modes: {
    dark: {
      primary: primaryForDark,
      text: light,
      inverseText: dark,
      cardBorder: dark0,
      focusOutline: accentLight,
      background: dark,
      headerBg: dark2,
      linkHover: primaryForDark,
      headerColor: light,
      footerColor: light,
      sidebarColor: light,
      commentsColor: light,
      cardColor: light,
      backgrounds: {
        header: dark2,
        sidebar: dark4,
        footer: dark4,
        card: dark,
        splash: dark3,
        comments: dark3,
      },
    },
  },
}
