/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'
import { gutenbergStyles } from '../../styles'
import { ActivatePostScripts } from '../../utils'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <div {...attributes} sx={{ ...gutenbergStyles }} {...props}>
      <div className="entry-content">
        <ActivatePostScripts />
        <ParsedContent content={content} />
      </div>
    </div>
  )
}
