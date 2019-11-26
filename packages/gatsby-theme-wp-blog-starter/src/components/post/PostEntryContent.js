/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'

const PostEntryContent = ({ post, location }) => {
  const content = location === 'single' ? post.content : post.excerpt
  return (
    <Styled.root className="entry-content">
      <ContentParser content={content} customFn={[cf7ParserFunction]} />
    </Styled.root>
  )
}

export default PostEntryContent
