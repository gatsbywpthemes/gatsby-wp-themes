import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { PostsList } from "~/components/archive/PostsList"
import { Pagination } from "~/components/archive/Pagination"
import { PageTitle } from "~/components/ui-components"

const Category = ({ category, ctx }) => {
  const { name, posts, uri, description } = category
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
      <PageTitle title={`posts for: ${name}`} className="pb-5" />
      <PostsList posts={posts} />
      <Pagination ctx={ctx} />
    </Layout>
  )
}

export default Category
