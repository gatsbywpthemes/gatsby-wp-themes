import React from "react"

export const PageTitle = ({ title, ...props }) => {
  return (
    <div {...props}>
      <h1 className="uppercase">{title}</h1>
      <div className="spacer h-1 w-[150px] bg-highlight my-10" />
    </div>
  )
}
