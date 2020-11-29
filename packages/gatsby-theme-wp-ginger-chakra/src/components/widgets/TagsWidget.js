import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { WidgetContainer } from './index'
import { Flex, ListItem, chakra } from '@chakra-ui/react'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(limit: 100) {
      nodes {
        name
        slug
        count
        uri
      }
    }
  }
`

const ChakraLink = chakra(Link)

export const TagsWidget = () => {
  const {
    allWpTag: { nodes },
  } = useStaticQuery(ALL_TAGS_QUERY)
  const nonEmptyTags = nodes.filter((el) => el.count)
  return (
    nonEmptyTags.length && (
      <WidgetContainer
        className="widget widget-tags"
        title="Tags"
        sx={{
          'li:not(:last-of-type) a:after': {
            content: '"·"',
            p: 1,
          },
        }}
      >
        <Flex as="ul" wrap="wrap" textStyle="listRaw">
          {nonEmptyTags.map((tag) => (
            <ListItem key={tag.slug}>
              <ChakraLink textStyle="special" fontWeight="bold" to={tag.uri}>
                {tag.name} ({tag.count})
              </ChakraLink>
            </ListItem>
          ))}
        </Flex>
      </WidgetContainer>
    )
  )
}
