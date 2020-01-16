import merge from "deepmerge"
import theme from "gatsby-theme-wp-blog-starter/src/gatsby-plugin-theme-ui/index"
import colorsSettings from "../../configColors"
import typographySettings from "../../configTypography"
import sizesSettings from "../../configSizes"

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

export default merge(
  theme,
  {
    breakpoints: sizesSettings.breakpoints || theme.breakpoints,
    sizes: sizesSettings.sizes,
    baseFontSize: typographySettings.baseFontSize,
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
    colors: colorsSettings,
    //Text
    text: {
      branding: {
        // textTransform: "capitalize",
        fontSize: ["l", "l"],
      },
      special: {
        archiveTitle: {
          fontFamily: "body",
          fontWeight: "bold",
          boxShadow: "default",
        },
      },
    },
    //Buttons
    buttons: {
      primary: {
        fontWeight: "bold",
      },
      secondary: {
        fontWeight: "bold",
      },
    },
  },
  { arrayMerge: overwriteMerge }
)
