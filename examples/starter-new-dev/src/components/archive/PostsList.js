import React from 'react'
import { PostEntry } from 'starterComponents'

export const PostsList = ({ posts, ...props }) => (
  <div className="posts-list" {...props}>
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
