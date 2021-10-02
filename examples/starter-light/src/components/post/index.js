import React from "react"
import { PostEntryContent } from "./PostEntryContent"
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
      <PostEntryTitle post={post} location={location} />
      <PostEntryContent post={post} location={location} />
    </article>
  )
}
