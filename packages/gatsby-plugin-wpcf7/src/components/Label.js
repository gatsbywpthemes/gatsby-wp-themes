import React from "react"

export const Label = ({ className, children, ...props }) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  )
}
