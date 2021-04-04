import React from "react"
import { VStack, Link as ChakraLink } from "@chakra-ui/react"
import { BorderTitle } from "baseUiComponents"
import { Link, useStaticQuery, graphql } from "gatsby"

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
              <ChakraLink as={Link} key={category.slug} to={`${category.uri}`}>
                {category.name}
              </ChakraLink>
            ))
          : null}
      </VStack>
    </section>
  )
}
