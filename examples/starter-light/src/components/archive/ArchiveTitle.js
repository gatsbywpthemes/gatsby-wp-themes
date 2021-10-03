import React from "react"

export const Archivetitle = ({ name, text, ...props }) => {
  return (
    <div {...props}>
      <h1>
        {text} {name}
      </h1>
    </div>
  )
}
