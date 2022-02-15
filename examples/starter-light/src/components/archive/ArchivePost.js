import React from "react"
import { PostEntryContent } from "~/components/post/PostEntryContent"
import { PostEntryMedia } from "~/components/post/PostEntryMedia"
import { PostEntryMeta } from "~/components/post/PostEntryMeta"
import { PostEntryTitle } from "~/components/post/PostEntryTitle"
import clsx from "clsx"

export const Archivepost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article className={clsx("card ", className)} {...props}>
      <PostEntryMedia
        post={post}
        location="archive"
        imageLoading={isFirst ? "eager" : "lazy"}
        className="mb-5 aspect-w-16 aspect-h-9"
      />

      <div className="p-5 space-y-5 sm:pt-5 sm:p-10">
        <PostEntryTitle post={post} location="archive" />
        <PostEntryContent post={post} location="archive" />
        <PostEntryMeta post={post} />
      </div>
    </article>
  )
}
