/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import Image from '../images/Image'
import normalize from 'normalize-path'
import { media } from '../../styles/card'

const WithLink = ({ uri, children, location }) =>
  location === 'single' ? (
    children
  ) : (
    <Link
      to={normalize(`/${uri}`)}
      aria-label="View the entire post"
      sx={media}
    >
      {children}
    </Link>
  )

const PostEntryMedia = ({
  post: { featuredImage, uri },

  location = 'archive',
}) => {
  return (
    <>
      {!!featuredImage && (
        <WithLink location={location} uri={uri}>
          <Image img={featuredImage} />
        </WithLink>
      )}
    </>
  )
}

export default PostEntryMedia
