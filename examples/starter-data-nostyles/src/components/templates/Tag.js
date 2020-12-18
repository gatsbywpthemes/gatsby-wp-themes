import React from 'react'
import { Layout } from '../Layout'
import { ArchiveContent } from '../archive'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={tag} type="tag">
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
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
