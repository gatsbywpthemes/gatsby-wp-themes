import React from "react"
import { Layout } from "../Layout"

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx

  return (
    <Layout page="blog">
      <h1>posts for {title}</h1>
    </Layout>
  )
}

export default Posts
