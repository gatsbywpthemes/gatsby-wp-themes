import React from "react"
import { VStack, HStack, Box, Link as ChakraLink } from "@chakra-ui/react"
import { BorderTitle } from "baseUiComponents"

import { Link, useStaticQuery, graphql } from "gatsby"
import { format } from "date-fns"
import { GatsbyImage } from "gatsby-plugin-image"
import normalize from "normalize-path"

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
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 72
                  height: 48
                  quality: 80
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`

export const RecentPosts = (props) => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)

  const { nodes } = data.allWpPost
  return (
    <section className="widget widget-recent-posts" {...props}>
      <BorderTitle as="h2" mt={2} mb={5} className="widget-title">
        Recent Posts
      </BorderTitle>
      <VStack spacing={5} align="flex-start">
        {nodes.length
          ? nodes.map((post) => {
              const uri = normalize(`${post.uri}`)
              return (
                <HStack spacing={4} key={post.id}>
                  <Link aria-label={`Read more - ${post.title}`} to={uri}>
                    {post.featuredImage && (
                      <GatsbyImage
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={post.featuredImage.node.altText}
                      />
                    )}
                  </Link>{" "}
                  <Box>
                    <Box
                      as="time"
                      display="block"
                      textStyle="special"
                      fontWeight="bold"
                      className="widget-post-date entry-date"
                      dateTime={post.date}
                    >
                      {format(new Date(post.date), "MMMM dd, yyyy")}
                    </Box>{" "}
                    <ChakraLink
                      as={Link}
                      className="widget-post-title"
                      to={uri}
                    >
                      {post.title}
                    </ChakraLink>
                  </Box>
                </HStack>
              )
            })
          : null}
      </VStack>
    </section>
  )
}
