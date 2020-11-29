import React from 'react'
import { Button } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi'

export const CloseButton = ({ closeMenu }) => {
  return (
    <Button
      aria-label="Close navigation menu"
      variant="ghost"
      sx={{
        cursor: `pointer`,
        position: 'fixed',
        top: '0.75rem',
        right: '0.75rem',
      }}
      onClick={closeMenu}
    >
      <FiX />
    </Button>
  )
}
