/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { widgetCategoriesStyles } from '../../styles'

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    allWpCategory(limit: 100) {
      nodes {
        name
        slug
        uri
        count
      }
    }
  }
`

export const CategoriesWidget = () => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  const nonEmptyCategories = nodes.filter((el) => el.count)
  return (
    <section
      sx={{ ...widgetCategoriesStyles }}
      className="widget widget-categories"
    >
      <h2 className="widget-title">Categories</h2>
      <ul>
        {nonEmptyCategories.length
          ? nonEmptyCategories.map((category) => (
              <li key={category.slug}>
                <Link to={category.uri}>{category.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}
