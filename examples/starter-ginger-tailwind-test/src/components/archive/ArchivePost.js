import React from "react"
import { PostEntryContent } from "~/components/post/PostEntryContent"
import { PostEntryMedia } from "~/components/post/PostEntryMedia"
import { PostEntryMeta } from "~/components/post/PostEntryMeta"
import { PostEntryTitle } from "~/components/post/PostEntryTitle"
import { PostEntryInfo } from "~/components/post/PostEntryInfo"
import clsx from "clsx"

export const Archivepost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article className={clsx("card-", className)} {...props}>
      <PostEntryMedia
        post={post}
        location="archive"
        imageLoading={isFirst ? "eager" : "lazy"}
        className="aspect-w-16 aspect-h-5 object-center object-cover"
      />

      <div className="bg-white m-4 -mt-16 z-[1] relative w-[95%] lg:w-[75%] mx-auto p-3 shadow-lg text-center dark:bg-dark-bg border-[0.75em] dark:border-darkBorder">
        <PostEntryTitle post={post} location="archive" className="mb-5" />
        <PostEntryInfo post={post} className="mb-10" />
        <PostEntryContent post={post} location="archive" />
        <div className="my-12 divider" />
        <PostEntryMeta post={post} />
      </div>
    </article>
  )
}
