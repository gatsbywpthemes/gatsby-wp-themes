import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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

export const CategoriesWidget = (props) => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  return (
    !!nodes.length && (
      <section className="widget widget-categories" {...props}>
        <h3 className="widget-title">Categories</h3>
        <div className="flex flex-col items-start space-y-3">
          {nodes.map((category) => (
            <Link key={category.slug} to={`${category.uri}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    )
  )
}
