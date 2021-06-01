import React from 'react'
import { Button } from '@chakra-ui/react'

import { Link } from 'gatsby'

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Button
    as={Link}
    size="sm"
    mr={3}
    mb={3}
    to={`${item.uri}`}
    aria-label={`visit ${taxName} ${item.name} page`}
    {...props}
  >
    {item.name}
  </Button>
)
