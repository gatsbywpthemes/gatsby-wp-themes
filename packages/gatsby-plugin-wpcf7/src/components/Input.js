import React from "react"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return <input className={`${className}`} {...props} ref={ref} />
})
