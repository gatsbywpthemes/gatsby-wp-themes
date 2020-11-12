import { extendTheme } from "@chakra-ui/core"
import customTheme from "gatsby-theme-wp-starter/src/gatsby-plugin-chakra-ui/theme"
import typographySettings from "../../configTypography"

// import { colors } from "./foundations"
import {
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
  base,
} from "./foundations/typography"
import { Container as CenterContainer } from "./components"
import { layerStyles } from "./layerStyles"
import { textStyles } from "./textStyles"

import { styles } from "./styles"

const theme = extendTheme({
  // colors,
  ...customTheme,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,

  // components: {
  //   CenterContainer,
  // },
  textStyles: {
    ...textStyles,
    ...base,
  },
  layerStyles: {
    ...layerStyles,
  },

  gradients: {
    primary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary},${t.colors.yellow})`,
    },
    secondary: {
      backgroundImage: (t) =>
        `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.purple} )`,
    },
  },
  // styles: {
  //   ...styles,
  // },
})

export default theme
