/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'
import { gutenbergStyles } from '../../styles'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <Box {...attributes} sx={{ ...gutenbergStyles }} {...props}>
      <Box className="entry-content">
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}
