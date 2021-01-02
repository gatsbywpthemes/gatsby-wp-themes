import merge from "deepmerge"
import theme from "gingerThemeSrc/@chakra-ui/gatsby-plugin/theme"
import colorsSettings from "../../../configColors"
import typographySettings from "../../../configTypography"
import sizesSettings from "../../../configSizes"

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

export default merge(
  theme,
  {
    colors: colorsSettings,
    breakpoints: sizesSettings.breakpoints || theme.breakpoints,
    sizes: sizesSettings.sizes,
    baseFontSize: typographySettings.baseFontSize,
    fonts: typographySettings.fonts,
    fontWeights: typographySettings.fontWeights,
    lineHeights: typographySettings.lineHeights,
    letterSpacings: typographySettings.letterSpacings,
    fontSizes: typographySettings.fontSizes,
    styles: {
      global: (props) => {
        return merge(theme.styles.global(props), { ...typographySettings.base })
      },
    },
  },
  { arrayMerge: overwriteMerge }
)
