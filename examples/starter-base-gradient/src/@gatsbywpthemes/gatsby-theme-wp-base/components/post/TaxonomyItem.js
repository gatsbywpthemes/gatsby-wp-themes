import React from "react"
import { Button } from "@chakra-ui/react"
import { Link } from "gatsby"

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Button
    as={Link}
    to={`${item.uri}`}
    size="sm"
    variant="gradientYellow"
    mr={3}
    mb={[3, 0]}
    aria-label={`visit ${taxName} ${item.name} page`}
    {...props}
  >
    {item.name}
  </Button>
)
