import React from 'react'
import { Link } from 'gatsby'

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Link to={`${item.uri}`} aria-label={`visit ${taxName} ${item.name} page`}>
    {item.name}
  </Link>
)
