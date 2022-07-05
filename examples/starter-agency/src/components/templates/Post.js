import React from "react"
import { Layout } from "~/components/Layout"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { PostEntry } from "~/components/post/PostEntry"

const Post = ({ post, ctx }) => {
  const {
    title,
    content,
    uri,
    headlesswp,
    layoutBlocks: { blocks },
    author,
    categories,
    tags,
  } = post

  const { avatar: authorPic, name: authorName, uri: authorUri } = author.node

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
      <PostEntry post={post} ctx={ctx} />
      <Comments post={post} />
    </Layout>
  )
}

export default Post
