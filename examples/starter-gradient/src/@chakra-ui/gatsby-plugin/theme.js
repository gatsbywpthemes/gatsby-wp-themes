import merge from "deepmerge"
import themeBase from "gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/theme"
import colorsSettings from "../../../configColors"

const theme = merge(themeBase, {
  colors: colorsSettings,
})

export default theme
