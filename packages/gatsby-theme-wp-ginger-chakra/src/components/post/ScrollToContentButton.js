import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Button } from '@chakra-ui/react'
import { FiChevronsDown } from 'react-icons/fi'

export const ScrollToContentButton = () => {
  return (
    <Button
      sx={{
        display: ['none', 'block'],
        variant: 'buttons.icon',
        position: 'absolute',
        bottom: '1.5rem',
        right: 0,
        left: 0,
        margin: 'auto',
        color: 'scrollDownColor',
        bg: 'scrollDownBg',
        ':hover svg': {
          color: 'scrollDownBg',
        },
      }}
      aria-label="Scroll to content"
      onClick={() => scrollTo('#content')}
    >
      <FiChevronsDown />
    </Button>
  )
}
