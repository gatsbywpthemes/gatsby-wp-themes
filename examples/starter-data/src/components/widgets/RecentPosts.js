/** @jsx jsx */
import { jsx } from 'theme-ui'
import { widgetStyles } from '../../styles'

import { Link, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
import normalize from 'normalize-path'

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

export const RecentPosts = (props) => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)

  const { nodes } = data.allWpPost
  return (
    <section
      sx={{ ...widgetStyles.recentPosts }}
      className="widget widget-recent-posts"
      {...props}
    >
      <h2 className="widget-title">Recent Posts</h2>
      <ul>
        {nodes.length
          ? nodes.map((post) => {
              const uri = normalize(`${post.uri}`)
              return (
                <li key={post.id}>
                  <Link aria-label={`Read more - ${post.title}`} to={uri}>
                    {post.featuredImage && (
                      <Img
                        alt={post.featuredImage.node.altText}
                        fixed={
                          post.featuredImage.node.localFile.childImageSharp
                            .fixed
                        }
                      />
                    )}
                  </Link>
                  <div className="textual">
                    <Link className="widget-post-date" to={uri}>
                      <time className="entry-date" dateTime={post.date}>
                        {moment(post.date).format(`MMMM DD, YYYY`)}
                      </time>
                    </Link>
                    <Link className="widget-post-title" to={uri}>
                      {post.title}
                    </Link>
                  </div>
                </li>
              )
            })
          : null}
      </ul>
    </section>
  )
}
