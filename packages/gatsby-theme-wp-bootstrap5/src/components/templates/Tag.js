import React from 'react'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { Seo } from 'gatsby-plugin-wp-seo'

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout>
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <ArchiveContent
        name={name}
        text={'Posts tagged as:'}
        posts={posts}
        paginationPrefix={uri}
        ctx={ctx}
      />
    </Layout>
  )
}

export default Tag