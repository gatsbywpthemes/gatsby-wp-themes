import { extendTheme } from "@chakra-ui/react"

import themeBase from "gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/theme"
import colorsSettings from "../../../configColors"
import typographySettings from "../../../configTypography"
import components from "./components"
import textStyles from "./textStyles"
import layerStyles from "./layerStyles"
import styles from "./styles"

const theme = extendTheme({
  ...themeBase,
  components: {
    ...themeBase.components,
    ...components,
  },
  colors: colorsSettings,
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  ...typographySettings,

  styles,
})

export default theme
