import React from "react"
import { Link } from "gatsby"

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Link
    className="mb-3 mr-3"
    to={`${item.uri}`}
    aria-label={`visit ${taxName} ${item.name} page`}
    {...props}
  >
    {item.name}
  </Link>
)
