import React from "react"

export const Description = ({ description, ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className="description"
      {...props}
    />
  )
}
