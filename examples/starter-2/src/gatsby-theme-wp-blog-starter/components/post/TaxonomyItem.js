/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { Link } from 'gatsby'

const TaxonomyItem = ({ taxName, item, key }) => (
  <Button
    variant="primary.gradient.small"
    sx={{ mr: `xxs`, mb: `xs` }}
    key={key}
  >
    <Link
      to={`/${item.uri}`}
      key={item.id}
      aria-label={`visit ${taxName} ${item.name} page`}
    >
      {item.name}
    </Link>
  </Button>
)

export default TaxonomyItem
