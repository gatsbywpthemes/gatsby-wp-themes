import React from 'react'
import { Button } from 'gingerThemeUiComponents/Button'

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
