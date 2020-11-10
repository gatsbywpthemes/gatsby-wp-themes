/** @jsx jsx */
import { jsx, Button } from '@chakra-ui/core'

import { Link } from 'gatsby'

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Button
    as={Link}
    size="sm"
    aria-label="visit taxonomy page"
    colorScheme="teal"
    mr={3}
    to={`${item.uri}`}
    aria-label={`visit ${taxName} ${item.name} page`}
  >
    {item.name}
  </Button>
)
