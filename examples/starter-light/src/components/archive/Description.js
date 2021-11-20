import React from "react"

export const Description = ({ description, className = "", ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`description card  mb-10 italic  text-base  p-5 sm:p-10 ${className}`}
      {...props}
    />
  )
}
