import React from 'react'
import { chakra, Link } from '@chakra-ui/react'

export const CommentAuthor = ({ name, url }) => {
  return url ? (
    <Link
      textStyle="specialLinkUnderline"
      className="comment-author"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </Link>
  ) : (
    <chakra.span textStyle="special">{name}</chakra.span>
  )
}
