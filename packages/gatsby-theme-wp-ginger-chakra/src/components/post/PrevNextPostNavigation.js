import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Link } from '@chakra-ui/react'

const PreviousLink = ({ ctx: { prev } }) => {
  return prev ? (
    <Link as={GatsbyLink} textStyle="specialLeft" to={prev}>
      Previous
    </Link>
  ) : (
    <span />
  )
}

const NextLink = ({ ctx: { next } }) => {
  return next ? (
    <Link as={GatsbyLink} textStyle="specialRight" to={next}>
      Up Next
    </Link>
  ) : (
    <span />
  )
}

export const PrevNextPostNavigation = ({ ctx }) => {
  return (
    <Flex as="nav" justify="space-between" mt="8">
      <PreviousLink ctx={ctx} />
      <NextLink ctx={ctx} />
    </Flex>
  )
}
