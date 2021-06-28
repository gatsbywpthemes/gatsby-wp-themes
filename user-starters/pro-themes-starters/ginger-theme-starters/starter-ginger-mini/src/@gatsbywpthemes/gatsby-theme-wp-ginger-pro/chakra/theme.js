import { extendTheme } from "@chakra-ui/react"
import theme from "gingerThemeSrc/chakra/theme"
import colorsSettings from "../../../../configColors"
import typographySettings from "../../../../configTypography"
import sizesSettings from "../../../../configSizes"

const extendedTheme = extendTheme(
  {
    colors: colorsSettings,
    ...typographySettings,
    breakpoints: sizesSettings.breakpoints || theme.breakpoints,
    sizes: sizesSettings.sizes,
    styles: {
      global: {
        ...typographySettings.base,
      },
    },
  },
  theme
)

export default extendedTheme
