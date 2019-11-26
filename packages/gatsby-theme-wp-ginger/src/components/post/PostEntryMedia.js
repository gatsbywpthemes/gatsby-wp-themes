/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import Image from '../images/Image'
import normalize from 'normalize-path'

const WithLink = ({ uri, children, postsPrefix, location }) =>
  location === 'single' ? (
    children
  ) : (
    <Link
      to={normalize(`/${postsPrefix}/${uri}`)}
      aria-label="View the entire post"
      sx={{
        variant: 'article.media',
      }}
    >
      {children}
    </Link>
  )

const PostEntryMedia = ({
  post: { featuredImage, uri },
  postsPrefix,
  location = 'archive',
}) => {
  return (
    <>
      {!!featuredImage && (
        <WithLink location={location} uri={uri} postsPrefix={postsPrefix}>
          <Image img={featuredImage} />
        </WithLink>
      )}
    </>
  )
}

export default PostEntryMedia
