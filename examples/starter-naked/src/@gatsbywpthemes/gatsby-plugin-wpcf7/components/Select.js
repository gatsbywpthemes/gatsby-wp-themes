import React, { forwardRef } from "react"

export const Select = forwardRef(({ children, ...props }, ref) => {
  return (
    <select {...props} ref={ref}>
      {children}
    </select>
  )
})
