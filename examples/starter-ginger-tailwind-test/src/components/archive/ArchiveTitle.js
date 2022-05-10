import React from "react"

export const Archivetitle = ({ name, text, className, ...props }) => {
  return (
    <div className="text-center my-8 lg:my-16" {...props}>
      <p className="uppercase text-sm tracking-widest mb-0">{text}</p>
      <h1 className="archive-title text-4xl lg:text-7xl h1Archive !py-0">
        {name}
      </h1>
    </div>
  )
}
