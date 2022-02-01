import React from 'react'
import { FiX } from 'react-icons/fi'
import { Button } from '@chakra-ui/react'

export const ResetButton = (props) => {
  return (
    <Button
      variant="ghost"
      position="absolute"
      right="0"
      h="100%"
      className="reset-button"
      aria-label="Reset Search"
    >
      <FiX />
    </Button>
  )
}
