/** @jsx jsx */
import { jsx } from 'theme-ui'

export const PostEntryExcerpt = ({ post, location }) => {
  return (
    location === 'archive' &&
    post.excerpt && (
      <div
        className="entry-excerpt"
        dangerouslySetInnerHTML={{
          __html: post.excerpt.slice(0, 160) + `[...]`,
        }}
      />
    )
  )
}
