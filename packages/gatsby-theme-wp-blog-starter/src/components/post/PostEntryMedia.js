/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'gatsby'
import { Image } from '../images'

const WithLink = ({ post, location, children }) =>
  location === 'single' ? (
    children
  ) : (
    <Link to={`${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

export const PostEntryMedia = ({ post, location, ...props }) => {
  const img = post.featuredImage

  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          <div className="entry-media" {...props}>
            <Image img={img} />
          </div>
        </WithLink>
      )}
    </>
  )
}
