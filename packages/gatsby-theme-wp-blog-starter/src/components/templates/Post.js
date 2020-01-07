/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import PostEntry from '../../components/post/PostEntry'
import CommentsList from '../../components/comments/CommentsList'
import { DiscussionEmbed } from 'disqus-react'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import normalize from 'normalize-path'
import Sidebar from '../Sidebar'

const Post = ({ post }) => {
  const { title, excerpt, slug, featuredImage, uri } = post
  const media = featuredImage
    ? featuredImage.imageFile.childImageSharp.fluid.src
    : null
  const { postsPrefix } = useThemeOptions()
  const {
    disqus,
    addComments,
    widgetAreas: { sidebar },
  } = useThemeOptions()

  const { widgets } = sidebar
  const sidebarSingle = sidebar.location.single
  const sidebarPosition = sidebar.position
  const containerStyles =
    widgets && sidebarSingle
      ? {
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: `l` }

  const sidebarSide =
    widgets && sidebarSingle
      ? sidebarPosition === `left`
        ? {
            flexDirection: `row-reverse`,
            '.entry': { pl: [0, 0, 0, `l`] },
          }
        : { '.entry': { pr: [0, 0, 0, `l`] } }
      : ''
  const disqusConfig = {
    shortname: disqus,
    config: { identifier: slug, title },
  }
  return (
    <Layout page={post} type="post">
      <SEO
        title={title}
        description={excerpt}
        media={media}
        ogType="article"
        ogUrl={normalize(`/${postsPrefix}/${uri}`)}
      />
      <Container sx={{ ...containerStyles }}>
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <PostEntry post={post} location="single" />
          {sidebarSingle && <Sidebar />}
        </Flex>
        {addComments && post.commentStatus === 'open' && (
          <Container sx={{ maxWidth: `l` }}>
            <CommentsList post={post} />
          </Container>
        )}
      </Container>
    </Layout>
  )
}

export default Post
