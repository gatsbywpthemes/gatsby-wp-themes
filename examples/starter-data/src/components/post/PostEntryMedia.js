import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { Image } from 'starterComponents'

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
          <Box className="entry-media" {...props}>
            <Image img={img} />
          </Box>
        </WithLink>
      )}
    </>
  )
}
