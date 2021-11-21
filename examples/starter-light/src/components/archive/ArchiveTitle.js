import React from "react"
import clsx from "clsx"

export const Archivetitle = ({ name, text, ...props }) => {
  return (
    <div
      className={clsx(
        "text-archiveTitleColor dark:text-dark-archiveTitleColor text-center uppercase mb-10"
      )}
      {...props}
    >
      <h1>
        {text} {name}
      </h1>
    </div>
  )
}
