import { extendTheme } from "@chakra-ui/react"

import themeBase from "@gatsbywpthemes/gatsby-theme-wp-starter/src/chakra/theme"
import baseComponents from "@gatsbywpthemes/gatsby-theme-wp-starter/src/chakra/components"
import colorsSettings from "../../../../configColors"
import typographySettings from "../../../../configTypography"
import components from "./components"
import textStyles from "./textStyles"
import layerStyles from "./layerStyles"
import styles from "./styles"

const theme = extendTheme({
  ...themeBase,
  components: {
    ...baseComponents,
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
