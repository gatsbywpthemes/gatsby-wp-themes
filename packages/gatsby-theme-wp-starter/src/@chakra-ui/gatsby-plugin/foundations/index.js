import typography from './typography'

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
  // breakpoints: [...screens],
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
  typography,
}

export default foundations
