import React from "react"
import { Layout } from "~/components/Layout"
import { PostsList, Description, Pagination } from "~/components/archive"
import { PageTitle } from "~/components/ui-components"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const User = ({ user, ctx }) => {
  const { name, posts, uri, description } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx
  return (
    <Layout page={user} type="user">
      <Seo
        title={`Author Archives: ${name}`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <PageTitle title={`posts from: ${name}`} className="pb-5" />
      {description && <Description description={description} />}
      <PostsList posts={posts} />
      <Pagination ctx={ctx} />
    </Layout>
  )
}

export default User
