import React, { forwardRef } from "react"

export const Select = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <select className={`bg-transparent ml-2 ${className}`} {...props} ref={ref}>
      {children}
    </select>
  )
})
