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
        className="aspect-w-16 aspect-h-[5.5] object-center object-cover"
      />

      <div className=" m-4 -mt-7 md:-mt-16 z-[1] relative w-[95%] lg:w-[75%] mx-auto p-4 shadow-lg text-center bg-cardBg dark:bg-dark-cardBg border-[0.75em] border-white dark:border-darkBorder">
        <PostEntryInfo post={post} className="my-2" />
        <PostEntryTitle post={post} location="archive" className="mb-5" />
        <PostEntryContent post={post} location="archive" />
        {/* <div className="my-12 divider" /> */}
        <PostEntryMeta post={post} />
      </div>
    </article>
  )
}
