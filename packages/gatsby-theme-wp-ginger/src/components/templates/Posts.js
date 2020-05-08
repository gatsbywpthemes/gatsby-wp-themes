import React from 'react'
import Layout from '../Layout.js'
import { ArchiveContent } from '../archive'
import SEO from '../seo/Seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'
import slashes from 'remove-trailing-slash'

const Posts = ({ posts, ctx }) => {
  const { pageNumber } = ctx
  const { postsPath } = useThemeOptions()
  const ogType = slashes(postsPath) === '' ? 'website' : 'object'
  return (
    <Layout>
      <SEO
        titleTemplate={'withDescription'}
        pageNumber={pageNumber}
        ogType={ogType}
        ogUrl={postsPath}
      />
      <ArchiveContent posts={posts} paginationPrefix={postsPath} ctx={ctx} />
    </Layout>
  )
}

export default Posts
