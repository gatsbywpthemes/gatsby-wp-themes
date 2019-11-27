/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import ParsedContent from '../../utils/ParsedContent'

const PostEntryContent = ({ post, location }) => {
  const content = location === 'single' ? post.content : post.excerpt
  return (
    <Styled.root className="entry-content">
      <ParsedContent content={content} />
    </Styled.root>
  )
}

export default PostEntryContent
