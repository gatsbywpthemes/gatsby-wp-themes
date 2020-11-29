import React from "react"

export const Error = ({ error }) => {
  return error ? (
    error.type === "required" ? (
      <span className="error">Required</span>
    ) : (
      <span className="error">Invalid value</span>
    )
  ) : null
}
