import React from "react"
import { Layout } from "~/components/Layout"
import { Link } from "gatsby"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx
  const { postsPath } = useThemeOptions()
  console.log("posts", posts)
  return (
    <Layout page="blog">
      {posts?.nodes?.map((post) => {
        console.log("post", post)
        return (
          <h2 key={post.id}>
            <Link to={`${post.uri}`}>{post.title}</Link>
          </h2>
        )
      })}
    </Layout>
  )
}

export default Posts
