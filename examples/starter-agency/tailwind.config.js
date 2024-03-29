const colors = require("tailwindcss/colors")
const rem = (px) => px / 16 + "rem"

const { slate, teal } = colors
//palette
const primary = "black"
const light = "white"
const dark = "black"
const mutted = slate[600]
const highlight = "#CC0063"

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "md:py-20",
    "py-10",
    "py-18",
    "py-16",
    "md:py-28",
    "pt-16",
    "md:pt-28",
  ],
  darkMode: "class",
  theme: {
    extend: {
      debugScreens: {
        position: ["top", "left"],
        style: {
          backgroundColor: "black",
          color: "#fff",
        },
      },
      fontFamily: {
        body: "Mulish, sans-serif",
        heading: "Roboto, sans-serif",
      },
      maxWidth: {
        xl: rem(1280),
        lg: rem(1024),
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
      },

      colors: {
        /* base colors */
        ...colors,
        light,

        primary,
        highlight,
        mutted,
        bg: light,
        text: dark,

        /* header */
        headerBg: light,
        headerColor: dark,
        /* footer */
        footerBg: "black",
        footerColor: "white",
        /* search */
        searchBg: "white",
        searchResultsHeaderBg: highlight,
        searchResultsHeaderColor: "white",
        searchResultsBg: light,
        searchResultsColor: dark,
        /* menu */
        mobileMenuBg: primary,
        mobileMenuColor: light,
        subMenuBg: primary,
        subMenuColor: light,
        subMenuHoverColor: highlight,
        menuHoverColor: highlight,
        // /* newsletter */
        // nlButtonBg: "black",
        // nlButtonColor: "white",
        // nlButtonHoverBg: primary,
        // nlInputBg: light,
        // nlColor: text,
        /* post */
        // infoBg: light,
        // infoColor: teal[900],
        // archiveTitleBg: slate[100],
        // archiveTitleColor: text,
        // cardBg: "white",

        dark: {
          /* basic colors*/

          bg: dark,
          text: light,
          // text2: teal[900],
          accentColor: highlight,
          /* header*/
          headerBg: dark,
          headerColor: light,
          // /* footer*/
          footerBg: dark,
          footerColor: light,
          // /* search */
          // searchBg: ultraDark,
          // searchResultsHeaderBg: primary,
          // searchResultsHeaderColor: light,
          // searchResultsBg: bg,
          // searchResultsColor: text,
          // /* menu*/
          mobileMenuBg: "black",
          mobileMenuColor: light,
          subMenuBg: primary,
          subMenuColor: teal[900],
          subMenuHoverColor: teal[800],
          menuHoverColor: teal[100],
          // /* newsletter */
          // nlButtonBg: primary,
          // nlButtonColor: teal[900],
          // nlButtonHoverBg: teal[300],
          // nlInputBg: slate[700],
          // nlColor: light,
          // /* post*/
          // archiveTitleBg: primary,
          // archiveTitleColor: teal[900],
          // infoBg: primary,
          // cardBg: ultraDark,
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
    require("@tailwindcss/line-clamp"),
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
