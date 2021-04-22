import React from 'react'
import { Layout } from '../Layout'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { PostEntry, CommentsList, Sidebar } from '../index'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

const Post = ({ post, ctx }) => {
  const {
    title,
    slug,
    uri,
    template: { templateName },
  } = post
  const featuredImage = post.featuredImage?.node.localFile.childImageSharp.fluid

  const { addWordPressComments, sidebarWidgets } = useThemeOptions()

  const pageTemplate = templateName.toLowerCase()
  const sidebarPage = pageTemplate.includes('sidebar')

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
          <PostEntry post={post} location="single" ctx={ctx} isFirst={true} />
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </div>
        {addWordPressComments && post.commentStatus === 'open' && (
          <div>
            <CommentsList post={post} />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Post
