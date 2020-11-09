/** @jsx jsx */
import { jsx, Box } from '@chakra-ui/core'
import ParsedContent from 'utils/ParsedContent'
import { gutenbergStyles } from 'styles/gutenbergStyles'

import { ActivatePostScripts } from 'utils'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <div {...attributes} {...props} sx={{ ...gutenbergStyles }}>
      <div className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </div>
    </div>
  )
}
