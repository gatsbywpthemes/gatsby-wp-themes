import React from "react"
import { Layout } from "~/components/Layout"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"

const Post = ({ post, ctx }) => {
  return (
    <Layout page={post} type="post">
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Comments post={post} />
    </Layout>
  )
}

export default Post
