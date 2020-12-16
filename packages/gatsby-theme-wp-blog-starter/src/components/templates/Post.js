/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { Layout } from '../Layout'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { PostEntry, CommentsList, Sidebar } from '../index'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { useLayoutStyles } from '../../utils'

const Post = ({ post, ctx }) => {
  const {
    title,
    slug,
    uri,
    template: { templateName },
  } = post
  const featuredImage = post.featuredImage?.node.localFile.childImageSharp.fluid

  const { disqus, addWordPressComments } = useThemeOptions()

  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
    layoutWidth,
  } = useLayoutStyles('post', templateName)

  const disqusConfig = {
    shortname: disqus,
    config: { identifier: slug, title },
  }
  return (
    <Layout page={post} type="post">
      <Seo
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <Container sx={{ ...containerStyles }} className="mainContainer">
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
