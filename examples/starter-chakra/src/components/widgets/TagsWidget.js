/** @jsx jsx */
import { jsx, Flex, Box } from '@chakra-ui/core'
import { BorderTitle } from 'uiComponents'
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

export const TagsWidget = (props) => {
  const data = useStaticQuery(ALL_TAGS_QUERY)
  const { nodes } = data.allWpTag
  return (
    nodes.length && (
      <section className="widget widget-tags" {...props}>
        <BorderTitle as="h2" mt={2} mb={5} className="widget-title">
          Tags
        </BorderTitle>
        <Flex justify="center" wrap="wrap">
          {nodes.map((tag, index) => (
            <Box textStyle="special" pr={4} pb={3} key={tag.slug}>
              <Link to={`/tag/${tag.slug}`}>
                {tag.name} ({tag.count})
              </Link>
              {index < nodes.length - 1 && ' · '}
            </Box>
          ))}
        </Flex>
      </section>
    )
  )
}
