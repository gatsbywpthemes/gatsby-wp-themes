import { mode } from '@chakra-ui/theme-tools'
import { theme } from '@chakra-ui/core'
import { base } from './foundations/typography'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: theme.baseFontSize || '16px',
  baseLineHeight: theme.lineHeights.body,
  scaleRatio: 3,
  blockMarginBottom: 0.75,
  headerFontFamily: theme.fonts.heading.split(',').map((el) => {
    return el.trim()
  }),

  bodyFontFamily: theme.fonts.body.split(',').map((el) => {
    return el.trim()
  }),
  headerWeight: theme.fontWeights.heading,
  bodyWeight: theme.fontWeights.body,
  boldWeight: theme.fontWeights.bold,
})

export const styles = {
  global: (props) => {
    return {
      html: {
        fontSize: typography?.baseFontSize,
      },
      body: {
        fontFamily: 'body',
        color: mode('dark', 'ultraLight')(props),
        bg: mode('ultraLight', 'dark')(props),
        transition: 'all .4s ease-in-out',
        lineHeight: 'body',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      ...base,
    }
  },
}
