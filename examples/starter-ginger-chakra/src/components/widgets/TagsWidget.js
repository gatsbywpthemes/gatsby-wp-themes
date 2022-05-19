import React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { Flex, chakra } from '@chakra-ui/react'
import { WidgetContainer } from 'gingerThemeComponents'

const ALL_TAGS_QUERY = graphql`
  query GetAllTags {
    allWpTag(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        count
        uri
      }
    }
  }
`

export const TagsWidget = () => {
  const {
    allWpTag: { nodes },
  } = useStaticQuery(ALL_TAGS_QUERY)
  return (
    !!nodes.length && (
      <WidgetContainer className="widget widget-tags" title="Tags">
        <Flex as="ul" wrap="wrap" textStyle="listRaw">
          {nodes.map((tag) => (
            <chakra.li key={tag.slug} textStyle="separateWithMiddots">
              <chakra.a
                as={GatsbyLink}
                textStyle="special"
                fontWeight="bold"
                to={tag.uri}
              >
                {tag.name} ({tag.count})
              </chakra.a>
            </chakra.li>
          ))}
        </Flex>
      </WidgetContainer>
    )
  )
}
