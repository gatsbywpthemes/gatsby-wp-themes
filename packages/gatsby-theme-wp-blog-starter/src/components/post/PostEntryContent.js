/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'
import gutenberg from '../../styles/theme-gutenberg'

const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === 'single' ? post.content : post.excerpt
  return (
    <Box sx={{ ...gutenberg }} {...props}>
      <Box className="entry-content">
        <ParsedContent content={content} />
      </Box>
    </Box>
  )
}

export default PostEntryContent
