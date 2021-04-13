import React from 'react'
import { Layout, ArchiveContent } from 'baseComponents'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'
import { useThemeOptions } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

const Posts = ({ posts, ctx }) => {
  const { humanPageNumber, numberOfPages, title, yoastSeo, seo } = ctx
  const { postsPath } = useThemeOptions()
  return (
    <Layout page="blog">
      <Seo
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        title={title}
        uri={postsPath}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <ArchiveContent posts={posts.nodes} ctx={ctx} />
    </Layout>
  )
}

export default Posts
