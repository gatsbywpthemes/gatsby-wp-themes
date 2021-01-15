import React from 'react'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const Category = ({ category, ctx }) => {
  const { name, posts, uri } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx
  return (
    <Layout>
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        yoastSeo={yoastSeo}
        seo={seo}
        uri={uri}
      />
      <ArchiveContent name={name} posts={posts} ctx={ctx} />
    </Layout>
  )
}

export default Category
