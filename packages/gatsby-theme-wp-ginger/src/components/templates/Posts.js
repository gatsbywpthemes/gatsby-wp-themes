import React from 'react'
import Layout from '../Layout.js'
import { ArchiveContent } from '../archive'
import { SeoBlog } from 'gatsby-plugin-wp-seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Posts = ({ posts, ctx }) => {
  const { pageNumber } = ctx
  const { postsPath } = useThemeOptions()
  return (
    <Layout>
      <SeoBlog pageNumber={pageNumber} uri={postsPath} />
      <ArchiveContent posts={posts} paginationPrefix={postsPath} ctx={ctx} />
    </Layout>
  )
}

export default Posts
