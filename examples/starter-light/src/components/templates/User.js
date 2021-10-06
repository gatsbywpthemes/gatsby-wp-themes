import React from "react"
import { Layout } from "../../components/Layout"
import { ArchiveContent } from "../archive"

const User = ({ user, ctx }) => {
  const { name, posts, uri, description } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={user} type="user">
      <div className="center-container">
        <ArchiveContent
          posts={posts.nodes}
          ctx={ctx}
          name={name}
          description={description}
        />
      </div>
    </Layout>
  )
}

export default User
