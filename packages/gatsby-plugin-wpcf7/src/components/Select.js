import React from "react"

export const Select = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <select {...props} ref={ref}>
      {children}
    </select>
  )
})
