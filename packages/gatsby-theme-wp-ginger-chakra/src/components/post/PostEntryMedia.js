import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Image } from 'gingerThemeComponents'
import { Link } from '@chakra-ui/react'

export const PostEntryMedia = ({ post: { featuredImage, uri } }) => {
  return (
    !!featuredImage && (
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
        <Image img={featuredImage} />
      </Link>
    )
  )
}
