import React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { WidgetContainer } from './index'
import { Flex, chakra } from '@chakra-ui/react'

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

export const TagsWidget = () => {
  const {
    allWpTag: { nodes },
  } = useStaticQuery(ALL_TAGS_QUERY)
  const nonEmptyTags = nodes.filter((el) => el.count)
  return (
    nonEmptyTags.length && (
      <WidgetContainer className="widget widget-tags" title="Tags">
        <Flex as="ul" wrap="wrap" textStyle="listRaw">
          {nonEmptyTags.map((tag) => (
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
