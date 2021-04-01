import { createBreakpoints } from '@chakra-ui/theme-tools'

export const breakpoints = createBreakpoints({
  sm: '40em',
  md: '64em',
  /* need to add it event if not used so that lg (by default = 62em) > md */
  lg: '72em',
})
