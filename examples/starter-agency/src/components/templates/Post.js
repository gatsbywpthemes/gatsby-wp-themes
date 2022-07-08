import React from "react"
import { Layout } from "~/components/Layout"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { PostEntry } from "~/components/post/PostEntry"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"

const Post = ({ post, ctx }) => {
  const { title, uri } = post
  const { addWordPressComments } = useThemeOptions()
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
      {addWordPressComments && <Comments post={post} />}
    </Layout>
  )
}

export default Post
