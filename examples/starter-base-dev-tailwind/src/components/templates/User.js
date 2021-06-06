import React from 'react'
import { Layout, ArchiveContent } from 'baseComponents'
import { Seo } from '@gatsbywpthemes/gatsby-plugin-wp-seo'

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={user} type="user">
      <Seo
        title={`Author Archives: ${name}`}
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

export default User
