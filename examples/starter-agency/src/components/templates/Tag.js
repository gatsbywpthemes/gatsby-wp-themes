import React from "react"
import { Layout } from "~/components/Layout"
import { Link } from "gatsby"
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
      <h1>Posts for: {name}</h1>
      {posts?.nodes?.map((post) => {
        return (
          <h2 key={post.id}>
            <Link to={`${post.uri}`}>{post.title}</Link>
          </h2>
        )
      })}
    </Layout>
  )
}

export default Tag
