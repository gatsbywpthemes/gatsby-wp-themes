const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

const rem = (px) => px / 16 + "rem"

const { slate, red, teal, purple } = colors
//palette
const light = slate[100],
  ultraLight = slate[50],
  dark = "#303030",
  // dark = slate[800],
  ultraDark = slate[900],
  primary = dark,
  // primary = teal[400],
  secondary = purple[500],
  highlight = red[500],
  mutted = slate[200],
  bg = ultraLight,
  text = ultraDark
lightBgGray = "#4d4f4f"
darkBorder = "#3a3a3a"
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: "Lexend, sans-serif",
        heading: "Special Elite, mono",
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
        heading: 400,
        body: 400,
        bold: 700,
      },
      lineHeight: {
        body: 1.8,
        heading: 1.2,
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
        dark,
        ultraLight,
        ultraDark,
        primary,
        secondary,
        highlight,
        mutted,

        text: "#303030",
        bg: "#ffffff",
        /* header */
        /* header */
        headerColor: "#fff",
        headerBg: "#111",
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
        nlColor: text,
        /* footer */
        footerColor: "#f5f5f5",
        footerBg: "#161616",
        /* sidebar */
        sidebarColor: "#111",
        sidebarBg: "#eabc2d",
        menuButtonColor: "#ffffff",
        menuButtonBg: "#111",
        /* post */
        splashBg: "#eabc2d",
        scrollDownColor: "#111",
        scrollDownBg: "#ffffff",
        cardColor: "#303030",
        cardBg: "#efefef",
        cardBorder: "#ffffff",
        commentsColor: "#111",

        // scrollDownBg: "#ffffff",
        cardColor: "#483262",
        cardBg: "#f0e7e4",
        cardBorder: "#ffffff",
        commentsColor: "#483262",
        commentsBg: "#e7f0eb",

        dark: {
          /* basic colors*/
          text: "#f5f5f5",
          bg: "#303030",

          /* basic colors */
          text: "#f5f5f5",
          bg: "#271d33",
          /* header */
          headerColor: "#f5f5f5",
          headerBg: "#111",

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
          /* footer */
          footerColor: "#f5f5f5",
          footerBg: "#161616",
          /* sidebar */
          sidebarColor: "#f5f5f5",
          sidebarBg: "#161616",
          menuButtonColor: "#303030",
          menuButtonBg: "#f5f5f5",
          /* post */
          splashBg: "#1f1f1f",
          scrollDownColor: "#ffffff",
          scrollDownBg: "#303030",
          cardColor: "#f5f5f5",
          cardBg: "#303030",
          cardBorder: "#3a3a3a",
          commentsColor: "#f5f5f5",
          commentsBg: "#1f1f1f",
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
