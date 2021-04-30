import React from 'react'
import { Layout, ArchiveContent } from 'baseComponents'
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

      <ArchiveContent posts={posts.nodes} ctx={ctx} name={name} />
    </Layout>
  )
}

export default Tag
