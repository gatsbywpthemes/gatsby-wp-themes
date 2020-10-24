import React from 'react'
import Layout from '../Layout.js'
import { ArchiveContent } from '../archive'
import { Seo } from 'gatsby-plugin-wp-seo'
import { useThemeOptions } from 'gatsby-theme-blog-data/src/hooks'

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx
  const { postsPath } = useThemeOptions()
  return (
    <Layout>
      <Seo
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        title={title}
        uri={postsPath}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <ArchiveContent posts={posts} ctx={ctx} />
    </Layout>
  )
}

export default Posts
