import React from "react"
import { PostEntryContent } from "../post/PostEntryContent"
import { PostEntryMedia } from "../post/PostEntryMedia"
import { PostEntryMeta } from "../post/PostEntryMeta"
import { PostEntryTitle } from "../post/PostEntryTitle"
import clsx from "clsx"

export const Archivepost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article className={clsx("space-y-5", className)} {...props}>
      <PostEntryMedia
        post={post}
        location="archive"
        imageLoading={isFirst ? "eager" : "lazy"}
        className="mb-5 aspect-w-16 aspect-h-9"
      />

      <PostEntryTitle post={post} location="archive" />
      <PostEntryContent post={post} location="archive" />
      <PostEntryMeta post={post} />
    </article>
  )
}
