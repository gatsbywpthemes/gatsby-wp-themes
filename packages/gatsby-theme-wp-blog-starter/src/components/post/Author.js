/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Author = ({ post }) => {
  const { name, slug } = post.author
  return (
    <a as={Link} aria-label={`visit ${name} page`} to={`/author/${slug}`}>
      {name}
    </a>
  )
}

export default Author
