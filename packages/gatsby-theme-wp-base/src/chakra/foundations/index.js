import { createBreakpoints } from '@chakra-ui/theme-tools'

import config from 'baseThemeConfig'

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
const fromTailwindToChakra = (fonts) => {
  return Object.entries(fonts).reduce((acc, [key, value]) => {
    acc[key] = value[0]
    return acc
  }, {})
}

const foundations = {
  breakpoints: createBreakpoints(screens),
  colors,
  space: spacing,
  border: borderWidth,
  radii: borderRadius,
  shadows: boxShadow,
  sizes: widths,
  fontSizes: fromTailwindToChakra(fontSize),
  fontWeights: fontWeight,
  fonts: fontFamily,
  letterSpacings: letterSpacing,
  lineHeights: lineHeight,
  typography: {
    fontSizes: fromTailwindToChakra(fontSize),
    fontWeights: fontWeight,
    lineHeights: lineHeight,
  },
}

export default foundations
