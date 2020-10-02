import React from 'react'
import Layout from '../Layout.js'
import { ArchiveContent } from '../archive'
import { SeoBlog } from 'gatsby-plugin-wp-seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Posts = ({ posts, ctx }) => {
  console.log(ctx)
  const { humanPageNumber, numberOfPages, title, seo } = ctx
  const { postsPath } = useThemeOptions()
  return (
    <Layout>
      <SeoBlog
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        title={title}
        uri={postsPath}
        seo={seo}
      />
      <ArchiveContent posts={posts} paginationPrefix={postsPath} ctx={ctx} />
    </Layout>
  )
}

export default Posts
