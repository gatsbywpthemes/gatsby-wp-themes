import { Box, Heading } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === 'single' ? (
        <Heading
          as="h1"
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <Heading as="h2" className="entry-title" {...props}>
          <Link to={`${uri}`} dangerouslySetInnerHTML={{ __html: title }} />
        </Heading>
      )}
    </>
  )
}
