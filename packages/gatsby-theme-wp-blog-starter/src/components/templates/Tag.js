import React from 'react'
import Layout from '../Layout'
import SEO from '../Seo'
import ArchiveContent from '../archive/ArchiveContent'

const Tag = ({ tag, ctx }) => {
  const { name, posts, slug } = tag
  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} tag`} />

      <ArchiveContent
        posts={posts.nodes}
        ctx={ctx}
        paginationPrefix={`tag/${slug}`}
        name={name}
      />
    </Layout>
  )
}

export default Tag
