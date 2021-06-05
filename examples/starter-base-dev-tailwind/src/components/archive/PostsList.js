import React from "react"
import { PostEntry } from "baseComponents"
import clsx from "clsx"

export const PostsList = ({ posts, className, ...props }) => (
  <div className={clsx("posts-list", className)} {...props}>
    {posts.map((post, index) => (
      <PostEntry
        key={post.id}
        location="archive"
        post={post}
        isFirst={index === 0}
      />
    ))}
  </div>
)
