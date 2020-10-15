import React from 'react'
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

  const { disqus, addWordPressComments, sidebarWidgets } = useThemeOptions()

  const pageTemplate = templateName.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')

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
      <div className="mainContainer">
        <div>
          <PostEntry post={post} location="single" ctx={ctx} />
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </div>
        {addWordPressComments && post.commentStatus === 'open' && (
          <div>
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
