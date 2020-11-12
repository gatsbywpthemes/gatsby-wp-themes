/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location }) => {
  const attributes = {
    sx: { variant: 'special.title' },
    className: 'entry-title',
  }
  return location === 'archive' ? (
    <h2 className="entry-title h5">
      <Link to={post.uri} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>
  ) : (
    <h1 {...attributes} dangerouslySetInnerHTML={{ __html: post.title }} />
  )
}
