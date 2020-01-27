/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'

const PostEntryContent = ({ post, location }) => {
  const content = location === 'single' ? post.content : post.excerpt
  return (
    <Box className="entry-content">
      <ParsedContent content={content} />
    </Box>
  )
}

export default PostEntryContent
