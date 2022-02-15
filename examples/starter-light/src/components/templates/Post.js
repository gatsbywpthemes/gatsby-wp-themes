import React from "react"
import { Layout } from "~/components/Layout"
import { PostEntry } from "~/components/post/PostEntry"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Post = ({ post, ctx }) => {
  const { title, uri } = post

  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp?.original
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
      <PostEntry location="single" post={post} ctx={ctx} />
    </Layout>
  )
}

export default Post
