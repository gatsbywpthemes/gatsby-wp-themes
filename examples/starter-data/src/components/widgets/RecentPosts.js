/** @jsx jsx */
import { jsx } from 'theme-ui'
import widgetStyles from '../../styles/widgetStyles'

import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import { Link, useStaticQuery, graphql } from 'gatsby'
import moment from 'moment/moment'
import Img from 'gatsby-image'
import normalize from 'normalize-path'

const RECENT_POSTS_QUERY = graphql`
  query GetRecentPosts {
    wp {
      posts(first: 5) {
        nodes {
          id
          title
          uri
          date
          featuredImage {
            altText
            sourceUrl
            imageFile {
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

const RecentPosts = () => {
  const { postsPrefix } = useThemeOptions()
  const data = useStaticQuery(RECENT_POSTS_QUERY)

  const { posts } = data.wp
  return (
    <section
      sx={{ ...widgetStyles.recentPosts }}
      className="widget widget-recent-posts"
    >
      <h2 className="widget-title">Recent Posts</h2>
      <ul>
        {posts.nodes.length
          ? posts.nodes.map(post => {
              const uri = normalize(`/${postsPrefix}/${post.uri}`)
              return (
                <li key={post.id}>
                  <Link to={uri}>
                    {post.featuredImage && (
                      <Img
                        alt={post.featuredImage.altText}
                        fixed={
                          post.featuredImage.imageFile.childImageSharp.fixed
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

export default RecentPosts
