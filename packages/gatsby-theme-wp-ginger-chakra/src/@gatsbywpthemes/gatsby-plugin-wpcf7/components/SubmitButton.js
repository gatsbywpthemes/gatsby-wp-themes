import React from 'react'
import { Button } from '@chakra-ui/react'

export const SubmitButton = ({ disabled, children }) => {
  return (
    <Button
      ml="auto"
      className="submit-button"
      type="submit"
      disabled={disabled}
    >
      {children}
    </Button>
  )
}
