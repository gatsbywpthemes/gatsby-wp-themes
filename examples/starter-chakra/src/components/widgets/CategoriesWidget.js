/** @jsx jsx */
import { jsx, VStack, Link as ChakraLink } from '@chakra-ui/core'
import { BorderTitle } from 'uiComponents'
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
      <BorderTitle as="h2" className="widget-title" mt={2} mb={5}>
        Categories
      </BorderTitle>
      <VStack align="flex-start">
        {nonEmptyCategories.length
          ? nonEmptyCategories.map((category) => (
              <ChakraLink
                as={Link}
                textStyle="special"
                key={category.slug}
                to={`${category.uri}`}
              >
                {category.name}
              </ChakraLink>
            ))
          : null}
      </VStack>
    </section>
  )
}