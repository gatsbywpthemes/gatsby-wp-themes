import React from 'react'
import { ArchiveContent, Layout } from 'gingerThemeComponents'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const Category = ({ category, ctx }) => {
  const { name, posts, uri, description } = category
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
      <ArchiveContent
        name={name}
        description={description}
        posts={posts}
        ctx={ctx}
      />
    </Layout>
  )
}

export default Category
