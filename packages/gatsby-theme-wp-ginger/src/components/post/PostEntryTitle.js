/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location }) => {
  const attributes = {
    sx: { variant: 'special.title' },
    className: 'entry-title',
  }
  return location === 'archive' ? (
    <h2 {...attributes}>
      <Link to={post.uri} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>
  ) : (
    <h1 {...attributes} dangerouslySetInnerHTML={{ __html: post.title }} />
  )
}
