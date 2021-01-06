import React from 'react'

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return <input className={`form-control ${className}`} {...props} ref={ref} />
})
