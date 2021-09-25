import React from "react"
import { Layout } from "../../components/Layout"

const Category = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={user} type="user">
      <h1>posts from {name}</h1>
    </Layout>
  )
}

export default Category
