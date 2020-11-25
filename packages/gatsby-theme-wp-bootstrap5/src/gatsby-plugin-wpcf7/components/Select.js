import React from 'react'

export const Select = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <select className="form-select" {...props} ref={ref}>
        {children}
      </select>
    )
  }
)
