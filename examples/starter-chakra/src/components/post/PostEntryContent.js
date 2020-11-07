import React from 'react'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePostScripts } from '../../utils'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <div {...attributes} {...props}>
      <div className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </div>
    </div>
  )
}
