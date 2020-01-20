import React from 'react'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import ArchiveContent from '../archive/ArchiveContent'

const User = ({ user, ctx }) => {
  const { name, posts, slug } = user
  const { pageNumber } = ctx
  const url = `author/${slug}`
  return (
    <Layout page={user} type="user" relativeUrl={url}>
      <SEO
        title={`Author Archives: ${name}`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />

      <ArchiveContent
        posts={posts.nodes}
        ctx={ctx}
        paginationPrefix={`author/${slug}`}
        name={name}
      />
    </Layout>
  )
}

export default User
