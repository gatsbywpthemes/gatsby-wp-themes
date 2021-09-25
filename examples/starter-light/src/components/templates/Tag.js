import React from "react"
import { Layout } from "../../components/Layout"

const Category = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={tag} type="tag">
      <h1>posts from {name}</h1>
    </Layout>
  )
}

export default Category
