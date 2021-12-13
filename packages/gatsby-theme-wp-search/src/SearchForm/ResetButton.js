import React from "react"
import { FiX } from "react-icons/fi"

export const ResetButton = (props) => {
  return (
    <button className="reset-button" aria-label="Reset Search" {...props}>
      <FiX />
    </button>
  )
}
