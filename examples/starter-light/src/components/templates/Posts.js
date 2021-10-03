import React from "react"
import { ArchiveContent } from "../archive"
import { Layout } from "../Layout"

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx

  return (
    <Layout page="blog">
      <div className="center-container">
        <ArchiveContent posts={posts.nodes} ctx={ctx} />
      </div>
    </Layout>
  )
}

export default Posts
