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
  const {
    title,
    excerpt,
    slug,
    featuredImage,
    uri,
    template: { templateName },
  } = post
  const media = featuredImage
    ? featuredImage.remoteFile.childImageSharp.fluid.src
    : null
  const { layoutWidth } = useThemeOptions()
  const { disqus, addWordPressComments, sidebarWidgets } = useThemeOptions()

  const pageTemplate = templateName.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.post }

  const sidebarSide = sidebarPage
    ? pageTemplate === `left sidebar`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, layoutWidth.page] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, layoutWidth.page] } }
      : ''
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
        ogUrl={normalize(`/${uri}`)}
      />
      <Container sx={{ ...containerStyles }} className="mainContainer">
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <PostEntry post={post} location="single" />
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
        {addWordPressComments && post.commentStatus === 'open' && (
          <Container sx={{ maxWidth: layoutWidth.post }}>
            {disqus ? (
              <DiscussionEmbed {...disqusConfig} />
            ) : (
              <CommentsList post={post} />
            )}
          </Container>
        )}
      </Container>
    </Layout>
  )
}

export default Post
