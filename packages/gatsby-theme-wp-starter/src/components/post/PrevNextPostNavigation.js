import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from 'gatsby'

const LinkButton = (props) => (
  <Button
    as={Link}
    variant="ghost"
    size="xs"
    className="prev"
    colorScheme="red"
    textTransform="uppercase"
    letterSpacing="widest"
    {...props}
  />
)
const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <LinkButton to={previousLink} aria-label="visit previous post">
      <span>Previous</span>
    </LinkButton>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <LinkButton aria-label="visit next post" to={`${next}`}>
        <span>Next</span>
      </LinkButton>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <Flex as="nav" justify="space-between" mt={16}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </Flex>
  )
}
