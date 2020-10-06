/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { Layout } from '../Layout'
import { Seo } from 'gatsby-plugin-wp-seo'
import { PostEntry, CommentsList, Sidebar } from '../index'
import { DiscussionEmbed } from 'disqus-react'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Post = ({ post, ctx }) => {
  const {
    title,
    slug,
    uri,
    template: { templateName },
  } = post
  const featuredImage = post.featuredImage?.node.localFile.childImageSharp.fluid
  const { layoutWidth } = useThemeOptions()
  const { disqus, addWordPressComments, sidebarWidgets } = useThemeOptions()

  const pageTemplate = templateName.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          maxWidth: 'container',
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
          '.entry': { pl: [0, 0, 0, layoutWidth.post] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, layoutWidth.post] } }
      : ''
    : ''
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
      <div sx={{ ...containerStyles }} className="mainContainer">
        <div
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <PostEntry post={post} location="single" ctx={ctx} />
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </div>
        {addWordPressComments && post.commentStatus === 'open' && (
          <div sx={{ maxWidth: layoutWidth.post }}>
            {disqus ? (
              <DiscussionEmbed {...disqusConfig} />
            ) : (
              <CommentsList post={post} />
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Post
