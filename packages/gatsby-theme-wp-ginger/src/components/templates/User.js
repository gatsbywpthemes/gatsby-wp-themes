/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { Seo } from '../seo'

const User = ({ user, ctx }) => {
  const { name, posts, uri } = user
  const { pageNumber } = ctx

  return (
    <Layout>
      <Seo
        title={`Author Archives: ${name}`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={uri}
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
