/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import ArchiveContent from '../archive/ArchiveContent'
import SEO from '../seo/Seo'

const User = ({ user, ctx }) => {
  const { name, posts, slug } = user
  const { pageNumber } = ctx
  const url = `author/${slug}/`

  return (
    <Layout relativeUrl={url}>
      <SEO
        title={`Author Archives: ${name}`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />
      <ArchiveContent
        name={name}
        text={'Posts by:'}
        posts={posts}
        paginationPrefix={url}
        ctx={ctx}
      />
    </Layout>
  )
}

export default User
