/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { SeoArchive } from 'gatsby-plugin-wp-seo'

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { humanPageNumber, numberOfPages, seo } = ctx

  return (
    <Layout>
      <SeoArchive
        title={`Author Archives: ${name}`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        seo={seo}
      />
      <ArchiveContent
        name={name}
        text={'Posts by:'}
        posts={posts}
        paginationPrefix={uri}
        ctx={ctx}
      />
    </Layout>
  )
}

export default User
