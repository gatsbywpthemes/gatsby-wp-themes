/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'
import Image from '../images/Image'

const WithLink = ({ post, location, children }) =>
  location === 'single' ? (
    children
  ) : (
    <Link to={`/${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location }) => {
  const img = post.featuredImage

  return (
    <Fragment>
      {img && (
        <WithLink location={location} post={post}>
          <div className="entry-media">
            <Image img={img} />
          </div>
        </WithLink>
      )}
    </Fragment>
  )
}

export default PostEntryMedia
