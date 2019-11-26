import React from 'react'
import Layout from '../Layout'
import SEO from '../Seo'
import ArchiveContent from '../archive/ArchiveContent'

const User = ({ user, ctx }) => {
  const { name, posts, slug } = user
  return (
    <Layout>
      <SEO title={name} description={`Posts from ${name}`} />

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
