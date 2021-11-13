import React from "react"

import clsx from "clsx"
import { Date } from "./Date"
import { Author } from "./Author"

export const PostEntryInfo = ({ post, className, ...props }) => {
  return (
    <div>
      <div
        className={clsx(
          "inline-block post-info",
          "italic text-sm text-text dark:text-dark-text",
          "rounded-2xl shadow-md bg-infoBg dark:bg-dark-infoBg",
          "px-4 py-2 ",
          className
        )}
        {...props}
      >
        <span>Posted on:</span> <Date date={post.date} /> by{" "}
        <Author
          author={post.author.node}
          className="font-bold hover:text-primary"
        />
      </div>
    </div>
  )
}
