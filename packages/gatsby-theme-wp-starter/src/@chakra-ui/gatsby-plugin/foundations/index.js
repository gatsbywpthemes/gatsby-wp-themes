import typography from './typography'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import config from 'starterThemeConfig'

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
  fontSizes: fontSize,
  fontWeights: fontWeight,
  fonts: fontFamily,
  letterSpacings: letterSpacing,
  lineHeights: lineHeight,
  typography: {
    fontSizes: fontSize,
    fontWeights: fontWeight,
    lineHeights: lineHeight,
  },
}

export default foundations
