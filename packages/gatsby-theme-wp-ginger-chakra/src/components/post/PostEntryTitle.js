import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@chakra-ui/react'

export const PostEntryTitle = ({ post, location }) => {
  return location === 'archive' ? (
    <h2 className="entry-title">
      <Link to={post.uri} dangerouslySetInnerHTML={{ __html: post.title }} />
    </h2>
  ) : (
    <Box
      as="h1"
      className="entry-title"
      mb="4"
      fontSize="5xl"
      dangerouslySetInnerHTML={{ __html: post.title }}
    />
  )
}
