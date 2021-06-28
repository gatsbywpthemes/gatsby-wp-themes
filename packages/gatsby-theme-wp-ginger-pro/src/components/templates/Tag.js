import React from 'react'
import { ArchiveContent, Layout } from 'gingerThemeComponents'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

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
        ctx={ctx}
      />
    </Layout>
  )
}

export default Tag
