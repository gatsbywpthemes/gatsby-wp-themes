import { extendTheme } from "@chakra-ui/react"

import themeBase from "gatsby-theme-wp-starter/src/@chakra-ui/gatsby-plugin/theme"
import colorsSettings from "../../../configColors"
import typographySettings from "../../../configTypography"
import styles from "./styles"

const theme = extendTheme({
  ...themeBase,
  colors: colorsSettings,
  ...typographySettings,
  styles,
})

export default theme