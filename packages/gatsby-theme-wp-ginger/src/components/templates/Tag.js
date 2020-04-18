/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import ArchiveContent from '../archive/ArchiveContent'
import SEO from '../seo/Seo'

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { pageNumber } = ctx

  return (
    <Layout>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={uri}
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
