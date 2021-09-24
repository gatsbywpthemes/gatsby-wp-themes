import React from "react"
import { ArchiveContent } from "../archive"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { Layout } from "../Layout"

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
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

      <ArchiveContent posts={posts.nodes} ctx={ctx} name={name} />
    </Layout>
  )
}

export default User