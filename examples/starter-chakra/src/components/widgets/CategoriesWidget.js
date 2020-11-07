import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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

export const CategoriesWidget = (props) => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  const nonEmptyCategories = nodes.filter((el) => el.count)
  return (
    <section className="widget widget-categories" {...props}>
      <h2 className="widget-title">Categories</h2>
      <ul>
        {nonEmptyCategories.length
          ? nonEmptyCategories.map((category) => (
              <li key={category.slug}>
                <Link to={`${category.uri}`}>{category.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}
