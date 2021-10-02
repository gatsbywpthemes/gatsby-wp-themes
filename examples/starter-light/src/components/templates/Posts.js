import React from "react"
import { Layout } from "../Layout"

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx

  return (
    <Layout page="blog">
      <div className="center-container">
        <h1>Title</h1>
      </div>
    </Layout>
  )
}

export default Posts
