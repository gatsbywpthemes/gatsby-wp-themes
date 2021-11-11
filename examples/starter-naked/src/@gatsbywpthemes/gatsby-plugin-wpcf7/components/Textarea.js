import React, { forwardRef } from "react"

export const Textarea = forwardRef(({ ...props }, ref) => {
  return <textarea className="styled-input" {...props} ref={ref} />
  //TODO: why class doesn't apply here
})
