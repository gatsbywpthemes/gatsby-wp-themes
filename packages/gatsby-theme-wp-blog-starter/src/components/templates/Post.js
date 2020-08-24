/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { Layout } from '../Layout'
import { SEO } from '../seo'
import { PostEntry, CommentsList, Sidebar } from '../index'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import normalize from 'normalize-path'

const Post = ({ post, ctx }) => {
  const {
    title,
    excerpt,
    slug,
    featuredImage,
    uri,
    template: { templateName },
  } = post
  const media = featuredImage
    ? featuredImage.node.localFile.childImageSharp.fluid.src
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
      <Container
        sx={{ ...containerStyles, maxWidth: (theme) => theme.sizes.container }}
        className="mainContainer"
      >
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <PostEntry post={post} location="single" ctx={ctx} />
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
