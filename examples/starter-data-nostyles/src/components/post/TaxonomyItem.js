/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Link
    to={`${item.uri}`}
    aria-label={`visit ${taxName} ${item.name} page`}
    sx={{ mr: `xxs`, mb: `xs`, variant: `buttons.primary.small` }}
  >
    {item.name}
  </Link>
)
