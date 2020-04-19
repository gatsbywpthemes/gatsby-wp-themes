/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import widgetStyles from '../../styles/widgetStyles'

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    allWpCategory(limit: 100) {
      nodes {
        name
        slug
        uri
      }
    }
  }
`

const CategoriesWidget = () => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  return (
    <section
      sx={{ ...widgetStyles.categories }}
      className="widget widget-categories"
    >
      <h2 className="widget-title">Categories</h2>
      <ul>
        {nodes.length
          ? nodes.map(category => (
              <li key={category.slug}>
                <Link to={`/${category.uri}`}>{category.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}

export default CategoriesWidget
