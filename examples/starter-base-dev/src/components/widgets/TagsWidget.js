import React from 'react'
import { Flex, Box, chakra } from '@chakra-ui/react'
import { BorderTitle } from 'baseUiComponents'
import { Link, useStaticQuery, graphql } from 'gatsby'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(limit: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`

const ChakraLink = chakra(Link)
export const TagsWidget = (props) => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag
  return (
    !!nodes.length && (
      <section className="widget widget-tags" {...props}>
        <BorderTitle as="h2" mt={2} mb={5} className="widget-title">
          Tags
        </BorderTitle>
        <Flex justify="center" wrap="wrap">
          {nodes.map((tag, index) => (
            <Box textStyle="special" pb={3} key={tag.slug}>
              <ChakraLink
                to={`/tag/${tag.slug}`}
                pr={1}
                pl={2}
                d="inline-block"
                _hover={{ color: 'primary' }}
              >
                {tag.name} ({tag.count})
              </ChakraLink>
              {index < nodes.length - 1 && ' · '}
            </Box>
          ))}
        </Flex>
      </section>
    )
  )
}
