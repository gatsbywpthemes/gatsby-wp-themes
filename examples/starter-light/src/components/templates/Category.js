import React from "react"
import { Layout } from "../../components/Layout"

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={category} type="category">
      <h1>posts from {name}</h1>
    </Layout>
  )
}

export default Category
