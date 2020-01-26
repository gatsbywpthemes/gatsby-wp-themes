/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const TaxonomyItem = ({ taxName, item }) => (
  <button>
    <Link
      to={`/${item.uri}`}
      key={item.id}
      aria-label={`visit ${taxName} ${item.name} page`}
    >
      {item.name}
    </Link>
  </button>
)

export default TaxonomyItem
