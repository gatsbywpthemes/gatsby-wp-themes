/** @jsx jsx */
import { jsx, Flex } from '@chakra-ui/core'
import { Container } from 'uiComponents'
import { Layout } from '../Layout'
import { Seo } from 'gatsby-plugin-wp-seo'
import { PostEntry, CommentsList, Sidebar } from '../index'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import { useLayoutStyles } from 'utils/hooks'

const Post = ({ post, ctx }) => {
  const {
    title,
    slug,
    uri,
    template: { templateName },
  } = post
  const featuredImage = post.featuredImage?.node.localFile.childImageSharp.fluid
  const {
    containerStyles,
    sidebarSide,
    sidebarPage,
    sidebarWidgets,
  } = useLayoutStyles('post', templateName.toLowerCase())

  const { disqus, addWordPressComments } = useThemeOptions()

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
      <Container className="mainContainer" sx={{ ...containerStyles }}>
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
          <div>
            {disqus ? (
              <DiscussionEmbed {...disqusConfig} />
            ) : (
              <CommentsList post={post} />
            )}
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default Post