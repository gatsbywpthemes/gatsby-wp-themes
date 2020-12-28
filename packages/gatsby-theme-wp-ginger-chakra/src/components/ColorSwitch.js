import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Button, useColorMode } from '@chakra-ui/react'
import { useThemeColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

export const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      aria-label="Toggle dark/light mode"
      onClick={toggleColorMode}
      className={colorMode === 'light' ? 'default-mode' : 'dark-mode'}
      variant="circle"
      sx={{
        color: useThemeColorModeValue('menuButtonColor'),
        bg: useThemeColorModeValue('menuButtonBg'),
        '&:hover svg': {
          color: useThemeColorModeValue('menuButtonBg'),
        },
        position: 'fixed',
        zIndex: 13,
        right: '5rem',
        top: (theme) => {
          const header0 = theme.sizes.header[0].split('rem')
          const header1 = theme.sizes.header[1].split('rem')
          return [
            `${0.5 * (Number(header0[0]) - 3.25)}rem`,
            `${0.5 * (Number(header1[0]) - 3.25)}rem`,
            '1rem',
          ]
        },
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
