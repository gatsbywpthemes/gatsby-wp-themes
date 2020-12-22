import React from 'react'
import { Link } from 'gatsby'
import { Flex, chakra } from '@chakra-ui/react'

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <chakra.a
        as={Link}
        textStyle="specialLeft"
        flex="1"
        to={previousPagePath}
      >
        <span>Previous</span>
      </chakra.a>
    )
  } else {
    return <chakra.span flex="1" />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <chakra.a as={Link} textStyle="specialRight" flex="1" to={nextPagePath}>
        <span>Next</span>
      </chakra.a>
    )
  } else {
    return <chakra.span flex="1" />
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <Flex as="nav" align="center" justify="space-between" overflow="hidden">
      {renderPreviousLink(previousPagePath)}
      <chakra.span
        aria-current="page"
        className="page-numbers current"
        textAlign="center"
        flex="1"
      >
        {humanPageNumber}
      </chakra.span>
      {renderNextLink(nextPagePath)}
    </Flex>
  )
}
