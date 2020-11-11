/** @jsx jsx */
import { jsx, useColorMode, IconButton } from '@chakra-ui/core'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ColorSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle color mode"
      variant="unstyled"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      {...props}
    />
  )
}
