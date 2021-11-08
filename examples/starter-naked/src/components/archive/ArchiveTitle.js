import React from "react"
import clsx from "clsx"

export const Archivetitle = ({ name, text, ...props }) => {
  return (
    <div
      className={clsx(
        "inline-block",
        "px-5 py-3 rounded-md shadow-md mb-5",
        "text-archiveTitleColor dark:text-dark-archiveTitleColor",
        "bg-archiveTitleBg dark:bg-dark-archiveTitleBg"
      )}
      {...props}
    >
      <h1>
        {text} {name}
      </h1>
    </div>
  )
}
