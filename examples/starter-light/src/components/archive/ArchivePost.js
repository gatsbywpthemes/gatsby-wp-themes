import React from "react"
import { PostEntryContent } from "../post/PostEntryContent"
import { PostEntryMedia } from "../post/PostEntryMedia"
import { PostEntryMeta } from "../post/PostEntryMeta"
import { PostEntryTitle } from "../post/PostEntryTitle"

export const Archivepost = ({ isFirst = false, post, ctx, ...props }) => {
  return (
    <article {...props}>
      <PostEntryMedia
        post={post}
        location="archive"
        imageLoading={isFirst ? "eager" : "lazy"}
      />
      <PostEntryTitle post={post} location="archive" />
      <PostEntryContent post={post} location="archive" />
      <PostEntryMeta post={post} />
    </article>
  )
}
