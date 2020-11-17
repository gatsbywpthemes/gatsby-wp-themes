import React from "react"

export const SubmitButton = ({ disabled, children }) => {
  return (
    <button className="submit-button" type="submit" disabled={disabled}>
      {children}
    </button>
  )
}
