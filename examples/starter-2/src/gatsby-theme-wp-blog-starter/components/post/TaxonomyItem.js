/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { Link } from "gatsby"

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Button
    variant="primary.gradient.small"
    sx={{ mr: `xxs`, mb: `xs` }}
    {...props}
  >
    <Link to={`/${item.uri}`} aria-label={`visit ${taxName} ${item.name} page`}>
      {item.name}
    </Link>
  </Button>
)
