import { chakra, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === 'single' ? (
        <chakra.h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <chakra.h2 className="entry-title" {...props}>
          <ChakraLink
            as={Link}
            to={`${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </chakra.h2>
      )}
    </>
  )
}
