/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Author = ({ post, ...props }) => {
  const { name, slug } = post.author
  return (
    <Link aria-label={`visit ${name} page`} to={`/author/${slug}`} {...props}>
      {name}
    </Link>
  )
}

export default Author
