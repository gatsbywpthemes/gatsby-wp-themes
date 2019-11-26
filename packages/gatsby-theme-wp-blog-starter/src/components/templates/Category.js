import React from 'react'
import Layout from '../Layout'
import SEO from '../Seo'
import ArchiveContent from '../archive/ArchiveContent'

const Category = ({ category, ctx }) => {
  const { name, posts, slug } = category

  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} category`} />

      <ArchiveContent
        posts={posts.nodes}
        ctx={ctx}
        paginationPrefix={`category/${slug}`}
        name={name}
      />
    </Layout>
  )
}

export default Category
