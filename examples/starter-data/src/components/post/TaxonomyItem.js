/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const TaxonomyItem = ({ taxName, item }) => (
  <button sx={{ variant: `buttons.primary.small`, mr: `xxs`, mb: `xs` }}>
    <Link
      to={`/${taxName}/${item.slug}`}
      key={item.id}
      aria-label={`visit ${taxName} ${item.name} page`}
    >
      {item.name}
    </Link>
  </button>
)

export default TaxonomyItem
