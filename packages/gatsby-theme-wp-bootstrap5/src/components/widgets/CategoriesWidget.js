import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { WidgetContainer } from './index'

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    allWpCategory(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        uri
      }
    }
  }
`

export const CategoriesWidget = () => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  return (
    !!nodes.length && (
      <WidgetContainer className="widget-categories">
        <h2 className="widget-title h4">Categories</h2>
        <ul className="list-group list-group-flush">
          {nodes.map((category) => (
            <li
              className="list-group-item bg-transparent d-flex justify-content-between align-items-center ps-0"
              key={category.slug}
            >
              <Link
                className="text-decoration-none text-dark"
                to={category.uri}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </WidgetContainer>
    )
  )
}
