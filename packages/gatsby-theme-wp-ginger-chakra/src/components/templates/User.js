import React from 'react'
import { ArchiveContent, Layout } from 'gingerThemeComponents'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout>
      <Seo
        title={`Author Archives: ${name}`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
      />
      <ArchiveContent name={name} text={'Posts by:'} posts={posts} ctx={ctx} />
    </Layout>
  )
}

export default User
