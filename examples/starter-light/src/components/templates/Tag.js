import React from "react"
import { ArchiveContent } from "../archive"
import { Layout } from "../../components/Layout"

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri, description } = tag
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={tag} type="tag">
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

export default Tag
