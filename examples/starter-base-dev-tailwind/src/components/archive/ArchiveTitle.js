import React from "react"
import clsx from "clsx"

export const ArchiveTitle = ({ name, text }) => {
  return (
    <div>
      <div
        className={clsx(
          "archive-title",
          "px-4 sm:px-6 py-3 mb-10",
          "rounded-lg",
          "inline-block",
          "bg-archiveTitleBg dark:bg-dark-archiveTitleBg",
          "shadow-lg"
        )}
      >
        <h2
          className={clsx(
            "text-xl tracking-wider uppercase text-archiveTitleColor dark:text-dark-archiveTitleColor"
          )}
        >
          {text} {name}
        </h2>
      </div>
    </div>
  )
}
