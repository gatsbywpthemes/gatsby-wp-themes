import React from "react"
import { Layout } from "~/components/Layout"
import { PostsList, Pagination, Description } from "~/components/archive"
import { PageTitle } from "~/components/ui-components"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri, description } = tag
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx
  return (
    <Layout page={tag} type="tag">
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <PageTitle title={`posts for: ${name}`} className="pb-5" />
      {description && <Description description={description} />}
      <PostsList posts={posts} />
      <Pagination ctx={ctx} />
    </Layout>
  )
}

export default Tag
