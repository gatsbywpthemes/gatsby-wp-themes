import React from 'react'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import ArchiveContent from '../archive/ArchiveContent'

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { pageNumber } = ctx

  return (
    <Layout page={user} type="user">
      <SEO
        title={`Author Archives: ${name}`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={uri}
      />

      <ArchiveContent
        posts={posts.nodes}
        ctx={ctx}
        paginationPrefix={uri}
        name={name}
      />
    </Layout>
  )
}

export default User
