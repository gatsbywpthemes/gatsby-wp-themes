import React from "react"
import { Layout } from "~/components/Layout"
import { Link } from "gatsby"

const Category = ({ category, ctx }) => {
  const { name, posts, uri, description } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx
  return (
    <Layout page={category} type="category">
      <h1>Posts for: {name}</h1>
      {posts?.nodes?.map((post) => {
        return (
          <h2 key={post.id}>
            <Link to={`${post.uri}`}>{post.title}</Link>
          </h2>
        )
      })}
    </Layout>
  )
}

export default Category
