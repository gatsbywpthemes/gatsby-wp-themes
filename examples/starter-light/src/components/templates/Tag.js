import React from "react"
import { ArchiveContent } from "../archive"
import { Layout } from "../../components/Layout"
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
      <ArchiveContent
        posts={posts.nodes}
        ctx={ctx}
        name={name}
        description={description}
      />
    </Layout>
  )
}

export default Tag
