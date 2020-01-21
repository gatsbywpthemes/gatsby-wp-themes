import React from 'react'
import Layout from '../Layout'
import SEO from '../seo/Seo'
import ArchiveContent from '../archive/ArchiveContent'

const Tag = ({ tag, ctx }) => {
  const { name, posts, slug } = tag
  const { pageNumber } = ctx
  const url = `tag/${slug}`
  return (
    <Layout page={tag} type="tag" relativeUrl={url}>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />

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
