/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      type="button"
      aria-label="Toggle dark/light mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
      className={colorMode === 'default' ? 'default-mode' : 'dark-mode'}
      sx={{
        variant: 'buttons.raw',
        color: 'text',
        position: 'fixed',
        zIndex: 13,
        right: '5rem',
        top: theme => [
          `${0.5 * (parseInt(theme.sizes.header[0]) - 1.5)}rem`,
          `${0.5 * (parseInt(theme.sizes.header[1]) - 1.5)}rem`,
          '1.75rem',
        ],
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
    </button>
  )
}

export default ColorSwitch
