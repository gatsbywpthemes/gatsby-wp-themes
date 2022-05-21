const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

const rem = (px) => px / 16 + "rem"

const { slate, red, teal, purple } = colors
//palette

const ultraLight = slate[50],
  dark = "#303030",
  // dark = slate[800],
  ultraDark = slate[900],
  // primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = slate[200],
  bg = ultraLight,
  text = ultraDark
lightBgGray = "#4d4f4f"
darkBorder = "#3a3a3a"

const dark0 = "#3a3a3a"
const dark1 = "#303030"
const dark2 = "#262626"
const dark3 = "#1f1f1f"
const dark4 = "#161616"
const light = "#f5f5f5"
const primary = "#076666"
const white = "#ffffff"
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Trebuchet MS", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      debugScreens: {
        position: ["top", "left"],
        style: {
          backgroundColor: "black",
          color: "#fff",
        },
      },
      maxWidth: {
        xl: rem(1280),
        lg: rem(960),
        md: rem(768),
        sm: rem(640),
      },
      fontWeight: {
        body: 400,
        heading: "bold",
        bold: 700,
      },
      lineHeight: {
        body: 1.8,
        heading: 1.4,
        loose: 2,
      },
      boxShadow: {
        input: "currentcolor 0px 0px 0px inset",
        inputFocus: "currentcolor 0px -3px 0px inset",
        lg: "0 10px 40px rgb(0 0 0 / 15%)",
      },
      colors: {
        /* basic colors */
        ...colors,
        lightBgGray,
        darkBorder,
        light,
        // dark,
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
        subMenuHoverColor: primary,
        menuHoverColor: primary,
        /* newsletter */
        nlButtonBg: "black",
        nlButtonColor: "white",
        nlButtonHoverBg: primary,
        nlInputBg: light,
        nlColor: light,
        /* post */
        splashBg: primary,
        scrollDownColor: dark1,
        scrollDownBg: white,
        cardColor: dark1,
        cardBg: light,
        cardBorder: white,
        commentsColor: white,
        commentsBg: dark1,
        infoBg: light,
        infoColor: teal[900],
        archiveTitleBg: slate[100],
        archiveTitleColor: text,
        // Comments
        commentsColor: light,
        commentsBg: dark2,
        commentBg: dark1,

        dark: {
          /* basic colors*/

          text: light,
          bg: dark1,
          text2: teal[900],
          accentColor: primary,
          /* header*/
          headerBg: ultraDark,
          headerColor: ultraLight,
          /* footer */
          footerColor: light,
          footerBg: dark4,
          /* sidebar */
          sidebarColor: light,
          sidebarBg: dark4,
          menuButtonColor: dark1,
          menuButtonBg: light,
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
          subMenuHoverColor: teal[800],
          menuHoverColor: teal[100],
          /* newsletter */
          nlButtonBg: primary,
          nlButtonColor: teal[900],
          nlButtonHoverBg: teal[300],
          nlInputBg: slate[700],
          nlColor: light,
          /* post*/
          archiveTitleBg: primary,
          archiveTitleColor: teal[900],
          /* post */
          splashBg: dark3,
          scrollDownColor: white,
          scrollDownBg: dark1,
          cardColor: light,
          cardBg: dark1,
          cardBorder: dark0,
        },
      },
    },
    triangles: {
      up: {
        direction: "up",
        size: "18px",
        height: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-triangles")({
      componentPrefix: "c-", // defaults to 'c-'
      defaultSize: "1em", // defaults to '1em'
      defaultColor: "currentColor", // defaults to 'currentColor'
    }),
  ],
  corePlugins: {
    preflight: true,
  },
}
