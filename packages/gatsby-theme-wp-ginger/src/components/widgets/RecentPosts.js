/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
import { widgetRecentPosts } from '../../styles/widget'

const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        uri
        date

        featuredImage {
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
`

export const RecentPosts = () => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const { nodes } = data.allWpPost
  return (
    <section
      sx={{ ...widgetRecentPosts }}
      className="widget widget-recent-posts"
    >
      <h2 className="widget-title">Recent Posts</h2>
      <ul>
        {nodes.length
          ? nodes.map(post => {
              return (
                <li key={post.id}>
                  <Link aria-label={`Read more - ${post.title}`} to={post.uri}>
                    {post.featuredImage && (
                      <Img
                        alt={post.featuredImage.altText}
                        fixed={
                          post.featuredImage.localFile.childImageSharp.fixed
                        }
                      />
                    )}
                  </Link>
                  <div className="textual">
                    <Link className="widget-post-date" to={post.uri}>
                      <time className="entry-date" dateTime={post.date}>
                        {moment(post.date).format(`MMMM DD, YYYY`)}
                      </time>
                    </Link>
                    <Link
                      className="widget-post-title"
                      to={post.uri}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  </div>
                </li>
              )
            })
          : null}
      </ul>
    </section>
  )
}
