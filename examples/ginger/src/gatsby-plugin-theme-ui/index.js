import merge from "deepmerge"
import theme from "gatsby-theme-wp-ginger/src/gatsby-plugin-theme-ui/index"

const typographySettings = {
  fonts: {
    //body: "Fira Sans, sans-serif",
    //heading: "Abril Fatface, serif",
  },
  fontWeights: {
    //heading: 400,
    //body: 300,
    //bold: 700,
  },
  lineHeights: {
    //body: 1.5,
  },
  letterSpacings: {
    //loose: "2px",
  },
  fontSizes: {
    //xxs: ".75rem",
    //xs: ".875rem",
    //s: "1rem",
    //m: "1.125rem",
    //l: "1.5rem",
    //xl: "2rem",
    //xxl: "3rem",
    //Big: "4rem",
    //Bigger: "4.5rem",
  },
  h1: {
    //fontSize: ["xl", "xxl", "Big"],
  },
  h2: {
    //fontSize: ["l", "xl", "xxl"],
  },
  h3: {
    //fontSize: ["m", "x", "xl"],
  },
  h4: {
    //fontSize: ["s", "m", "l"],
  },
  h5: {
    //fontSize: ["xs", "s", "m"],
  },
  h6: {
    //fontSize: ["xxs", "xs", "s"],
  },
}

const colorsSettings = {}

/* Don't edit the code below */

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

export default merge(
  theme,
  {
    fonts: typographySettings.fonts,
    fontWeights: typographySettings.fontWeights,
    lineHeights: typographySettings.lineHeights,
    letterSpacings: typographySettings.letterSpacings,
    fontSizes: typographySettings.fontSizes,
    styles: {
      root: {
        h1: typographySettings.h1,
        h2: typographySettings.h2,
        h3: typographySettings.h3,
        h4: typographySettings.h4,
        h5: typographySettings.h5,
        h6: typographySettings.h6,
      },
    },
    colors: {
      focusOutline: "red",
      headerColor: "red",
      commentsColor: "pink",
      cardColor: theme.colors.primary,
      backgrounds: {
        sidebar: "purple",
      },
      modes: {
        dark: {
          cardColor: theme.colors.primaryForDark,
          headerColor: "yellow",
          backgrounds: {
            sidebar: "rebeccapurple",
          },
        },
      },
    },
    layer: {
      slideMenu: {
        //bg: "red",
      },
    },
    sizes: {
      //header: ["64px", "64px", "128px"],
    },
  },
  { arrayMerge: overwriteMerge }
)
