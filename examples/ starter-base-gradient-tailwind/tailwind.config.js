const colors = require("tailwindcss/colors")
const rem = (px) => px / 16 + "rem"
const { darken, lighten } = require("polished")

//palette
const light = "#FBEED9",
  ultraLight = lighten(0.04, "#FBEED9"),
  dark = "#082737",
  dark0 = lighten(0.08, "#082737"),
  dark2 = darken(0.04, "#082737"),
  ultraDark = darken(0.1, "#082737"),
  primary = "tomato",
  secondary = "#4C959B",
  yellow = "#FCB458",
  purple = "#c725A3"

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",
  mode: "jit",
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
        body: "Coda, sans-serif",
        heading: "Baumans, sans-serif",
      },
      maxWidth: {
        lg: rem(1024),
        md: rem(768),
        sm: rem(640),
        xl: rem(1280),
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
        ultraLight,
        dark,
        primary,
        secondary,
        ultraDark,
        highlight: purple,
        yellow,
        purple,
        bg: light,
        text: dark0,
        accentColor: primary,
        /* header */
        headerBg: dark,
        headerColor: ultraLight,
        /* footer */
        footerBg: dark,
        footerColor: ultraLight,
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
        subMenucolor: "white",
        subMenuHoverColor: colors.teal[900],
        menuHoverColor: colors.teal[300],
        /* newsletter */
        nlButtonBg: "black",
        nlButtonColor: "white",
        nlButtonHoverBg: primary,
        nlInputBg: light,
        nlColor: text,
        /* post */
        infoBg: darken(0.02, light),
        archiveTitleBg: primary,
        cardBg: ultraLight,

        dark: {
          /* basic colors*/
          bg: dark,
          text: light,
          /* header */
          headerBg: ultraDark,
          headerColor: ultraLight,
          /* footer */
          footerBg: ultraDark,
          footerColor: ultraLight,
          /* search */
          searchBg: ultraDark,
          searchResultsHeaderBg: primary,
          searchResultsHeaderColor: light,
          searchResultsBg: bg,
          searchResultsColor: text,
          /* menu*/
          mobileMenuBg: dark,
          mobileMenuColor: light,
          subMenuBg: secondary,
          subMenucolor: "white",
          subMenuHoverColor: dark,
          menuHoverColor: primary,
          /* newsletter */
          nlButtonBg: primary,
          nlButtonColor: colors.teal[900],
          nlButtonHoverBg: secondary,
          nlInputBg: colors.blueGray[700],
          nlColor: colors.teal[900],
          /* post*/
          infoBg: ultraDark,
          archiveTitleBg: primary,
          highlight: yellow,
          cardBg: dark2,
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
