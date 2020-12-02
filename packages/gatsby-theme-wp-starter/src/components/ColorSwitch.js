import React from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ColorSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle color mode"
      variant="unstyled"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon mt="-5px" /> : <SunIcon />}
      {...props}
    />
  )
}
