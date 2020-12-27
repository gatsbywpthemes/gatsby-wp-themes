import React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
import { Box, Flex, chakra } from '@chakra-ui/react'
import { WidgetContainer } from 'gingerThemeComponents'

const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        uri
        date

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fixed(width: 72, height: 48, quality: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export const RecentPosts = () => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const { nodes } = data.allWpPost
  return (
    nodes.length && (
      <WidgetContainer
        className="widget widget-recent-posts"
        title="Recent Posts"
      >
        <chakra.ul textStyle="listRaw">
          {nodes.map((post) => {
            return (
              <Flex key={post.id} as="li" align="center" mb="4">
                <Box
                  as={GatsbyLink}
                  sx={{
                    '&>*': {
                      verticalAlign: 'middle',
                    },
                  }}
                  mr="3"
                  aria-label={`Read more - ${post.title}`}
                  to={post.uri}
                >
                  {post.featuredImage && (
                    <Img
                      alt={post.featuredImage.node.altText}
                      fixed={
                        post.featuredImage.node.localFile.childImageSharp.fixed
                      }
                    />
                  )}
                </Box>
                <Box>
                  <Box
                    as={GatsbyLink}
                    className="widget-post-date"
                    textStyle="special"
                    d="block"
                    to={post.uri}
                  >
                    <time className="entry-date" dateTime={post.date}>
                      {moment(post.date).format(`MMMM DD, YYYY`)}
                    </time>
                  </Box>
                  <Box
                    as={GatsbyLink}
                    className="widget-post-title"
                    fontFamily="heading"
                    fontSize="lg"
                    to={post.uri}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </Box>
              </Flex>
            )
          })}
        </chakra.ul>
      </WidgetContainer>
    )
  )
}
