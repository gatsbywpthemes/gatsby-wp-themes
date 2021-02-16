import React from 'react'
import { Layout } from '../Layout'
import { ArchiveContent } from '../archive'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={category} type="category">
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        yoastSeo={yoastSeo}
        seo={seo}
        uri={uri}
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
