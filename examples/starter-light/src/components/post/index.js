import React from "react"
import { PostEntryContent } from "./PostEntryContent"
import { PostEntryInfo } from "./PostEntryInfo"
import { PostEntryMedia } from "./PostEntryMedia"
import { PostEntryMeta } from "./PostEntryMeta"
import { PostEntryTitle } from "./PostEntryTitle"

export const PostEntry = ({
  isFirst = false,
  post,
  ctx,
  location,
  ...props
}) => {
  console.log("post", post)
  const { pageTemplate, skipTitle } = post.headlesswp
  return (
    <article {...props}>
      {post.featuredImage && (
        <PostEntryMedia
          imageLoading="eager"
          post={post}
          location="single"
          className="mb-10"
        />
      )}
      <div
        className={`${
          pageTemplate === "full width" ? "center-container" : ""
        } space-y-5`}
      >
        {!skipTitle && <PostEntryTitle post={post} location={location} />}
        <PostEntryInfo post={post} />
        <PostEntryContent post={post} location={location} />
        <div className="entry-footer">
          <PostEntryMeta post={post} />
        </div>
      </div>
    </article>
  )
}
