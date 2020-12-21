import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { chakra } from '@chakra-ui/react'
import { WidgetContainer } from './index'

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

const ChakraLink = chakra(Link)

export const CategoriesWidget = () => {
  const {
    allWpCategory: { nodes },
  } = useStaticQuery(ALL_CATEGORIES_QUERY)
  const nonEmptyCategories = nodes.filter((el) => el.count)
  return (
    nonEmptyCategories.length && (
      <WidgetContainer title="Categories" className="widget widget-categories">
        <chakra.ul textStyle="listRaw">
          {nonEmptyCategories.map((category) => (
            <li key={category.slug}>
              <ChakraLink
                textStyle="special"
                fontWeight="bold"
                to={category.uri}
              >
                {category.name}
              </ChakraLink>
            </li>
          ))}
        </chakra.ul>
      </WidgetContainer>
    )
  )
}
