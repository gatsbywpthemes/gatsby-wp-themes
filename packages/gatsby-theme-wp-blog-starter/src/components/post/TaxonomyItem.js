/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { Link } from 'gatsby'

const TaxonomyItem = ({ taxName, item }) => (
  <Button variant="primary.small" sx={{ mr: `xxs`, mb: `xs` }}>
    <Link to={`/${item.uri}`} aria-label={`visit ${taxName} ${item.name} page`}>
      {item.name}
    </Link>
  </Button>
)

export default TaxonomyItem
