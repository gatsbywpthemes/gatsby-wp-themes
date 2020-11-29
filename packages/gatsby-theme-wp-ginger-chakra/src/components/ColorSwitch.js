import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Button, useColorMode } from '@chakra-ui/react'

export const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      type="button"
      aria-label="Toggle dark/light mode"
      onClick={toggleColorMode}
      className={colorMode === 'light' ? 'default-mode' : 'dark-mode'}
      sx={{
        variant: 'buttons.raw',
        color: 'text',
        position: 'fixed',
        zIndex: 13,
        right: '4.5rem',
        /*top: (theme) => {
          const header0 = theme.sizes.header[0].split('rem')
          const header1 = theme.sizes.header[1].split('rem')
          return [
            `${0.5 * (Number(header0[0]) - 1.5)}rem`,
            `${0.5 * (Number(header1[0]) - 1.5)}rem`,
            '1.75rem',
          ]
        },*/
      }}
    >
      {colorMode === 'dark' ? (
        <FiSun sx={{ width: `1.5rem`, height: `1.5rem` }} />
      ) : (
        <FiMoon
          sx={{
            width: `1.5rem`,
            height: `1.5rem`,
          }}
        />
      )}
    </Button>
  )
}
