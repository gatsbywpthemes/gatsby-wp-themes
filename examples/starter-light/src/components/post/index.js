import React from "react"
import { PostEntryContent } from "./PostEntryContent"
import { PostEntryMedia } from "./PostEntryMedia"
import { PostEntryTitle } from "./PostEntryTitle"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  ...props
}) => {
  return (
    <article {...props}>
      <PostEntryMedia imageLoading="eager" post={post} location="single" />
      <PostEntryTitle post={post} location={location} />
      <PostEntryContent post={post} location={location} />
    </article>
  )
}
