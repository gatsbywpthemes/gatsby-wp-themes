import React from 'react'
import Layout from '../Layout.js'
import { PostEntryFull } from '../post'
import { Seo } from 'gatsby-plugin-wp-seo'

const Post = (props) => {
  const { post, ctx } = props
  const featuredImage = post.featuredImage?.node.localFile.childImageSharp.fluid
  return (
    <Layout useContainer={false}>
      <Seo
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
        title={post.title}
        uri={post.uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
      />
      <PostEntryFull {...props} />
    </Layout>
  )
}

export default Post
