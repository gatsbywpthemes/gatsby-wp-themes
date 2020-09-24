/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from './../Layout'
import { ArchiveContent } from '../archive'
import { SeoArchive } from 'gatsby-plugin-wp-seo'

const Tag = ({ tag, ctx }) => {
  const { name, posts, uri } = tag
  const { pageNumber } = ctx

  return (
    <Layout>
      <SeoArchive
        title={`${name} Archives`}
        pageNumber={pageNumber}
        uri={uri}
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
