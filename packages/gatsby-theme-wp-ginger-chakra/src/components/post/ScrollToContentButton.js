import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Button } from 'gingerThemeUiComponents/Button'
import { useThemeColorModeValue as useColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'

import { FiChevronsDown } from 'react-icons/fi'

export const ScrollToContentButton = () => {
  return (
    <Button
      sx={{
        display: ['none', 'block'],
        position: 'absolute',
        bottom: '1.5rem',
        right: 0,
        left: 0,
        margin: 'auto',
        color: useColorModeValue('text'),
        bg: useColorModeValue('bg'),
        ':hover svg': {
          color: useColorModeValue('bg'),
        },
      }}
      variant="circle"
      aria-label="Scroll to content"
      onClick={() => scrollTo('#content')}
    >
      <FiChevronsDown />
    </Button>
  )
}
