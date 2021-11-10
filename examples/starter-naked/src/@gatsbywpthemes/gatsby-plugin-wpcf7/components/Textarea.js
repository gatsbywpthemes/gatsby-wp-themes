import React, { forwardRef } from "react"

export const Textarea = forwardRef(({ ...props }, ref) => {
  return <textarea {...props} ref={ref} />
})
