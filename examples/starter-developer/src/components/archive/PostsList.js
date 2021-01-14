import React from 'react'
import { PostEntry } from 'starterComponents'

export const PostsList = ({ posts, ...props }) => (
  <div className="posts-list" {...props}>
    {posts.map((post) => (
      <PostEntry key={post.id} location="archive" post={post} />
    ))}
  </div>
)
