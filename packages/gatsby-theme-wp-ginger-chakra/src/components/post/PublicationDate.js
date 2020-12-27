import React from 'react'
import { Date } from 'gingerThemeComponents'
import { Link } from 'gatsby'
import { chakra } from '@chakra-ui/react'

const ChakraLink = chakra(Link)

export const PublicationDate = ({ post, location = 'archive' }) => {
  return location === 'archive' ? (
    <>
      {post.date && (
        <ChakraLink
          textStyle="specialLinkUnderline"
          mb="4"
          className="meta-data"
          to={post.uri}
        >
          <Date date={post.date} />
        </ChakraLink>
      )}
    </>
  ) : (
    <>
      {post.date && (
        <chakra.span textStyle="special" mb="4" className="meta-data">
          / <Date date={post.date} /> /
        </chakra.span>
      )}
    </>
  )
}
