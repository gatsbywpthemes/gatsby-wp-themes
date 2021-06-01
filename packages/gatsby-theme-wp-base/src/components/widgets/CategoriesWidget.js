import React from 'react'
import { VStack, Link as ChakraLink } from '@chakra-ui/react'
import { BorderTitle } from 'baseUiComponents'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
        <VStack align="flex-start">
          {nodes.map((category) => (
            <ChakraLink as={Link} key={category.slug} to={`${category.uri}`}>
              {category.name}
            </ChakraLink>
          ))}
        </VStack>
      </section>
    )
  )
}
