import React from 'react'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location }) => {
  return location === 'archive' ? (
    <h2 className="entry-title h5 mb-0">
      <Link
        className="text-decoration-none text-reset"
        to={post.uri}
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
    </h2>
  ) : (
    <h1
      className="entry-title display-3"
      dangerouslySetInnerHTML={{ __html: post.title }}
    />
  )
}
