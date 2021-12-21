import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { format } from 'date-fns'
import { GatsbyImage } from 'gatsby-plugin-image'
import { WidgetContainer } from './index'

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

export const RecentPosts = () => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const { nodes } = data.allWpPost
  return (
    !!nodes.length && (
      <WidgetContainer className="widget-recent-posts">
        <h2 className="widget-title h4">Recent Posts</h2>
        <ul className="list-group list-group-flush">
          {nodes.map((post) => {
            return (
              <li
                className="list-group-item bg-transparent d-flex align-items-center px-0"
                key={post.id}
              >
                <Link
                  className="me-3"
                  aria-label={`Read more - ${post.title}`}
                  to={post.uri}
                >
                  {post.featuredImage && (
                    <GatsbyImage
                      image={
                        post.featuredImage.node.localFile.childImageSharp
                          ?.gatsbyImageData
                      }
                      alt={post.featuredImage.node.altText}
                    />
                  )}
                </Link>
                <small className="textual">
                  <Link
                    className="widget-post-date text-decoration-none text-reset"
                    to={post.uri}
                  >
                    <time className="entry-date" dateTime={post.date}>
                      {format(new Date(post.date), 'MMMM dd, yyyy')}
                    </time>
                  </Link>
                  <br />
                  <Link
                    className="widget-post-title heading-font text-decoration-none text-reset"
                    to={post.uri}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </small>
              </li>
            )
          })}
        </ul>
      </WidgetContainer>
    )
  )
}
