import React from 'react'
import { Layout } from '../Layout'
import SEO from '../seo/Seo'
import { ArchiveContent } from '../archive'

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { pageNumber } = ctx

  return (
    <Layout page={category} type="category">
      <SEO
        title={`${name} Archives`}
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

export default Category
