import React from 'react'

export const SubmitButton = ({ disabled, children }) => {
  return (
    <button
      className="submit-button btn btn-dark text-uppercase"
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  )
}
