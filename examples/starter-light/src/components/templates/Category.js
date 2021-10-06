import React from "react"
import { Layout } from "../../components/Layout"
import { ArchiveContent } from "../archive"

const Category = ({ category, ctx }) => {
  const { name, posts, uri, description } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={category} type="category">
      <div className="center-container">
        <ArchiveContent
          posts={posts.nodes}
          ctx={ctx}
          name={name}
          description={description}
        />
      </div>
    </Layout>
  )
}

export default Category
