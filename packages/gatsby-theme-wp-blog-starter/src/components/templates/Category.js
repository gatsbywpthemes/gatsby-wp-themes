import React from 'react'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import ArchiveContent from '../archive/ArchiveContent'

const Category = ({ category, ctx }) => {
  const { name, posts, slug } = category
  const { pageNumber } = ctx
  const url = `category/${slug}/`

  return (
    <Layout page={category} type="category">
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />

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
