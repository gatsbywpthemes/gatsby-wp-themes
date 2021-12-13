import { extendTheme } from "@chakra-ui/react"
import theme from "baseSrc/chakra/theme"
import colorsSettings from "../../../../configColors"
import typographySettings from "../../../../configTypography"

const extendedTheme = extendTheme(
  {
    colors: colorsSettings,
    ...typographySettings,
    styles: {
      global: {
        ...typographySettings.base,
      },
    },
  },
  theme
)

export default extendedTheme
