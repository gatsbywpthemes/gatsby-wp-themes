import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { format } from "date-fns"
import { GatsbyImage } from "gatsby-plugin-image"
import normalize from "normalize-path"
import { WidgetTitle } from "./WidgetTitle"

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
  const { lightBg, ...rest } = props

  return (
    <section className="widget widget-recent-posts" {...rest}>
      <WidgetTitle title="Recent Posts" lightBg={lightBg} />
      <div className="flex flex-col space-y-5 align-start">
        {nodes.length
          ? nodes.map((post) => {
              const uri = normalize(`${post.uri}`)
              return (
                <div className="flex items-center space-x-4" key={post.id}>
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
                  <div>
                    <time
                      className="block text-upper-spaced"
                      dateTime={post.date}
                    >
                      {format(new Date(post.date), "MMMM dd, yyyy")}
                    </time>{" "}
                    <Link
                      className="text-base font-bold widget-post-title hover:text-primary"
                      to={uri}
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              )
            })
          : null}
      </div>
    </section>
  )
}
