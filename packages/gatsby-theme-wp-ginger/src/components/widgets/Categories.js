/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { widgetCategories } from '../../styles/widget'

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    wp {
      categories(first: 100) {
        nodes {
          name
          slug
        }
      }
    }
  }
`

const CategoriesWidget = () => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { categories } = data.wp
  return (
    <section sx={{ ...widgetCategories }} className="widget widget-categories">
      <h2 className="widget-title">Categories</h2>
      <ul>
        {categories.nodes.length
          ? categories.nodes.map(category => (
              <li key={category.slug}>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}

export default CategoriesWidget
