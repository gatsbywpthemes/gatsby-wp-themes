import { createBreakpoints } from "@chakra-ui/theme-tools"

import config from "baseThemeConfig"

const {
  colors,
  screens,
  spacing,
  borderRadius,
  borderWidth,
  boxShadow,
  widths,
  letterSpacing,
  lineHeight,
  fontWeight,
  fontFamily,
  fontSize,
} = config

const foundations = {
  breakpoints: createBreakpoints(screens),
  colors,
  space: spacing,
  border: borderWidth,
  radii: borderRadius,
  shadows: boxShadow,
  sizes: widths,
  fontSizes: fontSize[0],
  fontWeights: fontWeight,
  fonts: fontFamily,
  letterSpacings: letterSpacing,
  lineHeights: lineHeight,
  typography: {
    fontSizes: fontSize[0],
    fontWeights: fontWeight,
    lineHeights: lineHeight,
  },
}

export default foundations
