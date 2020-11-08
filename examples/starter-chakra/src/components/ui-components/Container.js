/** @jsx jsx */
import { useStyleConfig, Box, jsx } from '@chakra-ui/core'

export const Container = ({ size, ...rest }) => {
  const styles = useStyleConfig('CenterContainer', { size })
  return <Box sx={styles} {...rest} />
}
