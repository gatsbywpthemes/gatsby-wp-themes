import React from "react"
import { BorderTitle } from "baseUiComponents"
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
        <BorderTitle as="h2" className="widget-title" mt={2} mb={5}>
          Categories
        </BorderTitle>
        <div align="flex-start" className="flex flex-col items-start space-y-3">
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
