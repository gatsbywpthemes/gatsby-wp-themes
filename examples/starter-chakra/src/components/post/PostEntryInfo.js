import React from 'react'
import { Date, Author } from './index'

export const PostEntryInfo = ({ post, ...props }) => {
  return (
    <div className="entry-info animate-on-scroll" {...props}>
      <span>Posted on:</span> <Date post={post} /> by <Author post={post} />
    </div>
  )
}
