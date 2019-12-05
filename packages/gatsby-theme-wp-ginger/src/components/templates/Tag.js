/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import ArchiveContent from '../archive/ArchiveContent'
import SEO from '../seo/Seo'

const Tag = ({ tag, ctx }) => {
  const { name, posts, slug } = tag
  const { pageNumber } = ctx
  const url = `tag/${slug}/`

  return (
    <Layout>
      <SEO
        title={`${name} Archives`}
        pageNumber={pageNumber}
        ogType="object"
        ogUrl={url}
      />
      <ArchiveContent
        name={name}
        text={'Posts tagged as:'}
        posts={posts}
        paginationPrefix={url}
        ctx={ctx}
      />
    </Layout>
  )
}

export default Tag
