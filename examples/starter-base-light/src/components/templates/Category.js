import React from "react"
import { Layout } from "../../components/Layout"
import { ArchiveContent } from "../../components/archive"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={category} type="category">
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        yoastSeo={yoastSeo}
        seo={seo}
        uri={uri}
      />
      <ArchiveContent posts={posts.nodes} ctx={ctx} name={name} />
    </Layout>
  )
}

export default Category
