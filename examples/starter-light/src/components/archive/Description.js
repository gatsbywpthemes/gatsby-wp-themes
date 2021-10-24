import React from "react"

export const Description = ({ description, className = "", ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className={`description  mb-10 italic  text-base xl:w-10/12 ${className}`}
      {...props}
    />
  )
}
