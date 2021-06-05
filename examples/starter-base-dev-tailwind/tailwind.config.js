const colors = require("tailwindcss/colors")
const rem = (px) => px / 16 + "rem"

const { blueGray, red, teal, purple } = colors
//palette
const light = blueGray[100],
  ultraLight = blueGray[50],
  dark = blueGray[800],
  ultraDark = blueGray[900],
  primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = blueGray[200],
  bg = ultraLight,
  text = ultraDark
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        containerLg: rem(1024),
        containerMd: rem(768),
        containerSm: rem(640),
        containerXl: rem(1280),
        big: "1280px",
      },
      colors: {
        /* header */
        ...colors,
        light,
        ultraLight,
        ultraDark,
        primary,
        secondary,
        highlight,
        mutted,
        bg,
        text,
        accentColor: primary,
        /* header */
        headerBg: "white",
        headerColor: ultraDark,
        /* footer */
        footerBg: "white",
        footerColor: ultraDark,
        /* search */
        searchBg: "white",
        searchResultsHeaderBg: ultraDark,
        searchResultsHeaderColor: primary,
        searchResultsBg: bg,
        searchResultsColor: text,
        /* menu */
        mobileMenuBg: "black",
        mobileMenuColor: light,
        subMenuBg: "black",
        subMenuColor: "white",
        /* newsletter */
        nlButtonBg: "black",
        nlButtonColor: "white",
        nlInputBg: light,
        nlColor: text,
        /* post */
        infoBg: light,
        archiveTitleBg: blueGray[100],
        archiveTitleColor: text,
        cardBg: "white",

        dark: {
          /* basic colors*/
          bg: dark,
          text: ultraLight,
          text2: teal[900],
          /* header*/
          headerBg: ultraDark,
          headerColor: ultraLight,
          /* footer*/
          footerBg: ultraDark,
          footerColor: ultraLight,
          /* search */
          searchBg: ultraDark,
          searchResultsHeaderBg: primary,
          searchResultsHeaderColor: light,
          searchResultsBg: bg,
          searchResultsColor: text,
          /* menu*/
          mobileMenuBg: "black",
          mobileMenuColor: light,
          subMenuBg: primary,
          subMenuColor: teal[900],
          /* newsletter */
          nlButtonBg: primary,
          nlButtonColor: teal[900],
          nlInputBg: blueGray[700],
          nlColor: teal[900],
          /* post*/
          archiveTitleBg: primary,
          archiveTitleColor: teal[900],
          infoBg: primary,
          cardBg: ultraDark,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
