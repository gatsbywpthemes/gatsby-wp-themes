import React from 'react'

export const PostEntryExcerpt = ({ post, location }) => {
  return (
    post.excerpt && (
      <div
        className="entry-excerpt text-secondary"
        dangerouslySetInnerHTML={{
          __html: post.excerpt,
        }}
      />
    )
  )
}
