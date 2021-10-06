import React from "react"
import { Layout } from "../Layout"
import { PostEntry } from "../post"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import parse from "html-react-parser"

const Post = ({ post, ctx }) => {
  const { title, uri, headlesswp, seo } = post
  const yoastHead = parse(seo.schema.raw)
  console.log("yoast", yoastHead)
  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp.original
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
