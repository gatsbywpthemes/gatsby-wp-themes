import React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { chakra } from '@chakra-ui/react'
import { WidgetContainer } from 'gingerThemeComponents'

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
  const {
    allWpCategory: { nodes },
  } = useStaticQuery(ALL_CATEGORIES_QUERY)
  return (
    !!nodes.length && (
      <WidgetContainer title="Categories" className="widget widget-categories">
        <chakra.ul textStyle="listRaw">
          {nodes.map((category) => (
            <li key={category.slug}>
              <chakra.a
                as={GatsbyLink}
                textStyle="special"
                fontWeight="bold"
                to={category.uri}
              >
                {category.name}
              </chakra.a>
            </li>
          ))}
        </chakra.ul>
      </WidgetContainer>
    )
  )
}
