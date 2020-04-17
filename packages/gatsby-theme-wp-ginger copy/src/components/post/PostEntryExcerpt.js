/** @jsx jsx */
import { jsx } from 'theme-ui'

const PostEntryExcerpt = ({ post, location }) => {
  return (
    location === 'archive' &&
    post.excerpt && (
      <div
        className="entry-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    )
  )
}

export default PostEntryExcerpt
