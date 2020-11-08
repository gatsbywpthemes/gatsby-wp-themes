/** @jsx jsx */
// 1. Import useStyleConfig
import { useStyleConfig, jsx, Box } from '@chakra-ui/core'

export function Button(props) {
  const { size, variant, ...rest } = props

  // 2. Reference `Button` stored in `theme.components`
  const styles = useStyleConfig('Button', { size, variant })

  // 3. Pass the computed styles into the `sx` prop
  return <Box as="button" sx={styles} {...rest} />
}
