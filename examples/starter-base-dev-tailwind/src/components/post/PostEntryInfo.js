import React from "react"
import { Date, Author } from "baseComponents"
import clsx from "clsx"

export const PostEntryInfo = ({ post, className, ...props }) => {
  return (
    <div
      className={clsx(
        "inline-block",
        "italic text-sm text-text dark:text-teal-900",
        "rounded-md bg-infoBg dark:bg-dark-infoBg",
        "px-4 py-2",
        className
      )}
      {...props}
    >
      <span>Posted on:</span> <Date date={post.date} /> by{" "}
      <Author post={post} />
    </div>
  )
}
