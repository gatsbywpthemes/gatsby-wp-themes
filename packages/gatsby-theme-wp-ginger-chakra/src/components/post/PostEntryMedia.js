import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Image } from '../images'
import { Link } from '@chakra-ui/react'

const WithLink = ({ uri, children, location }) =>
  location === 'single' ? (
    children
  ) : (
    <Link
      as={GatsbyLink}
      to={uri}
      aria-label="View the entire post"
      sx={{
        overflow: 'hidden',
        img: {
          transition: 'transform 1.6s 0.2s!important',
        },
        'article:hover & img': {
          transform: 'scale(1.1)',
        },
      }}
    >
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
