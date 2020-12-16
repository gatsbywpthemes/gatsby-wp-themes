import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
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
                  className="mr-3"
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
                </Link>
                <small className="textual">
                  <Link
                    className="widget-post-date text-decoration-none text-reset"
                    to={post.uri}
                  >
                    <time className="entry-date" dateTime={post.date}>
                      {moment(post.date).format(`MMMM DD, YYYY`)}
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
