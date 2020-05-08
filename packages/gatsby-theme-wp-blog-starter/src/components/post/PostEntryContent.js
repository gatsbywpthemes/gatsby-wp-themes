/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'
import gutenberg from '../../styles/theme-gutenberg'

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const attributes = location === 'single' ? { id: 'content' } : {}
  return (
    <Box {...attributes} sx={{ ...gutenberg }} {...props}>
      <Box className="entry-content">
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}
