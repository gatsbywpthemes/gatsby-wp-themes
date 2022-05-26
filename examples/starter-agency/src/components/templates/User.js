import React from "react"
import { Layout } from "~/components/Layout"
import { Link } from "gatsby"
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
      <h1>Posts from: {name}</h1>
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

export default User
