/** @jsx jsx */
import { useStyleConfig, Box, jsx } from '@chakra-ui/core'

export const Container = ({ size, sx, ...rest }) => {
  const styles = useStyleConfig('CenterContainer', { size })
  const customStyles = sx
  return <Box sx={{ ...styles, ...customStyles }} {...rest} />
}
