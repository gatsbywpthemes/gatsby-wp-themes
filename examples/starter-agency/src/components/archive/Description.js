import React from "react"

export const Description = ({ description, className = "", ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`description mb-5 sm:mb-10 text-lg max-w-md ${className}`}
      {...props}
    />
  )
}
