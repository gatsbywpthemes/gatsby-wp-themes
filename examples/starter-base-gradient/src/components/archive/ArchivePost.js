import React from "react"
import { PostEntryContent } from "../post/PostEntryContent"
import { PostEntryMedia } from "../post/PostEntryMedia"
import { PostEntryMeta } from "../post/PostEntryMeta"
import { PostEntryTitle } from "../post/PostEntryTitle"
import { PostEntryInfo } from "../post/PostEntryInfo"
import clsx from "clsx"

export const Archivepost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article className={clsx("card", className)} {...props}>
      <PostEntryMedia
        post={post}
        location="archive"
        imageLoading={isFirst ? "eager" : "lazy"}
        className="aspect-w-16 aspect-h-9"
      />

      <div className="p-5 md:p-10">
        <PostEntryTitle
          post={post}
          location="archive"
          className="mb-5 uppercase"
        />
        <PostEntryInfo post={post} className="mb-10" />
        <PostEntryContent post={post} location="archive" />
        <div className="my-12 divider" />
        <PostEntryMeta post={post} />
      </div>
    </article>
  )
}
