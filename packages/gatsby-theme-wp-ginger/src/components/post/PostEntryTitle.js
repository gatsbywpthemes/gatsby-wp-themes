/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import normalize from 'normalize-path'

const PostEntryTitle = ({ post, location }) => {
  const attributes = {
    sx: { variant: 'special.title' },
    className: 'entry-title',
  }
  return location === 'archive' ? (
    <h2 {...attributes}>
      <Link
        to={normalize(`/${post.uri}`)}
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
    </h2>
  ) : (
    <h1 {...attributes} dangerouslySetInnerHTML={{ __html: post.title }} />
  )
}

export default PostEntryTitle
