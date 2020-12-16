import React from 'react'
import { Link } from 'gatsby'
import { Image } from '../images'

const WithLink = ({ uri, children, location }) =>
  location === 'single' ? (
    children
  ) : (
    <Link to={uri} aria-label="View the entire post">
      {children}
    </Link>
  )

export const PostEntryMedia = ({
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
