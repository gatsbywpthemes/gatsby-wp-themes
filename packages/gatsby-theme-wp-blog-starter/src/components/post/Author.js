/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const Author = ({ post, ...props }) => {
  const { name, slug } = post.author.node
  return (
    <Link aria-label={`visit ${name} page`} to={`/author/${slug}`} {...props}>
      {name}
    </Link>
  )
}
