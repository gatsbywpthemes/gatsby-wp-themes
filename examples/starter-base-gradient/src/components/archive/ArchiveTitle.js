import React from "react"
import clsx from "clsx"

export const Archivetitle = ({ name, text, className, ...props }) => {
  return (
    <div
      className={clsx(
        "inline-block",
        "px-7 py-2 rounded-full shadow-lg",
        "bg-gradient-to-r from-secondary to-teal-300 dark:from-primary dark:to-purple",

        className
      )}
      {...props}
    >
      <h1
        className={`text-archiveTitleColor dark:text-dark-archiveTitleColor uppercase text-lg`}
      >
        {text} {name}
      </h1>
    </div>
  )
}
