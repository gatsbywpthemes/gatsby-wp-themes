import React, { forwardRef } from 'react'

export const Textarea = forwardRef(({ children, className, ...props }, ref) => {
  return <textarea className="form-control" {...props} ref={ref} />
})
