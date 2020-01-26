import React from 'react'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import ArchiveContent from '../archive/ArchiveContent'

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { pageNumber } = ctx

  return (
    <Layout page={tag} type="tag">
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

export default Tag
