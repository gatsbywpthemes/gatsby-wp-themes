import React from "react"
import clsx from "clsx"
import { Date } from "./Date"
// import { Author } from "./Author"

export const PostEntryInfo = ({ post, className, ...props }) => {
  return (
    <div>
      <div
        className={clsx(
          "inline-block post-info",
          "uppercase text-sm tracking-widest text-text dark:text-white",
          "px-4 py-3",
          className
        )}
        {...props}
      >
        <Date date={post.date} />
        {/* <Author
          author={post.author.node}
          className="font-bold hover:opacity-70 !text-text !dark:text-teal-900"
        /> */}
      </div>
    </div>
  )
}
